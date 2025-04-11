import React from 'react';

import { NextIntlClientProvider } from 'next-intl';

import type { Preview } from '@storybook/react';

import '../src/app/_styles/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => (
      <NextIntlClientProvider locale='en'>
        <Story />
      </NextIntlClientProvider>
    ),
  ],
};

export default preview;
