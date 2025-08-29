import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import HamburgerMenu from './HamburgerMenu';

interface DippingCupsDetailPageProps {
  categories: Array<{
    name: string;
    slug: string;
  }>;
}

export default function DippingCupsDetailPage({ categories }: DippingCupsDetailPageProps) {
  const dippingCupItems = [
    {
      name: "Hot Buffalo Dipping Cup",
      price: "$1.00",
      calories: "cal: 15",
      description: "Domino's own spicy buffalo sauce.",
      image: "/images/extras/dipping_cups/F_HOTCUP.jpg"
    },
    {
      name: "Sweet Mango Habanero Dipping Cup",
      price: "$1.00",
      calories: "cal: 70",
      description: "A perfect blend of sweet and spicy in one sauce.",
      image: "/images/extras/dipping_cups/F_SMHAB.jpg"
    },
    {
      name: "Honey BBQ Dipping Cup",
      price: "$1.00",
      calories: "cal: 70",
      description: "A sweet and smoky BBQ sauce with bold flavor.",
      image: "/images/extras/dipping_cups/F_BBQC.jpg"
    },
    {
      name: "Ranch Dipping Cup",
      price: "$1.00",
      calories: "cal: 160",
      description: "A creamy buttermilk ranch dressing with hints of garlic and onion.",
      image: "/images/extras/dipping_cups/F_SIDRAN.jpg"
    },
    {
      name: "Blue Cheese Dipping Cup",
      price: "$1.00",
      calories: "cal: 200",
      description: "A creamy dressing with bits of aged blue cheese.",
      image: "/images/extras/dipping_cups/F_Bd.jpg"
    },
    {
      name: "Garlic Dipping Cup",
      price: "$1.00",
      calories: "cal: 250",
      description: "A buttery garlic sauce.",
      image: "/images/extras/dipping_cups/F_SIDGAR.jpg"
    },
    {
      name: "Sweet Icing Dipping Cup",
      price: "$1.00",
      calories: "cal: 220",
      description: "A thick sweet icing with a hint of vanilla.",
      image: "/images/extras/dipping_cups/F_SIDICE.jpg"
    },
    {
      name: "Marinara Dipping Cup",
      price: "$1.00",
      calories: "cal: 30",
      description: "A sweet tomato sauce blended with garlic, basil and oregano.",
      image: "/images/extras/dipping_cups/F_SIDMAR.jpg"
    },
    {
      name: "Parmesan Cheese",
      price: "$0.10",
      calories: "cal: 20",
      description: "Freshly grated Parmesan cheese to sprinkle on your favorite items.",
      image: "/images/categories/extras.png" // Using generic extras image as placeholder
    },
    {
      name: "Red Peppers",
      price: "$0.10",
      calories: "cal: 5",
      description: "Spicy red pepper flakes to add heat and flavor to your meal.",
      image: "/images/categories/extras.png" // Using generic extras image as placeholder
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
          <h1 className="text-xl sm:text-2xl font-bold leading-tight text-gray-800">DOMINO'S EXTRAS</h1>
        </div>
      </div>

      {/* Extras Items */}
      <main className="py-4 px-3 pb-8">
        <div className="space-y-4">
          {dippingCupItems.map((item, index) => (
            <div key={index} className="block bg-white rounded-lg shadow-md transition-shadow duration-200 overflow-hidden border border-gray-100">
              <div className="p-4">
                <div className="flex items-start space-x-3 mb-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-800 leading-tight mb-1">{item.name}</h3>
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-xl font-bold text-cyan-700">{item.price}</span>
                      <span className="text-sm text-gray-500">{item.calories}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-contain rounded-lg"
                    />
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
