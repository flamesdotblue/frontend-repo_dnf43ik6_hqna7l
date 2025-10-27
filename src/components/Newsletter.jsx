import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-br from-emerald-50 to-white p-8 sm:p-12">
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-emerald-200/40 blur-2xl" aria-hidden="true" />
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs font-semibold text-emerald-700">
              <Mail className="h-3.5 w-3.5" />
              DINOOZ Dispatch
            </div>
            <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900">
              Join the herd — get exclusive drops and fossil-grade deals.
            </h3>
            <p className="mt-2 text-neutral-600 text-sm">
              Subscribe to our newsletter for early access, limited releases, and AI-personalized picks.
            </p>

            <form className="mt-6 flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="you@jurassicmail.com"
                className="flex-1 rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="rounded-xl bg-emerald-600 px-6 py-3 text-white text-sm font-semibold hover:bg-emerald-700"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-xs text-neutral-500">We respect your privacy. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
