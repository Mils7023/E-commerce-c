export interface CustomerRegion {
  region: string;
  region_code: string;
  region_id: number;
}

export interface CustomerAddress {
  id: string;
  firstname?: string;
  lastname?: string;
  middlename?: string | null;
  street?: string[];
  city?: string;
  region?: CustomerRegion;
  postcode?: string;
  country_code?: string;
  telephone?: string;
  default_billing?: boolean;
  default_shipping?: boolean;
}

export interface CustomerDetails {
  customer: Customer;
}

export interface Customer {
  firstname?: string;
  lastname?: string;
  suffix?: string | null;
  email: string;
  gender?: number;
  phonenumber?: string | null;
  avatar?: string | null;
  country_code?: string | null;
  date_of_birth?: string;
  default_billing?: string | null;
  addresses?: CustomerAddress[];
  wishlist?: {
    items_count?: number;
    items?: any[];
  };
}

export interface CustomerCountry {
  id: string;
  full_name_locale: string;
  __typename: string;
}

export interface FetchCustomerAddress {
  customer: {
    addresses: CustomerAddress[];
  };
  countries: CustomerCountry[];
}
