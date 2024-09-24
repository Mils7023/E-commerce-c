"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";

export interface EmptyCartProps {}

export const EmptyCart: FC<EmptyCartProps> = () => {
  const router = useRouter();

  return (
    <div className="text-center">
      <h3>Your Cart Is Empty.</h3>
      <p>Look Like You Have Not Made Your Choice Yet...</p>
      <button
        className="btn btn-outline rounded uppercase"
        onClick={() => {
          router.push("/");
        }}
      >
        Add Your Toppers
      </button>
    </div>
  );
};
