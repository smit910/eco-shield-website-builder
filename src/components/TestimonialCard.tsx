
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  company: string;
  image: string;
  quote: string;
  stats?: {
    label: string;
    value: string;
  }[];
  rating?: number;
}

const TestimonialCard = ({ name, company, image, quote, stats, rating = 5 }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift">
      <div className="p-6 flex flex-col h-full">
        {/* Rating stars if provided */}
        {rating && (
          <div className="flex mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
        )}
        
        {/* Quote */}
        <blockquote className="text-gray-700 italic mb-6 flex-grow">
          "{quote}"
        </blockquote>
        
        {/* Stats if provided */}
        {stats && (
          <div className="grid grid-cols-2 gap-4 mb-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-eco-green font-bold text-xl">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
        
        {/* Divider */}
        <div className="w-16 h-1 bg-eco-green my-4"></div>
        
        {/* Author */}
        <div className="flex items-center">
          <div className="rounded-full overflow-hidden w-12 h-12 mr-4 flex-shrink-0">
            <img 
              src={image || "/placeholder.svg"} 
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-medium text-gray-900">{name}</h4>
            <p className="text-gray-600 text-sm">{company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
