import "~/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps, AppType } from "next/app";
import { Session } from "next-auth";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default MyApp;
