
import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 text-center max-w-md w-full">
        <h1 className="text-6xl font-extrabold text-red-600 dark:text-red-400 mb-4 animate-bounce">
          404
        </h1>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Oops! The page you are looking for does not exist or has been moved.
        </p>
        <a
          href="/" // Link back to the home page
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;
