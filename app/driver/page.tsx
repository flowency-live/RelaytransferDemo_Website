import type { Metadata } from 'next';
import Link from 'next/link';
import { Car, Shield, Calendar, FileCheck, ArrowRight } from 'lucide-react';
import { tenantConfig } from '@/lib/config/tenant';
import { Button, Card, CardContent, CardHeader, CardTitle } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Driver Portal',
  description: `Join ${tenantConfig.name} as a professional healthcare transport driver.`,
};

const requirements = [
  {
    icon: Shield,
    title: 'Enhanced DBS Check',
    description: 'Clean criminal record check required for all healthcare transport drivers.',
  },
  {
    icon: FileCheck,
    title: 'Valid PHV License',
    description: 'Current private hire vehicle license from your local authority.',
  },
  {
    icon: Car,
    title: 'Suitable Vehicle',
    description: 'Clean, well-maintained executive vehicle meeting our standards.',
  },
  {
    icon: Calendar,
    title: 'Flexible Availability',
    description: 'Set your own schedule with our availability management system.',
  },
];

export default function DriverPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <Car className="mx-auto h-12 w-12" />
            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              Drive with {tenantConfig.shortName}
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80">
              Join our network of professional healthcare transport drivers serving private clinics and medical facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="text-2xl font-semibold text-center">Requirements</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {requirements.map((req) => (
              <Card key={req.title}>
                <CardHeader>
                  <req.icon className="h-8 w-8 text-primary" />
                  <CardTitle className="mt-4 text-lg">{req.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{req.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Login / Register */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Existing Driver */}
            <Card>
              <CardHeader>
                <CardTitle>Existing Driver</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Access your driver dashboard to manage availability, view assignments, and update documents.
                </p>
                <Button className="w-full" asChild>
                  <Link href="/driver/login">
                    Driver Login
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* New Driver */}
            <Card>
              <CardHeader>
                <CardTitle>Join Our Team</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Apply to become a {tenantConfig.shortName} driver. Complete our online registration and onboarding process.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/driver/register">
                    Apply Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-semibold text-center">Driver Benefits</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              'Competitive journey rates',
              'Flexible schedule control',
              'Professional clientele',
              'Weekly payments',
              'No surge or peak pricing games',
              'Named driver opportunities',
              'Modern driver app',
              'Dedicated driver support',
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                <span className="h-2 w-2 rounded-full bg-success" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
