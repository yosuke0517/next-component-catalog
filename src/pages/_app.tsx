// src/pages/_app.tsx
import "../styles/globals.css";
import type { AppType } from "next/app";
import { SessionProvider } from "next-auth/react";
import { trpc } from "../utils/trpc";
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

export default trpc.withTRPC(MyApp);
