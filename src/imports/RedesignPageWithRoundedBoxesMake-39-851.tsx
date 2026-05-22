import svgPaths from "./svg-q7wko5hxje";
import { imgVector, imgGroup } from "./svg-edhzk";

function Icon() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_36_418)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 6.66667V10" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 13.3333H10.0083" id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_36_418">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[20px] left-[32px] top-0 w-[1447px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[0] left-0 text-[#1e2939] text-[0px] text-[14px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[20px]">ALERT:</span>
        <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>{` The Cloud Overview widget in the Flexential Portal may not be reporting resource utilization accurately. Until a fix is implemented, please refer to your vCD Tenant Portal for up to date resource utilization.`}</span>
      </p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
            <path d={svgPaths.p48af40} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
            <path d={svgPaths.p30908200} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[1491px] pt-[4px] px-[4px] rounded-[4px] size-[24px] top-0" data-name="Button">
      <Icon1 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Icon />
      <Paragraph />
      <Button />
    </div>
  );
}

function AlertBanner() {
  return (
    <div className="bg-[#eff6ff] h-[52px] relative shrink-0 w-full" data-name="AlertBanner">
      <div aria-hidden="true" className="absolute border-[#2b7fff] border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pl-[28px] pr-[24px] pt-[14px] relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#101828] text-[30px] top-[-1px] tracking-[-0.75px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dashboard
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6a7282] text-[14px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Welcome to Flexential Xperience Portal
      </p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[60px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Paragraph1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2b393280} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3eea2890} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2bdcbd80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[10px] shrink-0 size-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[6px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[118px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[16px] text-white top-0 tracking-[-0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Backup Overview
        </p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[10px] h-[28px] items-center relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Heading1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#0a2540] content-stretch flex flex-col h-[53px] items-start left-px pb-px pt-[12px] px-[16px] top-px w-[355.75px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <Container4 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#4a5565] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Protected Nodes
      </p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#0a2540] text-[24px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        100
      </p>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#00a63e] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Nodes
      </p>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#f9fafb] col-1 justify-self-stretch relative rounded-[4px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[2px] items-start pb-px pt-[9px] px-[9px] relative size-full">
        <Container9 />
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#4a5565] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Nodes
      </p>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#99a1af] text-[24px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#f9fafb] col-2 justify-self-stretch relative rounded-[4px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[2px] items-start pb-px pt-[9px] px-[9px] relative size-full">
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="gap-x-[6px] gap-y-[6px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[86px] relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container12 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#4a5565] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jobs
      </p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#99a1af] text-[24px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#f9fafb] col-1 justify-self-stretch relative rounded-[4px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[2px] items-start pb-px pt-[9px] px-[9px] relative size-full">
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#4a5565] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aborted
      </p>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#99a1af] text-[24px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#f9fafb] col-2 justify-self-stretch relative rounded-[4px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[2px] items-start pb-px pt-[9px] px-[9px] relative size-full">
        <Container20 />
        <Container21 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="gap-x-[6px] gap-y-[6px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[68px] relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container19 />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[16px] left-0 text-[#364153] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Backup Job Summary
      </p>
    </div>
  );
}

function Container26() {
  return <div className="bg-[#fe9a00] rounded-[6px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#4a5565] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Aborted
        </p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[16px] relative shrink-0 w-[54.828px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container26 />
        <Text />
      </div>
    </div>
  );
}

function Container28() {
  return <div className="bg-[#fb2c36] rounded-[6px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#4a5565] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Failed
        </p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[16px] relative shrink-0 w-[43.938px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container28 />
        <Text1 />
      </div>
    </div>
  );
}

function Container30() {
  return <div className="bg-[#00c950] rounded-[6px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text2() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#4a5565] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Completed
        </p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[16px] relative shrink-0 w-[70.266px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container30 />
        <Text2 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container27 />
      <Container29 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[47.12%_62.95%_33.23%_30.68%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[47.12%_62.95%_33.23%_30.68%] leading-[normal] not-italic text-[#6b7280] text-[9px] text-center">2/20</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[47.12%_30.84%_33.23%_63.11%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[47.12%_30.84%_33.23%_63.11%] leading-[normal] not-italic text-[#6b7280] text-[9px] text-center">2/21</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[47.12%_-0.18%_33.23%_93.81%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[47.12%_-0.18%_33.23%_93.81%] leading-[normal] not-italic text-[#6b7280] text-[9px] text-center">2/22</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[47.12%_-0.18%_33.23%_30.68%]" data-name="Group">
      <Group2 />
      <Group3 />
      <Group4 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[47.12%_-0.18%_33.23%_30.68%]" data-name="Group">
      <Group1 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[14.29%_1.59%_62.5%_1.59%]" data-name="Group">
      <div className="absolute inset-[14.29%_1.59%_62.5%_1.59%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-8px] mask-size-[303.758px_23px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 303.758 13">
          <path d={svgPaths.p275ba00} fill="url(#paint0_linear_39_923)" fillOpacity="0.6" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_39_923" x1="0" x2="0" y1="0" y2="13">
              <stop offset="0.05" stopColor="#22C55E" stopOpacity="0.3" />
              <stop offset="0.95" stopColor="#22C55E" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[14.29%_1.59%_84.64%_1.59%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-8px] mask-size-[303.758px_23px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <div className="absolute inset-[-166.66%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 303.77 2.59997">
            <path d={svgPaths.p254cff00} id="Vector" stroke="var(--stroke-0, #22C55E)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[14.29%_1.59%_62.5%_1.59%]" data-name="Group">
      <Group8 />
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[0_1.59%_58.93%_1.59%]" data-name="Clip path group">
      <Group7 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[0_1.59%_58.93%_1.59%]" data-name="Group">
      <ClipPathGroup />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[0_1.59%_58.93%_1.59%]" data-name="Group">
      <Group6 />
    </div>
  );
}

function Surface() {
  return (
    <div className="h-[56px] overflow-clip relative shrink-0 w-full" data-name="Surface">
      <Group />
      <Group5 />
    </div>
  );
}

function AreaChart() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-full" data-name="AreaChart">
      <Surface />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[114px] relative rounded-[4px] shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(161.036deg, rgb(249, 250, 251) 0%, rgba(239, 246, 255, 0.3) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[9px] px-[9px] relative size-full">
        <Container23 />
        <Container24 />
        <AreaChart />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[284px] items-start left-[13px] top-[66px] w-[331.75px]" data-name="Container">
      <Container7 />
      <Container15 />
      <Container22 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[214.7px] size-[12px] top-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M7.5 1.5H10.5V4.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 7L10.5 1.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc1a2200} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#0a2540] h-[40px] left-[9px] rounded-[4px] top-[431px] w-[339.75px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[20px] left-[161.05px] text-[14px] text-center text-white top-[9px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Flexential Base
      </p>
      <Icon3 />
    </div>
  );
}

function BackupOverviewCard() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[10px] row-1 self-stretch shrink-0" data-name="BackupOverviewCard">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container3 />
      <Container6 />
      <Button1 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p37f49070} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[10px] shrink-0 size-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[6px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[16px] text-white top-0 tracking-[-0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Disaster Recovery
        </p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[28px] relative shrink-0 w-[161.563px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Container34 />
        <Heading2 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[133.5px] size-[12px] top-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[28px] relative rounded-[4px] shrink-0 w-[155.5px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-[70px] text-[12px] text-[rgba(255,255,255,0.8)] text-center top-[6px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Charlotte - South - CIS
        </p>
        <Icon5 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Button2 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-[#0a2540] content-stretch flex flex-col h-[53px] items-start left-px pb-px pt-[12px] px-[16px] top-px w-[355.75px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <Container32 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[16px] relative shrink-0 w-[62.828px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[16px] left-0 text-[#364153] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          VMs Health
        </p>
      </div>
    </div>
  );
}

function Container40() {
  return <div className="bg-[#00c950] opacity-77 rounded-[33554400px] shrink-0 size-[6px]" data-name="Container" />;
}

function Text3() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#008236] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Healthy
        </p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[16px] relative shrink-0 w-[51.016px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container40 />
        <Text3 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-center justify-between left-[9px] top-[9px] w-[313.75px]" data-name="Container">
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute h-[36px] left-[9px] top-[27px] w-[313.75px]" data-name="Container">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#00a63e] text-[30px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        6
      </p>
    </div>
  );
}

function Container44() {
  return <div className="bg-[#00c950] h-[6px] rounded-[33554400px] shrink-0 w-full" data-name="Container" />;
}

function Container43() {
  return (
    <div className="bg-[#b9f8cf] flex-[1_0_0] h-[6px] min-h-px min-w-px relative rounded-[33554400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container44 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[15px] relative shrink-0 w-[24.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[15px] left-0 text-[#00a63e] text-[10px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          100%
        </p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[15px] items-center left-[9px] top-[67px] w-[313.75px]" data-name="Container">
      <Container43 />
      <Text4 />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[91px] relative rounded-[4px] shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(164.661deg, rgb(240, 253, 244) 0%, rgba(236, 253, 245, 0.5) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container37 />
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[16px] left-0 text-[#364153] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Journal History
      </p>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22.969px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#4a5565] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Max
        </p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[77.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#1e2939] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          143h 31m 10s
        </p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text5 />
      <Text6 />
    </div>
  );
}

function Container51() {
  return <div className="bg-[#2b7fff] h-[4px] rounded-[33554400px] shrink-0 w-full" data-name="Container" />;
}

function Container50() {
  return (
    <div className="bg-[#e5e7eb] h-[4px] relative rounded-[33554400px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pr-[78.438px] relative size-full">
          <Container51 />
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[22px] items-start relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <Container50 />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#4a5565] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Min
        </p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[16px] relative shrink-0 w-[77.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#1e2939] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          143h 31m 11s
        </p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Container55() {
  return <div className="bg-[#2b7fff] h-[4px] rounded-[33554400px] shrink-0 w-full" data-name="Container" />;
}

function Container54() {
  return (
    <div className="bg-[#e5e7eb] h-[4px] relative rounded-[33554400px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pr-[78.438px] relative size-full">
          <Container55 />
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[22px] items-start relative shrink-0 w-full" data-name="Container">
      <Container53 />
      <Container54 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Container48 />
      <Container52 />
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[#f9fafb] h-[86px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[9px] px-[9px] relative size-full">
        <Container46 />
        <Container47 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-[72.48px] text-[#4a5565] text-[12px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Actual RPO
      </p>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[36px] left-[72.63px] text-[#155dfc] text-[30px] text-center top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        3s
      </p>
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-[#eff6ff] col-1 justify-self-stretch relative rounded-[4px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[2px] items-start pb-px pt-[9px] px-[9px] relative size-full">
        <Container58 />
        <Container59 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-[72.48px] text-[#4a5565] text-[12px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Actual RPO
      </p>
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[36px] left-[72.63px] text-[#99a1af] text-[30px] text-center top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        3s
      </p>
    </div>
  );
}

function Container60() {
  return (
    <div className="bg-[#f9fafb] col-2 justify-self-stretch relative rounded-[4px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[2px] items-start pb-px pt-[9px] px-[9px] relative size-full">
        <Container61 />
        <Container62 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="gap-x-[6px] gap-y-[6px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[72px] relative shrink-0 w-full" data-name="Container">
      <Container57 />
      <Container60 />
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#4a5565] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Meeting SLA
      </p>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#00a63e] text-[30px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        6
      </p>
    </div>
  );
}

function Container64() {
  return (
    <div className="bg-[#f0fdf4] col-1 justify-self-stretch relative rounded-[4px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dcfce7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[2px] items-start pb-px pt-[9px] px-[9px] relative size-full">
        <Container65 />
        <Container66 />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#4a5565] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Not-Meeting SLA
      </p>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#99a1af] text-[30px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
    </div>
  );
}

function Container67() {
  return (
    <div className="bg-[#f9fafb] col-2 justify-self-stretch relative rounded-[4px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[2px] items-start pb-px pt-[9px] px-[9px] relative size-full">
        <Container68 />
        <Container69 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="gap-x-[6px] gap-y-[6px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[72px] relative shrink-0 w-full" data-name="Container">
      <Container64 />
      <Container67 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[345px] items-start left-[13px] top-[66px] w-[331.75px]" data-name="Container">
      <Container36 />
      <Container45 />
      <Container56 />
      <Container63 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[241.55px] size-[12px] top-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M7.5 1.5H10.5V4.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 7L10.5 1.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc1a2200} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#0a2540] h-[40px] left-[9px] rounded-[4px] top-[431px] w-[339.75px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[20px] left-[161.69px] text-[14px] text-center text-white top-[9px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Disaster Recovery Sites
      </p>
      <Icon6 />
    </div>
  );
}

function DisasterRecoveryCard() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[10px] row-1 self-stretch shrink-0" data-name="DisasterRecoveryCard">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container31 />
      <Container35 />
      <Button3 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2b3b8700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container73() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[10px] shrink-0 size-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[6px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[16px] text-white top-0 tracking-[-0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Cloud Overview
        </p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[28px] relative shrink-0 w-[144.484px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Container73 />
        <Heading3 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[111.55px] size-[12px] top-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[28px] relative rounded-[4px] shrink-0 w-[133.547px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-[59px] text-[12px] text-[rgba(255,255,255,0.8)] text-center top-[6px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Atlanta - Norcross
        </p>
        <Icon8 />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container72 />
      <Button4 />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute bg-[#0a2540] content-stretch flex flex-col h-[53px] items-start left-px pb-px pt-[12px] px-[16px] top-px w-[355.75px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <Container71 />
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#4a5565] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Number of VMs
      </p>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#155dfc] text-[30px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        2
      </p>
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[72px] relative rounded-[4px] shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(167.755deg, rgb(239, 246, 255) 0%, rgba(238, 242, 255, 0.5) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[2px] items-start pb-px pt-[9px] px-[9px] relative size-full">
        <Container76 />
        <Container77 />
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="h-[16px] relative shrink-0 w-[94.766px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[16px] left-0 text-[#364153] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          CPU Used (vCPU)
        </p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[218.984px] relative size-full">
          <Container80 />
        </div>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute bg-[#dcfce7] h-[19px] left-0 rounded-[4px] top-0 w-[76.219px]" data-name="Text">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[15px] left-[6px] text-[#008236] text-[10px] top-px whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        0 / 100+ vCPU
      </p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute bg-[#fef3c6] h-[19px] left-[80.22px] rounded-[4px] top-0 w-[57.766px]" data-name="Text">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[15px] left-[6px] text-[#bb4d00] text-[10px] top-px whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        100-120%
      </p>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute bg-[#ffe2e2] h-[19px] left-[141.98px] rounded-[4px] top-0 w-[42.063px]" data-name="Text">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[15px] left-[6px] text-[#c10007] text-[10px] top-px whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        120%+
      </p>
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[19px] relative shrink-0 w-full" data-name="Container">
      <Text9 />
      <Text10 />
      <Text11 />
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#4a5565] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        vCPU - CPU Limit
      </p>
    </div>
  );
}

function Container86() {
  return <div className="bg-[#00c950] h-[6px] rounded-[33554400px] shrink-0 w-full" data-name="Container" />;
}

function Container85() {
  return (
    <div className="bg-[#e5e7eb] h-[6px] relative rounded-[33554400px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pr-[279.484px] relative size-full">
          <Container86 />
        </div>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container84 />
        <Container85 />
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="h-[28px] relative shrink-0 w-[26.266px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#00a63e] text-[20px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          0%
        </p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex gap-[8px] h-[28px] items-center relative shrink-0 w-full" data-name="Container">
      <Container83 />
      <Container87 />
    </div>
  );
}

function Container78() {
  return (
    <div className="bg-[#f9fafb] h-[89px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[9px] px-[9px] relative size-full">
        <Container79 />
        <Container81 />
        <Container82 />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[16px] left-0 text-[#364153] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Memory Used (GB)
      </p>
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#4a5565] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        vCPU - Memory Limit
      </p>
    </div>
  );
}

function Container94() {
  return <div className="bg-[#00c950] h-[6px] rounded-[33554400px] shrink-0 w-full" data-name="Container" />;
}

function Container93() {
  return (
    <div className="bg-[#e5e7eb] h-[6px] relative rounded-[33554400px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pr-[279.484px] relative size-full">
          <Container94 />
        </div>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container92 />
        <Container93 />
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="h-[28px] relative shrink-0 w-[26.266px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#00a63e] text-[20px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          0%
        </p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex gap-[8px] h-[28px] items-center relative shrink-0 w-full" data-name="Container">
      <Container91 />
      <Container95 />
    </div>
  );
}

function Container88() {
  return (
    <div className="bg-[#f9fafb] h-[66px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[9px] px-[9px] relative size-full">
        <Container89 />
        <Container90 />
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[24px] left-[46.78px] text-[#00a63e] text-[16px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        0%
      </p>
    </div>
  );
}

function Container99() {
  return (
    <div className="h-[25px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[12.5px] left-[46.47px] text-[#4a5565] text-[10px] text-center top-[-2px] w-[82px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        High Performance Storage
      </p>
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[2px] h-[65px] items-start left-0 pb-px pt-[7px] px-[7px] rounded-[4px] top-0 w-[106.578px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container98 />
      <Container99 />
    </div>
  );
}

function Container101() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[24px] left-[46.78px] text-[#00a63e] text-[16px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        0%
      </p>
    </div>
  );
}

function Container102() {
  return (
    <div className="h-[12.5px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[12.5px] left-[46.45px] text-[#4a5565] text-[10px] text-center top-[-2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Standard Storage
      </p>
    </div>
  );
}

function Container100() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[2px] h-[65px] items-start left-[112.58px] pb-px pt-[7px] px-[7px] rounded-[4px] top-0 w-[106.578px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container101 />
      <Container102 />
    </div>
  );
}

function Container104() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[24px] left-[46.78px] text-[#00a63e] text-[16px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        0%
      </p>
    </div>
  );
}

function Container105() {
  return (
    <div className="h-[12.5px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[12.5px] left-[46.34px] text-[#4a5565] text-[10px] text-center top-[-2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Deduped Storage
      </p>
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[2px] h-[65px] items-start left-[225.16px] pb-px pt-[7px] px-[7px] rounded-[4px] top-0 w-[106.594px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container104 />
      <Container105 />
    </div>
  );
}

function Container96() {
  return (
    <div className="h-[65px] relative shrink-0 w-full" data-name="Container">
      <Container97 />
      <Container100 />
      <Container103 />
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[316px] items-start left-[13px] top-[66px] w-[331.75px]" data-name="Container">
      <Container75 />
      <Container78 />
      <Container88 />
      <Container96 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[219.73px] size-[12px] top-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M7.5 1.5H10.5V4.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 7L10.5 1.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc1a2200} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[#0a2540] h-[40px] left-[9px] rounded-[4px] top-[431px] w-[339.75px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[20px] left-[161.02px] text-[14px] text-center text-white top-[9px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Go to Monitoring
      </p>
      <Icon9 />
    </div>
  );
}

function CloudOverviewCard() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[10px] row-1 self-stretch shrink-0" data-name="CloudOverviewCard">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container70 />
      <Container74 />
      <Button5 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p35993080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M1.33333 6.66667H14.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container108() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[10px] shrink-0 size-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[6px] relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[109.234px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[16px] text-white top-0 tracking-[-0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Billing Overview
        </p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex gap-[10px] h-[28px] items-center relative shrink-0 w-full" data-name="Container">
      <Container108 />
      <Heading4 />
    </div>
  );
}

function Container106() {
  return (
    <div className="absolute bg-[#0a2540] content-stretch flex flex-col h-[53px] items-start left-px pb-px pt-[12px] px-[16px] top-px w-[355.75px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <Container107 />
    </div>
  );
}

function Container111() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-0 text-[12px] text-[rgba(255,255,255,0.7)] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Current Balance
      </p>
    </div>
  );
}

function Container112() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[36px] left-0 text-[30px] text-white top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        $57,460.00
      </p>
    </div>
  );
}

function Container113() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16px] left-0 text-[12px] text-[rgba(255,255,255,0.6)] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        As of February 24, 2026
      </p>
    </div>
  );
}

function Container110() {
  return (
    <div className="bg-gradient-to-b from-[#0a2540] h-[92px] relative rounded-[4px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 to-[#0a2540] via-1/2 via-[#0d2f54] w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[2px] items-start pt-[10px] px-[10px] relative size-full">
        <Container111 />
        <Container112 />
        <Container113 />
      </div>
    </div>
  );
}

function Container117() {
  return <div className="bg-[#00c950] rounded-[33554400px] shrink-0 size-[6px]" data-name="Container" />;
}

function Text12() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#364153] text-[14px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Past Due Invoices
        </p>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[20px] items-center left-0 top-[10px] w-[123.781px]" data-name="Container">
      <Container117 />
      <Text12 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative size-[40px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p130d4d00} id="Vector" stroke="var(--stroke-0, #DCFCE7)" strokeWidth="3" />
          <path d={svgPaths.p130d4d00} id="Vector_2" stroke="var(--stroke-0, #22C55E)" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[24px] relative shrink-0 w-[9.188px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#00a63e] text-[16px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          0
        </p>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 px-[15.406px] size-[40px] top-0" data-name="Container">
      <Text13 />
    </div>
  );
}

function Container118() {
  return (
    <div className="absolute left-[273.75px] size-[40px] top-0" data-name="Container">
      <div className="absolute flex items-center justify-center left-0 size-[40px] top-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Icon11 />
        </div>
      </div>
      <Container119 />
    </div>
  );
}

function Container115() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <Container116 />
      <Container118 />
    </div>
  );
}

function Container114() {
  return (
    <div className="bg-[#f0fdf4] h-[58px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[9px] px-[9px] relative size-full">
        <Container115 />
      </div>
    </div>
  );
}

function Container123() {
  return <div className="bg-[#2b7fff] rounded-[33554400px] shrink-0 size-[6px]" data-name="Container" />;
}

function Text14() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#364153] text-[14px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Open Invoices
        </p>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[20px] items-center left-0 top-[10px] w-[100.422px]" data-name="Container">
      <Container123 />
      <Text14 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative size-[40px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p130d4d00} id="Vector" stroke="var(--stroke-0, #DBEAFE)" strokeWidth="3" />
          <path d={svgPaths.p130d4d00} id="Vector_2" stroke="var(--stroke-0, #3B82F6)" strokeDasharray="100.5 100.5" strokeLinecap="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[24px] relative shrink-0 w-[9.188px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#155dfc] text-[16px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          1
        </p>
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 px-[15.406px] size-[40px] top-0" data-name="Container">
      <Text15 />
    </div>
  );
}

function Container124() {
  return (
    <div className="absolute left-[273.75px] size-[40px] top-0" data-name="Container">
      <div className="absolute flex items-center justify-center left-0 size-[40px] top-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Icon12 />
        </div>
      </div>
      <Container125 />
    </div>
  );
}

function Container121() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <Container122 />
      <Container124 />
    </div>
  );
}

function Container120() {
  return (
    <div className="bg-[#eff6ff] h-[58px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[9px] px-[9px] relative size-full">
        <Container121 />
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[224px] items-start left-[13px] top-[66px] w-[331.75px]" data-name="Container">
      <Container110 />
      <Container114 />
      <Container120 />
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#e7000b] h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[20px] left-[169.98px] text-[14px] text-center text-white top-[9px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Make a Payment
      </p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[205.11px] size-[12px] top-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M7.5 1.5H10.5V4.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 7L10.5 1.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc1a2200} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#0a2540] h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[20px] left-[161.14px] text-[14px] text-center text-white top-[9px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Go to Billing
      </p>
      <Icon13 />
    </div>
  );
}

function Container126() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[102px] items-start left-px pt-[8px] px-[8px] top-[377px] w-[355.75px]" data-name="Container">
      <Button6 />
      <Button7 />
    </div>
  );
}

function BillingOverviewCard() {
  return (
    <div className="bg-white col-4 justify-self-stretch relative rounded-[10px] row-1 self-stretch shrink-0" data-name="BillingOverviewCard">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container106 />
      <Container109 />
      <Container126 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_36_429)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p11f26280} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 11.3333H8.00667" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_36_429">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container129() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[10px] shrink-0 size-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[6px] relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[140.016px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[16px] text-white top-0 tracking-[-0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Open Support Cases
        </p>
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex gap-[10px] h-[28px] items-center relative shrink-0 w-full" data-name="Container">
      <Container129 />
      <Heading5 />
    </div>
  );
}

function Container127() {
  return (
    <div className="absolute bg-[#0a2540] content-stretch flex flex-col h-[53px] items-start left-px pb-px pt-[12px] px-[16px] top-px w-[355.75px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <Container128 />
    </div>
  );
}

function Text16() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#0a2540] text-[12px] top-0 whitespace-nowrap">CS2029052</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="bg-[#ffe2e2] h-[21px] relative rounded-[4px] shrink-0 w-[39.031px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[15px] left-[9px] text-[#c10007] text-[10px] top-[2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          High
        </p>
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="h-[21px] relative shrink-0 w-[106.422px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text16 />
        <Text17 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container132() {
  return (
    <div className="content-stretch flex h-[21px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container133 />
      <Icon15 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#101828] text-[14px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Unable to access Met Domain controllers
      </p>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[16px] relative shrink-0 w-[37.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Status:
        </p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[16px] relative shrink-0 w-[91.672px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#155dfc] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Work in Progress
        </p>
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text18 />
      <Text19 />
    </div>
  );
}

function Container131() {
  return (
    <div className="bg-white h-[91px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pb-px pt-[11px] px-[11px] relative size-full">
        <Container132 />
        <Paragraph2 />
        <Container134 />
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#0a2540] text-[12px] top-0 whitespace-nowrap">CS1963879</p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="bg-[#fef3c6] h-[21px] relative rounded-[4px] shrink-0 w-[54.703px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[15px] left-[9px] text-[#bb4d00] text-[10px] top-[2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Medium
        </p>
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="h-[21px] relative shrink-0 w-[122.094px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text20 />
        <Text21 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex h-[21px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container137 />
      <Icon16 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#101828] text-[14px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Temporary Increase in VDC Storage Quota
      </p>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[16px] relative shrink-0 w-[37.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Status:
        </p>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[16px] relative shrink-0 w-[102.719px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#155dfc] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Awaiting Response
        </p>
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text22 />
      <Text23 />
    </div>
  );
}

function Container135() {
  return (
    <div className="bg-white h-[91px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pb-px pt-[11px] px-[11px] relative size-full">
        <Container136 />
        <Paragraph3 />
        <Container138 />
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#0a2540] text-[12px] top-0 whitespace-nowrap">CS2247185</p>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="bg-[#f3f4f6] h-[21px] relative rounded-[4px] shrink-0 w-[36.406px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[15px] left-[9px] text-[#364153] text-[10px] top-[2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Low
        </p>
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="h-[21px] relative shrink-0 w-[103.797px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text24 />
        <Text25 />
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex h-[21px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container141 />
      <Icon17 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#101828] text-[14px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Customer missing files my SMC
      </p>
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[16px] relative shrink-0 w-[37.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Status:
        </p>
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[16px] relative shrink-0 w-[100.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#155dfc] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Externally Updated
        </p>
      </div>
    </div>
  );
}

function Container142() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text26 />
      <Text27 />
    </div>
  );
}

function Container139() {
  return (
    <div className="bg-white h-[91px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pb-px pt-[11px] px-[11px] relative size-full">
        <Container140 />
        <Paragraph4 />
        <Container142 />
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#0a2540] text-[12px] top-0 whitespace-nowrap">CS2266512</p>
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="bg-[#f3f4f6] h-[21px] relative rounded-[4px] shrink-0 w-[36.406px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[15px] left-[9px] text-[#364153] text-[10px] top-[2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Low
        </p>
      </div>
    </div>
  );
}

function Container145() {
  return (
    <div className="h-[21px] relative shrink-0 w-[103.797px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text28 />
        <Text29 />
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container144() {
  return (
    <div className="content-stretch flex h-[21px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container145 />
      <Icon18 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#101828] text-[14px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Customer Dashboard Audit
      </p>
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[16px] relative shrink-0 w-[37.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Status:
        </p>
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[16px] relative shrink-0 w-[102.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#155dfc] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Awaiting Customer
        </p>
      </div>
    </div>
  );
}

function Container146() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text30 />
      <Text31 />
    </div>
  );
}

function Container143() {
  return (
    <div className="bg-white h-[91px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pb-px pt-[11px] px-[11px] relative size-full">
        <Container144 />
        <Paragraph5 />
        <Container146 />
      </div>
    </div>
  );
}

function Container130() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[270px] items-start left-[13px] overflow-clip pr-[14px] top-[66px] w-[331.75px]" data-name="Container">
      <Container131 />
      <Container135 />
      <Container139 />
      <Container143 />
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-[#0a2540] h-[40px] left-[9px] rounded-[4px] top-[401.5px] w-[339.75px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[20px] left-[169.94px] text-[14px] text-center text-white top-[9px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        View All Support Cases
      </p>
    </div>
  );
}

function OpenSupportCasesCard() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[10px] row-2 self-stretch shrink-0" data-name="OpenSupportCasesCard">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container127 />
      <Container130 />
      <Button8 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_39_908)" id="Icon">
          <path d={svgPaths.p2f327a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1cd74100} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pe9cb400} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p345da6c0} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 8V5.33333" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_39_908">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container149() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[10px] shrink-0 size-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[6px] relative size-full">
        <Icon19 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[16px] text-white top-0 tracking-[-0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Order Cross Connects
        </p>
      </div>
    </div>
  );
}

function Container148() {
  return (
    <div className="h-[28px] relative shrink-0 w-[187.813px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Container149 />
        <Heading6 />
      </div>
    </div>
  );
}

function Container147() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[135.938px] relative size-full">
          <Container148 />
        </div>
      </div>
    </div>
  );
}

function OrderCrossConnectsCard() {
  return (
    <div className="absolute bg-[#0a2540] content-stretch flex flex-col h-[53px] items-start left-px pb-px pt-[12px] px-[16px] top-px w-[355.75px]" data-name="OrderCrossConnectsCard">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <Container147 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_39_966)" id="Icon">
          <path d={svgPaths.p37143280} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1d7f0000} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2b722f80} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 5H11.6667" id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 8.33333H11.6667" id="Vector_5" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 11.6667H11.6667" id="Vector_6" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 15H11.6667" id="Vector_7" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_39_966">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container152() {
  return (
    <div className="bg-white relative rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon20 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[267.75px]" data-name="Heading 4">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[20px] left-0 text-[#101828] text-[14px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Company-to-Company
      </p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[16px] left-0 top-[22px] w-[267.75px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#4a5565] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cross Connect
      </p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[39px] left-0 overflow-clip top-[42px] w-[267.75px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#6a7282] text-[12px] top-[-1px] w-[246px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Connect your cabinet to a service provider in a Flexential data center Meet Me Room
      </p>
    </div>
  );
}

function Container153() {
  return (
    <div className="flex-[1_0_0] h-[81px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading7 />
        <Paragraph6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container151() {
  return (
    <div className="content-stretch flex gap-[10px] h-[81px] items-start relative shrink-0 w-full" data-name="Container">
      <Container152 />
      <Container153 />
    </div>
  );
}

function Container150() {
  return (
    <div className="h-[99px] relative rounded-[4px] shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(163.384deg, rgb(239, 246, 255) 0%, rgb(238, 242, 255) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[9px] px-[9px] relative size-full">
        <Container151 />
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_39_860)" id="Icon">
          <path d={svgPaths.p1a3b4700} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3c552480} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p174f7d00} id="Vector_3" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p310deb70} id="Vector_4" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 10V6.66667" id="Vector_5" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_39_860">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container156() {
  return (
    <div className="bg-white relative rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon21 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[267.75px]" data-name="Heading 4">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[20px] left-0 text-[#101828] text-[14px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Carrier
      </p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[16px] left-0 top-[22px] w-[267.75px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#4a5565] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cross Connect
      </p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[39px] left-0 overflow-clip top-[42px] w-[267.75px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#6a7282] text-[12px] top-[-1px] w-[246px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Connect your cabinet to a service provider in a Flexential data center Meet Me Room
      </p>
    </div>
  );
}

function Container157() {
  return (
    <div className="flex-[1_0_0] h-[81px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading8 />
        <Paragraph8 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Container155() {
  return (
    <div className="content-stretch flex gap-[10px] h-[81px] items-start relative shrink-0 w-full" data-name="Container">
      <Container156 />
      <Container157 />
    </div>
  );
}

function Container154() {
  return (
    <div className="h-[99px] relative rounded-[4px] shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(163.384deg, rgb(250, 245, 255) 0%, rgb(253, 242, 248) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#e9d4ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[9px] px-[9px] relative size-full">
        <Container155 />
      </div>
    </div>
  );
}

function Container158() {
  return (
    <div className="bg-[#eff6ff] h-[72.5px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] left-[7px] text-[#4a5565] text-[12px] top-[6px] w-[288px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cross connects enable direct, high-speed connections between your infrastructure and service providers for enhanced performance and security.
      </p>
    </div>
  );
}

function OrderCrossConnectsCard1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[282.5px] items-start left-[13px] top-[66px] w-[331.75px]" data-name="OrderCrossConnectsCard">
      <Container150 />
      <Container154 />
      <Container158 />
    </div>
  );
}

function Link() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[10px] row-2 self-stretch shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <OrderCrossConnectsCard />
      <OrderCrossConnectsCard1 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_39_875)" id="Icon">
          <path d={svgPaths.p3227a460} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_39_875">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container161() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[10px] shrink-0 size-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[6px] relative size-full">
        <Icon22 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[74.688px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[16px] text-white top-0 tracking-[-0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Monitoring
        </p>
      </div>
    </div>
  );
}

function Container160() {
  return (
    <div className="content-stretch flex gap-[10px] h-[28px] items-center relative shrink-0 w-full" data-name="Container">
      <Container161 />
      <Heading9 />
    </div>
  );
}

function Container159() {
  return (
    <div className="absolute bg-[#0a2540] content-stretch flex flex-col h-[53px] items-start left-px pb-px pt-[12px] px-[16px] top-px w-[355.75px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <Container160 />
    </div>
  );
}

function Container164() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#4a5565] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        DEVICES
      </p>
    </div>
  );
}

function Container165() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#155dfc] text-[30px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        12
      </p>
    </div>
  );
}

function Container166() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Devices Monitored
      </p>
    </div>
  );
}

function Container163() {
  return (
    <div className="h-[90px] relative rounded-[4px] shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(164.822deg, rgb(239, 246, 255) 0%, rgba(238, 242, 255, 0.5) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[2px] items-start pb-px pt-[9px] px-[9px] relative size-full">
        <Container164 />
        <Container165 />
        <Container166 />
      </div>
    </div>
  );
}

function Container169() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[28px] left-[44.55px] text-[#e7000b] text-[20px] text-center top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
    </div>
  );
}

function Container170() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-[44.3px] text-[#4a5565] text-[12px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Critical
      </p>
    </div>
  );
}

function Container168() {
  return (
    <div className="absolute bg-[#fef2f2] content-stretch flex flex-col gap-[2px] h-[64px] items-start left-0 pb-px pt-[9px] px-[9px] rounded-[4px] top-0 w-[106.578px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container169 />
      <Container170 />
    </div>
  );
}

function Container172() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[28px] left-[44.55px] text-[#e17100] text-[20px] text-center top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
    </div>
  );
}

function Container173() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-[44.41px] text-[#4a5565] text-[12px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Warn
      </p>
    </div>
  );
}

function Container171() {
  return (
    <div className="absolute bg-[#fffbeb] content-stretch flex flex-col gap-[2px] h-[64px] items-start left-[112.58px] pb-px pt-[9px] px-[9px] rounded-[4px] top-0 w-[106.578px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container172 />
      <Container173 />
    </div>
  );
}

function Container175() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[28px] left-[44.31px] text-[#00a63e] text-[20px] text-center top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        12
      </p>
    </div>
  );
}

function Container176() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-[44.78px] text-[#4a5565] text-[12px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Healthy
      </p>
    </div>
  );
}

