import { useState } from "react";

function useImageLoader(imageCount: number) {
  const [loadedImages, setLoadedImages] = useState<boolean[]>(
    Array(imageCount).fill(false)
  );

  const markAsLoaded = (index: number) => {
    setLoadedImages((prev) => {
      const newArr = [...prev];
      newArr[index] = true;
      return newArr;
    });
  };

  const allImagesLoaded = loadedImages.every((loaded) => loaded);

  return { loadedImages, allImagesLoaded, markAsLoaded };
}

export default useImageLoader;
