import type { Decorator, Preview } from '@storybook/react-vite';
import { useMemo, type PropsWithChildren } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '../src/styles/global.css';

function StorybookProviders({ children }: PropsWithChildren) {
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 0,
          },
        },
      }),
    []
  );

  return (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={['/']}>{children}</MemoryRouter>
    </QueryClientProvider>
  );
}

const withProviders: Decorator = (Story) => {
  return (
    <StorybookProviders>
      <Story />
    </StorybookProviders>
  );
};

const preview: Preview = {
  decorators: [withProviders],

  parameters: {
    layout: 'centered',

    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
