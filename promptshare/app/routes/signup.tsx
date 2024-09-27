import { createRoute } from 'honox/factory'
import Header from '../islands/Header'

export default createRoute((c) => {
  return c.render(
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-16 mt-3">
        <section className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Start Your Free 14-Day Trial</h1>
          <div className="max-w-2xl mx-auto bg-base-200 shadow-xl rounded-lg p-8">
            <p className="text-center mb-6">No credit card required. Get full access to all features for 14 days.</p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block mb-2 font-semibold">First Name</label>
                  <input type="text" id="firstName" name="firstName" className="input input-bordered w-full" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2 font-semibold">Last Name</label>
                  <input type="text" id="lastName" name="lastName" className="input input-bordered w-full" required />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-semibold">Work Email</label>
                <input type="email" id="email" name="email" className="input input-bordered w-full" required />
              </div>
              <div>
                <label htmlFor="company" className="block mb-2 font-semibold">Company Name</label>
                <input type="text" id="company" name="company" className="input input-bordered w-full" required />
              </div>
              <div>
                <label htmlFor="jobTitle" className="block mb-2 font-semibold">Job Title</label>
                <input type="text" id="jobTitle" name="jobTitle" className="input input-bordered w-full" required />
              </div>
              <div>
                <label htmlFor="teamSize" className="block mb-2 font-semibold">Team Size</label>
                <select id="teamSize" name="teamSize" className="select select-bordered w-full" required>
                  <option value="">Select team size</option>
                  <option value="1-5">1-5</option>
                  <option value="6-20">6-20</option>
                  <option value="21-50">21-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201+">201+</option>
                </select>
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 font-semibold">Create Password</label>
                <input type="password" id="password" name="password" className="input input-bordered w-full" required minLength={8} />
                <p className="text-sm mt-1 text-gray-600">Must be at least 8 characters long</p>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="terms" name="terms" className="checkbox" required />
                <label htmlFor="terms" className="ml-2 text-sm">
                  I agree to the <a href="/terms" className="link link-primary">Terms of Service</a> and <a href="/privacy" className="link link-primary">Privacy Policy</a>
                </label>
              </div>
              <button type="submit" className="btn btn-primary w-full">Start Your Free Trial</button>
            </form>
            <div className="mt-8 text-center">
              <p className="text-sm">Already have an account? <a href="/login" className="link link-primary">Log in</a></p>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content">
        <p>&copy; 2024 Contractor Clock. All rights reserved.</p>
      </footer>
    </div>,
    { title: 'Sign Up for Free Trial - Contractor Clock' }
  )
})
