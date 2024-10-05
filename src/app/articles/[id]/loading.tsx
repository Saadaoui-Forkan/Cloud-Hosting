import React from "react";

const loading = () => {
  return (
    <section className="container mx-auto p-6 max-w-4xl animate-pulse">
        <div className="h-5 bg-gray-300 rounded-md w-48 mb-4"></div>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="h-8 bg-gray-300 rounded-md mb-4 w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded-md mb-6 w-32"></div>
            <div className="h-16 bg-gray-200 rounded-md mb-6"></div>
        </div>
        <div className="bg-yellow-100 text-yellow-800 p-4 mb-6 rounded-lg shadow-md w-full text-center">
            <div className="h-4 bg-gray-200 rounded-md w-32 mx-auto"></div>
        </div>
        <div className="space-y-4">
            <div className="h-12 bg-gray-200 rounded-md w-full"></div>
        </div>
    </section>
  );
};

export default loading;
