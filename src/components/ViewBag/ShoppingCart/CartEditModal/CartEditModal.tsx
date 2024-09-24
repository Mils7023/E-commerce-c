"use client";

import { CancelIcon, UploadIcon } from "@/assets/icons";
import Image from "next/image";
import { FC, Fragment, useEffect, useRef, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Select, TextArea } from "@/components/core";
import styles from "../ShoppingCart.module.scss";
import { useEditCartItems } from "@/hooks";
import { currencyFormatter, readFileAsDataURL } from "@/utils/helper";
import Skeleton from "react-loading-skeleton";
import { Form } from "@/components/common";
import { cartUpdateSchema } from "@/utils";
import { useFile } from "@/hooks/useFile";

interface CartEditModalProps {
  show: boolean;
  selectedItemUid: string | null;
  handleClose: () => void;
}

interface CartUpdateValue {
  materials: string;
  cake_options: string;
  image_content: string;
}

export const CartEditModal: FC<CartEditModalProps> = ({
  show,
  handleClose,
  selectedItemUid,
}) => {
  const {
    getCartProduct,
    handleUpdateCartItem,
    cartItems,
    cartItemsLoading,
    cartItemUpdateLoading,
  } = useEditCartItems(handleClose);
  const { uploadFile, deleteFile, uploadLoading } = useFile();
  const [options, setOptions] = useState([]);
  const [uploadedImage, setUploadedImage] = useState<string>("");
  const [imageContent, setImageContent] = useState("");
  const [configuration, setConfiguration] = useState({
    materials: "",
    cake_options: "",
  });
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleSelectChange = (name: string, selectedValue: string) => {
    setConfiguration((prevConfig) => ({
      ...prevConfig,
      [name]: selectedValue,
    }));
  };

  useEffect(() => {
    const newConfiguration: any = {};

    if (options) {
      options.forEach((co: any) => {
        const selectedValue = cartItems?.configurable_options?.find(
          (option: any) => option.option_label === co.label
        )?.configurable_product_option_value_uid;

        if (selectedValue) {
          newConfiguration[co.name] = selectedValue;
        }
      });

      setConfiguration(newConfiguration);
    }
  }, [options, cartItems]);

  const price =
    cartItems?.product?.variants?.find((v: any) =>
      Object.keys(configuration).every((k: any) =>
        v.attributes.some(
          (a: any) =>
            a.uid === configuration.cake_options && configuration.materials
        )
      )
    )?.product.price_range.minimum_price.final_price.value ||
    cartItems?.prices.price.value;

  useEffect(() => {
    if (show) {
      (async () => {
        await getCartProduct(selectedItemUid);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  useEffect(() => {
    if (cartItems && cartItems?.product) {
      const transformedOptions = cartItems?.product?.configurable_options.map(
        (option: any) => ({
          name: option.attribute_code,
          label: option.label,
          options: option.values.map((value: any) => ({
            value: value.uid.toString(),
            label: value.label,
          })),
        })
      );
      setOptions(transformedOptions);
    }
    if (cartItems) {
      setUploadedImage(cartItems?.image_url);
      setImageContent(cartItems?.personalized_text);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);

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

  const handleClick = () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  const handleSubmit = (value: any) => {
    handleUpdateCartItem({ value, selectedItemUid, uploadedImage });
  };

  return (
    <Fragment>
      <Modal
        className={`${styles.edit_product_modal} common-modal`}
        show={show}
        onHide={handleClose}
        animation={true}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className={`${styles.model_body} position-relative `}>
          <div>
            <button
              type="button"
              className={styles.closeButton}
              onClick={handleClose}
            >
              <CancelIcon className="black_text" />
            </button>
          </div>
          <div className={`${styles.modal_product} d-flex`}>
            <div className={`${styles.modal_product_image}`}>
              {cartItemsLoading ? (
                <Skeleton width={130} height={135} />
              ) : (
                <Image
                  alt="Shopping bag image"
                  title="Cannellio cake toppers - Shopping bag image"
                  className="w-100 h-100 hover-image-animation"
                  src={cartItems?.product?.thumbnail?.url}
                  width={100}
                  height={100}
                />
              )}
            </div>
            <div className={`${styles.modal_product_title}`}>
              <p className="h5 font_md line-clamp line-clamp3">
                {cartItemsLoading ? (
                  <Skeleton width={300} height={24} />
                ) : (
                  cartItems?.product?.name
                )}
              </p>
              <span className="h5 font_smb d-flex align-items-center gap-1 pt-2">
                {cartItemsLoading ? (
                  <Skeleton width={100} height={24} />
                ) : (
                  // currencyFormatter({
                  //   currency: cartItems?.prices?.price?.currency,
                  //   number: cartItems?.prices?.price?.value || 0,
                  // })
                  currencyFormatter({
                    currency: "GBP",
                    number: price ?? 0,
                  })
                )}
              </span>
            </div>
          </div>
          <hr className={`${styles.model_divider} my-xxl-4 my-3`} />

          <Form<CartUpdateValue>
            className=""
            onSubmit={handleSubmit}
            schema={cartUpdateSchema}
          >
            <div className="modal_product_details">
              <div className="d-flex flex-column gap-xxl-4 gap-2">
                {cartItemsLoading
                  ? [...Array(2)].map((_, idx) => (
                      <div className="mb-2" key={idx}>
                        <Skeleton width={690} height={50} />
                      </div>
                    ))
                  : options &&
                    options.map((co: any, index: any) => {
                      const selectedValue =
                        cartItems?.configurable_options?.find(
                          (option: any) => option.option_label === co.label
                        )?.configurable_product_option_value_uid;

                      return (
                        <div
                          key={index}
                          className="form-group row align-items-center g-sm-4 g-2"
                        >
                          <Select
                            key={co.name}
                            name={co.name}
                            label={`${co.label}*`}
                            options={co.options}
                            defaultValue={selectedValue}
                            onChange={(value: any) =>
                              handleSelectChange(co.name, value)
                            }
                            formGroupClass="row align-items-center g-sm-3 g-2"
                            labelClass="col-xxl-3 col-sm-4 col-12"
                            optionClass="col-xxl-9 col-sm-8 col-12"
                            formLabel="pb-0"
                          />
                        </div>
                      );
                    })}
              </div>
            </div>

            <hr className={`${styles.model_divider} my-xxl-4 my-xl-3`} />
            <div className="modal_product_personalization">
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
                      className={`h6 font_md btn btn-gradient btn-primary-md rounded-pill d-flex align-items-center gap-2`}
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
                  name="image_content"
                  label="Personalisation(Please add the name and age :-)"
                  inputClass="form-control form-textarea"
                  labelClass="form-label pb-3 d-inline-block"
                  value={imageContent}
                  onChange={(event: any) =>
                    setImageContent(event?.target.value)
                  }
                />
              </div>
            </div>
            <Button
              className="btn btn-gradient rounded-pill mt-xxl-4 mt-3"
              variant="primary"
              type="submit"
            >
              {cartItemUpdateLoading ? "Loading..." : "Save Changes"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};
