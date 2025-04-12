import { Skeleton } from "@/components/ui/skeleton";
import useImageLoader from "@/hooks/use-imageLoader";
import Wrapper from "@/layout/wrapper";

function Pictures() {
  const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://cdn.wallart.com/img/psk/Lyu55asBhgQ8Z/peel-and-stick-wallpaper-white-wavy-structure-80.jpg",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    "https://cdn.wallart.com/img/psk/Lyu55asBhz9r6/peel-and-stick-wallpaper-white-wavy-structure-137.jpg",
    "https://cdn.wallart.com/img/psk/qEu001SlhL800/peel-and-stick-wallpaper-white-wavy-structure-79.jpg",
    "https://cdn.wallart.com/img/psk/vguqqVHgh7B4R/peel-and-stick-wallpaper-white-wavy-structure-127.jpg",
  ];

  const { markAsLoaded, loadedImages } = useImageLoader(images.length);

  return (
    <Wrapper>
      <div className="mt-[100px]">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ishlarimiz galereyasi
        </h2>
        <p className="text-gray-600 text-base mb-8">
          Gips va lepka sohasida bajarilgan ba’zi ishlarimiz.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl shadow-md ${
                index % 3 === 0 ? "row-span-2 h-full" : "h-full"
              }`}
            >
              {!loadedImages[index] && (
                <Skeleton className="absolute top-0 left-0 w-full h-full rounded-xl z-10" />
              )}

              <img
                src={img}
                onLoad={() => markAsLoaded(index)}
                alt={`Gallery ${index + 1}`}
                className={`w-full h-full object-cover rounded-xl duration-500 transition ease-in-out hover:scale-[1.1] ${
                  loadedImages[index] ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default Pictures;
