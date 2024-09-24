import React, { Fragment } from "react";
import { Footer, Header } from "@/components";
import { useHeaderMenu } from "@/hooks";

export const Layout = async ({ children }: { children: React.ReactNode }) => {
  const { menuItems } = await useHeaderMenu();

  return (
    <Fragment>
      <Header menuItems={menuItems} />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};
