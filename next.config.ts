import createNextIntlPlugin from 'next-intl/plugin';


const withNextIntl = createNextIntlPlugin()

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
};

export default  withNextIntl(nextConfig);
