import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import HamburgerMenu from './HamburgerMenu';
import { useState } from 'react';

interface PennePastasDetailPageProps {
  categories: Array<{
    name: string;
    slug: string;
  }>;
}

export default function PennePastasDetailPage({ categories }: PennePastasDetailPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const [selectedType, setSelectedType] = useState<string>('tin');

  // Penne pastas items data
  const pastaItems = {
    'chicken-alfredo': {
      name: "Chicken Alfredo",
      image: "/images/penne_pasta/S_ALFR.jpg",
      description: "Grilled chicken breast and creamy Alfredo sauce mixed with penne pasta and baked to perfection.",
      servingSize: {
        tin: "Serving Size: 1 Tin",
        bowl: "Serving Size: 1/2 Bread Bowl"
      },
      pricing: {
        tin: { price: "$7.99", calories: "Cal: 600" },
        bowl: { price: "$8.99", calories: "Cal: 690" }
      }
    },
    'italian-sausage-marinara': {
      name: "Italian Sausage Marinara",
      image: "/images/penne_pasta/S_ITALMAR.jpg",
      description: "Penne pasta baked in zesty tomato-basil marinara sauce with Italian sausage, a blend of Italian seasonings and provolone cheese.",
      servingSize: {
        tin: "Serving Size: 1 Tin",
        bowl: "Serving Size: 1/2 Bread Bowl"
      },
      pricing: {
        tin: { price: "$7.99", calories: "Cal: 700" },
        bowl: { price: "$8.99", calories: "Cal: 740" }
      }
    },
    'build-your-own-pasta': {
      name: "Build Your Own Pasta",
      image: "/images/penne_pasta/S_BUILD.jpg",
      description: "Choose a sauce and up to three ingredients from more than a dozen meat or vegetable toppings.",
      servingSize: {
        tin: "Serving Size: 1 Tin",
        bowl: "Serving Size: 1/2 Bread Bowl"
      },
      
      pricing: {
        tin: { price: "$7.99", calories: "Cal: 340 - 1070" },
        bowl: { price: "$8.99", calories: "Cal: 560 - 930" }
      }
    }
  };

  const item = pastaItems[slug as keyof typeof pastaItems];

  // Get current price and calories based on selected type
  const getCurrentInfo = () => {
    if (!item) return { price: '', calories: '' };
    return item.pricing[selectedType as keyof typeof item.pricing];
  };

  const currentInfo = getCurrentInfo();

  if (!item) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Item not found</h1>
          <Link to="/category/penne-pastas" className="text-cyan-700 hover:text-cyan-800">
            Return to penne pastas menu
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
              to="/category/penne-pastas" 
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

            {/* Type Selection (Tin/Bowl) */}
            <div className="mb-6">
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => setSelectedType('tin')}
                  className={`px-6 py-3 rounded-lg border-2 font-semibold transition-colors ${
                    selectedType === 'tin'
                      ? 'bg-red-600 border-red-600 text-white'
                      : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  Tin
                </button>
                <button
                  onClick={() => setSelectedType('bowl')}
                  className={`px-6 py-3 rounded-lg border-2 font-semibold transition-colors ${
                    selectedType === 'bowl'
                      ? 'bg-red-600 border-red-600 text-white'
                      : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  Bread Bowl
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="text-gray-700 text-sm leading-relaxed">
              <p className="mb-3">{item.description}</p>
              
              {/* Extra Toppings Section - Only for Build Your Own Pasta */}
              {slug === 'build-your-own-pasta' && (
                <div className="mb-4 pt-4 border-t border-gray-200">
                  <p className="font-bold text-gray-800 mb-1">EXTRA TOPPINGS OR SAUCE</p>
                  <p className="font-bold text-red-600">$2.00 EXTRA EACH</p>
                </div>
              )}
              
              {/* Serving Size */}
              <p className="font-bold text-gray-800">
                {item.servingSize[selectedType as keyof typeof item.servingSize]}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
