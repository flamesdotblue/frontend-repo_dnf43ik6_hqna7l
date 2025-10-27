import { Star, ShoppingCart } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    name: "Rex Luxe Tee",
    price: 48,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1548883354-7622d3df7b86?q=80&w=1200&auto=format&fit=crop",
    tag: "New",
  },
  {
    id: 2,
    name: "Triceratop Runner",
    price: 129,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1601121141946-30c38f0b34fb?q=80&w=1200&auto=format&fit=crop",
    tag: "Limited",
  },
  {
    id: 3,
    name: "Veloci Windbreaker",
    price: 158,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1528701800489-20be3c2ea2aa?q=80&w=1200&auto=format&fit=crop",
    tag: "Bestseller",
  },
  {
    id: 4,
    name: "Fossil Canvas Cap",
    price: 36,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1582582621958-cdb0e08731de?q=80&w=1200&auto=format&fit=crop",
    tag: "Drop",
  },
];

function ProductCard({ product }) {
  return (
    <div className="group rounded-2xl border border-neutral-200 overflow-hidden bg-white hover:shadow-lg transition-shadow">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-neutral-900 shadow">
          {product.tag}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-neutral-900">{product.name}</h3>
            <div className="mt-1 flex items-center gap-1 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? "fill-amber-500" : ""}`} />
              ))}
              <span className="ml-1 text-xs text-neutral-500">{product.rating.toFixed(1)}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold">${product.price}</div>
            <div className="text-xs text-neutral-500">Tax included</div>
          </div>
        </div>
        <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 px-4 py-2.5 text-white text-sm font-semibold hover:bg-neutral-800">
          <ShoppingCart className="h-4 w-4" /> Add to cart
        </button>
      </div>
    </div>
  );
}

export default function FeaturedProducts() {
  return (
    <section id="shop" className="py-12 sm:py-16 bg-gradient-to-b from-white to-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900">Featured Drops</h2>
            <p className="mt-1 text-neutral-600">Handpicked essentials from the DINOOZ vault.</p>
          </div>
          <a href="#collections" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">View all</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
