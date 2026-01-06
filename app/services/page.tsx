import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Plane, Building2, Car, Clock, Shield, Heart, Thermometer, Volume2, Route, CheckCircle, Users, FileCheck } from 'lucide-react';
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
    description: 'Seamless connections between major airports and private healthcare facilities. Flight tracking included as standard.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80',
    details: [
      'Manchester Airport pickups and drop-offs',
      'Liverpool John Lennon Airport service',
      'Birmingham International connections',
      'Real-time flight tracking and delay accommodation',
      'Meet and greet service at arrivals',
      'Assistance with luggage and mobility aids',
    ],
  },
  {
    icon: Building2,
    title: 'Clinical Journeys',
    description: 'Scheduled transfers for appointments, treatments, and ongoing care. We understand the importance of punctuality.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80',
    details: [
      'Home to private clinic transfers',
      'Hotel to treatment centre journeys',
      'Post-procedure recovery transport',
      'Regular appointment scheduling',
      'Multi-stop medical journeys',
      'Wheelchair accessible vehicles available',
    ],
  },
  {
    icon: Car,
    title: 'Executive Service',
    description: 'Premium transport with VIP preferences and dedicated chauffeurs. Your comfort is our priority.',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80',
    details: [
      'Named chauffeur continuity',
      'Vehicle and route preferences saved',
      'Corporate account management',
      'Priority booking and scheduling',
      'Bespoke service arrangements',
      'Confidential and discreet service',
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
    icon: Volume2,
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

const complianceFeatures = [
  { icon: Shield, title: 'DBS Checked', description: 'All drivers enhanced DBS checked' },
  { icon: FileCheck, title: 'Licensed', description: 'Fully licensed private hire operator' },
  { icon: CheckCircle, title: 'Insured', description: 'Comprehensive insurance coverage' },
  { icon: Users, title: 'Trained', description: 'Professional conduct training' },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1920&q=80"
            alt="Executive vehicle"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/70" />
        </div>
        <div className="relative container-wide py-24 text-center text-primary-foreground">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
            What We Offer
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Discreet, professional healthcare transport for private patients, clinicians, and international medical visitors across {tenantConfig.serviceArea}.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-24">
            {mainServices.map((service, index) => (
              <div
                key={service.title}
                className="grid items-center gap-12 lg:grid-cols-2"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-lg">
                    <service.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h2 className="mt-6 text-3xl font-semibold lg:text-4xl">{service.title}</h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-success" />
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button variant="primary" asChild>
                      <Link href="/quote">
                        Get a Quote
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-elevated">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-accent/20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Features */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=1920&q=80"
            alt="Executive Mercedes interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/95" />
        </div>
        <div className="relative container-wide text-primary-foreground">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Premium Experience
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              VIP Preferences
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/70">
              Every detail considered. Your preferences remembered and respected on every journey.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {vipFeatures.map((feature) => (
              <div key={feature.title} className="rounded-xl border border-primary-foreground/20 p-6 text-center transition-all hover:bg-primary-foreground/5">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20">
                  <feature.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mt-4 font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80"
                    alt="Executive saloon"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mt-8">
                  <Image
                    src="https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&q=80"
                    alt="Luxury MPV"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Our Fleet
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Executive vehicles for every need
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our fleet consists of premium executive saloons and luxury MPVs, all maintained to the highest standards with privacy glass, climate control, and spacious interiors.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 rounded-lg bg-muted p-4">
                  <Car className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Executive Saloons</p>
                    <p className="text-sm text-muted-foreground">Mercedes E-Class, BMW 5 Series</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg bg-muted p-4">
                  <Users className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Luxury MPVs</p>
                    <p className="text-sm text-muted-foreground">Mercedes V-Class, up to 6 passengers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Trust & Safety
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Compliance & Standards
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Your safety and privacy are paramount. We maintain the highest standards of compliance and professionalism.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {complianceFeatures.map((feature) => (
              <div key={feature.title} className="card p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-success/20">
                  <feature.icon className="h-7 w-7 text-success" />
                </div>
                <h3 className="mt-4 font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 card p-8 text-center">
            <p className="text-muted-foreground">
              All journeys are logged with full audit trails. GDPR compliant data handling. Vehicles regularly inspected and maintained.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=80"
            alt="Road journey"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
        </div>
        <div className="relative container-narrow py-24 text-center text-primary-foreground">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to experience the difference?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
            Get an instant quote for your journey. No obligation, complete privacy.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="accent" asChild>
              <Link href="/quote">
                Get a Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
