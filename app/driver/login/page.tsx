'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { tenantConfig } from '@/lib/config/tenant';
import { Button, Card, CardContent, CardHeader, CardTitle, Input } from '@/components/ui';

export default function DriverLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual authentication
    console.log('Login attempt:', { email, password });
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
            <CardTitle>Driver Login</CardTitle>
            <p className="mt-2 text-sm text-muted-foreground">
              Access your {tenantConfig.shortName} driver dashboard
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                label="Email address"
                placeholder="driver@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                type="password"
                label="Password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="flex justify-end">
                <Link
                  href="/driver/forgot-password"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Not registered yet?{' '}
          <Link href="/driver/register" className="text-primary hover:underline">
            Apply to drive
          </Link>
        </p>
      </div>
    </div>
  );
}
