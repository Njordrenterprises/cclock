import { useState, useRef } from 'hono/jsx'

export default function SignInSignUp({ id }: { id?: string }) {
  const [isSignIn, setIsSignIn] = useState(true);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div id={id} className="card bg-base-200 shadow-xl w-full max-w-sm mx-auto mb-4">
      <div className="card-body p-4 sm:p-6">
        <h2 className="card-title text-2xl sm:text-3xl mb-4">{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input ref={emailInputRef} type="email" placeholder="Email" className="input input-bordered w-full" />
        </div>
        <div className="form-control mt-2">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" className="input input-bordered w-full" />
        </div>
        {!isSignIn && (
          <div className="form-control mt-2">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm Password" className="input input-bordered w-full" />
          </div>
        )}
        <div className="form-control mt-6">
          <button className="btn btn-primary w-full">{isSignIn ? 'Sign In' : 'Sign Up'}</button>
        </div>
        <p className="text-center mt-4 text-sm sm:text-base">
          {isSignIn ? "Don't have an account? " : "Already have an account? "}
          <a href="#" onClick={toggleForm} className="link link-primary">
            {isSignIn ? 'Sign Up' : 'Sign In'}
          </a>
        </p>
      </div>
    </div>
  );
}