function Container174() {
  return (
    <div className="absolute bg-[#f0fdf4] content-stretch flex flex-col gap-[2px] h-[64px] items-start left-[225.16px] pb-px pt-[9px] px-[9px] rounded-[4px] top-0 w-[106.594px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container175 />
      <Container176 />
    </div>
  );
}

function Container167() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <Container168 />
      <Container171 />
      <Container174 />
    </div>
  );
}

function Container178() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[16px] left-0 text-[#364153] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        ACTIVE ALERTS
      </p>
    </div>
  );
}

function Text32() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.859px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#364153] text-[14px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Alerts
        </p>
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="h-[28px] relative shrink-0 w-[11.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#99a1af] text-[20px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          0
        </p>
      </div>
    </div>
  );
}

function Container180() {
  return (
    <div className="content-stretch flex h-[37px] items-center justify-between pb-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Text32 />
      <Text33 />
    </div>
  );
}

function Container184() {
  return <div className="bg-[#fb2c36] rounded-[33554400px] shrink-0 size-[6px]" data-name="Container" />;
}

function Text34() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#4a5565] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Critical
        </p>
      </div>
    </div>
  );
}

function Container183() {
  return (
    <div className="h-[16px] relative shrink-0 w-[49.375px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Container184 />
        <Text34 />
      </div>
    </div>
  );
}

