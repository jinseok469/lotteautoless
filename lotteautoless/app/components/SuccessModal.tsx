'use client'

import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { usePathname, useRouter } from 'next/navigation';
        
const SuccessModal = ({ isOpen, onRequestClose }: { isOpen: boolean, onRequestClose: () => void }) => {
    const router = useRouter();
    const pathname = usePathname();
    useEffect(() => {
        if (typeof window !== "undefined") {
          Modal.setAppElement("#__next");
        }
      }, []);
      
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Success Modal"
            ariaHideApp={false}
            shouldFocusAfterRender={false}
            shouldCloseOnOverlayClick={false}
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center "

      className="scrollbar-none text-center max-w-[500px] w-[90%] max-h-[90vh] pt-[80px] px-[24px]  overflow-y-auto bg-white p-[24px] rounded-2xl  mt-[5vh] focus:outline-none"
        >
            <div className='font-[700] text-[22px]  text-[#22262A]  mb-[20px] mt-[60px]'>최저가 견적 신청을 완료했어요</div>
            <div className='font-[400] text-[16px] text-[#636B74] mb-[10px]'>고객님을 위한 견적을 준비하고 있어요</div>
            <div className='font-[400] text-[16px] text-[#636B74] mb-[80px]'>전문 상담원이 직접 연락드려요</div>
            <button onClick={()=>{pathname === "/" ? window.location.reload():router.push('/')} } className='w-full bg-[#EF0606] text-white p-5 rounded-md text-[22px] font-[700]'>홈으로 돌아가기</button>
        </Modal>
    )
}
export default SuccessModal;