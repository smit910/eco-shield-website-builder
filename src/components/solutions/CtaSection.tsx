
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
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
  );
};

export default CtaSection;
