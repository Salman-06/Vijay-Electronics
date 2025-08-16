'use client';

import { useEffect, useState, useTransition } from 'react';
import { getRecommendationsAction } from '@/lib/actions';
import type { Product } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Loader2, Sparkles } from 'lucide-react';

interface RecommendedProductsProps {
  viewedProductNames: string[];
  allProductNames: string[];
  products: Product[];
}

export default function RecommendedProducts({
  viewedProductNames,
  allProductNames,
  products
}: RecommendedProductsProps) {
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (viewedProductNames.length > 0) {
      startTransition(async () => {
        const result = await getRecommendationsAction({
          viewedProductNames,
          availableProductNames: allProductNames,
        });
        if (result.success && result.data) {
          setRecommendations(result.data.recommendedProductNames);
        } else {
          setRecommendations([]);
        }
      });
    }
  }, [viewedProductNames, allProductNames]);

  const recommendedProducts = products.filter(p => recommendations.includes(p.name));

  if (viewedProductNames.length === 0) {
    return null;
  }

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <Sparkles className="h-5 w-5 text-accent" />
          <span>Recommended For You</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isPending ? (
          <div className="flex items-center justify-center p-8">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : recommendedProducts.length > 0 ? (
          <div className="space-y-4">
            {recommendedProducts.slice(0, 3).map((product) => (
              <div key={product.id} className="flex items-center gap-4">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                   <Image
                      src={product.image}
                      alt={product.name}
                      data-ai-hint={`${product.category.toLowerCase().replace(' ', '')}`}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                </div>
                <div>
                  <h4 className="font-semibold">{product.name}</h4>
                  <p className="text-sm text-muted-foreground">₹{product.price.toLocaleString('en-IN')}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">No recommendations available right now.</p>
        )}
      </CardContent>
    </Card>
  );
}
