import { Discount, Address } from "./cart.type";

export interface OrderItem {
  id: string;
  number: string;
  order_date: string;
  status: string;
  items: {
    id: string;
    product: {
      small_image: {
        url: string;
        label: string;
      };
      thumbnail: {
        label: string;
        url: string;
      };
    };
    selected_options: {
      label: string;
      value: string;
    }[];
    product_name: string;
    product_sku: string;
    product_url_key: string;
    product_sale_price: {
      value: number;
      currency: string;
    };
    quantity_ordered: number;
    quantity_invoiced: number;
    quantity_shipped: number;
  }[];
  shipping_method: string;
  payment_methods: {
    name: string;
    type: string;
    additional_data: {
      name: string;
      value: string;
    }[];
  }[];
  billing_address: Address;
  shipping_address: Address;
  applied_coupons: {
    code: string;
  }[];
  carrier: string;
  shipments: {
    id: string;
    number: string;
    items: {
      product_name: string;
      quantity_shipped: number;
    }[];
  }[];
  total: {
    base_grand_total: Money;
    grand_total: Money;
    total_tax: Money;
    subtotal: Money;
    taxes: Tax[];
    total_shipping: Money;
    shipping_handling: ShippingHandling;
    discounts: Discount[];
  };
}

export interface Money {
  value: number;
  currency: string;
}

export interface Tax {
  amount: Money;
  title: string;
  rate: number;
}

export interface ShippingHandling {
  amount_including_tax: Money;
  amount_excluding_tax: Money;
  total_amount: Money;
  taxes: Tax[];
}

export interface OrderPageInfo {
  current_page: number;
  page_size: number;
  total_pages: number;
}

export interface OrdersResponse {
  customer: {
    orders: {
      total_count: number;
      items: OrderItem[];
      page_info: OrderPageInfo;
    };
  };
}
