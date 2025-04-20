import { Skeleton } from "@/components/ui/skeleton";
import useImageLoader from "@/hooks/use-imageLoader";
import Wrapper from "@/layout/wrapper";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Pictures() {
  const images: string[] = [];

  for (let i = 3; i <= 83; i++) {
    images.push(`/galery${i}.jpg`);
  }
  const { markAsLoaded, loadedImages } = useImageLoader(images.length);
  const imageRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    imageRefs.current.forEach((el) => {
      if (el) {
        gsap.fromTo(
          el,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power1.out",
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Wrapper>
      <div className="mt-[100px]">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Galareya
        </h2>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((img, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) imageRefs.current[index] = el;
              }}
              className="w-full break-inside-avoid overflow-hidden rounded-xl shadow-md group"
            >
              {!loadedImages[index] && (
                <Skeleton className="w-full h-[200px] rounded-xl mb-2" />
              )}

              <img
                src={img}
                onLoad={() => markAsLoaded(index)}
                alt={`Gallery ${index + 1}`}
                className={`w-full rounded-xl transition duration-300 ease-in-out group-hover:scale-[1.03] ${
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
