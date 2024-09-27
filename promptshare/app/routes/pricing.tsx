import { createRoute } from 'honox/factory'
import Header from '../islands/Header'

interface PricingPlan {
  title: string;
  price: string;
  features: string[];
}

interface PricingCardProps extends PricingPlan {
  key: number;
}

const PricingCard = ({ title, price, features }: PricingCardProps) => (
  <div className="card bg-base-100 shadow-xl transition-all duration-300 ease-in-out hover:scale-105">
    <div className="card-body">
      <h2 className="card-title text-2xl font-bold mb-4">{title}</h2>
      <p className="text-3xl font-bold mb-6">{price}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default createRoute((c) => {
  const pricingPlans: PricingPlan[] = [
    {
      title: "Solopreneur",
      price: "Free for first 40 hours/week",
      features: [
        "Time tracking",
        "Project management",
        "Basic reporting",
        "Pay only $0.004/minute after 40 hours"
      ]
    },
    {
      title: "Small Team",
      price: "Starting at $0.003/minute",
      features: [
        "Everything in Solopreneur",
        "Team collaboration",
        "Advanced reporting",
        "Priority support"
      ]
    },
    {
      title: "Enterprise",
      price: "Custom pricing",
      features: [
        "Everything in Small Team",
        "Custom integrations",
        "Dedicated account manager",
        "On-premise deployment option"
      ]
    }
  ]

  return c.render(
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-16 mt-4">
        <section className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Pricing Plans</h1>
          <p className="text-xl text-center mb-12">Pay only for what you use, with 40 free hours per week for solopreneurs!</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-lg mb-4">All plans come with a 14-day free trial. No credit card required.</p>
            <a href="/signup" className="btn btn-primary btn-lg">Start Your Free Trial</a>
          </div>
        </section>
      </main>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content">
        <p>&copy; 2024 Contractor Clock. All rights reserved.</p>
      </footer>
    </div>,
    { title: 'Pricing - Contractor Clock' }
  )
})
