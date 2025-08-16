import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  const mapSrc = "https://maps.google.com/maps?q=Kavundampalayam,Coimbatore&t=&z=13&ie=UTF8&iwloc=&output=embed";

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight font-headline md:text-5xl">
          Get In Touch
        </h1>
        <p className="text-lg text-muted-foreground">
          Have questions or need assistance? We're here to help. Fill out the
          form below, or visit us at our store.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="flex flex-col gap-8">
            <ContactForm />
        </div>
        <div className="relative h-96 overflow-hidden rounded-lg shadow-lg md:h-full">
            <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
      </div>
    </div>
  );
}
