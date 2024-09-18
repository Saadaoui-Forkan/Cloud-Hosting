// 'use client'
// import Image from 'next/image'
// import Link from 'next/link'
// import React, { useState } from 'react'
// import logo from "../../../public/logo.png"
// import { usePathname } from 'next/navigation'

// const Header = () => {
//   const pathname: string = usePathname()
//   const [openNav, setOpenNav] = useState(false)
//   return (
//     <div className="flex justify-between items-center shadow-md h-20">
//       <Link href="/">
//         <Image
//           src={logo}
//           alt="Logo"
//           height={100}
//           width={100}
//           className="cursor-pointer"
//         />
//       </Link>
//       <div className="hidden md:flex items-center space-x-6 text-gray-700">
//           <Link
//             href="/"
//             className={`${pathname === '/' ? 'text-accentCyan' : ' '} hover:text-accentCyan transition duration-300`}
//           >
//             Home
//           </Link>
//           <Link
//             href="/about"
//             className={`${pathname === '/about' ? 'text-accentCyan' : ' '} hover:text-accentCyan transition duration-300`}
//           >
//             About
//           </Link>
//           <Link
//             href="/articles"
//             className={`${pathname === '/articles' ? 'text-accentCyan' : ' '} hover:text-accentCyan transition duration-300`}
//           >
//             Articles
//           </Link>
//           <Link
//             href="/admin"
//             className={`${pathname === '/admin' ? 'text-accentCyan' : ' '} hover:text-accentCyan transition duration-300`}
//           >
//             Admin
//           </Link>
//       </div>
//       <div className="flex items-center space-x-6 mx-4">
//           <Link
//             href="/login"
//             className='px-2 py-1 bg-lightRed text-white rounded-lg font-bold border-2 border-lightRed hover:text-lightRed hover:bg-white hover:border-2 transition duration-300'
//           >
//             Login
//           </Link>
//         <div className="cursor-pointer md:hidden" onClick={()=>setOpenNav(!openNav)}>
//           <div className="bg-darkBlue w-6 h-1 rounded-sm _transition-all _duration-150 _rotate-45 _translate-y-2"></div>
//           <div className="bg-darkBlue w-6 h-1 my-1 rounded-sm"></div>
//           <div className="bg-darkBlue w-6 h-1 rounded-sm _transition-all _duration-150 _rotate-[-45deg] _translate-y-[-8px]"></div>
//         </div>
//       </div> 
//       <div className="absolute top-0 left-0 right-0 flex flex-col md:hidden">
//         <h2 className='text-black mx-auto text-lg'><Link href={'/'} >Home</Link></h2>
//         <h2 className='text-black mx-auto text-lg m-3'><Link href={'/about'}>About</Link></h2>
//         <h2 className='text-black mx-auto text-lg m-3'><Link href={'/articles'}>Articles</Link></h2>
//         <h2 className='text-black mx-auto text-lg m-3'><Link href={'/admin'}>Admin</Link></h2>
//       </div>
//     </div>
//   );
// }

// export default Header

// 'use client'
// import Image from 'next/image'
// import Link from 'next/link'
// import React, { useState } from 'react'
// import logo from "../../../public/logo.png"
// import { usePathname } from 'next/navigation'

// const Header = () => {
//   const pathname: string = usePathname()
//   const [openNav, setOpenNav] = useState(false)

//   return (
//     <div className="flex justify-between items-center shadow-md h-20 relative">
//       {/* Logo */}
//       <Link href="/">
//         <Image
//           src={logo}
//           alt="Logo"
//           height={100}
//           width={100}
//           className="cursor-pointer"
//         />
//       </Link>

//       {/* Menu Desktop */}
//       <div className="hidden md:flex items-center space-x-6 text-gray-700">
//         <Link href="/" className={`${pathname === '/' ? 'text-accentCyan' : ''} hover:text-accentCyan transition duration-300`}>Home</Link>
//         <Link href="/about" className={`${pathname === '/about' ? 'text-accentCyan' : ''} hover:text-accentCyan transition duration-300`}>About</Link>
//         <Link href="/articles" className={`${pathname === '/articles' ? 'text-accentCyan' : ''} hover:text-accentCyan transition duration-300`}>Articles</Link>
//         <Link href="/admin" className={`${pathname === '/admin' ? 'text-accentCyan' : ''} hover:text-accentCyan transition duration-300`}>Admin</Link>
//       </div>

