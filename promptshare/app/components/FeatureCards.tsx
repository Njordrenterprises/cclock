import { FC } from 'hono/jsx'

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

const FeatureCard: FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="card bg-base-100 bg-opacity-30 backdrop-blur-lg shadow-xl mb-4">
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{description}</p>
    </div>
  </div>
)

const FeatureCards: FC = () => (
  <section className="py-12 bg-base-100">
    <h2 className="text-3xl font-bold text-center mb-8">Why Choose Contractor Clock?</h2>
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <FeatureCard key={index} title={feature.title} description={feature.description} />
        ))}
      </div>
    </div>
  </section>
)

export default FeatureCards
