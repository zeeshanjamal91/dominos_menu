import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import HamburgerMenu from './HamburgerMenu';

interface DrinksDetailPageProps {
  categories: Array<{
    name: string;
    slug: string;
  }>;
}

export default function DrinksDetailPage({ categories }: DrinksDetailPageProps) {
  const drinkItems = [
    {
      name: "2-Liter Bottle",
      price: "$3.99",
      description: "Available flavors: Coke, Sprite, Root Beer, Canada Dry, Diet Coke, Fanta, Lemonade, Orange",
      image: "/images/extras/drinks.png"
    },
    {
      name: "20 oz Bottle",
      price: "$2.79",
      description: "Available flavors: Canada Dry, Orange, Diet Coke, Sprite, Coke",
      image: "/images/extras/drinks.png"
    }
  ];

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
              to="/" 
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

      {/* Page Title */}
      <div className="bg-gray-100 py-4 px-4">
        <div className="max-w-lg mx-auto">
          <h1 className="text-xl sm:text-2xl font-bold leading-tight text-gray-800">DOMINO'S DRINKS</h1>
        </div>
      </div>

      {/* Drink Items */}
      <main className="py-4 px-3 pb-8">
        <div className="space-y-6">
          {drinkItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg transition-shadow duration-200 overflow-hidden border border-gray-100">
              <div className="p-6">
                {/* Header Row with Image */}
                <div className="flex items-start space-x-6 mb-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold text-gray-800 leading-tight mb-3">{item.name}</h3>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-cyan-700 bg-cyan-50 px-3 py-1 rounded-lg">{item.price}</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-4 rounded-xl border-2 border-cyan-100">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Flavors Section */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed">
                        <span className="font-bold text-gray-800 text-base">Available Flavors:</span><br />
                        <span className="text-gray-600 text-sm mt-1 inline-block">
                          {item.description.replace("Available flavors: ", "").split(", ").join(" • ")}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
