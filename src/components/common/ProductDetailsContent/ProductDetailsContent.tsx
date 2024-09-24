"use client";
import Image from "next/image";
import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import styles from "./ProductDetailsContent.module.scss";
import Link from "next/link";
import { ProductCounter } from "../ProductCounter";
import { Select, TextArea } from "@/components/core";
import { useAppContext, useCartContext } from "@/context";
import { useAddToCart } from "@/hooks";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Form } from "../Form";
import { cartFormSchema } from "@/utils";
import { CancelIcon, UploadIcon } from "@/assets/icons";
import { FavoriteToggle } from "../FavoriteToggle";
import { Queries } from "@/utils/graphql";
import { useLazyQuery } from "@apollo/client";
import { FetchWishlist } from "@/types";
import { currencyFormatter, readFileAsDataURL } from "@/utils/helper";
import { getImageUrl } from "@/utils/imageHelper";
import { useFile } from "@/hooks/useFile";

export interface ProductDetailsContentProps {
  isBestSellingProduct?: boolean;
  item: any;
  setVariantImg: React.Dispatch<any>;
}

const aboutItem = [
  { text: "PRECUT 7.5 INCH / 19 CMS CAKE TOPPER" },
  { text: "100% EDIBLE" },
  {
    text: "Printed onto premium icing sheets - so a clear sharp vibrant image",
  },
  {
    text: "All our images are uniquely designed - and always have a decorative border to make your cakes stand out",
  },
];

export interface CartFormValue {
  materials: string;
  cake_options: string;
  note: string;
}

