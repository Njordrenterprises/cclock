import SignInSignUp from './SignInSignup'

export default function Hero() {
  return (
    <section className="hero bg-base-100 mb-3 pt-12 pb-1 md:pt-16 md:pb-12">
      <div className="hero-content text-center max-w-4xl mx-auto px-4">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            <span className="block mb-1 text-primary">Dead Simple</span>
            <span className="animate-text-slide-up">Time Tracking</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-3 opacity-80">Effortless Timekeeping</p>
          <p className="text-lg md:text-xl mb-6 opacity-70">
            For Smart Contractors and Freelancers
          </p>
          <SignInSignUp id="signup" />
        </div>
      </div>
    </section>
  )
}
