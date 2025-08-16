'use client'

export default function Footer() {
  return (
    <footer className="mt-auto border-t bg-card">
      <div className="container mx-auto px-4 py-6 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vijay Electronics. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Established in 1978
          </p>
        </div>
      </div>
    </footer>
  );
}
