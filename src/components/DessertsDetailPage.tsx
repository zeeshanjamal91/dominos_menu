import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import HamburgerMenu from './HamburgerMenu';
import { useState } from 'react';

interface DessertsDetailPageProps {
  categories: Array<{
    name: string;
    slug: string;
  }>;
}

export default function DessertsDetailPage({ categories }: DessertsDetailPageProps) {
  const { slug } = useParams<{ slug: string }>();
  
  // Set initial selection based on item type
  const getInitialSelection = () => {
    if (slug === 'cinnamon-bites') {
      return '16';
    }
    return '';
  };
  
  const [selectedSize, setSelectedSize] = useState<string>(getInitialSelection());

  // Desserts items data
  const dessertItems = {
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
    'chocolate-lava-crunch-cakes': {
      name: "Chocolate Lava Crunch Cakes",
      image: "/images/desserts/F_LAVA.jpg",
      price: "3 for $9.99",
      calories: "Cal: 350",
      description: "Oven-baked chocolate cakes, crunchy on the outside with molten chocolate fudge on the inside.",
      servingSize: "Serving Size: 1-pc"
    },
    'marbled-cookie-brownie': {
      name: "Domino's Marbled Cookie Brownie™",
      image: "/images/desserts/F_MRBRWNE.jpg",
      price: "9 for $9.99",
      calories: "Cal: 200",
      description: "An irresistibly warm and gooey blend of milk chocolate chunk cookie and fudge brownie. This sharable dessert is oven-baked at the time of order and cut into 9 pieces.",
      servingSize: "Serving Size: 1-pc"
    }
  };

  const item = dessertItems[slug as keyof typeof dessertItems];

  // Get current price and calories based on selected size
  const getCurrentInfo = () => {
    if (!item) return { price: '', calories: '' };
    
    // For items with pricing object (like cinnamon-bites)
    if ('pricing' in item && item.pricing) {
      return item.pricing[selectedSize as keyof typeof item.pricing];
    }
    
    // For items with direct price/calories
    return {
      price: 'price' in item ? item.price : '',
      calories: 'calories' in item ? item.calories : ''
    };
  };

  const currentInfo = getCurrentInfo();

  if (!item) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Item not found</h1>
          <Link to="/category/desserts" className="text-cyan-700 hover:text-cyan-800">
            Return to desserts menu
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
              to="/category/desserts" 
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
                src={item.image}
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
            {'hasSelection' in item && item.hasSelection && (
              <div className="mb-6">
                <div className="flex justify-center space-x-6">
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
                </div>
              </div>
            )}

            {/* Description */}
            <div className="text-gray-700 text-sm leading-relaxed pt-6 border-t border-gray-200">
              <p className="mb-3">{item.description}</p>
              
              {/* Serving Size */}
              <p className="font-bold text-gray-800">{item.servingSize}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
