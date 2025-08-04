import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import HamburgerMenu from './HamburgerMenu';

interface PizzaDetailPageProps {
  categories: Array<{
    name: string;
    slug: string;
  }>;
}

export default function PizzaDetailPage({ categories }: PizzaDetailPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const [selectedSize, setSelectedSize] = useState<'S' | 'M' | 'L' | 'XL'>('S');

  const pizzaData: Record<string, any> = {
    'extravaganzza': {
      name: "Extravaganzza™",
      calories: "cal: 270 - 510",
      description: "Pepperoni, ham, Italian sausage, beef, fresh onions, fresh green peppers, fresh mushrooms and black olives, all sandwiched between two layers of cheese made with 100% real mozzarella.",
      image: "/images/pizzas/ExtravaganZZa.png"
    },
    'meatzza': {
      name: "MeatZZa™",
      calories: "cal: 260 - 480",
      description: "Pepperoni, ham, Italian sausage and beef, all sandwiched between two layers of cheese made with 100% real mozzarella.",
      image: "/images/pizzas/MeatZZa.png"
    },
    'philly-cheese-steak': {
      name: "Philly Cheese Steak",
      calories: "cal: 230 - 400",
      description: "Tender slices of steak, fresh onions, fresh green peppers, fresh mushrooms, provolone and American cheeses.",
      image: "/images/pizzas/Philly_Cheese_Steak.png"
    },
    'honolulu-hawaiian': {
      name: "Honolulu Hawaiian",
      calories: "cal: 240 - 430",
      description: "Sliced ham, smoked bacon, pineapple, provolone and cheese made with 100% real mozzarella.",
      image: "/images/pizzas/Honolulu_Hawaiian.png"
    },
    'pacific-veggie': {
      name: "Pacific Veggie",
      calories: "cal: 220 - 400",
      description: "Fresh spinach, fresh onions, fresh mushrooms, diced tomatoes, black olives, feta, provolone, cheddar, cheese made with 100% real mozzarella, then sprinkled with garlic herb seasoning.",
      image: "/images/pizzas/Pacific_Veggie.png"
    },
    'deluxe': {
      name: "Deluxe",
      calories: "cal: 240 - 410",
      description: "Pepperoni, Italian sausage, fresh green peppers, fresh mushrooms, fresh onions and cheese made with 100% real mozzarella.",
      image: "/images/pizzas/Deluxe_Pizza.png"
    },
    'ultimate-pepperoni': {
      name: "Ultimate Pepperoni™",
      calories: "cal: 250 - 480",
      description: "Two layers of pepperoni sandwiched between provolone, Parmesan-Asiago and cheese made with 100% real mozzarella, then sprinkled with oregano.",
      image: "/images/pizzas/Ultimate_Pepperoni.png"
    },
    'cali-chicken-bacon-ranch': {
      name: "Cali Chicken Bacon Ranch",
      calories: "cal: 280 - 530",
      description: "Grilled chicken breast, smoked bacon, diced tomatoes, provolone and cheese made with 100% real mozzarella.",
      image: "/images/pizzas/Cali_Chicken_Bacon_Ranch.png"
    },
    'buffalo-chicken': {
      name: "Buffalo Chicken",
      calories: "cal: 250 - 450",
      description: "Grilled chicken breast, fresh onions, provolone, American cheese, cheddar, cheese made with 100% real mozzarella and drizzled with hot buffalo sauce.",
      image: "/images/pizzas/Buffalo_Chicken.png"
    },
    'memphis-bbq-chicken': {
      name: "Memphis BBQ Chicken",
      calories: "cal: 240 - 460",
      description: "Grilled chicken breast, honey BBQ sauce, fresh onions, cheddar, provolone and cheese made with 100% real mozzarella.",
      image: "/images/pizzas/Memphis_BBQ_Chicken.png"
    },
    'wisconsin-6-cheese': {
      name: "Wisconsin 6 Cheese",
      calories: "cal: 230 - 440",
      description: "Feta, provolone, cheddar, Parmesan-Asiago, cheese made with 100% real mozzarella, then sprinkled with oregano.",
      image: "/images/pizzas/Wisconsin_6-Cheese.png"
    },
    'spinach-and-feta': {
      name: "Spinach and Feta",
      calories: "cal: 230 - 420",
      description: "Creamy Alfredo sauce, fresh spinach, fresh onions, feta, Parmesan-Asiago, provolone and cheese made with 100% real mozzarella.",
      image: "/images/pizzas/Spinach_Feta.png"
    }
  };

  const pizza = slug ? pizzaData[slug] : null;

  if (!pizza) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Pizza not found</h1>
          <Link to="/category/specialty-pizzas" className="text-cyan-700 hover:text-cyan-800">
            Return to Specialty Pizzas
          </Link>
        </div>
      </div>
    );
  }

  const sizeOptions = [
    { size: 'S' as const, price: '$13.99' },
    { size: 'M' as const, price: '$15.99' },
    { size: 'L' as const, price: '$18.99' },
    { size: 'XL' as const, price: '$21.99' }
  ];

  const currentPrice = sizeOptions.find(option => option.size === selectedSize)?.price || '$13.99';

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
      <div className="bg-gray-100 py-4 px-4">
        <div className="max-w-lg mx-auto">
          <h1 className="text-xl sm:text-2xl font-bold leading-tight text-gray-800">{pizza.name}</h1>
        </div>
      </div>

      {/* Pizza Details */}
      <main className="py-6 px-4 pb-8">
        <div className="max-w-lg mx-auto">
          {/* Pizza Image */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="p-6">
              <img 
                src={pizza.image}
                alt={pizza.name}
                className="w-full h-auto object-contain rounded-lg mb-4"
              />
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-800">{pizza.name}</h2>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-red-600">{currentPrice}</div>
                  <div className="text-sm text-gray-500">{pizza.calories}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Size Selection */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Choose Size</h3>
            <div className="flex space-x-3">
              {sizeOptions.map((option) => (
                <button
                  key={option.size}
                  onClick={() => setSelectedSize(option.size)}
                  className={`w-12 h-12 rounded-full border-2 font-bold text-lg transition-all duration-200 touch-manipulation ${
                    selectedSize === option.size
                      ? 'bg-red-600 text-white border-red-600 shadow-lg'
                      : 'bg-white text-gray-700 border-gray-300 active:border-red-400'
                  }`}
                >
                  {option.size}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-gray-700 leading-relaxed">{pizza.description}</p>
          </div>
        </div>
      </main>
    </div>
  );
}