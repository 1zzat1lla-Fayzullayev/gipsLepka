// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer";
// import About from "./pages/about";
// import Pictures from "./pages/pictures";

function App() {
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
      <Navbar />
      <Home />
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
