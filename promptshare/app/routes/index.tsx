import { createRoute } from 'honox/factory'
import Header from '../islands/Header'
import Hero from '../islands/Hero'
import FeatureCards from '../islands/FeatureCards'

export default createRoute((c) => {
  const handleStartFreeTrial = () => {
    console.log('Start Free Trial button clicked');
    const signUpForm = document.getElementById('signup');
    if (signUpForm) {
      console.log('SignUp form found');
      signUpForm.scrollIntoView({ behavior: 'smooth' });
      
      // Toggle to SignUp if not already active
      const signInLink = signUpForm.querySelector('a.link-primary');
      if (signInLink && signInLink.textContent === 'Sign Up') {
        const signInLinkElement = signInLink as HTMLAnchorElement;
        if (signInLinkElement) {
          signInLinkElement.click();
        }
      }
      
      // Focus on the email input
      setTimeout(() => {
        const emailInput = signUpForm.querySelector('input[type="email"]');
        if (emailInput instanceof HTMLInputElement) {
          console.log('Email input found and focused');
          emailInput.focus();
        } else {
          console.log('Email input not found');
        }
      }, 100); // Short delay to allow for any state updates
    } else {
      console.log('SignUp form not found');
    }
  };

  return c.render(
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeatureCards />
        <section className="py-12 bg-base-100 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="mb-6">Sign up now and start your 14-day free trial</p>
          <a href="/signup" className="btn btn-primary btn-lg">Start Free Trial</a>
        </section>
      </main>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content">
        <p>&copy; 2024 Contractor Clock. All rights reserved.</p>
      </footer>
    </div>,
    { title: 'Contractor Clock - Streamline Your Time Tracking' }
  )
})
