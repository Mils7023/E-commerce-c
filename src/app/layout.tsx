// import "bootstrap/dist/css/bootstrap.css";
// import "./globals.css";

import "@/assets/fonts/stylesheet.css";
import "@/styles/globals.scss";

import { App } from "@/container";
import { RootContextProvider } from "@/context/rootContextProvider";
import { Metadata } from "next";
import { ReduxProvider } from "@/redux/ReduxProvider";
import { ApolloWrapper } from "@/graphql/ApolloWrapper";
import { Layout, PageLoading } from "@/components";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Cannellio Web",
  description: "Cannellio Web",
  generator: "Next.js",
  manifest: "/manifest.json",
  icons: {
    icon: "/icon.png", // Path to your favicon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>{/* Script for google tag and analytics goes hear */}</head>
      <body>
        <ApolloWrapper>
          <ReduxProvider>
            <RootContextProvider>
              <Suspense fallback={<PageLoading />}>
                <Layout>
                  <App>{children}</App>
                </Layout>
              </Suspense>
            </RootContextProvider>
          </ReduxProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}
