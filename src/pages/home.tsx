import Header from "@/components/header";
import Pictures from "./pictures";
// import Wrapper from "@/layout/wrapper";

function Home() {
  return (
    <>
      <div className="mt-[100px]">
        {/* <HomeSwiper /> */}
        <Header />
        <Pictures />
      </div>
    </>
  );
}

export default Home;
