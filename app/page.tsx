import Link from 'next/link';
import { ArrowRight, Shield, Clock, Users, Car, Plane, Building2 } from 'lucide-react';
import { tenantConfig } from '@/lib/config/tenant';
import { Button } from '@/components/ui';

const features = [
  {
    icon: Shield,
    title: 'Absolute Discretion',
    description: 'Quiet arrivals, predictable journeys. Your privacy is our priority.',
  },
  {
    icon: Clock,
    title: 'Scheduled Precision',
    description: 'Reliable, on-time transfers for critical appointments and treatments.',
  },
  {
    icon: Users,
    title: 'Named Chauffeurs',
    description: 'Consistent service with dedicated drivers who understand your needs.',
  },
];

const services = [
  {
    icon: Plane,
    title: 'Airport Transfers',
    description: 'Manchester, Liverpool, and Birmingham airports to private clinics across Cheshire.',
    routes: ['Manchester Airport', 'Liverpool Airport', 'Birmingham Airport'],
  },
  {
    icon: Building2,
    title: 'Clinical Journeys',
    description: 'Home to clinic, hotel to treatment centre, airport to recovery accommodation.',
    routes: ['Home to Clinic', 'Hotel to Treatment', 'Recovery Transport'],
  },
  {
    icon: Car,
    title: 'Executive Service',
    description: 'VIP preferences respected. Temperature, music, route - all to your specification.',
    routes: ['VIP Transfers', 'Corporate Accounts', 'Ongoing Care'],
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary py-24 text-primary-foreground lg:py-32">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {tenantConfig.tagline}
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 lg:text-xl">
              {tenantConfig.description}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="accent" asChild>
                <Link href="/quote">
                  Book a Transfer
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Healthcare transport, elevated
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Executive precision meets clinical care. This is hospitality-grade transport, not patient transport.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="card p-8 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success/20">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Scheduled, compliant transfers for private healthcare providers and international medical visitors.
            </p>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="card-elevated p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-muted-foreground">{service.description}</p>
                <ul className="mt-6 space-y-2">
                  {service.routes.map((route) => (
                    <li key={route} className="flex items-center gap-2 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-success" />
                      {route}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" variant="primary" asChild>
              <Link href="/quote">
                Get an Instant Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Trusted by leading healthcare providers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Private clinics, international health tourists, and VIP patients across {tenantConfig.serviceArea} choose us for discreet, reliable transport.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="p-6">
              <p className="text-4xl font-semibold text-primary">100%</p>
              <p className="mt-2 text-muted-foreground">On-time arrivals</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-semibold text-primary">24/7</p>
              <p className="mt-2 text-muted-foreground">Availability</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-semibold text-primary">5-star</p>
              <p className="mt-2 text-muted-foreground">Service rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-20">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to book your transfer?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Get an instant quote for your journey. No obligation, complete privacy.
          </p>
          <div className="mt-8">
            <Button size="lg" variant="accent" asChild>
              <Link href="/quote">
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
