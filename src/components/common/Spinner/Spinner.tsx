// src/components/common/Spinner/Spinner.tsx
"use client";

import { FC, useEffect, useRef } from "react";
import Lottie, { AnimationItem } from "lottie-web";
import animationData from "@/lottiefiles/spinner-animation.json";

type Size = "ss" | "xs" | "sm" | "md" | "lg" | "xl";

export interface SpinnerProps {
  size?: Size;
}

export const Spinner: FC<SpinnerProps> = ({ size = "md" }) => {
  const animationRef = useRef<AnimationItem | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Check if window object is defined (indicating client-side)
    if (typeof window !== "undefined" && containerRef.current) {
      animationRef.current = Lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });

      return () => {
        if (animationRef.current) {
          animationRef.current.destroy();
        }
      };
    }
  }, []);

  const sizeObj = {
    ss: 25,
    xs: 40,
    sm: 80,
    md: 120,
    lg: 160,
    xl: 200,
  };

  const LoaderSize = sizeObj[size];

  return (
    <div ref={containerRef} style={{ width: LoaderSize, height: LoaderSize }} />
  );
};
