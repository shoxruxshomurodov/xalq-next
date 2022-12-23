import { useState } from 'react';
import type { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import reactQueryClient from '../config/react-query-config';
import 'assets/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  // @ts-ignore
  const [queryClient] = useState(() => new QueryClient(reactQueryClient));
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
