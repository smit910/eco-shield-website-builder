
// Let's update the problematic parts of the Solutions page

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TabsTrigger, TabsList, TabsContent, Tabs } from '@/components/ui/tabs';
import { ArrowRight, CheckCircle, ChevronDown, ChevronUp, Leaf, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import PackagingDisplay from '@/components/PackagingDisplay';
import NewsletterSignup from '@/components/NewsletterSignup';

interface SolutionCategory {
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

const Solutions = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>("faq-1");
  
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
  
  const faqs = [
    {
      id: "faq-1",
      question: "How much can EcoShield packaging reduce shipping damage?",
      answer: "Our customers typically see a 85-95% reduction in shipping damage when switching to EcoShield packaging solutions. This significant reduction is due to our advanced impact-resistant materials and custom-designed solutions that provide superior protection compared to traditional packaging options."
    },
    {
      id: "faq-2",
      question: "Are your packaging materials really 100% biodegradable?",
      answer: "Yes, our core packaging materials like mushroom foam are 100% biodegradable and compostable. Our mushroom foam will break down in a home compost setting in approximately 45 days, leaving no harmful residues or microplastics behind. We also offer recyclable options for businesses with specific requirements."
    },
    {
      id: "faq-3",
      question: "How do you customize packaging for different products?",
      answer: "We use a combination of 3D scanning, AI-powered design optimization, and material science to create custom packaging solutions. Our process starts with understanding your product's dimensions, fragility, and shipping conditions. We then create digital models and test them in virtual simulations before producing physical prototypes for real-world testing."
    },
    {
      id: "faq-4",
      question: "What is the minimum order quantity for custom packaging?",
      answer: "Our minimum order quantities vary by product type. For standard mushroom foam and corrugated bubble wrap, our MOQ is typically 500 units. For fully custom solutions with AI optimization, we usually require at least 1,000 units. However, we offer startup packages for new businesses with lower volume needs - please contact us to discuss your specific requirements."
    },
    {
      id: "faq-5",
      question: "How do I calculate my potential cost savings with EcoShield?",
      answer: "You can use our Cost Savings Calculator on the homepage to get a quick estimate based on your monthly shipment volume, current damage rate, and average product value. For a more detailed analysis, our consultants can perform a comprehensive assessment of your current packaging costs, damage rates, returns processing, and customer service expenses to calculate your total potential savings."
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
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
      
      {/* Solutions Tabs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Packaging Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our range of sustainable packaging options designed to protect your products and the planet.
            </p>
          </div>
          
          <Tabs defaultValue={solutions[0].id} className="w-full">
            <TabsList className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 bg-transparent">
              {solutions.map((solution) => (
                <TabsTrigger 
                  key={solution.id} 
                  value={solution.id}
                  className="border border-gray-200 bg-white hover:bg-gray-50 rounded-lg p-6 text-left data-[state=active]:border-eco-green data-[state=active]:border-2 shadow-sm h-auto"
                >
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0">
                      {solution.id === "impact-resistant" ? (
                        <Package className="w-6 h-6 text-eco-green" />
                      ) : (
                        <svg className="w-6 h-6 text-eco-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{solution.name}</h3>
                      <p className="text-gray-600 text-sm">{solution.description}</p>
                    </div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {solutions.map((solution) => (
              <TabsContent key={solution.id} value={solution.id} className="space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.name}</h3>
                    <p className="text-gray-700 mb-6">{solution.description}</p>
                    
                    <h4 className="text-lg font-semibold mb-3">Key Benefits</h4>
                    <ul className="space-y-2 mb-8">
                      {solution.benefits.map((benefit, index) => (
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
                            <div className="bg-eco-green h-2.5 rounded-full" style={{ width: solution.id === "impact-resistant" ? "70%" : "85%" }}></div>
                          </div>
                          <span className="ml-2 text-sm text-gray-600">{solution.id === "impact-resistant" ? "70%" : "85%"}</span>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg">
                        <div className="font-semibold mb-1">Biodegradable</div>
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-eco-green h-2.5 rounded-full" style={{ width: solution.id === "impact-resistant" ? "100%" : "85%" }}></div>
                          </div>
                          <span className="ml-2 text-sm text-gray-600">{solution.id === "impact-resistant" ? "100%" : "85%"}</span>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg">
                        <div className="font-semibold mb-1">Waste Reduction</div>
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-eco-green h-2.5 rounded-full" style={{ width: solution.id === "impact-resistant" ? "85%" : "95%" }}></div>
                          </div>
                          <span className="ml-2 text-sm text-gray-600">{solution.id === "impact-resistant" ? "85%" : "95%"}</span>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg">
                        <div className="font-semibold mb-1">Water Usage</div>
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-eco-green h-2.5 rounded-full" style={{ width: solution.id === "impact-resistant" ? "65%" : "80%" }}></div>
                          </div>
                          <span className="ml-2 text-sm text-gray-600">{solution.id === "impact-resistant" ? "65%" : "80%"}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mt-4">
                      *Compared to traditional packaging materials based on lifecycle assessment
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-10">Available Products</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {solution.products.map((product) => (
                      <div 
                        key={product.id} 
                        className={`bg-white rounded-xl shadow-md relative overflow-hidden border ${
                          product.isPopular ? 'border-eco-green' : 'border-transparent'
                        }`}
                      >
                        {product.isPopular && (
                          <div className="absolute top-0 right-0 bg-eco-green text-white text-xs py-1 px-3 rounded-bl-lg">
                            Most Popular
                          </div>
                        )}
                        
                        <div className="p-6">
                          <h4 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h4>
                          <p className="text-gray-600 mb-4">{product.description}</p>
                          
                          <div className="text-lg font-bold text-eco-green mb-4">
                            {product.priceRange}
                          </div>
                          
                          <h5 className="text-sm font-semibold uppercase text-gray-500 mb-2">Features</h5>
                          <ul className="space-y-2 mb-6">
                            {product.features.map((feature, index) => (
                              <li key={index} className="flex items-center text-sm text-gray-700">
                                <CheckCircle className="w-4 h-4 text-eco-green mr-2 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <h5 className="text-sm font-semibold uppercase text-gray-500 mb-2">Best For</h5>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {product.bestFor.map((item, index) => (
                              <span key={index} className="bg-gray-100 text-gray-700 text-xs py-1 px-2 rounded">
                                {item}
                              </span>
                            ))}
                          </div>
                          
                          <Link 
                            to="/contact" 
                            className={`w-full block text-center py-2 rounded-md ${
                              product.isPopular 
                                ? 'bg-eco-green text-white hover:bg-eco-green-dark' 
                                : 'border border-eco-green text-eco-green hover:bg-eco-green-light/10'
                            } transition-colors`}
                          >
                            Get a Quote
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our sustainable packaging solutions.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div 
                  key={faq.id} 
                  className="bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <button
                    className="flex justify-between items-center w-full p-6 text-left"
                    onClick={() => setOpenAccordion(openAccordion === faq.id ? null : faq.id)}
                  >
                    <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                    {openAccordion === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openAccordion === faq.id && (
                    <div className="px-6 pb-6">
                      <div className="w-full h-px bg-gray-100 mb-4"></div>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Don't see your question here?</p>
              <Link to="/contact" className="btn-outline inline-flex items-center">
                Contact Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-eco-green-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to See Our Solutions in Action?</h2>
            <p className="text-lg opacity-90 mb-8">
              Request a sample kit or speak with our packaging consultants to find the perfect solution for your products.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-white text-eco-green-dark px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Request Samples
              </Link>
              <Link to="/contact" className="border border-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors">
                Speak to a Consultant
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <NewsletterSignup />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Solutions;
