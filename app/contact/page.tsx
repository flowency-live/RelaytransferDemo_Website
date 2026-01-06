'use client';

import { Mail, Phone, MapPin, Clock, Download, Car } from 'lucide-react';
import Link from 'next/link';
import { QRCodeSVG } from 'qrcode.react';
import { tenantConfig } from '@/lib/config/tenant';
import { Button, Card, CardContent, CardHeader, CardTitle } from '@/components/ui';

export default function ContactPage() {
  const { contact, name, domain } = tenantConfig;

  const quoteUrl = `https://${domain}/quote`;
  const driversUrl = `https://${domain}/driver/register`;

  const handleDownloadCustomerVCard = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL:${contact.phone}
EMAIL:${contact.email}
ADR:;;${contact.address.line1};${contact.address.city};;${contact.address.postcode};${contact.address.country}
URL:${quoteUrl}
END:VCARD`;

    const blob = new Blob([vCard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${tenantConfig.id}-bookings.vcf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownloadDriverVCard = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${name} - Driver Team
TEL:${contact.phone}
EMAIL:drivers@${domain}
ADR:;;${contact.address.line1};${contact.address.city};;${contact.address.postcode};${contact.address.country}
URL:${driversUrl}
END:VCARD`;

    const blob = new Blob([vCard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${tenantConfig.id}-drivers.vcf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

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

      {/* QR Contact Cards */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Customer Booking Card */}
              <div className="card-elevated rounded-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-center">
                  <h2 className="text-xl font-bold text-primary-foreground">
                    {name}
                  </h2>
                  <p className="text-primary-foreground/70 text-sm mt-1">
                    Book Your Transfer
                  </p>
                </div>

                {/* Contact Info */}
                <div className="p-6 space-y-4">
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-4 p-4 bg-muted rounded-xl hover:bg-muted/80 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">Phone</p>
                      <p className="text-foreground font-semibold">{contact.phone}</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-4 p-4 bg-muted rounded-xl hover:bg-muted/80 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">Email</p>
                      <p className="text-foreground font-semibold break-all">{contact.email}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-muted rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">Location</p>
                      <p className="text-foreground font-semibold">{contact.address.city}, {contact.address.country}</p>
                    </div>
                  </div>
                </div>

                {/* QR Code */}
                <div className="px-6 pb-4">
                  <div className="flex flex-col items-center p-4 bg-white rounded-xl">
                    <p className="text-sm text-muted-foreground font-medium mb-3">
                      Scan for Instant Quote
                    </p>
                    <div className="bg-white p-3 rounded-xl shadow-soft border border-border">
                      <QRCodeSVG
                        value={quoteUrl}
                        size={120}
                        level="H"
                        includeMargin={false}
                        fgColor="#0F2E2E"
                      />
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="px-6 pb-6 space-y-3">
                  <button
                    onClick={handleDownloadCustomerVCard}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-soft active:scale-[0.98]"
                  >
                    <Download className="w-5 h-5" />
                    Save Contact
                  </button>

                  <Button variant="accent" size="lg" className="w-full" asChild>
                    <Link href="/quote">Get a Quote Now</Link>
                  </Button>
                </div>
              </div>

              {/* Driver Onboarding Card */}
              <div className="card-elevated rounded-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-accent to-accent/80 p-6 text-center">
                  <h2 className="text-xl font-bold text-accent-foreground">
                    Join Our Driver Team
                  </h2>
                  <p className="text-accent-foreground/70 text-sm mt-1">
                    Drive with {tenantConfig.shortName}
                  </p>
                </div>

                {/* Contact Info */}
                <div className="p-6 space-y-4">
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-4 p-4 bg-accent/5 rounded-xl hover:bg-accent/10 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">Phone</p>
                      <p className="text-foreground font-semibold">{contact.phone}</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:drivers@${domain}`}
                    className="flex items-center gap-4 p-4 bg-accent/5 rounded-xl hover:bg-accent/10 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">Email</p>
                      <p className="text-foreground font-semibold break-all">drivers@{domain}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-accent/5 rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Car className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">Opportunities</p>
                      <p className="text-foreground font-semibold">Flexible hours, great pay</p>
                    </div>
                  </div>
                </div>

                {/* QR Code */}
                <div className="px-6 pb-4">
                  <div className="flex flex-col items-center p-4 bg-white rounded-xl">
                    <p className="text-sm text-muted-foreground font-medium mb-3">
                      Scan to Apply
                    </p>
                    <div className="bg-white p-3 rounded-xl shadow-soft border border-accent/20">
                      <QRCodeSVG
                        value={driversUrl}
                        size={120}
                        level="H"
                        includeMargin={false}
                        fgColor="#C7B98A"
                      />
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="px-6 pb-6 space-y-3">
                  <button
                    onClick={handleDownloadDriverVCard}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-accent text-accent-foreground rounded-xl font-semibold hover:bg-accent/90 transition-all shadow-soft active:scale-[0.98]"
                  >
                    <Download className="w-5 h-5" />
                    Save Contact
                  </button>

                  <Button variant="primary" size="lg" className="w-full" asChild>
                    <Link href="/driver/register">Apply to Drive</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details */}
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

            {/* Service Area Info */}
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
