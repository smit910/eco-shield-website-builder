
import { Package } from 'lucide-react';
import { TabsTrigger } from '@/components/ui/tabs';

interface SolutionCardProps {
  id: string;
  name: string;
  description: string;
}

const SolutionCard = ({ id, name, description }: SolutionCardProps) => {
  return (
    <TabsTrigger 
      value={id}
      className="border border-gray-200 bg-white hover:bg-gray-50 rounded-lg p-6 text-left data-[state=active]:border-eco-green data-[state=active]:border-2 shadow-sm h-auto w-full flex flex-col"
    >
      <div className="flex items-start w-full">
        <div className="mr-4 mt-1 flex-shrink-0">
          {id === "impact-resistant" ? (
            <Package className="w-6 h-6 text-eco-green" />
          ) : (
            <svg className="w-6 h-6 text-eco-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
          <p className="text-gray-600 text-sm break-words overflow-hidden">
            {description}
          </p>
        </div>
      </div>
    </TabsTrigger>
  );
};

export default SolutionCard;
