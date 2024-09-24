"use client";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import { useCallback, useState } from "react";
import { Mutations } from "@/utils/graphql";

export interface UseFileProps {}

export interface UseFileReturns {
  uploadFile: (
    name: string,
    base64_encoded_file: string,
    originalPath: string
  ) => Promise<any>;
  deleteFile: (file_path: string) => Promise<any>;
  uploadLoading: boolean;
  deleteLoading: boolean;
}

export const useFile = (): UseFileReturns => {
  const { UPLOAD_FILE, DELETE_FILE } = Mutations;

  const [uploadFiles] = useMutation(UPLOAD_FILE);
  const [deleteFiles] = useMutation(DELETE_FILE);

  const [uploadLoading, setUploadLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const uploadFile = useCallback(
    async (name: string, base64_encoded_file: string, originalPath: string) => {
      try {
        setUploadLoading(true);
        const { data } = await uploadFiles({
          variables: {
            name,
            base64_encoded_file,
            originalPath,
          },
        });

        if (data) {
          const uploadedItems = data.uploadFiles.items;
          //   toast.success("File uploaded successfully!");
          return uploadedItems;
        }
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setUploadLoading(false);
      }
    },
    [uploadFiles]
  );

  const deleteFile = useCallback(
    async (file_path: string) => {
      try {
        setDeleteLoading(true);
        const { data } = await deleteFiles({
          variables: {
            file_path,
          },
        });

        if (data) {
          const deletedItems = data.deleteFiles.items;
          toast.success("File deleted successfully!");
          return deletedItems;
        }
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setDeleteLoading(false);
      }
    },
    [deleteFiles]
  );

  return {
    uploadFile,
    deleteFile,
    uploadLoading,
    deleteLoading,
  };
};
