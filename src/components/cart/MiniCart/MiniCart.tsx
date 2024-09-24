import { CancelIcon, CartIcon, DeleteIcon } from "@/assets/icons";
import styles from "./MiniCart.module.scss";
import { useAppContext, useCartContext } from "@/context";
import { Drawer, ProductCounter } from "@/components/common";
import Image from "next/image";
import { CartItemType } from "@/types";
import {
  Dispatch,
  FC,
  Fragment,
  SetStateAction,
  useEffect,
  useState,
  useCallback,
} from "react";
import { useCartItem, useDebouncedValue } from "@/hooks";
import { useRouter } from "next/navigation";
// import { Spinner } from "@/components/common/Spinner";
import Skeleton from "react-loading-skeleton";
import { cookiePersist } from "@/utils/helper";
import { cookieStorageKey } from "@/utils";
import dynamic from "next/dynamic";
import { SpinnerProps } from "@/components/common/Spinner";
import { currencyFormatter } from "@/utils/helper";
import { getImageUrl } from "@/utils/imageHelper";

const Spinner = dynamic<SpinnerProps>(
  () => import("@/components/common/Spinner").then((mod) => mod.Spinner),
  {
    ssr: false,
  }
);

export interface MiniCartProps {
  strokeWidth: any;
  width: any;
  height: any;
}
export interface MiniCartProductProps {
  item: CartItemType;
  setIsMiniCartOpen: Dispatch<SetStateAction<boolean>>;
  setCartLoader: Dispatch<SetStateAction<boolean>>;
}

