"use client";

import { ChangeEvent, FC, useEffect, useState } from "react";
import { FilterSidebarContext } from "@/context";
import { usePathname, useSearchParams } from "next/navigation";
import "rc-slider/assets/index.css";
import { CategoryRadio, Checkbox, CustomSlider } from "@/components/core";
// import styles from "../../ProductListing/Listing/Listing.module.scss";
import styles from "./FilterSidebar.module.scss";
import { useDebouncedValue } from "@/hooks";

const options = [
  {
    value: JSON.stringify({ sortBy: "name", orderBy: "ASC" }),
    label: "Name A-Z",
  },
  {
    value: JSON.stringify({ sortBy: "name", orderBy: "DESC" }),
    label: "Name Z-A",
  },
  {
    value: JSON.stringify({ sortBy: "price", orderBy: "DESC" }),
    label: "Price high-to-low",
  },
  {
    value: JSON.stringify({ sortBy: "price", orderBy: "ASC" }),
    label: "Price low-to-high",
  },
  {
    value: JSON.stringify({ sortBy: "position", orderBy: "ASC" }),
    label: "Popularity",
  },
];

export interface FilterSidebarProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  productSidebarFilter: any;
  searchParams: any;
  handleRemoveFilter: (value?: any) => void;
  handleAddFilter: (value: any) => void;
  setMobileFilters?: (value: any) => void;
  isMobile?: boolean;
}

export interface FilterComponent {
  data: any;
  handleChange: (e: any) => void;
  mobileSelections?: any;
}

