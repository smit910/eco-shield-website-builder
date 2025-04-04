
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  priceRange: string;
  features: string[];
  bestFor: string[];
  isPopular?: boolean;
}

const ProductCard = ({ 
  id, 
  name, 
  description, 
  priceRange, 
  features, 
  bestFor, 
  isPopular 
}: ProductCardProps) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-md relative overflow-hidden border ${
        isPopular ? 'border-eco-green' : 'border-transparent'
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-eco-green text-white text-xs py-1 px-3 rounded-bl-lg">
          Most Popular
        </div>
      )}
      
      <div className="p-6">
        <h4 className="text-xl font-semibold text-gray-900 mb-2">{name}</h4>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="text-lg font-bold text-eco-green mb-4">
          {priceRange}
        </div>
        
        <h5 className="text-sm font-semibold uppercase text-gray-500 mb-2">Features</h5>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-eco-green mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <h5 className="text-sm font-semibold uppercase text-gray-500 mb-2">Best For</h5>
        <div className="flex flex-wrap gap-2 mb-6">
          {bestFor.map((item, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 text-xs py-1 px-2 rounded">
              {item}
            </span>
          ))}
        </div>
        
        <Link 
          to="/contact" 
          className={`w-full block text-center py-2 rounded-md ${
            isPopular 
              ? 'bg-eco-green text-white hover:bg-eco-green-dark' 
              : 'border border-eco-green text-eco-green hover:bg-eco-green-light/10'
          } transition-colors`}
        >
          Get a Quote
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
