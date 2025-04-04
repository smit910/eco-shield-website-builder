
import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
  iconClassName?: string;
}

const FeatureCard = ({
  title,
  description,
  icon,
  className,
  iconClassName
}: FeatureCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-xl p-6 shadow-md transition-all hover:shadow-lg hover-lift",
      className
    )}>
      <div className={cn(
        "w-12 h-12 rounded-lg bg-eco-green/10 flex items-center justify-center text-eco-green mb-4",
        iconClassName
      )}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
