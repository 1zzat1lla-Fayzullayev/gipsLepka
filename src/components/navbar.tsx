import { useState } from "react";
import Wrapper from "../layout/wrapper";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import DialogDemo from "@/shared/modal";
import useModal from "@/hooks/use-modal";

function Navbar() {
  const location = useLocation();
  const { openModal, closeModal, isOpen } = useModal();
  const [menu, setMenu] = useState<boolean>(false);

  const openMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      {/* for desktop */}
      <div
        className="bg-[#ffffff34] fixed top-0 right-0 w-full z-[999]"
        style={{ backdropFilter: "blur(7px)" }}
      >
        <Wrapper>
          <div className="py-2 flex items-center justify-between">
            <Link to={"/"}>
              <div className="flex items-center gap-2 cursor-pointer">
                <img src="/logo.png" alt="" className="w-[50px]" />
                <h2 className="text-[25px] font-[500]">GipsLepka</h2>
              </div>
            </Link>
            <div>
              <ul className="hidden md:flex gap-[20px]">
                <li>
                  <Link
                    to={"/"}
                    className={`${
                      location.pathname === "/"
                        ? "bg-[#8080803f] px-[6px] py-[3px] rounded-[5px]"
                        : "px-[6px] py-[3px]"
                    } `}
                    style={{ backdropFilter: "blur(10px)" }}
                  >
                    Asosiy
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/pictures"}
                    className={`${
                      location.pathname === "/pictures"
                        ? "bg-[#8080803f] px-[6px] py-[3px] rounded-[5px]"
                        : "px-[6px] py-[3px]"
                    } `}
                    style={{ backdropFilter: "blur(10px)" }}
                  >
                    Bizning ishlarimiz
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/about"}
                    className={`${
                      location.pathname === "/about"
                        ? "bg-[#8080803f] px-[6px] py-[3px] rounded-[5px]"
                        : "px-[6px] py-[3px]"
                    } `}
                    style={{ backdropFilter: "blur(10px)" }}
                  >
                    Biz haqimizda
                  </Link>
                </li>
              </ul>
            </div>
            <div className="block md:hidden z-[99]">
              <div
                className={`burger ${menu ? "open" : ""}`}
                onClick={openMenu}
              >
                <div className="w-[25px] h-[2px] rounded-full block duration-300 bg-black"></div>
                <div className="w-[25px] h-[2px] rounded-full block duration-300 bg-black"></div>
                <div className="w-[25px] h-[2px] rounded-full block duration-300 bg-black"></div>
              </div>
            </div>

            <Button
              className="hidden md:block cursor-pointer"
              onClick={openModal}
            >
              Murojaat uchun
            </Button>

            <DialogDemo open={isOpen} onClose={closeModal} />
          </div>
        </Wrapper>
      </div>

      {/* for mobile */}
      <div
        className={`fixed inset-0 bg-black/60 transition-opacity ${
          menu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={openMenu}
      ></div>

      <div
        className={`fixed top-0 left-0 w-full z-[100] h-screen bg-[#ffffff] shadow-lg transform transition-transform duration-300 ${
          menu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-between ">
          <ul className="flex flex-col justify-start items-start px-[20px] pt-[120px] h-full gap-[20px] w-full">
            <li
              onClick={() => setMenu(false)}
              className={`${
                location.pathname === "/"
                  ? "bg-[#8080803f] px-[6px] py-[6px] w-full rounded-[5px]"
                  : "px-[6px] py-[6px]"
              } `}
              style={{ backdropFilter: "blur(10px)" }}
            >
              <Link to={"/"}>Asosiy</Link>
            </li>
            <li
              onClick={() => setMenu(false)}
              className={`${
                location.pathname === "/pictures"
                  ? "bg-[#8080803f] px-[6px] py-[6px] w-full rounded-[5px]"
                  : "px-[6px] py-[6px]"
              } `}
              style={{ backdropFilter: "blur(10px)" }}
            >
              <Link to={"/pictures"}>Bizning ishlarimiz</Link>
            </li>
            <li
              onClick={() => setMenu(false)}
              className={`${
                location.pathname === "/about"
                  ? "bg-[#8080803f] px-[6px] py-[6px] w-full rounded-[5px]"
                  : "px-[6px] py-[6px]"
              } `}
              style={{ backdropFilter: "blur(10px)" }}
            >
              <Link to={"/about"}>Biz haqimizda</Link>
            </li>
          </ul>

          <Button
            className="cursor-pointer m-[20px] py-[6px]"
            onClick={() => {
              openModal();
              setMenu(false);
            }}
          >
            Murojaat uchun
          </Button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
