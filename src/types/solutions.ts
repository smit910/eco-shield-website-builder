
export interface SolutionCategory {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  products: {
    id: string;
    name: string;
    description: string;
    priceRange: string;
    features: string[];
    bestFor: string[];
    isPopular?: boolean;
  }[];
}
