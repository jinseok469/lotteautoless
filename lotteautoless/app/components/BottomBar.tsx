"use client";
import { usePathname, useRouter } from "next/navigation";
import Home from "../../assets/Home.png";
import HomeActive from "../../assets/HomeActive.png";
import Allcar from "../../assets/Allcar.png";
import AllcarActive from "../../assets/AllcarActive.png";
import Meet from "../../assets/Meet.png";
import MeetActive from "../../assets/MeetActive.png";
import Image from "next/image";
import { useState } from "react";
import MeetModal from "./MeetModal";




const BottomBar = () => {
    const pathname = usePathname();
    const isHome = pathname === "/" || pathname === "/search2";
    const isAllcar = pathname === "/allcar";
    const isMeet = pathname === "/meet";
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState(false);


   

    return <div className="fixed z-50 bottom-0 border-t border-[#EFF0F0] left-1/2 rounded-t-3xl transform -translate-x-1/2 w-full max-w-[420px] mx-auto h-[81px] bg-white pt-[12px] pb-[20px] pr-[80px] pl-[80px]">
        <div className="flex justify-between">
            <button onClick={() => router.push("/")}><Image src={isHome ? HomeActive : Home} alt="Home" width={44} height={49} /></button>
            <button ><Image src={isAllcar ? AllcarActive : Allcar} alt="Allcar" width={44} height={49} /></button>
            <button onClick={()=> setModalOpen(true)}><Image src={isMeet ? MeetActive : Meet} alt="Meet" width={44} height={49} /></button>
            <MeetModal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)} />
        </div>

    </div>
}

export default BottomBar;