export const ProductDetailsContent: FC<ProductDetailsContentProps> = ({
  isBestSellingProduct,
  item,
  setVariantImg,
}) => {
  const { GET_CUSTOMER_WISHLIST } = Queries;
  const [
    getCustomerWishlist,
    { data: wishlistData, loading: wishlistLoading },
  ] = useLazyQuery<FetchWishlist>(GET_CUSTOMER_WISHLIST, {
    variables: {
      currentPage: 1,
      pageSize: 20,
    },
  });

  const router = useRouter();

  const [productQty, setProductQty] = useState<number>(1);
  const [uploadedImage, setUploadedImage] = useState<string>("");
  const [configuration, setConfiguration] = useState({
    materials: "",
    cake_options: "",
  });
  const [buyNow, setBuyNow] = useState(false);
  const { setIsMiniCartOpen } = useAppContext();
  const { refetchCartDetails, cartLoading } = useCartContext();
  const { handleAddToCart, addToCartLoading } = useAddToCart();
  const { uploadFile, deleteFile, uploadLoading } = useFile();

  const handleSelectChange = (name: string, selectedValue: string) => {
    setConfiguration((prevConfig) => ({
      ...prevConfig,
      [name]: selectedValue,
    }));
  };

  const handleAddCartClick = async (value: any) => {
    const response = await handleAddToCart({
      cartItems: [
        {
          quantity: productQty,
          sku: item?.sku,
          selected_options: [
            configuration.materials,
            configuration.cake_options,
          ],
          image_url: uploadedImage,
          personalized_text: value.note,
        },
      ],
    });
    if (response) {
      if (response?.data?.addProductsToCartV2?.user_errors.length) {
        toast.error(
          response?.data?.addProductsToCartV2?.user_errors[0]?.message
        );
      } else {
        setProductQty(1);
        refetchCartDetails();
        if (!buyNow) {
          setIsMiniCartOpen(true);
        } else {
          router.push("/checkout");
        }
      }
    }
  };

  const transformedOptions = item.configurable_options.map((option: any) => ({
    name: option.attribute_code,
    label: option.label,
    options: option.values.map((value: any) => ({
      value: value.uid.toString(),
      label: value.label,
    })),
  }));

  const price =
    item.variants.find((v: any) =>
      Object.keys(configuration).every(() =>
        v.attributes.some(
          (a: any) =>
            a.uid === configuration.cake_options && configuration.materials
        )
      )
    )?.product.price_range.minimum_price.final_price.value ||
    item.price_range.minimum_price.final_price.value;

  // console.log("price", price);

  useEffect(() => {
    setVariantImg(configuration);
  });

  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files ? event.target.files[0] : null;

    if (file) {
      try {
        const base64EncodedFile = await readFileAsDataURL(file);

        const uploadedData = await uploadFile(
          file.name,
          base64EncodedFile,
          "cake"
        );

        const filePath = uploadedData?.[0]?.file_path;
        setUploadedImage(filePath);
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  const handleRemoveImage = async () => {
    try {
      await deleteFile(`${process.env.MEDIA_URL}/${uploadedImage}`);
      setUploadedImage("");
    } catch (error) {
      console.log("error", error);
    }
  };

  const wishlist = wishlistData?.customer?.wishlist_v2;

  const currentWishlistItem = useMemo(
    () => wishlist?.items_v2?.items.find((x) => x.product?.sku === item?.sku),
    [item?.sku, wishlist?.items_v2?.items]
  );

  useEffect(() => {
    (async () => {
      await getCustomerWishlist();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <h1
          className={
            isBestSellingProduct
              ? `${styles.product_details_title} ${styles.best_selling_product} font_smb black_text d-flex align-items-start`
              : `${styles.product_details_title} font_smb black_text`
          }
        >
          <span>{item.name}</span>
          {isBestSellingProduct && (
            <Image
              src={getImageUrl("product-detail/best-seller-label.png")}
              alt="Best Selling Label"
              title="Cannellio Cake toppers - Best Selling Label"
              className={`${styles.bestSellingLabel} w-100 h-auto`}
              width={0}
              height={0}
            />
          )}
        </h1>
        <div className="d-flex flex-xl-row flex-lg-column flex-sm-row flex-column align-items-xl-center justify-content-between pb-xxl-3 pb-xl-2 pb-md-3 pb-2 gap-xl-0 gap-2">
          <div
            className={`${styles.product_ratings} d-flex align-items-center gap-xxl-2 gap-1`}
          >
            <span className={`black_text ${styles.product_ratings_text} p`}>
              {item.rating_summary}
            </span>
            <div
              className={`${styles.product_ratings_stars} d-flex align-items-center gap-1`}
            >
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.48554 0L11.5226 6.26958H18.1149L12.7817 10.1444L14.8188 16.414L9.48554 12.5392L4.15231 16.414L6.18942 10.1444L0.856194 6.26958H7.44843L9.48554 0Z"
                  fill="#FFA83A"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.48554 0L11.5226 6.26958H18.1149L12.7817 10.1444L14.8188 16.414L9.48554 12.5392L4.15231 16.414L6.18942 10.1444L0.856194 6.26958H7.44843L9.48554 0Z"
                  fill="#FFA83A"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.48554 0L11.5226 6.26958H18.1149L12.7817 10.1444L14.8188 16.414L9.48554 12.5392L4.15231 16.414L6.18942 10.1444L0.856194 6.26958H7.44843L9.48554 0Z"
                  fill="#FFA83A"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.48554 0L11.5226 6.26958H18.1149L12.7817 10.1444L14.8188 16.414L9.48554 12.5392L4.15231 16.414L6.18942 10.1444L0.856194 6.26958H7.44843L9.48554 0Z"
                  fill="#FFA83A"
                />
              </svg>
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.92694 1.22343L10.6045 6.38641L10.6894 6.64764H10.9641H16.3927L12.0008 9.83854L11.7786 9.99999L11.8635 10.2612L13.5411 15.4242L9.14916 12.2333L8.92694 12.0719L8.70473 12.2333L4.31283 15.4242L5.99038 10.2612L6.07526 9.99999L5.85304 9.83854L1.46115 6.64764H6.88983H7.16451L7.24939 6.38641L8.92694 1.22343Z"
                  stroke="#B8B8B8"
                  strokeWidth="0.756119"
                />
              </svg>
            </div>
            <Link
              href=""
              className={`${styles.product_primary_links} primary-link-hover font-18 font_smb text-decoration-underline`}
            >
              {item.review_count} Reviews
            </Link>
          </div>
          <div
            className={`d-flex align-items-center gap-xxl-3 gap-2 ${styles.productCertificate} `}
          >
            <Link
              href=""
              className={`${styles.kosher_certi} ${styles.product_primary_links} d-flex align-items-center gap-xxl-2 gap-1`}
            >
              <Image
                src={getImageUrl("product-detail/kosher-certificate.png")}
                alt="Kosher Certificate"
                width={21}
                height={27}
                title="cannellio Cake Toppers - Kosher Certificate"
              />
              <span className="h6 font_smb">Kosher Certificate</span>
            </Link>
            <Link
              href=""
              className={`${styles.nutrition_certi} ${styles.product_primary_links} d-flex align-items-center gap-xxl-2 gap-1`}
            >
              <Image
                src={getImageUrl("product-detail/nutrition-certificate.png")}
                alt="Nutrition Certificate"
                width={25}
                height={27}
                title="cannellio Cake Toppers - Nutrition Certificate"
              />
              <span className="h6 font_smb">Nutrition Certificate</span>
            </Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex flex-xl-row flex-lg-column flex-sm-row flex-column align-items-xl-center align-items-lg-start align-items-sm-center gap-xl-3 gap-lg-1 gap-sm-2 gap-0">
            <div
              className={`${styles.product_price} d-flex align-items-center gap-1`}
            >
              <span
                className={`primary_dark_text font_smb ${styles.product_price_label} h4`}
              >
                {currencyFormatter({
                  currency: "GBP",
                  number: price ?? 0,
                })}
              </span>
            </div>
            <Link
              href=""
              className={`${styles.product_black_links} font-18 font_rg text-decoration-underline`}
            >
              Tax included. Shipping calculated at checkout.
            </Link>
          </div>
          <div className="d-flex align-items-center gap-2">
            <FavoriteToggle
              product={item!}
              currentWishlistItem={currentWishlistItem}
              loading={wishlistLoading}
              buttonClass={styles.product_socialMedia}
            />
            <button className={styles.product_socialMedia}>
              <Image
                src={getImageUrl("share-icon.png")}
                width={20}
                height={20}
                alt="Product Share Image"
                title="Cannellio Cake Toppers - Product Share"
              />
            </button>
          </div>
        </div>
      </div>
      <hr className={styles.product_title_line} />
      <div>
        <span className="primary_dark_text h5 font_smb pb-3 d-inline-block">
          About this item
        </span>
        <ul className="disc-list-style ps-3 ms-2 d-flex flex-column gap-1">
          {aboutItem.map((item, index) => (
            <li key={index} className="black_text font_rg h6">
              {item.text}
            </li>
          ))}
        </ul>
        <Link
          href="#product_info_sec"
          className={`${styles.product_primary_links} primary-link-hover font-18 font_md d-flex align-items-center gap-1 mt-xl-3 mt-2`}
        >
          <svg
            width="11"
            height="18"
            viewBox="0 0 11 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.2168 2.00586L8.36845 9.15751L1.2168 16.3092"
              stroke="#E275A8"
              strokeWidth="3.06499"
            />
          </svg>
          See more details
        </Link>
      </div>
      <hr className={styles.product_title_line} />
      <div>
        <Form<CartFormValue>
          className=""
          onSubmit={handleAddCartClick}
          schema={cartFormSchema}
        >
          <div className="d-flex flex-column gap-xxl-3 gap-2">
            {transformedOptions.map((co: any) => (
              <>
                <div
                  key={co.id}
                  className="form-group row align-items-center g-sm-4 g-2"
                >
                  <Select
                    key={co.name}
                    name={co.name}
                    label={`${co.label}*`}
                    options={co.options}
                    onChange={(value: any) =>
                      handleSelectChange(co.name, value)
                    }
                    formGroupClass="row align-items-center g-sm-3 g-2"
                    labelClass="col-xxl-3 col-sm-4 col-12"
                    optionClass="col-xxl-9 col-sm-8 col-12"
                    formLabel="pb-0"
                  />
                </div>
              </>
            ))}
          </div>

          <div className="pt-4 mt-xl-2">
            {uploadedImage ? (
              <div className={styles.product_image_preview}>
                <Image
                  src={`${process.env.MEDIA_URL}/${uploadedImage}`}
                  alt="Uploaded Image"
                  width={150}
                  height={150}
                  className={`${styles.upload_image_preview} position-relative w-100 h-100 object-fit-cover`}
                />
                <button
                  type="button"
                  className={`${styles.remove_product_preview} btn-transparent position-absolute`}
                  onClick={handleRemoveImage}
                >
                  <CancelIcon stroke="#fff" className="white_text" />
                </button>
              </div>
            ) : (
              <>
                <button
                  className={`btn-gradient btn rounded-pill d-flex align-items-center gap-3`}
                  type="button"
                  onClick={handleClick}
                >
                  Upload Image <UploadIcon />
                </button>
                <input
                  type="file"
                  ref={hiddenFileInput}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                  accept="image/*"
                />
              </>
            )}
          </div>

          <div className="form-group pt-xl-4 pt-3">
            <TextArea
              name="note"
              label="Personalisation(Please add the name and age :-)"
              labelClass="pb-3 d-inline-block"
            />
          </div>
          <div className="d-flex flex-sm-row flex-column align-items-sm-center align-items-start gap-xl-3 gap-sm-2 gap-3 pt-4 mt-xl-2">
            <ProductCounter
              productQty={productQty}
              setProductQty={setProductQty}
            />
            <div className="d-flex align-items-center gap-xl-3 gap-2">
              <button
                className={`btn-gradient btn rounded-pill ${styles.product_btn}`}
                disabled={addToCartLoading && !buyNow}
              >
                {addToCartLoading && !buyNow ? "Loading..." : "ADD TO CART"}
              </button>
              <button
                type="submit"
                className={`btn-gradient btn rounded-pill ${styles.product_btn}`}
                onClick={() => {
                  setBuyNow(true);
                }}
                disabled={addToCartLoading && buyNow}
              >
                {(addToCartLoading || cartLoading) && buyNow
                  ? "Loading..."
                  : "BUY NOW"}
              </button>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};
