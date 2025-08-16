import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-12 md:px-6">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight font-headline md:text-5xl">
          Get In Touch
        </h1>
        <p className="text-lg text-muted-foreground">
          Have questions or need assistance? We're here to help. Fill out the
          form below and we'll get back to you as soon as possible.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
