import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import HamburgerMenu from './HamburgerMenu';
import { useState } from 'react';

interface DipsBreadsDetailPageProps {
  categories: Array<{
    name: string;
    slug: string;
  }>;
}

export default function DipsBreadsDetailPage({ categories }: DipsBreadsDetailPageProps) {
  const { slug } = useParams<{ slug: string }>();
  
  // Set initial selection based on item type
  const getInitialSelection = () => {
    if (slug === 'parmesan-bread-bites' || slug === 'garlic-bites' || slug === 'cinnamon-bites') {
      return '16';
    }
    if (slug === 'stuffed-cheesy-bread') {
      return 'cheesy';
    }
    return 'small';
  };
  
  const [selectedSize, setSelectedSize] = useState<string>(getInitialSelection());

  // Dips & Breads items data
  const dipsBreadsItems = {
    'parmesan-bread-bites': {
      name: "Parmesan Bread Bites",
      image: "/images/dip_breads/F_PBITES.jpg",
      description: "Oven-baked bread bites handmade from fresh buttery-tasting dough and seasoned with garlic and Parmesan.",
      servingSize: "Serving Size: 4-pc",
      pricing: {
        "16": { price: "16 for $8.99", calories: "Cal: 220" },
        "32": { price: "32 for $14.99", calories: "Cal: 220" }
      },
      hasSelection: true,
      selectionType: "circular"
    },
    'garlic-bites': {
      name: "Garlic Bites",
      image: "/images/dip_breads/F_PBITES.jpg",
      description: "Oven-baked bread bites handmade from fresh buttery-tasting dough and seasoned with savory garlic and herbs.",
      servingSize: "Serving Size: 4-pc",
      pricing: {
        "16": { price: "16 for $8.99", calories: "Cal: 210" },
        "32": { price: "32 for $14.99", calories: "Cal: 210" }
      },
      hasSelection: true,
      selectionType: "circular"
    },
    'cinnamon-bites': {
      name: "Cinnamon Bites",
      image: "/images/dip_breads/F_PBITES.jpg",
      description: "Oven-baked bread bites handmade from fresh buttery-tasting dough and seasoned with sweet cinnamon and sugar.",
      servingSize: "Serving Size: 4-pc",
      pricing: {
        "16": { price: "16 for $8.99", calories: "Cal: 240" },
        "32": { price: "32 for $14.99", calories: "Cal: 240" }
      },
      hasSelection: true,
      selectionType: "circular"
    },
    'stuffed-cheesy-bread': {
      name: "Stuffed Cheesy Bread",
      image: {
        cheesy: "/images/dip_breads/F_SCBRD.jpg",
        pepperoni: "/images/dip_breads/F_SCBRD.jpg",
        spinachfeta: "/images/dip_breads/F_SPBRD.jpg",
        baconjalapeno: "/images/dip_breads/F_SBBRD.jpg"
      },
      description: "Oven-baked breadsticks stuffed with cheese and covered in a blend of cheeses made with 100% real mozzarella and cheddar. Seasoned with a touch of garlic.",
      servingSize: "Serving Size: 1-pc",
      pricing: {
        cheesy: { price: "8 for $9.99", calories: "Cal: 140" },
        pepperoni: { price: "8 for $9.99", calories: "Cal: 150" },
        spinachfeta: { price: "8 for $9.99", calories: "Cal: 160" },
        baconjalapeno: { price: "8 for $9.99", calories: "Cal: 170" }
      },
      hasSelection: true,
      selectionType: "variety"
    }
  };

  const item = dipsBreadsItems[slug as keyof typeof dipsBreadsItems];

  // Get current price and calories based on selected size
  const getCurrentInfo = () => {
    if (!item) return { price: '', calories: '' };
    
    return item.pricing[selectedSize as keyof typeof item.pricing];
  };

  // Get current image
  const getCurrentImage = () => {
    if (!item) return '';
    
    if (typeof item.image === 'string') {
      return item.image;
    }
    
    return item.image[selectedSize as keyof typeof item.image];
  };

  // Get current serving size
  const getCurrentServingSize = () => {
    if (!item) return '';
    
    if (typeof item.servingSize === 'string') {
      return item.servingSize;
    }
    
    return item.servingSize[selectedSize as keyof typeof item.servingSize];
  };

  const currentInfo = getCurrentInfo();

  if (!item) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Item not found</h1>
          <Link to="/category/dips-breads" className="text-cyan-700 hover:text-cyan-800">
            Return to dips & breads menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hamburger Menu */}
      <HamburgerMenu categories={categories} />

      {/* Header */}
      <header className="bg-cyan-700 text-white sticky top-0 z-30">
        {/* Main header bar */}
        <div className="py-4 px-4 relative flex items-center">
          <div className="max-w-lg mx-auto flex items-center justify-center">
            {/* Domino's Logo */}
            <div className="w-8 h-8">
              <svg
                aria-labelledby="dominos-logo"
                role="img"
                viewBox="0 0 214.6 228.87"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <title id="dominos-logo">Domino's Pizza</title>
                <path
                  d="M210.79 62.11l-58.3-58.3a13 13 0 00-18.42 0L85.18 52.7 3.81 134.08a13 13 0 000 18.42l58.3 58.31a13 13 0 0018.42 0l72.94-72.95 57.32-57.32a13 13 0 000-18.42"
                  fill="#ffffff"
                ></path>
                <path
                  d="M155.4 83.11a16.87 16.87 0 115-11.94 16.87 16.87 0 01-5 11.94m51.27-16.85L148.37 8a7.2 7.2 0 00-10.18 0l-63 63 68.47 68.47 63-63a7.2 7.2 0 000-10.18"
                  fill="#e31837"
                ></path>
                <path
                  d="M84.09 131.79a16.86 16.86 0 11-4.95 11.94 16.82 16.82 0 014.95-11.94M58.42 155a16.93 16.93 0 114.93-12 16.92 16.92 0 01-4.93 12M7.93 138.2a7.2 7.2 0 000 10.18l58.3 58.31a7.2 7.2 0 0010.18 0l63-63L70.93 75.2z"
                  fill="#006491"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Address bar */}
        <div className="bg-white text-cyan-700 py-3 px-4">
          <div className="max-w-lg mx-auto flex items-center">
            <Link 
              to="/category/dips-breads" 
              className="inline-flex items-center text-cyan-700 hover:text-cyan-800 mr-4 transition-colors touch-manipulation"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="font-semibold text-lg">BACK</span>
            </Link>
            <div className="flex-1 text-right">
              <div className="text-sm font-medium">CARRYOUT FROM</div>
              <div className="text-lg font-bold">45 PALISADO AVE</div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-6 px-4">
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
          
          {/* Item Image, Name, and Price Container */}
          <div className="p-6">
            <div className="text-center mb-6">
              <img 
                src={getCurrentImage()}
                alt={item.name}
                className="w-48 h-48 mx-auto object-contain"
              />
            </div>
            
            {/* Name and Price */}
            <div className="flex items-start justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-800 flex-1">{item.name}</h1>
              <div className="text-right">
                <div className="text-2xl font-bold text-red-600">{currentInfo.price}</div>
                <div className="text-sm text-gray-600 mt-1">{currentInfo.calories}</div>
              </div>
            </div>

            {/* Size Selection */}
            {item.hasSelection && (
              <div className="mb-6">
                <div className="flex justify-center space-x-4">
                  {(slug === 'parmesan-bread-bites' || slug === 'garlic-bites' || slug === 'cinnamon-bites') ? (
                    <>
                      <button
                        onClick={() => setSelectedSize('16')}
                        className={`w-16 h-16 rounded-full border-2 flex items-center justify-center transition-colors ${
                          selectedSize === '16'
                            ? 'bg-red-600 border-red-600 text-white'
                            : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
                        }`}
                      >
                        <span className="text-lg font-bold">16</span>
                      </button>
                      <button
                        onClick={() => setSelectedSize('32')}
                        className={`w-16 h-16 rounded-full border-2 flex items-center justify-center transition-colors ${
                          selectedSize === '32'
                            ? 'bg-red-600 border-red-600 text-white'
                            : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
                        }`}
                      >
                        <span className="text-lg font-bold">32</span>
                      </button>
                    </>
                  ) : slug === 'stuffed-cheesy-bread' ? (
                    <div className="flex justify-center space-x-2">
                      <button
                        onClick={() => setSelectedSize('cheesy')}
                        className={`px-3 py-2 rounded-lg border-2 font-medium transition-colors text-sm ${
                          selectedSize === 'cheesy'
                            ? 'bg-red-600 border-red-600 text-white'
                            : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
                        }`}
                      >
                        Cheesy
                      </button>
                      <button
                        onClick={() => setSelectedSize('pepperoni')}
                        className={`px-3 py-2 rounded-lg border-2 font-medium transition-colors text-sm ${
                          selectedSize === 'pepperoni'
                            ? 'bg-red-600 border-red-600 text-white'
                            : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
                        }`}
                      >
                        Pepperoni
                      </button>
                      <button
                        onClick={() => setSelectedSize('spinachfeta')}
                        className={`px-3 py-2 rounded-lg border-2 font-medium transition-colors text-sm ${
                          selectedSize === 'spinachfeta'
                            ? 'bg-red-600 border-red-600 text-white'
                            : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
                        }`}
                      >
                        Spinach & Feta
                      </button>
                      <button
                        onClick={() => setSelectedSize('baconjalapeno')}
                        className={`px-3 py-2 rounded-lg border-2 font-medium transition-colors text-sm ${
                          selectedSize === 'baconjalapeno'
                            ? 'bg-red-600 border-red-600 text-white'
                            : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
                        }`}
                      >
                        Bacon & Jalapeno
                      </button>
                    </div>
                  ) : (
                    Object.keys(item.pricing).map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-6 py-3 rounded-lg border-2 font-semibold transition-colors capitalize ${
                          selectedSize === size
                            ? 'bg-red-600 border-red-600 text-white'
                            : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* Description */}
            <div className="text-gray-700 text-sm leading-relaxed">
              <p className="mb-3">{item.description}</p>
              
              {/* Serving Size */}
              <p className="font-bold text-gray-800">
                {getCurrentServingSize()}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
