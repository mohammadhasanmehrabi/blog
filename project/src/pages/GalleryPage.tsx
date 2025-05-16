import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const GalleryPage: React.FC = () => {
  const galleryImages = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Perfect Pour Over',
      category: 'Coffee Art'
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/1727123/pexels-photo-1727123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Morning Espresso',
      category: 'Beverages'
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/2074120/pexels-photo-2074120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Latte Art Heart',
      category: 'Coffee Art'
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Classic Espresso',
      category: 'Beverages'
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Roasting Process',
      category: 'Behind the Scenes'
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/6802983/pexels-photo-6802983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Coffee Shop Interior',
      category: 'Ambiance'
    },
    {
      id: 7,
      url: 'https://images.pexels.com/photos/4349865/pexels-photo-4349865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Barista at Work',
      category: 'Behind the Scenes'
    },
    {
      id: 8,
      url: 'https://images.pexels.com/photos/6802974/pexels-photo-6802974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Coffee and Pastries',
      category: 'Food'
    },
    {
      id: 9,
      url: 'https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Coffee Beans',
      category: 'Ingredients'
    },
    {
      id: 10,
      url: 'https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Café Atmosphere',
      category: 'Ambiance'
    },
    {
      id: 11,
      url: 'https://images.pexels.com/photos/4792551/pexels-photo-4792551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Private Events',
      category: 'Events'
    },
    {
      id: 12,
      url: 'https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Signature Drinks',
      category: 'Beverages'
    }
  ];

  const categories = ['All', 'Coffee Art', 'Beverages', 'Behind the Scenes', 'Ambiance', 'Food', 'Ingredients', 'Events'];
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null);

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="h-hero-sm bg-about-pattern bg-cover bg-center relative">
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
              Our Gallery
            </motion.h1>
            <motion.p 
              className="text-xl text-cream-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Capturing moments of coffee perfection
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-coffee-600 text-white shadow-md'
                    : 'bg-cream-100 text-coffee-700 hover:bg-cream-200'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                className="relative group overflow-hidden rounded-lg cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                onClick={() => setSelectedImage(image.id)}
              >
                <div className="aspect-square">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-coffee-900 bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-serif font-bold mb-2">{image.title}</h3>
                    <p className="text-cream-100">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full">
            <button 
              className="absolute top-4 right-4 text-white hover:text-cream-100 transition-colors duration-300"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={galleryImages.find(img => img.id === selectedImage)?.url} 
              alt={galleryImages.find(img => img.id === selectedImage)?.title}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Instagram Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom text-center">
          <motion.div 
            className="max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-600 font-serif italic text-lg">Follow Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-coffee-800 mt-2 mb-4">Join Us on Instagram</h2>
            <p className="text-coffee-600">Follow us for daily doses of coffee inspiration, behind-the-scenes moments, and special announcements.</p>
          </motion.div>

          <div className="flex items-center justify-center mb-8">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-coffee-600 text-white rounded-full hover:bg-coffee-700 transition-colors duration-300"
            >
              <Instagram className="h-5 w-5" />
              <span>@elixircoffee</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.slice(0, 4).map((image) => (
              <motion.a
                key={image.id}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden group relative aspect-square"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-coffee-900 bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;