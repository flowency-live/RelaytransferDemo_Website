/**
 * Feature Flags Configuration
 *
 * Enable/disable features per tenant deployment.
 * This demo tenant has ALL features enabled to showcase the full platform.
 */

export interface FeatureFlags {
  // Portal availability
  corporatePortal: boolean;
  driverPortal: boolean;
  adminPortalLink: boolean;

  // Quote features
  quoteWizard: boolean;
  multiVehicleComparison: boolean;
  hourlyHire: boolean;
  roundTrip: boolean;
  multiStop: boolean;
  fixedRoutes: boolean;
  zonePricing: boolean;

  // Booking features
  onlinePayment: boolean;
  quoteSharing: boolean;
  qrCodeSharing: boolean;

  // VIP features
  vipPreferences: boolean;
  namedChauffeur: boolean;

  // Extras
  childSeats: boolean;
  babySeats: boolean;
  meetAndGreet: boolean;
  flightTracking: boolean;

  // Communication
  chatWidget: boolean;
  smsNotifications: boolean;
  emailNotifications: boolean;

  // Corporate features
  corporateAccounts: boolean;
  teamManagement: boolean;
  consolidatedBilling: boolean;
  favouriteTrips: boolean;

  // Driver features
  driverOnboarding: boolean;
  documentVerification: boolean;
  licenseChecking: boolean;
  availabilityScheduling: boolean;

  // Compliance
  complianceTracking: boolean;
  auditLogging: boolean;

  // Analytics
  usageAnalytics: boolean;
}

/**
 * Demo Tenant Feature Flags
 *
 * ALL features enabled to demonstrate full platform capabilities.
 */
export const featureFlags: FeatureFlags = {
  // Portal availability
  corporatePortal: true,
  driverPortal: true,
  adminPortalLink: true,

  // Quote features
  quoteWizard: true,
  multiVehicleComparison: true,
  hourlyHire: true,
  roundTrip: true,
  multiStop: true,
  fixedRoutes: true,
  zonePricing: true,

  // Booking features
  onlinePayment: true,
  quoteSharing: true,
  qrCodeSharing: true,

  // VIP features
  vipPreferences: true,
  namedChauffeur: true,

  // Extras
  childSeats: true,
  babySeats: true,
  meetAndGreet: true,
  flightTracking: true,

  // Communication
  chatWidget: true,
  smsNotifications: true,
  emailNotifications: true,

  // Corporate features
  corporateAccounts: true,
  teamManagement: true,
  consolidatedBilling: true,
  favouriteTrips: true,

  // Driver features
  driverOnboarding: true,
  documentVerification: true,
  licenseChecking: true,
  availabilityScheduling: true,

  // Compliance
  complianceTracking: true,
  auditLogging: true,

  // Analytics
  usageAnalytics: true,
};

export function getFeatureFlags(): FeatureFlags {
  return featureFlags;
}

export function isFeatureEnabled(feature: keyof FeatureFlags): boolean {
  return featureFlags[feature];
}
