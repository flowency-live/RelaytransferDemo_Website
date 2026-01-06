import type { Metadata } from 'next';
import { tenantConfig } from '@/lib/config/tenant';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: `Cookie policy for ${tenantConfig.name}.`,
};

export default function CookiesPage() {
  const { name, contact } = tenantConfig;

  return (
    <article className="section-padding">
      <div className="container-narrow prose prose-slate max-w-none">
        <h1>Cookie Policy</h1>
        <p className="lead">
          This policy explains how {name} uses cookies and similar technologies on our website.
        </p>

        <h2>What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and improve your experience.
        </p>

        <h2>Cookies We Use</h2>

        <h3>Essential Cookies</h3>
        <p>
          Required for the website to function. These cannot be disabled.
        </p>
        <ul>
          <li>Session cookies (maintain your login state)</li>
          <li>Security cookies (protect against fraud)</li>
          <li>Load balancing (ensure reliable service)</li>
        </ul>

        <h3>Functional Cookies</h3>
        <p>
          Remember your preferences to improve your experience.
        </p>
        <ul>
          <li>Language preferences</li>
          <li>Recent searches</li>
          <li>Quote history</li>
        </ul>

        <h3>Analytics Cookies</h3>
        <p>
          Help us understand how visitors use our website.
        </p>
        <ul>
          <li>Pages visited</li>
          <li>Time spent on site</li>
          <li>How you found us</li>
        </ul>
        <p>
          Analytics data is anonymised and used only to improve our service.
        </p>

        <h2>Third-Party Cookies</h2>
        <p>
          We use limited third-party services that may set their own cookies:
        </p>
        <ul>
          <li>Payment processors (for secure transactions)</li>
          <li>Map services (for location features)</li>
        </ul>

        <h2>Managing Cookies</h2>
        <p>
          You can control cookies through your browser settings:
        </p>
        <ul>
          <li>Chrome: Settings &gt; Privacy and Security &gt; Cookies</li>
          <li>Firefox: Settings &gt; Privacy &amp; Security &gt; Cookies</li>
          <li>Safari: Preferences &gt; Privacy &gt; Cookies</li>
          <li>Edge: Settings &gt; Cookies and site permissions</li>
        </ul>
        <p>
          Note: Disabling essential cookies may affect website functionality.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about our cookie policy? Contact us at {contact.email}.
        </p>

        <p className="text-sm text-muted-foreground mt-8">
          Last updated: January 2025
        </p>
      </div>
    </article>
  );
}
