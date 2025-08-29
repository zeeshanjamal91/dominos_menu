import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import HamburgerMenu from './HamburgerMenu';
import { useState } from 'react';

interface BuildYourOwnPizzaPageProps {
  categories: Array<{
    name: string;
    slug: string;
  }>;
}

export default function BuildYourOwnPizzaPage({ categories }: BuildYourOwnPizzaPageProps) {
  const [selectedSize, setSelectedSize] = useState<string>('10"');

  const sizeOptions = [
    { size: "10\"", name: "Small" },
    { size: "12\"", name: "Medium" },
    { size: "14\"", name: "Large" },
    { size: "16\"", name: "X-Large" }
  ];

  // Get price based on selected size
  const getPrice = () => {
    switch (selectedSize) {
      case '10"': return "$9.99";
      case '12"': return "$10.99";
      case '14"': return "$12.99";
      case '16"': return "$14.99";
      default: return "$8.99";
    }
  };

  // Crust options based on selected size
  const getCrustOptions = () => {
    switch (selectedSize) {
      case '10"':
        return [
          { name: "Hand Tossed", note: "" },
          { name: "Crunchy Thin", note: "" },
          { name: "Gluten Free Crust", note: "$2 more. Not recommended for customers with celiac disease" }
        ];
      case '12"':
        return [
          { name: "Hand Tossed", note: "" },
          { name: "Crunchy Thin", note: "" },
          { name: "Parmesan Stuffed", note: "" },
          { name: "Handmade Pan", note: "$2 more" }
        ];
      case '14"':
        return [
          { name: "Hand Tossed", note: "" },
          { name: "Crunchy Thin", note: "" },
          { name: "New York Style", note: "" }
        ];
      case '16"':
        return [
          { name: "Hand Tossed", note: "" },
          { name: "New York Style", note: "" }
        ];
      default:
        return [
          { name: "Hand Tossed", note: "" },
          { name: "Crunchy Thin", note: "" },
          { name: "Gluten Free Crust", note: "$2 more. Not recommended for customers with celiac disease" }
        ];
    }
  };

  const toppings = [
    "Fresh Mushrooms",
    "Fresh Onions", 
    "Black Olives",
    "Jalapenos",
    "Fresh Green Peppers",
    "Roasted Red Peppers",
    "Banana Peppers",
    "Diced Tomatoes",
    "Fresh Spinach",
    "Pepperoni",
    "Bacon",
    "Ham", 
    "Beef",
    "Premium Chicken",
    "Italian Sausage",
    "Philly Steak",
    "Pineapple",
    "Cheddar Cheese",
    "Shredded Provolone Cheese",
    "Shredded Parmesan-Asiago",
    "Feta Cheese",
    "Hot Buffalo Sauce"
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
      <div className="bg-cyan-700 text-white py-4 px-4">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-xl sm:text-2xl font-bold">DOMINO'S PIZZA BUILDER</h1>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto py-4 px-3 pb-8">
        <div className="space-y-6">
          
          {/* Pizza Image and Price Section */}
          <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 lg:p-8 text-center">
            <div className="mb-4">
              <img 
                src="/images/categories/build.png"
                alt="Build Your Own Pizza"
                className="w-32 h-32 lg:w-40 lg:h-40 mx-auto object-contain"
              />
            </div>
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">Build Your Own Pizza</h2>
            <div className="text-3xl lg:text-4xl font-bold text-red-600 mb-2">{getPrice()}</div>
          </div>
          
          {/* Size & Crust Section */}
          <div className="bg-white rounded-lg shadow-md border border-gray-100">
            <div className="bg-cyan-700 text-white px-4 lg:px-6 py-3 rounded-t-lg">
              <h2 className="text-lg lg:text-xl font-bold">1. SIZE & CRUST</h2>
            </div>
            <div className="p-4 lg:p-6">
              <div className="flex justify-center items-end gap-4 sm:gap-6 mb-6">
                {sizeOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSize(option.size)}
                    className="flex flex-col items-center"
                  >
                    <div 
                      className={`rounded-full flex items-center justify-center transition-colors ${
                        selectedSize === option.size
                          ? 'bg-cyan-700 border-2 border-red-500'
                          : 'bg-cyan-100 border-2 border-cyan-100 hover:border-cyan-300'
                      }`}
                      style={{
                        width: `${40 + index * 8}px`,
                        height: `${40 + index * 8}px`
                      }}
                    >
                      <span className={`font-bold text-sm ${
                        selectedSize === option.size ? 'text-white' : 'text-cyan-700'
                      }`}>
                        {option.size}
                      </span>
                    </div>
                    <div className={`text-xs font-semibold mt-2 ${
                      selectedSize === option.size ? 'text-cyan-700' : 'text-gray-600'
                    }`}>
                      {option.name}
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="space-y-3">
                {getCrustOptions().map((crust, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="flex items-center text-gray-700 mb-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                      {crust.name}
                    </div>
                    {crust.note && (
                      <div className="text-xs text-red-600 ml-5 font-medium">
                        {crust.note}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cheese Section */}
          <div className="bg-white rounded-lg shadow-md border border-gray-100">
            <div className="bg-cyan-700 text-white px-4 lg:px-6 py-3 rounded-t-lg">
              <h2 className="text-lg lg:text-xl font-bold">2. CHEESE AMOUNT</h2>
            </div>
            <div className="p-4 lg:p-6">
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                  Light
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                  Normal
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                  Extra
                </div>
              </div>
            </div>
          </div>

          {/* Sauce Section */}
          <div className="bg-white rounded-lg shadow-md border border-gray-100">
            <div className="bg-cyan-700 text-white px-4 lg:px-6 py-3 rounded-t-lg">
              <h2 className="text-lg lg:text-xl font-bold">3. SAUCE</h2>
            </div>
            <div className="p-4 lg:p-6">
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                  Robust Tomato
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                  Honey BBQ
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                  Alfredo
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                  Ranch
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                  Garlic Parmesan
                </div>
              </div>
            </div>
          </div>

          {/* Toppings Section */}
          <div className="bg-white rounded-lg shadow-md border border-gray-100">
            <div className="bg-cyan-700 text-white px-4 lg:px-6 py-3 rounded-t-lg">
              <h2 className="text-lg lg:text-xl font-bold">4. TOPPINGS</h2>
            </div>
            <div className="p-4 lg:p-6">
              <p className="text-sm text-red-600 font-medium mb-4">Each Additional Topping: $2.50</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-4">
                {toppings.map((topping, index) => (
                  <div key={index} className="flex items-center text-gray-700 text-sm py-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-2 flex-shrink-0"></span>
                    <span className="truncate">{topping}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
