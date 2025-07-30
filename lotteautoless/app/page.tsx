'use client';
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import logo from "/assets/lotte-logo.png";
import call from "/assets/lotte-call.png";
import oneton from "/assets/oneton-car.png";
import twoton from "/assets/twoton-car.png";
import onetonteuk from "/assets/onetonteuk-car.png";
import electtronic from "/assets/electronic-car.png";
import stuff from "/assets/stuff-info.png";
import popular from "/assets/popular.png";
import bannerCar from "/assets/banner-car.png";
import ScrollContainer from "react-indiana-drag-scroll";
import search from "/assets/glass.png";
import now from "/assets/now-car.png";
import mighty from "/assets/mighty.png";
import tarsman from "/assets/tarsman.png";
import porter from "/assets/porter.png";
import star from "/assets/star.png";
import Footer from "./components/Footer";
import BottomBar from "./components/BottomBar";
import { useRouter } from "next/navigation";
import Keyward from "./components/Keyward";
import bongo from "/assets/bongo.png";
import parsive from "/assets/parsive.png";
import tarsman_two from "/assets/tarsman-two.png";
import staria from "/assets/staria.png";
import porter_two from "/assets/porter_two.png";
const reviews = [
  {
    name: '김** 고객님',
    model: '마이티',
    location: '서울',
    date: '25.07.17',
    image: mighty,
    text:
      '원래 다른 캐피탈 통해 계약하려다가 롯데오토리스 추천받고 바로 바꿨는데 생각보다도 훨씬 출고가 빨랐어요. 주변에서 3달 걸린다는데 저는 2주만에 받았습니다. 게다가 타스만 X-Pro 트림이라 옵션까지 까다로웠는데, 원하던 색상 그대로 맞춰주신 점도 감사했어요. 사업용으로 급하게 필요했는데, 정말 제 타이밍에 딱 맞춰 나온 느낌입니다.',
  },
  {
    name: '이** 고객님',
    model: '타스만',
    location: '서울',
    date: '25.07.17',
    image: tarsman,
    text:
      '타스만 장기렌트 찾고 있었는데, 롯데오토리스 통해서 저한테 딱 맞는 견적을 만났고 타사보다 조건이 훨씬 유리해서 계약했습니다. 직원분이 상용차에 대한 이해도가 높아서, 저희 업종에 맞게 톤수와 적재 조건까지 체크해주시더라고요. 단순 렌트가 아니라 진짜 ‘맞춤형 상담’이라는 느낌, 정말 만족했습니다.',
  },
  {
    name: '박** 고객님',
    model: '포터',
    location: '경기',
    date: '25.07.17',
    image: porter,
    text:
      '이미 다른 업체 통해서 포터를 운용하고 있었는데 이전과 동일한 옵션에 정비 서비스까지 포함됐는데도 리스료가 훨씬 저렴해져서 놀랐어요.',
  },
  {
    name: '최** 고객님',
    model: '스타리아',
    location: '서울',
    date: '25.07.17',
    image: staria,
    text:
      '팀 단위 움직일 수 있도록 9인승 스타리아가 필요했는데 일반 영업점보다 진행 과정이 더 빠르고 간결한 느낌이었어요. 원하는 옵션이며 친절한 상담에 너무 만족스러웠습니다.',
  },
];

