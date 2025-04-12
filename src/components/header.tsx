import Wrapper from "@/layout/wrapper";
import { Button } from "./ui/button";
import useModal from "@/hooks/use-modal";
import DialogDemo from "@/shared/modal";
import { Skeleton } from "@/components/ui/skeleton";
import useImageLoader from "@/hooks/use-imageLoader";

function Header() {
  const { isOpen, closeModal, openModal } = useModal();
  const { allImagesLoaded, markAsLoaded } = useImageLoader(2);
  return (
    <Wrapper>
      <div className="flex flex-col md:flex-row justify-between w-full items-center gap-6 py-12">
        <div className="w-full">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Gips va Lepkada Tajribali Yondashuv
          </h2>
          <p className="text-gray-600 text-[15px] md:text-lg mb-6">
            Har qanday dizayn uchun sifatli va aniq ishlangan lepka bezaklari.
            Tajriba va natijaga e’tibor beramiz.
          </p>

          <div className="flex items-center gap-3">
            <Button className="cursor-pointer" onClick={openModal}>
              Buyurtma uchun
            </Button>

            <DialogDemo open={isOpen} onClose={closeModal} />

            <Button variant={"outline"} className="cursor-pointer">
              <a
                href="https://www.instagram.com/gips_lepka_uz/"
                target="_blank"
              >
                Ishlarimizni Ko‘rish
              </a>
            </Button>
          </div>
        </div>

        <div className="relative w-full h-[300px] sm:h-[400px]">
          {!allImagesLoaded && (
            <Skeleton className="absolute top-0 left-0 w-full h-full rounded-xl z-20" />
          )}

          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="bg"
            onLoad={markAsLoaded}
            className={`absolute top-3 left-3 md:top-8 md:left-8 h-full object-cover rounded-xl shadow-lg ${
              allImagesLoaded ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500`}
          />

          <img
            src="https://cdn.wallart.com/img/psk/Lyu55asBhgQ8Z/peel-and-stick-wallpaper-white-wavy-structure-80.jpg"
            alt="main"
            onLoad={markAsLoaded}
            className={`absolute top-0 left-0 h-full object-cover rounded-xl shadow-xl z-10 ${
              allImagesLoaded ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500`}
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default Header;