function Text35() {
  return (
    <div className="h-[24px] relative shrink-0 w-[9.188px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#e7000b] text-[16px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          0
        </p>
      </div>
    </div>
  );
}

function Container182() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container183 />
      <Text35 />
    </div>
  );
}

function Container187() {
  return <div className="bg-[#fe9a00] rounded-[33554400px] shrink-0 size-[6px]" data-name="Container" />;
}

function Text36() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#4a5565] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Major
        </p>
      </div>
    </div>
  );
}

function Container186() {
  return (
    <div className="h-[16px] relative shrink-0 w-[42.797px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Container187 />
        <Text36 />
      </div>
    </div>
  );
}

function Text37() {
  return (
    <div className="h-[24px] relative shrink-0 w-[9.188px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#e17100] text-[16px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          0
        </p>
      </div>
    </div>
  );
}

function Container185() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container186 />
      <Text37 />
    </div>
  );
}

function Container181() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[58px] items-start relative shrink-0 w-full" data-name="Container">
      <Container182 />
      <Container185 />
    </div>
  );
}

function Container179() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[99px] items-start relative shrink-0 w-full" data-name="Container">
      <Container180 />
      <Container181 />
    </div>
  );
}

function Container177() {
  return (
    <div className="bg-[#f9fafb] h-[137px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[9px] px-[9px] relative size-full">
        <Container178 />
        <Container179 />
      </div>
    </div>
  );
}

