import type { Metadata } from 'next';
import { tenantConfig } from '@/lib/config/tenant';

export const metadata: Metadata = {
  title: 'Accessibility',
  description: `Accessibility statement for ${tenantConfig.name}.`,
};

export default function AccessibilityPage() {
  const { name, contact } = tenantConfig;

  return (
    <article className="section-padding">
      <div className="container-narrow prose prose-slate max-w-none">
        <h1>Accessibility Statement</h1>
        <p className="lead">
          {name} is committed to ensuring digital accessibility for all users, including those with disabilities.
        </p>

        <h2>Our Commitment</h2>
        <p>
          We strive to meet WCAG 2.1 Level AA standards across our website. Our goal is to provide an inclusive experience for all visitors, regardless of ability or technology used.
        </p>

        <h2>Accessibility Features</h2>
        <h3>Navigation</h3>
        <ul>
          <li>Clear, consistent navigation structure</li>
          <li>Skip to main content link</li>
          <li>Keyboard-accessible menus and forms</li>
          <li>Logical heading hierarchy</li>
        </ul>

        <h3>Visual Design</h3>
        <ul>
          <li>Sufficient colour contrast ratios</li>
          <li>Resizable text without loss of functionality</li>
          <li>No content that flashes more than three times per second</li>
          <li>Alternative text for images</li>
        </ul>

        <h3>Forms</h3>
        <ul>
          <li>Clear labels for all form fields</li>
          <li>Error messages that identify the problem</li>
          <li>Instructions provided where needed</li>
          <li>Focus indicators on interactive elements</li>
        </ul>

        <h2>Transport Accessibility</h2>
        <p>
          Beyond our digital services, we are committed to accessible transport:
        </p>
        <ul>
          <li>Wheelchair-accessible vehicles available on request</li>
          <li>Assistance with boarding and alighting</li>
          <li>Space for mobility aids and medical equipment</li>
          <li>Trained drivers aware of accessibility needs</li>
        </ul>
        <p>
          Please inform us of any accessibility requirements when booking so we can ensure appropriate arrangements.
        </p>

        <h2>Known Issues</h2>
        <p>
          We are aware of the following accessibility issues and are working to address them:
        </p>
        <ul>
          <li>Some older PDF documents may not be fully accessible</li>
          <li>Third-party map widgets may have limited keyboard navigation</li>
        </ul>

        <h2>Feedback</h2>
        <p>
          We welcome feedback on the accessibility of our website and services. If you encounter any barriers or have suggestions for improvement, please contact us:
        </p>
        <ul>
          <li>Email: {contact.email}</li>
          <li>Phone: {contact.phone}</li>
        </ul>
        <p>
          We aim to respond to accessibility feedback within 5 working days.
        </p>

        <h2>Enforcement</h2>
        <p>
          If you are not satisfied with our response to your accessibility concern, you can contact the Equality Advisory and Support Service (EASS) at equalityadvisoryservice.com.
        </p>

        <p className="text-sm text-muted-foreground mt-8">
          Last updated: January 2025
        </p>
      </div>
    </article>
  );
}
