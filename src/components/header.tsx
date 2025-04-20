import Wrapper from "@/layout/wrapper";
import { Button } from "./ui/button";
import useModal from "@/hooks/use-modal";
import DialogDemo from "@/shared/modal";
import { Skeleton } from "@/components/ui/skeleton";
import useImageLoader from "@/hooks/use-imageLoader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

function Header() {
  const { isOpen, closeModal } = useModal();
  const { allImagesLoaded, markAsLoaded } = useImageLoader(2);

  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        paragraphRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        imageContainerRef.current,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageContainerRef.current,
            start: "top 85%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <Wrapper>
      <div className="flex flex-col md:flex-row justify-between w-full items-center gap-6 py-12">
        <div className="w-full">
          <h2 ref={headingRef} className="text-3xl md:text-5xl font-bold mb-4">
            Gips va Lepkada Tajribali Yondashuv
          </h2>

          <p
            ref={paragraphRef}
            className="text-gray-600 text-[15px] md:text-lg mb-6"
          >
            <strong>📈Since 1998</strong> <br />
            Uzoq yillar sinalgan tajribaga ega ishonchIi ishlab chiqaruvchidan
            Lepka mahsulotlari⚜️ <br /> <br />
            Tanlovda adashmang✅ <br /> <br />
            <a href="tel:+998977718061"> +998977718061</a> <br />
            <a href="tel:+998903498289">+998903498289</a> <br />
            <a href="tel:+998938880838">+998938880838</a> <br />
          </p>

          <div className="flex items-center gap-3">
            <DialogDemo open={isOpen} onClose={closeModal} />

            <Button variant={"outline"} className="cursor-pointer">
              <a
                href="https://www.instagram.com/gips_lepka_uz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram sahifamiz
              </a>
            </Button>
          </div>
        </div>

        <div
          ref={imageContainerRef}
          className="relative w-full h-[300px] sm:h-[400px]"
        >
          {!allImagesLoaded && (
            <Skeleton className="absolute top-0 left-0 w-full h-full rounded-xl z-20" />
          )}

          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="bg"
            onLoad={() => markAsLoaded(0)}
            className={`absolute top-3 left-3 md:top-8 md:left-8 h-full w-full object-cover rounded-xl shadow-lg transition-opacity duration-500 ${
              allImagesLoaded ? "opacity-100" : "opacity-0"
            }`}
          />

          <img
            src="https://cdn.wallart.com/img/psk/Lyu55asBhgQ8Z/peel-and-stick-wallpaper-white-wavy-structure-80.jpg"
            alt="main"
            onLoad={() => markAsLoaded(1)}
            className={`absolute top-0 left-0 h-full w-full object-cover rounded-xl shadow-xl z-10 transition-opacity duration-500 ${
              allImagesLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default Header;
