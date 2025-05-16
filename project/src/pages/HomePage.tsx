import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Award, Clock, Users, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import CoffeeCharacter from '../components/CoffeeCharacter';

const HomePage: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="h-hero bg-hero-pattern bg-cover bg-center relative">
        <div className="absolute inset-0 bg-coffee-900 bg-opacity-50"></div>
        <CoffeeCharacter />
        <div className="container-custom h-full flex items-center relative z-10">
          <motion.div 
            className="max-w-2xl text-white"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span 
              className="inline-block text-gold-500 font-serif italic text-xl mb-4"
              variants={fadeIn}
            >
              Premium Coffee Experience
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-6xl font-serif font-bold mb-6 text-shadow"
              variants={fadeIn}
            >
              Discover the Artistry in Every Cup
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-cream-100"
              variants={fadeIn}
            >
              Where exceptional beans meet masterful brewing techniques, creating a symphony of flavor that elevates your coffee journey.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={fadeIn}
            >
              <Link to="/menu" className="btn-primary bg-coffee-700 hover:bg-coffee-800">
                Explore Our Menu
              </Link>
              <Link to="/reservation" className="btn-secondary border-cream-100 text-cream-100 hover:bg-cream-100 hover:text-coffee-800">
                Reserve a Table
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-600 font-serif italic text-lg">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-coffee-800 mt-2 mb-4">Crafting Excellence in Every Detail</h2>
            <p className="text-coffee-600">We combine premium beans, artisanal methods, and a passionate team to create coffee experiences that transcend the ordinary.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-soft text-center hover-zoom"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-coffee-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="text-coffee-700 h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif font-bold text-coffee-800 mb-3">Premium Beans</h3>
              <p className="text-coffee-600">Ethically sourced from the world's finest growing regions, our beans represent the top 1% of global harvests.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-soft text-center hover-zoom"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-coffee-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-coffee-700 h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif font-bold text-coffee-800 mb-3">Master Craftsmanship</h3>
              <p className="text-coffee-600">Our baristas undergo rigorous training and certification to perfect the art and science of coffee preparation.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-soft text-center hover-zoom"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-coffee-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-coffee-700 h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif font-bold text-coffee-800 mb-3">Perfect Timing</h3>
              <p className="text-coffee-600">We meticulously time every extraction to capture the optimal flavor profile unique to each coffee origin.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-soft text-center hover-zoom"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-coffee-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-coffee-700 h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif font-bold text-coffee-800 mb-3">Exceptional Service</h3>
              <p className="text-coffee-600">Our hospitality philosophy centers on creating personalized experiences that delight and surprise.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-600 font-serif italic text-lg">Our Signature Selection</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-coffee-800 mt-2 mb-4">Handcrafted Perfection</h2>
            <p className="text-coffee-600">Each creation represents our passion for excellence and commitment to extraordinary coffee experiences.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="card hover:shadow-xl overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Signature Espresso" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-medium">Signature</div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-serif font-bold text-coffee-800">Signature Espresso</h3>
                  <span className="text-gold-600 font-medium">$8.50</span>
                </div>
                <p className="text-coffee-600 mb-4">Our award-winning blend featuring notes of dark chocolate, caramel, and a gentle citrus finish.</p>
                <Link to="/menu/coffee" className="text-coffee-700 font-medium hover:text-gold-600 transition-colors duration-300 inline-flex items-center">
                  View Details
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              className="card hover:shadow-xl overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src="https://images.pexels.com/photos/2074120/pexels-photo-2074120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Maple Nut Latte" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-coffee-600 text-white px-3 py-1 rounded-full text-sm font-medium">New</div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-serif font-bold text-coffee-800">Maple Nut Latte</h3>
                  <span className="text-gold-600 font-medium">$9.75</span>
                </div>
                <p className="text-coffee-600 mb-4">Velvety espresso blended with steamed milk, pure maple syrup, and toasted hazelnut.</p>
                <Link to="/menu/coffee" className="text-coffee-700 font-medium hover:text-gold-600 transition-colors duration-300 inline-flex items-center">
                  View Details
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              className="card hover:shadow-xl overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src="https://images.pexels.com/photos/230590/pexels-photo-230590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Single Origin Pour Over" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-medium">Premium</div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-serif font-bold text-coffee-800">Ethiopian Yirgacheffe</h3>
                  <span className="text-gold-600 font-medium">$12.00</span>
                </div>
                <p className="text-coffee-600 mb-4">Hand-poured single origin with vibrant floral notes, bergamot essence, and a honey sweetness.</p>
                <Link to="/menu/coffee" className="text-coffee-700 font-medium hover:text-gold-600 transition-colors duration-300 inline-flex items-center">
                  View Details
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link to="/menu" className="btn-primary inline-block">View Complete Menu</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-menu-pattern bg-cover bg-center py-24 relative">
        <div className="absolute inset-0 bg-coffee-900 bg-opacity-70"></div>
        <div className="container-custom relative z-10 text-center">
          <motion.div 
            className="max-w-2xl mx-auto text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-500 font-serif italic text-xl mb-4 inline-block">Elevate Your Experience</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Reserve Your Perfect Moment</h2>
            <p className="text-lg md:text-xl mb-8">Secure your table and enjoy our signature coffee creations in an atmosphere of refined luxury and exceptional service.</p>
            <Link to="/reservation" className="btn-primary bg-gold-600 hover:bg-gold-700 text-coffee-900 text-lg px-8 py-4">
              Make a Reservation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-600 font-serif italic text-lg">Guest Experiences</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-coffee-800 mt-2 mb-4">What Our Guests Say</h2>
            <p className="text-coffee-600">The real measure of our success is in the experiences of those we have the privilege to serve.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-gold-500 mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-coffee-700 mb-6 italic">"The Signature Espresso at Elixir is nothing short of transcendent. Each sip reveals new layers of flavor complexity. It's clear that every step of the process has been meticulously perfected."</p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Sophia Williams" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-coffee-800">Sophia Williams</h4>
                  <p className="text-coffee-500 text-sm">Coffee Connoisseur</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-gold-500 mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-coffee-700 mb-6 italic">"Beyond the exceptional coffee, what makes Elixir truly special is the attention to detail in every aspect of the experience. The ambiance, service, and presentation are all impeccable."</p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="James Chen" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-coffee-800">James Chen</h4>
                  <p className="text-coffee-500 text-sm">Food Critic</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-gold-500 mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-coffee-700 mb-6 italic">"I've traveled the world sampling the finest coffee establishments, and Elixir stands among the very best. Their commitment to sourcing ethical, exceptional beans shines through in every cup."</p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Emma Rodriguez" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-coffee-800">Emma Rodriguez</h4>
                  <p className="text-coffee-500 text-sm">Travel Blogger</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-600 font-serif italic text-lg">Follow Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-coffee-800 mt-2 mb-4">Moments Worth Sharing</h2>
            <p className="text-coffee-600">Join our community on Instagram and be inspired by the artistry and passion that goes into every cup.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.a 
              href="https://instagram.com" 
              className="block overflow-hidden group relative aspect-square"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img 
                src="https://images.pexels.com/photos/636759/pexels-photo-636759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Instagram Post" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-coffee-900 bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8" />
              </div>
            </motion.a>
            
            <motion.a 
              href="https://instagram.com" 
              className="block overflow-hidden group relative aspect-square"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/1727123/pexels-photo-1727123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Instagram Post" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-coffee-900 bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8" />
              </div>
            </motion.a>
            
            <motion.a 
              href="https://instagram.com" 
              className="block overflow-hidden group relative aspect-square"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img 
                src="https://images.pexels.com/photos/208517/pexels-photo-208517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Instagram Post" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-coffee-900 bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8" />
              </div>
            </motion.a>
            
            <motion.a 
              href="https://instagram.com" 
              className="block overflow-hidden group relative aspect-square"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img 
                src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Instagram Post" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-coffee-900 bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8" />
              </div>
            </motion.a>
          </div>
          
          <div className="text-center mt-8">
            <a href="https://instagram.com" className="text-coffee-700 font-medium hover:text-gold-600 transition-colors duration-300 inline-flex items-center">
              Follow us on Instagram
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;