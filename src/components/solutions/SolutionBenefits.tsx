
import { CheckCircle, ArrowRight, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SolutionBenefitsProps {
  name: string;
  description: string;
  benefits: string[];
  environmentalImpact: {
    co2Reduction: string;
    biodegradable: string;
    wasteReduction: string;
    waterUsage: string;
  };
}

const SolutionBenefits = ({ 
  name, 
  description, 
  benefits,
  environmentalImpact 
}: SolutionBenefitsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{name}</h3>
        <p className="text-gray-700 mb-6">{description}</p>
        
        <h4 className="text-lg font-semibold mb-3">Key Benefits</h4>
        <ul className="space-y-2 mb-8">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <CheckCircle className="w-5 h-5 text-eco-green mr-2 flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        
        <Link to="/contact" className="btn-primary inline-flex items-center">
          Request Samples
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-xl">
        <div className="flex items-center mb-6">
          <Leaf className="w-6 h-6 text-eco-green mr-2" />
          <h4 className="text-xl font-semibold text-gray-900">Environmental Impact</h4>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <div className="font-semibold mb-1">CO2 Reduction</div>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-eco-green h-2.5 rounded-full" 
                  style={{ width: environmentalImpact.co2Reduction }}
                ></div>
              </div>
              <span className="ml-2 text-sm text-gray-600">{environmentalImpact.co2Reduction}</span>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <div className="font-semibold mb-1">Biodegradable</div>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-eco-green h-2.5 rounded-full" 
                  style={{ width: environmentalImpact.biodegradable }}
                ></div>
              </div>
              <span className="ml-2 text-sm text-gray-600">{environmentalImpact.biodegradable}</span>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <div className="font-semibold mb-1">Waste Reduction</div>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-eco-green h-2.5 rounded-full" 
                  style={{ width: environmentalImpact.wasteReduction }}
                ></div>
              </div>
              <span className="ml-2 text-sm text-gray-600">{environmentalImpact.wasteReduction}</span>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <div className="font-semibold mb-1">Water Usage</div>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-eco-green h-2.5 rounded-full" 
                  style={{ width: environmentalImpact.waterUsage }}
                ></div>
              </div>
              <span className="ml-2 text-sm text-gray-600">{environmentalImpact.waterUsage}</span>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mt-4">
          *Compared to traditional packaging materials based on lifecycle assessment
        </p>
      </div>
    </div>
  );
};

export default SolutionBenefits;
