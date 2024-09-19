import Image from 'next/image'
import cloudHosting from '../../../public/cloud-hosting.png'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen bg-gray-100 text-darkBlue px-6 py-16">
      
      {/* Text Content */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold animate-fadeInUp">
          Fast & Secure Cloud Hosting
        </h1>
        <p className="max-w-2xl mx-auto md:mx-0 text-lg md:text-xl animate-fadeInUp delay-200">
          Experience blazing fast and reliable cloud hosting tailored for your needs. Scale effortlessly with robust security and optimized performance.
        </p>
        <div className="mt-8 animate-fadeInUp delay-300">
          <Link href="#pricing" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded-lg transition duration-300 ease-in-out">
            Get Started
          </Link>
        </div>
      </div>

      {/* Image Content */}
      <div className="md:w-1/2 mt-8 md:mt-0 animate-fadeInRight">
        <Image 
          src={cloudHosting} 
          alt="Cloud Hosting" 
          className="object-cover rounded-lg shadow-lg"
          height={500}
          width={500}
          priority 
        />
      </div>
    </section>
  )
}

export default Hero