//       {/* Login Button */}
//       <div className="flex items-center space-x-6 mx-4">
//         <Link href="/login" className="px-2 py-1 bg-lightRed text-white rounded-lg font-bold border-2 border-lightRed hover:text-lightRed hover:bg-white transition duration-300">
//           Login
//         </Link>

//         {/* Hamburger Menu Icon */}
//         <div className="cursor-pointer md:hidden" onClick={() => setOpenNav(!openNav)}>
//           <div className={`bg-darkBlue w-6 h-1 rounded-sm transition-all duration-300 ${openNav ? 'rotate-45 translate-y-2' : ''}`}></div>
//           <div className={`bg-darkBlue w-6 h-1 my-1 rounded-sm transition-all duration-300 ${openNav ? 'opacity-0' : ''}`}></div>
//           <div className={`bg-darkBlue w-6 h-1 rounded-sm transition-all duration-300 ${openNav ? '-rotate-45 -translate-y-2' : ''}`}></div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`absolute top-20 left-0 right-0 bg-white shadow-md md:hidden flex flex-col items-center space-y-4 transition-all duration-500 overflow-hidden ${openNav ? 'max-h-60 py-4' : 'max-h-0 py-0'}`}>
//         <Link href="/" onClick={() => setOpenNav(false)} className="text-black text-lg hover:text-accentCyan">Home</Link>
//         <Link href="/about" onClick={() => setOpenNav(false)} className="text-black text-lg hover:text-accentCyan">About</Link>
//         <Link href="/articles" onClick={() => setOpenNav(false)} className="text-black text-lg hover:text-accentCyan">Articles</Link>
//         <Link href="/admin" onClick={() => setOpenNav(false)} className="text-black text-lg hover:text-accentCyan">Admin</Link>
//       </div>
//     </div>
//   );
// }

// export default Header


'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from "../../../public/logo.png"
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname: string = usePathname()
  const [openNav, setOpenNav] = useState(false)

  interface NavLink {
    name: string;
    path: string;
  }

  const navLinks: NavLink[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Articles', path: '/articles' },
    { name: 'Admin', path: '/admin' },
  ];

  return (
    <div className="flex justify-between items-center shadow-md h-20 relative">
      {/* Logo */}
      <Link href="/">
        <Image
          src={logo}
          alt="Logo"
          height={100}
          width={100}
          className="cursor-pointer"
        />
      </Link>

      {/* Menu Desktop */}
      <div className="hidden md:flex items-center space-x-6 text-gray-700">
        {navLinks.map(link => (
          <Link
            key={link.name}
            href={link.path}
            className={`${pathname === link.path ? 'text-accentCyan' : ''} hover:text-accentCyan transition duration-300`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Login Button */}
      <div className="flex items-center space-x-6 mx-4">
        <Link href="/login" className="px-2 py-1 bg-lightRed text-white rounded-lg font-bold border-2 border-lightRed hover:text-lightRed hover:bg-white transition duration-300">
          Login
        </Link>

        {/* Hamburger Menu Icon */}
        <div className="cursor-pointer md:hidden" onClick={() => setOpenNav(!openNav)}>
          <div className={`bg-darkBlue w-6 h-1 rounded-sm transition-all duration-300 ${openNav ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`bg-darkBlue w-6 h-1 my-1 rounded-sm transition-all duration-300 ${openNav ? 'opacity-0' : ''}`}></div>
          <div className={`bg-darkBlue w-6 h-1 rounded-sm transition-all duration-300 ${openNav ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-20 left-0 right-0 bg-white shadow-md md:hidden flex flex-col items-center space-y-4 transition-all duration-500 overflow-hidden ${openNav ? 'max-h-60 py-4' : 'max-h-0 py-0'}`}>
        {navLinks.map(link => (
          <Link
            key={link.name}
            href={link.path}
            onClick={() => setOpenNav(false)}
            className="text-darkBlue text-lg hover:text-accentCyan transition duration-300"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
