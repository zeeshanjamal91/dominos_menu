import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';
import CategoryPage from './components/CategoryPage';
import PizzaDetailPage from './components/PizzaDetailPage';
import ChickenDetailPage from './components/ChickenDetailPage';
import LoadedTotsDetailPage from './components/LoadedTotsDetailPage';
import SandwichesDetailPage from './components/SandwichesDetailPage';
import PennePastasDetailPage from './components/PennePastasDetailPage';
import DipsBreadsDetailPage from './components/DipsBreadsDetailPage';
import SaladsDetailPage from './components/SaladsDetailPage';
import DessertsDetailPage from './components/DessertsDetailPage';
import DrinksDetailPage from './components/DrinksDetailPage';
import DippingCupsDetailPage from './components/DippingCupsDetailPage';
import NotFoundPage from './components/NotFoundPage';
import BuildYourOwnPizzaPage from './components/BuildYourOwnPizzaPage';

function App() {
  const menuCategories = [
    {
      name: "Build Your Own Pizza",
      slug: "build-your-own-pizza",
      image: "/images/categories/build.png",
      description: "Create your perfect pizza with your favorite toppings"
    },
    {
      name: "Specialty Pizzas",
      slug: "specialty-pizzas",
      image: "/images/categories/specialty.png",
      description: "Our signature pizza creations with premium toppings"
    },
    {
      name: "Chicken",
      slug: "chicken",
      image: "/images/categories/chicken.png",
      description: "Crispy wings, tenders, and chicken specialties"
    },
    {
      name: "Loaded Tots",
      slug: "loaded-tots",
      image: "/images/categories/loadedtots.png",
      description: "Crispy on the outside, fully loaded on the inside"
    },
    {
      name: "Sandwiches",
      slug: "sandwiches",
      image: "/images/categories/sandwiches.png",
      description: "Fresh made sandwiches with quality meats and veggies"
    },
    {
      name: "Penne Pastas",
      slug: "penne-pastas",
      image: "/images/categories/pasta.png",
      description: "Classic Italian pasta dishes with rich sauces"
    },
    {
      name: "Dips & Breads",
      slug: "dips-breads",
      image: "/images/categories/breadandovenbakeddips.png",
      description: "Fresh baked breads with signature dipping sauces"
    },
    {
      name: "Salads",
      slug: "salads",
      image: "/images/categories/salads.png",
      description: "Fresh garden salads with premium ingredients"
    },
    {
      name: "Desserts",
      slug: "desserts",
      image: "/images/categories/dessert.png",
      description: "Warm, rich, and shareable desserts baked to satisfy every sweet craving"
    },
    {
      name: "Drinks",
      slug: "drinks",
      image: "/images/extras/drinks.png",
      description: "Refreshing beverages to complement your meal"
    },
    {
      name: "Extras",
      slug: "extras",
      image: "/images/categories/extras.png",
      description: "Sides, sauces, and additional toppings"
    }
  ];

  const HomePage = () => (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-cyan-700 text-white py-4 px-4 sticky top-0 z-30">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-4">
           {/* Logo and Heading */}
<div className="flex items-center space-x-2 bg-cyan-700 p-2 rounded shadow-sm">
  {/* Domino's SVG Logo */}
  <div className="w-8 h-8">
    <svg
      aria-labelledby="dominos-logo5"
      role="img"
      viewBox="0 0 214.6 228.87"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <title id="dominos-logo5">Domino's Pizza</title>
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
      <text
        fill="#ffffff"
        fontFamily="MyriadPro-Semibold, MyriadPro Semibold, sans-serif"
        fontSize="33.33"
        fontWeight="700"
        transform="translate(99.13 220.53)"
      >
        ®
      </text>
    </svg>
  </div>

  {/* Heading Text */}
  <h1 className="text-xl sm:text-2xl font-bold tracking-wide">DOMINO'S MENU</h1>
</div>
          </div>
        </div>
      </header>

      {/* Menu Categories */}
      <main className="py-4 px-3">
        <div className="space-y-3">
          {menuCategories.map((category, index) => (
            <Link
              key={index}
              to={category.slug === 'build-your-own-pizza' ? '/build-your-own-pizza' : 
                  category.slug === 'drinks' ? '/drinks' : 
                  category.slug === 'extras' ? '/dipping-cups' :
                  `/category/${category.slug}`}
              className="block bg-white rounded-lg shadow-md active:shadow-lg transition-shadow duration-200 overflow-hidden group cursor-pointer border border-gray-100"
            >
              {category.slug === 'build-your-own-pizza' ? (
                // Special layout for Build Your Own Pizza
                <div className="p-4">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg sm:text-xl font-bold text-cyan-700 mb-3 group-active:text-cyan-800 transition-colors">
                        {category.name}
                      </h2>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center">
                          <span className="text-cyan-700 font-semibold underline">Parmesan Stuffed Crust</span>
                          <span className="ml-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded font-bold">NEW!</span>
                        </div>
                        <div className="text-cyan-700 font-semibold underline">Hand Tossed</div>
                        <div className="text-cyan-700 font-semibold underline">Handmade Pan</div>
                        <div className="text-cyan-700 font-semibold underline">Crunchy Thin Crust</div>
                        <div className="text-cyan-700 font-semibold underline">Gluten Free Crust</div>
                        <div className="text-cyan-700 font-semibold underline">New York Style</div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <img 
                        src={category.image}
                        alt={category.name}
                        className="w-20 h-20 object-contain rounded-lg group-active:scale-105 transition-transform duration-200"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                // Regular layout for other categories
                <div className="flex items-center p-4">
                  <div className="flex-1">
                    <h2 className="text-lg sm:text-xl font-bold text-cyan-700 mb-1 group-active:text-cyan-800 transition-colors">
                      {category.name}
                    </h2>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <img 
                      src={category.image}
                      alt={category.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-lg group-active:scale-105 transition-transform duration-200"
                    />
                  </div>
                </div>
              )}
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4 mt-8">
        <div className="max-w-lg mx-auto">
          <div className="space-y-6">
            {/* Location */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5 mr-2 text-cyan-400" />
                <h3 className="text-base font-semibold">Location</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                45 Palisado Ave<br />
                Windsor, CT 06095
              </p>
            </div>

            {/* Phone */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Phone className="w-5 h-5 mr-2 text-cyan-400" />
                <h3 className="text-base font-semibold">Phone</h3>
              </div>
              <p className="text-gray-300 text-sm">
                <a href="tel:+15551234567" className="active:text-cyan-400 transition-colors text-lg font-medium">
                  (860) 688-6313
                </a>
              </p>
            </div>

            {/* Hours */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Clock className="w-5 h-5 mr-2 text-cyan-400" />
                <h3 className="text-base font-semibold">Hours</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Fri - Sat: 10:30 am - 01:00 am<br />
                Sun - Thu: 10:30 am - 12:00 am
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-6 pt-6 text-center">
            <p className="text-gray-400 text-xs">
              © 2025 Domino's Restaurant. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/category/:slug" 
          element={<CategoryPage categories={menuCategories} />} 
        />
        <Route 
          path="/pizza/:slug" 
          element={<PizzaDetailPage categories={menuCategories.map(cat => ({ name: cat.name, slug: cat.slug }))} />} 
        />
        <Route 
          path="/chicken/:slug" 
          element={<ChickenDetailPage categories={menuCategories.map(cat => ({ name: cat.name, slug: cat.slug }))} />} 
        />
        <Route 
          path="/loaded-tots/:slug" 
          element={<LoadedTotsDetailPage categories={menuCategories.map(cat => ({ name: cat.name, slug: cat.slug }))} />} 
        />
        <Route 
          path="/sandwiches/:slug" 
          element={<SandwichesDetailPage categories={menuCategories.map(cat => ({ name: cat.name, slug: cat.slug }))} />} 
        />
        <Route 
          path="/penne-pastas/:slug" 
          element={<PennePastasDetailPage categories={menuCategories.map(cat => ({ name: cat.name, slug: cat.slug }))} />} 
        />
        <Route 
          path="/dips-breads/:slug" 
          element={<DipsBreadsDetailPage categories={menuCategories.map(cat => ({ name: cat.name, slug: cat.slug }))} />} 
        />
        <Route 
          path="/salads/:slug" 
          element={<SaladsDetailPage categories={menuCategories.map(cat => ({ name: cat.name, slug: cat.slug }))} />} 
        />
        <Route 
          path="/desserts/:slug" 
          element={<DessertsDetailPage categories={menuCategories.map(cat => ({ name: cat.name, slug: cat.slug }))} />} 
        />
        <Route 
          path="/drinks" 
          element={<DrinksDetailPage categories={menuCategories.map(cat => ({ name: cat.name, slug: cat.slug }))} />} 
        />
        <Route 
          path="/dipping-cups" 
          element={<DippingCupsDetailPage categories={menuCategories.map(cat => ({ name: cat.name, slug: cat.slug }))} />} 
        />
        <Route 
          path="/build-your-own-pizza" 
          element={<BuildYourOwnPizzaPage categories={menuCategories.map(cat => ({ name: cat.name, slug: cat.slug }))} />} 
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;