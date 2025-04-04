
import { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }
    
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail('');
    }, 1000);
  };
  
  return (
    <div className="bg-eco-green-dark py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <Mail className="w-12 h-12 text-white mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-white mb-3">Stay Updated</h2>
        <p className="text-white/80 mb-8 max-w-xl mx-auto">
          Subscribe to our newsletter for the latest sustainable packaging innovations, case studies, and exclusive offers.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <div className="flex-grow">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-4 py-3 rounded-md border-2 border-white/20 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-white text-eco-green-dark px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors flex items-center justify-center"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-eco-green-dark border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                Subscribe
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSignup;
