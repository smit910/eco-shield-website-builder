
import { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FaqSection = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>("faq-1");
  
  const faqs: FaqItem[] = [
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
  );
};

export default FaqSection;
