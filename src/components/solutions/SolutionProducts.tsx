
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
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            priceRange={product.priceRange}
            features={product.features}
            bestFor={product.bestFor}
            isPopular={product.isPopular}
          />
        ))}
      </div>
    </div>
  );
};

export default SolutionProducts;
