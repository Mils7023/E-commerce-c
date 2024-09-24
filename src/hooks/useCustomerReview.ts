import { Mutations, Queries } from "@/utils/graphql";
import { useMutation, useQuery } from "@apollo/client";
import { toast } from "react-toastify";

export const useCustomerReview = (currentPage = 1, pageSize = 20) => {
  const {
    data: reviewData,
    loading: reviewLoading,
    refetch,
  } = useQuery(Queries.GET_REVIEWS_ITEM, {
    variables: {
      currentPage,
      pageSize,
    },
    fetchPolicy: "no-cache",
  });

  const [addLike] = useMutation(Mutations.ADD_LIKE_FOR_PRODUCT_REVIEW);

  const handleAddLike = async (reviewId: number) => {
    try {
      const { data } = await addLike({
        variables: {
          reviewId,
        },
      });
      if (data) {
        toast.success("Like added successfully");
      }
    } catch (error: any) {
      console.error("Error during mutation:", error);
      toast.error(error.message);
    }
  };

  return {
    reviewData,
    reviewLoading,
    refetch,
    handleAddLike,
  };
};