function Container162() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[303px] items-start left-[13px] top-[66px] w-[331.75px]" data-name="Container">
      <Container163 />
      <Container167 />
      <Container177 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="absolute left-[219.73px] size-[12px] top-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M7.5 1.5H10.5V4.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 7L10.5 1.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc1a2200} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-[#0a2540] h-[40px] left-[9px] rounded-[4px] top-[401.5px] w-[339.75px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[20px] left-[161.02px] text-[14px] text-center text-white top-[9px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Go to Monitoring
      </p>
      <Icon23 />
    </div>
  );
}

function MonitoringCard() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[10px] row-2 self-stretch shrink-0" data-name="MonitoringCard">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container159 />
      <Container162 />
      <Button9 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pea6a680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3155f180} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container191() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[10px] shrink-0 size-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[6px] relative size-full">
        <Icon24 />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[16px] text-white top-0 tracking-[-0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Bandwidth Overview
        </p>
      </div>
    </div>
  );
}

function Container190() {
  return (
    <div className="h-[28px] relative shrink-0 w-[177.297px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Container191 />
        <Heading10 />
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="absolute left-[104.97px] size-[12px] top-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[28px] relative rounded-[4px] shrink-0 w-[126.969px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-[55.5px] text-[12px] text-[rgba(255,255,255,0.8)] text-center top-[6px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Charlotte - South
        </p>
        <Icon25 />
      </div>
    </div>
  );
}

