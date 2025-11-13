import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import HamburgerMenu from './HamburgerMenu';
import { useState } from 'react';

interface CategoryPageProps {
  categories: Array<{
    name: string;
    slug: string;
    image: string;
    description: string;
    items?: Array<{
      name: string;
      description: string;
      price: string;
      image: string;
      calories?: string;
      slug?: string;
    }>;
  }>;
}

export default function CategoryPage({ categories }: CategoryPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find(cat => cat.slug === slug);
  const [expandedDressing, setExpandedDressing] = useState<number | null>(null);

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Category not found</h1>
          <Link to="/" className="text-cyan-700 hover:text-cyan-800">
            Return to homepage
          </Link>
        </div>
      </div>
    );
  }

  // Specialty Pizza items
  const specialtyPizzaItems = [
    {
      name: "Extravaganzza™",
      price: "$13.99 - $21.99",
      calories: "cal: 270 - 510",
      slug: "extravaganzza",
      description: "Pepperoni, ham, Italian sausage, beef, fresh onions, fresh green peppers, fresh mushrooms and black olives, all sandwiched between two layers of cheese made with 100% real mozzarella.",
      image: "/images/pizzas/ExtravaganZZa.png"
    },
    {
      name: "MeatZZa™",
      price: "$13.99 - $21.99",
      calories: "cal: 260 - 480",
      slug: "meatzza",
      description: "Pepperoni, ham, Italian sausage and beef, all sandwiched between two layers of cheese made with 100% real mozzarella.",
      image: "/images/pizzas/MeatZZa.png"
    },
    {
      name: "Philly Cheese Steak",
      price: "$13.99 - $21.99",
      calories: "cal: 230 - 400",
      slug: "philly-cheese-steak",
      description: "Tender slices of steak, fresh onions, fresh green peppers, fresh mushrooms, provolone and American cheeses.",
      image: "/images/pizzas/Philly_Cheese_Steak.png"
    },
    {
      name: "Honolulu Hawaiian",
      price: "$13.99 - $21.99",
      calories: "cal: 240 - 430",
      slug: "honolulu-hawaiian",
      description: "Sliced ham, smoked bacon, pineapple, provolone and cheese made with 100% real mozzarella.",
      image: "/images/pizzas/Honolulu_Hawaiian.png"
    },
    {
      name: "Pacific Veggie",
      price: "$13.99 - $21.99",
      calories: "cal: 220 - 400",
      slug: "pacific-veggie",
      description: "Fresh spinach, fresh onions, fresh mushrooms, diced tomatoes, black olives, feta, provolone, cheddar, cheese made with 100% real mozzarella, then sprinkled with garlic herb seasoning.",
      image: "/images/pizzas/Pacific_Veggie.png"
    },
    {
      name: "Deluxe",
      price: "$13.99 - $21.99",
      calories: "cal: 240 - 410",
      slug: "deluxe",
      description: "Pepperoni, Italian sausage, fresh green peppers, fresh mushrooms, fresh onions and cheese made with 100% real mozzarella.",
      image: "/images/pizzas/Deluxe_Pizza.png"
    },
    {
      name: "Ultimate Pepperoni™",
      price: "$13.99 - $21.99",
      calories: "cal: 250 - 480",
      slug: "ultimate-pepperoni",
      description: "Two layers of pepperoni sandwiched between provolone, Parmesan-Asiago and cheese made with 100% real mozzarella, then sprinkled with oregano.",
      image: "/images/pizzas/Ultimate_Pepperoni.png"
    },
    {
      name: "Cali Chicken Bacon Ranch",
      price: "$13.99 - $21.99",
      calories: "cal: 280 - 530",
      slug: "cali-chicken-bacon-ranch",
      description: "Grilled chicken breast, smoked bacon, diced tomatoes, provolone and cheese made with 100% real mozzarella.",
      image: "/images/pizzas/Cali_Chicken_Bacon_Ranch.png"
    },
    {
      name: "Buffalo Chicken",
      price: "$13.99 - $21.99",
      calories: "cal: 250 - 450",
      slug: "buffalo-chicken",
      description: "Grilled chicken breast, fresh onions, provolone, American cheese, cheddar, cheese made with 100% real mozzarella and drizzled with hot buffalo sauce.",
      image: "/images/pizzas/Buffalo_Chicken.png"
    },
    {
      name: "Memphis BBQ Chicken",
      price: "$13.99 - $21.99",
      calories: "cal: 240 - 460",
      slug: "memphis-bbq-chicken",
      description: "Grilled chicken breast, honey BBQ sauce, fresh onions, cheddar, provolone and cheese made with 100% real mozzarella.",
      image: "/images/pizzas/Memphis_BBQ_Chicken.png"
    },
    {
      name: "Wisconsin 6 Cheese",
      price: "$13.99 - $21.99",
      calories: "cal: 230 - 440",
      slug: "wisconsin-6-cheese",
      description: "Feta, provolone, cheddar, Parmesan-Asiago, cheese made with 100% real mozzarella, then sprinkled with oregano.",
      image: "/images/pizzas/Wisconsin_6-Cheese.png"
    },
    {
      name: "Spinach and Feta",
      price: "$13.99 - $21.99",
      calories: "cal: 230 - 420",
      slug: "spinach-and-feta",
      description: "Creamy Alfredo sauce, fresh spinach, fresh onions, feta, Parmesan-Asiago, provolone and cheese made with 100% real mozzarella.",
      image: "/images/pizzas/Spinach_Feta.png"
    }
  ];

  // Loaded Tots items
  const loadedTotsItems = [
    {
      name: "Philly Cheesesteak",
      price: "$8.99",
      calories: "Cal: 780",
      description: "Crispy tots loaded with tender steak, peppers, onions, and melted cheese",
      image: "/images/loaded_tots/F_PHLLYSTK.jpg",
      slug: "philly-cheesesteak"
    },
    {
      name: "Melty 3-Cheese",
      price: "$8.99",
      calories: "Cal: 730",
      description: "Golden tots topped with a blend of three melted cheeses",
      image: "/images/loaded_tots/F_M3CHEESE.jpg",
      slug: "melty-3-cheese"
    },
    {
      name: "Cheddar Bacon",
      price: "$8.99",
      calories: "Cal: 740",
      description: "Crispy tots loaded with sharp cheddar cheese and crispy bacon bits",
      image: "/images/loaded_tots/F_CHEDBCN.jpg",
      slug: "cheddar-bacon"
    }
  ];



  // Sandwiches Items

   const sandwichesItems = [
    {
      name: "Philly Cheese Steak",
      price: "$8.99",
      calories: "Cal: 380",
      description: "Tender slices of steak, American and provolone cheeses, fresh onions, fresh green peppers and fresh mushrooms.",
      image: "/images/sandwitches/S_PHIL.jpg",
      slug: "philly-cheese-steak"
    },
    {
      name: "Chicken Bacon Ranch",
      price: "$8.99",
      calories: "Cal: 450",
      description: "Grilled chicken breast, smoked bacon, creamy ranch and provolone cheese.",
      image: "/images/sandwitches/S_CHIKKBR.jpg",
      slug: "chicken-bacon-ranch"
    },
    {
      name: "Italian",
      price: "$8.99",
      calories: "Cal: 430",
      description: "Pepperoni and ham topped with banana peppers, fresh green peppers, fresh onions and provolone cheese.",
      image: "/images/sandwitches/S_ITALIAN.jpg",
      slug: "italian"
    },
     {
      name: "Chicken Parm",
      price: "$8.99",
      calories: "Cal: 400",
      description: "Grilled chicken breast, tomato-basil marinara, Parmesan-Asiago and provolone cheeses.",
      image: "/images/sandwitches/S_CHIKP.jpg",
      slug: "chicken-parm"
    },
     {
       name: "Buffalo Chicken",
       price: "$8.99",
      calories: "Cal: 430",
      description: "Grilled chicken breast, creamy blue cheese sauce, fresh onions, hot buffalo sauce, provolone, cheddar and cheese made with 100% real mozzarella.",
      image: "/images/sandwitches/S_BUFC.jpg",
      slug: "buffalo-chicken"
     },
     {
       name: "Chicken Habanero",
       price: "$8.99",
      calories: "Cal: 390",
      description: "Grilled chicken breast, pineapple, jalapeños, sweet mango habanero sauce, provolone, cheddar and cheese made with 100% real mozzarella.",
      image: "/images/sandwitches/S_CHHB.jpg",
      slug: "chicken-habanero"
     }
  ];

  // Pastas Items

  const pastasItems = [
    {
      name: "Chicken Alfredo",
      description: "Grilled chicken breast and creamy Alfredo sauce mixed with penne pasta and baked to perfection.",
      price: "$7.99 - $8.99",
      calories: "Cal: 600 - 690",
      image: "/images/penne_pasta/S_ALFR.jpg",
      slug: "chicken-alfredo"
    },
    {
      name: "Italian Sausage Marinara",
      description: "Penne pasta baked in zesty tomato-basil marinara sauce with Italian sausage, a blend of Italian seasonings and provolone cheese.",
      price: "$7.99 - $8.99",
      calories: "Cal: 700 - 740",
      image: "/images/penne_pasta/S_ITALMAR.jpg",
      slug: "italian-sausage-marinara"
    },
    {
      name: "Build Your Own Pasta",
      description: "Create your own perfect pasta with your choice of sauce and toppings, baked to perfection.",
      price: "$7.99 - $8.99",
      calories: "Cal: 340 - 1070",
      image: "/images/penne_pasta/S_BUILD.jpg",
      slug: "build-your-own-pasta"
    },
     {
      name: "Five Cheese Mac & Cheese",
      description: "Creamy macaroni and cheese made with five different cheeses for the ultimate comfort food experience.",
      price: "$8.99",
      calories: "Cal: 450",
      image: "/images/salads/F_GARDEN.jpg", // Temporary placeholder
      slug: "five-cheese-mac-cheese"
    },
    {
      name: "Spicy Buffalo Mac & Cheese",
      description: "Macaroni and cheese with a spicy buffalo kick, topped with crispy breadcrumbs and green onions.",
      price: "$9.99",
      calories: "Cal: 480",
      image: "/images/salads/F_GARDEN.jpg", // Temporary placeholder
      slug: "spicy-buffalo-mac-cheese"
    }
  ];

  // Dips & Bread Items

  const dipsBreadItems = [
    {
      name: "Parmesan Bread Bites",
      description: "Oven-baked bread bites handmade from fresh buttery-tasting dough and seasoned with garlic and Parmesan.",
      price: "16 for $8.99 • 32 for $14.99",
      calories: "220",
      image: "/images/dip_breads/F_PBITES.jpg",
      slug: "parmesan-bread-bites"
    },
    {
      name: "Garlic Bites",
      description: "Oven-baked bread bites handmade from fresh buttery-tasting dough and seasoned with savory garlic and herbs.",
      price: "16 for $8.99 • 32 for $14.99",
      calories: "210",
      image: "/images/dip_breads/F_PBITES.jpg",
      slug: "garlic-bites"
    },
    {
      name: "Stuffed Cheesy Bread",
      description: "Oven-baked breadsticks stuffed with cheese and covered in a blend of cheeses made with 100% real mozzarella and cheddar. Try all three varieties.",
      price: "$9.99",
      calories: "150 - 170",
      image: "/images/dip_breads/F_SCBRD.jpg",
      slug: "stuffed-cheesy-bread"
    }
  ];

  // Salads Items

  const saladsItems = [
    {
      name: "Classic Garden",
      description: "A crisp and colorful combination of grape tomatoes, red onions, carrots, red cabbage, cheddar cheese and brioche garlic croutons, all atop a blend of romaine and iceberg lettuce.",
      price: "$7.99",
      calories: "Cal: 80",
      image: "/images/salads/F_GARDEN.jpg",
      slug: "classic-garden"
    },
    {
      name: "Chicken Caesar",
      description: "The makings of a classic: roasted white meat chicken, Parmesan cheese and brioche garlic croutons, all atop a blend of romaine and iceberg lettuce.",
      price: "$7.99",
      calories: "Cal: 220",
      image: "/images/salads/F_CCAESAR.jpg",
      slug: "chicken-caesar"
    }
  ];

  const dessertsItems = [
    {
      name: "Cinnamon Bites",
      description: "Oven-baked bread bites handmade from fresh buttery-tasting dough and seasoned with sweet cinnamon and sugar.",
      price: "16 for $8.99 • 32 for $14.99",
      calories: "240",
      image: "/images/dip_breads/F_PBITES.jpg",
      slug: "cinnamon-bites"
    },
    {
      name: "Chocolate Lava Crunch Cakes",
      description: "Oven-baked chocolate cakes, crunchy on the outside with molten chocolate fudge on the inside.",
      price: "3 for 9.99",
      calories: "Cal: 350",
      image: "/images/desserts/F_LAVA.jpg",
      slug: "chocolate-lava-crunch-cakes"
    },
    {
      name: "Domino's Marbled Cookie Brownie™",
      description: "An irresistibly warm and gooey blend of milk chocolate chunk cookie and fudge brownie. This sharable dessert is oven-baked at the time of order and cut into 9 pieces.",
      price: "9 for $9.99",
      calories: "Cal: 200",
      image: "/images/desserts/F_MRBRWNE.jpg",
      slug: "marbled-cookie-brownie"
    }
  ];

  const extrasItems: Array<{
    name: string;
    description: string;
    price: string;
    calories: string;
    image: string;
  }> = [
    // Empty array - Extras will redirect directly to dipping cups page
  ];

  // Chicken items
  const chickenItems = [
    {
      name: "Bone-In Wings",
      description: "Crispy bone-in wings with your choice of sauce",
      price: "$9.99 - $32.99",
      calories: "Cal: 250 - 390",
      image: "/images/chicken/bone_in_wings.png",
      slug: "bone-in-wings"
    },
    {
      name: "Boneless Chicken",
      description: "Tender boneless chicken pieces with premium seasonings",
      price: "$9.99 - $32.99",
      calories: "Cal: 170",
      image: "/images/chicken/S_BONELESS.jpg",
      slug: "boneless-chicken"
    },
    {
      name: "Loaded Chicken",
      description: "Chicken loaded with delicious toppings and flavors",
      price: "$7.99",
      calories: "Cal: 190 - 210",
      image: "/images/chicken/S_Loaded.jpg",
      slug: "loaded-chicken"
    }
  ];

  // Use specialty pizza items for specialty-pizzas category, otherwise use sample items
  const sampleItems = [
    {
      name: "Signature Special",
      description: "Our most popular item with premium ingredients and special sauce",
      price: "$12.99",
      calories: "",
      image: category?.image || "/images/categories/specialty.png"
    },
    {
      name: "Classic Choice",
      description: "Traditional recipe that's been a customer favorite for years",
      price: "$9.99",
      calories: "",
      image: category?.image || "/images/categories/specialty.png"
    },
    {
      name: "Deluxe Option",
      description: "Extra toppings and premium quality for the ultimate experience",
      price: "$15.99",
      calories: "",
      image: category?.image || "/images/categories/specialty.png"
    }
  ];

  const menuItems = category.slug === 'specialty-pizzas' 
    ? specialtyPizzaItems 
    : category.slug === 'chicken'
    ? chickenItems
    : category.slug === 'loaded-tots' 
    ? loadedTotsItems 
    : category.slug === 'sandwiches'
    ? sandwichesItems
    : category.slug === 'penne-pastas'
    ? pastasItems
    : category.slug === 'dips-breads'
    ? dipsBreadItems
    : category.slug === 'salads'
    ? saladsItems
    : category.slug === 'desserts'
    ? dessertsItems
    : category.slug === 'extras'
    ? extrasItems
    : (category.items || sampleItems);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hamburger Menu */}
      <HamburgerMenu categories={categories.map(cat => ({ name: cat.name, slug: cat.slug }))} />

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
          <h1 className="text-xl sm:text-2xl font-bold leading-tight text-gray-800 uppercase text-left">DOMINO'S {category.name}</h1>
        </div>
      </div>

      {/* Menu Items */}
      <main className="py-4 px-3 pb-8">
        <div className="space-y-4">
          {menuItems.map((item, index) => (
            <div key={index} className="block bg-white rounded-lg shadow-md transition-shadow duration-200 overflow-hidden border border-gray-100">
              <Link
                to={
                  category.slug === 'specialty-pizzas' && 'slug' in item ? `/pizza/${item.slug}` : 
                  category.slug === 'chicken' && 'slug' in item ? `/chicken/${item.slug}` : 
                  category.slug === 'loaded-tots' && 'slug' in item ? `/loaded-tots/${item.slug}` : 
                  category.slug === 'sandwiches' && 'slug' in item ? `/sandwiches/${item.slug}` : 
                  category.slug === 'penne-pastas' && 'slug' in item ? `/penne-pastas/${item.slug}` : 
                  category.slug === 'dips-breads' && 'slug' in item ? `/dips-breads/${item.slug}` : 
                  category.slug === 'salads' && 'slug' in item ? `/salads/${item.slug}` : 
                  category.slug === 'desserts' && 'slug' in item ? `/desserts/${item.slug}` : 
                  category.slug === 'extras' && item.name === 'Drinks' ? '/drinks' : 
                  category.slug === 'extras' && item.name === 'Dipping Cups' ? '/dipping-cups' : 
                  '#'
                }
                className="block"
              >
                <div className="p-4">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-800 leading-tight mb-1">{item.name}</h3>
                      <div className="flex flex-col space-y-1">
                        <span className="text-xl font-bold text-cyan-700">{item.price}</span>
                        {'calories' in item && item.calories && (
                          <span className="text-sm text-gray-500">{item.calories}</span>
                        )}
                      </div>
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
              </Link>
              
              {/* Dressing dropdown for salads */}
              {category.slug === 'salads' && 'dressings' in item && Array.isArray(item.dressings) && item.dressings.length > 0 && (
                <div className="px-4 pb-4">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setExpandedDressing(expandedDressing === index ? null : index);
                    }}
                    className="flex items-center gap-2 px-3 py-2 text-sm bg-gray-100 rounded-md hover:bg-gray-200 transition-colors w-full justify-between"
                  >
                    <span>View Dressings</span>
                    {expandedDressing === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  
                  {/* Dressing dropdown content */}
                  {expandedDressing === index && (
                    <div className="mt-3 p-3 bg-gray-50 rounded-md">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="font-semibold border-b border-gray-300 pb-1">Dressing</div>
                        <div className="font-semibold border-b border-gray-300 pb-1">Calories</div>
                        {Array.isArray(item.dressings) && item.dressings.map((dressing: any, dressingIndex: number) => (
                          <>
                            <div key={`${dressingIndex}-name`} className="text-gray-700 py-1">{dressing.name}</div>
                            <div key={`${dressingIndex}-calories`} className="text-gray-700 py-1">{dressing.calories}</div>
                          </>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}