'use client'
import Link from 'next/link'
import React from 'react'

interface ErrorProps {
    error: Error;
    reset: () => void;
}
// reset => rerender page

const Error = ({error, reset}: ErrorProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded shadow-md text-center">
            <h1 className="text-xl font-semibold text-red-600 mb-4">Error</h1>
            <p className="text-gray-700 mb-6">{error.message}</p>
            <div className="space-x-4">
                <Link href="/" className="text-blue-500 hover:underline">Back to Home</Link>
                <button 
                    onClick={() => reset()}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Try Again
                </button>
            </div>
        </div>
    </div>
  )
}

export default Error