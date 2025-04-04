
import { useState } from 'react';
import { Calculator } from 'lucide-react';

const CostCalculator = () => {
  const [packageCount, setPackageCount] = useState<number>(1000);
  const [damageRate, setDamageRate] = useState<number>(11);
  const [avgItemValue, setAvgItemValue] = useState<number>(50);
  
  const calculateSavings = () => {
    // Current situation
    const currentDamaged = Math.round(packageCount * (damageRate / 100));
    const currentDamageCost = currentDamaged * avgItemValue;
    
    // With EcoShield (assuming 90% reduction in damage)
    const newDamageRate = damageRate * 0.1; // 90% reduction
    const newDamaged = Math.round(packageCount * (newDamageRate / 100));
    const newDamageCost = newDamaged * avgItemValue;
    
    // Packaging costs
    // Assume average EcoShield packaging is $0.75/unit
    const ecoShieldCost = packageCount * 0.75;
    // Assume average traditional packaging is $0.50/unit
    const traditionalCost = packageCount * 0.50;
    
    // Calculate total costs and savings
    const currentTotalCost = currentDamageCost + traditionalCost;
    const newTotalCost = newDamageCost + ecoShieldCost;
    const totalSavings = currentTotalCost - newTotalCost;
    const percentageSaved = (totalSavings / currentTotalCost) * 100;
    
    return {
      damagedItems: {
        current: currentDamaged,
        withEcoShield: newDamaged,
        reduction: currentDamaged - newDamaged
      },
      costs: {
        current: currentTotalCost,
        withEcoShield: newTotalCost
      },
      savings: {
        amount: totalSavings,
        percentage: percentageSaved
      }
    };
  };
  
  const results = calculateSavings();
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="flex items-center mb-6">
        <Calculator className="h-8 w-8 text-eco-green mr-3" />
        <h3 className="text-2xl font-bold text-gray-900">Cost Savings Calculator</h3>
      </div>
      
      <p className="text-gray-600 mb-8">
        See how much you could save by switching to EcoShield's sustainable packaging solutions.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <label htmlFor="packageCount" className="block text-sm font-medium text-gray-700 mb-1">
            Monthly Packages Shipped
          </label>
          <input
            type="range"
            id="packageCount"
            min="100"
            max="10000"
            step="100"
            value={packageCount}
            onChange={(e) => setPackageCount(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-eco-green"
          />
          <div className="flex justify-between mt-1">
            <span className="text-xs text-gray-500">100</span>
            <span className="text-sm font-medium">{packageCount.toLocaleString()}</span>
            <span className="text-xs text-gray-500">10,000</span>
          </div>
        </div>
        
        <div>
          <label htmlFor="damageRate" className="block text-sm font-medium text-gray-700 mb-1">
            Current Damage Rate (%)
          </label>
          <input
            type="range"
            id="damageRate"
            min="1"
            max="20"
            step="1"
            value={damageRate}
            onChange={(e) => setDamageRate(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-eco-green"
          />
          <div className="flex justify-between mt-1">
            <span className="text-xs text-gray-500">1%</span>
            <span className="text-sm font-medium">{damageRate}%</span>
            <span className="text-xs text-gray-500">20%</span>
          </div>
        </div>
        
        <div>
          <label htmlFor="avgItemValue" className="block text-sm font-medium text-gray-700 mb-1">
            Avg. Product Value ($)
          </label>
          <input
            type="range"
            id="avgItemValue"
            min="10"
            max="500"
            step="10"
            value={avgItemValue}
            onChange={(e) => setAvgItemValue(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-eco-green"
          />
          <div className="flex justify-between mt-1">
            <span className="text-xs text-gray-500">$10</span>
            <span className="text-sm font-medium">${avgItemValue}</span>
            <span className="text-xs text-gray-500">$500</span>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Current Situation</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Damaged Items:</span>
                <span className="font-medium text-red-500">{results.damagedItems.current.toLocaleString()} items</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Cost:</span>
                <span className="font-medium">${results.costs.current.toLocaleString()}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-eco-green mb-4">With EcoShield Packaging</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Damaged Items:</span>
                <span className="font-medium text-eco-green">{results.damagedItems.withEcoShield.toLocaleString()} items</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Cost:</span>
                <span className="font-medium">${results.costs.withEcoShield.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-bold text-gray-900">Your Estimated Savings</h4>
              <p className="text-gray-600">Based on your shipping volume and current damage rate</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-eco-green">${Math.round(results.savings.amount).toLocaleString()}</p>
              <p className="text-sm text-gray-600">
                That's approximately {Math.round(results.savings.percentage)}% in total cost savings
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <a href="/contact" className="btn-primary inline-flex items-center">
          Get a Personalized Quote
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CostCalculator;
