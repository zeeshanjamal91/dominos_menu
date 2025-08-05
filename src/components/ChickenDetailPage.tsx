import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import HamburgerMenu from './HamburgerMenu';
import { useState } from 'react';

interface ChickenDetailPageProps {
  categories: Array<{
    name: string;
    slug: string;
  }>;
}

export default function ChickenDetailPage({ categories }: ChickenDetailPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const [selectedSize, setSelectedSize] = useState<string>('8');

  // Chicken items data
  const chickenItems = {
    'bone-in-wings': {
      name: "Bone-In Wings",
      image: "/images/chicken/bone_in_wings.png",
      description: "Marinated and oven-baked.\nAvailable plain (Cal: 250), or smothered with your choice of hot buffalo (Cal: 260), honey BBQ (Cal: 310), garlic Parmesan (Cal: 390) or sweet mango habanero (Cal: 310)\n(Serving Size: 4-pc)",
      pricing: "8 for $9.99 • 16 for $16.99 • 32 for $32.99",
      hasSelection: true
    },
    'boneless-chicken': {
      name: "Boneless Chicken",
      image: "/images/chicken/S_BONELESS.jpg",
      description: "Breaded chicken made with 100% whole white breast meat. Customize with your choice of dipping cup(s).\n(Serving Size: 3-pc) Cal: 170",
      pricing: "8 for $9.99 • 16 for $16.99 • 32 for $32.99",
      hasSelection: true
    },
    'loaded-chicken': {
      name: "Loaded Chicken",
      image: "/images/chicken/S_Loaded.jpg",
      description: "A delicious combination of toppings, sauces and cheeses layered over twelve bites of breaded chicken made with 100% whole white breast meat. Try all four flavors: hot buffalo (Cal: 190), sweet BBQ bacon (Cal: 210), crispy bacon and tomato (Cal: 260) and spicy jalapeno-pineapple (Cal: 190)\n(Serving Size: 4-pc)",
      pricing: "12 for $7.99",
      fixedPrice: "12 for $7.99",
      hasSelection: false
    }
  };

  const item = chickenItems[slug as keyof typeof chickenItems];

  // Get price based on selected size
  const getPrice = () => {
    if ('fixedPrice' in item && item.fixedPrice) {
      return item.fixedPrice;
    }
    switch (selectedSize) {
      case '8': return "$9.99";
      case '16': return "$16.99";
      case '32': return "$32.99";
      default: return "$9.99";
    }
  };

  if (!item) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Item not found</h1>
          <Link to="/category/chicken" className="text-cyan-700 hover:text-cyan-800">
            Return to chicken menu
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
              to="/category/chicken" 
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
          
          {/* Item Image */}
          <div className="p-6 text-center">
            <img 
              src={item.image}
              alt={item.name}
              className="w-48 h-48 mx-auto object-contain"
            />
          </div>

          {/* Item Info */}
          <div className="px-6 pb-6">
            {/* Name and Price */}
            <div className="flex items-start justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-800 flex-1">{item.name}</h1>
              <div className="text-2xl font-bold text-red-600 ml-4">{getPrice()}</div>
            </div>

            {/* Size Selection */}
            {item.hasSelection && (
              <div className="mb-6">
                <div className="flex justify-center space-x-6">
                  {['8', '16', '32'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-16 h-16 rounded-full border-2 flex items-center justify-center transition-colors ${
                        selectedSize === size
                          ? 'bg-red-600 border-red-600 text-white'
                          : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      <span className="text-lg font-bold">{size}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <div className="text-gray-700 text-sm leading-relaxed">
              {item.description.split('\n').map((line, index) => (
                <p key={index} className={index > 0 ? 'mt-2' : ''}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
