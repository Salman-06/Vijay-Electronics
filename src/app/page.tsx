'use client';

import { Button } from '@/components/ui/button';
import { products } from '@/lib/products';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Zap } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';

const featuredCategories = [
  { name: 'Fans', image: 'https://placehold.co/400x300.png', hint: 'fan' },
  {
    name: 'Kitchen Appliances',
    image: 'https://placehold.co/400x300.png',
    hint: 'kitchen appliance',
  },
  {
    name: 'Grinders',
    image: 'https://placehold.co/400x300.png',
    hint: 'grinder',
  },
];

const testimonials = [
  {
    quote:
      'Vijay Electronics has been my go-to for appliances for over a decade. Their quality and service are unmatched. I highly recommend them to everyone!',
    name: 'Suresh Kumar',
    location: 'Coimbatore',
  },
  {
    quote:
      "The staff was incredibly helpful in choosing the right wet grinder for my family. The entire process was seamless, and I'm very happy with my purchase!",
    name: 'Priya Menon',
    location: 'Saibaba Colony',
  },
  {
    quote:
      'I always recommend this store to my friends and family. They have the best prices in town and a fantastic selection of top-quality brands.',
    name: 'Rajesh Singh',
    location: 'R.S. Puram',
  },
  {
    quote:
      'Their new website is so easy to use! The product recommendations helped me find the perfect mixer grinder in no time. Great experience online and in-store.',
    name: 'Anjali Desai',
    location: 'Gandhipuram',
  },
  {
    quote:
      'From the moment I walked in, I was impressed by the professionalism and friendly service. They helped me find a durable and efficient ceiling fan for my new home.',
    name: 'Karthik Raja',
    location: 'Peelamedu',
  },
];

export default function Home() {
  const featuredProducts = products.slice(0, 3);
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-primary/10">
        <div className="container mx-auto flex h-full flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tight font-headline md:text-6xl">
            Quality Appliances for Every Home
          </h1>
          <p className="max-w-3xl mb-8 text-lg text-muted-foreground">
            Since 1978, we've provided trusted brands and unbeatable prices.
            Find the perfect appliance to build a better home.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <Link href="/products">
              Explore All Products <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center text-4xl font-bold font-headline">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden transition-shadow duration-300 hover:shadow-lg"
              >
                <CardHeader className="p-0">
                  <div className="relative h-64 w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      data-ai-hint={`${product.category
                        .toLowerCase()
                        .replace(' ', '')}`}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-bold font-headline">
                    {product.name}
                  </h3>
                  <p className="mb-4 text-muted-foreground">{product.brand}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-primary">
                      ₹{product.price.toLocaleString('en-IN')}
                    </p>
                    <Button asChild variant="outline">
                      <Link href="/products">View</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center text-4xl font-bold font-headline">
            Why Choose Vijay Electronics?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <CheckCircle className="mx-auto mb-4 h-12 w-12 text-accent" />
              <h3 className="mb-2 text-xl font-semibold font-headline">
                Legacy of Trust
              </h3>
              <p className="text-muted-foreground">
                Serving our community with integrity and dedication since 1978.
              </p>
            </div>
            <div className="text-center">
              <Zap className="mx-auto mb-4 h-12 w-12 text-accent" />
              <h3 className="mb-2 text-xl font-semibold font-headline">
                Quality Guaranteed
              </h3>
              <p className="text-muted-foreground">
                We offer a curated selection of major brand name home
                appliances.
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="mx-auto mb-4 h-12 w-12 text-accent" />
              <h3 className="mb-2 text-xl font-semibold font-headline">
                Unbeatable Prices
              </h3>
              <p className="text-muted-foreground">
                Get the best value for your money with our competitive pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center text-4xl font-bold font-headline">
            What Our Customers Say
          </h2>
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: 'start',
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1 h-full">
                    <Card className="flex h-full flex-col justify-between">
                      <CardContent className="p-6">
                        <div className="mb-4 flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-5 w-5 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        <p className="mb-4 text-muted-foreground">
                          "{testimonial.quote}"
                        </p>
                      </CardContent>
                      <CardHeader className="p-6 pt-0">
                        <div className="font-semibold font-headline">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.location}
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center bg-primary/10">
        <div className="container mx-auto">
          <h2 className="mb-4 text-4xl font-bold tracking-tight font-headline">
            Ready to Upgrade Your Home?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Browse our complete collection of home appliances and find exactly
            what you need.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <Link href="/products">Shop Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
