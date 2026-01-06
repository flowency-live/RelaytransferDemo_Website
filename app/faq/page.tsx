import type { Metadata } from 'next';
import Link from 'next/link';
import { tenantConfig } from '@/lib/config/tenant';
import { Button } from '@/components/ui';

export const metadata: Metadata = {
  title: 'FAQ',
  description: `Frequently asked questions about ${tenantConfig.name} healthcare transport services.`,
};

const faqs = [
  {
    category: 'Booking',
    questions: [
      {
        q: 'How do I book a transfer?',
        a: 'You can book online through our quote system, call us directly, or email your requirements. Corporate account holders can also use our dedicated booking portal.',
      },
      {
        q: 'How far in advance should I book?',
        a: 'We recommend booking at least 24 hours in advance for standard journeys. For airport transfers, 48 hours is preferred. However, we accommodate last-minute bookings where vehicle availability allows.',
      },
      {
        q: 'Can I book recurring journeys?',
        a: 'Yes. For patients with regular appointments, we can set up scheduled recurring bookings with the same driver where possible, ensuring consistency and familiarity.',
      },
      {
        q: 'What if my flight is delayed?',
        a: 'We monitor all flights in real-time. If your arrival is delayed, we automatically adjust your pickup time at no extra charge.',
      },
    ],
  },
  {
    category: 'Service',
    questions: [
      {
        q: 'What vehicles do you use?',
        a: 'Our fleet consists of executive saloons and luxury MPVs. All vehicles are discreet, comfortable, and maintained to the highest standards with climate control and privacy glass.',
      },
      {
        q: 'Can I request the same driver?',
        a: 'Yes. Through our Named Chauffeur service, we can assign a dedicated driver to your account who will handle all your journeys, subject to availability.',
      },
      {
        q: 'Do you accommodate special requirements?',
        a: 'Absolutely. Please inform us of any accessibility needs, medical equipment requirements, or preferences when booking. We will ensure appropriate arrangements are made.',
      },
      {
        q: 'Is there a meet and greet service?',
        a: 'Yes. For airport arrivals, our driver can meet you at arrivals with a name board and assist with luggage. This service is included in airport transfer bookings.',
      },
    ],
  },
  {
    category: 'Corporate',
    questions: [
      {
        q: 'Do you offer corporate accounts?',
        a: 'Yes. We offer corporate accounts for healthcare providers, clinics, and medical tourism operators. Benefits include consolidated billing, priority booking, and dedicated account management.',
      },
      {
        q: 'How does billing work for corporate accounts?',
        a: 'Corporate accounts receive monthly invoices with detailed journey breakdowns. We can also provide journey reports for compliance and expense management purposes.',
      },
      {
        q: 'Can multiple team members book on one account?',
        a: 'Yes. Corporate accounts support multiple authorised bookers, each with their own login credentials and booking permissions.',
      },
    ],
  },
  {
    category: 'Privacy & Compliance',
    questions: [
      {
        q: 'How do you ensure patient privacy?',
        a: 'All our drivers are trained in confidentiality protocols. We do not discuss passenger details, destinations, or journey purposes with anyone. No journey information is shared without explicit consent.',
      },
      {
        q: 'Are your drivers vetted?',
        a: 'All drivers undergo enhanced DBS checks, have clean driving records, and receive ongoing training in professional conduct and discretion.',
      },
      {
        q: 'Do you maintain journey records?',
        a: 'Yes, we maintain secure records for compliance purposes. These are handled in accordance with GDPR and are only accessible to authorised personnel.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80">
              Find answers to common questions about our healthcare transport services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="space-y-12">
            {faqs.map((section) => (
              <div key={section.category}>
                <h2 className="text-2xl font-semibold">{section.category}</h2>
                <div className="mt-6 space-y-6">
                  {section.questions.map((faq) => (
                    <div key={faq.q} className="card p-6">
                      <h3 className="font-semibold">{faq.q}</h3>
                      <p className="mt-3 text-muted-foreground">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-16 card-elevated p-8 text-center">
            <h2 className="text-2xl font-semibold">Still have questions?</h2>
            <p className="mt-4 text-muted-foreground">
              Our team is here to help. Get in touch and we will respond promptly.
            </p>
            <div className="mt-6">
              <Button variant="primary" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
