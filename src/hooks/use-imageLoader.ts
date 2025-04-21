import { useState } from "react";

function useImageLoader(imageCount: number) {
  const [loadedImages, setLoadedImages] = useState<boolean[]>(
    Array(imageCount).fill(false)
  );
  const [failedImages, setFailedImages] = useState<boolean[]>(
    Array(imageCount).fill(false)
  );

  const markAsLoaded = (index: number) => {
    setLoadedImages((prev) => {
      const newArr = [...prev];
      newArr[index] = true;
      return newArr;
    });
  };

  const markAsError = (index: number) => {
    setFailedImages((prev) => {
      const newArr = [...prev];
      newArr[index] = true;
      return newArr;
    });
  };

  const allImagesLoaded = loadedImages.every(
    (loaded, i) => loaded || failedImages[i]
  );

  return {
    loadedImages,
    failedImages,
    markAsLoaded,
    markAsError,
    allImagesLoaded,
  };
}

export default useImageLoader;
