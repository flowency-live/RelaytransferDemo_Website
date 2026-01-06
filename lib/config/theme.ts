/**
 * Theme Configuration
 *
 * All colors and visual styling for the tenant.
 * These values are injected as CSS variables at runtime.
 */

export interface ThemeColors {
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  border: string;
  success: string;
  warning: string;
  error: string;
}

export interface ThemeConfig {
  colors: ThemeColors;
  fonts: {
    heading: string;
    body: string;
  };
  borderRadius: string;
}

/**
 * Relay Healthcare Transfer Theme
 *
 * Mood: Calm, clinical but not cold, luxury without flash
 * European private-clinic energy (Zurich / Copenhagen / Antwerp)
 */
export const themeConfig: ThemeConfig = {
  colors: {
    // Primary: Deep Mineral Teal
    primary: '#0F2E2E',
    primaryForeground: '#FFFFFF',

    // Secondary: Soft Slate Blue-Grey
    secondary: '#5E6F73',
    secondaryForeground: '#FFFFFF',

    // Background: Warm Off-White
    background: '#F6F8F7',
    foreground: '#0F2E2E',

    // Card surfaces
    card: '#FFFFFF',
    cardForeground: '#0F2E2E',

    // Muted elements
    muted: '#E8EDEB',
    mutedForeground: '#5E6F73',

    // Accent: Muted Champagne Gold (use sparingly)
    accent: '#C7B98A',
    accentForeground: '#0F2E2E',

    // Border
    border: '#D1D9D6',

    // Status colors
    success: '#8FAFA3', // Calm Sage
    warning: '#C7B98A', // Champagne
    error: '#A65D57',   // Muted red (not emergency bright)
  },

  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },

  borderRadius: '0.5rem',
};

/**
 * Convert theme colors to CSS variables format
 */
export function getThemeCSSVariables(): Record<string, string> {
  const { colors, borderRadius } = themeConfig;

  return {
    '--color-primary': colors.primary,
    '--color-primary-foreground': colors.primaryForeground,
    '--color-secondary': colors.secondary,
    '--color-secondary-foreground': colors.secondaryForeground,
    '--color-background': colors.background,
    '--color-foreground': colors.foreground,
    '--color-card': colors.card,
    '--color-card-foreground': colors.cardForeground,
    '--color-muted': colors.muted,
    '--color-muted-foreground': colors.mutedForeground,
    '--color-accent': colors.accent,
    '--color-accent-foreground': colors.accentForeground,
    '--color-border': colors.border,
    '--color-success': colors.success,
    '--color-warning': colors.warning,
    '--color-error': colors.error,
    '--radius': borderRadius,
  };
}

export function getThemeConfig(): ThemeConfig {
  return themeConfig;
}
