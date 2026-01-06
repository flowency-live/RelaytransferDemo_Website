import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, Calendar, Users, Briefcase, Clock, Shield, Zap, Plane, ArrowRight, RotateCcw, Timer } from 'lucide-react';
import { tenantConfig } from '@/lib/config/tenant';
import { Button, Card, CardContent } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Get a Quote',
  description: `Get an instant quote for healthcare transport across ${tenantConfig.serviceArea}.`,
};

const journeyTypes = [
  { id: 'one-way', label: 'One Way', icon: ArrowRight, description: 'Single journey' },
  { id: 'round-trip', label: 'Round Trip', icon: RotateCcw, description: 'Return included' },
  { id: 'hourly', label: 'Hourly Hire', icon: Timer, description: 'By the hour' },
];

const features = [
  { icon: Zap, title: 'Instant Pricing', description: 'Get your quote in seconds, no waiting' },
  { icon: Shield, title: 'No Obligation', description: 'Free to quote, book when ready' },
  { icon: Clock, title: '24/7 Availability', description: 'Book any time, day or night' },
];

const popularRoutes = [
  { from: 'Manchester Airport', to: 'Cheshire Clinics', price: 'From 65' },
  { from: 'Liverpool Airport', to: 'Chester Medical', price: 'From 55' },
  { from: 'Birmingham Airport', to: 'North West Centres', price: 'From 120' },
];

export default function QuotePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-12 lg:py-16">
        <div className="absolute inset-0 opacity-10">
          <div style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} className="absolute inset-0" />
        </div>
        <div className="relative container-wide">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <div className="max-w-2xl">
            <h1 className="text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
              Get an Instant Quote
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Professional healthcare transport across {tenantConfig.serviceArea}. Fixed prices, no surge charges.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative -mt-8 pb-16">
        <div className="container-wide">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Quote Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-elevated">
                <CardContent className="p-6 lg:p-8">
                  <div className="space-y-8">
                    {/* Journey Type Selection */}
                    <div>
                      <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        Journey Type
                      </label>
                      <div className="mt-3 grid gap-3 sm:grid-cols-3">
                        {journeyTypes.map((type, index) => (
                          <button
                            key={type.id}
                            className={`group relative rounded-xl border-2 p-4 text-left transition-all hover:border-primary hover:shadow-soft focus:border-primary focus:outline-none ${
                              index === 0 ? 'border-primary bg-primary/5' : 'border-border'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                                index === 0 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground'
                              } transition-colors`}>
                                <type.icon className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="font-medium">{type.label}</p>
                                <p className="text-xs text-muted-foreground">{type.description}</p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Locations */}
                    <div className="space-y-4">
                      <div className="relative">
                        <label className="text-sm font-medium flex items-center gap-2 mb-2">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-success text-white text-xs font-bold">A</div>
                          Pickup Location
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <input
                            type="text"
                            placeholder="Enter pickup address, airport, or clinic"
                            className="flex h-12 w-full rounded-lg border border-border bg-background pl-12 pr-4 text-base placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          />
                        </div>
                      </div>

                      <div className="relative">
                        <label className="text-sm font-medium flex items-center gap-2 mb-2">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">B</div>
                          Drop-off Location
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <input
                            type="text"
                            placeholder="Enter destination address or clinic"
                            className="flex h-12 w-full rounded-lg border border-border bg-background pl-12 pr-4 text-base placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Date & Time */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-sm font-medium flex items-center gap-2 mb-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          Date
                        </label>
                        <input
                          type="date"
                          className="flex h-12 w-full rounded-lg border border-border bg-background px-4 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          Time
                        </label>
                        <input
                          type="time"
                          className="flex h-12 w-full rounded-lg border border-border bg-background px-4 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Passengers & Luggage */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-sm font-medium flex items-center gap-2 mb-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          Passengers
                        </label>
                        <select className="flex h-12 w-full rounded-lg border border-border bg-background px-4 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer">
                          {[1, 2, 3, 4, 5, 6].map((n) => (
                            <option key={n} value={n}>
                              {n} {n === 1 ? 'passenger' : 'passengers'}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium flex items-center gap-2 mb-2">
                          <Briefcase className="h-4 w-4 text-muted-foreground" />
                          Luggage
                        </label>
                        <select className="flex h-12 w-full rounded-lg border border-border bg-background px-4 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer">
                          {[0, 1, 2, 3, 4, 5].map((n) => (
                            <option key={n} value={n}>
                              {n} {n === 1 ? 'bag' : 'bags'}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Submit */}
                    <Button size="lg" className="w-full h-14 text-base">
                      Get Instant Quote
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Features */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Why book with us?</h3>
                  <div className="space-y-4">
                    {features.map((feature) => (
                      <div key={feature.title} className="flex items-start gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10 flex-shrink-0">
                          <feature.icon className="h-5 w-5 text-success" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{feature.title}</p>
                          <p className="text-xs text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Popular Routes */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Popular Routes</h3>
                  <div className="space-y-3">
                    {popularRoutes.map((route) => (
                      <div key={route.from} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Plane className="h-4 w-4 text-muted-foreground" />
                          <div className="text-sm">
                            <p className="font-medium">{route.from}</p>
                            <p className="text-xs text-muted-foreground">to {route.to}</p>
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-primary">{route.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Need help?</h3>
                  <p className="text-sm text-primary-foreground/80 mb-4">
                    Our team is available 24/7 to assist with your booking.
                  </p>
                  <Button variant="accent" size="sm" className="w-full" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-t border-border py-12">
        <div className="container-wide">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center">
            <div>
              <p className="text-3xl font-semibold text-primary">5,000+</p>
              <p className="text-sm text-muted-foreground">Journeys completed</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-primary">100%</p>
              <p className="text-sm text-muted-foreground">On-time arrivals</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-primary">4.9/5</p>
              <p className="text-sm text-muted-foreground">Customer rating</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-primary">24/7</p>
              <p className="text-sm text-muted-foreground">Support available</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
