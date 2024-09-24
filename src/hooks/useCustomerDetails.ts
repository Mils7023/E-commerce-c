"use client";
import { useQuery, useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import { Queries, Mutations } from "@/utils/graphql";
import { BrowserPersistence, localStorageKeys } from "@/utils";
import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "@/redux/userSlice";
import { CustomerDetails } from "@/types";

export const useCustomerDetails = () => {
  const storage = new BrowserPersistence();
  const token = storage.getItem(localStorageKeys.AUTH_TOKEN);
  const [updateCustomer] = useMutation(Mutations.UPDATE_CUSTOMER);
  const [changePassword] = useMutation(Mutations.CHANGE_CUSTOMER_PASSWORD);
  const dispatch = useDispatch();

  // Query to get customer details
  const {
    data: customerData,
    loading: getCustomerLoading,
    refetch: refetchCustomer,
  } = useQuery(Queries.CUSTOMER_DETAILS, {
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },

    onError: (error) => {
      toast.error(`${error.message}`);
    },
  });

  // Update customer information function
  const handleUpdateCustomer = async (customerInput: any) => {
    try {
      const { data } = await updateCustomer({
        variables: {
          input: customerInput,
        },
        context: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      });
      const currentUser = data?.updateCustomerV3.customer;

      dispatch(
        setCurrentUser({
          email: currentUser?.email || "",
          firstname: currentUser?.firstname || "",
          lastname: currentUser?.lastname || "",
          avatar: currentUser?.avatar || "",
        })
      );
      toast.success("Customer information updated successfully!");
    } catch (error: any) {
      toast.error(`Error updating customer information: ${error.message}`);
    }
  };

  // Change customer password function
  const handleChangePassword = async ({
    currentPassword,
    newPassword,
  }: {
    currentPassword: string;
    newPassword: string;
  }) => {
    try {
      await changePassword({
        variables: {
          currentPassword, // Send the actual variables
          newPassword,
        },
        context: {
          headers: {
            Authorization: `Bearer ${token}`, // Ensure token is available and valid
          },
        },
      }).then(() => {
        toast.success("Password changed successfully!");
      });
    } catch (error: any) {
      toast.error(`Error changing password: ${error.message}`);
    }
  };

  return {
    customerData,
    getCustomerLoading,
    refetchCustomer,
    handleUpdateCustomer,
    handleChangePassword,
  };
};
