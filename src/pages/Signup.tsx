
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast.error('Please fill out all required fields.');
      return;
    }
    
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      toast.success('Thank you for signing up! Check your email for updates.');
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Signup Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              {!submitted ? (
                <>
                  <div className="text-center mb-8">
                    <div className="bg-eco-green/10 p-3 rounded-full inline-flex mb-4">
                      <Mail className="h-8 w-8 text-eco-green" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Sign Up for Updates</h1>
                    <p className="text-gray-600">
                      Get the latest news, product updates, and sustainability insights from EcoShield Packaging.
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eco-green focus:border-transparent"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eco-green focus:border-transparent"
                          placeholder="you@example.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eco-green focus:border-transparent"
                          placeholder="Your company name (optional)"
                        />
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
                            Sign Up for Updates
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                  
                  <p className="text-xs text-gray-500 mt-6 text-center">
                    By signing up, you agree to receive marketing emails from EcoShield Packaging. 
                    You can unsubscribe at any time. We respect your privacy.
                  </p>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="bg-eco-green p-4 rounded-full inline-flex mb-6">
                    <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Thank You for Signing Up!</h2>
                  <p className="text-gray-600 mb-8">
                    We've sent a confirmation email to <span className="font-semibold">{email}</span>. 
                    Please check your inbox to complete the signup process.
                  </p>
                  <Link to="/" className="btn-outline inline-flex items-center">
                    Return to Homepage
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Signup;
