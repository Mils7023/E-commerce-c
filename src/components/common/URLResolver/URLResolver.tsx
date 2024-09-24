import { PageNotFound } from "@/components";
import { ProductContainer } from "@/container";

const CONTENT_TYPE = {
  CATEGORY: "CATEGORY",
  PRODUCT: "PRODUCT",
  CATEGORY_CMS: "CATEGORY_CMS",
  CMS_PAGE: "CMS_PAGE",
  NOT_FOUND: "404",
};

export const URLResolver = ({ type, data, metaData }: any) => {
  // if (CONTENT_TYPE.POST === type) {
  return (
    <ProductContainer
      data={data?.data}
      metaData={metaData}
      isEnableHeaderAnimation
    />
  );
  // }

  // return <PageNotFound />;
};
