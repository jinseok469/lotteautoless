"use client";
import Image from "next/image";
import search from "/assets/glass.png";
import { useRouter } from "next/navigation";
import Keyward from "../components/Keyward";


const Search = () =>{
    const router = useRouter();
    return <div className=" bg-white ">
        <div className="flex gap-[12px] items-center pt-[56px] pb-[16px] px-[16px] border-b border-[#EFF0F0]"><button onClick={() => router.back()} className="text-[25px]  text-black">←</button><div className="relative flex-1"><input type="text" placeholder="차량명을 검색해보세요" className="w-full h-[48px] rounded-md border border-[#FADBDE] pl-[16px] pr-[40px] py-[16px] text-[16px] font-[500] text-[#636B74]" />
          <button className="absolute right-[12px] top-1/2 -translate-y-1/2 z-0">
    <Image src={search} alt="search" width={18} height={18} />
  </button></div></div>
  <div className="pt-[50px] pb-[16px] px-[16px]"> 
    <div className="text-black  font-[700] text-[22px] mb-[12px]">추천 검색어</div>
    <Keyward></Keyward>
  </div>
    </div>
}

export default Search;