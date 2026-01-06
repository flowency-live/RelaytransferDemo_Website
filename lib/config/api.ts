/**
 * API Configuration
 *
 * Centralized API endpoint configuration for Relay Platform integration.
 */

import { tenantConfig } from './tenant';

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.opstack.uk';

/**
 * Get tenant-specific headers for API requests
 */
export function getTenantHeaders(): Record<string, string> {
  return {
    'X-Tenant-Id': tenantConfig.id,
    'Content-Type': 'application/json',
  };
}

/**
 * API Endpoints
 */
export const API_ENDPOINTS = {
  // Public Quote Endpoints
  quotes: '/v1/quotes',
  quotesSave: '/quotes/save',
  quotesRetrieve: '/quotes',
  bookings: '/bookings',
  vehicles: '/v1/vehicles',
  zonePricing: '/v1/zone-pricing',
  locations: '/v1/locations/autocomplete',
  feedback: '/v1/feedback',

  // Corporate Portal Authentication
  corporateMagicLink: '/corporate/auth/magic-link',
  corporateVerify: '/corporate/auth/verify',
  corporateSession: '/corporate/auth/session',
  corporateLogin: '/corporate/auth/login',
  corporateSetPassword: '/corporate/auth/set-password',
  corporateForgotPassword: '/corporate/auth/forgot-password',
  corporateLogout: '/corporate/auth/logout',

  // Corporate Portal API
  corporateMe: '/corporate/me',
  corporateNotifications: '/corporate/me/notifications',
  corporateTrips: '/corporate/me/trips',
  corporateDashboard: '/corporate/dashboard',
  corporateCompany: '/corporate/company',
  corporateUsers: '/corporate/users',

  // Driver Portal Authentication
  driverRegister: '/driver/auth/register',
  driverLogin: '/driver/auth/login',
  driverMagicLink: '/driver/auth/magic-link',
  driverVerify: '/driver/auth/verify',
  driverSession: '/driver/auth/session',
  driverLogout: '/driver/auth/logout',

  // Driver Portal API
  driverProfile: '/driver/profile',
  driverVehicles: '/driver/vehicles',
  driverLicenseCheck: '/driver/license-check',
  driverDocuments: '/driver/documents',
  driverAvailability: '/driver/availability',

  // Chat Widget (AI Booking Assistant)
  chatSession: '/chat/session',
  chatMessage: '/chat/message',
} as const;

/**
 * Build full API URL
 */
export function getApiUrl(endpoint: string): string {
  return `${API_BASE_URL}${endpoint}`;
}

/**
 * Build full API URL with query parameters
 */
export function getApiUrlWithParams(
  endpoint: string,
  params: Record<string, string | number | boolean>
): string {
  const url = new URL(`${API_BASE_URL}${endpoint}`);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, String(value));
  });
  return url.toString();
}
