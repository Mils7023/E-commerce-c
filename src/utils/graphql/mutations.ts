import SEND_VERIFICATION_CODE from "@/graphql/mutation/send-verification-code.graphql";
import VALIDATE_CUSTOMER from "@/graphql/mutation/validate-customer.graphql";
import CREATE_CUSTOMER from "@/graphql/mutation/create-customer.graphql";
import LOGIN_CUSTOMER from "@/graphql/mutation/customer-login.graphql";
import LOGOUT_CUSTOMER from "@/graphql/mutation/customer-logout.graphql";
import UPDATE_CUSTOMER from "@/graphql/mutation/update-customer-details.graphql";
import CHANGE_CUSTOMER_PASSWORD from "@/graphql/mutation/change-customer-password.graphql";
import REQUEST_PASSWORD_RESET_EMAIL from "@/graphql/mutation/request-password-reset-email.graphql";
import RESET_PASSWORD_FOR_CUSTOMER from "@/graphql/mutation/reset-password-for-customer.graphql";
import ADD_PRODUCT_TO_WISHLIST from "@/graphql/mutation/add-products-to-wishlist.graphql";
import REMOVE_PRODUCT_FROM_WISHLIST from "@/graphql/mutation/remove-products-from-wishlist.graphql";
import ADD_PRODUCT_TO_CART from "@/graphql/mutation/add-products-to-cart.graphql";
import CREATE_CART_MUTATION from "@/graphql/mutation/create-cart.graphql";
import CART_PRODUCT_REMOVE from "@/graphql/mutation/cart-product-remove.graphql";
import CART_PRODUCT_UPDATE from "@/graphql/mutation/cart-product-update.graphql";
import MERGE_CART from "@/graphql/mutation/merge-carts-after-signIn.graphql";
import CREATE_CART_AFTER_SIGNIN from "@/graphql/mutation/create-cart-after-signin.graphql";
import SET_EMAIL_FOR_GUEST from "@/graphql/mutation/set-email-for-guest.graphql";
import ADD_SHIPPING_ADDRESS from "@/graphql/mutation/add-shipping-address.graphql";
import ADD_BILLING_ADDRESS from "@/graphql/mutation/add-billing-address.graphql";
import UPDATE_CUSTOMER_ADDRESS from "@/graphql/mutation/update-customer-address.graphql";

import CREATE_CUSTOMER_ADDRESS from "@/graphql/mutation/create-customer-address.graphql";
import DELETE_CUSTOMER_ADDRESS from "@/graphql/mutation/delete-customer-address.graphql";

import UPLOAD_FILE from "@/graphql/mutation/upload-file.graphql";
import DELETE_FILE from "@/graphql/mutation/delete-file.graphql";

import SET_PAYMENT_METHOD from "@/graphql/mutation/set-payment-method.graphql";
import PLACE_ORDER from "@/graphql/mutation/place-order.graphql";
import CREATE_PAYPAL_EXPRESS_TOKEN from "@/graphql/mutation/create-paypal-express-token.graphql";
import SET_TOKEN_PAYERID_ON_CART from "@/graphql/mutation/set-token-payerId-on-cart.graphql";
import APPLY_COUPON_TO_CART from "@/graphql/mutation/apply-coupon-to-cart.graphql";
import REMOVE_COUPON_CODE_FROM_CART from "@/graphql/mutation/remove-coupon-code-from-cart.graphql";

import ADD_CONTACT_US_DETAILS from "@/graphql/mutation/add-contact-us-details.graphql";
import ADD_LIKE_FOR_PRODUCT_REVIEW from "@/graphql/mutation/add-like-for-product-review.graphql";

export const Mutations = {
  SEND_VERIFICATION_CODE,
  VALIDATE_CUSTOMER,
  CREATE_CUSTOMER,
  CHANGE_CUSTOMER_PASSWORD,
  LOGIN_CUSTOMER,
  LOGOUT_CUSTOMER,
  REQUEST_PASSWORD_RESET_EMAIL,
  RESET_PASSWORD_FOR_CUSTOMER,
  ADD_PRODUCT_TO_WISHLIST,
  REMOVE_PRODUCT_FROM_WISHLIST,
  ADD_PRODUCT_TO_CART,
  CREATE_CART_MUTATION,
  CART_PRODUCT_REMOVE,
  CART_PRODUCT_UPDATE,
  MERGE_CART,
  CREATE_CART_AFTER_SIGNIN,
  SET_EMAIL_FOR_GUEST,
  ADD_SHIPPING_ADDRESS,
  ADD_BILLING_ADDRESS,
  UPDATE_CUSTOMER_ADDRESS,
  UPDATE_CUSTOMER,
  CREATE_CUSTOMER_ADDRESS,
  DELETE_CUSTOMER_ADDRESS,
  UPLOAD_FILE,
  DELETE_FILE,
  SET_PAYMENT_METHOD,
  PLACE_ORDER,
  CREATE_PAYPAL_EXPRESS_TOKEN,
  SET_TOKEN_PAYERID_ON_CART,
  APPLY_COUPON_TO_CART,
  REMOVE_COUPON_CODE_FROM_CART,
  ADD_CONTACT_US_DETAILS,
  ADD_LIKE_FOR_PRODUCT_REVIEW,
};
