// ランダム生成がうまくいかないので一旦以下のように固定を返す
// export const getRandomImageUrl = () => {
//   const randomQueryParam = Math.random();
//   return `https://source.unsplash.com/random/600x400?${randomQueryParam}`;
// };

const unsplashImageUrls = [
  'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec',
  'https://images.unsplash.com/photo-1593642634367-d91a135587b5',
  'https://images.unsplash.com/photo-1587614382346-4ec70e388b28',
  'https://images.unsplash.com/photo-1558981285-6f0c94958bb6',
  'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
];

export const getRandomImageUrl = () => {
  const randomIndex = Math.floor(Math.random() * unsplashImageUrls.length);
  return unsplashImageUrls[randomIndex];
};