const FilterComponent: FC<FilterComponent> = ({
  data,
  handleChange,
  mobileSelections,
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const isToppersByShape = pathname.includes("toppers-by-shape");

  const price = searchParams.get("price");
  const shape =
    searchParams.get("topper_shape") || mobileSelections?.topper_shape;
  const material = searchParams.get("materials") || mobileSelections?.materials;

  const [priceRange, setPriceRange] = useState<any>(
    price ? price.split("_") : [0, 0]
  );
  const [debouncedSearchValue] = useDebouncedValue(priceRange, 300);

  const handlePriceRangeChange = (value: any) => {
    setPriceRange(value);
  };

  useEffect(() => {
    if (!price) {
      setPriceRange([0, 0]);
    }
  }, [price]);

  useEffect(() => {
    if (debouncedSearchValue[0] && debouncedSearchValue[1]) {
      handleChange({
        target: {
          name: "price",
          value: `${debouncedSearchValue[0]}_${debouncedSearchValue[1]}`,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchValue]);

  return (
    <>
      <div className={`${styles.filter_col}`}>
        {/* {!isToppersByShape && (
          <div
            className={`${styles.filter_title} d-flex flex-lg-row flex-column-reverse justify-content-lg-between align-items-start gap-lg-0 gap-3`}
          >
            <span className="h5 black_text font_smb">{data.label}</span>
          </div>
        )} */}
        {/* <div className="px-xxl-3 px-lg-2"> */}
        {data.label === "Topper Shape" ? (
          !isToppersByShape && (
            <>
              <div
                className={`${styles.filter_title} d-flex justify-content-between pl-0`}
              >
                <span className="h5 black_text font_smb">{data.label}</span>
              </div>
              <div className="px-xxl-3 px-lg-2">
                {data.options.map((option: any, index: any) => (
                  <Checkbox
                    key={option.value}
                    id={option.value}
                    onChange={handleChange}
                    value={option.value}
                    label={option.label}
                    name={data && data?.attribute_code}
                    checked={option.value === shape}
                  />
                ))}
              </div>
            </>
          )
        ) : data.label === "Material" ? (
          <>
            <div
              className={`${styles.filter_title} d-flex justify-content-between pl-0`}
            >
              <span className="h5 black_text font_smb">{data.label}</span>
            </div>
            <div className="px-xxl-3 px-lg-2">
              {data.options.map((option: any, index: any) => (
                <Checkbox
                  key={option.value}
                  id={option.value}
                  onChange={handleChange}
                  value={option.value}
                  label={option.label}
                  name={data && data?.attribute_code}
                  checked={option.value === material}
                />
              ))}
            </div>
          </>
        ) : data.label === "Price" ? (
          <>
            <div
              className={`${styles.filter_title} d-flex gap-4 align-items-center`}
            >
              <span className="h5 black_text font_smb">{data.label}</span>
              <span className="h6 black_shade5_text ">
                £{priceRange[0]} - £{priceRange[1]}
              </span>
            </div>
            <div className="px-xxl-3 px-lg-2">
              <CustomSlider
                onRangeChange={handlePriceRangeChange}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
              />
            </div>
          </>
        ) : null}
      </div>
      {/* </div> */}
    </>
  );
};

export const FilterSidebar: FC<FilterSidebarProps> = ({
  handleChange,
  productSidebarFilter,
  searchParams,
  handleRemoveFilter,
  handleAddFilter,
  setMobileFilters,
  isMobile,
}) => {
  const [selectedSortOption, setSelectedSortOption] = useState<string>("");
  const [mobileSelections, setMobileSelections] = useState<any>({});

  useEffect(() => {
    const sortBy = searchParams.sortBy;
    const orderBy = searchParams.orderBy;

    const selectedOption = options.find((option) => {
      const parsedOption = JSON.parse(option.value);
      return parsedOption.sortBy === sortBy && parsedOption.orderBy === orderBy;
    });

    if (selectedOption) {
      setSelectedSortOption(selectedOption.value);
    }
  }, [searchParams]);

  const selectedFilter = Object.keys(searchParams).filter(
    (x) => x !== "page" && x !== "uid"
  );

  const handleMobileChange = (event: any) => {
    const name = event?.target?.name;
    const value = event?.target?.value;
    setMobileSelections((prevSelections: any) => ({
      ...prevSelections,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (setMobileFilters) {
      setMobileFilters(mobileSelections);
    }
  }, [mobileSelections, setMobileFilters]);

  const handleInputChange = isMobile ? handleMobileChange : handleChange;

  return (
    <FilterSidebarContext.Provider value={{ handleChange }}>
      {isMobile ? (
        <>
          {/* <div className={`${styles.filter_box}`}> */}
          <div className={`${styles.filter_col}`}>
            <button
              className={`${styles.clear_filter}`}
              onClick={() => {
                handleRemoveFilter();
                setMobileSelections({});
                setSelectedSortOption("");
              }}
            >
              Clear all filters
            </button>
          </div>
          {productSidebarFilter.aggregations
            .filter((x: any) => x.attribute_code !== "category_uid")
            .map((filter: any, index: any) => (
              <FilterComponent
                handleChange={handleInputChange}
                mobileSelections={mobileSelections}
                data={filter}
                key={index}
              />
            ))}
          <hr className={`${styles.filter_col}`} />
          <div className={`${styles.filter_col}`}>
            <div
              className={`${styles.filter_title} d-flex justify-content-between`}
            >
              <span className="h5 black_text font_smb">Sort By</span>
            </div>
            <div className="px-xxl-3 px-lg-2">
              {options.map((option, index) => (
                <CategoryRadio
                  key={index}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setSelectedSortOption(e.target.value);
                    const selectedOption = JSON.parse(option.value);
                    setMobileSelections((prevSelections: any) => ({
                      ...prevSelections,
                      sortBy: selectedOption.sortBy,
                      orderBy: selectedOption.orderBy,
                    }));
                  }}
                  value={option.value}
                  title={option.label}
                  name="sort"
                  checked={selectedSortOption === option.value}
                />
              ))}
            </div>
          </div>
          {/* </div> */}
        </>
      ) : (
        <div
          className={`col-xl-3 col-lg-4 col-3 d-md-block d-none ${styles.filter_sidebar} `}
        >
          <div className={`${styles.filter_box}`}>
            <div className={`${styles.filter_col} text-end`}>
              <button
                className={`${styles.clear_filter}`}
                onClick={() => {
                  handleRemoveFilter();
                  setSelectedSortOption("");
                }}
              >
                Clear all filters
              </button>
            </div>
            {productSidebarFilter.aggregations
              .filter((x: any) => x.attribute_code !== "category_uid")
              .map((filter: any, index: any) => (
                <FilterComponent
                  handleChange={handleChange}
                  data={filter}
                  key={index}
                />
              ))}
            <hr className={`${styles.filter_col}`} />
            <div className={`${styles.filter_col}`}>
              <div
                className={`${styles.filter_title} d-flex justify-content-between`}
              >
                <span className="h5 black_text font_smb">Sort By</span>
              </div>
              <div className="px-xxl-3 px-lg-2">
                {options.map((option, index) => (
                  <CategoryRadio
                    key={index}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setSelectedSortOption(e.target.value);
                      const selectedOption = JSON.parse(option.value);
                      handleAddFilter({
                        sortBy: selectedOption.sortBy,
                        orderBy: selectedOption.orderBy,
                      });
                    }}
                    value={option.value}
                    title={option.label}
                    name="sort"
                    checked={selectedSortOption === option.value}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </FilterSidebarContext.Provider>
  );
};
