import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Calendar, Clock, Users, X } from 'lucide-react';

const ReservationPage: React.FC = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string>('');
  const [guests, setGuests] = useState<string>('2');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  
  const availableTimes = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', 
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30'
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would send the data to a server here
    setSubmitted(true);
  };
  
  const resetForm = () => {
    setDate(null);
    setTime('');
    setGuests('2');
    setName('');
    setEmail('');
    setPhone('');
    setSpecialRequests('');
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
              Reserve Your Table
            </motion.h1>
            <motion.p 
              className="text-xl text-cream-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Secure your perfect moment in our luxury coffee experience
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      {/* Reservation Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image Section */}
              <div className="hidden md:block bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
              </div>
              
              {/* Form Section */}
              <div className="p-8">
                {submitted ? (
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="mb-6 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-green-100">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-coffee-800 mb-4">Reservation Confirmed!</h2>
                    <p className="text-coffee-600 mb-6">
                      Thank you for your reservation. We've sent a confirmation to your email. We look forward to serving you on{' '}
                      {date?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at {time}.
                    </p>
                    <button 
                      onClick={resetForm}
                      className="btn-primary"
                    >
                      Make Another Reservation
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="text-2xl font-serif font-bold text-coffee-800 mb-6">Book Your Experience</h2>
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-coffee-700 mb-2">Select Date*</label>
                          <div className="relative">
                            <DatePicker
                              selected={date}
                              onChange={(date) => setDate(date)}
                              minDate={new Date()}
                              className="w-full p-3 border border-coffee-200 rounded focus:outline-none focus:border-coffee-400 focus:ring-2 focus:ring-coffee-200"
                              placeholderText="Choose a date"
                              required
                            />
                            <Calendar className="absolute right-3 top-3 h-5 w-5 text-coffee-400" />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-coffee-700 mb-2">Select Time*</label>
                          <div className="relative">
                            <select 
                              value={time}
                              onChange={(e) => setTime(e.target.value)}
                              className="w-full p-3 border border-coffee-200 rounded focus:outline-none focus:border-coffee-400 focus:ring-2 focus:ring-coffee-200 appearance-none"
                              required
                            >
                              <option value="">Select time</option>
                              {availableTimes.map((t) => (
                                <option key={t} value={t}>{t}</option>
                              ))}
                            </select>
                            <Clock className="absolute right-3 top-3 h-5 w-5 text-coffee-400" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <label className="block text-coffee-700 mb-2">Number of Guests*</label>
                        <div className="relative">
                          <select 
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            className="w-full p-3 border border-coffee-200 rounded focus:outline-none focus:border-coffee-400 focus:ring-2 focus:ring-coffee-200 appearance-none"
                            required
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                              <option key={num} value={num.toString()}>{num} {num === 1 ? 'person' : 'people'}</option>
                            ))}
                            <option value="9+">9+ people (please specify in notes)</option>
                          </select>
                          <Users className="absolute right-3 top-3 h-5 w-5 text-coffee-400" />
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <label className="block text-coffee-700 mb-2">Full Name*</label>
                        <input 
                          type="text" 
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full p-3 border border-coffee-200 rounded focus:outline-none focus:border-coffee-400 focus:ring-2 focus:ring-coffee-200"
                          placeholder="John Smith"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-coffee-700 mb-2">Email*</label>
                          <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border border-coffee-200 rounded focus:outline-none focus:border-coffee-400 focus:ring-2 focus:ring-coffee-200"
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-coffee-700 mb-2">Phone Number*</label>
                          <input 
                            type="tel" 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full p-3 border border-coffee-200 rounded focus:outline-none focus:border-coffee-400 focus:ring-2 focus:ring-coffee-200"
                            placeholder="(123) 456-7890"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label className="block text-coffee-700 mb-2">Special Requests</label>
                        <textarea 
                          value={specialRequests}
                          onChange={(e) => setSpecialRequests(e.target.value)}
                          className="w-full p-3 border border-coffee-200 rounded focus:outline-none focus:border-coffee-400 focus:ring-2 focus:ring-coffee-200"
                          placeholder="Any dietary restrictions, special occasions, or seating preferences?"
                          rows={3}
                        ></textarea>
                      </div>
                      
                      <button 
                        type="submit"
                        className="btn-primary w-full"
                      >
                        Confirm Reservation
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Reservation Information */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-coffee-800 mb-4">Reservation Information</h2>
            <p className="text-coffee-600">To ensure the best possible experience for all our guests, please review our reservation policies.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-gold-500 mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif font-bold text-coffee-800 mb-3">Timing</h3>
              <ul className="text-coffee-600 space-y-2">
                <li>• Tables are reserved for 1.5 hours for parties up to 4</li>
                <li>• Tables are reserved for 2 hours for parties of 5 or more</li>
                <li>• We kindly ask that you arrive on time for your reservation</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-gold-500 mb-4">
                <X className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif font-bold text-coffee-800 mb-3">Cancellations</h3>
              <ul className="text-coffee-600 space-y-2">
                <li>• Please cancel at least 24 hours in advance</li>
                <li>• Late cancellations may incur a fee</li>
                <li>• No-shows will be charged a $25 per person fee</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-gold-500 mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif font-bold text-coffee-800 mb-3">Large Parties</h3>
              <ul className="text-coffee-600 space-y-2">
                <li>• Parties of 8 or more require a credit card to hold the reservation</li>
                <li>• For groups larger than 12, please contact us directly</li>
                <li>• Special menus are available for large groups</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Private Events */}
      <section className="section-padding bg-coffee-800 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold-500 font-serif italic text-lg">Exclusive Experiences</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream-100 mt-2 mb-6">Private Events & Tastings</h2>
              <p className="text-cream-200 mb-4 leading-relaxed">
                Elevate your special occasions with a private event at Elixir. Our spaces provide an elegant backdrop for corporate gatherings, celebrations, or coffee tasting experiences tailored to your preferences.
              </p>
              <p className="text-cream-200 mb-8 leading-relaxed">
                Our dedicated events team will work closely with you to create a bespoke experience that reflects your vision, with customized menus and exclusive service options.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-500 flex items-center justify-center text-coffee-800 font-bold mr-3 mt-1">
                    <span>1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-cream-100">Coffee Tasting Experiences</h4>
                    <p className="text-cream-300">Guided tastings featuring our signature blends and single-origin offerings.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-500 flex items-center justify-center text-coffee-800 font-bold mr-3 mt-1">
                    <span>2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-cream-100">Corporate Functions</h4>
                    <p className="text-cream-300">Professional settings for meetings, workshops, and team-building events.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-500 flex items-center justify-center text-coffee-800 font-bold mr-3 mt-1">
                    <span>3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-cream-100">Private Celebrations</h4>
                    <p className="text-cream-300">Intimate spaces for birthdays, anniversaries, and milestone occasions.</p>
                  </div>
                </div>
              </div>
              
              <button className="btn-primary bg-gold-600 hover:bg-gold-700 text-coffee-900">
                Inquire About Private Events
              </button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4792551/pexels-photo-4792551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Private event space" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute bottom-0 right-0 md:-bottom-6 md:-right-6 bg-white p-4 rounded shadow-lg max-w-xs hidden md:block">
                <div className="flex items-start">
                  <svg className="w-10 h-10 text-gold-500 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-coffee-700 italic text-sm">
                    "Our private coffee tasting was the highlight of our company retreat. The team still talks about it months later!"
                  </p>
                </div>
                <div className="mt-3 text-right">
                  <p className="text-coffee-800 font-medium text-sm">Michael Chen</p>
                  <p className="text-coffee-500 text-xs">Creative Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReservationPage;