import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

function Wrapper({ children }: WrapperProps) {
  return <div className="max-w-[1200px] mx-auto px-[20px] xl:px-0">{children}</div>;
}

export default Wrapper;
