import { useState } from "react";
import Wrapper from "../layout/wrapper";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import DialogDemo from "@/shared/modal";

function Navbar() {
  const location = useLocation();
  const [menu, setMenu] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);

  const openMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      {/* for desktop */}
      <div
        className="bg-[#ffffff34] fixed top-0 right-0 w-full z-[99]"
        style={{ backdropFilter: "blur(7px)" }}
      >
        <Wrapper>
          <div className="py-2 flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/logo.png" alt="" className="w-[50px]" />
              <h2 className="text-[25px] font-[500]">GipsLepka</h2>
            </div>
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
                    to={"/lepka"}
                    className={`${
                      location.pathname === "/lepka"
                        ? "bg-[#8080803f] px-[6px] py-[3px] rounded-[5px]"
                        : "px-[6px] py-[3px]"
                    } `}
                    style={{ backdropFilter: "blur(10px)" }}
                  >
                    Karnizlar
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
              onClick={() => setModal(true)}
            >
              Murojaat uchun
            </Button>

            <DialogDemo open={modal} onClose={() => setModal(false)} />
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
        className={`fixed top-0 left-0 w-[300px] z-[100] h-screen bg-[#ffffff] shadow-lg transform transition-transform duration-300 ${
          menu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="flex items-center gap-2 cursor-pointer pl-[20px] pt-[10px]">
            <img src="/logo.png" alt="" className="w-[50px]" />
            <h2 className="text-[25px] font-[500]">GipsLepka</h2>
          </div>

          <ul className="flex flex-col justify-start items-start px-[20px] pt-[50px] h-full gap-[20px] w-full">
            <li
              className={`${
                location.pathname === "/"
                  ? "bg-[#8080803f] px-[6px] py-[3px] w-full rounded-[5px]"
                  : "px-[6px] py-[3px]"
              } `}
              style={{ backdropFilter: "blur(10px)" }}
            >
              <Link to={"/"}>Asosiy</Link>
            </li>
            <li
              className={`${
                location.pathname === "/lepka"
                  ? "bg-[#8080803f] px-[6px] py-[3px] w-full rounded-[5px]"
                  : "px-[6px] py-[3px]"
              } `}
              style={{ backdropFilter: "blur(10px)" }}
            >
              <Link to={"/lepka"}>Karnizlar</Link>
            </li>
            <li
              className={`${
                location.pathname === "/about"
                  ? "bg-[#8080803f] px-[6px] py-[3px] w-full rounded-[5px]"
                  : "px-[6px] py-[3px]"
              } `}
              style={{ backdropFilter: "blur(10px)" }}
            >
              <Link to={"/about"}>Biz haqimizda</Link>
            </li>
          </ul>

          <Button
            className="cursor-pointer m-[20px]"
            onClick={() => {
              setModal(true);
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
