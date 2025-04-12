import Wrapper from "@/layout/wrapper";

function Footer() {
  return (
    <>
      <div className="bg-white border-t w-full p-4 mt-[50px]">
        <Wrapper>
          <div className="flex justify-between w-full md:items-end gap-10 md:gap-0 flex-col md:flex-row">
            <ul>
              <li>
                <div className="flex items-center gap-2 cursor-pointer">
                  <img src="/logo.png" alt="" className="w-[70px]" />
                  <h2 className="text-[30px] font-[500]">GipsLepka</h2>
                </div>
              </li>
              <li className="mt-4">
                <a
                  href="https://t.me/gips_lepka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[22px] font-[500]"
                >
                  Telegram
                  <img src="/telegram.svg" alt="" className="w-[35px]" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/gips_lepka_uz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[22px] font-[500]"
                >
                  Instagram
                  <img src="/instagram.svg" alt="" className="w-[35px]" />
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="tel:+998977718061" className="text-[22px] font-[500] flex items-center gap-2">
                  +998977718061
                  <img src="/phone.svg" alt="phone" className="w-[35px]" />
                </a>
              </li>
              <li>
                <a href="tel:+998903498289" className="text-[22px] font-[500] flex items-center gap-2">
                  +998903498289
                  <img src="/phone.svg" alt="phone" className="w-[35px]" />
                </a>
              </li>
              <li>
                <a href="tel:+998938880838" className="text-[22px] font-[500] flex items-center gap-2">
                  +998938880838
                  <img src="/phone.svg" alt="phone" className="w-[35px]" />
                </a>
              </li>
            </ul>
          </div>
        </Wrapper>
      </div>
    </>
  );
}

export default Footer;
