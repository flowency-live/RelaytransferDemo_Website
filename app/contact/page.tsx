import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { tenantConfig } from '@/lib/config/tenant';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact ${tenantConfig.name}. Get in touch for bookings, enquiries, or corporate accounts.`,
};

export default function ContactPage() {
  const { contact, name } = tenantConfig;

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80">
              Get in touch for bookings, enquiries, or to discuss corporate account options.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Cards */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, '')}`}
                    className="text-lg font-medium text-primary hover:underline"
                  >
                    {contact.phone}
                  </a>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Available 24/7 for bookings and enquiries
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-lg font-medium text-primary hover:underline"
                  >
                    {contact.email}
                  </a>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We aim to respond within 2 hours during business hours
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <address className="not-italic">
                    <p className="font-medium">{name}</p>
                    <p className="mt-1 text-muted-foreground">
                      {contact.address.line1}
                      {contact.address.line2 && <><br />{contact.address.line2}</>}
                      <br />
                      {contact.address.city}
                      <br />
                      {contact.address.postcode}
                      <br />
                      {contact.address.country}
                    </p>
                  </address>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    Operating Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">24 hours a day, 7 days a week</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Our operations team is always available to assist with your transport needs.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Map Placeholder / Info */}
            <div className="card-elevated flex flex-col justify-center p-8 lg:p-12">
              <h2 className="text-2xl font-semibold">Service Area</h2>
              <p className="mt-4 text-muted-foreground">
                We provide healthcare transport services across {tenantConfig.serviceArea}, connecting major airports with private healthcare facilities.
              </p>
              <div className="mt-8 space-y-4">
                <div>
                  <h3 className="font-medium">Airport Coverage</h3>
                  <p className="text-sm text-muted-foreground">
                    Manchester, Liverpool, Birmingham
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Healthcare Facilities</h3>
                  <p className="text-sm text-muted-foreground">
                    Private clinics, treatment centres, recovery accommodation
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Corporate Accounts</h3>
                  <p className="text-sm text-muted-foreground">
                    Contact us to discuss ongoing service agreements for healthcare providers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
