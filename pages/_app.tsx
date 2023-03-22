import '~/styles/globals.css';
import type { AppProps, AppType } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { supabase } from '~/utils/supabase';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const MyApp: AppType = ({ Component, pageProps }) => {
  const { push, pathname } = useRouter();
  // ユーザの認証アクションに応じて処理が可能
  const validateSession = () => {
    supabase.auth.onAuthStateChange((event, _) => {
      if (event === 'SIGNED_IN') {
        push('/');
      }
      if (event === 'SIGNED_OUT') {
        push('/login');
      }
    });
  };
  useEffect(() => {
    validateSession();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default MyApp;
