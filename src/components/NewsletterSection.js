import { subscribeAPI } from "@/utils/api";
import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = async () => {
    // Basic email validation
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = subscribeAPI.create({email});

      const data = await response.json();

      if (response.ok && data.success) {
        setSubscribed(true);
        setEmail("");
      } else {  
        const errorMessage = 
          data.error?.message || 
          data.error || 
          data.message || 
          "Failed to subscribe. Please try again.";
        setError(errorMessage);
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !isLoading) {
      handleSubscribe();
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Clear error when user starts typing
    if (error) {
      setError("");
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
      <span className="block text-xs font-bold tracking-widest uppercase text-emerald-400 font-mono mb-2">
        Stay Updated
      </span>
      <h2 className="text-lg sm:text-2xl font-bold tracking-tight text-zinc-100 mb-2">
        New Tools Drop Every Two Weeks
      </h2>
      <p className="text-xs sm:text-sm text-zinc-500 mb-6 sm:mb-8 max-w-md mx-auto">
        The next tool on our list might be the one you&apos;ve been Googling for. Get a short email when it ships.
      </p>

      {subscribed ? (
        <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-950 border border-emerald-800/60 text-emerald-400 text-sm font-semibold font-mono">
          <span>✓</span> Thanks for trusting us! You&apos;ll be the first to know when something new drops.
        </div>
      ) : (
        <div className="max-w-md mx-auto px-2 sm:px-0">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              onKeyDown={handleKeyDown}
              placeholder="you@company.com"
              disabled={isLoading}
              aria-label="Email address"
              aria-invalid={error ? "true" : "false"}
              aria-describedby={error ? "email-error" : undefined}
              className="w-full sm:flex-1 px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 text-sm font-mono outline-none focus:border-zinc-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
            type="button"
              onClick={handleSubscribe}
              disabled={isLoading}
              aria-label={isLoading ? "Subscribing to newsletter" : "Subscribe to newsletter"}
              className="w-full cursor-pointer sm:w-auto px-5 py-3 rounded-xl bg-emerald-950 border border-emerald-800/60 text-emerald-400 text-sm font-semibold font-mono hover:bg-emerald-900/40 transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Subscribing..." : "Notify Me →"}
            </button>
          </div>
          {error && (
            <p id="email-error" role="alert" className="mt-3 text-xs text-red-400 font-mono">
              {error}
            </p>
          )}
        </div>
      )}
    </section>
  );
}
