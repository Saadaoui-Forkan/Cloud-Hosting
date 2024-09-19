import React from 'react';
import { FaCheck } from 'react-icons/fa';
import Link from 'next/link';

// Interface pour un plan
interface Plan {
  name: string;
  price: number;
  features: string[];
}

const plans: Plan[] = [
  { name: 'Basic', price: 19, features: ['Feature No 1', 'Extra Feature', 'Extra Feature No 2', 'Feature'] },
  { name: 'Premium', price: 29, features: ['Feature No 1', 'Extra Feature', 'Extra Feature No 2', 'Feature'] },
  { name: 'Pro', price: 39, features: ['Feature No 1', 'Extra Feature', 'Extra Feature No 2', 'Feature'] },
  { name: 'Platinum', price: 49, features: ['Feature No 1', 'Extra Feature', 'Extra Feature No 2', 'Feature'] }
];

const Pricing: React.FC = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Choose Your Web Hosting Plan</h2>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div className="bg-white text-center shadow-lg rounded-lg" key={plan.name}>
              {/* Plan Header */}
              <div className="bg-blue-500 text-white py-8 px-4 relative">
                <h3 className="text-xl font-bold uppercase">{plan.name}</h3>
                <div className="flex items-end justify-center">
                  <span className="text-6xl font-bold">${plan.price}</span>
                  <span className="text-lg">/mo</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="border-t border-b border-gray-300">
                {plan.features.map((feature, index) => (
                  <li key={index} className="py-4 flex justify-center items-center">
                    <FaCheck className="text-green-500 mr-2" /> {feature}
                  </li>
                ))}
              </ul>

              {/* Plan Footer */}
              <div className="py-6">
                <Link href="#" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg">
                  Buy Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
