import { BrowserPersistence } from ".";
import CookiePersistence from "./cookiePersistence";

export const storage = new BrowserPersistence();
export const cookiePersist = new CookiePersistence();

export function convertCamelCaseToWords(camelCaseString: string) {
  return camelCaseString
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
    .toLowerCase()
    .replace(/^./, (str) => str.toUpperCase());
}

export const convertObjectToQuerystring = (obj: any) => {
  return Object.keys(obj)
    .map((key) => `${key}=${obj[key]}`)
    .join("&");
};

export const currencyFormatter = (param: {
  number: number;
  currency?: string;
}) => {
  const formattedNumber = param?.number?.toLocaleString("en-US", {
    style: "currency",
    currency: param?.currency ?? "GBP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  return formattedNumber.replace(/(\D{1})(\d)/, "$1 $2");
};

export const readFileAsDataURL = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result as string);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export const formatBreadcrumb = (path: string) => {
  return path
    .replace(/-/g, " ")
    .replace(/cake/g, "")
    .trim()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
