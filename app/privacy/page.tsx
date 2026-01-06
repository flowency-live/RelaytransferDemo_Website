import type { Metadata } from 'next';
import { tenantConfig } from '@/lib/config/tenant';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy policy for ${tenantConfig.name}.`,
};

export default function PrivacyPage() {
  const { name, legal, contact } = tenantConfig;

  return (
    <article className="section-padding">
      <div className="container-narrow prose prose-slate max-w-none">
        <h1>Privacy Policy</h1>
        <p className="lead">
          {name} is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information.
        </p>

        <h2>Who We Are</h2>
        <p>
          {legal.companyName} ({legal.companyNumber && `Company No. ${legal.companyNumber}`}) operates the {name} healthcare transport service.
        </p>
        <p>
          Contact: {contact.email}
        </p>

        <h2>Information We Collect</h2>
        <p>We collect information you provide when booking our services:</p>
        <ul>
          <li>Name and contact details (phone, email)</li>
          <li>Pickup and drop-off addresses</li>
          <li>Journey dates and times</li>
          <li>Special requirements or accessibility needs</li>
          <li>Payment information (processed securely via our payment provider)</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use your personal information to:</p>
        <ul>
          <li>Provide our transport services</li>
          <li>Communicate about your bookings</li>
          <li>Process payments</li>
          <li>Improve our services</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>Data Sharing</h2>
        <p>
          We do not sell your personal information. We share data only with:
        </p>
        <ul>
          <li>Our drivers (limited to information needed for your journey)</li>
          <li>Payment processors (for secure transaction processing)</li>
          <li>Legal authorities (when required by law)</li>
        </ul>

        <h2>Data Retention</h2>
        <p>
          We retain journey records for 7 years for compliance and accounting purposes. Contact information is retained while you have an active account or until you request deletion.
        </p>

        <h2>Your Rights</h2>
        <p>Under GDPR, you have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to processing</li>
          <li>Data portability</li>
        </ul>
        <p>To exercise these rights, contact us at {contact.email}.</p>

        <h2>Security</h2>
        <p>
          We implement appropriate technical and organisational measures to protect your personal information, including encryption, access controls, and regular security assessments.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this policy periodically. Significant changes will be communicated via email or website notice.
        </p>

        <p className="text-sm text-muted-foreground mt-8">
          Last updated: January 2025
        </p>
      </div>
    </article>
  );
}
