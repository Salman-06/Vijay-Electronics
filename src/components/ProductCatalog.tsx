'use client';

import { useState, useMemo } from 'react';
import type { Product } from '@/lib/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Image from 'next/image';
import RecommendedProducts from './RecommendedProducts';
import { Button } from './ui/button';

interface ProductCatalogProps {
  allProducts: Product[];
}

const categories = [
  'All', 'Ceiling Fan', 'Electric Fan', 'Pressure Cooker', 'Voltage Stabilizer', 'Mixer Grinder', 'Air Cooler', 'Induction Cooktop', 'Tawa', 'Gas Stove', 'Wet Grinder'
];

export default function ProductCatalog({ allProducts }: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('price-asc');
  const [viewedProducts, setViewedProducts] = useState<string[]>([]);

  const handleProductView = (productName: string) => {
    setViewedProducts((prev) => {
      if (prev.includes(productName)) return prev;
      const newViewed = [...prev, productName];
      // Limit to last 5 viewed products for relevance
      return newViewed.length > 5 ? newViewed.slice(-5) : newViewed;
    });
  };

  const filteredAndSortedProducts = useMemo(() => {
    let products = [...allProducts];

    if (selectedCategory !== 'All') {
      products = products.filter((p) => p.category === selectedCategory);
    }

    products.sort((a, b) => {
      if (sortOrder === 'price-asc') {
        return a.price - b.price;
      } else if (sortOrder === 'price-desc') {
        return b.price - a.price;
      }
      return 0;
    });

    return products;
  }, [allProducts, selectedCategory, sortOrder]);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
      <aside className="lg:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Filters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label className="mb-2 block text-base font-medium">Category</Label>
              <RadioGroup
                value={selectedCategory}
                onValueChange={setSelectedCategory}
                className="space-y-2"
              >
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <RadioGroupItem value={category} id={category} />
                    <Label htmlFor={category}>{category}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <div>
              <Label htmlFor="sort-order" className="text-base font-medium">Sort by</Label>
               <Select value={sortOrder} onValueChange={setSortOrder}>
                <SelectTrigger id="sort-order" className="mt-2 w-full">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <RecommendedProducts
          viewedProductNames={viewedProducts}
          allProductNames={allProducts.map(p => p.name)}
          products={allProducts}
        />
      </aside>

      <main className="lg:col-span-3">
        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredAndSortedProducts.map((product) => (
              <Card
                key={product.id}
                className="flex transform flex-col overflow-hidden shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      data-ai-hint={`${product.category.toLowerCase().replace(' ', '')}`}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className="p-4">
                    <CardTitle className="font-headline text-lg">{product.name}</CardTitle>
                    <CardDescription>{product.brand}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between p-4 pt-0">
                  <p className="mb-4 text-sm text-muted-foreground">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-bold text-primary">
                      ₹{product.price.toLocaleString('en-IN')}
                    </p>
                    <Button variant="outline" size="sm" onClick={() => handleProductView(product.name)}>
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex h-64 items-center justify-center rounded-lg border-2 border-dashed">
            <p className="text-muted-foreground">No products match your filters.</p>
          </div>
        )}
      </main>
    </div>
  );
}
