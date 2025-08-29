import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import HamburgerMenu from './HamburgerMenu';

interface SaladsDetailPageProps {
  categories: Array<{
    name: string;
    slug: string;
  }>;
}

export default function SaladsDetailPage({ categories }: SaladsDetailPageProps) {
  const { slug } = useParams<{ slug: string }>();

  // Salads items data
  const saladItems = {
    'classic-garden': {
      name: "Classic Garden",
      image: "/images/salads/F_GARDEN.jpg",
      price: "$7.99",
      calories: "Cal: 80",
      description: "A crisp and colorful combination of grape tomatoes, red onions, carrots, red cabbage, cheddar cheese and brioche garlic croutons, all atop a blend of romaine and iceberg lettuce.",
      servingSize: "Serving Size: 1.5 Cup",
      hasDressings: true
    },
    'chicken-caesar': {
      name: "Chicken Caesar",
      image: "/images/salads/F_CCAESAR.jpg",
      price: "$7.99",
      calories: "Cal: 220",
      description: "The makings of a classic: roasted white meat chicken, Parmesan cheese and brioche garlic croutons, all atop a blend of romaine and iceberg lettuce.",
      servingSize: "Serving Size: 1 Bowl",
      hasDressings: true
    },
    'five-cheese-mac-cheese': {
      name: "Five Cheese Mac & Cheese",
      image: "/images/salads/F_GARDEN.jpg", // Temporary placeholder
      price: "$8.99",
      calories: "Cal: 450",
      description: "Creamy macaroni and cheese made with five different cheeses for the ultimate comfort food experience.",
      servingSize: "Serving Size: 1 Bowl",
      hasDressings: true
    },
    'spicy-buffalo-mac-cheese': {
      name: "Spicy Buffalo Mac & Cheese",
      image: "/images/salads/F_GARDEN.jpg", // Temporary placeholder
      price: "$9.99",
      calories: "Cal: 480",
      description: "Macaroni and cheese with a spicy buffalo kick, topped with crispy breadcrumbs and green onions.",
      servingSize: "Serving Size: 1 Bowl",
      hasDressings: true
    }
  };

  // Available dressings for salads
  const availableDressings = [
    { name: "Ranch", calories: "Cal: 200" },
    { name: "Caesar", calories: "Cal: 160" },
    { name: "Light Balsamic", calories: "Cal: 45" }
  ];

  const item = saladItems[slug as keyof typeof saladItems];

  if (!item) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Item not found</h1>
          <Link to="/category/salads" className="text-cyan-700 hover:text-cyan-800">
            Return to salads menu
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
              to="/category/salads" 
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
                <div className="text-2xl font-bold text-red-600">{item.price}</div>
                <div className="text-sm text-gray-600 mt-1">{item.calories}</div>
              </div>
            </div>

            {/* Description */}
            <div className="text-gray-700 text-sm leading-relaxed mb-6">
              <p className="mb-3">{item.description}</p>
              
              {/* Serving Size */}
              <p className="font-bold text-gray-800">{item.servingSize}</p>
            </div>

            {/* Available Dressings - Only show for actual salads */}
            {item.hasDressings && (
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  Available Dressings
                </h3>
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-4 border border-gray-200">
                  <div className="overflow-hidden rounded-lg">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-cyan-700 text-white">
                          <th className="px-4 py-3 text-left font-semibold text-sm">Dressing</th>
                          <th className="px-4 py-3 text-right font-semibold text-sm">Calories</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {availableDressings.map((dressing, index) => (
                          <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-cyan-50 transition-colors`}>
                            <td className="px-4 py-3 text-gray-800 font-medium text-sm">{dressing.name}</td>
                            <td className="px-4 py-3 text-gray-600 text-right text-sm">{dressing.calories}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-500 mt-3 text-center">
                    Choose your favorite dressing to complement your salad
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
