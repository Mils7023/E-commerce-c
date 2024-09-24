// utils/imageHelper.js
export const getImageUrl = (path: string) => {
  return `${process.env.MEDIA_URL}/front-images/${path}`;
};
