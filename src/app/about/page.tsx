import { history } from '@/lib/history';
import Timeline from '@/components/Timeline';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <section className="mb-16 grid items-center gap-12 md:grid-cols-2">
        <div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight font-headline md:text-5xl">
            Our Journey Since 1978
          </h1>
          <p className="mb-6 text-lg text-muted-foreground">
            For over four decades, Vijay Electronics has been a cornerstone of
            the community, providing reliable home appliances and exceptional
            service. Our story is one of commitment, growth, and a deep-rooted
            passion for helping our customers build better homes.
          </p>
        </div>
        <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
          <Image
            src="https://placehold.co/600x400.png"
            alt="Vintage electronics storefront"
            data-ai-hint="vintage electronics store"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </section>

      <section>
        <h2 className="mb-12 text-center text-3xl font-bold font-headline">
          Key Milestones
        </h2>
        <Timeline events={history} />
      </section>
    </div>
  );
}
