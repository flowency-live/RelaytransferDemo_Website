/**
 * Configuration Exports
 *
 * Central export point for all configuration.
 */

export { tenantConfig, getTenantConfig } from './tenant';
export type { TenantConfig, TenantContact, TenantSocial, TenantLegal } from './tenant';

export { themeConfig, getThemeConfig, getThemeCSSVariables } from './theme';
export type { ThemeConfig, ThemeColors } from './theme';

export { featureFlags, getFeatureFlags, isFeatureEnabled } from './features';
export type { FeatureFlags } from './features';

export { API_BASE_URL, API_ENDPOINTS, getApiUrl, getApiUrlWithParams, getTenantHeaders } from './api';
