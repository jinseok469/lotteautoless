'use client';
import React, { useEffect } from 'react';
import Modal from 'react-modal';

const DeepLookModal = ({
  isOpen,
  onRequestClose,
}: {
  isOpen: boolean;
  onRequestClose: () => void;
}) => {
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      Modal.setAppElement("#__next");
    }
  }, []);
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      shouldFocusAfterRender={false}
      contentLabel="상세 견적"
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          maxWidth: '420px',
          width: '90vw',
          maxHeight: '90vh',
          borderRadius: '20px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        },
        overlay: {
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 1000,
        },
      }}
    >
     

      {/* 스크롤 가능한 영역 */}
      <div
        style={{
          flexGrow: 1,
          scrollbarWidth: 'none',
          overflowY: 'auto',
          paddingRight: 10, // 스크롤 생겨도 레이아웃 밀림 방지
        }}
      >
        {/* --- 내용 영역 시작 --- */}
        <div className='flex justify-between items-center mb-[30px]'>
      <div className="text-[24px] font-bold text-[#22262A]">세부사항</div>
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
        <div style={{ fontSize: 16, fontWeight: 500, color: '#22262A', marginBottom: 35 }}>
          PORTER (L)2.5T 1톤 초장축 슈퍼캡 스마트 2WD
        </div>

        <div style={{ fontSize: 18, fontWeight: 600, color: '#22262A', marginBottom: 20 }}>
          추가 옵션
        </div>
        <div style={{ fontSize: 14, fontWeight: 400, color: '#22262A', marginBottom: 10 }}>
          · 스노우 화이트 펄 외장 컬러 (+80,000원)
        </div>
        <div style={{ fontSize: 14, fontWeight: 400, color: '#22262A', marginBottom: 30 }}>
          · 드라이브 와이즈 (+970,000원)
        </div>

        <hr />

        <div style={{ marginTop: 30, fontSize: 18, fontWeight: 600, color: '#22262A', marginBottom: 20 }}>
          차량가격
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { label: '기본 가격', value: '99,000,000원' },
            { label: '옵션 가격', value: '99,000,000원' },
            { label: '할인', value: '99,000,000원' },
            {
              label: '최종 가격',
              value: (
                <span style={{ fontWeight: 'bold', fontSize: 20, color: '#22262A' }}>
                  10,000,000
                  <span style={{ fontSize: 16, fontWeight: 500, color: '#22262A' }}>원</span>
                </span>
              ),
            },
          ].map(({ label, value }) => (
            <div key={label} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ fontSize: 16, fontWeight: 500, color: '#636B74', flex: 1 }}>{label}</div>
              <div style={{ fontSize: 16, fontWeight: 500, color: '#22262A', flex: 1, textAlign: 'right' }}>
                {value}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 30, fontSize: 18, fontWeight: 600, color: '#22262A', marginBottom: 20 }}>
          계약 상세
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { label: '계약 기간', value: '60개월' },
            { label: '계약 방식', value: '리스' },
            { label: '주행 거리', value: '연간 20,000km' },
            {
              label: '초기 부담금',
              value: (
                <span>
                  <span style={{ fontWeight: 500, fontSize: 16, color: '#636B74' }}>선납금 30% </span> 9,900,000원
                </span>
              ),
            },
            {
              label: '만기 인수 가격',
              value: (
                <span>
                  <span style={{ fontWeight: 500, fontSize: 16, color: '#636B74' }}>(99%) </span>99,000,000원
                </span>
              ),
            },
            {
              label: '월 납입료',
              value: (
                <span style={{ fontWeight: 'bold', fontSize: 20, color: '#22262A' }}>
                  10,000,000
                  <span style={{ fontSize: 16, fontWeight: 500, color: '#22262A' }}>원</span>
                </span>
              ),
            },
          ].map(({ label, value }) => (
            <div key={label} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ fontSize: 16, fontWeight: 500, color: '#636B74', flex: 1 }}>{label}</div>
              <div style={{ fontSize: 16, fontWeight: 500, color: '#22262A', flex: 1, textAlign: 'right' }}>
                {value}
              </div>
            </div>
          ))}
        </div>
        {/* --- 내용 영역 끝 --- */}
      </div>
    </Modal>
  );
};

export default DeepLookModal;
