import * as Yup from "yup";

export const registrationSchema = Yup.object({
  firstname: Yup.string()
    .min(2, "First Name must be at least 2 characters")
    .max(50, "First Name must be less than 50 characters")
    .required("First Name is a required field"),
  lastname: Yup.string()
    .min(2, "Last Name must be at least 2 characters")
    .max(50, "Last Name must be less than 50 characters")
    .required("Last Name is a required field"),
  email: Yup.string().email().required(),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .max(20, "Password must be less than 20 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .matches(/^\S*$/, "Password must not contain spaces")
    .required("Password is a required field"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is a required field"),
  phonenumber: Yup.string().required("Mobile Number is a required field"),
  is_agree: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions.")
    .required("You must agree to the terms and conditions."),
});

export const loginSchema = Yup.object({
  email: Yup.string().email().required("Email is a required field"),
  password: Yup.string().required("Password is a required field"),
});

export const otpSchema = Yup.object({
  verification_code: Yup.array()
    .of(
      Yup.string()
        .matches(/^\d$/, "Verification code is required")
        .required("Required")
    )
    .length(6, "OTP must be exactly 6 digits"),
});

export const forgotPasswordSchema = Yup.object({
  email: Yup.string().email().required("Email is a required field"),
});

export const cartFormSchema = Yup.object({
  materials: Yup.string().required("Materials is a required field"),
  cake_options: Yup.string().required("Cake options is a required field"),
  note: Yup.string(),
});

/*********** Checkout Page Schema ***********/
export const identificationSchema = Yup.object({
  email: Yup.string().required(),
  // password: Yup.string().required(),
});

export const identificationSchemaP = Yup.object({
  email: Yup.string().required(),
  password: Yup.string().required(),
});

// Schema when billing and shipping addresses are different (billing fields required)
export const withBillingSchema = Yup.object().shape({
  shipping_firstname: Yup.string().required("Required"),
  shipping_lastname: Yup.string().required("Required"),
  shipping_address_one: Yup.string().required("Required"),
  shipping_address_two: Yup.string().required("Required"),
  shipping_country: Yup.string().required("Required"),
  shipping_region: Yup.string().required("Required"),
  shipping_city: Yup.string().required("Required"),
  shipping_code: Yup.string().required("Required"),
  shipping_telephone: Yup.string().required("Required"),

  billing_firstname: Yup.string().required("Required"),
  billing_lastname: Yup.string().required("Required"),
  billing_address_one: Yup.string().required("Required"),
  billing_address_two: Yup.string().nullable(),
  billing_country: Yup.string().required("Required"),
  billing_region: Yup.string().required("Required"),
  billing_city: Yup.string().required("Required"),
  billing_code: Yup.string().required("Required"),
  billing_telephone: Yup.string().required("Required"),
});

// Schema when billing address is the same as shipping address (billing fields not required)
export const withoutBillingSchema = Yup.object().shape({
  shipping_firstname: Yup.string().required("Required"),
  shipping_lastname: Yup.string().required("Required"),
  shipping_address_one: Yup.string().required("Required"),
  shipping_address_two: Yup.string().required("Required"),
  shipping_country: Yup.string().required("Required"),
  shipping_region: Yup.string().required("Required"),
  shipping_city: Yup.string().required("Required"),
  shipping_code: Yup.string().required("Required"),
  shipping_telephone: Yup.string().required("Required"),
});

/*********** Checkout Page Schema ***********/

export const reviewFormSchema = Yup.object({});

export const contactFormSchema = Yup.object({
  first_name: Yup.string()
    .min(2, "First Name must be at least 2 characters")
    .max(50, "First Name must be less than 50 characters")
    .required("First Name is a required field"),
  last_name: Yup.string()
    .min(2, "Last Name must be at least 2 characters")
    .max(50, "Last Name must be less than 50 characters")
    .required("Last Name is a required field"),
  email: Yup.string().required(),
  phone_number: Yup.string()
    .min(7, "Mobile Number must be at least 7 characters")
    .max(14, "Mobile Number must be less than 14 characters"),
  issue: Yup.string().required("Issue is a required field"),
});

export const profileFormSchema = Yup.object({
  firstname: Yup.string()
    .min(2, "First Name must be at least 2 characters")
    .max(50, "First Name must be less than 50 characters")
    .required("First Name is a required field"),
  lastname: Yup.string()
    .min(2, "Last Name must be at least 2 characters")
    .max(50, "Last Name must be less than 50 characters")
    .required("Last Name is a required field"),
  phonenumber: Yup.string()
    .min(7, "Mobile Number must be at least 7 characters")
    .max(14, "Mobile Number must be less than 14 characters"),
  gender: Yup.number(),
});

export const customerAddressFormSchema = Yup.object({
  firstname: Yup.string()
    .max(50, "First Name must be less than 50 characters")
    .required("First Name is a required field")
    .min(2, "First name must be at least 2 characters"),
  lastname: Yup.string()
    .min(2, "Last Name must be at least 2 characters")
    .max(50, "Last Name must be less than 50 characters"),
  telephone: Yup.string()
    .required("Mobile Number is a required field")
    .min(7, "Mobile Number must be at least 7 characters")
    .max(14, "Mobile Number must be less than 14 characters"),
  street: Yup.string().required("Address is a required field"),
  city: Yup.string().required("City is a required field"),
  region: Yup.string().required("Region is a required field"),
  postcode: Yup.string().required("Postcode is required"),
  country_code: Yup.string(),
  default_billing: Yup.bool(),
  // default_shipping: Yup.bool(),
});

export const changePasswordFormSchema = Yup.object({
  currentPassword: Yup.string().required(
    "Current password is a required field"
  ),
  newPassword: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .max(20, "Password must be less than 20 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .matches(/^\S*$/, "Password must not contain spaces")
    .required("Password is a required field"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Confirm password is a required field"),
});

export const cartUpdateSchema = Yup.object({
  materials: Yup.string().required("Materials is a required field"),
  cake_options: Yup.string().required("Cake options is a required field"),
  image_content: Yup.string(),
});

export const guestSigninFormSchema = Yup.object({});

export const discountSchema = Yup.object({
  discount: Yup.string().required("Coupon code is required field"),
});

export const shippingMethodFormSchema = Yup.object({});
export const paymentMethodFormSchema = Yup.object({});
export const resetPasswordFormSchema = Yup.object({
  newPassword: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .max(20, "Password must be less than 20 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .matches(/^\S*$/, "Password must not contain spaces")
    .required("Password is a required field"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Confirm password is a required field"),
});