function Container189() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container190 />
      <Button10 />
    </div>
  );
}

function Container188() {
  return (
    <div className="absolute bg-[#0a2540] content-stretch flex flex-col h-[53px] items-start left-px pb-px pt-[12px] px-[16px] top-px w-[355.75px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <Container189 />
    </div>
  );
}

function Container195() {
  return (
    <div className="absolute h-[16px] left-[8px] top-[8px] w-[88.578px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-[44.36px] text-[#4a5565] text-[12px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Total
      </p>
    </div>
  );
}

function Container196() {
  return (
    <div className="absolute h-[28px] left-[8px] top-[26px] w-[88.578px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[28px] left-[44.33px] text-[#155dfc] text-[20px] text-center top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        1000
      </p>
    </div>
  );
}

function Container197() {
  return (
    <div className="absolute h-[15px] left-[8px] top-[54px] w-[88.578px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Roboto:Regular',sans-serif] font-normal leading-[15px] left-[44.47px] text-[#6a7282] text-[10px] text-center top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mb/s
      </p>
    </div>
  );
}

function Container194() {
  return (
    <div className="absolute bg-[#eff6ff] border border-[#dbeafe] border-solid h-[79px] left-0 rounded-[4px] top-0 w-[106.578px]" data-name="Container">
      <Container195 />
      <Container196 />
      <Container197 />
    </div>
  );
}

function Container199() {
  return (
    <div className="absolute h-[16px] left-[8px] top-[8px] w-[88.578px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-[44.41px] text-[#4a5565] text-[12px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Inbound
      </p>
    </div>
  );
}

function Container200() {
  return (
    <div className="absolute h-[28px] left-[8px] top-[26px] w-[88.578px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[28px] left-[44.56px] text-[#00a63e] text-[20px] text-center top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        500
      </p>
    </div>
  );
}

function Container201() {
  return (
    <div className="absolute h-[15px] left-[8px] top-[54px] w-[88.578px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Roboto:Regular',sans-serif] font-normal leading-[15px] left-[44.47px] text-[#6a7282] text-[10px] text-center top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mb/s
      </p>
    </div>
  );
}

function Container198() {
  return (
    <div className="absolute bg-[#f0fdf4] border border-[#dcfce7] border-solid h-[79px] left-[112.58px] rounded-[4px] top-0 w-[106.578px]" data-name="Container">
      <Container199 />
      <Container200 />
      <Container201 />
    </div>
  );
}

function Container203() {
  return (
    <div className="absolute h-[16px] left-[8px] top-[8px] w-[88.594px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-[44.48px] text-[#4a5565] text-[12px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Outbound
      </p>
    </div>
  );
}

function Container204() {
  return (
    <div className="absolute h-[28px] left-[8px] top-[26px] w-[88.594px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[28px] left-[44.58px] text-[#9810fa] text-[20px] text-center top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        500
      </p>
    </div>
  );
}

function Container205() {
  return (
    <div className="absolute h-[15px] left-[8px] top-[54px] w-[88.594px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Roboto:Regular',sans-serif] font-normal leading-[15px] left-[44.47px] text-[#6a7282] text-[10px] text-center top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mb/s
      </p>
    </div>
  );
}

function Container202() {
  return (
    <div className="absolute bg-[#faf5ff] border border-[#f3e8ff] border-solid h-[79px] left-[225.16px] rounded-[4px] top-0 w-[106.594px]" data-name="Container">
      <Container203 />
      <Container204 />
      <Container205 />
    </div>
  );
}

function Container193() {
  return (
    <div className="h-[79px] relative shrink-0 w-full" data-name="Container">
      <Container194 />
      <Container198 />
      <Container202 />
    </div>
  );
}

function Container209() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[16px] left-0 text-[#364153] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Usage Trend
      </p>
    </div>
  );
}

function Container210() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[0] left-0 text-[#6a7282] text-[0px] text-[10px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[15px]">{`Charlotte - South `}</span>
        <span className="font-['Roboto:Medium',sans-serif] font-medium leading-[15px] text-[#155dfc]" style={{ fontVariationSettings: "'wdth' 100" }}>
          (CLT-3)
        </span>
      </p>
    </div>
  );
}

function Container208() {
  return (
    <div className="h-[31px] relative shrink-0 w-[108.625px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container209 />
        <Container210 />
      </div>
    </div>
  );
}

function Container212() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-full absolute font-['Roboto:Regular',sans-serif] font-normal leading-[15px] left-[63.38px] text-[#6a7282] text-[10px] text-right top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Current
      </p>
    </div>
  );
}

function Container213() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-full absolute font-['Roboto:Bold',sans-serif] font-bold leading-[28px] left-[64px] text-[#155dfc] text-[20px] text-right top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        628.46
      </p>
    </div>
  );
}

function Container214() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-full absolute font-['Roboto:Regular',sans-serif] font-normal leading-[15px] left-[63.92px] text-[#6a7282] text-[10px] text-right top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        MTD 95TH%
      </p>
    </div>
  );
}

function Container211() {
  return (
    <div className="h-[58px] relative shrink-0 w-[63.188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container212 />
        <Container213 />
        <Container214 />
      </div>
    </div>
  );
}

