'use client'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="text-center">
        <h1 className="text-9xl font-bold mb-4 animate-bounce">404</h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Oops! Page not found
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link href="/">
          <button className="bg-white text-blue-600 py-3 px-8 rounded-full text-lg font-semibold shadow-md hover:bg-gray-100 transition duration-300">
            Back to Home
          </button>
        </Link>
      </div>
      <div className="absolute bottom-0 w-full">
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,256L1440,160L1440,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  )
}

export default NotFound