const reviews_2 =[
  {
    name: '정** 고객님',
    model: '봉고',
    location: '강원',
    date: '25.07.17',
    image: bongo,
    text:
      '급하게 차량이 필요했고, 저렴하게 사는 건 반쯤 포기하고 있었는데 미리 잡아둔 신차 물량 안에서 원하는 차량을 싸게 골라 타는 느낌이라 저 같은 사람한테는 정말 최고의 서비스였던 것 같아요.',
  },
  {
    name: '이** 고객님',
    model: '파시브',
    location: '충북',
    date: '25.07.17',
    image: parsive,
    text:
      '비용 절감이나 여러 측면에서 봤을 때 리스 구매가 필요했고 주변에서 추천해 준 롯데오토리스 통해서 파시브 차량 출고했어요.',
  },
  {
    name: '홍** 고객님',
    model: '타스만',
    location: '경기',
    date: '25.07.17',
    image: tarsman_two,
    text:
      '어딜 가도 최소 한 달은 넘게 기다릴 생각 하고 있었는데.. 견적은 제일 저렴한데 출고는 가장 빠른..ㅋㅋ 덕분에 너무 잘 타고 있습니다!',
  },
  {
    name: '서** 고객님',
    model: '포터',
    location: '경기',
    date: '25.07.17',
    image: porter_two ,
    text:
      '확실히 특장차를 전문으로 다루다보니 제가 가진 고민에 딱 맞는 차량을 추천하고, 유리한 조건으로 정돈해주셔서 바로 진행해버렸습니다. 전문가 상담이라는 게 확실히 이런게 장점인 듯 해요.',
  },
]


  
    
