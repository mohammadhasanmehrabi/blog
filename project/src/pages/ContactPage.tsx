import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would send the form data to a server here
    setSubmitted(true);
  };
  
  const resetForm = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setSubmitted(false);
  };
  
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
              Contact Us
            </motion.h1>
            <motion.p 
              className="text-xl text-cream-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              We'd love to hear from you
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-coffee-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-coffee-700 h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-coffee-800 mb-3">Our Location</h3>
              <p className="text-coffee-600">
                123 Coffee Boulevard<br />
                Espresso District, CA 90210
              </p>
              <a href="https://maps.google.com" className="text-coffee-700 font-medium hover:text-gold-600 transition-colors duration-300 inline-flex items-center mt-4">
                Get Directions
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-coffee-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-coffee-700 h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-coffee-800 mb-3">Phone</h3>
              <p className="text-coffee-600">
                Main: +1 (234) 567-890<br />
                Reservations: +1 (234) 567-891
              </p>
              <a href="tel:+1234567890" className="text-coffee-700 font-medium hover:text-gold-600 transition-colors duration-300 inline-flex items-center mt-4">
                Call Us
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-coffee-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-coffee-700 h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-coffee-800 mb-3">Email</h3>
              <p className="text-coffee-600">
                info@elixircoffee.com<br />
                reservations@elixircoffee.com
              </p>
              <a href="mailto:info@elixircoffee.com" className="text-coffee-700 font-medium hover:text-gold-600 transition-colors duration-300 inline-flex items-center mt-4">
                Email Us
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-coffee-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-coffee-700 h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-coffee-800 mb-3">Opening Hours</h3>
              <p className="text-coffee-600">
                Monday - Friday: 7:00 AM - 9:00 PM<br />
                Weekends: 8:00 AM - 10:00 PM
              </p>
              <a href="/reservation" className="text-coffee-700 font-medium hover:text-gold-600 transition-colors duration-300 inline-flex items-center mt-4">
                Reserve a Table
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Form and Map */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <Coffee className="h-6 w-6 text-gold-500 mr-2" />
                <h2 className="text-2xl font-serif font-bold text-coffee-800">Send Us a Message</h2>
              </div>
              
              {submitted ? (
                <motion.div 
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="mb-6 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-green-100">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-coffee-800 mb-4">Message Sent Successfully!</h3>
                  <p className="text-coffee-600 mb-6">
                    Thank you for reaching out to us. We'll get back to you as soon as possible.
                  </p>
                  <button 
                    onClick={resetForm}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-coffee-700 mb-2">Your Name*</label>
                      <input 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 border border-coffee-200 rounded focus:outline-none focus:border-coffee-400 focus:ring-2 focus:ring-coffee-200"
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-coffee-700 mb-2">Your Email*</label>
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border border-coffee-200 rounded focus:outline-none focus:border-coffee-400 focus:ring-2 focus:ring-coffee-200"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-coffee-700 mb-2">Subject*</label>
                    <input 
                      type="text" 
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full p-3 border border-coffee-200 rounded focus:outline-none focus:border-coffee-400 focus:ring-2 focus:ring-coffee-200"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-coffee-700 mb-2">Message*</label>
                    <textarea 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full p-3 border border-coffee-200 rounded focus:outline-none focus:border-coffee-400 focus:ring-2 focus:ring-coffee-200"
                      placeholder="Please provide details about your inquiry..."
                      rows={5}
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="btn-primary flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
            
            {/* Map */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md overflow-hidden h-full"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <MapPin className="h-6 w-6 text-gold-500 mr-2" />
                <h2 className="text-2xl font-serif font-bold text-coffee-800">Find Us</h2>
              </div>
              
              <div className="h-[400px] bg-gray-200 rounded-lg relative overflow-hidden">
                {/* In a real implementation, this would be a Google Maps embed or similar */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-coffee-600">Interactive map would be embedded here</p>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-serif font-bold text-coffee-800 mb-2">Directions</h4>
                <p className="text-coffee-600 mb-4">
                  Located in the heart of the Espresso District, our flagship café is easily accessible by public transport or car.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-coffee-700 mb-1">By Public Transport</h5>
                    <p className="text-coffee-600 text-sm">
                      Metro Line B to "Coffee Square" station<br />
                      Bus routes 12, 15, and 22
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-coffee-700 mb-1">Parking</h5>
                    <p className="text-coffee-600 text-sm">
                      Public parking available at "Bean Garage"<br />
                      Street parking also available
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-coffee-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-coffee-600">Find answers to common questions about our services and offerings.</p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold text-coffee-800 mb-3">Do you take walk-ins or only reservations?</h3>
              <p className="text-coffee-600">
                We welcome walk-ins whenever space permits. However, for weekends and peak hours, we strongly recommend making a reservation to guarantee your table.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold text-coffee-800 mb-3">Can I purchase your coffee beans to brew at home?</h3>
              <p className="text-coffee-600">
                Yes! We offer our signature blends and single-origin beans for retail purchase, both in-store and through our online shop with shipping throughout the US.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold text-coffee-800 mb-3">Do you offer gift cards?</h3>
              <p className="text-coffee-600">
                We offer digital and physical gift cards in various denominations, perfect for treating the coffee lover in your life to an exceptional experience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold text-coffee-800 mb-3">Do you cater private events?</h3>
              <p className="text-coffee-600">
                Yes, we offer full-service catering for private events, including mobile espresso bars, custom coffee tastings, and pairing menus designed around your preferences.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold text-coffee-800 mb-3">Do you accommodate dietary restrictions?</h3>
              <p className="text-coffee-600">
                Absolutely. We offer a variety of alternative milks and can accommodate most dietary needs. Please inform your server of any allergies or restrictions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold text-coffee-800 mb-3">How can I apply for a job at Elixir?</h3>
              <p className="text-coffee-600">
                We're always looking for passionate individuals to join our team. Visit our Careers page to view current openings and submit your application.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="section-padding bg-coffee-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Stay Connected</h2>
          <p className="text-xl text-cream-100 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter for exclusive offers, brewing tips, and updates on seasonal specialties.
          </p>
          
          <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              className="flex-grow p-3 rounded focus:outline-none focus:ring-2 focus:ring-gold-500"
              placeholder="Your email address"
              required
            />
            <button type="submit" className="btn-primary bg-gold-600 hover:bg-gold-700 text-coffee-900 whitespace-nowrap">
              Subscribe
            </button>
          </form>
          
          <p className="text-cream-300 text-sm mt-4">
            By subscribing, you agree to receive marketing communications from us. You can unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;