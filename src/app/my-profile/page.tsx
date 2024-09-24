"use client";

import { MyProfileContainer } from "@/container";
import { BrowserPersistence, localStorageKeys } from "@/utils";
import { PageNotFound } from "@/components";

const MyProfilePage = ({ searchParams }: { searchParams: any }) => {
  const storage = new BrowserPersistence();
  const token = storage.getItem(localStorageKeys.AUTH_TOKEN);

  if (token) {
    return <MyProfileContainer eventKey={searchParams?.eventKey} />;
  } else {
    return <PageNotFound />;
  }
};

export default MyProfilePage;