function Container207() {
  return (
    <div className="absolute content-stretch flex h-[58px] items-center justify-between left-[9px] top-[9px] w-[313.75px]" data-name="Container">
      <Container208 />
      <Container211 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[53.73%_87.26%_29.08%_9.55%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[53.73%_87.26%_29.08%_9.55%] leading-[normal] not-italic text-[#6b7280] text-[9px] text-center whitespace-nowrap">19</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[53.73%_58.17%_29.08%_38.64%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[53.73%_58.17%_29.08%_38.64%] leading-[normal] not-italic text-[#6b7280] text-[9px] text-center whitespace-nowrap">21</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[53.73%_28.77%_29.08%_67.41%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[53.73%_28.77%_29.08%_67.41%] leading-[normal] not-italic text-[#6b7280] text-[9px] text-center whitespace-nowrap">23</p>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[53.73%_-0.3%_29.08%_96.48%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[53.73%_-0.3%_29.08%_96.48%] leading-[normal] not-italic text-[#6b7280] text-[9px] text-center whitespace-nowrap">24</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[53.73%_-0.3%_29.08%_9.55%]" data-name="Group">
      <Group11 />
      <Group12 />
      <Group13 />
      <Group14 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[53.73%_-0.3%_29.08%_9.55%]" data-name="Group">
      <Group10 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[36.24%_91.4%_46.57%_6.69%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[36.24%_91.4%_46.57%_6.69%] leading-[normal] not-italic text-[#6b7280] text-[9px] text-right whitespace-nowrap">0</p>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[1.48%_91.4%_81.34%_3.18%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[1.48%_91.4%_81.34%_3.18%] leading-[normal] not-italic text-[#6b7280] text-[9px] text-right whitespace-nowrap">800</p>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[1.48%_91.4%_46.57%_3.18%]" data-name="Group">
      <Group17 />
      <Group18 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[1.48%_91.4%_46.57%_3.18%]" data-name="Group">
      <Group16 />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute inset-[11.56%_1.59%_54.69%_11.15%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-7.4px] mask-size-[274px_31px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <div className="absolute inset-[-4.63%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 274.099 22.6">
          <g id="Group">
            <path d={svgPaths.p3c5db780} fill="url(#paint0_linear_39_915)" fillOpacity="0.6" id="Vector" />
            <path d={svgPaths.p5c33600} id="Vector_2" stroke="var(--stroke-0, #3B82F6)" strokeWidth="2" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_39_915" x1="0.0541184" x2="0.0541184" y1="1" y2="22.6">
              <stop offset="0.05" stopColor="#3B82F6" stopOpacity="0.3" />
              <stop offset="0.95" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-[11.56%_1.59%_54.69%_11.15%]" data-name="Group">
      <Group22 />
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-[0_1.59%_51.56%_11.15%]" data-name="Clip path group">
      <Group21 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[0_1.59%_51.56%_11.15%]" data-name="Group">
      <ClipPathGroup1 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-[0_1.59%_51.56%_11.15%]" data-name="Group">
      <Group20 />
    </div>
  );
}

function Surface1() {
  return (
    <div className="absolute h-[64px] left-0 overflow-clip top-0 w-[314px]" data-name="Surface">
      <Group9 />
      <Group15 />
      <Group19 />
    </div>
  );
}

function AreaChart1() {
  return (
    <div className="absolute h-[64px] left-[5px] top-[71px] w-[314px]" data-name="AreaChart">
      <Surface1 />
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute h-[24px] left-[54.77px] rounded-[8px] top-[137px] w-[222.219px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[24px] left-[111.5px] text-[#155dfc] text-[16px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Click to view longer usage data
      </p>
    </div>
  );
}

function Container206() {
  return (
    <div className="h-[170px] relative rounded-[4px] shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(152.868deg, rgb(249, 250, 251) 0%, rgba(239, 246, 255, 0.3) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container207 />
      <AreaChart1 />
      <Button11 />
    </div>
  );
}

function Container216() {
  return (
    <div className="h-[32.5px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16.25px] left-[157.16px] text-[#4a5565] text-[10px] text-center top-[-2px] w-[292px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        95TH Usage values reflect actual usage, which may vary from the amount billed
      </p>
    </div>
  );
}

function Container215() {
  return (
    <div className="bg-[#f9fafb] h-[50.5px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[9px] px-[9px] relative size-full">
        <Container216 />
      </div>
    </div>
  );
}

function Container192() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[315.5px] items-start left-[13px] top-[66px] w-[331.75px]" data-name="Container">
      <Container193 />
      <Container206 />
      <Container215 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="absolute left-[230.97px] size-[12px] top-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M7.5 1.5H10.5V4.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 7L10.5 1.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc1a2200} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute bg-[#0a2540] h-[40px] left-[9px] rounded-[4px] top-[401.5px] w-[339.75px]" data-name="Link">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[20px] left-[96.78px] text-[14px] text-white top-[9px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Bandwidth Overview
      </p>
      <Icon26 />
    </div>
  );
}

function BandwidthOverviewCard() {
  return (
    <div className="bg-white col-4 justify-self-stretch relative rounded-[10px] row-2 self-stretch shrink-0" data-name="BandwidthOverviewCard">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container188 />
      <Container192 />
      <Link1 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_39_891)" id="Icon">
          <path d={svgPaths.p15f82200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p375323f0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 4H4.00667" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 12H4.00667" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_39_891">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container220() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[10px] shrink-0 size-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[6px] relative size-full">
        <Icon27 />
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[16px] text-white top-0 tracking-[-0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Colocation Overview
        </p>
      </div>
    </div>
  );
}

function Container219() {
  return (
    <div className="h-[28px] relative shrink-0 w-[178.094px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Container220 />
        <Heading11 />
      </div>
    </div>
  );
}

function Icon28() {
  return (
    <div className="absolute left-[78.7px] size-[12px] top-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[28px] relative rounded-[4px] shrink-0 w-[100.703px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-[42.5px] text-[12px] text-[rgba(255,255,255,0.8)] text-center top-[6px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          GA - Atlanta
        </p>
        <Icon28 />
      </div>
    </div>
  );
}

function Container218() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container219 />
      <Button12 />
    </div>
  );
}

function Container217() {
  return (
    <div className="absolute bg-[#0a2540] content-stretch flex flex-col h-[53px] items-start left-px pb-px pt-[12px] px-[16px] top-px w-[355.75px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <Container218 />
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[47.12%_76.75%_33.23%_18.15%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[47.12%_76.75%_33.23%_18.15%] leading-[normal] not-italic text-[#9ca3af] text-[9px] text-center whitespace-nowrap">Jan</p>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents inset-[47.12%_37.9%_33.23%_57.01%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[47.12%_37.9%_33.23%_57.01%] leading-[normal] not-italic text-[#9ca3af] text-[9px] text-center whitespace-nowrap">Feb</p>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents inset-[47.12%_-0.19%_33.23%_94.78%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[47.12%_-0.19%_33.23%_94.78%] leading-[normal] not-italic text-[#9ca3af] text-[9px] text-center whitespace-nowrap">Mar</p>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents inset-[47.12%_-0.19%_33.23%_18.15%]" data-name="Group">
      <Group25 />
      <Group26 />
      <Group27 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents inset-[37.5%_-0.19%_33.23%_18.15%]" data-name="Group">
      <div className="absolute inset-[37.5%_1.59%_62.5%_20.7%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 244 1">
            <path d="M0 0.5H244" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
          </svg>
        </div>
      </div>
      <Group24 />
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents inset-[1.69%_81.85%_78.67%_16.24%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[1.69%_81.85%_78.67%_16.24%] leading-[normal] not-italic text-[#9ca3af] text-[9px] text-right whitespace-nowrap">4</p>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents inset-[1.69%_81.85%_78.67%_16.24%]" data-name="Group">
      <Group30 />
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-[1.69%_79.3%_62.5%_16.24%]" data-name="Group">
      <div className="absolute inset-[8.93%_79.3%_62.5%_20.7%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 16">
            <path d="M0.5 0V16" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
          </svg>
        </div>
      </div>
      <Group29 />
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents inset-[33.93%_0.96%_58.93%_20.06%]" data-name="Group">
      <div className="absolute inset-[33.93%_78.66%_58.93%_20.06%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.pafef4f0} fill="var(--fill-0, #D1D5DB)" id="Vector" stroke="var(--stroke-0, #D1D5DB)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.93%_39.81%_58.93%_58.92%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.pafef4f0} fill="var(--fill-0, #D1D5DB)" id="Vector" stroke="var(--stroke-0, #D1D5DB)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.93%_0.96%_58.93%_97.77%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.pafef4f0} fill="var(--fill-0, #D1D5DB)" id="Vector" stroke="var(--stroke-0, #D1D5DB)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents inset-[33.93%_0.96%_58.93%_20.06%]" data-name="Group">
      <div className="absolute inset-[37.5%_1.59%_62.5%_20.7%]" data-name="Vector">
        <div className="absolute inset-[-1px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 244 2">
            <path d={svgPaths.p35ebfac0} id="Vector" stroke="var(--stroke-0, #D1D5DB)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <Group32 />
    </div>
  );
}

function Surface2() {
  return (
    <div className="h-[56px] overflow-clip relative shrink-0 w-full" data-name="Surface">
      <Group23 />
      <Group28 />
      <Group31 />
    </div>
  );
}

function LineChart() {
  return (
    <div className="absolute content-stretch flex flex-col h-[56px] items-start left-0 top-0 w-[314px]" data-name="LineChart">
      <Surface2 />
    </div>
  );
}

function Container223() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <LineChart />
    </div>
  );
}

function Container222() {
  return (
    <div className="bg-[#f9fafb] h-[74px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[9px] px-[9px] relative size-full">
        <Container223 />
      </div>
    </div>
  );
}

function Container226() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-[72.64px] text-[#4a5565] text-[12px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Last Draw (kW)
      </p>
    </div>
  );
}

function Container227() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[36px] left-[72.83px] text-[#99a1af] text-[30px] text-center top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
    </div>
  );
}

function Container225() {
  return (
    <div className="bg-[#f9fafb] col-1 justify-self-stretch relative rounded-[4px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[2px] items-start pb-px pt-[9px] px-[9px] relative size-full">
        <Container226 />
        <Container227 />
      </div>
    </div>
  );
}

function Container229() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-[72.89px] text-[#4a5565] text-[12px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        70 Max Draw (kW)
      </p>
    </div>
  );
}

function Container230() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[36px] left-[72.83px] text-[#99a1af] text-[30px] text-center top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
    </div>
  );
}

function Container228() {
  return (
    <div className="bg-[#f9fafb] col-2 justify-self-stretch relative rounded-[4px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[2px] items-start pb-px pt-[9px] px-[9px] relative size-full">
        <Container229 />
        <Container230 />
      </div>
    </div>
  );
}

function Container224() {
  return (
    <div className="gap-x-[6px] gap-y-[6px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[72px] relative shrink-0 w-full" data-name="Container">
      <Container225 />
      <Container228 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_39_885)" id="Icon">
          <path d={svgPaths.p15f82200} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p375323f0} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 4H4.00667" id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 12H4.00667" id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_39_885">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container234() {
  return (
    <div className="bg-white relative rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon29 />
      </div>
    </div>
  );
}

function Container233() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-between left-[9px] pr-[112.875px] top-[9px] w-[144.875px]" data-name="Container">
      <Container234 />
    </div>
  );
}

function Container235() {
  return (
    <div className="absolute h-[36px] left-[9px] top-[45px] w-[144.875px]" data-name="Container">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#155dfc] text-[30px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
    </div>
  );
}

function Container236() {
  return (
    <div className="absolute h-[16px] left-[9px] top-[83px] w-[144.875px]" data-name="Container">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#4a5565] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cages
      </p>
    </div>
  );
}

function Container232() {
  return (
    <div className="bg-[#eff6ff] col-1 justify-self-stretch relative rounded-[4px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container233 />
      <Container235 />
      <Container236 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_39_929)" id="Icon">
          <path d={svgPaths.p15f82200} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p375323f0} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 4H4.00667" id="Vector_3" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 12H4.00667" id="Vector_4" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_39_929">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container239() {
  return (
    <div className="bg-white relative rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon30 />
      </div>
    </div>
  );
}

