// useAddressDetails.ts
"use client";
import { useQuery, useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import { useState, useCallback } from "react";
import { Queries, Mutations } from "@/utils/graphql";
import { BrowserPersistence, localStorageKeys } from "@/utils";

export const useAddressDetails = () => {
  const storage = new BrowserPersistence();
  const token = storage.getItem(localStorageKeys.AUTH_TOKEN);

  // Queries and mutations for address operations
  const {
    data: addressData,
    loading: getAddressLoading,
    refetch: refetchAddresses,
  } = useQuery(Queries.GET_CUSTOMER_ADDRESS, {
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    fetchPolicy: "cache-and-network",
  });

  const [addAddress] = useMutation(Mutations.CREATE_CUSTOMER_ADDRESS);
  const [updateAddress] = useMutation(Mutations.UPDATE_CUSTOMER_ADDRESS);
  const [deleteAddress] = useMutation(Mutations.DELETE_CUSTOMER_ADDRESS);

  // Handle adding an address
  const handleAddAddress = useCallback(
    async (addressInput: any) => {
      try {
        const { data } = await addAddress({
          variables: {
            input: addressInput,
          },
        });

        if (data) {
          toast.success("Address added successfully!");
          refetchAddresses();
        }
      } catch (error: any) {
        toast.error(error.message);
      }
    },
    [addAddress, refetchAddresses]
  );

  // Handle updating an address
  const handleUpdateAddress = useCallback(
    async (addressInput: any) => {
      try {
        const { data } = await updateAddress({
          variables: {
            id: addressInput.id,
            input: addressInput.input,
          },
        });

        if (data) {
          toast.success("Address updated successfully!");
          refetchAddresses();
        }
      } catch (error: any) {
        toast.error(error.message);
      }
    },
    [updateAddress, refetchAddresses]
  );

  // Handle deleting an address
  const handleDeleteAddress = useCallback(
    async (addressId: any) => {
      try {
        const { data } = await deleteAddress({
          variables: {
            id: addressId,
          },
        });

        if (data) {
          toast.success("Address deleted successfully!");
          refetchAddresses();
        }
      } catch (error: any) {
        toast.error(error.message);
      }
    },
    [deleteAddress, refetchAddresses]
  );

  return {
    addressData,
    getAddressLoading,
    handleAddAddress,
    handleUpdateAddress,
    handleDeleteAddress,
    refetchAddresses,
  };
};
