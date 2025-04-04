
import { motion } from "framer-motion";
import ProductCard from './ProductCard';

interface Product {
  id: string;
  name: string;
  description: string;
  priceRange: string;
  features: string[];
  bestFor: string[];
  isPopular?: boolean;
}

interface SolutionProductsProps {
  products: Product[];
}

const SolutionProducts = ({ products }: SolutionProductsProps) => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-10">Available Products</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut"
            }}
          >
            <ProductCard 
              id={product.id}
              name={product.name}
              description={product.description}
              priceRange={product.priceRange}
              features={product.features}
              bestFor={product.bestFor}
              isPopular={product.isPopular}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SolutionProducts;
