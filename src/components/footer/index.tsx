'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../../../public/logo.png" // Assure-toi que le chemin est correct

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-darkBlue py-8">
      <div className="container mx-auto px-4">
        {/* Conteneur principal */}
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <Image
              src={logo}
              alt="Logo"
              height={150}
              width={150}
              className="cursor-pointer"
            />
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row mb-6 md:mb-0">
            <Link href="/" className="text-darkBlue hover:text-accentCyan mx-2 mb-2 md:mb-0">
              Home
            </Link>
            <Link href="/articles" className="text-darkBlue hover:text-accentCyan mx-2 mb-2 md:mb-0">
              Articles
            </Link>
            <Link href="/about" className="text-darkBlue hover:text-accentCyan mx-2">
              About
            </Link>
          </div>

          {/* Site Name and Developer */}
          <div className="text-center">
            <p className="text-lg font-bold">Cloud Hosting</p>
            <p className="text-sm">
              Developed by <a href="https://saadaouidev.com" className="text-accentCyan hover:underline">saadaouidev.com</a>
            </p>
          </div>
        </div>

        {/* Rights Reserved */}
        <div className="mt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Cloud Hosting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
