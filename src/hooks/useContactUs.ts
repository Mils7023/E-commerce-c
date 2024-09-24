import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import { Mutations } from "@/utils/graphql";

export interface UseContactUsProps {}

export interface UseContactUsReturns {
  handleContactUs: (variables: any) => any;
}

export const useContactUs = (): UseContactUsReturns => {
  const { ADD_CONTACT_US_DETAILS } = Mutations; // Your mutation for contact us
  const [addContactUsDetails] = useMutation(ADD_CONTACT_US_DETAILS);

  const handleContactUs = async (input: any) => {
    try {
      const response = await addContactUsDetails({ variables: { input } });
      if (response.data.addContactUsDetails.success_message) {
        toast.success(response.data.addContactUsDetails.success_message);
      }
      return response;
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return {
    handleContactUs,
  };
};
