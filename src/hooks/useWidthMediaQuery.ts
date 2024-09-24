"use client";
import { useEffect, useState } from "react";

export const useWidthMediaQuery = (width = 767) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(window.innerWidth < width);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleResize = () => {
    setShow(window.innerWidth < width);
  };

  return [show];
};
