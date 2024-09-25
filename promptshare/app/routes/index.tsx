import { createRoute } from 'honox/factory'
import SignInSignUp from '../islands/SignInSignup'
import Header from '../islands/Header'

export default createRoute((c) => {
  return c.render(
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="hero bg-base-100">
          <div className="hero-content text-center">
            <div>
              <h1 className="text-3xl sm:text-5xl font-bold mb-4">
                <span className="text-primary">Dead Simple</span><br />
                <span>Time Tracking</span>
              </h1>
              <p className="text-lg mb-6">Effortless timekeeping for smart contractors and freelancers.</p>
              <SignInSignUp />
            </div>
          </div>
        </section>

        {/* Rest of the content */}
      </main>

      <footer className="footer footer-center p-10 bg-base-200 text-base-content">
        <p>&copy; 2024 Contractor Clock. All rights reserved.</p>
      </footer>
    </div>,
    { title: 'Contractor Clock - Streamline Your Time Tracking' }
  )
})
