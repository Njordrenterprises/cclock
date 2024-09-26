import { createRoute } from 'honox/factory'
import SignInSignUp from '../islands/SignInSignup'
import Header from '../islands/Header'
import FeatureCards from '../components/FeatureCards'

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
              <SignInSignUp id="signup" />
            </div>
          </div>
        </section>

        <FeatureCards />

        <section className="py-12 bg-base-100 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="mb-6">Sign up now and start tracking your time efficiently!</p>
          <a href="#" className="btn btn-primary btn-lg" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }}>Sign Up Now</a>
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
