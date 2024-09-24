import { ResetPassword, ResetPasswordProps } from "@/components";
import React from "react";

function CreatePasswordPage({
  searchParams,
}: {
  searchParams: ResetPasswordProps;
}) {
  return <ResetPassword resetPasswordParam={searchParams} />;
}

export default CreatePasswordPage;
