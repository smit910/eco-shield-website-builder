
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { toast } from 'sonner';

const ContactDetails = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    inquiryType: 'quote',
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill out all required fields.');
      return;
    }
    
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Thank you for your message! We will contact you shortly.');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        inquiryType: 'quote',
      });
      setLoading(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Contact Hero Section */}
      <section className="hero-gradient pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Information
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Get in touch with us to learn more about our sustainable packaging solutions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Reach Out to Us</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-eco-green/10 p-3 rounded-lg mr-4">
                    <MapPin className="w-6 h-6 text-eco-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      Carleton University<br />
                      1125 Colonel By Dr<br />
                      Ottawa, ON K1S 5B6<br />
                      Canada
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-eco-green/10 p-3 rounded-lg mr-4">
                    <Mail className="w-6 h-6 text-eco-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:smitpatel@cmail.carleton.ca" className="text-eco-green hover:text-eco-green-dark transition-colors">
                      smitpatel@cmail.carleton.ca
                    </a>
                    <p className="text-gray-600 mt-1 text-sm">
                      For inquiries and information
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-eco-green/10 p-3 rounded-lg mr-4">
                    <Phone className="w-6 h-6 text-eco-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-eco-green">
                      +1 (613) 555-1234
                    </p>
                    <p className="text-gray-600 mt-1 text-sm">
                      Mon-Fri, 9AM-5PM EST
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-eco-green/10 p-3 rounded-lg mr-4">
                    <ExternalLink className="w-6 h-6 text-eco-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Connect</h3>
                    <div className="flex items-center gap-2">
                      <a 
                        href="https://www.linkedin.com/in/smit-patel-0ba852134/" 
                        target="_blank"
                        className="text-eco-green hover:text-eco-green-dark transition-colors"
                      >
                        LinkedIn
                      </a>
                      <span className="text-gray-400">|</span>
                      <a 
                        href="https://docs.google.com/presentation/d/1ySS2CcwkYaqh4mlYqJOA-86lxDU33ZxZ/edit?usp=sharing" 
                        target="_blank"
                        className="text-eco-green hover:text-eco-green-dark transition-colors"
                      >
                        Presentation
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
                <div className="space-y-4">
                  <a 
                    href="https://docs.google.com/presentation/d/1ySS2CcwkYaqh4mlYqJOA-86lxDU33ZxZ/edit?usp=sharing" 
                    target="_blank"
                    className="flex items-center text-gray-700 hover:text-eco-green transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Detailed Presentation
                  </a>
                  <a 
                    href="https://drive.google.com/file/d/1aDdV9AFdM-r2bAUgOAuY_eVWe6B_3X80/view?usp=sharing" 
                    target="_blank"
                    className="flex items-center text-gray-700 hover:text-eco-green transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Introduction Video
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/smit-patel-0ba852134/" 
                    target="_blank"
                    className="flex items-center text-gray-700 hover:text-eco-green transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eco-green focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eco-green focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eco-green focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eco-green focus:border-transparent"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-1">
                        Inquiry Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eco-green focus:border-transparent"
                      >
                        <option value="quote">Request a Quote</option>
                        <option value="sample">Request Samples</option>
                        <option value="presentation">Request a Presentation</option>
                        <option value="collaboration">Partnership/Collaboration</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eco-green focus:border-transparent"
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <button 
                      type="submit" 
                      disabled={loading}
                      className="btn-primary w-full flex items-center justify-center"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.653337523639!2d-75.69914968447366!3d45.382829543285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0583b3442fab%3A0x254cc9817f641679!2sCarleton%20University!5e0!3m2!1sen!2sca!4v1656012345678!5m2!1sen!2sca" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              className="rounded-lg"
              title="EcoShield Location"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactDetails;
