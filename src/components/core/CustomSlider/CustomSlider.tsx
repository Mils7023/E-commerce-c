"use client";
import React from "react";
import Slider from "rc-slider";
import Tooltip from "rc-tooltip";
import styles from "./CustomSlider.module.scss";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";

// Define the custom slider component
export const CustomSlider: React.FC<{
  onRangeChange: (range: number[]) => void;
  priceRange: number[];
  setPriceRange: React.Dispatch<React.SetStateAction<number[]>>;
}> = ({ onRangeChange, priceRange, setPriceRange }) => {
  const handleChange = (newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setPriceRange(newValue);
      onRangeChange(newValue);
    }
  };

  return (
    <Slider
      range
      min={100}
      max={500}
      value={priceRange}
      onChange={handleChange}
      style={{ border: "black" }}
      trackStyle={{ backgroundColor: "black" }}
      handleStyle={{ borderColor: "black", backgroundColor: "black" }}
      railStyle={{ backgroundColor: "black", opacity: 0.3 }}
    />
  );
};
