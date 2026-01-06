'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail } from 'lucide-react';
import { tenantConfig } from '@/lib/config/tenant';
import { Button, Card, CardContent, CardHeader, CardTitle, Input } from '@/components/ui';

export default function CorporateLoginPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="section-padding bg-muted">
      <div className="container-narrow max-w-md">
        <Link
          href="/corporate"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Corporate
        </Link>

        <Card>
          <CardHeader className="text-center">
            <CardTitle>Corporate Sign In</CardTitle>
            <p className="mt-2 text-sm text-muted-foreground">
              Access your {tenantConfig.shortName} corporate account
            </p>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="text-center py-4">
                <Mail className="mx-auto h-12 w-12 text-success" />
                <h3 className="mt-4 font-semibold">Check your email</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We&apos;ve sent a magic link to {email}. Click the link to sign in.
                </p>
                <Button
                  variant="ghost"
                  className="mt-4"
                  onClick={() => setSubmitted(false)}
                >
                  Use a different email
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  label="Email address"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="w-full">
                  Send Magic Link
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Or{' '}
                  <Link href="/corporate/login/password" className="text-primary hover:underline">
                    sign in with password
                  </Link>
                </p>
              </form>
            )}
          </CardContent>
        </Card>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{' '}
          <Link href="/contact" className="text-primary hover:underline">
            Contact us
          </Link>{' '}
          to open a corporate account.
        </p>
      </div>
    </div>
  );
}
