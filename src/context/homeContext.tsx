"use client";
import { createContext, FC, ReactNode } from "react";
import { HomeContextType } from "@/types";

const defaultContext: HomeContextType = {
  recentAddedProduct: { data: null, error: null, loading: true },
  featuredToppers: { data: null, error: null, loading: true },
  bestSellingToppers: { data: null, error: null, loading: true },
  seasonalToppers: { data: null, error: null, loading: true },
  superheroToppers: { data: null, error: null, loading: true },
  occasionToppers: { data: null, error: null, loading: true },
  highlightedProducts: { data: null, error: null, loading: true },
};

export const HomeContext = createContext<HomeContextType>(defaultContext);

export const HomeProvider: FC<{
  children: ReactNode;
  value: HomeContextType;
}> = ({ children, value }) => {
  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};
