import { useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import { useState, useCallback } from "react";
import { Queries } from "@/utils/graphql";
import { BrowserPersistence, localStorageKeys } from "@/utils";
import { OrdersResponse } from "@/types";

export const useOrder = (
  currentPage: number = 1,
  pageSize: number = 5,
  filter: any = { number: { match: "" } }
) => {
  const storage = new BrowserPersistence();
  const token = storage.getItem(localStorageKeys.AUTH_TOKEN);

  // Query variables
  const queryVariables = {
    currentPage,
    pageSize,
    filter,
  };

  // Query for fetching customer orders
  const {
    data: ordersData,
    loading: getOrdersLoading,
    refetch: refetchOrders,
  } = useQuery<OrdersResponse>(Queries.GET_ALL_ORDER, {
    variables: queryVariables,
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    fetchPolicy: "cache-and-network",
  });

  return {
    ordersData,
    getOrdersLoading,
    refetchOrders,
  };
};
