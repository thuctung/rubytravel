import '@/app/globals.css';

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <h1>OKOKO</h1>
        <main>{children}</main>
      </body>
    </html>
  );
}
