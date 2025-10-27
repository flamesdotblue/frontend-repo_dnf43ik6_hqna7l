import Spline from "@splinetool/react-spline";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative">
      <div className="h-[520px] w-full">
        <Spline scene="https://prod.spline.design/xYq7s7W9kC7xut8J/scene.splinecode" style={{ width: "100%", height: "100%" }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-white/50 to-white"></div>

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl bg-white/70 backdrop-blur rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="flex items-center gap-2 text-emerald-700 font-semibold text-xs tracking-wider uppercase">
              <Star className="h-4 w-4" />
              Premium Dino Fashion
            </div>
            <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900">
              Jurassic Meets Contemporary Style
            </h1>
            <p className="mt-3 text-neutral-700 text-sm sm:text-base">
              Discover statement pieces inspired by the giants of prehistory. Crafted with sustainable materials and future-forward design.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#shop"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-white text-sm font-semibold shadow-sm hover:bg-emerald-700 transition-colors"
              >
                Shop New Arrivals <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#collections"
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-white text-sm font-semibold shadow-sm hover:bg-neutral-800 transition-colors"
              >
                Explore Collections
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
