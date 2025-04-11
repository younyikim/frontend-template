import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: ['./messages/home/en.json'],
  },
});

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);
