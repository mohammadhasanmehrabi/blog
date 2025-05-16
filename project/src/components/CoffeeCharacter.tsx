import React from 'react';
import { motion } from 'framer-motion';

const CoffeeCharacter: React.FC = () => {
  return (
    <motion.div 
      className="absolute right-8 top-32 w-48 h-48 z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full h-full">
        {/* Rope */}
        <div className="absolute left-1/2 -translate-x-1/2 w-1 h-24 bg-coffee-400 origin-top" />
        
        {/* Coffee Cup */}
        <motion.div
          className="absolute top-24 left-1/2 -translate-x-1/2"
          animate={{
            rotate: [-15, 15, -15],
            y: [-5, 5, -5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="relative w-20 h-24 bg-coffee-200 rounded-lg">
            <div className="absolute -top-2 w-full h-4 bg-coffee-400 rounded-t-lg"></div>
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              <motion.div 
                className="w-2 h-2 bg-coffee-800 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="w-2 h-2 bg-coffee-800 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-6 h-2 border-b-2 border-coffee-800 rounded-b-full"></div>
            {/* Arms */}
            <div className="absolute -left-4 top-8 w-8 h-2 bg-coffee-300 rounded-full"></div>
            <div className="absolute -right-4 top-8 w-8 h-2 bg-coffee-300 rounded-full"></div>
            {/* Legs */}
            <div className="absolute -bottom-4 left-4 w-2 h-6 bg-coffee-300 rounded-full"></div>
            <div className="absolute -bottom-4 right-4 w-2 h-6 bg-coffee-300 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CoffeeCharacter;