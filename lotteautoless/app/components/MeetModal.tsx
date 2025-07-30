'use client';
import Modal from 'react-modal';
import { useState } from 'react';
import SuccessModal from './SuccessModal';



interface ConsultModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const MeetModal = ({ isOpen, onRequestClose }: ConsultModalProps) => {
  const [agreeAll, setAgreeAll] = useState(false);
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [agree3, setAgree3] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const toggleAll = () => {
    const newValue = !agreeAll;
    setAgreeAll(newValue);
    setAgree1(newValue);
    setAgree2(newValue);
    setAgree3(newValue);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      contentLabel="상담 문의"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50"
      className="scrollbar-none max-w-[500px] w-[90%] max-h-[90vh] overflow-y-auto bg-[#F9FAFB] p-[24px] rounded-[16px] mx-auto mt-[5vh] focus:outline-none"
    >
         {/* 닫기 버튼 */}
      
      <div className='flex justify-between items-center mb-[30px]'>
      <div className="text-[24px] font-bold text-[#22262A]">상담 문의</div>
      <button
        onClick={onRequestClose}
        aria-label="Close modal"
        style={{
          border: 'none',
          fontSize: 40,
          fontWeight: '200',
          cursor: 'pointer',
          lineHeight: 1,
          color: '#22262A',
        }}
      >
        ×
      </button>
      </div>
      {[
        { label: '이름', placeholder: '성함을 입력해주세요' },
        { label: '연락처', placeholder: '연락처를 입력해주세요' },
        { label: '문의 차종', placeholder: '문의하실 차종을 입력해주세요' },
        { label: '문의 내용', placeholder: '문의하고자 하는 내용을 간단히 입력해주세요' },
      ].map(({ label, placeholder }, i) => (
        <div key={i} className="mb-[30px]">
          <div className="font-[700] text-[18px] text-[#22262A] text-[18px]">{label}</div>
          <input
            type="text"
            placeholder={placeholder}
            className="w-full border border-[#EFF0F0] rounded-md p-[12px] mt-[12px] text-[14px] sm:text-[16px]"
          />
        </div>
      ))}

      <div className="mt-[20px] flex items-center justify-start border-t-2 border-[#EFF0F0] pt-[30px]">
        <button
          onClick={toggleAll}
          className={`rounded-full text-[12px] px-[4px] border ${
            agreeAll ? 'bg-[#EF0606] text-white border-[#EF0606]' : 'bg-white text-[#B4B8BB] border-[#B4B8BB]'
          }`}
        >
          ✔
        </button>
        <span className="ml-[10px] text-[14px] text-[#22262A]">모두 동의하기</span>
      </div>

      {[
        { label: '개인정보 제 3자 제공 동의(필수)', agree: agree1, setAgree: setAgree1 },
        { label: '개인정보 취급방침 동의(필수)', agree: agree2, setAgree: setAgree2 },
        { label: '마케팅 활용 수신 동의(선택)', agree: agree3, setAgree: setAgree3 },
      ].map(({ label, agree, setAgree }, idx) => (
        <div key={idx} className="mt-[10px] flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => setAgree(!agree)}
              className={`rounded-full text-[18px] px-[6px] ${
                agree ? 'bg-[#F9FAFB] text-[#EF0606]' : 'bg-[#F9FAFB] text-[#B4B8BB]'
              }`}
            >
              ✔
            </button>
            <span className="ml-[5px] text-[14px] text-[#22262A]">{label}</span>
          </div>
          <button className="border-b border-[#B4B8BB] text-[#B4B8BB] text-[14px]">보기</button>
        </div>
      ))}

      <div className="mt-[50px]">
        <button  onClick={() => {
    setSuccessModalOpen(true);
  }} className="w-full bg-[#EF0606] text-white p-5 rounded-md text-[22px] font-[700]">
          최저가 견적 신청
        </button>
      <SuccessModal isOpen={successModalOpen} onRequestClose={() => setSuccessModalOpen(false)} />
      </div>
    </Modal>
  );
};

export default MeetModal;
