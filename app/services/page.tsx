import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Plane, Building2, Car, Clock, Shield, Heart, Thermometer, Music, Route } from 'lucide-react';
import { tenantConfig } from '@/lib/config/tenant';
import { Button } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Services',
  description: `Professional healthcare transport services across ${tenantConfig.serviceArea}. Airport transfers, clinical journeys, and executive service.`,
};

const mainServices = [
  {
    icon: Plane,
    title: 'Airport Transfers',
    description: 'Seamless connections between major airports and private healthcare facilities.',
    details: [
      'Manchester Airport pickups and drop-offs',
      'Liverpool John Lennon Airport service',
      'Birmingham International connections',
      'Flight tracking and delay accommodation',
      'Meet and greet service available',
    ],
  },
  {
    icon: Building2,
    title: 'Clinical Journeys',
    description: 'Scheduled transfers for appointments, treatments, and ongoing care.',
    details: [
      'Home to private clinic transfers',
      'Hotel to treatment centre journeys',
      'Post-procedure recovery transport',
      'Regular appointment scheduling',
      'Multi-stop medical journeys',
    ],
  },
  {
    icon: Car,
    title: 'Executive Service',
    description: 'Premium transport with VIP preferences and dedicated chauffeurs.',
    details: [
      'Named chauffeur continuity',
      'Vehicle and route preferences saved',
      'Corporate account management',
      'Priority booking and scheduling',
      'Bespoke service arrangements',
    ],
  },
];

const vipFeatures = [
  {
    icon: Thermometer,
    title: 'Climate Control',
    description: 'Temperature set to your preference before pickup.',
  },
  {
    icon: Music,
    title: 'Quiet Journeys',
    description: 'No music, no conversation - just peaceful travel.',
  },
  {
    icon: Route,
    title: 'Route Preferences',
    description: 'Scenic or direct - your choice, every time.',
  },
  {
    icon: Heart,
    title: 'Care Requirements',
    description: 'Special assistance and accessibility accommodated.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80">
              Discreet, professional healthcare transport for private patients, clinicians, and international medical visitors across {tenantConfig.serviceArea}.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div
                key={service.title}
                className={`grid items-center gap-12 lg:grid-cols-2 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
                    <service.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h2 className="mt-6 text-3xl font-semibold">{service.title}</h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-8 space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-success" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`card-elevated aspect-video ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex h-full items-center justify-center bg-muted rounded-lg">
                    <service.icon className="h-24 w-24 text-muted-foreground/30" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Features */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              VIP Preferences
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Every detail considered. Your preferences remembered and respected on every journey.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {vipFeatures.map((feature) => (
              <div key={feature.title} className="card p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <div className="flex justify-center">
            <Shield className="h-12 w-12 text-primary" />
          </div>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
            Compliance & Standards
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            All drivers DBS checked. Vehicles regularly inspected. Full audit trail maintained for every journey. GDPR compliant data handling.
          </p>
          <div className="mt-8 flex justify-center gap-8">
            <div className="text-center">
              <Clock className="mx-auto h-8 w-8 text-success" />
              <p className="mt-2 text-sm font-medium">24/7 Operations</p>
            </div>
            <div className="text-center">
              <Shield className="mx-auto h-8 w-8 text-success" />
              <p className="mt-2 text-sm font-medium">Fully Insured</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-semibold">Ready to experience the difference?</h2>
          <p className="mt-4 text-primary-foreground/80">
            Get an instant quote for your journey. No obligation.
          </p>
          <div className="mt-8">
            <Button size="lg" variant="accent" asChild>
              <Link href="/quote">
                Get a Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
