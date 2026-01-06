import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Shield,
  Clock,
  Users,
  Car,
  Plane,
  Building2,
  CheckCircle,
  Star,
  MapPin,
  Thermometer,
  Volume2,
  Heart
} from 'lucide-react';
import { tenantConfig } from '@/lib/config/tenant';
import { Button } from '@/components/ui';

const stats = [
  { value: '100%', label: 'On-time arrivals' },
  { value: '24/7', label: 'Availability' },
  { value: '5,000+', label: 'Journeys completed' },
  { value: '4.9', label: 'Average rating', icon: Star },
];

const features = [
  {
    icon: Shield,
    title: 'Absolute Discretion',
    description: 'Quiet arrivals, predictable journeys. No attention drawn. Your privacy is our priority.',
  },
  {
    icon: Clock,
    title: 'Scheduled Precision',
    description: 'Reliable, on-time transfers for critical appointments. Flight tracking included.',
  },
  {
    icon: Users,
    title: 'Named Chauffeurs',
    description: 'Request the same driver for every journey. Familiarity breeds comfort.',
  },
];

const services = [
  {
    icon: Plane,
    title: 'Airport Transfers',
    description: 'Seamless connections to Manchester, Liverpool, and Birmingham airports.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
  },
  {
    icon: Building2,
    title: 'Clinical Journeys',
    description: 'Home to clinic, hotel to treatment, airport to recovery accommodation.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
  },
  {
    icon: Car,
    title: 'Executive Service',
    description: 'Premium transport with VIP preferences and dedicated chauffeurs.',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
  },
];

const vipFeatures = [
  { icon: Thermometer, label: 'Climate controlled' },
  { icon: Volume2, label: 'Quiet journeys' },
  { icon: Heart, label: 'Care accommodated' },
  { icon: MapPin, label: 'Route preferences' },
];

const routes = [
  { from: 'Manchester Airport', to: 'Cheshire Private Clinics', time: '45 mins' },
  { from: 'Liverpool Airport', to: 'Cheshire Medical Estates', time: '40 mins' },
  { from: 'Birmingham Airport', to: 'North West Specialist Centres', time: '90 mins' },
];

const testimonials = [
  {
    quote: "Exceptional service. The discretion and professionalism made a difficult time much easier for our patients.",
    author: "Dr. Sarah Mitchell",
    role: "Medical Director, Private Clinic",
  },
  {
    quote: "We use RHT for all our international patients. Reliable, punctual, and always respectful of privacy.",
    author: "James Chen",
    role: "Patient Services Manager",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary">
        {/* Background - Solid brand color with subtle texture */}
        <div className="absolute inset-0">
          {/* Subtle gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#0a2020]" />
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          {/* Accent glow */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative container-wide py-24 text-center text-primary-foreground">
          <div className="mx-auto max-w-4xl">
            <p className="mb-6 text-sm font-medium uppercase tracking-widest text-accent">
              Private Healthcare Transport
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              {tenantConfig.tagline}
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-primary-foreground/80 lg:text-xl">
              {tenantConfig.description}
            </p>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="accent" className="min-w-[200px] text-base" asChild>
                <Link href="/quote">
                  Book a Transfer
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="min-w-[200px] border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base"
                asChild
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-primary-foreground/60">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span>DBS Checked Drivers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>24/7 Operations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-14 w-8 rounded-full border-2 border-primary-foreground/30 p-2">
            <div className="h-3 w-1 mx-auto rounded-full bg-primary-foreground/50 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-10">
        <div className="container-wide">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="card-elevated p-6 text-center lg:p-8"
              >
                <p className="text-3xl font-semibold text-primary lg:text-4xl flex items-center justify-center gap-2">
                  {stat.value}
                  {stat.icon && <stat.icon className="h-6 w-6 fill-accent text-accent" />}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Why Choose Us
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Healthcare transport, elevated
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Executive precision meets clinical care. This is hospitality-grade transport.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative card p-8 text-center transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 transition-all group-hover:scale-110">
                  <feature.icon className="h-8 w-8 text-primary" />
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
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Our Services
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Tailored to healthcare needs
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From airport arrivals to ongoing treatment schedules, we cover every journey.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group card-elevated overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                    <service.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-muted-foreground">{service.description}</p>
                  <Link
                    href="/services"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Preferences Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                VIP Experience
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Your preferences, remembered
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Every detail considered. Temperature, music, route preferences - all saved to your profile and respected on every journey.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {vipFeatures.map((feature) => (
                  <div key={feature.label} className="flex items-center gap-3 rounded-lg bg-muted p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium">{feature.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button variant="primary" asChild>
                  <Link href="/corporate">
                    Open Corporate Account
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80"
                  alt="Executive Mercedes interior"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 card-elevated p-6 max-w-[280px]">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success/20">
                    <CheckCircle className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <p className="font-semibold">Named Driver</p>
                    <p className="text-sm text-muted-foreground">Same chauffeur, every time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Popular Routes
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Fixed-price airport transfers
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/70">
              No surprises. No surge pricing. Just reliable, predictable pricing.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {routes.map((route) => (
              <div
                key={route.from}
                className="group rounded-xl border border-primary-foreground/20 p-6 transition-all hover:bg-primary-foreground/5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
                    <Plane className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{route.from}</p>
                    <div className="my-2 flex items-center gap-2 text-sm text-primary-foreground/60">
                      <div className="h-px flex-1 bg-primary-foreground/20" />
                      <span>{route.time}</span>
                      <div className="h-px flex-1 bg-primary-foreground/20" />
                    </div>
                    <p className="font-medium">{route.to}</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link href="/quote">Get Price</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Testimonials
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Trusted by healthcare professionals
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="card p-8"
              >
                <div className="flex gap-1 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-6 text-lg">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-lg font-semibold text-muted-foreground">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80"
            alt="Cheshire countryside"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
        </div>

        <div className="relative container-narrow py-24 text-center text-primary-foreground">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to experience the difference?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/80">
            Get an instant quote for your journey. No obligation, complete privacy.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="accent" className="min-w-[200px]" asChild>
              <Link href="/quote">
                Get Instant Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="min-w-[200px] border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
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
