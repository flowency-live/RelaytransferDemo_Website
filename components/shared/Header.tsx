'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { tenantConfig } from '@/lib/config/tenant';
import { isFeatureEnabled } from '@/lib/config/features';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

interface NavLink {
  href: string;
  label: string;
  feature?: keyof typeof import('@/lib/config/features').featureFlags;
}

const navLinks: NavLink[] = [
  { href: '/services', label: 'Services' },
  { href: '/quote', label: 'Get a Quote', feature: 'quoteWizard' },
  { href: '/corporate', label: 'Corporate', feature: 'corporatePortal' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const visibleLinks = navLinks.filter(
    (link) => !link.feature || isFeatureEnabled(link.feature)
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <nav className="container-wide">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-semibold text-primary">
              {tenantConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            {visibleLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-default hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href={`tel:${tenantConfig.contact.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-sm text-muted-foreground transition-default hover:text-foreground"
            >
              <Phone className="h-4 w-4" />
              <span>{tenantConfig.contact.phone}</span>
            </a>
            <Button variant="primary" size="sm" asChild>
              <Link href="/quote">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded p-2 text-foreground md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden',
            mobileMenuOpen ? 'block' : 'hidden'
          )}
        >
          <div className="space-y-1 pb-4 pt-2">
            {visibleLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded px-3 py-2 text-base font-medium text-muted-foreground transition-default hover:bg-muted hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 px-3">
              <Button variant="primary" size="md" className="w-full" asChild>
                <Link href="/quote">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
