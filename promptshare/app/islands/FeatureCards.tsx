import { FC, useEffect, useRef } from 'hono/jsx'

const features = [
  {
    title: "Dead Simple Interface",
    description: "Intuitive design for effortless time tracking without the learning curve."
  },
  {
    title: "Project Control",
    description: "Manage individual projects and team members with ease."
  },
  {
    title: "Instant Profitability Insights",
    description: "Set project budgets and gain immediate insights on profitability."
  },
  {
    title: "Pay-by-the-Minute Pricing",
    description: "Flexible pricing that ensures you only pay for the time you track."
  },
  {
    title: "AI-Powered Data Insights",
    description: "Leverage AI integrations for deeper project and productivity insights."
  },
  {
    title: "Automated Invoicing",
    description: "Generate professional invoices with a single click based on tracked time."
  }
]

interface FeatureCardProps {
  title: string;
  description: string;
  key: number;
}

const FeatureCard: FC<FeatureCardProps> = ({ title, description }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="card bg-base-100 shadow-xl transition-all duration-500 ease-in-out mb-2 w-full max-w-md mx-auto feature-card hover:scale-105"
    >
      <div className="card-body p-8">
        <h2 className="card-title text-2xl mb-4">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

const FeatureCards: FC = () => (
  <section id="features" className="py-12 bg-base-100">
    <h2 className="text-3xl font-bold text-center mb-20 mt-1">Why?</h2>
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center gap-4">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  </section>
);

export default FeatureCards;
