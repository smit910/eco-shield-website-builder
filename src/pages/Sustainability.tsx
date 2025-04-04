import { ArrowRight, Leaf, BarChart3, LineChart, Recycle, Droplets, TreePine } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import NewsletterSignup from '@/components/NewsletterSignup';

const Sustainability = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center p-2 bg-eco-green/10 rounded-full mb-6">
              <Leaf className="w-5 h-5 text-eco-green" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Sustainability Commitment
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              We're on a mission to eliminate packaging waste while providing superior protection for your products.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center">
              Download Sustainability Report
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Environmental Impact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Environmental Impact</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every EcoShield packaging solution is designed with both performance and planet in mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow hover-lift">
              <div className="bg-eco-green/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Recycle className="w-6 h-6 text-eco-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Circular Economy</h3>
              <p className="text-gray-600">
                Our packaging is designed to be reused, recycled, or composted, creating a closed-loop system.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow hover-lift">
              <div className="bg-eco-green/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Droplets className="w-6 h-6 text-eco-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Water Conservation</h3>
              <p className="text-gray-600">
                Our manufacturing process uses 92% less water than traditional packaging materials.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow hover-lift">
              <div className="bg-eco-green/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <TreePine className="w-6 h-6 text-eco-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Carbon Reduction</h3>
              <p className="text-gray-600">
                Our mushroom packaging sequesters carbon during growth, reducing overall carbon footprint.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow hover-lift">
              <div className="bg-eco-green/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-eco-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Zero Waste</h3>
              <p className="text-gray-600">
                Production scraps are reused or composted, creating a zero-waste manufacturing process.
              </p>
            </div>
          </div>
          
          {/* Impact Metrics */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Impact in Numbers</h3>
                <p className="text-gray-600">
                  The cumulative environmental impact of our sustainable packaging solutions.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <select className="border border-gray-300 rounded px-3 py-2 bg-white">
                  <option>2024 (YTD)</option>
                  <option>2023</option>
                  <option>2022</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <BarChart3 className="w-8 h-8 text-eco-green mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">847K</div>
                <p className="text-gray-600 text-sm">Plastic Packages Avoided</p>
              </div>
              
              <div className="text-center">
                <LineChart className="w-8 h-8 text-eco-green mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">76%</div>
                <p className="text-gray-600 text-sm">Carbon Footprint Reduction</p>
              </div>
              
              <div className="text-center">
                <Droplets className="w-8 h-8 text-eco-green mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">12.5M</div>
                <p className="text-gray-600 text-sm">Gallons of Water Saved</p>
              </div>
              
              <div className="text-center">
                <TreePine className="w-8 h-8 text-eco-green mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">3,240</div>
                <p className="text-gray-600 text-sm">Trees Preserved</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Materials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Sustainable Materials</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We use innovative, eco-friendly materials that protect both your products and our planet.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="h-80 bg-gray-200 rounded-xl overflow-hidden">
                {/* Replace with actual image of mushroom foam */}
                <img src="/placeholder.svg" alt="Mushroom Foam" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mushroom Foam</h3>
              <p className="text-gray-600 mb-6">
                Our signature packaging material is grown, not manufactured. Using agricultural waste and mycelium (mushroom roots), we create custom-molded packaging that's 100% home compostable.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    label: "Biodegradable",
                    value: "100%",
                    description: "Breaks down completely in home compost in 45 days"
                  },
                  {
                    label: "Renewable",
                    value: "100%",
                    description: "Made from agricultural waste and mycelium"
                  },
                  {
                    label: "Protection",
                    value: "Excellent",
                    description: "Superior shock absorption and cushioning"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="w-24 flex-shrink-0">
                      <div className="font-semibold text-gray-900">{item.label}</div>
                    </div>
                    <div>
                      <div className="font-bold text-eco-green">{item.value}</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Corrugated Bubble Wrap</h3>
              <p className="text-gray-600 mb-6">
                Our paper-based alternative to plastic bubble wrap offers excellent protection with none of the environmental downsides of traditional plastic materials.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    label: "Recyclable",
                    value: "100%",
                    description: "Curbside recyclable with paper waste"
                  },
                  {
                    label: "Material",
                    value: "FSC Certified",
                    description: "Made from responsibly sourced paper"
                  },
                  {
                    label: "Protection",
                    value: "Very Good",
                    description: "Excellent cushioning and void fill capabilities"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="w-24 flex-shrink-0">
                      <div className="font-semibold text-gray-900">{item.label}</div>
                    </div>
                    <div>
                      <div className="font-bold text-eco-green">{item.value}</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="h-80 bg-gray-200 rounded-xl overflow-hidden">
                {/* Replace with actual image of corrugated bubble wrap */}
                <img src="/placeholder.svg" alt="Corrugated Bubble Wrap" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="h-80 bg-gray-200 rounded-xl overflow-hidden">
                {/* Replace with actual image of hemp padding */}
                <img src="/placeholder.svg" alt="Hemp Fiber Padding" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hemp Fiber Padding</h3>
              <p className="text-gray-600 mb-6">
                Ultra-strong natural fiber padding made from sustainably grown hemp, offering excellent protection for heavier items with minimal environmental impact.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    label: "Biodegradable",
                    value: "100%",
                    description: "Naturally breaks down in compost"
                  },
                  {
                    label: "Cultivation",
                    value: "Low Impact",
                    description: "Requires minimal water and no pesticides"
                  },
                  {
                    label: "Protection",
                    value: "Superior",
                    description: "Extremely durable and shock-resistant"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="w-24 flex-shrink-0">
                      <div className="font-semibold text-gray-900">{item.label}</div>
                    </div>
                    <div>
                      <div className="font-bold text-eco-green">{item.value}</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sustainability Commitments */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Sustainability Commitments</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're constantly working to improve our environmental impact and help our clients meet their sustainability goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-eco-green">
              <div className="font-bold text-xl mb-1">2025 Goal</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Carbon Neutral Operations</h3>
              <p className="text-gray-600 mb-6">
                We're on track to make our entire manufacturing and distribution operations carbon neutral by 2025.
              </p>
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-eco-green h-2.5 rounded-full" style={{ width: "68%" }}></div>
                </div>
                <span className="ml-2 text-sm font-medium">68%</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">Progress toward goal</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-eco-green">
              <div className="font-bold text-xl mb-1">2026 Goal</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Zero Waste to Landfill</h3>
              <p className="text-gray-600 mb-6">
                We're implementing systems to ensure 100% of our manufacturing waste is reused, recycled or composted.
              </p>
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-eco-green h-2.5 rounded-full" style={{ width: "82%" }}></div>
                </div>
                <span className="ml-2 text-sm font-medium">82%</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">Progress toward goal</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-eco-green">
              <div className="font-bold text-xl mb-1">2025 Goal</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">100M Plastic Packages Replaced</h3>
              <p className="text-gray-600 mb-6">
                We aim to replace 100 million plastic packaging units with our sustainable alternatives by 2025.
              </p>
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-eco-green h-2.5 rounded-full" style={{ width: "43%" }}></div>
                </div>
                <span className="ml-2 text-sm font-medium">43%</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">Progress toward goal</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Certifications</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              EcoShield Packaging meets the highest industry standards for sustainability and quality.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm hover-lift flex items-center justify-center h-32">
                {/* Replace with actual certification logos */}
                <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-eco-green-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <Leaf className="w-12 h-12 text-white/80 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Ready to Make Your Packaging More Sustainable?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Join the hundreds of businesses reducing their environmental footprint with EcoShield Packaging.
          </p>
          <Link to="/contact" className="bg-white text-eco-green-dark px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-flex items-center">
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

export default Sustainability;
