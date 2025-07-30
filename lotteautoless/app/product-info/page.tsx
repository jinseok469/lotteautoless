'use client'
import Image from "next/image";
import logo from "/assets/lotte-logo.png";
import call from "/assets/lotte-call.png";
import Body from "../components/Body";
import Footer from "../components/Footer";
import BottomBar from "../components/BottomBar";
import { useRouter } from "next/navigation";

const ProductInfo = () => {
    const router = useRouter();
   
    return (
        <div className="bg-white min-h-screen">
           <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[420px] z-10 bg-white border-b border-[#EFF0F0]">
        {/* 헤더 */}
        <div className="pt-[60px] pb-[16px] px-[16px] flex justify-between items-center">
          <button onClick={() => router.push("/")}>
          <Image src={logo} alt="lotte-logo" width={218} height={24} />
          </button>
          <button>
            <div className="text-[12px] font-[500] text-[#E60012] flex flex-col items-center">
              <Image src={call} alt="lotte-call" width={40} height={40} />
              전화상담
            </div>
          </button>
        </div>

      
      </div>
      <div className="pt-[134px]"><Body></Body></div>
      <div className="pb-[81px] bg-[#F9FAFB]"><Footer></Footer></div>
      <div><BottomBar></BottomBar>  </div>
        </div>
    )
}

export default ProductInfo;