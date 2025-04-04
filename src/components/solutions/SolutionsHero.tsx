
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PackagingDisplay from '@/components/PackagingDisplay';

const SolutionsHero = () => {
  return (
    <section className="hero-gradient pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sustainable Packaging Solutions
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              From impact-resistant mushroom foam to AI-optimized custom designs, our solutions combine superior protection with environmental responsibility.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center">
              Get a Custom Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <div className="lg:w-1/2">
            <PackagingDisplay />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero;
