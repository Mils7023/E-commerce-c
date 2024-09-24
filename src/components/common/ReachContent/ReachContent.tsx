const PlainHtmlRenderer = ({ htmlContent, className }: any) => {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export const RichContent = (props: any) => {
  return <PlainHtmlRenderer {...props} />;
};
