import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import HamburgerMenu from './HamburgerMenu';

interface CouponsPageProps {
  categories: Array<{
    name: string;
    slug: string;
  }>;
}

export default function CouponsPage({ categories }: CouponsPageProps) {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const deals = [
    {
      name: "Family Deal",
      price: "$39.99",
      image: "/images/coupons/deal.webp",
      items: [
        { name: "2 Large Pizzas (3 Top)", description: "" },
        { name: "1 16 pc bite", description: "" },
        { name: "1 Stuffed Bread", description: "" },
        { name: "1 8 pc wings", description: "" },
        { name: "1 2 Litre Soda", description: "" }
      ]
    },
    {
      name: "Meal 1",
      price: "$9.99",
      image: "/images/coupons/deal.webp",
      items: [
        { name: "1 Small Pizza (2 Top)", description: "" },
        { name: "1 20 oz Soda", description: "" }
      ]
    },
    {
      name: "Meal 2",
      price: "$14.99",
      image: "/images/coupons/deal.webp",
      items: [
        { name: "1 Medium Pizza (2 Top)", description: "" },
        { name: "16 pc Bread Bites", description: "" },
        { name: "1 20 oz Soda", description: "" }
      ]
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
          <h1 className="text-xl sm:text-2xl font-bold leading-tight text-gray-800">DOMINO'S DEALS & COUPONS</h1>
        </div>
      </div>

      {/* Deals */}
      <main className="py-4 px-3 pb-8">
        <div className="space-y-4">
          {deals.map((deal, index) => (
            <div key={index} className="block bg-white rounded-lg shadow-md transition-shadow duration-200 overflow-hidden border border-gray-100">
              <div className="p-4">
                <div className="flex items-start space-x-3 mb-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-800 leading-tight mb-1">{deal.name}</h3>
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-xl font-bold text-cyan-700">{deal.price}</span>
                      <span className="text-xs font-medium text-gray-600">
                        {deal.name === 'Family Deal' ? '(D+C/O)' : '(C/O)'}
                      </span>
                    </div>
                    
                    {/* Items List */}
                    <div className="text-sm text-gray-700 space-y-1">
                      {deal.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex justify-between">
                          <span className="font-medium">{item.name}</span>
                          {item.description && <span className="text-gray-500 ml-2">{item.description}</span>}
                        </div>
                      ))}
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