export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);


  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 220, behavior: "smooth" }); // 208 + 12 간격 정도
      setShowLeftButton(true);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      if (scrollLeft <= 0) {
        setShowLeftButton(false);
      } else {
        setShowLeftButton(true);
      }
    }
  };
 
  useEffect(() => {
    const handlewindowScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 1);
    };
  
    window.addEventListener('scroll', handlewindowScroll);
    return () => window.removeEventListener('scroll', handlewindowScroll);
  }, []);
  
  

  return (
    <div className="bg-white h-screen overflow-y-auto scrollbar-none">
      {/* 고정 헤더 + 메뉴 통합 */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[420px] z-10 bg-white">
        {/* 헤더 */}
        <div className="pt-[60px] pb-[16px] px-[16px] flex justify-between items-center">
          <button>
          <Image src={logo} alt="lotte-logo" width={218} height={24} />
          </button>
          <button>
            <div className="text-[12px] font-[500] text-[#E60012] flex flex-col items-center">
              <Image src={call} alt="lotte-call" width={40} height={40} />
              전화상담
            </div>
          </button>
        </div>

        {/* 메뉴 */}
        <div className="py-[24px] px-[16px] flex justify-around gap-[12px] border-t border-[#EFF0F0]">
          {[
            { src: oneton, label: "1톤" },
            { src: onetonteuk, label: "1톤 특장" },
            { src: twoton, label: "2톤 이상" },
            { src: electtronic, label: "전기" },
            { src: stuff, label: "상품안내" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-[12px]">
              <button onClick={() => item.label === "상품안내" ? router.push("/product-info") : null}>
              {!isScrolled && (
          <Image src={item.src} alt={item.label} width={68} height={68} />
        )}
             
              <div className="text-[14px] font-[600] text-black mt-[12px]">{item.label}</div>
              </button>
            </div>
          ))}
        </div>
        <div className="h-[12px] bg-[#F9FAFB]"></div>
      </div>

      {/* 고정된 헤더 높이만큼 margin-top */}
      <div className="pt-[300px]" />

      {/* 본문 */}
      <div className="pt-[40px] pr-[16px] pb-[40px] pl-[16px] relative max-w-[430px] mx-auto">
        <div className="text-[16px] font-[500] text-[#E60012] mb-[8px]">롯데오토리스만의</div>
        <div className="text-[#000000] font-[700] text-[22px] mb-[10px]">추천 인기 차종 5선</div>

        {/* 스크롤 영역 + 버튼 */}
        <div className="relative">
          {/* 왼쪽 버튼 (원하면) */}
          {/* <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-20"
          >
            ◀
          </button> */}
            {showLeftButton && (
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/3 z-0 -translate-y-1/2 bg-white px-1 shadow-md  py-1  ml-1 rounded-full h-[28px] w-[28px] flex items-center justify-center"
        >
         <span className="text-[18px] font-[500] text-[#F90619]"> ←</span>
        </button>
      )}

          {/* 가로 스크롤 영역 */}
          
          <ScrollContainer onScroll={handleScroll}
        innerRef={scrollRef} // 여기서 ref 연결
        className="flex gap-[12px] overflow-x-auto scroll-smooth scrollbar-none cursor-grab active:cursor-grabbing"
        vertical={false}
      >
            {[...Array(5)].map((_, i) => (
              <button  onClick={()=>router.push("/product")}
                key={i}
                className="flex-shrink-0 h-[228px] w-[208px] flex flex-col  bg-white rounded-md text-left"
              >
                <Image src={popular} alt={`popular-${i}`} width={208} height={140} />
                <div className="font-[500] text-[14px] text-[#22262A] leading-snug mt-[12px]">
                  PORTER (L)2.5T 1톤 초장축 슈퍼캡 스마트 2WD
                </div>
                <div className="text-[#22262A] text-[16px] flex items-center gap-[4px] mt-[2px]">
                  <span className="text-[16px] font-[500] text-[#22262A]">월</span>
                  <span className="text-[22px] font-bold text-black">999,999</span>
                  <span className="text-[16px] font-[500] text-[#22262A]">원</span>
                </div>
              </button>
            ))}
            </ScrollContainer>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/3 -translate-y-1/2    rounded-full  z-0 bg-white px-1 shadow-md  py-1  mr-1 rounded-full h-[28px] w-[28px] flex items-center justify-center"
            aria-label="Scroll right"
          >
           <span className="text-[18px] font-[500] text-[#F90619]"> →</span>
          </button>
         
          {/* 오른쪽 버튼 */}
        </div>
        <div className="mt-[40px] bg-[#E60012] px-[20px] py-[26px] w-full h-[184px] rounded-2xl flex  space-between">
          <div className=" w-1/2 flex flex-col gap-[10px]"><div className="text-[20px] font-[700] text-white ">아직도 구매하시나요?<br></br>
영업용 차량도<br></br>
리스 이용 가능</div><button className="w-fit">
<div className="text-[14px] font-[500] text-white">자세히 보기 &gt;</div></button>
</div>
<Image src={bannerCar} alt="banner-car" width={184} height={184} />
        </div>
        <div className="mt-[16px] bg-[#FEFAFB]  rounded-2xl w-full p-[24px]">
          <div><span className="text-[#E60012]">↑ </span><span className="text-[16px] font-[500] text-[#000000]"> 리스 이용 시에도 영업용 번호판 부착이 가능해요</span></div>
          <div className="text-[#F4717C] text-[14px] font-[500] mt-[12px]">많은 사람들이 고정 비용, 초기 비용 완화의 장점을 가진<br></br> 리스 상품으로 영업용 화물차를 마련하고 있어요</div>
        </div>
        <div className="h-[310px] w-full bg-white rounded-2xl mt-[40px]">
          <div className="text-[16px] font-[500] text-[#E60012] mb-[4px]">원하는 차량을 찾아봐요</div>
          <div className="font-[700] text-[22px] mb-4 text-[#22262A]">최저가 견적을 빠르게</div>
          <div className="relative"><input type="text" placeholder="차량명을 검색해보세요" onClick={() => router.push("/search")} className="w-full h-[48px] rounded-md border border-[#FADBDE]  pl-[16px] pr-[40px] py-[16px] text-[16px] font-[500] text-[#636B74]" />
          <button className="absolute right-[12px] top-1/2 -translate-y-1/2 z-0">
    <Image src={search} alt="search" width={18} height={18} />
  </button></div>
 <Keyward></Keyward>
        </div>
        <div className="h-[630px] bg-white">
            <div className="text-[16px] font-[500] text-[#E60012] mb-[8px]">롯데오토리스만의</div>
            <div className="text-[22px] font-[700] text-[#22262A] mb-[16px]">즉시출고 특가 모음</div>
            <div className="grid grid-cols-2 gap-[12px]">
            {[...Array(4)].map((_, i) => (
              <button
                key={i}
                className="flex-shrink-0 max-h-[222px] max-w-[188px] flex flex-col  bg-white rounded-md text-left mb-[12px]"
              >
                <Image src={now} alt={`now-${i}`} width={188} height={140} />
                <div className="font-[500] text-[14px] text-[#22262A] mt-[12px]">
                  PORTER (L)2.5T 1톤 초장축 슈퍼캡 스마트 2WD
                </div>
                <div className="text-[#22262A] text-[16px] flex items-center gap-[4px] mt-[2px]">
                 
                  <span className="text-[20px] font-bold text-[#000000]">999,999</span>
                  <span className="text-[16px] font-[500]">원</span>
                </div>
              </button>
            ))}
</div>
        </div>
        <div className="h-[420px] mt-[10px] bg-white">
          <div className="font-[500] text-[16px] text-[#E60012] mb-[8px]">롯데오토리스와 함께한</div>
          <div className="text-[22px] font-[700] text-[#22262A] mb-[16px]">소중한 고객 후기</div>
          <div className="flex flex-col gap-[20px]">
          <Marquee speed={50} gradient={false}>
  {reviews.map((item, i) => (
    <div
      key={i}
      className="bg-[#FEF6F6] h-[136px] max-w-[480px] flex-shrink-0 rounded-xl border border-[#FBE9EB] p-[24px] flex gap-[24px] mx-[8px]"
    >
      <Image src={item.image} alt={item.model} width={88} height={88} />
      <div className="flex flex-col gap-[12px] justify-between">
        <div className="text-[14px] font-[500] text-[#22262A] line-clamp-2 pt-[12px]">
          {item.text}
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-[4px]">
            <span className="text-[11px] font-[500] text-[#22262A]">{item.name}</span>
            <span className="text-[15px] font-[500] text-[#E60012]">{item.model}</span>
            <span className="text-[15px] font-[500] text-[#F4717C]">{item.location}</span>
          </div>
          <div className="flex items-center gap-[4px]">
            <Image src={star} alt="별점" width={73} height={12} />
            <span className="text-[15px] font-[500] text-[#E60012]">5.0</span>
            <span className="text-[11px] font-[500] text-[#F4717C]">{item.date}</span>
          </div>
        </div>
      </div>
    </div>
  ))}
</Marquee>
<Marquee speed={50} gradient={false} direction="right">
  {reviews_2.map((item, i) => (
    <div
      key={i}
      className="bg-[#FEF6F6] h-[136px] max-w-[480px] flex-shrink-0 rounded-xl border border-[#FBE9EB] p-[24px] flex gap-[24px] mx-[8px]"
    >
      <Image src={item.image} alt={item.model} width={88} height={88} />
      <div className="flex flex-col gap-[12px] justify-between">
        <div className="text-[14px] font-[500] text-[#22262A] line-clamp-2 pt-[12px]">
          {item.text}
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-[4px]">
            <span className="text-[11px] font-[500] text-[#22262A]">{item.name}</span>
            <span className="text-[15px] font-[500] text-[#E60012]">{item.model}</span>
            <span className="text-[15px] font-[500] text-[#F4717C]">{item.location}</span>
          </div>
          <div className="flex items-center gap-[4px]">
            <Image src={star} alt="별점" width={73} height={12} />
            <span className="text-[15px] font-[500] text-[#E60012]">5.0</span>
            <span className="text-[11px] font-[500] text-[#F4717C]">{item.date}</span>
          </div>
        </div>
      </div>
    </div>
  ))}
</Marquee>
</div>
        </div>
        </div>
        <div className="pb-[81px] bg-[#F9FAFB]"><Footer></Footer></div>
        <div ><BottomBar></BottomBar></div>
    </div>
  );
}
