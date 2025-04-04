
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsletterSignup from '@/components/NewsletterSignup';
import SolutionsHero from '@/components/solutions/SolutionsHero';
import SolutionsContent from '@/components/solutions/SolutionsContent';
import FaqSection from '@/components/solutions/FaqSection';
import CtaSection from '@/components/solutions/CtaSection';
import { SolutionCategory } from '@/types/solutions';

const Solutions = () => {
  const solutions: SolutionCategory[] = [
    {
      id: "impact-resistant",
      name: "Impact-Resistant Materials",
      description: "Our mushroom foam and corrugated bubble wrap absorb shocks and provide superior protection for your products during shipping, reducing damage by up to 90%.",
      benefits: [
        "Superior shock absorption",
        "Lightweight and low-dimensional weight",
        "100% biodegradable materials",
        "Custom shapes available",
      ],
      products: [
        {
          id: "mushroom-foam",
          name: "Mushroom Foam Cushioning",
          description: "Made from agricultural waste and mycelium (mushroom roots), our foam provides excellent cushioning while being completely compostable.",
          priceRange: "$0.35-$0.75/unit",
          features: [
            "Grows into custom molds",
            "Flame resistant",
            "Home compostable in 45 days",
            "Replaces styrofoam and plastic foam"
          ],
          bestFor: ["Electronics", "Glassware", "Ceramics"],
          isPopular: true
        },
        {
          id: "corrugated-bubble",
          name: "Corrugated Bubble Wrap",
          description: "Paper-based alternative to plastic bubble wrap with excellent cushioning properties and full recyclability.",
          priceRange: "$0.20-$0.50/unit",
          features: [
            "Paper-based, plastic-free",
            "Curbside recyclable",
            "Excellent cushioning",
            "Customizable sizes"
          ],
          bestFor: ["Small electronics", "Cosmetics", "Jewelry"]
        },
        {
          id: "hemp-padding",
          name: "Hemp Fiber Padding",
          description: "Ultra-strong natural fiber padding made from sustainably grown hemp, offering excellent protection for heavier items.",
          priceRange: "$0.40-$1.25/unit",
          features: [
            "Extremely durable",
            "Naturally antimicrobial",
            "Moisture resistant",
            "Fully biodegradable"
          ],
          bestFor: ["Heavy equipment", "Industrial parts", "Artwork"]
        }
      ]
    },
    {
      id: "custom-solutions",
      name: "Custom Solutions",
      description: "Right-sized, AI-optimized packaging designs tailored to your specific product dimensions and shipping requirements, maximizing protection while minimizing waste.",
      benefits: [
        "Reduces dimensional weight charges",
        "Minimizes material usage",
        "Optimized for your supply chain",
        "Enhanced unboxing experience"
      ],
      products: [
        {
          id: "ai-optimized",
          name: "AI-Optimized Package Design",
          description: "Using advanced algorithms, we create the perfect package for your product based on dimensions, fragility, and shipping conditions.",
          priceRange: "$2.50-$4.00/unit",
          features: [
            "Digital twin simulation testing",
            "Material optimization",
            "Supply chain integration",
            "Stress point reinforcement"
          ],
          bestFor: ["High-value electronics", "Medical devices", "Custom products"],
          isPopular: true
        },
        {
          id: "custom-inserts",
          name: "Custom Protective Inserts",
          description: "Tailored inserts designed specifically for your product's unique shape and protection needs.",
          priceRange: "$3.00-$5.00/unit",
          features: [
            "Perfect fit for your product",
            "Multi-product packaging options",
            "Brand embossing available",
            "Various sustainable materials"
          ],
          bestFor: ["Luxury goods", "Multi-component products", "Fragile items"]
        },
        {
          id: "sustainable-mailers",
          name: "Sustainable Mailers & Boxes",
          description: "Right-sized mailers and boxes made from recycled and recyclable materials, optimized for your specific shipping needs.",
          priceRange: "$0.75-$3.00/unit",
          features: [
            "100% recycled content",
            "Water-resistant options",
            "Tamper-evident closures",
            "Custom printing available"
          ],
          bestFor: ["E-commerce", "Apparel", "Books & media"]
        }
      ]
    },
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <SolutionsHero />
      
      {/* Solutions Tabs Section */}
      <SolutionsContent solutions={solutions} />
      
      {/* FAQ Section */}
      <FaqSection />
      
      {/* CTA Section */}
      <CtaSection />
      
      {/* Newsletter */}
      <NewsletterSignup />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Solutions;
