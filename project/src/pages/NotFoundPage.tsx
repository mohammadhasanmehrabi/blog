import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-cream-50">
      <div className="container-custom text-center">
        <Coffee className="h-20 w-20 text-coffee-600 mx-auto mb-6" />
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-coffee-800 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-coffee-700 mb-6">Page Not Found</h2>
        <p className="text-coffee-600 mb-8 max-w-2xl mx-auto">
          The page you're looking for seems to have been brewed away. Let's get you back to a place where the coffee is flowing.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn-primary">
            Return to Homepage
          </Link>
          <Link to="/menu" className="btn-secondary">
            View Our Menu
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;