function Container238() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-between left-[9px] pr-[112.875px] top-[9px] w-[144.875px]" data-name="Container">
      <Container239 />
    </div>
  );
}

function Container240() {
  return (
    <div className="absolute h-[36px] left-[9px] top-[45px] w-[144.875px]" data-name="Container">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#9810fa] text-[30px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
    </div>
  );
}

function Container241() {
  return (
    <div className="absolute h-[16px] left-[9px] top-[83px] w-[144.875px]" data-name="Container">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#4a5565] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cabinets
      </p>
    </div>
  );
}

function Container237() {
  return (
    <div className="bg-[#faf5ff] col-2 justify-self-stretch relative rounded-[4px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3e8ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container238 />
      <Container240 />
      <Container241 />
    </div>
  );
}

function Container231() {
  return (
    <div className="gap-x-[6px] gap-y-[6px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[108px] relative shrink-0 w-full" data-name="Container">
      <Container232 />
      <Container237 />
    </div>
  );
}

function Container221() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[270px] items-start left-[13px] top-[66px] w-[331.75px]" data-name="Container">
      <Container222 />
      <Container224 />
      <Container231 />
    </div>
  );
}

function Icon31() {
  return (
    <div className="absolute left-[231.48px] size-[12px] top-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M7.5 1.5H10.5V4.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 7L10.5 1.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc1a2200} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute bg-[#0a2540] h-[40px] left-[9px] rounded-[4px] top-[413px] w-[339.75px]" data-name="Link">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[20px] left-[96.25px] text-[14px] text-white top-[9px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Colocation Overview
      </p>
      <Icon31 />
    </div>
  );
}

function ColocationOverviewCard() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[10px] row-3 self-stretch shrink-0" data-name="ColocationOverviewCard">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container217 />
      <Container221 />
      <Link2 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6H5.33333" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container244() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[10px] shrink-0 size-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[6px] relative size-full">
        <Icon32 />
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[24px] relative shrink-0 w-[138.563px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[16px] text-white top-0 tracking-[-0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Recent Access Logs
        </p>
      </div>
    </div>
  );
}

function Container243() {
  return (
    <div className="content-stretch flex gap-[10px] h-[28px] items-center relative shrink-0 w-full" data-name="Container">
      <Container244 />
      <Heading12 />
    </div>
  );
}

function Container242() {
  return (
    <div className="absolute bg-[#0a2540] content-stretch flex flex-col h-[53px] items-start left-px pb-px pt-[12px] px-[16px] top-px w-[355.75px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <Container243 />
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pb47f400} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p17a13100} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 9H8" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 13H8" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 17H8" id="Vector_5" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container246() {
  return (
    <div className="absolute bg-[#e5e7eb] content-stretch flex items-center justify-center left-[140.88px] px-[12px] rounded-[33554400px] size-[48px] top-[24px]" data-name="Container">
      <Icon33 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[80px] w-[281.75px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-[141.03px] text-[#364153] text-[14px] text-center top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        No Data Available
      </p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[16px] left-[24px] top-[102px] w-[281.75px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16px] left-[141.14px] text-[#6a7282] text-[12px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        No data found for the given criteria
      </p>
    </div>
  );
}

function Container245() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[144px] left-[13px] rounded-[4px] top-[66px] w-[331.75px]" data-name="Container">
      <Container246 />
      <Paragraph10 />
      <Paragraph11 />
    </div>
  );
}

function Icon34() {
  return (
    <div className="absolute left-[264.23px] size-[12px] top-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M7.5 1.5H10.5V4.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 7L10.5 1.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc1a2200} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute bg-[#0a2540] h-[40px] left-[9px] rounded-[4px] top-[413px] w-[339.75px]" data-name="Link">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[20px] left-[63.52px] text-[14px] text-white top-[9px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Go to Data Center Access Logs
      </p>
      <Icon34 />
    </div>
  );
}

function RecentAccessLogsCard() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[10px] row-3 self-stretch shrink-0" data-name="RecentAccessLogsCard">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container242 />
      <Container245 />
      <Link3 />
    </div>
  );
}

function Icon35() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1c647980} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p13d22180} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container249() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[10px] shrink-0 size-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[6px] relative size-full">
        <Icon35 />
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[24px] relative shrink-0 w-[120.938px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[16px] text-white top-0 tracking-[-0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Service Summary
        </p>
      </div>
    </div>
  );
}

function Container248() {
  return (
    <div className="content-stretch flex gap-[10px] h-[28px] items-center relative shrink-0 w-full" data-name="Container">
      <Container249 />
      <Heading13 />
    </div>
  );
}

function Container247() {
  return (
    <div className="absolute bg-[#0a2540] content-stretch flex flex-col h-[53px] items-start left-px pb-px pt-[12px] px-[16px] top-px w-[355.75px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <Container248 />
    </div>
  );
}

function Icon36() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p15384580} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p77eed00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p1e7c0380} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text38() {
  return (
    <div className="h-[16px] relative shrink-0 w-[123.969px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[16px] left-0 text-[12px] text-white top-0 tracking-[0.3px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          DISASTER RECOVERY
        </p>
      </div>
    </div>
  );
}

function Container252() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[#155dfc] gap-[6px] h-[28px] items-center left-px pl-[10px] to-[#4f39f6] top-px w-[329.75px]" data-name="Container">
      <Icon36 />
      <Text38 />
    </div>
  );
}

function Text39() {
  return (
    <div className="h-[16px] relative shrink-0 w-[167.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#364153] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Disaster Recovery-as-a-Service
        </p>
      </div>
    </div>
  );
}

function Icon37() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M5.25 10.5L8.75 7L5.25 3.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container254() {
  return (
    <div className="bg-white h-[30px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[9px] py-px relative size-full">
          <Text39 />
          <Icon37 />
        </div>
      </div>
    </div>
  );
}

function Text40() {
  return (
    <div className="h-[16px] relative shrink-0 w-[94.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#364153] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Managed Storage
        </p>
      </div>
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M5.25 10.5L8.75 7L5.25 3.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container255() {
  return (
    <div className="bg-white h-[30px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[9px] py-px relative size-full">
          <Text40 />
          <Icon38 />
        </div>
      </div>
    </div>
  );
}

function Text41() {
  return (
    <div className="h-[16px] relative shrink-0 w-[83.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#364153] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Recovery Cloud
        </p>
      </div>
    </div>
  );
}

function Icon39() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M5.25 10.5L8.75 7L5.25 3.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container256() {
  return (
    <div className="bg-white h-[30px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[9px] py-px relative size-full">
          <Text41 />
          <Icon39 />
        </div>
      </div>
    </div>
  );
}

function Text42() {
  return (
    <div className="h-[16px] relative shrink-0 w-[111.078px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#364153] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Backup-as-a-Service
        </p>
      </div>
    </div>
  );
}

function Icon40() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M5.25 10.5L8.75 7L5.25 3.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container257() {
  return (
    <div className="bg-white h-[30px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[9px] py-px relative size-full">
          <Text42 />
          <Icon40 />
        </div>
      </div>
    </div>
  );
}

function Container253() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[126px] items-start left-[5px] top-[33px] w-[321.75px]" data-name="Container">
      <Container254 />
      <Container255 />
      <Container256 />
      <Container257 />
    </div>
  );
}

