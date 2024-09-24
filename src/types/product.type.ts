import { PageInfo } from "./common.type";
import { ReactNode } from "react";
export interface Product {
  id?: string;
  name: string;
  sku?: string;
  price_range?: PriceRange;
  url_key?: string;
  small_image?: SmallImage;
  review_count?: number | null;
  rating_summary?: number | null;
  uid?: string;
  meta_description?: string | null;
  meta_keyword?: string | null;
  meta_title?: string | null;
  color?: string | null;
  stock_status?: string | null;
  categories?: Category[] | null;
  thumbnail?: Thumbnail | null;
  media_gallery_entries?: MediaGalleryEntry[] | null;

  productImage?: any | null;
  productPrice?: string | null;
  superHeroImage?: any | null;
}

export interface MediaGalleryEntry {
  uid: string;
  label: string | null;
  position: number;
  disabled: boolean;
  file: string;
  types: string[];
  media_type: string;
  video_content: {
    video_url: string;
    video_title: string;
  } | null;
}

export interface Thumbnail {
  url: string;
  label: string | null;
}

export interface Category {
  name: string;
}

export interface SmallImage {
  url: string;
  label: string;
}

export interface MinimumPrice {
  discount: DiscountType | null;
  final_price: Price;
}

export interface PriceRange {
  maximum_price: MaximumPrice;
  minimum_price: MinimumPrice;
}

export interface DiscountType {
  amount_off: number | null;
}

export interface MaximumPrice {
  discount: DiscountType | null;
  final_price: Price;
}

export interface Price {
  currency: string;
  value: number;
}

export interface ProductsResponse {
  __typename: string;
  items: Product[];
  total_count: number;
  page_info: PageInfo;
}

export interface WishlistItemV2 {
  added_at: ReactNode;
  id: string;
  description: string;
  product: Product;
}

export interface WishlistV2 {
  id: string;
  items_count: number;
  items_v2: {
    items: WishlistItemV2[];
    page_info: PageInfo;
  };
}

export interface WishlistCustomer {
  wishlist_v2: WishlistV2;
}

export interface FetchWishlist {
  customer: WishlistCustomer;
}
