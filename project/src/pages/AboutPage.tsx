import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Award, Clock, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
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
              Our Story
            </motion.h1>
            <motion.p 
              className="text-xl text-cream-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              The passionate pursuit of coffee perfection since 2010
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold-600 font-serif italic text-lg">Our Journey</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-coffee-800 mt-2 mb-6">A Passion for Excellence</h2>
              <p className="text-coffee-700 mb-4 leading-relaxed">
                Founded in 2010 by master barista Jonathan Elixir, our establishment began with a simple yet profound vision: to elevate the coffee experience to an art form worthy of the finest culinary traditions.
              </p>
              <p className="text-coffee-700 mb-4 leading-relaxed">
                What started as a small roastery in the heart of the city has evolved into a renowned destination for coffee enthusiasts and connoisseurs seeking exceptional quality and craftsmanship in every cup.
              </p>
              <p className="text-coffee-700 mb-8 leading-relaxed">
                Our journey has been marked by an unwavering commitment to sourcing the world's finest beans, perfecting traditional techniques, and innovating new approaches to coffee preparation that honor the complexities and nuances of this extraordinary crop.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gold-500 mr-2"></div>
                  <span className="text-coffee-800 font-medium">Established 2010</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gold-500 mr-2"></div>
                  <span className="text-coffee-800 font-medium">5 International Awards</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gold-500 mr-2"></div>
                  <span className="text-coffee-800 font-medium">7 Locations Worldwide</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our coffee journey" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded shadow-lg hidden md:block">
                <img 
                  src="https://images.pexels.com/photos/942299/pexels-photo-942299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Coffee beans" 
                  className="w-24 h-24 object-cover rounded"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded shadow-lg hidden md:block">
                <img 
                  src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Espresso" 
                  className="w-24 h-24 object-cover rounded"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-600 font-serif italic text-lg">Our Philosophy</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-coffee-800 mt-2 mb-4">The Principles That Guide Us</h2>
            <p className="text-coffee-600">At the heart of our approach to coffee lies a set of core values that inform everything we do.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-coffee-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Coffee className="text-coffee-700 h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif font-bold text-coffee-800 mb-4">Quality Without Compromise</h3>
              <p className="text-coffee-600">We meticulously select only the top 1% of globally harvested beans, focusing on distinctive flavor profiles that showcase the unique terroir of each origin.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-coffee-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="text-coffee-700 h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif font-bold text-coffee-800 mb-4">Artisanal Craftsmanship</h3>
              <p className="text-coffee-600">Every step in our process honors traditional methods while embracing innovation that enhances the coffee's natural characteristics and complexity.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-coffee-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="text-coffee-700 h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif font-bold text-coffee-800 mb-4">Ethical Relationships</h3>
              <p className="text-coffee-600">We maintain direct relationships with our growers, ensuring fair compensation and sustainable farming practices that benefit both communities and the environment.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-coffee-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Clock className="text-coffee-700 h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif font-bold text-coffee-800 mb-4">Continuous Learning</h3>
              <p className="text-coffee-600">Our team engages in ongoing education and experimentation, constantly refining our understanding of coffee's vast potential and pushing the boundaries of excellence.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-600 font-serif italic text-lg">The Faces Behind Elixir</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-coffee-800 mt-2 mb-4">Meet Our Passionate Team</h2>
            <p className="text-coffee-600">Our dedicated professionals bring decades of combined experience and an unwavering commitment to coffee excellence.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative mb-6 group overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/3799786/pexels-photo-3799786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Jonathan Elixir" 
                  className="w-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-coffee-900 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>
              <h3 className="text-xl font-serif font-bold text-coffee-800 mb-2">Jonathan Elixir</h3>
              <p className="text-gold-600 font-medium mb-4">Founder & Master Roaster</p>
              <p className="text-coffee-600">With over 20 years in specialty coffee, Jonathan's palate and roasting expertise have garnered international recognition.</p>
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
                  src="https://images.pexels.com/photos/8106773/pexels-photo-8106773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Isabella Martinez" 
                  className="w-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-coffee-900 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>
              <h3 className="text-xl font-serif font-bold text-coffee-800 mb-2">Isabella Martinez</h3>
              <p className="text-gold-600 font-medium mb-4">Head Barista & Trainer</p>
              <p className="text-coffee-600">A champion barista with multiple competition titles, Isabella leads our barista training program with precision and passion.</p>
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
                  src="https://images.pexels.com/photos/5331191/pexels-photo-5331191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Marcus Thompson" 
                  className="w-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-coffee-900 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>
              <h3 className="text-xl font-serif font-bold text-coffee-800 mb-2">Marcus Thompson</h3>
              <p className="text-gold-600 font-medium mb-4">Sourcing Director</p>
              <p className="text-coffee-600">Marcus travels to coffee-growing regions worldwide to forge direct relationships with our producer partners.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Achievements */}
      <section className="section-padding bg-coffee-800 text-white">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-500 font-serif italic text-lg">Recognition of Excellence</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream-100 mt-2 mb-4">Our Achievements</h2>
            <p className="text-cream-200">While our true reward is in the satisfaction of our guests, we're honored by the recognition we've received.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-gold-500 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-cream-100 mb-2">World Barista Championship</h3>
              <p className="text-gold-500 font-medium mb-4">2022 Finalist</p>
              <p className="text-cream-200">Isabella Martinez represented our team with distinction at the world's most prestigious barista competition.</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-gold-500 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 17.207l-5.5 3.337 1.477-6.36-4.969-4.582 6.553-.587 2.439-6.015 2.439 6.015 6.553.587-4.969 4.582 1.477 6.36z"/>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-cream-100 mb-2">International Taste Institute</h3>
              <p className="text-gold-500 font-medium mb-4">Three Gold Stars</p>
              <p className="text-cream-200">Our Signature Blend received the highest honor from the world's leading taste evaluation organization.</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-gold-500 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12l-4.463 4.969-4.537-4.969h3c0-4.97 4.03-9 9-9 2.395 0 4.565.942 6.179 2.468l-2.004 2.231c-1.081-1.05-2.553-1.699-4.175-1.699-3.309 0-6 2.691-6 6h3zm10.463-4.969l-4.463 4.969h3c0 3.309-2.691 6-6 6-1.623 0-3.094-.65-4.175-1.699l-2.004 2.231c1.613 1.526 3.784 2.468 6.179 2.468 4.97 0 9-4.03 9-9h3l-4.537-4.969z"/>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-cream-100 mb-2">Sustainability Award</h3>
              <p className="text-gold-500 font-medium mb-4">Coffee Ethics Council</p>
              <p className="text-cream-200">Recognized for our commitment to environmentally sustainable practices and ethical sourcing.</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-gold-500 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 5c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-cream-100 mb-2">Best Coffee Experience</h3>
              <p className="text-gold-500 font-medium mb-4">Global Hospitality Awards</p>
              <p className="text-cream-200">Honored for creating exceptional coffee moments that combine product quality with outstanding service.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;