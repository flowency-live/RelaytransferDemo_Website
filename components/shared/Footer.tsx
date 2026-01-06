import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { tenantConfig } from '@/lib/config/tenant';
import { isFeatureEnabled } from '@/lib/config/features';

interface FooterLink {
  href: string;
  label: string;
  feature?: keyof typeof import('@/lib/config/features').featureFlags;
}

const serviceLinks: FooterLink[] = [
  { href: '/services', label: 'Our Services' },
  { href: '/quote', label: 'Get a Quote', feature: 'quoteWizard' },
  { href: '/corporate', label: 'Corporate Accounts', feature: 'corporatePortal' },
];

const infoLinks: FooterLink[] = [
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/accessibility', label: 'Accessibility' },
];

const legalLinks: FooterLink[] = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/cookies', label: 'Cookie Policy' },
];

function filterLinks(links: FooterLink[]): FooterLink[] {
  return links.filter((link) => !link.feature || isFeatureEnabled(link.feature));
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { contact, legal, name } = tenantConfig;

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-primary-foreground/80">
              {tenantConfig.tagline}
            </p>
            {legal.licenseInfo && (
              <p className="text-xs text-primary-foreground/60">
                {legal.licenseInfo}
              </p>
            )}
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              {filterLinks(serviceLinks).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 transition-default hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Information</h4>
            <ul className="space-y-2">
              {filterLinks(infoLinks).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 transition-default hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 transition-default hover:text-primary-foreground"
                >
                  <Phone className="h-4 w-4" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 transition-default hover:text-primary-foreground"
                >
                  <Mail className="h-4 w-4" />
                  {contact.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-primary-foreground/80">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>
                    {contact.address.line1}
                    {contact.address.line2 && <>, {contact.address.line2}</>}
                    <br />
                    {contact.address.city}, {contact.address.postcode}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/20 pt-8 md:flex-row">
          <p className="text-xs text-primary-foreground/60">
            {currentYear} {legal.companyName}. All rights reserved.
            {legal.companyNumber && ` Company No. ${legal.companyNumber}`}
          </p>
          <div className="flex gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-primary-foreground/60 transition-default hover:text-primary-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
