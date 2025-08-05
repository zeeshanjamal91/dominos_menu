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
    { size: "10\"", name: "Small", description: "Serves 1-2" },
    { size: "12\"", name: "Medium", description: "Serves 2-3" },
    { size: "14\"", name: "Large", description: "Serves 3-4" },
    { size: "16\"", name: "X-Large", description: "Serves 4-6" }
  ];

  // Get price based on selected size
  const getPrice = () => {
    switch (selectedSize) {
      case '10"': return "$8.99";
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
          { name: "Hand Tossed", calories: "130–240", note: "" },
          { name: "Crunchy Thin", calories: "100–150", note: "" },
          { name: "Gluten Free Crust", calories: "160", note: "$2 more. Not recommended for customers with celiac disease" }
        ];
      case '12"':
        return [
          { name: "Hand Tossed", calories: "130–240", note: "" },
          { name: "Crunchy Thin", calories: "100–150", note: "" },
          { name: "Parmesan Stuffed", calories: "", note: "" },
          { name: "Handmade Pan", calories: "190", note: "$2 more" }
        ];
      case '14"':
        return [
          { name: "Hand Tossed", calories: "130–240", note: "" },
          { name: "Crunchy Thin", calories: "100–150", note: "" },
          { name: "New York Style", calories: "120–170", note: "" }
        ];
      case '16"':
        return [
          { name: "Hand Tossed", calories: "130–240", note: "" },
          { name: "New York Style", calories: "120–170", note: "" }
        ];
      default:
        return [
          { name: "Hand Tossed", calories: "130–240", note: "" },
          { name: "Crunchy Thin", calories: "100–150", note: "" },
          { name: "Gluten Free Crust", calories: "160", note: "$2 more. Not recommended for customers with celiac disease" }
        ];
    }
  };

  const sauceOptions = [
    { name: "Robust Inspired Tomato Sauce", type: "Light", selected: true },
    { name: "Robust Inspired Tomato Sauce", type: "Normal", selected: false },
    { name: "Robust Inspired Tomato Sauce", type: "Extra", selected: false },
    { name: "Honey BBQ Sauce", type: "", selected: false },
    { name: "Garlic Parmesan Sauce", type: "", selected: false },
    { name: "Alfredo Sauce", type: "", selected: false },
    { name: "Ranch", type: "", selected: false },
    { name: "No Sauce", type: "", selected: false }
  ];

  const toppings = [
    "Ham", "Beef", "Pepperoni", "Italian Sausage", "Premium Chicken", "Bacon", "Philly Steak", 
    "Anchovies", "Hot Buffalo Sauce", "Jalapeno Peppers", "Onions", "Banana Peppers", 
    "Diced Tomatoes", "Black Olives", "Mushrooms", "Pineapple", "Shredded Provolone Cheese",
    "Cheddar Cheese Blend", "Green Peppers", "Spinach", "Feta Cheese", "Shredded Parmesan Asiago"
  ];

  const dippingCups = [
    { name: "Ranch Dipping Cup", color: "bg-green-500" },
    { name: "Garlic Dipping Cup", color: "bg-yellow-500" },
    { name: "Marinara Dipping Cup", color: "bg-red-500" }
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
              to="/category/specialty-pizzas" 
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
      <main className="py-4 px-3 pb-8">
        <div className="space-y-6">
          
          {/* Pizza Image and Price Section */}
          <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 text-center">
            <div className="mb-4">
              <img 
                src="/images/pizzas/build.png"
                alt="Build Your Own Pizza"
                className="w-32 h-32 mx-auto object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Build Your Own Pizza</h2>
            <div className="text-3xl font-bold text-red-600 mb-2">{getPrice()}</div>
            <div className="text-sm text-gray-600">
              {sizeOptions.find(option => option.size === selectedSize)?.description}
            </div>
          </div>
          
          {/* Size & Crust Section */}
          <div className="bg-white rounded-lg shadow-md border border-gray-100">
            <div className="bg-cyan-700 text-white px-4 py-3 rounded-t-lg">
              <h2 className="text-lg font-bold">1. SIZE & CRUST</h2>
            </div>
            <div className="p-4">
              <div className="flex justify-center items-end gap-4 mb-6">
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
                <div className="grid grid-cols-2 gap-4">
                  <div className="font-semibold text-gray-800 border-b border-gray-300 pb-2">Crust Type</div>
                  <div className="font-semibold text-gray-800 border-b border-gray-300 pb-2">Calories</div>
                  {getCrustOptions().map((crust, index) => (
                    <>
                      <div key={`${index}-name`} className="flex flex-col">
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
                      <div key={`${index}-calories`} className="text-gray-600 flex items-start pt-1">
                        {crust.calories}
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Crust Seasoning Section */}
          <div className="bg-white rounded-lg shadow-md border border-gray-100">
            <div className="bg-cyan-700 text-white px-4 py-3 rounded-t-lg">
              <h2 className="text-lg font-bold">2. CRUST SEASONING</h2>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-cyan-700 rounded-full mr-3"></div>
                  <span className="text-gray-800 font-medium">Garlic Crust Seasoning</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 border-2 border-gray-300 rounded-full mr-3"></div>
                  <span className="text-gray-600">No Garlic Crust Seasoning</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cheese Section */}
          <div className="bg-white rounded-lg shadow-md border border-gray-100">
            <div className="bg-cyan-700 text-white px-4 py-3 rounded-t-lg">
              <h2 className="text-lg font-bold">3. CHEESE</h2>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="font-medium text-gray-800">Cheese</span>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm border border-gray-300 rounded">None</button>
                  <button className="px-3 py-1 text-sm border border-gray-300 rounded">Light</button>
                  <button className="px-3 py-1 text-sm bg-cyan-700 text-white rounded">Normal</button>
                  <button className="px-3 py-1 text-sm border border-gray-300 rounded">Extra</button>
                </div>
              </div>
            </div>
          </div>

          {/* Sauce Section */}
          <div className="bg-white rounded-lg shadow-md border border-gray-100">
            <div className="bg-cyan-700 text-white px-4 py-3 rounded-t-lg">
              <h2 className="text-lg font-bold">4. SAUCE</h2>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-cyan-700 rounded-full mr-3"></div>
                    <span className="text-gray-800">Robust Inspired Tomato Sauce</span>
                  </div>
                  <div className="flex space-x-1">
                    <button className="px-2 py-1 text-xs bg-cyan-700 text-white rounded">Light</button>
                    <button className="px-2 py-1 text-xs border border-gray-300 rounded">Normal</button>
                    <button className="px-2 py-1 text-xs border border-gray-300 rounded">Extra</button>
                  </div>
                </div>
                
                {sauceOptions.slice(1).map((sauce, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-4 h-4 border-2 border-gray-300 rounded-full mr-3"></div>
                    <span className="text-gray-600">{sauce.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Toppings Section */}
          <div className="bg-white rounded-lg shadow-md border border-gray-100">
            <div className="bg-cyan-700 text-white px-4 py-3 rounded-t-lg">
              <h2 className="text-lg font-bold">5. TOPPINGS</h2>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-600">Sort By:</span>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm bg-cyan-700 text-white rounded">Featured</button>
                  <button className="px-3 py-1 text-sm border border-gray-300 rounded">Popular</button>
                  <button className="px-3 py-1 text-sm border border-gray-300 rounded">A to Z</button>
                </div>
              </div>
              
              <div className="space-y-2">
                {toppings.map((topping, index) => (
                  <div key={index} className="flex items-center py-2 border-b border-gray-100 last:border-b-0">
                    <div className="w-4 h-4 border-2 border-gray-300 rounded mr-3"></div>
                    <span className="text-gray-700">{topping}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Add Sauces for Dipping Section */}
          <div className="bg-white rounded-lg shadow-md border border-gray-100">
            <div className="bg-cyan-700 text-white px-4 py-3 rounded-t-lg">
              <h2 className="text-lg font-bold">6. ADD SAUCES FOR DIPPING</h2>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-4">Additional charges apply</p>
              <div className="space-y-3">
                {dippingCups.map((cup, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <div className={`w-6 h-6 ${cup.color} rounded-full mr-3`}></div>
                      <span className="text-gray-700">{cup.name}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center text-gray-400">−</button>
                      <span className="w-6 text-center">0</span>
                      <button className="w-8 h-8 bg-cyan-700 text-white rounded-full flex items-center justify-center">+</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Special Instructions Section */}
          <div className="bg-white rounded-lg shadow-md border border-gray-100">
            <div className="bg-cyan-700 text-white px-4 py-3 rounded-t-lg">
              <h2 className="text-lg font-bold">SPECIAL INSTRUCTIONS</h2>
            </div>
            <div className="p-4">
              <div className="border border-gray-300 rounded p-3 min-h-[80px] bg-gray-50">
                <p className="text-gray-500 text-sm">Special instructions for your pizza preparation...</p>
              </div>
            </div>
          </div>

          {/* My Pizza Section */}
          <div className="bg-white rounded-lg shadow-md border border-gray-100">
            <div className="bg-cyan-700 text-white px-4 py-3 rounded-t-lg">
              <h2 className="text-lg font-bold">MY PIZZA</h2>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-800">X-Large (16") Hand Tossed Pizza</h3>
                  <p className="text-sm text-gray-600">Cheese</p>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center text-gray-400">−</button>
                  <span className="w-6 text-center font-bold">1</span>
                  <button className="w-8 h-8 bg-cyan-700 text-white rounded-full flex items-center justify-center">+</button>
                </div>
              </div>
            </div>
          </div>

          {/* Static Info Note */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-700 text-center">
              <strong>Menu Display Only</strong> - This is a static menu showcase. No ordering functionality is available.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}
