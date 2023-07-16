"use client";

import { PropsWithChildren } from "react";
import AuthProvider from "./auth";
import AntdStyleProvider from "./antd";

export default function ClientContextProvider({ children }: PropsWithChildren) {
  return (
    <AuthProvider>
      <AntdStyleProvider>{children}</AntdStyleProvider>
    </AuthProvider>
  );
}
