import React from 'react';

const LocationsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Locations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Downtown</h2>
          <p className="text-gray-600 mb-2">123 Main Street</p>
          <p className="text-gray-600 mb-2">New York, NY 10001</p>
          <p className="text-gray-600">Phone: (212) 555-0123</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Uptown</h2>
          <p className="text-gray-600 mb-2">456 Park Avenue</p>
          <p className="text-gray-600 mb-2">New York, NY 10022</p>
          <p className="text-gray-600">Phone: (212) 555-0456</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Brooklyn</h2>
          <p className="text-gray-600 mb-2">789 Bedford Avenue</p>
          <p className="text-gray-600 mb-2">Brooklyn, NY 11205</p>
          <p className="text-gray-600">Phone: (718) 555-0789</p>
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;