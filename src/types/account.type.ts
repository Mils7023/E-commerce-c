export interface CustomerDetails {
  customer: {
    firstname: string;
    lastname: string;
    email: string;
  };
}

export interface CustomerCountry {
  id: string;
  full_name_locale: string;
}

export interface CustomerRegion {
  label: any;
  region: string;
  region_code: string;
  region_id: number;
}

export interface CustomerAddress {
  id?: string;
  city: string;
  country_code: string;
  default_billing: boolean;
  default_shipping: boolean;
  firstname: string;
  lastname: string;
  middlename: string | null;
  postcode: string;
  street: string[];
  telephone: string;
  region: CustomerRegion;
}
export interface FetchCustomerAddress {
  customer: {
    addresses: CustomerAddress[];
  };
  countries: CustomerCountry[];
}
