"use client";

import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object
// We use client hydration to establish the <SessionProvider />
export default function ClientAuthProvider({ children }: PropsWithChildren) {
  return <SessionProvider>{children}</SessionProvider>;
}
