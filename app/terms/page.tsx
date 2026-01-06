import type { Metadata } from 'next';
import { tenantConfig } from '@/lib/config/tenant';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms of service for ${tenantConfig.name}.`,
};

export default function TermsPage() {
  const { name, legal, contact } = tenantConfig;

  return (
    <article className="section-padding">
      <div className="container-narrow prose prose-slate max-w-none">
        <h1>Terms of Service</h1>
        <p className="lead">
          These terms govern your use of {name} transport services. By booking with us, you agree to these terms.
        </p>

        <h2>Service Provider</h2>
        <p>
          {legal.companyName} ({legal.companyNumber && `Company No. ${legal.companyNumber}`}) provides private hire transport services. {legal.licenseInfo && legal.licenseInfo}
        </p>

        <h2>Booking and Cancellation</h2>
        <h3>Making a Booking</h3>
        <p>
          Bookings can be made online, by phone, or email. A booking is confirmed when you receive written confirmation from us.
        </p>

        <h3>Cancellation Policy</h3>
        <ul>
          <li>More than 24 hours notice: Full refund</li>
          <li>12-24 hours notice: 50% charge</li>
          <li>Less than 12 hours notice: Full charge</li>
          <li>No-show: Full charge</li>
        </ul>

        <h3>Changes to Bookings</h3>
        <p>
          Changes to pickup time, location, or destination should be made as early as possible. We will accommodate changes where operationally feasible.
        </p>

        <h2>Service Delivery</h2>
        <h3>Pickup</h3>
        <p>
          Our driver will arrive at the specified pickup location at the booked time. For airport pickups, we monitor flight arrivals and adjust accordingly. Please ensure you are ready at the pickup time.
        </p>

        <h3>Waiting Time</h3>
        <p>
          Standard bookings include 15 minutes waiting time. Airport pickups include 60 minutes from flight landing. Additional waiting is charged at our published rates.
        </p>

        <h3>Journey Changes</h3>
        <p>
          Additional stops or route changes during a journey may incur additional charges. Please discuss with your driver or contact our operations team.
        </p>

        <h2>Passenger Responsibilities</h2>
        <p>Passengers must:</p>
        <ul>
          <li>Be ready at the agreed pickup time and location</li>
          <li>Treat our vehicles and drivers with respect</li>
          <li>Wear seatbelts at all times</li>
          <li>Not smoke or vape in vehicles</li>
          <li>Not consume alcohol in vehicles</li>
          <li>Inform us of any special requirements in advance</li>
        </ul>

        <h2>Our Responsibilities</h2>
        <p>We commit to:</p>
        <ul>
          <li>Providing clean, well-maintained vehicles</li>
          <li>Professional, DBS-checked drivers</li>
          <li>Punctual service (traffic permitting)</li>
          <li>Respecting your privacy and confidentiality</li>
          <li>Handling complaints promptly and fairly</li>
        </ul>

        <h2>Liability</h2>
        <p>
          We maintain comprehensive insurance for passenger safety. Our liability for delays, cancellations, or service issues is limited to the fare paid for the affected journey.
        </p>
        <p>
          We are not liable for delays caused by traffic, weather, road closures, or other circumstances beyond our control.
        </p>

        <h2>Payment</h2>
        <p>
          Payment is due at time of booking unless you have a corporate account with agreed payment terms. We accept major credit/debit cards.
        </p>

        <h2>Complaints</h2>
        <p>
          If you are unhappy with our service, please contact us at {contact.email}. We will investigate and respond within 5 working days.
        </p>

        <h2>Governing Law</h2>
        <p>
          These terms are governed by English law. Disputes will be subject to the exclusive jurisdiction of the English courts.
        </p>

        <p className="text-sm text-muted-foreground mt-8">
          Last updated: January 2025
        </p>
      </div>
    </article>
  );
}
