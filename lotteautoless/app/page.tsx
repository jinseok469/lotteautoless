'use client'
import { useRef } from 'react';
import Image from "next/image";
import logo from "/assets/lotte-logo.png";
import call from "/assets/lotte-call.png";
import oneton from "/assets/oneton-car.png";
import twoton from "/assets/twoton-car.png";
import onetonteuk from "/assets/onetonteuk-car.png";
import electtronic from "/assets/electronic-car.png";
    import stuff from "/assets/stuff-info.png";
    import popular from "/assets/popular.png";
export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 220, behavior: 'smooth' }); // 카드 너비 + gap
    }
  };
  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <div>
      <div className="fixed h-[138px] top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[430px] z-10 pt-[60px] pb-[16px] px-[16px] flex justify-between items-center bg-[#FFFFFF] border-b border-[#EFF0F0]">

        <div> <Image src={logo} alt="lotte-logo" width={218} height={24} /></div>
        <button> <div className="text-[12px] font-[500] text-[#E60012] flex flex-col items-center"><Image src={call} alt="lotte-call" width={40} height={40} />전화상담</div></button>
      </div>
      <div className=" pt-[138px]">
      <div className="py-[24px] px-[16px] bg-[#FFFFFF] border-b border-[#EFF0F0] flex justify-around gap-[12px]">
        <div className="flex flex-col items-center gap-[12px]"><button><Image src={oneton} alt="1톤" width={68} height={68}></Image></button><span className="text-[14px] font-[600] text-[#000000]">1톤</span></div>
        <div className="flex flex-col items-center gap-[12px]"><button><Image src={onetonteuk} alt="1톤특장" width={68} height={68}></Image></button><span className="text-[14px] font-[600] text-[#000000]">1톤 특장</span></div>
        <div className="flex flex-col items-center gap-[12px]"><button><Image src={twoton} alt="2톤" width={68} height={68}></Image></button><span className="text-[14px] font-[600] text-[#000000]">2톤 이상</span></div>
        <div className="flex flex-col items-center gap-[12px]"><button><Image src={electtronic} alt="전기차" width={68} height={68}></Image></button><span className="text-[14px] font-[600] text-[#000000]">전기</span></div>
        <div className="flex flex-col items-center gap-[12px]"><button><Image src={stuff} alt="상품안내" width={68} height={68}></Image></button><span className="text-[14px] font-[600] text-[#000000]">상품안내</span></div>
      </div>
      </div>
      </div>
      <div className="h-[10px] bg-[#F9FAFB] "></div>
      <div className="bg-[#FFFFFF] px-[16px] py-[40px]">
        <div className="text-[#E60012] font-[500] text-[16px] mb-[8px]">롯데오토리스만의</div>
        <div className="text-[22px] text-[#000000] font-[700]">추천 인기 차종 5선</div>
        <div className="relative">
        {/* 스크롤 영역 */}
        <div
          ref={scrollRef}
          className="flex gap-[12px] overflow-x-auto scroll-smooth no-scrollbar"
        >
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex-none w-[208px] flex flex-col gap-[12px] bg-white">
              <Image src={popular} alt={`popular-${i}`} width={208} height={140} />
              <div className="font-[500] text-[14px] text-[#22262A] leading-snug">
                PORTER (L)2.5T 1톤 초장축 슈퍼캡 스마트 2WD
              </div>
              <div className="text-[#22262A] text-[16px] flex items-center gap-[4px]">
                <span>월</span>
                <span className="text-[22px] font-bold text-black">999,999</span>
                <span>원</span>
              </div>
            </div>
          ))}
        </div>

        {/* 오른쪽 버튼 */}
        <button
          onClick={scrollNext}
          className="absolute top-1/2 right-0 -translate-y-1/2 bg-white shadow-md rounded-full p-2"
        >
          ▶
        </button>
      </div>
      </div>
    </div>
  );
}
