import { createRoute } from 'honox/factory'
import Header from '../islands/Header'

export default createRoute((c) => {
  return c.render(
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-16 mt-16">
        <section className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">Name</label>
                <input type="text" id="name" name="name" className="input input-bordered w-full" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input type="email" id="email" name="email" className="input input-bordered w-full" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea id="message" name="message" rows={4} className="textarea textarea-bordered w-full" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">Send Message</button>
            </form>
          </div>
        </section>
      </main>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content">
        <p>&copy; 2024 Contractor Clock. All rights reserved.</p>
      </footer>
    </div>,
    { title: 'Contact Us - Contractor Clock' }
  )
})
