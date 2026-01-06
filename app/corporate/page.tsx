import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, Users, CreditCard, Clock, ArrowRight } from 'lucide-react';
import { tenantConfig } from '@/lib/config/tenant';
import { Button, Card, CardContent, CardHeader, CardTitle } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Corporate Portal',
  description: `Corporate account management for ${tenantConfig.name} healthcare transport services.`,
};

const benefits = [
  {
    icon: CreditCard,
    title: 'Consolidated Billing',
    description: 'Monthly invoices with detailed journey breakdowns for easy expense management.',
  },
  {
    icon: Users,
    title: 'Team Access',
    description: 'Multiple team members can book under one corporate account with individual logins.',
  },
  {
    icon: Clock,
    title: 'Priority Service',
    description: 'Dedicated account management and priority booking for urgent transfers.',
  },
];

export default function CorporatePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <Building2 className="mx-auto h-12 w-12" />
            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              Corporate Accounts
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80">
              Streamlined healthcare transport for clinics, hospitals, and medical tourism operators.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
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
            {/* Existing Account */}
            <Card>
              <CardHeader>
                <CardTitle>Existing Account</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Access your corporate dashboard to manage bookings, view invoices, and update team members.
                </p>
                <Button className="w-full" asChild>
                  <Link href="/corporate/login">
                    Sign In
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* New Account */}
            <Card>
              <CardHeader>
                <CardTitle>Open an Account</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Contact us to discuss corporate account options tailored to your organisation&apos;s needs.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-semibold text-center">Account Features</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              'Online booking portal',
              'Real-time journey tracking',
              'Favourite journeys saved',
              'Multiple authorised bookers',
              'Monthly detailed invoices',
              'Journey reports for compliance',
              'Named chauffeur requests',
              'Priority support line',
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                <span className="h-2 w-2 rounded-full bg-success" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
