import { useEffect } from "react";
import footer from "/assets/footer.png";
import Image from "next/image";

const Footer = () => {
    useEffect(() => {
        const handleContextMenu = (e: MouseEvent) => e.preventDefault();
        document.addEventListener('contextmenu', handleContextMenu);
        return () => document.removeEventListener('contextmenu', handleContextMenu);
      }, []);
    
    return (
        <div className="w-[420px] h-[1500px] p-6 font-sans text-gray-800 bg-white select-text">
        {/* 상단 로고 */}
        <div className="flex items-center gap-4 mb-6">
          {/* 롯데오토리스 로고 텍스트 */}
          <span className="text-red-600 font-bold text-xl">롯데오토리스</span>
          <span className="text-gray-600 text-xl font-semibold">×</span>
          {/* A1auto 로고 (대체 텍스트) */}
          <span className="font-bold text-2xl">A1auto</span>
        </div>
  
        {/* 고객센터 */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">(연중무휴)</p>
          <p className="text-2xl font-extrabold flex items-center gap-2">
            <svg
              className="w-6 h-6 fill-current text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M6.62 10.79a15.09 15.09 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.2.48 2.5.74 3.85.74a1 1 0 011 1v3.5a1 1 0 01-1 1A17 17 0 013 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.26 2.65.74 3.85a1 1 0 01-.21 1.11z" />
            </svg>
            1899-5875
          </p>
        </div>
  
        {/* Contact */}
        <div className="mb-6">
          <h3 className="font-bold text-lg mb-2">Contact</h3>
          <p className="text-sm text-gray-600 mb-1">
            대표번호 <span className="font-semibold text-gray-800">1899-5875</span> &nbsp; 팩스 <span className="font-semibold">0504-235-6797</span> &nbsp; 이메일 <span className="font-semibold text-gray-700">a1auto1@naver.com</span>
          </p>
          <hr className="border-gray-300 my-4" />
        </div>
  
        {/* 리스트 시작 */}
        <ul className="space-y-4 text-sm leading-relaxed">
          <li><span className="font-semibold">상품종류</span> 신차운용리스</li>
          <li><span className="font-semibold">이용가능차종</span> 상용차</li>
          <li><span className="font-semibold">이용기간</span> 12~60개월</li>
          <li><span className="font-semibold">보증금 조건</span> 연장/반납/인수 중 선택</li>
          <li><span className="font-semibold">지연배상금율</span> (연체이자율) 운용리스 20% (법정최고금리이내)</li>
          <li><span className="font-semibold">상환방식</span> 원리금균등분할상환</li>
          <li><span className="font-semibold">인지세</span> 당사와 고객 각각 50% 부담</li>
          <li><span className="font-semibold">보험</span> 이용자 직접 부보/리스사부보 중 선택(고객 요율 적용)</li>
          <li>
            <span className="font-semibold">중도해지 손해배상금</span><br />
            미회수원금 × 중도해지 손해배상금률(50%) × (잔여일수/총 계약일수)
          </li>
          <li>
            <span className="font-semibold">승계수수료</span><br />
            미회수원금 × 승계수수료율(2%) × (잔여일수/총 계약일수)<br />
            (최저 25만원, 최대 100만원)
          </li>
          <li>
            <span className="font-semibold">규정 손해배상금</span><br />
            미회수원금 × 수수료율(20%) × (잔여일수/총 계약일수)
          </li>
          <li>
            <span className="font-semibold">가치감가금액</span> 반환시점의 자동차의 기대가치(혹은 중고차 시세) × 감가율의 합
          </li>
          <li>
            <span className="font-semibold">정비 서비스</span><br />
            정비불포함/일반형/실속형/고급형 정비 중 선택<br />
            (친환경차: EV일반형/EV고급형 중 선택)
          </li>
          <li>
            <span className="font-semibold">저당설정</span> 근저당 설정은 고객의 개인신용평점에 따라 차등 적용<br />
            근저당설정비용 당사부담/해지비용고객부담
          </li>
          <li>
            <span className="font-semibold">반환지연금</span> {`{일리스료+[일리스료X반환지연금율(200%)]}`} × 경과일수
          </li>
        </ul>
  
        {/* 하단 각주 */}
        <div className="mt-8 space-y-3 text-xs text-gray-600 leading-tight">
          <p>※ 본 상품은 여신전문금융회사인 롯데오토리스의 운용리스 상품입니다.</p>
          <p>※ (주)에이원오토는 롯데오토리스 금융회사의 신차 운용리스 고객 모집 업무를 대리·중개합니다.</p>
          <p>※ (주)에이원오토는 다수의 금융회사의 상품을 대리하거나 중개합니다.</p>
          <p>※ 금융상품질접판매업자로부터 금융상품 계약체결권을 부여받지 아니한 금융상품판매대리·중개업자의 경우 금융상품계약을 체결할 수 없습니다.</p>
          <p>※ (주)에이원오토는 롯데오토리스 금융회사의 금융상품에 대한 계약체결 권한이 없습니다.</p>
          <p>※ (주)에이원오토는 금융관계법률에 따라 등록되어 있는 금융상품판매대리·중개업자입니다.</p>
          <p>※ 대출 취급이 부적합할 경우(개인신용평점 낮음, 연체사유 발생 등) 대출 취급이 제한될 수 있습니다.</p>
          <p>※ 소비자는 금소법에 따라 해당상품 또는 서비스에 대하여 설명을 받을 권리가 있습니다.</p>
          <p>※ 이자 납입일(매월)에 이자(후취)를 납입하여야 합니다.</p>
          <p>※ 계약을 체결하기 전에 금융상품설명서와 약관을 확인하시기 바랍니다.</p>
          <p>※ 상환능력에 비해 리스상환금액이 과도할 경우, 귀하의 개인신용 평점이 하락할 수 있습니다.</p>
          <p>※ 개인신용평점 하락 시 금융거래와 관련된 불이익이 발생할 수 있습니다.</p>
          <p>※ 일정기간 원리금을 연체할 경우, 모든 원리금을 변제할 의무가 발생할 수 있습니다.</p>
          <p>※ 준법감시인 사전심의 제 2025 - 000호</p>
          <p>※ 여신금융협회 심의필 제 2025 - C1g - 000000호 2025.00.00 ~ 2026.00.00</p>
          <p>※ 본 상품의 일부 차종은 재고 대수가 한정되어 조기에 마감될 수 있습니다. 재고는 상담 문의를 통해 확인할 수 있습니다.</p>
        </div>
      </div>
    )
}

export default Footer;