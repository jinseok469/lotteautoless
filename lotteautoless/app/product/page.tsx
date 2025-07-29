'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import search2_porter from "/assets/search2-porter.png";

const Product = () => {
    const router = useRouter();
    return <div>
<div className="fixed max-w-[420px] mx-auto w-full z-50 bg-white">
<div className="flex gap-[12px] items-center pt-[56px] pb-[8px] px-[16px] "><button onClick={() => router.push("/")} className="text-[25px]  text-black">←</button>
<div className="font-[700] text-[22px] text-[#22262A]"> 상세 견적</div>

</div>
<div className="flex flex-col px-[16px]">
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
                    <div className="font-bold text-[22px] text-[#000000]"><span className="text-[18px] font-[500] mr-[2px]">월</span>999,999<span className="font-[500] text-[18px] ml-[2px]">원</span></div>
                    <div className="font-[400] text-[13px] text-[#636B74]">60개월·초기비용 0원 진행 시</div>
                </div></button>
            </div>
</div>
    </div>
}

export default Product;