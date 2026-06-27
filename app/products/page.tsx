import type { Metadata } from "next";
import { Suspense } from "react";
import ProductsPage from "@/components/ProductsPage";

export const metadata: Metadata = {
  title: "Products — Brass Decor, Religious & Gift Collections | ARS Exports",
  description:
    "Explore 500+ exclusive brass designs across Home Decor, Religious Items, and Premium Gift categories. Handcrafted in Moradabad for global export.",
};

export default function Products() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-dark-800 pt-32 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gold-500 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ProductsPage />
    </Suspense>
  );
}
