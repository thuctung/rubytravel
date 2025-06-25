import { Locale, hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import { ReactNode } from 'react';
import '@/app/globals.css';

export async function generateMetadata() {
  return {
    title: 'Ruby Travel',
    description: '',
    icons: {
      icon: '/favicon.png',
    },
  };
}

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
