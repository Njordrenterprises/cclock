import { createRoute } from 'honox/factory'
import SignInSignUp from '../islands/SignInSignup'
import Header from '../islands/Header'

export default createRoute((c) => {
  return c.render(
    <div className="min-h-screen bg-base-300 theme-transition">
      <Header />
      <main>
        <section className="hero bg-base-100 py-10 sm:py-20">
          <div className="hero-content text-center px-4 sm:px-6">
            <div className="max-w-md w-full">
              <h1 className="text-3xl sm:text-5xl font-bold mb-4">
                <span className="text-primary">Dead Simple</span><br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">Time Tracking</span>
              </h1>
              <p className="py-4 sm:py-6 text-lg">Effortless timekeeping for smart contractors and freelancers.</p>
              <SignInSignUp />
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-base-200">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title">Easy Time Tracking</h3>
                  <p>Log your hours with just a few clicks.</p>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title">Detailed Reports</h3>
                  <p>Generate comprehensive reports for clients and projects.</p>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title">Invoicing Integration</h3>
                  <p>Seamlessly create invoices based on your tracked time.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer footer-center p-10 bg-base-200 text-base-content">
        <p>&copy; 2024 Contractor Clock. All rights reserved.</p>
      </footer>
    </div>,
    { title: 'Contractor Clock - Streamline Your Time Tracking' }
  )
})
