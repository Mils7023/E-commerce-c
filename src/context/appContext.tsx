"use client";

import { clearToken, setCurrentUser } from "@/redux/userSlice";
import { Customer, CustomerDetails } from "@/types/customer.type";
import { BrowserPersistence, localStorageKeys } from "@/utils";
import { Queries } from "@/utils/graphql";
import { useLazyQuery } from "@apollo/client";
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

interface AppContextType {
  authToken: string;
  setAuthToken: Dispatch<SetStateAction<string>>;
  countryDetails: any;
  setCountryDetails: Dispatch<SetStateAction<string>>;
  isAccountDrawerOpen: boolean;
  setIsAccountDrawerOpen: Dispatch<SetStateAction<boolean>>;
  isOtpSent: boolean;
  setIsOtpSent: Dispatch<SetStateAction<boolean>>;
  isForgotPassword: boolean;
  setIsForgotPassword: Dispatch<SetStateAction<boolean>>;
  isMiniCartOpen: boolean;
  setIsMiniCartOpen: Dispatch<SetStateAction<boolean>>;
}
export interface AppContextProviderProps {
  children: ReactNode;
}

const contextData: AppContextType = {
  authToken: "",
  setAuthToken: () => null,
  countryDetails: {},
  setCountryDetails: () => null,
  isAccountDrawerOpen: false,
  setIsAccountDrawerOpen: () => null,
  isOtpSent: false,
  setIsOtpSent: () => null,
  isForgotPassword: false,
  setIsForgotPassword: () => null,
  isMiniCartOpen: false,
  setIsMiniCartOpen: () => null,
  // Other properties in SidebarContextType
};

const AppContext = createContext(contextData);

export const AppContextProvider: FC<AppContextProviderProps> = ({
  children,
}) => {
  const storage = new BrowserPersistence();
  const token: string = storage.getItem(localStorageKeys.AUTH_TOKEN);
  const { CUSTOMER_DETAILS } = Queries;
  const dispatch = useDispatch();

  const [authToken, setAuthToken] = useState<string>("");
  const [countryDetails, setCountryDetails] = useState({});
  const [isAccountDrawerOpen, setIsAccountDrawerOpen] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);

  const [
    getCustomerDetails,
    { data: customerData, loading: customerDetailsLoading },
  ] = useLazyQuery<CustomerDetails>(CUSTOMER_DETAILS, {
    context: {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    },
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    setAuthToken(token);
  }, [token]);

  useEffect(() => {
    (async () => {
      if (authToken) {
        try {
          const response = await getCustomerDetails();
          const currentUser = response?.data?.customer;
          if (currentUser) {
            dispatch(
              setCurrentUser({
                email: currentUser?.email || "",
                firstname: currentUser?.firstname || "",
                lastname: currentUser?.lastname || "",
                avatar: currentUser?.avatar || "",
              })
            );
          }
        } catch (error: any) {
          console.log("error", error);

          toast.error(error.message);
        }
      }
    })();
  }, [authToken, dispatch, getCustomerDetails]);

  return (
    <AppContext.Provider
      value={{
        authToken,
        setAuthToken,
        countryDetails,
        setCountryDetails,
        isAccountDrawerOpen,
        setIsAccountDrawerOpen,
        isOtpSent,
        setIsOtpSent,
        isForgotPassword,
        setIsForgotPassword,
        isMiniCartOpen,
        setIsMiniCartOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
