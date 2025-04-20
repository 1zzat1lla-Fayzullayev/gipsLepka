// import { useState } from "react";
import Wrapper from "../layout/wrapper";
import { Button } from "./ui/button";
import DialogDemo from "@/shared/modal";
import useModal from "@/hooks/use-modal";

function Navbar() {
  const { openModal, closeModal, isOpen } = useModal();

  return (
    <>
      <div
        className="bg-[#ffffff34] fixed top-0 right-0 w-full z-[999]"
        style={{ backdropFilter: "blur(7px)" }}
      >
        <Wrapper>
          <div className="py-2 flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/logo.png" alt="" className="w-[50px]" />
              <h2 className="text-[25px] font-[500]">GipsLepka</h2>
            </div>
            <div>
             
            </div>
           

            <Button
              className="cursor-pointer hidden md:block"
              onClick={openModal}
            >
              Murojaat uchun
            </Button>

            <img src="/phone.svg" className="w-[50px] md:hidden" onClick={openModal} />

            <DialogDemo open={isOpen} onClose={closeModal} />
          </div>
        </Wrapper>
      </div>
    </>
  );
}

export default Navbar;