function Container251() {
  return (
    <div className="bg-[#f9fafb] h-[164px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container252 />
        <Container253 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Icon41() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.pe2fc600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text43() {
  return (
    <div className="h-[16px] relative shrink-0 w-[39.453px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[16px] left-0 text-[12px] text-white top-0 tracking-[0.3px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          CLOUD
        </p>
      </div>
    </div>
  );
}

function Container259() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[#155dfc] gap-[6px] h-[28px] items-center left-px pl-[10px] to-[#4f39f6] top-px w-[329.75px]" data-name="Container">
      <Icon41 />
      <Text43 />
    </div>
  );
}

function Text44() {
  return (
    <div className="h-[16px] relative shrink-0 w-[102.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#364153] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Multi-Tenant Cloud
        </p>
      </div>
    </div>
  );
}

function Icon42() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M5.25 10.5L8.75 7L5.25 3.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container260() {
  return (
    <div className="absolute bg-white content-stretch flex h-[30px] items-center justify-between left-[5px] px-[9px] py-px rounded-[4px] top-[33px] w-[321.75px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Text44 />
      <Icon42 />
    </div>
  );
}

function Container258() {
  return (
    <div className="bg-[#f9fafb] h-[68px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container259 />
        <Container260 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Icon43() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_39_878)" id="Icon">
          <path d={svgPaths.p17205e70} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p1d55ba00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2c913000} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p38a2a400} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 7V4.66667" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_39_878">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text45() {
  return (
    <div className="h-[16px] relative shrink-0 w-[88.188px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[16px] left-0 text-[12px] text-white top-0 tracking-[0.3px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          CONNECTIVITY
        </p>
      </div>
    </div>
  );
}

function Container262() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[#155dfc] gap-[6px] h-[28px] items-center left-px pl-[10px] to-[#4f39f6] top-px w-[329.75px]" data-name="Container">
      <Icon43 />
      <Text45 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[16px] left-[5px] top-[41px] w-[321.75px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Roboto:Italic',sans-serif] font-normal italic leading-[16px] left-[161.2px] text-[#99a1af] text-[12px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        No services in this category
      </p>
    </div>
  );
}

function Container261() {
  return (
    <div className="bg-[#f9fafb] h-[70px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container262 />
        <Paragraph12 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container250() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[314px] items-start left-[13px] top-[66px] w-[331.75px]" data-name="Container">
      <Container251 />
      <Container258 />
      <Container261 />
    </div>
  );
}

function Container263() {
  return (
    <div className="absolute bg-[#eff6ff] border border-[#dbeafe] border-solid h-[53px] left-[9px] rounded-[4px] top-[400px] w-[339.75px]" data-name="Container">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] left-[6px] text-[#4a5565] text-[12px] top-[5px] w-[318px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        View all your active services organized by category. Click on any service to view details and manage configuration.
      </p>
    </div>
  );
}

function ServiceSummaryCard() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[10px] row-3 self-stretch shrink-0" data-name="ServiceSummaryCard">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container247 />
      <Container250 />
      <Container263 />
    </div>
  );
}

function Container2() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[___minmax(0,480fr)_minmax(0,450.50fr)_minmax(0,1fr)] h-[1440.5px] relative shrink-0 w-full" data-name="Container">
      <BackupOverviewCard />
      <DisasterRecoveryCard />
      <CloudOverviewCard />
      <BillingOverviewCard />
      <OpenSupportCasesCard />
      <Link />
      <MonitoringCard />
      <BandwidthOverviewCard />
      <ColocationOverviewCard />
      <RecentAccessLogsCard />
      <ServiceSummaryCard />
    </div>
  );
}

function MainContent() {
  return (
    <div className="h-[1724.5px] relative shrink-0 w-full" data-name="Main Content">
      <div className="content-stretch flex flex-col gap-[32px] items-start pt-[32px] px-[32px] relative size-full">
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col h-[1841.5px] items-start pt-[65px] relative shrink-0 w-full" data-name="Dashboard">
      <AlertBanner />
      <MainContent />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[944px] items-start left-0 top-0 w-[1567px]" data-name="Body">
      <Dashboard />
    </div>
  );
}

function Text46() {
  return (
    <div className="h-[16px] relative shrink-0 w-[93.391px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#4a5565] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          © 2024 Flexential
        </p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[31.953px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#4a5565] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          About
        </p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[86.594px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#4a5565] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Our Datacenters
        </p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#4a5565] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Knowledge Center
        </p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[16px] relative shrink-0 w-[41.953px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#4a5565] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Contact
        </p>
      </div>
    </div>
  );
}

function Container265() {
  return (
    <div className="h-[16px] relative shrink-0 w-[447.063px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
        <Text46 />
        <Link4 />
        <Link5 />
        <Link6 />
        <Link7 />
      </div>
    </div>
  );
}

function Icon44() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_36_429)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p11f26280} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 11.3333H8.00667" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_36_429">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[#0a2540] relative rounded-[33554400px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon44 />
      </div>
    </div>
  );
}

function Container264() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container265 />
      <Button13 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[49px] items-start left-0 pt-px px-[32px] top-[895px] w-[1567px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none shadow-[0px_-2px_10px_0px_rgba(0,0,0,0.05)]" />
      <Container264 />
    </div>
  );
}

function Header1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[73.063px]" data-name="Header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[28px] left-0 text-[#0a2540] text-[18px] top-0 tracking-[-0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Flexential
        </p>
      </div>
    </div>
  );
}

function Header2() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px relative" data-name="Header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#0a2540] text-[18px] top-0 tracking-[-0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Xperience
        </p>
      </div>
    </div>
  );
}

function Header3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[44.328px]" data-name="Header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Light',sans-serif] font-light leading-[28px] left-0 text-[#6a7282] text-[18px] top-0 tracking-[-0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Portal
        </p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="h-[28px] relative shrink-0 w-[210.891px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Header1 />
        <Header2 />
        <Header3 />
      </div>
    </div>
  );
}

function Icon45() {
  return (
    <div className="absolute left-[116.42px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-[63.5px] text-[#364153] text-[14px] text-center top-[7px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Solution Suites `}</p>
        <Icon45 />
      </div>
    </div>
  );
}

function Icon46() {
  return (
    <div className="absolute left-[60.84px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[92.844px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-[35.5px] text-[#364153] text-[14px] text-center top-[7px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Billing `}</p>
        <Icon46 />
      </div>
    </div>
  );
}

function Icon47() {
  return (
    <div className="absolute left-[88.08px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[120.078px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-[49.5px] text-[#364153] text-[14px] text-center top-[7px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Resources `}</p>
        <Icon47 />
      </div>
    </div>
  );
}

function Icon48() {
  return (
    <div className="absolute left-[114.39px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[146.391px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-[62.5px] text-[#364153] text-[14px] text-center top-[7px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Administration `}</p>
        <Icon48 />
      </div>
    </div>
  );
}

function Icon49() {
  return (
    <div className="absolute left-[60.72px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[92.719px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-[35.5px] text-[#364153] text-[14px] text-center top-[7px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Fabric `}</p>
        <Icon49 />
      </div>
    </div>
  );
}

function Icon50() {
  return (
    <div className="absolute left-[99.86px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button19() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[131.859px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-[55px] text-[#364153] text-[14px] text-center top-[7px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Marketplace `}</p>
        <Icon50 />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[36px] relative shrink-0 w-[752.313px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Button14 />
        <Button15 />
        <Button16 />
        <Button17 />
        <Button18 />
        <Button19 />
      </div>
    </div>
  );
}

function Icon51() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_36_439)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p22540600} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 14.1667H10.0083" id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_36_439">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text47() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-[47.5px] text-[#364153] text-[14px] text-center top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Support Center
        </p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[36px] items-center left-0 px-[12px] rounded-[8px] top-[6.75px] w-[146.922px]" data-name="Button">
      <Icon51 />
      <Text47 />
    </div>
  );
}

function Icon52() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p399eca00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pc93b400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container268() {
  return (
    <div className="bg-[#0a2540] relative rounded-[33554400px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon52 />
      </div>
    </div>
  );
}

function Container270() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[17.5px] relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Madhu Babu
      </p>
    </div>
  );
}

function Container271() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#6a7282] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        ACCOUNT1
      </p>
    </div>
  );
}

function Container269() {
  return (
    <div className="flex-[1_0_0] h-[33.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container270 />
        <Container271 />
      </div>
    </div>
  );
}

function Icon53() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button21() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[49.5px] items-center left-[206.92px] px-[12px] rounded-[8px] top-0 w-[170.938px]" data-name="Button">
      <Container268 />
      <Container269 />
      <Icon53 />
    </div>
  );
}

function Icon54() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1c3efea0} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p25877f40} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text48() {
  return (
    <div className="absolute bg-[#fb2c36] content-stretch flex items-center justify-center left-[16px] rounded-[33554400px] size-[16px] top-[4px]" data-name="Text">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[15px] relative shrink-0 text-[10px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
    </div>
  );
}

function Button22() {
  return (
    <div className="absolute left-[158.92px] rounded-[8px] size-[36px] top-[6.75px]" data-name="Button">
      <Icon54 />
      <Text48 />
    </div>
  );
}

function Container267() {
  return (
    <div className="h-[49.5px] relative shrink-0 w-[377.859px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button20 />
        <Button21 />
        <Button22 />
      </div>
    </div>
  );
}

function Container266() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Link8 />
      <Navigation />
      <Container267 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[65px] items-start left-0 pb-px px-[24px] top-0 w-[1567px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container266 />
    </div>
  );
}

export default function RedesignPageWithRoundedBoxesMake() {
  return (
    <div className="bg-white relative size-full" data-name="Redesign Page with Rounded Boxes.make">
      <Body />
      <Footer />
      <Header />
    </div>
  );
}