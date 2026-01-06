'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { tenantConfig } from '@/lib/config/tenant';
import { Button, Card, CardContent, CardHeader, CardTitle, Input } from '@/components/ui';

export default function DriverRegisterPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    postcode: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="section-padding bg-muted">
      <div className="container-narrow max-w-md">
        <Link
          href="/driver"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Driver Portal
        </Link>

        <Card>
          <CardHeader className="text-center">
            <CardTitle>Apply to Drive</CardTitle>
            <p className="mt-2 text-sm text-muted-foreground">
              Join {tenantConfig.name} as a professional driver
            </p>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="text-center py-4">
                <CheckCircle className="mx-auto h-12 w-12 text-success" />
                <h3 className="mt-4 font-semibold">Application Submitted</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thank you for your interest. We&apos;ve sent a verification email to {formData.email}.
                  Please check your inbox to continue the onboarding process.
                </p>
                <Button variant="outline" className="mt-6" asChild>
                  <Link href="/driver">Return to Driver Portal</Link>
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    name="firstName"
                    label="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="lastName"
                    label="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Input
                  type="email"
                  name="email"
                  label="Email address"
                  placeholder="driver@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="tel"
                  name="phone"
                  label="Phone number"
                  placeholder="+44 7XXX XXXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="postcode"
                  label="Postcode"
                  placeholder="CH1 1AA"
                  value={formData.postcode}
                  onChange={handleChange}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  By submitting this form, you agree to our{' '}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>{' '}
                  and{' '}
                  <Link href="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>
                  .
                </p>
                <Button type="submit" className="w-full">
                  Submit Application
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        {!submitted && (
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Already registered?{' '}
            <Link href="/driver/login" className="text-primary hover:underline">
              Sign in here
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