const MiniCartProduct: FC<MiniCartProductProps> = ({
  item,
  setIsMiniCartOpen,
  setCartLoader,
}) => {
  const { cartId, cartLoading } = useCartContext();
  const [productQty, setProductQty] = useState<number>(item?.quantity);
  const [debouncedProductQty] = useDebouncedValue(productQty, 500);
  const {
    handleProductQty,
    handleRemoveFromCart,
    productRemoveLoading,
    productUpdateLoading,
  } = useCartItem();
  const router = useRouter();

  useEffect(() => {
    if (item?.quantity) {
      setProductQty(item?.quantity);
    }
  }, [item?.quantity]);

  useEffect(() => {
    setCartLoader(cartLoading || productRemoveLoading || productUpdateLoading);
  }, [cartLoading, productRemoveLoading, productUpdateLoading, setCartLoader]);

  useEffect(() => {
    (async () => {
      if (debouncedProductQty !== item.quantity) {
        await handleProductQty({
          input: {
            cart_id: cartId,
            cart_items: [
              {
                cart_item_uid: item?.uid,
                quantity: debouncedProductQty,
                image_url: "",
                personalized_text: "",
              },
            ],
          },
        });
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedProductQty]);

  const handleRedirect = () => {
    router.replace(`/${item?.product?.url_key}`);
    setIsMiniCartOpen(false);
  };

  if (cartLoading || productRemoveLoading || productUpdateLoading) {
    return (
      <div className={`${styles.miniCartProduct} d-flex position-relative`}>
        <div className={styles.miniCartProductImage}>
          <Skeleton width={230} height={230} />
        </div>
        <div className={styles.miniCartProductContent}>
          <div
            className={`${styles.cardContent} h-100 d-flex flex-column justify-content-between gap-md-3 gap-2`}
          >
            <span className={`p black_text font_md line-clamp line-clamp3`}>
              <Skeleton width={300} />
            </span>
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <Skeleton borderRadius={30} width={140} height={40} />
                <span
                  className={`${styles.shoppingBag_price} p black_text font_smb d-flex align-items-center gap-1`}
                >
                  <Skeleton width={65} />
                </span>
              </div>
            </div>
          </div>
          <div className={styles.deleteBtn}>
            <Skeleton circle={true} width={45} height={45} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <Fragment>
      <div className={`${styles.miniCartProduct} d-flex position-relative`}>
        <div className={styles.miniCartProductImage}>
          <Image
            src={item?.product?.thumbnail?.url}
            width={130}
            height={130}
            className="w-100 h-100 object-fit-cover object-top cursor-pointer"
            alt={item?.product?.thumbnail?.label ?? "product-image"}
            onClick={handleRedirect}
          />
        </div>

        <div className={styles.miniCartProductContent}>
          <div
            className={`${styles.cardContent} h-100 d-flex flex-column justify-content-between gap-md-3 gap-2`}
          >
            <span
              className={`p black_text font_md line-clamp line-clamp3`}
              onClick={handleRedirect}
            >
              {item?.product?.name}
            </span>
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <ProductCounter
                  productQty={item?.quantity}
                  setProductQty={setProductQty}
                  isFromMiniCart={true}
                />
                <span
                  className={`${styles.shoppingBag_price} p black_text font_smb d-flex align-items-center gap-1`}
                >
                  {currencyFormatter({
                    currency: "GBP",
                    number: item?.prices?.price?.value ?? 0,
                  })}
                </span>
              </div>
            </div>
          </div>
          <button
            role="button"
            className={styles.deleteBtn}
            onClick={() => {
              handleRemoveFromCart({
                cart_id: cartId,
                cart_item_uid: item?.uid,
              });
            }}
          >
            <DeleteIcon
              width={17}
              height={21}
              stroke="white"
              fill="#F8F8F8"
              strokeWidth={0.5}
            />
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export const MiniCart: FC<MiniCartProps> = ({ ...props }) => {
  const { strokeWidth, width, height } = props;
  const { isMiniCartOpen, setIsMiniCartOpen } = useAppContext();
  const { cartDetails } = useCartContext();
  const [cartLoader, setCartLoader] = useState<boolean>(false);
  const router = useRouter();
  const handleTopper = () => {
    router.push("/cake-toppers/special-events");
    setIsMiniCartOpen(false);
  };
  const memoizedSetCartLoader = useCallback(setCartLoader, [setCartLoader]);
  useEffect(() => {
    if (cartDetails?.items?.length > 0) {
      cookiePersist.setItem(cookieStorageKey.IS_CART_EMPTY, true);
    } else {
      cookiePersist.setItem(cookieStorageKey.IS_CART_EMPTY, false);
    }
  }, [cartDetails]);

  return (
    <>
      {/* <button
        title="Cannellio Cake Toppers - Viewcart"
        className="position-relative btn-transparent"
        onClick={() => setIsMiniCartOpen((prev) => !prev)}
      >
        {!cartDetails ? (
          <CartIcon
            width={width}
            height={height}
            stroke="black"
            strokeWidth={strokeWidth}
          />
        ) : (
          <>
            <span
              className={`${styles.cart_count} position-absolute end-0 d-flex align-items-center justify-content-center white_text font-12 font_smb primary_bg`}
            >
              {cartDetails?.total_quantity}
            </span>

            <CartIcon
              width={width}
              height={height}
              stroke="black"
              strokeWidth={strokeWidth}
            />
          </>
        )}
      </button> */}

      <Drawer
        isOpen={isMiniCartOpen}
        setIsOpen={() => setIsMiniCartOpen((prev) => !prev)}
        bodyClass={`${cartDetails?.items?.length === 0 ? "p-0" : "p-6"}`}
        title={
          <div className={styles.shoppingHeader}>
            <span className={styles.header_text}>Shopping Bag</span>
            <button
              className={styles.closeButton}
              onClick={() => setIsMiniCartOpen(false)}
            >
              <CancelIcon className="black_text" />
            </button>
          </div>
        }
      >
        <div className={styles.shoppingBag}>
          <div className={`${styles.shoppingBody} ${styles.emptyShoppingBody}`}>
            {cartDetails?.items?.length === 0 ? (
              <>
                <div className={`${styles.emptyShoppingBag}`}>
                  <Image
                    src={getImageUrl("empty-bag.png")}
                    alt=""
                    title=""
                    width={100}
                    height={100}
                    className="w-100 h-100"
                  />
                </div>
                <div
                  className={`text-center ${styles.emptyShoppingBodyContent} pt-3 pb-5`}
                >
                  <span className="h4 black_text font_smb pb-3 mb-xl-1 d-inline-block text-capitalize">
                    Your cart is empty
                  </span>
                  <p className="p black_text pb-lg-5 pb-4 mb-xl-2 text-capitalize">
                    look like you haven’t <br />
                    made your choice yet...
                  </p>
                  <button
                    className={`${styles.submitButton} w-100`}
                    onClick={handleTopper}
                  >
                    Add Your Toppers
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className={`${styles.viewShoppingBag} d-flex flex-column`}>
                  <div
                    className={`${styles.miniCartProduct_list} d-flex flex-column gap-2`}
                  >
                    {cartDetails?.items?.map((cartItem, index) => (
                      <MiniCartProduct
                        key={index}
                        item={cartItem}
                        setIsMiniCartOpen={setIsMiniCartOpen}
                        setCartLoader={memoizedSetCartLoader}
                      />
                    ))}
                  </div>
                  <div className={styles.miniCartProduct_footer}>
                    <div className="d-flex justify-content-between">
                      {cartLoader ? (
                        <span className="h5 black_text font_md">
                          <Skeleton width={200} />
                        </span>
                      ) : (
                        <span className="h5 black_text font_md">
                          Subtotal:{" "}
                          <span className="font_rg">
                            ({cartDetails?.items?.length} items)
                          </span>
                        </span>
                      )}
                      {cartLoader ? (
                        <span className="h5 black_text font_smb d-flex align-items-center gap-1">
                          <Skeleton width={65} />
                        </span>
                      ) : (
                        <span className="h5 black_text font_smb d-flex align-items-center gap-1">
                          {currencyFormatter({
                            currency: "GBP",
                            number:
                              cartDetails?.prices?.subtotal_excluding_tax
                                ?.value ?? 0,
                          })}
                        </span>
                      )}
                    </div>
                    <div className="d-flex justify-content-between pt-4 gap-3">
                      <button
                        className="btn btn-black w-100"
                        onClick={() => {
                          setIsMiniCartOpen(false);
                          router.push("/cart");
                        }}
                      >
                        View Bag
                      </button>
                      <button
                        className="btn btn-gradient w-100"
                        onClick={() => {
                          setIsMiniCartOpen(false);
                          router.push("/checkout");
                        }}
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </Drawer>
    </>
  );
};
