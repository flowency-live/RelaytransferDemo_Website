import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, MapPin, Calendar, Users, Car } from 'lucide-react';
import { tenantConfig } from '@/lib/config/tenant';
import { Button, Card, CardContent, CardHeader, CardTitle } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Get a Quote',
  description: `Get an instant quote for healthcare transport across ${tenantConfig.serviceArea}.`,
};

export default function QuotePage() {
  return (
    <div className="section-padding bg-muted">
      <div className="container-narrow">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Get an Instant Quote
          </h1>
          <p className="mt-4 text-muted-foreground">
            Plan your healthcare transfer with {tenantConfig.name}.
          </p>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quote Wizard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* Journey Type Selection */}
              <div>
                <label className="text-sm font-medium">Journey Type</label>
                <div className="mt-2 grid gap-3 sm:grid-cols-3">
                  {['One Way', 'Round Trip', 'Hourly Hire'].map((type) => (
                    <button
                      key={type}
                      className="rounded-lg border-2 border-border p-4 text-center transition-default hover:border-primary focus:border-primary focus:outline-none"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pickup Location */}
              <div>
                <label className="text-sm font-medium flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Pickup Location
                </label>
                <input
                  type="text"
                  placeholder="Enter pickup address or airport"
                  className="mt-2 flex h-11 w-full rounded border border-border bg-card px-4 py-2 text-base placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {/* Drop-off Location */}
              <div>
                <label className="text-sm font-medium flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Drop-off Location
                </label>
                <input
                  type="text"
                  placeholder="Enter destination address or clinic"
                  className="mt-2 flex h-11 w-full rounded border border-border bg-card px-4 py-2 text-base placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {/* Date & Time */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Date
                  </label>
                  <input
                    type="date"
                    className="mt-2 flex h-11 w-full rounded border border-border bg-card px-4 py-2 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Time</label>
                  <input
                    type="time"
                    className="mt-2 flex h-11 w-full rounded border border-border bg-card px-4 py-2 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              {/* Passengers */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Passengers
                  </label>
                  <select className="mt-2 flex h-11 w-full rounded border border-border bg-card px-4 py-2 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'passenger' : 'passengers'}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Car className="h-4 w-4" />
                    Luggage
                  </label>
                  <select className="mt-2 flex h-11 w-full rounded border border-border bg-card px-4 py-2 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                    {[0, 1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'bag' : 'bags'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit */}
              <Button size="lg" className="w-full">
                Get Quote
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Full quote wizard with vehicle comparison coming soon.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Info Cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="card p-4 text-center">
            <p className="font-medium">Instant Pricing</p>
            <p className="text-sm text-muted-foreground">No waiting, no callbacks</p>
          </div>
          <div className="card p-4 text-center">
            <p className="font-medium">All Vehicles</p>
            <p className="text-sm text-muted-foreground">Compare options side-by-side</p>
          </div>
          <div className="card p-4 text-center">
            <p className="font-medium">No Obligation</p>
            <p className="text-sm text-muted-foreground">Quote and decide later</p>
          </div>
        </div>
      </div>
    </div>
  );
}
