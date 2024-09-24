import CUSTOMER_DETAILS from "@/graphql/query/get-customer-details.graphql";
import PRODUCTS_LIST from "@/graphql/query/products-list.graphql";
import RECENTLY_ADDED_TOPPERS from "@/graphql/query/get-recently-added-toppers.graphql";
import FEATURED_PRODUCTS from "@/graphql/query/get-featured-toppers.graphql";
import SEASONAL_TOPPERS from "@/graphql/query/get-seasonal-toppers.graphql";
import BEST_SELLER_TOPPERS from "@/graphql/query/get-bestseller-toppers.graphql";
import HEADER_MENU_CATEGORIES from "@/graphql/query/get-header-menu-categories.graphql";
import TOPPERS_BY_SHAPE from "@/graphql/query/get-toppers-by-shape.graphql";
import SUPERHEROES_TOPPERS from "@/graphql/query/get-superheroes-toppers.graphql";
// import GET_ALL_CATEGORIES from "@/graphql/query/get-all-category.graphql";
import HIGHLIGHTED_PRODUCTS from "@/graphql/query/get-home-page-slider-categories.graphql";
import GET_CATEGORIES from "@/graphql/query/get-categories.graphql";
import GET_PRODUCT from "@/graphql/query/get-product.graphql";
import PRODUCT_SIDEBAR_FILTER from "@/graphql/query/product-sidebar-filter.graphql";
import SEARCH_PRODUCT_LIST from "@/graphql/query/get-products-list-by-search.graphql";
import SEARCH_PRODUCT_FILTER from "@/graphql/query/get-filters-by-product-search.graphql";
import GET_PRODUCT_DETAILS from "@/graphql/query/get-product-details.graphql";
import GET_CUSTOMER_WISHLIST from "@/graphql/query/get-customer-wishlist.graphql";
import GET_CUSTOMER_ADDRESS from "@/graphql/query/get-customer-addresses.graphql";
import CART_DETAILS from "@/graphql/query/get-cart-details.graphql";
import GET_PRODUCT_WISE_REVIEWS from "@/graphql/query/get-product-wise-review.graphql";
import CHECK_EMAIL_AVAILABLE from "@/graphql/query/check-email-available.graphql";
import GET_PAYMENT_METHODS from "@/graphql/query/get-payment-methods.graphql";
import GET_EXTRA_PM_DETAILS from "@/graphql/query/get-extra-pm-details.graphql";
import GET_THANK_YOU_PAGE_DETAILS from "@/graphql/query/get-thankyou-page-details.graphql";
import GET_ALL_ORDER from "@/graphql/query/get-all-order.graphql";
import GET_CART_ITEMS_DETAILS from "@/graphql/query/get-cart-item-details.graphql";
import GET_REVIEWS_ITEM from "@/graphql/query/get-reviews-items.graphql";

export const Queries = {
  CUSTOMER_DETAILS,
  PRODUCTS_LIST,
  RECENTLY_ADDED_TOPPERS,
  FEATURED_PRODUCTS,
  SEASONAL_TOPPERS,
  BEST_SELLER_TOPPERS,
  HEADER_MENU_CATEGORIES,
  TOPPERS_BY_SHAPE,
  SUPERHEROES_TOPPERS,
  // GET_ALL_CATEGORIES,
  HIGHLIGHTED_PRODUCTS,
  GET_CATEGORIES,
  GET_PRODUCT,
  PRODUCT_SIDEBAR_FILTER,
  SEARCH_PRODUCT_LIST,
  SEARCH_PRODUCT_FILTER,
  GET_PRODUCT_DETAILS,
  GET_CUSTOMER_WISHLIST,
  CART_DETAILS,
  GET_PRODUCT_WISE_REVIEWS,
  CHECK_EMAIL_AVAILABLE,
  GET_CUSTOMER_ADDRESS,
  GET_PAYMENT_METHODS,
  GET_EXTRA_PM_DETAILS,
  GET_THANK_YOU_PAGE_DETAILS,
  GET_ALL_ORDER,
  GET_CART_ITEMS_DETAILS,
  GET_REVIEWS_ITEM,
};

export const QueryMap = {
  FEATURED_PRODUCTS: Queries.FEATURED_PRODUCTS,
  RECENTLY_ADDED_TOPPERS: Queries.RECENTLY_ADDED_TOPPERS,
  SEASONAL_TOPPERS: Queries.SEASONAL_TOPPERS,
  BEST_SELLER_TOPPERS: Queries.BEST_SELLER_TOPPERS,
  HEADER_MENU_CATEGORIES: Queries.HEADER_MENU_CATEGORIES,
  TOPPERS_BY_SHAPE: Queries.TOPPERS_BY_SHAPE,
  SUPERHEROES_TOPPERS: Queries.SUPERHEROES_TOPPERS,
  HIGHLIGHTED_PRODUCTS: Queries.HIGHLIGHTED_PRODUCTS,
  GET_CATEGORIES: Queries.GET_CATEGORIES,
  GET_PRODUCT: Queries.GET_PRODUCT,
  PRODUCT_SIDEBAR_FILTER: Queries.PRODUCT_SIDEBAR_FILTER,
  SEARCH_PRODUCT_LIST: Queries.SEARCH_PRODUCT_LIST,
  SEARCH_PRODUCT_FILTER: Queries.SEARCH_PRODUCT_FILTER,
  CART_DETAILS: Queries.CART_DETAILS,
  CHECK_EMAIL_AVAILABLE: Queries.CHECK_EMAIL_AVAILABLE,
  CUSTOMER_DETAILS: Queries.CUSTOMER_DETAILS,
  GET_CUSTOMER_ADDRESS: Queries.GET_CUSTOMER_ADDRESS,
  GET_PAYMENT_METHODS: Queries.GET_PAYMENT_METHODS,
  GET_EXTRA_PM_DETAILS: Queries.GET_EXTRA_PM_DETAILS,
  GET_THANK_YOU_PAGE_DETAILS: Queries.GET_THANK_YOU_PAGE_DETAILS,
  GET_ALL_ORDER: Queries.GET_ALL_ORDER,
  GET_CART_ITEMS_DETAILS: Queries.GET_CART_ITEMS_DETAILS,
  GET_REVIEWS_ITEM: Queries.GET_REVIEWS_ITEM,
  // Add mappings for other categories
};

export const DataKeyMap = {
  FEATURED_PRODUCTS: "getFeaturedToppers",
  RECENTLY_ADDED_TOPPERS: "getRecentlyAddedProducts",
  SEASONAL_TOPPERS: "getSeasonalToppers",
  BEST_SELLER_TOPPERS: "getBestsellerToppers",
  HEADER_MENU_CATEGORIES: "getHeaderMenuCategories",
  TOPPERS_BY_SHAPE: "getToppersByShape",
  SUPERHEROES_TOPPERS: "products",
  HIGHLIGHTED_PRODUCTS: "getHomePageSliderCategories",
  SEARCH_PRODUCT_LIST: "productTopSearch",
  SEARCH_PRODUCT_FILTER: "products",
  CUSTOMER_DETAILS: "customer",
  // Add mappings for other categories
};
