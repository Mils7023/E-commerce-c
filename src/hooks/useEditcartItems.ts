import { useLazyQuery, useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import { Mutations, Queries } from "@/utils/graphql";
import { useCartContext } from "@/context";

export interface UseEditCartItemsProps {
  handleClose: () => void;
}

export interface UseEditCartItemsReturns {
  handleUpdateCartItem: (variables: any) => any;
  getCartProduct: (variables: any) => any;
  cartItems: any;
  cartItemsLoading: boolean;
  cartItemUpdateLoading: boolean;
}

export const useEditCartItems = (
  handleClose: () => void
): UseEditCartItemsReturns => {
  const { GET_CART_ITEMS_DETAILS } = Queries;
  const { CART_PRODUCT_UPDATE } = Mutations;
  const [
    getCartItems,
    { data: cartItems, loading: cartItemsLoading, refetch: refetchCartItems },
  ] = useLazyQuery(GET_CART_ITEMS_DETAILS);
  const [cartItemUpdate, { loading: cartItemUpdateLoading }] =
    useMutation(CART_PRODUCT_UPDATE);

  const { cartId, refetchCartDetails } = useCartContext();

  const getCartProduct = async (selectedItemUid: string) => {
    try {
      await getCartItems({
        variables: { cart_id: cartId, item_id: selectedItemUid },
      });
    } catch (error) {}
  };

  const handleUpdateCartItem = async ({
    value,
    selectedItemUid,
    uploadedImage,
  }: any) => {
    try {
      const response = await cartItemUpdate({
        variables: {
          input: {
            cart_id: cartId,
            cart_items: [
              {
                selected_options: [value.cake_options, value.materials],
                cart_item_uid: selectedItemUid,
                quantity: cartItems?.getCartItemDetails?.quantity,
                image_url: uploadedImage,
                personalized_text: value.image_content,
              },
            ],
          },
        },
      });
      if (response) {
        await refetchCartDetails();
        await refetchCartItems();
        handleClose();
        toast.success("Your item updated successfully");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return {
    handleUpdateCartItem,
    getCartProduct,
    cartItems: cartItems?.getCartItemDetails,
    cartItemsLoading,
    cartItemUpdateLoading,
  };
};
