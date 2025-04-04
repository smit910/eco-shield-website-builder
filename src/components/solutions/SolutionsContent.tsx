
import { Tabs, TabsList, TabsContent } from '@/components/ui/tabs';
import SolutionCard from './SolutionCard';
import SolutionBenefits from './SolutionBenefits';
import SolutionProducts from './SolutionProducts';
import { SolutionCategory } from '@/types/solutions';

interface SolutionsContentProps {
  solutions: SolutionCategory[];
}

const SolutionsContent = ({ solutions }: SolutionsContentProps) => {
  return (
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
              <SolutionCard 
                key={solution.id}
                id={solution.id}
                name={solution.name}
                description={solution.description}
              />
            ))}
          </TabsList>
          
          {solutions.map((solution) => (
            <TabsContent key={solution.id} value={solution.id} className="space-y-16">
              <SolutionBenefits
                name={solution.name}
                description={solution.description}
                benefits={solution.benefits}
                environmentalImpact={{
                  co2Reduction: solution.id === "impact-resistant" ? "70%" : "85%",
                  biodegradable: solution.id === "impact-resistant" ? "100%" : "85%",
                  wasteReduction: solution.id === "impact-resistant" ? "85%" : "95%",
                  waterUsage: solution.id === "impact-resistant" ? "65%" : "80%"
                }}
              />
              
              <SolutionProducts products={solution.products} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default SolutionsContent;
