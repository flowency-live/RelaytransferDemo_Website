/**
 * Tenant Configuration
 *
 * This is the single source of truth for all tenant-specific values.
 * To rebrand for a new tenant, update this file and the theme config.
 */

export interface TenantContact {
  email: string;
  phone: string;
  address: {
    line1: string;
    line2?: string;
    city: string;
    postcode: string;
    country: string;
  };
}

export interface TenantSocial {
  twitter?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
}

export interface TenantLegal {
  companyName: string;
  companyNumber?: string;
  vatNumber?: string;
  licenseInfo?: string;
}

export interface TenantConfig {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  domain: string;
  contact: TenantContact;
  social: TenantSocial;
  legal: TenantLegal;
  serviceArea: string;
  timezone: string;
}

/**
 * Relay Healthcare Transfer - Demo Tenant Configuration
 *
 * Discreet executive transport for private healthcare and medical tourism in Cheshire.
 */
export const tenantConfig: TenantConfig = {
  id: process.env.NEXT_PUBLIC_TENANT_ID || 'relay-healthcare-transfer',
  name: 'Relay Healthcare Transfer',
  shortName: 'RHT',
  tagline: 'Discreet healthcare transport for private patients and clinicians',
  description: 'Scheduled, compliant transfers for private healthcare providers and international medical visitors across Cheshire.',
  domain: process.env.NEXT_PUBLIC_DOMAIN || 'relayhealthcaretransfer.com',

  contact: {
    email: 'bookings@relayhealthcaretransfer.com',
    phone: '+44 1234 567890',
    address: {
      line1: 'Suite 100',
      line2: 'Healthcare Business Centre',
      city: 'Cheshire',
      postcode: 'CH1 1AA',
      country: 'United Kingdom',
    },
  },

  social: {
    linkedin: 'https://linkedin.com/company/relay-healthcare-transfer',
  },

  legal: {
    companyName: 'Relay Healthcare Transfer Ltd',
    companyNumber: '00000000',
    licenseInfo: 'Licensed private hire operator',
  },

  serviceArea: 'Cheshire and Greater Manchester',
  timezone: 'Europe/London',
};

export function getTenantConfig(): TenantConfig {
  return tenantConfig;
}
