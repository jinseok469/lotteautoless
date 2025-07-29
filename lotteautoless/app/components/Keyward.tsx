import { useRouter } from "next/navigation";

const Keyward = () => {
    const router = useRouter();
    return <div className="flex flex-col ">
     <div className="flex gap-[8px] mt-[12px]"><button onClick={() => router.push("/search2")} className="whitespace-nowrap bg-[#EBF3FF] px-[12px] py-[8px] rounded-3xl text-[#0566F7] font-[500] text-[16px]">포터</button>
    <button className="whitespace-nowrap bg-[#EBF3FF] px-[12px] py-[8px] rounded-3xl text-[#0566F7] font-[500] text-[16px]">봉고</button>
    <button className="whitespace-nowrap bg-[#EBF3FF] px-[12px] py-[8px] rounded-3xl text-[#0566F7] font-[500] text-[16px]">스타리아</button>
    <button className="whitespace-nowrap bg-[#EBF3FF] px-[12px] py-[8px] rounded-3xl text-[#0566F7] font-[500] text-[16px]">타스만</button>
    <button className="whitespace-nowrap bg-[#EBF3FF] px-[12px] py-[8px] rounded-3xl text-[#0566F7] font-[500] text-[16px]">마이티</button>
    </div>
    <div className="flex gap-[8px] mt-[12px]">
  <button className="whitespace-nowrap bg-[#EBF3FF] px-[12px] py-[8px] rounded-3xl text-[#0566F7] font-[500] text-[16px]">파비스</button>
  <button className=" whitespace-nowrap  bg-[#EBF3FF] px-[12px] py-[8px] rounded-3xl text-[#0566F7] font-[500] text-[16px]">9인승</button>
  <button className="whitespace-nowrap bg-[#EBF3FF] px-[12px] py-[8px] rounded-3xl text-[#0566F7] font-[500] text-[16px]">전기</button>
    </div></div>

}
export default Keyward;