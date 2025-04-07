
import { ArrowRight, Check, Leaf, Package, ShieldCheck, TrendingUp, Download, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import FeatureCard from '@/components/FeatureCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CostCalculator from '@/components/CostCalculator';
import PackagingDisplay from '@/components/PackagingDisplay';
import TestimonialCard from '@/components/TestimonialCard';
import NewsletterSignup from '@/components/NewsletterSignup';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Eliminating Shipping Damage—
              <span className="text-eco-green">Sustainably.</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 animate-fade-in animate-delayed">
              Smart, sustainable packaging solutions that reduce e-commerce shipping damage by <span className="font-bold">90%</span> while cutting costs and environmental waste.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: "0.6s"}}>
              <Link to="/contact" className="btn-primary inline-flex items-center">
                Get a Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/sustainability" className="btn-outline inline-flex items-center">
                Sustainability Report
                <Leaf className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 mt-4 animate-fade-in" style={{animationDelay: "0.7s"}}>
              <a 
                href="https://docs.google.com/presentation/d/1ySS2CcwkYaqh4mlYqJOA-86lxDU33ZxZ/edit?usp=sharing" 
                target="_blank" 
                className="btn-outline inline-flex items-center"
              >
                View Presentation
                <Download className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="https://drive.google.com/file/d/1aDdV9AFdM-r2bAUgOAuY_eVWe6B_3X80/view?usp=sharing" 
                target="_blank" 
                className="btn-outline inline-flex items-center"
              >
                Watch Video
                <Play className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 animate-fade-in" style={{animationDelay: "0.8s"}}>
              <div className="flex -space-x-2">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img 
                      src={`https://randomuser.me/api/portraits/women/${i + 20}.jpg`} 
                      alt="User avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="font-semibold">Trusted by 200+ companies</div>
                <div className="text-sm text-gray-500">From startups to enterprises</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative">
              <PackagingDisplay />
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="container mx-auto px-4 mt-16">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-eco-green">90%</div>
                <p className="text-gray-600">Reduction in Shipping Damage</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-eco-green">37%</div>
                <p className="text-gray-600">Average Cost Savings</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-eco-green">100%</div>
                <p className="text-gray-600">Biodegradable Materials</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Smart Solutions for Every Package</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our innovative sustainable packaging solutions are designed to protect your products and the planet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Impact-Resistant Materials"
              description="Mushroom foam and corrugated bubble wrap that absorbs shocks and protects fragile items from damage."
              icon={<ShieldCheck size={24} />}
            />
            <FeatureCard
              title="Custom Solutions"
              description="Right-sized, AI-optimized designs tailored to your specific product dimensions and shipping requirements."
              icon={<Package size={24} />}
            />
            <FeatureCard
              title="Sustainable Packaging"
              description="100% biodegradable materials that break down naturally, leaving no harmful residue in the environment."
              icon={<Leaf size={24} />}
            />
            <FeatureCard
              title="Cost-Effective"
              description="Reduce returns and replacements by up to 90% while minimizing packaging waste and shipping costs."
              icon={<TrendingUp size={24} />}
            />
            <FeatureCard
              title="IoT-Enabled Monitoring"
              description="Smart packaging solutions with built-in sensors to track shipment conditions in real-time."
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>}
            />
            <FeatureCard
              title="Compliance Ready"
              description="Meet and exceed sustainability regulations and ESG requirements with our certified eco-friendly packaging."
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>}
            />
          </div>
          
          <div className="text-center mt-8">
            <Link to="/solutions" className="btn-primary inline-flex items-center">
              Learn More About Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose EcoShield Packaging?
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Reduce Damage & Returns",
                    description: "Our packaging reduces shipping damage by up to 90%, saving you money on returns, replacements, and customer support."
                  },
                  {
                    title: "Enhance Customer Experience",
                    description: "Provide a premium unboxing experience while demonstrating your commitment to sustainability."
                  },
                  {
                    title: "Meet Sustainability Goals",
                    description: "100% biodegradable materials help you meet ESG targets and appeal to environmentally-conscious consumers."
                  },
                  {
                    title: "Cut Shipping Costs",
                    description: "Right-sized packaging reduces dimensional weight charges and optimizes your shipping expenses."
                  }
                ].map((benefit, i) => (
                  <div key={i} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-eco-green flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/solutions" className="btn-primary inline-flex items-center">
                  Explore Our Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a 
                  href="https://drive.google.com/file/d/1aDdV9AFdM-r2bAUgOAuY_eVWe6B_3X80/view?usp=sharing" 
                  target="_blank" 
                  className="btn-outline inline-flex items-center"
                >
                  Watch Intro Video
                  <Play className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <CostCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by businesses of all sizes, from startups to Fortune 500 companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Sarah Johnson"
              company="TechGadgets Inc."
              image="https://randomuser.me/api/portraits/women/32.jpg"
              quote="EcoShield's packaging has reduced our damage rate from 8% to less than 1%. The ROI was almost immediate."
              stats={[
                { label: "Damage Reduction", value: "87%" },
                { label: "Cost Savings", value: "$45K" }
              ]}
            />
            <TestimonialCard 
              name="Michael Rodriguez"
              company="Luxury Ceramics Co."
              image="https://randomuser.me/api/portraits/men/37.jpg"
              quote="As a company shipping fragile items, we've struggled with damage for years. EcoShield solved our problem completely."
              stats={[
                { label: "Damage Reduction", value: "93%" },
                { label: "Customer Returns", value: "-82%" }
              ]}
            />
            <TestimonialCard 
              name="Emily Chen"
              company="GreenCommerce"
              image="https://randomuser.me/api/portraits/women/44.jpg"
              quote="Not only did EcoShield reduce our damages, but our customers love the eco-friendly packaging. Win-win!"
              stats={[
                { label: "Waste Reduction", value: "76%" },
                { label: "Customer Satisfaction", value: "+24%" }
              ]}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/case-studies" className="btn-outline inline-flex items-center">
              View All Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-eco-green relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Protect Your Products and the Planet?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join hundreds of forward-thinking companies using EcoShield's sustainable packaging solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-white text-eco-green px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Get a Custom Quote
              </Link>
              <Link to="/solutions" className="bg-transparent text-white border border-white px-8 py-3 rounded-md font-medium hover:bg-white/10 transition-colors">
                Explore Solutions
              </Link>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <a 
                href="https://docs.google.com/presentation/d/1ySS2CcwkYaqh4mlYqJOA-86lxDU33ZxZ/edit?usp=sharing"
                target="_blank" 
                className="bg-transparent text-white border border-white px-8 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
              >
                Access Presentation
              </a>
              <a 
                href="https://www.linkedin.com/in/smit-patel-0ba852134/"
                target="_blank" 
                className="bg-transparent text-white border border-white px-8 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTZsLTQtNHY2aDBsNCA0aDZ2LTZsLTQgNG0wLTRsNC00di02aC02bC00IDR2NmwxMCAxMCIvPjwvZz48L2c+PC9zdmc+')] bg-repeat"></div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
