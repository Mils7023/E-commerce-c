"use client";
import { HeartIcon } from "@/assets/icons";
import { useAppContext } from "@/context";
import { useWishlist } from "@/hooks";
import { Product, WishlistItemV2 } from "@/types";
import { FC, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { SpinnerProps } from "../Spinner";

const Spinner = dynamic<SpinnerProps>(
  () => import("../Spinner").then((mod) => mod.Spinner),
  {
    ssr: false,
  }
);

export interface FavoriteToggleProps {
  product: Product;
  currentWishlistItem: WishlistItemV2 | undefined;
  loading: boolean;
  className?: string;
  buttonClass?: string;
}

export const FavoriteToggle: FC<FavoriteToggleProps> = ({
  product,
  currentWishlistItem,
  loading,
  className,
  buttonClass,
}) => {
  const {
    handleAddWishlist,
    removeFromWishlist,
    addWishlistLoading,
    removeWishlistLoading,
    refetchWishList,
  } = useWishlist();
  const [selected, setSelected] = useState(false);
  const { authToken, setIsAccountDrawerOpen } = useAppContext();

  const handleToggleItem = async (currentWishlistItem: WishlistItemV2) => {
    if (authToken) {
      if (!!currentWishlistItem) {
        await removeFromWishlist(currentWishlistItem?.id);
        setSelected(false);
      } else {
        await handleAddWishlist(product);
        setSelected(true);
      }
    } else {
      setIsAccountDrawerOpen(true);
    }
  };

  useEffect(() => {
    setSelected(!!currentWishlistItem);
  }, [currentWishlistItem]);

  const isLoading = loading || addWishlistLoading || removeWishlistLoading;

  return (
    <div>
      <button
        onClick={() => {
          handleToggleItem(currentWishlistItem!);
        }}
        className={buttonClass}
      >
        {isLoading ? (
          <Spinner size="sm" />
        ) : (
          <HeartIcon
            width={20}
            height={20}
            stroke="white"
            strokeWidth="3"
            fill={selected ? "white" : "none"}
          />
        )}
      </button>
    </div>
  );
};
