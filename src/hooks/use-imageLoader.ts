import { useState } from "react";

function useImageLoader(count: number) {
  const [loadedImages, setLoadedImages] = useState(0);

  const markAsLoaded = () => {
    setLoadedImages((prev) => prev + 1);
  };

  const allImagesLoaded = loadedImages === count;

  return { allImagesLoaded, markAsLoaded };
}

export default useImageLoader;
