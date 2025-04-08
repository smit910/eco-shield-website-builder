
import { ArrowRight, Download, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* About Us Hero Section */}
      <section className="hero-gradient pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About EcoShield Packaging
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Revolutionizing packaging with sustainable solutions for a better future.
            </p>
          </div>
        </div>
      </section>
      
      {/* Company Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At EcoShield Packaging, we're on a mission to eliminate shipping damage while 
                reducing the environmental impact of packaging. We believe that protecting 
                products and protecting our planet can go hand in hand.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2023, our team of packaging engineers and sustainability experts 
                has developed innovative solutions that outperform traditional packaging materials 
                while being 100% biodegradable and environmentally friendly.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <a 
                  href="https://drive.google.com/file/d/1AezLTTghm1Up7DzYgyRkyQzNj-tOtQXU/view?usp=sharing" 
                  target="_blank" 
                  className="btn-primary inline-flex items-center"
                >
                  Access Presentation
                  <Download className="ml-2 h-5 w-5" />
                </a>
                <a 
                  href="https://drive.google.com/file/d/1aDdV9AFdM-r2bAUgOAuY_eVWe6B_3X80/view?usp=sharing" 
                  target="_blank" 
                  className="btn-outline inline-flex items-center"
                >
                  Watch Introduction Video
                  <Play className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="/lovable-uploads/ed2d2a1a-a950-45eb-ad8d-2155cb374010.png" 
                alt="Sustainable packaging materials" 
                className="rounded-lg shadow-lg w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Problem and Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Problem We're Solving</h2>
              <p className="text-lg text-gray-700 mb-6">
                E-commerce shipping damage costs businesses billions annually, with traditional 
                packaging solutions often being environmentally harmful and inefficient. Plastic 
                foam, bubble wrap, and excessive packaging create mountains of waste that takes 
                centuries to decompose.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Meanwhile, damaged products lead to returns, replacements, customer service costs, 
                and lost customer loyalty - all while doubling the carbon footprint of shipping.
              </p>
              <Link to="/solutions" className="btn-primary inline-flex items-center">
                Explore Our Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80" 
                alt="Packaging problem visualization" 
                className="rounded-lg shadow-lg w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Vision for the Future
            </h2>
            <p className="text-xl text-gray-600">
              We envision a world where packaging protects both products and our planet.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-md hover-lift">
              <div className="bg-eco-green/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-eco-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Zero Damage</h3>
              <p className="text-gray-600">
                We're working toward a future where shipping damage is entirely eliminated,
                saving resources and improving customer experiences.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover-lift">
              <div className="bg-eco-green/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-eco-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Zero Waste</h3>
              <p className="text-gray-600">
                Our fully biodegradable materials break down naturally, leaving no trace
                and reducing landfill waste from packaging.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover-lift">
              <div className="bg-eco-green/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-eco-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Maximum Efficiency</h3>
              <p className="text-gray-600">
                Smart, right-sized packaging that reduces shipping costs and maximizes
                protection while minimizing material usage.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/contact" className="btn-primary inline-flex items-center">
              Join Our Mission
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Led by passionate experts in sustainability and packaging innovation.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden hover-lift">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80" 
                alt="Smit Patel" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Smit Patel</h3>
                <p className="text-eco-green font-medium mb-4">Founder & CEO</p>
                <p className="text-gray-600 mb-4">
                  Expert in sustainable materials with a passion for reducing environmental impact 
                  through innovative packaging solutions.
                </p>
                
                {/* Skills Section */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Skills</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">UI/UX Design</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">Web Development</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">Figma</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">Adobe Creative Suite</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">Wireframing</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">Prototyping</span>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 mb-3">Education</h4>
                  <div className="mb-2 text-sm">
                    <div className="font-medium">Master of Engineering (Software Engineering)</div>
                    <div className="text-gray-600">Carleton University, Sep 2024 - Present</div>
                  </div>
                  <div className="mb-4 text-sm">
                    <div className="font-medium">Bachelor of Computer Engineering</div>
                    <div className="text-gray-600">Gujarat Technical University, Aug 2019 - June 2023</div>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 mb-3">Experience</h4>
                  <div className="mb-2 text-sm">
                    <div className="font-medium">Web Developer</div>
                    <div className="text-gray-600">Eidolon Design Studio, Jan 2023 - Oct 2023</div>
                  </div>
                  <div className="mb-4 text-sm">
                    <div className="font-medium">UI/UX & Graphic Designer</div>
                    <div className="text-gray-600">Eidolon Design Studio, April 2022 – Dec 2022</div>
                  </div>
                </div>
                
                <div className="flex space-x-3 mt-6">
                  <a 
                    href="https://www.linkedin.com/in/smit-patel-0ba852134/" 
                    target="_blank" 
                    className="text-gray-600 hover:text-blue-500"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a 
                    href="mailto:smitpatel@cmail.carleton.ca" 
                    className="text-gray-600 hover:text-eco-green"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-eco-green relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Mission for Sustainable Packaging
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Learn more about how EcoShield is revolutionizing packaging for a greener future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://drive.google.com/file/d/1AezLTTghm1Up7DzYgyRkyQzNj-tOtQXU/view?usp=sharing"
                target="_blank" 
                className="bg-white text-eco-green px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Access Presentation
              </a>
              <Link to="/contact" className="bg-transparent text-white border border-white px-8 py-3 rounded-md font-medium hover:bg-white/10 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTZsLTQtNHY2aDBsNCA0aDZ2LTZsLTQgNG0wLTRsNC00di02aC02bC00IDR2NmwxMCAxMCIvPjwvZz48L2c+PC9zdmc+')] bg-repeat"></div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
