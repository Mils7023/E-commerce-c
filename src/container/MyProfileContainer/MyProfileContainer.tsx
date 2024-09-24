import { Banner, Profile } from "@/components/MyProfile";
import React from "react";

export const MyProfileContainer = ({ eventKey }: { eventKey: string }) => {
  return (
    <>
      <Banner />
      <Profile eventKey={eventKey} />
    </>
  );
};
