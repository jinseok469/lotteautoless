"use client";
import Image from "next/image";
import search from "/assets/glass.png";
import { useRouter } from "next/navigation";
import ScrollContainer from "react-indiana-drag-scroll";
import BottomBar from "../components/BottomBar";
import search2_porter from "/assets/search2-porter.png";

const Search2 = () =>{
    const router = useRouter();
    return <div>
        <div className="fixed max-w-[420px] mx-auto w-full z-50 bg-white">
         <div className="flex gap-[12px] items-center pt-[56px] pb-[8px] px-[16px] "><button onClick={() => router.back()} className="text-[25px]  text-black">←</button><div className="relative flex-1"><input type="text" placeholder="차량명을 검색해보세요" className="w-full h-[48px] rounded-md border border-[#FADBDE] pl-[16px] pr-[40px] py-[16px] text-[16px] font-[500] text-[#636B74]" />
          <button className="absolute right-[12px] top-1/2 -translate-y-1/2 z-0">
    <Image src={search} alt="search" width={18} height={18} />
  </button></div>
  
  </div>
  <ScrollContainer 
        // 여기서 ref 연결
        className="flex gap-[12px] overflow-x-auto scroll-smooth scrollbar-none cursor-grab active:cursor-grabbing"
        vertical={false}
      >
  <div className="flex gap-[8px] mt-[12px] px-[16px]"><button className="flex-shrink-0 bg-[#FEFAFB] px-[12px] py-[8px] rounded-3xl text-[#E60012] font-[500] text-[16px] border border-[#F4717C]">포터</button>
    <button className="flex-shrink-0 bg-[#FFFFFF] px-[12px] border border-[#DFE0E2] py-[8px] rounded-3xl text-[#636B74] font-[500] text-[16px]">봉고</button>
    <button className="flex-shrink-0 bg-[#FFFFFF] px-[12px] border border-[#DFE0E2] py-[8px] rounded-3xl text-[#636B74] font-[500] text-[16px]">스타리아</button>
    <button className="flex-shrink-0 bg-[#FFFFFF] px-[12px] border border-[#DFE0E2] py-[8px] rounded-3xl text-[#636B74] font-[500] text-[16px]">타스만</button>
    <button className="flex-shrink-0 bg-[#FFFFFF] px-[12px] border border-[#DFE0E2] py-[8px] rounded-3xl text-[#636B74] font-[500] text-[16px]">마이티</button>
  <button className="flex-shrink-0 bg-[#FFFFFF] px-[12px] border border-[#DFE0E2] py-[8px] rounded-3xl text-[#636B74] font-[500] text-[16px]">파비스</button>
  <button className="flex-shrink-0 bg-[#FFFFFF] px-[12px] border border-[#DFE0E2] py-[8px] rounded-3xl text-[#636B74] font-[500] text-[16px]">9인승</button>
  <button className="flex-shrink-0 bg-[#FFFFFF] px-[12px] border border-[#DFE0E2] py-[8px] rounded-3xl text-[#636B74] font-[500] text-[16px]">전기</button>
    </div>
    </ScrollContainer>
    <div className="px-[16px] py-[16px] text-black text-[18px] font-[500] text-[#22262A] border-b border-[#EFF0F0]">총 <span className="font-[500] text-[22px] font-bold text-[#000000]">999</span> 대 차량이 있어요</div>
    </div>
    <div className="px-[16px] flex flex-col gap-[12px] pt-[260px] z-0 pb-[100px]">
        {Array.from({length:10}).map((item,i)=>{
            return <div key={i} className="flex flex-col">
                <button onClick={() => router.push("/product")} className=" text-left">
                <div className="bg-[#F9FAFB] p-[8px]">
                <Image src={search2_porter} alt="car" width={388} height={188} />
                <div className="flex gap-[4px] items-center">
                    <div className="text-[#0566F7] text-[14px] font-[500] py-[4px] px-[8px] bg-[#EBF3FF] rounded-md">탑차</div>
                    <div className="text-[#0566F7] text-[14px] font-[500]  py-[4px] px-[8px] bg-[#EBF3FF] rounded-md">양문형</div>
                </div>
                </div>
                <div className="flex flex-col mt-[12px] ">
                    <div className="font-[500] text-[16px] text-[#22262A]">PORTER (L)2.5T 1톤 초장축 슈퍼캡 스마트 2WD</div>
                    <div className="font-bold text-[22px] text-[#000000]">999,999<span className="font-[500] text-[22px] ml-[2px]">원</span></div>
                    <div className="font-[400] text-[13px] text-[#636B74]">60개월·초기비용 0원 진행 시</div>
                </div></button>
            </div>
        })}
    </div>
   <BottomBar></BottomBar>
    </div>
}

export default Search2;