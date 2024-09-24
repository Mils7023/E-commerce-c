"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "./PersonalCenter.module.scss";
import Tab from "react-bootstrap/Tab";
import { Input, Select } from "@/components/core";
import { Form } from "@/components/common";
import { changePasswordFormSchema, profileFormSchema } from "@/utils";
import { CategoryRadio } from "@/components/core";
import Modal from "react-bootstrap/Modal";
import { CancelIcon } from "@/assets/icons";
import { useCustomerDetails } from "@/hooks";
import { Customer } from "@/types";
import { useFile } from "@/hooks/useFile";
import { getImageUrl } from "@/utils/imageHelper";

export interface ProfileFormValue {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  gender: number;
  avatar: string;
}

export interface PasswordFormValue {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export const PersonalCenter = ({
  customerData,
  refetchCustomer,
}: {
  customerData: Customer;
  refetchCustomer: () => void;
}) => {
  const { handleUpdateCustomer, handleChangePassword } = useCustomerDetails();
  const { uploadFile, uploadLoading } = useFile();

  const mediaUrl = process.env.MEDIA_URL;
  const [customerFormValues, setCustomerFormValues] =
    useState<ProfileFormValue>({
      firstname: customerData?.firstname || "",
      lastname: customerData?.lastname || "",
      email: customerData?.email || "",
      phonenumber: customerData?.phonenumber || "",
      avatar: customerData?.avatar || "",
      gender: customerData?.gender || 0,
    });

  const [passwordCriteria, setPasswordCriteria] = useState({
    length: false,
    uppercase: false,
    number: false,
    specialChar: false,
    noLeadingTrailingSpaces: false,
  });

  // Function to validate password criteria
  const validatePasswordCriteria = (password: string) => {
    setPasswordCriteria({
      length: password.length >= 8 && password.length <= 20,
      uppercase: /[A-Z]/.test(password),
      number: /\d/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      noLeadingTrailingSpaces:
        password.trim() === password && password.length > 0,
    });
  };

  const handleEditPasswordClick = (event: React.MouseEvent) => {
    event.preventDefault();
    handleShow();
  };

  const handlePasswordForm = async (data: PasswordFormValue) => {
    const { currentPassword, newPassword } = data;

    const isValid = Object.values(passwordCriteria).every(Boolean);
    if (!isValid) return;

    try {
      await handleChangePassword({
        currentPassword: currentPassword.trim(),
        newPassword: newPassword.trim(),
      });

      setPasswordCriteria({
        length: false,
        uppercase: false,
        number: false,
        specialChar: false,
        noLeadingTrailingSpaces: false,
      });
      handleClose();
    } catch (error) {
      console.error("Error changing password:", error);
    }
  };

  const passwordCriteriaSVG = (condition: boolean) => {
    if (condition) {
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.9987 14.6654C11.6654 14.6654 14.6654 11.6654 14.6654 7.9987C14.6654 4.33203 11.6654 1.33203 7.9987 1.33203C4.33203 1.33203 1.33203 4.33203 1.33203 7.9987C1.33203 11.6654 4.33203 14.6654 7.9987 14.6654Z"
            stroke="#FF6CAA"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 8L5.79289 9.79289C6.18342 10.1834 6.81658 10.1834 7.20711 9.79289L11 6"
            stroke="#FF6CAA"
            strokeLinecap="round"
          />
        </svg>
      );
    } else {
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.99967 14.6663C11.6663 14.6663 14.6663 11.6663 14.6663 7.99967C14.6663 4.33301 11.6663 1.33301 7.99967 1.33301C4.33301 1.33301 1.33301 4.33301 1.33301 7.99967C1.33301 11.6663 4.33301 14.6663 7.99967 14.6663Z"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.11328 9.88759L9.88661 6.11426"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.88661 9.88759L6.11328 6.11426"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }
  };

  const handleGenderChange = (value: number) => {
    setCustomerFormValues((prevState) => ({
      ...prevState,
      gender: value,
    }));
  };

  const handleCustomerFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    if (name === "phonenumber") {
      value = value.replace(/\D/g, "");
    }
    setCustomerFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCustomerUpdate = async (value: any) => {
    try {
      const updatedFormValues = {
        ...customerFormValues,
        firstname: customerFormValues.firstname.trim(),
        lastname: customerFormValues.lastname.trim(),
        email: customerFormValues.email.trim(),
        phonenumber: customerFormValues.phonenumber.trim(),
      };
      if (updatedFormValues.phonenumber) {
        updatedFormValues.phonenumber = `+44 ${updatedFormValues.phonenumber.replace(
          /^\+44\s*/,
          ""
        )}`;
      }
      handleUpdateCustomer(updatedFormValues);
      refetchCustomer();
    } catch (error) {
      console.log("Validation errors:", error);
    }
  };

  const option = [
    {
      label: "Male",
      value: 1,
    },
    {
      label: "Female",
      value: 2,
    },
  ];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleImageUploadClick = () => {
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
        const reader = new FileReader();
        reader.onloadend = async () => {
          const base64EncodedFile = reader.result as string;

          const uploadedData = await uploadFile(
            file.name,
            base64EncodedFile,
            "user-avatar"
          );
          const filePath = uploadedData?.[0]?.file_path;
          setCustomerFormValues((prevState) => ({
            ...prevState,
            avatar: filePath,
          }));
          handleUpdateCustomer({ avatar: filePath });
          refetchCustomer();
          setUploadedImage(URL.createObjectURL(file));
        };

        reader.readAsDataURL(file);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const handleRemoveImage = () => {
    setUploadedImage(null);
    setCustomerFormValues((prevState) => ({
      ...prevState,
      avatar: "",
    }));
    if (hiddenFileInput.current) {
      hiddenFileInput.current.value = "";
    }
  };

  return (
    <>
      <Tab.Pane eventKey="personalCenter">
        <div className={`${styles.profile_title} common-profile-shadow`}>
          <p className="h5 font_smb">Personal Center</p>
        </div>
        <div className={`${styles.profile_body} common-profile-shadow mt-3`}>
          {customerFormValues && (
            <>
              <div className={`${styles.profile_image} position-relative`}>
                <Image
                  src={
                    customerFormValues.avatar
                      ? `${mediaUrl}/${customerFormValues.avatar}`
                      : getImageUrl("user-image.png")
                  }
                  // src={uploadedImage || ""}
                  alt="profile-Image"
                  title="Cannellio Cake Toppers - Profile image"
                  width={130}
                  height={130}
                  className={`${styles.profile_img_src} h-100 w-100 object-fit-cover rounded-circle`}
                />
                <button
                  className={`bg-transparent btn-transparent`}
                  type="button"
                  onClick={handleImageUploadClick}
                >
                  <span className={`${styles.profile_camera_vector}`}>
                    <Image
                      src={getImageUrl("my-profile-page/camera-vector.png")}
                      alt="profile-vector"
                      title="Cannellio Cake Toppers - profile vector"
                      width={18}
                      height={14}
                      className={`${styles.profile_vector_src}`}
                    />
                  </span>
                </button>
                <input
                  type="file"
                  ref={hiddenFileInput}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                  accept="image/*"
                />

                {/* {uploadedImage ? (
                  <div className="image-preview ">
                    <Image
                      src={uploadedImage}
                      alt="Uploaded Image"
                      width={150}
                      height={150}
                      className="uploaded-image position-relative"
                    />
                    <button
                      type="button"
                      className={`${styles.closeButton} btn-transparent position-absolute`}
                      onClick={handleRemoveImage}
                    >
                      <CancelIcon  />
                    </button>
                  </div>
                ) : (
                  <>
                    <button
                      className={`bg-transparent btn-transparent`}
                      type="button"
                      onClick={handleImageUploadClick}
                    >
                      Upload File
                    </button>
                    <input
                      type="file"
                      ref={hiddenFileInput}
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                      accept="image/*"
                    />
                  </>
                )} */}
              </div>
              <div className={`${styles.profile_form} pt-xl-5 pt-4 mt-xxl-1`}>
                <Form<ProfileFormValue>
                  className=""
                  onSubmit={handleCustomerUpdate}
                  schema={profileFormSchema}
                  defaultValues={customerFormValues}
                >
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <Input
                        label="First Name"
                        placeholder="Enter Your Name"
                        name="firstname"
                        formGroupClass="pb-sm-4 pb-lg-3 pb-xl-4 pb-3"
                        value={customerFormValues.firstname}
                        // onChange={handleCustomerFormChange}
                        onInput={handleCustomerFormChange}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <Input
                        label="Last Name"
                        placeholder="Enter Your Surname"
                        name="lastname"
                        formGroupClass="pb-sm-4 pb-lg-3 pb-xl-4 pb-3"
                        value={customerFormValues.lastname}
                        // onChange={handleCustomerFormChange}
                        onInput={handleCustomerFormChange}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <Input
                        label="Email"
                        placeholder="Enter Your Email"
                        name="email"
                        type="email"
                        formGroupClass="pb-sm-4 pb-lg-3 pb-xl-4 pb-3"
                        value={customerFormValues.email}
                        onChange={handleCustomerFormChange}
                        disabled
                      />
                    </div>

                    <div className="col-lg-6 col-12">
                      <Input
                        label="Mobile No"
                        placeholder="Enter Your Mobile Number"
                        name="phonenumber"
                        type="phone"
                        formGroupClass="pb-sm-4 pb-3 pb-lg-3 pb-xl-4"
                        value={customerFormValues.phonenumber}
                        // onChange={handleCustomerFormChange}
                        onInput={handleCustomerFormChange}
                        inputMode="numeric"
                        // pattern="[0-9]*"
                        // onInput={(e) => {
                        //   e.currentTarget.value = e.currentTarget.value.replace(
                        //     /\D/g,
                        //     ""
                        //   );
                        // }}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="d-lg-block d-flex align-items-center gap-2">
                        <Input
                          label="Password"
                          placeholder="Enter Your Password"
                          name="password"
                          type="text"
                          formGroupClass="pb-sm-4 pb-3 pb-lg-3 pb-xl-4 w-100"
                          value={"********"}
                          disabled
                        />
                        <button
                          className="btn-transparent d-lg-none d-flex align-items-center font-18 font_md primary_dark_text gap-2 mt-2"
                          onClick={handleEditPasswordClick}
                        >
                          EDIT
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <button
                        onClick={handleEditPasswordClick}
                        className="btn-transparent d-none d-lg-flex align-items-center h-100 font-18 font_md primary_dark_text gap-2 mt-2"
                      >
                        <svg
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.475 3.28744L15.592 5.29859M14.836 1.51569L9.109 6.95634C8.81309 7.23706 8.61128 7.59472 8.529 7.98424L8 10.4998L10.648 9.99634C11.058 9.91844 11.434 9.72749 11.73 9.44629L17.457 4.00564C17.6291 3.84214 17.7656 3.64805 17.8588 3.43444C17.9519 3.22082 17.9998 2.99187 17.9998 2.76066C17.9998 2.52945 17.9519 2.3005 17.8588 2.08688C17.7656 1.87327 17.6291 1.67918 17.457 1.51569C17.2849 1.35219 17.0806 1.2225 16.8557 1.13402C16.6309 1.04554 16.3899 1 16.1465 1C15.9031 1 15.6621 1.04554 15.4373 1.13402C15.2124 1.2225 15.0081 1.35219 14.836 1.51569Z"
                            stroke="#e275a8"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16 12.3999V15.2499C16 15.7538 15.7893 16.2371 15.4142 16.5934C15.0391 16.9497 14.5304 17.1499 14 17.1499H3C2.46957 17.1499 1.96086 16.9497 1.58579 16.5934C1.21071 16.2371 1 15.7538 1 15.2499V4.7999C1 4.29599 1.21071 3.81272 1.58579 3.4564C1.96086 3.10008 2.46957 2.8999 3 2.8999H6"
                            stroke="#e275a8"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        EDIT
                      </button>
                    </div>
                    <div className="d-flex gap-3">
                      {option.map((e, index) => (
                        <CategoryRadio
                          key={index}
                          onChange={() => handleGenderChange(e.value)}
                          title={e.label}
                          name="gender"
                          value={e.value}
                          className="mb-0"
                          checked={customerFormValues.gender === e.value}
                        />
                      ))}
                    </div>
                  </div>

                  <button
                    className={`${styles.profile_common_btn} btn btn-gradient btn-primary-md rounded-pill mt-4`}
                    type="submit"
                  >
                    UPDATE DETAILS
                  </button>
                </Form>
              </div>
            </>
          )}
        </div>
      </Tab.Pane>

      {/* CHANGE PASSWORD MODEL */}
      <Modal
        className={`${styles.change_password_modal} common-modal`}
        show={show}
        onHide={handleClose}
        animation={true}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className={`${styles.model_body}`}>
          <div
            className={`${styles.modal_change_password_title} d-flex align-items-center justify-content-between`}
          >
            <span className="h5 font_smb">Change Password</span>
            <button className={styles.closeButton} onClick={handleClose}>
              <CancelIcon />
            </button>
          </div>
          <hr className={`${styles.model_divider} my-xxl-4 my-3`} />
          <div className={`${styles.model_change_password_content}`}>
            {/* <span className="font_18 font_rg black_shade5_text">
              We have sent a password reset email to
              <p className="font_smb black_text pt-md-2 pt-1">
                johnjacob@htomail.com
              </p>
            </span> */}
            <div className="pt-3 pt-md-4 mt-xxl-2">
              <p className="font_18 font_rg black_text">
                Make sure your password includes at least:
              </p>
              <div className="pt-2 pt-md-3 mt-lg-1 d-flex flex-column gap-2 ">
                <span
                  className={`d-flex align-items-center gap-2 font-14 font_rg black_shade5_text ${
                    passwordCriteria.length
                      ? "primary_text"
                      : "black_shade5_text"
                  }`}
                >
                  {passwordCriteriaSVG(passwordCriteria.length)} 8 Characters
                </span>
                <span
                  className={`d-flex align-items-center gap-2 font-14 font_rg black_shade5_text ${
                    passwordCriteria.number
                      ? "primary_text"
                      : "black_shade5_text"
                  }`}
                >
                  {passwordCriteriaSVG(passwordCriteria.number)}1 Number
                </span>
                <span
                  className={`d-flex align-items-center gap-2 font-14 font_rg black_shade5_text ${
                    passwordCriteria.uppercase
                      ? "primary_text"
                      : "black_shade5_text"
                  }`}
                >
                  {passwordCriteriaSVG(passwordCriteria.uppercase)}1 Uppercase
                  Letter
                </span>
                <span
                  className={`d-flex align-items-center gap-2 font-14 font_rg black_shade5_text ${
                    passwordCriteria.specialChar
                      ? "primary_text"
                      : "black_shade5_text"
                  }`}
                >
                  {passwordCriteriaSVG(passwordCriteria.specialChar)}1 Special
                  Character
                </span>
                <span
                  className={`d-flex align-items-center gap-2 font-14 font_rg black_shade5_text ${
                    passwordCriteria.noLeadingTrailingSpaces
                      ? "primary_text"
                      : "black_shade5_text"
                  }`}
                >
                  {passwordCriteriaSVG(
                    passwordCriteria.noLeadingTrailingSpaces
                  )}
                  No Leading or Trailing Spaces
                </span>
              </div>
            </div>
            <div
              className={`${styles.model_change_password_form} pt-4 mt-xxl-3`}
            >
              <Form<PasswordFormValue>
                className=""
                onSubmit={handlePasswordForm}
                schema={changePasswordFormSchema}
                defaultValues={{ newPassword: "" }}
              >
                <div className="row">
                  <div className="col-12">
                    <Input
                      label="Current Password"
                      placeholder="Enter Current Password"
                      name="currentPassword"
                      type="password"
                      formGroupClass="pb-sm-4 pb-3 pb-lg-3 pb-xl-4"
                    />
                  </div>
                  <div className="col-12">
                    <Input
                      label="New Password"
                      placeholder="Enter New Password"
                      name="newPassword"
                      type="password"
                      onInput={(e) =>
                        validatePasswordCriteria(e.currentTarget.value)
                      }
                      formGroupClass="pb-sm-4 pb-3 pb-lg-3 pb-xl-4"
                    />
                  </div>
                  <div className="col-12">
                    <Input
                      label="Confirm Password"
                      placeholder="Enter Confirm Password"
                      name="confirmPassword"
                      type="password"
                      formGroupClass="pb-sm-4 pb-3 pb-lg-3 pb-xl-4"
                    />
                  </div>
                </div>
                <button
                  className={`${styles.profile_common_btn} btn btn-gradient btn-primary-md rounded-pill mt-4`}
                  type="submit"
                >
                  Save Changes
                </button>
              </Form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
