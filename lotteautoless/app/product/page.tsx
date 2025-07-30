'use client'
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import search2_porter from "/assets/search2-porter.png";
import { useState } from "react";
import Swal from "sweetalert2";
import Body from "../components/Body";
import Footer from "../components/Footer";
import DeepLookModal from "../components/DeepLookModal";
import MeetModal from "../components/MeetModal";

const Product = () => {
    const router = useRouter();
    const [year, setYear] = useState<number>(5);
    const [km, setKm] = useState<number>(4);
    const [isOn, setIsOn] = useState(false);
    const [startButton, setStartButton] = useState<string>("보증금");
    const [startPercent, setStartPercent] = useState<number>(10);
    const [modalOpen, setModalOpen] = useState(false);
    const [meetModalOpen, setMeetModalOpen] = useState(false);
   

    return <div className="pt-[56px] h-screen overflow-y-auto scrollbar-none">
<div className="flex gap-[12px] items-center  pb-[8px] px-[16px]"><button onClick={() => router.back()} className="text-[25px]  text-black">←</button>
<div className="font-[700] text-[22px] text-[#22262A]"> 상세 견적</div>

</div>
<div className="flex flex-col   pb-[16px] ">
                <div className=" text-left">
                <div className="bg-[#F9FAFB] ">
                <div className="flex gap-[4px] items-center translate-y-[10px] pb-[8px] px-[16px]">
                    <div className="text-[#0566F7] text-[14px] font-[500] py-[4px] px-[8px] bg-[#EBF3FF] rounded-md">탑차</div>
                    <div className="text-[#0566F7] text-[14px] font-[500]  py-[4px] px-[8px] bg-[#EBF3FF] rounded-md">양문형</div>
                </div>
                <div className="-translate-y-[10px]"><Image src={search2_porter} alt="car" width={388} height={188} /></div>
                </div>
                <div className="flex flex-col mt-[12px] pb-[8px] px-[16px]">
                    <div className="font-[500] text-[16px] text-[#22262A]">PORTER (L)2.5T 1톤 초장축 슈퍼캡 스마트 2WD</div>
                    <div className="font-bold text-[22px] text-[#000000]"><span className="text-[18px] font-[500] mr-[2px]">월</span>999,999<span className="font-[500] text-[18px] ml-[2px]">원</span></div>
                    <div className="font-[400] text-[13px] text-[#636B74]">60개월·초기비용 0원 진행 시</div>
                </div></div>
            </div>
            <div className="flex justify-between items-center  mx-[16px]  py-[16px] border-t border-[#EFF0F0] relative">
                <button onClick={() => setModalOpen(true)} className="whitespace-nowrap font-[500] text-[14px] text-[#636B74] px-[60px]">자세히 보기</button>
                <DeepLookModal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)} />
                <div className="absolute left-1/2 top-3/5 -translate-x-1/2 -translate-y-3/5 h-5 w-[2px] bg-[#F9FAFB]"></div>

                <button className="whitespace-nowrap font-[500] text-[14px] text-[#636B74]  px-[60px]">공유하기</button>
            </div>
            <div className="bg-[#F9FAFB] p-[6px] w-full"></div>
            <div className="py-[24px] px-[16px]">
                <div className="flex gap-[8px] items-center">
                    <div className="font-[700] text-[22px] text-[#22262A]">계약기간</div>
                    <div className="text-white bg-[#C9CCCF] h-[20px] w-[20px]  rounded-full text-[12px] items-center flex justify-center">?</div>
                </div>
                <div className="flex  bg-[#F9FAFB] p-[4px] justify-between rounded-lg mt-[12px]">
                    <button onClick={() => setYear(3)} className={`whitespace-nowrap font-[600] text-[18px]  flex-1 py-[20px] rounded-lg ${year === 3 ? "bg-white text-[#F90619] shadow-sm" : "text-[#B4B8BB]"}`}>3년</button>
                    <button onClick={() => setYear(4)} className={`whitespace-nowrap font-[600] text-[18px]  flex-1 py-[20px] rounded-lg ${year === 4 ? "bg-white text-[#F90619] shadow-sm" : "text-[#B4B8BB]"}`}>4년</button>
                    <button onClick={() => setYear(5)} className={`whitespace-nowrap font-[600] text-[18px]  flex-1 py-[20px] rounded-lg  ${year === 5 ? "bg-white text-[#F90619] shadow-sm" : "text-[#B4B8BB]"}`}>5년</button>
                </div>
            </div>
            <div className="py-[24px] px-[16px] ">
                <div className="flex gap-[8px] items-center">
                    <div className="font-[700] text-[22px] text-[#22262A]">주행거리</div>
                    <div className="text-white bg-[#C9CCCF] h-[20px] w-[20px]  rounded-full text-[12px] items-center flex justify-center">?</div>
                </div>
                <div className="flex  bg-[#F9FAFB] p-[4px] justify-between rounded-lg mt-[12px]">
                    <button onClick={() => setKm(2)} className={`whitespace-nowrap font-[600] text-[18px]  flex-1 py-[20px] rounded-lg ${km === 2 ? "bg-white text-[#F90619] shadow-sm" : "text-[#B4B8BB]"}`}>2만km</button>
                    <button onClick={() => setKm(3)} className={`whitespace-nowrap font-[600] text-[18px]  flex-1 py-[20px] rounded-lg ${km === 3 ? "bg-white text-[#F90619] shadow-sm" : "text-[#B4B8BB]"}`}>3만km</button>
                    <button onClick={() => setKm(4)} className={`whitespace-nowrap font-[600] text-[18px]  flex-1 py-[20px] rounded-lg  ${km === 4 ? "bg-white text-[#F90619] shadow-sm" : "text-[#B4B8BB]"}`}>4만km</button>
                </div>
            </div>
            <div className="py-[24px] px-[16px] pb-[10px]">
            <div className="flex gap-[8px] items-center">
                    <div className="font-[700] text-[22px] text-[#22262A]">초기비용</div>
                    <div className="text-white bg-[#C9CCCF] h-[20px] w-[20px]  rounded-full text-[12px] items-center flex justify-center">?</div>
                    <div> <button
      onClick={() => setIsOn(!isOn)}
      className={`w-[60px] h-[32px] rounded-full transition-all duration-300 px-[4px] ${
        isOn ? "bg-[#F90619]" : "bg-[#EFF0F0]"
      } flex items-center`}
    >
      <div
        className={`w-[24px] h-[24px] rounded-full bg-white transition-all duration-300   shadow-[0_4px_20px_rgba(0,0,0,0.3)] transform ${
          isOn ? "translate-x-[28px]" : "translate-x-0"
        }`}
      />
      <div className={`text-[16px] font-[500] text-[#636B74] flex-1 ${isOn ? "hidden" : ""}`}>0원</div>
    </button></div>
                </div>
                {isOn ? (
                     <motion.div
                     key="on"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -20 }}
                     transition={{ duration: 0.3 }}
                     className="mt-[20px]"
                   >
                <div className="mt-[20px]">
                    <div className="flex justify-between items-center ">
                        <button onClick={()=> setStartButton("보증금")} className={`font-[600]  text-[18px] py-[16px] flex-1  ${startButton === "보증금" ? "text-[#000000] border-b-2 border-black" : "text-[#B4B8BB] border-b border-[#B4B8BB]"}`}>보증금</button>
                        <button onClick={()=> setStartButton("선납금")} className={`font-[600]  py-[16px] text-[18px] flex-1 ${startButton === "선납금" ? "text-[#000000] border-b-2 border-black" : "text-[#B4B8BB] border-b border-[#B4B8BB]"}`}>선납금</button>
                    </div>
                    <div className="flex  bg-[#F9FAFB] p-[4px] justify-between rounded-lg my-[20px]">
                    <button onClick={() => setStartPercent(10)} className={`whitespace-nowrap font-[600] text-[18px]  flex-1 py-[20px] rounded-lg ${startPercent === 10 ? "bg-white text-[#F90619] shadow-sm" : "text-[#B4B8BB]"}`}>10%</button>
                    <button onClick={() => setStartPercent(20)} className={`whitespace-nowrap font-[600] text-[18px]  flex-1 py-[20px] rounded-lg ${startPercent === 20 ? "bg-white text-[#F90619] shadow-sm" : "text-[#B4B8BB]"}`}>20%</button>
                    <button onClick={() => setStartPercent(30)} className={`whitespace-nowrap font-[600] text-[18px]  flex-1 py-[20px] rounded-lg  ${startPercent === 30 ? "bg-white text-[#F90619] shadow-sm" : "text-[#B4B8BB]"}`}>30%</button>
                </div>
                </div>
                </motion.div>
                ):(
                    <motion.div
                     key="off"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -20 }}
                     transition={{ duration: 0.3 }}
                    
                   >
                <div className="mt-[16px] bg-[#FEFAFB]  rounded-2xl w-full p-[24px] mb-[20px]">
          <div><span className="text-[#E60012]">↑ </span><span className="text-[16px] font-[500] text-[#000000]"> 초기비용을 설정하고 월 이용료를 낮춰보세요</span></div>
          <div className="text-[#F4717C] text-[14px] font-[500] mt-[12px]">많은 사람들이 초기 비용을 통해<br></br>
          더 저렴하게 차량을 이용하고 있어요</div>
        </div>
        </motion.div>
            )}
       
       
            </div>
            <div className="bg-[#F9FAFB] p-[6px] w-full"></div>
            <div><Body /></div>
            <div className="pb-[188px] bg-[#F9FAFB]"><Footer /></div>
            <div className="fixed z-50 bottom-0 border-t border-[#EFF0F0] left-1/2 rounded-t-3xl transform -translate-x-1/2 w-full max-w-[420px] mx-auto h-[188px] bg-white pt-[16px] pb-[40px] pr-[16px] pl-[16px]">
        <div className="flex justify-between">
            <div className="flex justify-around gap-[30px] items-center">
                <div className="line-clamp-1 text-[14px] font-[500] text-[#22262A] flex-1">PORTER (L)2.5T 1톤 초장축 슈퍼캡 스마트 2WD</div>
                <div><span className="text-[18px] font-[500] text-[#636B74] mr-[2px]">월</span><span className="font-[700] text-[22px] text-[#000000]">999,999</span><span className="font-[500] text-[18px] text-[#22262A] ml-[2px]">원</span></div>
            </div>
        </div>
        <div className="flex justify-around gap-[8px]">
            <button onClick={() => router.push("/")} className="text-[#636B74] text-[20px] font-[500] mt-[24px] p-[24px] bg-[#F9FAFB] rounded-lg">홈으로</button>
            <button onClick={() => setMeetModalOpen(true)} className="flex-1 text-white text-[20px] font-[500] mt-[24px] p-[24px] bg-[#E60012] rounded-lg">최저가 견적 신청</button>
            <MeetModal isOpen={meetModalOpen} onRequestClose={() => setMeetModalOpen(false)} />
</div>
    </div>
</div>

}

export default Product;