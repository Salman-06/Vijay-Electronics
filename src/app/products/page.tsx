import ProductCatalog from '@/components/ProductCatalog';
import { products } from '@/lib/products';

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6">
      <section className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight font-headline md:text-5xl">
          Our Products
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
          Explore our wide range of major brand name appliances at unbeatable
          prices. Quality and trust, guaranteed.
        </p>
      </section>
      <ProductCatalog allProducts={products} />
    </div>
  );
}
