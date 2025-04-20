// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
// import About from "./pages/about";
// import Pictures from "./pages/pictures";

function App() {
  const [isScroll, setIsScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pictures" element={<Pictures />} />
        </Routes>
      </BrowserRouter> */}
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`bg-[#ffffffad] w-[60px] fixed z-[1000] bottom-[50px] right-[20px] md:right-[50px] rounded-full cursor-pointer transition-opacity duration-300 ${
          isScroll ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <img src="/arrow_up.svg" />
      </div>

      <Navbar />
      <Home />
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
