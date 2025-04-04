
import { ArrowRight, Calendar, ChevronRight, User } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import TestimonialCard from '@/components/TestimonialCard';
import NewsletterSignup from '@/components/NewsletterSignup';

const CaseStudies = () => {
  const featuredCaseStudies = [
    {
      id: 1,
      title: "How TechGadgets Reduced Shipping Damage by 87%",
      excerpt: "TechGadgets Inc. was experiencing significant losses due to product damage during shipping. Learn how EcoShield's mushroom foam solution transformed their logistics.",
      image: "/placeholder.svg",
      client: {
        name: "Sarah Johnson",
        role: "Logistics Director, TechGadgets Inc.",
        image: "/placeholder.svg"
      },
      stats: [
        { label: "Damage Reduction", value: "87%" },
        { label: "Annual Savings", value: "$245K" },
        { label: "CO2 Reduction", value: "34 tons" }
      ],
      date: "June 15, 2024"
    },
    {
      id: 2,
      title: "Luxury Ceramics Co. Achieves 93% Decrease in Breakage",
      excerpt: "Shipping fragile ceramics was an expensive challenge until Luxury Ceramics Co. implemented EcoShield's custom packaging solution.",
      image: "/placeholder.svg",
      client: {
        name: "Michael Rodriguez",
        role: "Operations Manager, Luxury Ceramics Co.",
        image: "/placeholder.svg"
      },
      stats: [
        { label: "Breakage Reduction", value: "93%" },
        { label: "Customer Returns", value: "-82%" },
        { label: "Packaging Weight", value: "-45%" }
      ],
      date: "May 3, 2024"
    },
    {
      id: 3,
      title: "GreenCommerce's Sustainability Success Story",
      excerpt: "See how GreenCommerce improved their sustainability metrics and customer satisfaction with EcoShield's eco-friendly packaging solutions.",
      image: "/placeholder.svg",
      client: {
        name: "Emily Chen",
        role: "Sustainability Officer, GreenCommerce",
        image: "/placeholder.svg"
      },
      stats: [
        { label: "Waste Reduction", value: "76%" },
        { label: "Customer Satisfaction", value: "+24%" },
        { label: "Carbon Footprint", value: "-58%" }
      ],
      date: "April 22, 2024"
    }
  ];
  
  const testimonials = [
    {
      name: "David Thompson",
      company: "Global Electronics",
      image: "/placeholder.svg",
      quote: "The custom inserts EcoShield designed for our product line have virtually eliminated transit damage while enhancing our unboxing experience. Our returns have dropped by 92% year over year.",
    },
    {
      name: "Jessica Wang",
      company: "Artisan Home Goods",
      image: "/placeholder.svg",
      quote: "As a company shipping delicate home decor items, damage protection and sustainability are critical for us. EcoShield packaging solved both challenges beautifully.",
    },
    {
      name: "Mark Andrews",
      company: "Premium Glassware",
      image: "/placeholder.svg",
      quote: "We've been searching for years for a sustainable solution that could protect our glassware. EcoShield's mushroom foam has been revolutionary for our business.",
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Customer Success Stories
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              See how businesses like yours are solving packaging challenges, reducing damage, and meeting sustainability goals with EcoShield Packaging.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Case Studies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCaseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-xl shadow-md overflow-hidden hover-lift">
                <div className="h-48 bg-gray-200 relative">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{study.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {study.excerpt}
                  </p>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {study.stats.map((stat, index) => (
                      <div key={index} className="bg-gray-50 p-2 rounded text-center">
                        <div className="text-eco-green font-bold">{stat.value}</div>
                        <div className="text-gray-600 text-xs">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Client */}
                  <div className="flex items-center border-t border-gray-100 pt-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <img 
                        src={study.client.image} 
                        alt={study.client.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-sm text-gray-900">{study.client.name}</div>
                      <div className="text-xs text-gray-500">{study.client.role}</div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <a href="#" className="text-eco-green flex items-center text-sm font-medium">
                      Read Full Case Study
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Measurable Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our customers consistently see significant improvements across multiple key metrics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow text-center">
              <div className="text-4xl font-bold text-eco-green mb-2">90%</div>
              <div className="text-gray-900 font-medium">Average Reduction in Shipping Damage</div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow text-center">
              <div className="text-4xl font-bold text-eco-green mb-2">37%</div>
              <div className="text-gray-900 font-medium">Average Cost Savings on Packaging</div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow text-center">
              <div className="text-4xl font-bold text-eco-green mb-2">81%</div>
              <div className="text-gray-900 font-medium">Average Reduction in Returns</div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow text-center">
              <div className="text-4xl font-bold text-eco-green mb-2">67%</div>
              <div className="text-gray-900 font-medium">Average Carbon Footprint Reduction</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                company={testimonial.company}
                image={testimonial.image}
                quote={testimonial.quote}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Industry Results */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Results By Industry</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {[
              {
                industry: "Electronics",
                description: "Protecting sensitive electronics while reducing packaging waste and costs.",
                stats: [
                  { label: "Damage Reduction", value: "92%" },
                  { label: "Weight Reduction", value: "43%" },
                  { label: "Cost Savings", value: "$320K" }
                ]
              },
              {
                industry: "Home Goods & Decor",
                description: "Custom solutions for fragile ceramics, glassware, and decorative items.",
                stats: [
                  { label: "Breakage Reduction", value: "95%" },
                  { label: "Customer Complaints", value: "-87%" },
                  { label: "Return Rate", value: "-78%" }
                ]
              },
              {
                industry: "Medical Devices",
                description: "Precision packaging for sensitive medical equipment and devices.",
                stats: [
                  { label: "Damage Reduction", value: "99%" },
                  { label: "Sterility Compliance", value: "100%" },
                  { label: "Waste Reduction", value: "62%" }
                ]
              },
              {
                industry: "E-Commerce",
                description: "Right-sized packaging solutions for diverse product catalogs.",
                stats: [
                  { label: "Space Efficiency", value: "+41%" },
                  { label: "Shipping Costs", value: "-33%" },
                  { label: "Customer Satisfaction", value: "+28%" }
                ]
              }
            ].map((item, index) => (
              <div key={index} className="flex">
                <div className="mr-6">
                  <div className="w-16 h-16 rounded-full bg-eco-green flex items-center justify-center text-white text-xl font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.industry}</h3>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {item.stats.map((stat, i) => (
                      <div key={i} className="bg-white p-3 rounded-lg shadow-sm text-center">
                        <div className="text-eco-green font-bold">{stat.value}</div>
                        <div className="text-gray-600 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-eco-green">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Let us help you reduce damage, cut costs, and improve sustainability with our innovative packaging solutions.
          </p>
          <Link to="/contact" className="bg-white text-eco-green px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-flex items-center">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
      
      {/* Newsletter */}
      <NewsletterSignup />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CaseStudies;
