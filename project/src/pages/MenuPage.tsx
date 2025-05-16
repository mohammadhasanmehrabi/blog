import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  new?: boolean;
}

const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');
  
  const categories = [
    { id: 'coffee', name: 'Coffee' },
    { id: 'tea', name: 'Tea' },
    { id: 'pastries', name: 'Pastries' },
    { id: 'breakfast', name: 'Breakfast' },
    { id: 'lunch', name: 'Lunch' }
  ];
  
  const menuItems: MenuItem[] = [
    // Coffee
    {
      id: 1,
      name: 'Signature Espresso',
      description: 'Our award-winning blend featuring notes of dark chocolate, caramel, and a gentle citrus finish.',
      price: 8.50,
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'coffee',
      featured: true
    },
    {
      id: 2,
      name: 'Maple Nut Latte',
      description: 'Velvety espresso blended with steamed milk, pure maple syrup, and toasted hazelnut.',
      price: 9.75,
      image: 'https://images.pexels.com/photos/2074120/pexels-photo-2074120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'coffee',
      new: true
    },
    {
      id: 3,
      name: 'Ethiopian Yirgacheffe',
      description: 'Hand-poured single origin with vibrant floral notes, bergamot essence, and a honey sweetness.',
      price: 12.00,
      image: 'https://images.pexels.com/photos/230590/pexels-photo-230590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'coffee'
    },
    {
      id: 4,
      name: 'Artisan Cold Brew',
      description: 'Steeped for 18 hours to create a smooth, rich concentrate with notes of chocolate and almond.',
      price: 7.50,
      image: 'https://images.pexels.com/photos/2638019/pexels-photo-2638019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'coffee'
    },
    {
      id: 5,
      name: 'Vanilla Bean Cortado',
      description: 'Equal parts espresso and silky milk with house-made vanilla bean syrup.',
      price: 8.00,
      image: 'https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'coffee'
    },
    {
      id: 6,
      name: 'Caramel Macchiato',
      description: 'Espresso marked with steamed milk and vanilla, topped with caramel drizzle.',
      price: 8.75,
      image: 'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'coffee'
    },
    // Tea
    {
      id: 7,
      name: 'Jade Mountain Oolong',
      description: 'Taiwanese high mountain oolong with a creamy texture and notes of orchid and butter.',
      price: 10.50,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'tea',
      featured: true
    },
    {
      id: 8,
      name: 'Imperial Matcha Latte',
      description: 'Ceremonial grade matcha whisked with steamed milk and a touch of honey.',
      price: 9.00,
      image: 'https://images.pexels.com/photos/5946630/pexels-photo-5946630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'tea'
    },
    {
      id: 9,
      name: 'Darjeeling First Flush',
      description: 'The champagne of teas with muscatel notes and a bright, elegant character.',
      price: 8.50,
      image: 'https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'tea'
    },
    {
      id: 10,
      name: 'Earl Grey Lavender',
      description: 'Classic Earl Grey enhanced with French lavender blossoms.',
      price: 7.50,
      image: 'https://images.pexels.com/photos/1872895/pexels-photo-1872895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'tea'
    },
    // Pastries
    {
      id: 11,
      name: 'Almond Croissant',
      description: 'Buttery layers filled with rich almond cream and topped with sliced almonds.',
      price: 7.25,
      image: 'https://images.pexels.com/photos/2955820/pexels-photo-2955820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'pastries',
      featured: true
    },
    {
      id: 12,
      name: 'Blueberry Lavender Scone',
      description: 'Tender scone studded with wild blueberries and infused with subtle lavender.',
      price: 6.50,
      image: 'https://images.pexels.com/photos/3992131/pexels-photo-3992131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'pastries',
      new: true
    },
    {
      id: 13,
      name: 'Dark Chocolate Tart',
      description: 'Rich chocolate ganache in a buttery crust with sea salt.',
      price: 8.00,
      image: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'pastries'
    },
    {
      id: 14,
      name: 'Vanilla Bean Éclair',
      description: 'Choux pastry filled with vanilla bean custard and topped with chocolate.',
      price: 7.75,
      image: 'https://images.pexels.com/photos/2373520/pexels-photo-2373520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'pastries'
    },
    // Breakfast
    {
      id: 15,
      name: 'Truffle Egg Brioche',
      description: 'Soft brioche filled with truffle-infused scrambled eggs and aged cheddar.',
      price: 14.50,
      image: 'https://images.pexels.com/photos/139746/pexels-photo-139746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'breakfast',
      featured: true
    },
    {
      id: 16,
      name: 'Smoked Salmon Tartine',
      description: 'Open-faced on artisan sourdough with herb cream cheese, capers, and pickled onion.',
      price: 16.00,
      image: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'breakfast'
    },
    {
      id: 17,
      name: 'Acai Bowl',
      description: 'Blended acai topped with granola, fresh berries, and honey.',
      price: 13.50,
      image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'breakfast'
    },
    // Lunch
    {
      id: 18,
      name: 'Harvest Grain Bowl',
      description: 'Ancient grains, seasonal vegetables, avocado, and soft-boiled egg with miso vinaigrette.',
      price: 18.50,
      image: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'lunch',
      featured: true
    },
    {
      id: 19,
      name: 'Truffled Mushroom Panini',
      description: 'Wild mushrooms, fontina cheese, and truffle aioli on pressed rustic bread.',
      price: 16.75,
      image: 'https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'lunch'
    },
    {
      id: 20,
      name: 'Mediterranean Salad',
      description: 'Mixed greens, feta, olives, cherry tomatoes with herb vinaigrette.',
      price: 15.50,
      image: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'lunch'
    }
  ];
  
  const filteredItems = menuItems.filter(item => item.category === activeCategory);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="h-hero-sm bg-menu-pattern bg-cover bg-center relative">
        <div className="absolute inset-0 bg-coffee-900 bg-opacity-60"></div>
        <div className="container-custom h-full flex items-center justify-center relative z-10">
          <motion.div 
            className="text-center max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-serif font-bold mb-4 text-white text-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Menu
            </motion.h1>
            <motion.p 
              className="text-xl text-cream-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Discover our artisanal offerings, crafted with passion and precision
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      {/* Menu Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Category Tabs */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id 
                    ? 'bg-coffee-600 text-white shadow-md' 
                    : 'bg-cream-100 text-coffee-700 hover:bg-cream-200'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
          
          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <motion.div 
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative h-64">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                  {item.featured && (
                    <div className="absolute top-4 right-4 bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                  {item.new && (
                    <div className="absolute top-4 right-4 bg-coffee-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      New
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-bold text-coffee-800">{item.name}</h3>
                    <span className="text-gold-600 font-medium">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-coffee-600 mb-4">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-600 font-serif italic text-lg">Meet Our Team</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-coffee-800 mt-2 mb-4">The Artisans Behind Your Coffee</h2>
            <p className="text-coffee-600">Our passionate team of coffee experts brings years of experience and dedication to every cup.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative mb-6 group overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/3799786/pexels-photo-3799786.jpeg" 
                  alt="Jonathan Elixir" 
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-coffee-900 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>
              <h3 className="text-xl font-serif font-bold text-coffee-800 mb-2">Jonathan Elixir</h3>
              <p className="text-gold-600 font-medium mb-4">Master Roaster</p>
              <p className="text-coffee-600">20+ years of experience in specialty coffee roasting and sourcing.</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative mb-6 group overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/8106773/pexels-photo-8106773.jpeg" 
                  alt="Isabella Martinez" 
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-coffee-900 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>
              <h3 className="text-xl font-serif font-bold text-coffee-800 mb-2">Isabella Martinez</h3>
              <p className="text-gold-600 font-medium mb-4">Head Barista</p>
              <p className="text-coffee-600">Award-winning barista with expertise in latte art and brewing techniques.</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative mb-6 group overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/5331191/pexels-photo-5331191.jpeg" 
                  alt="Marcus Thompson" 
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-coffee-900 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>
              <h3 className="text-xl font-serif font-bold text-coffee-800 mb-2">Marcus Thompson</h3>
              <p className="text-gold-600 font-medium mb-4">Coffee Educator</p>
              <p className="text-coffee-600">Certified Q Grader sharing knowledge through our barista training program.</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative mb-6 group overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg" 
                  alt="Elena Laurent" 
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-coffee-900 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>
              <h3 className="text-xl font-serif font-bold text-coffee-800 mb-2">Elena Laurent</h3>
              <p className="text-gold-600 font-medium mb-4">Pastry Chef</p>
              <p className="text-coffee-600">Creating artisanal pastries that perfectly complement our coffee selection.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-coffee-800 text-white">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-500 font-serif italic text-lg">Coffee Experience</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream-100 mt-2 mb-4">Immerse Yourself in Coffee Culture</h2>
            <p className="text-cream-200">Discover the art and science of coffee through our curated experiences.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-coffee-700 rounded-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-serif font-bold text-cream-100 mb-4">Barista Classes</h3>
              <p className="text-cream-200 mb-6">Learn the art of coffee preparation from our expert baristas. Master espresso extraction, milk steaming, and latte art.</p>
              <ul className="text-cream-200 space-y-2 mb-6">
                <li>• Basic and advanced techniques</li>
                <li>• Equipment handling</li>
                <li>• Coffee bean selection</li>
                <li>• Hands-on practice</li>
              </ul>
              <p className="text-gold-500 font-medium">Starting at $150 per session</p>
            </motion.div>

            <motion.div 
              className="bg-coffee-700 rounded-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-serif font-bold text-cream-100 mb-4">Coffee Tasting</h3>
              <p className="text-cream-200 mb-6">Experience our curated selection of single-origin coffees and signature blends through guided tastings.</p>
              <ul className="text-cream-200 space-y-2 mb-6">
                <li>• Flavor profile analysis</li>
                <li>• Origin stories</li>
                <li>• Brewing methods</li>
                <li>• Pairing suggestions</li>
              </ul>
              <p className="text-gold-500 font-medium">$75 per person</p>
            </motion.div>

            <motion.div 
              className="bg-coffee-700 rounded-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-serif font-bold text-cream-100 mb-4">Roastery Tour</h3>
              <p className="text-cream-200 mb-6">Go behind the scenes of our roasting facility and learn about the journey from bean to cup.</p>
              <ul className="text-cream-200 space-y-2 mb-6">
                <li>• Roasting demonstration</li>
                <li>• Bean selection process</li>
                <li>• Quality control</li>
                <li>• Exclusive tastings</li>
              </ul>
              <p className="text-gold-500 font-medium">$95 per person</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MenuPage;