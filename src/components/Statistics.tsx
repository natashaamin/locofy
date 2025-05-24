import { FunctionComponent, memo } from "react";
import styled from "styled-components";

export type StatisticsType = {
  className?: string;
};

const StatisticsChild = styled.div`
  width: 1027px;
  height: 607px;
  position: relative;
  border-radius: var(--br-10);
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
  z-index: 0;
`;
const StatisticsItem = styled.img`
  width: 16px;
  height: 3.7px;
  position: relative;
  z-index: 1;
`;
const VerticalLinesGridIcon = styled.img`
  width: 0.9px;
  flex: 1;
  position: relative;
  max-height: 100%;
  z-index: 1;
`;
const HorizontalLinesGridIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 3;
`;
const JonFord = styled.div`
  position: relative;
  line-height: 16px;
  display: inline-block;
  min-width: 54px;
  z-index: 1;
`;
const JonFord1 = styled.div`
  position: relative;
  line-height: 16px;
  display: inline-block;
  min-width: 46px;
  z-index: 1;
`;
const JonFord2 = styled.div`
  position: relative;
  line-height: 16px;
  display: inline-block;
  min-width: 43px;
  z-index: 1;
`;
const JonFord3 = styled.div`
  position: relative;
  line-height: 16px;
  display: inline-block;
  min-width: 61px;
  z-index: 1;
`;
const JonFord4 = styled.div`
  position: relative;
  line-height: 16px;
  display: inline-block;
  min-width: 48px;
  z-index: 1;
`;
const JonFord5 = styled.div`
  position: relative;
  line-height: 16px;
  display: inline-block;
  min-width: 63px;
  z-index: 1;
`;
const JonFord6 = styled.div`
  position: relative;
  line-height: 16px;
  z-index: 1;
`;
const JonFord7 = styled.div`
  position: relative;
  line-height: 16px;
  display: inline-block;
  min-width: 45px;
  z-index: 1;
`;
const JonFord8 = styled.div`
  position: relative;
  line-height: 16px;
  display: inline-block;
  min-width: 66px;
  z-index: 1;
`;
const JonFord9 = styled.div`
  position: relative;
  line-height: 16px;
  display: inline-block;
  min-width: 42px;
  z-index: 1;
`;
const EmptySpaces = styled.div`
  position: relative;
  line-height: 14px;
  display: inline-block;
  min-width: 17px;
  z-index: 1;
`;
const Shape = styled.div`
  position: absolute;
  top: 119.2px;
  left: 27.3px;
  border-radius: 55px 55px 0px 0px;
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
  width: 16px;
  height: 242px;
  z-index: 2;
`;
const Shape1 = styled.div`
  position: absolute;
  top: 78.2px;
  left: 108.3px;
  border-radius: 55px 55px 0px 0px;
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
  width: 17px;
  height: 282px;
  z-index: 2;
`;
const Shape13 = styled.div`
  position: absolute;
  top: 239.2px;
  left: 189.3px;
  border-radius: 55px 55px 0px 0px;
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
  width: 17px;
  height: 122px;
  z-index: 2;
`;
const Shape14 = styled.div`
  position: absolute;
  top: 151.2px;
  left: 271.3px;
  border-radius: 55px 55px 0px 0px;
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
  width: 16px;
  height: 210px;
  z-index: 2;
`;
const Shape15 = styled.div`
  position: absolute;
  top: 107.2px;
  left: 352.3px;
  border-radius: 55px 55px 0px 0px;
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
  width: 16px;
  height: 252px;
  z-index: 2;
`;
const Shape16 = styled.div`
  position: absolute;
  top: 140.2px;
  left: 433.3px;
  border-radius: 55px 55px 0px 0px;
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
  width: 16px;
  height: 221px;
  z-index: 2;
`;
const Shape17 = styled.div`
  position: absolute;
  top: 202.2px;
  left: 514.3px;
  border-radius: 55px 55px 0px 0px;
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
  width: 16px;
  height: 159px;
  z-index: 2;
`;
const BackgroundMarkExplanation = styled.div`
  width: 153px;
  height: 86px;
  position: relative;
  border-radius: var(--br-4);
  background-color: var(--color-lavender);
  display: none;
  z-index: 28;
`;
const Shape18 = styled.div`
  position: absolute;
  top: 119.2px;
  left: 595.3px;
  border-radius: 55px 55px 0px 0px;
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
  width: 16px;
  height: 242px;
  z-index: 2;
`;
const Shape19 = styled.div`
  position: absolute;
  top: 78.2px;
  left: 677.3px;
  border-radius: 55px 55px 0px 0px;
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
  width: 17px;
  height: 283px;
  z-index: 2;
`;
const Shape20 = styled.div`
  position: absolute;
  top: 65.2px;
  left: 759.3px;
  border-radius: 55px 55px 0px 0px;
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
  width: 16px;
  height: 296px;
  z-index: 2;
`;
const Shape21 = styled.div`
  position: absolute;
  top: 87.2px;
  left: 839.3px;
  border-radius: 55px 55px 0px 0px;
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
  width: 15px;
  height: 274px;
  z-index: 2;
`;
const Base1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 2.5px;
  background-color: var(--color-white);
  width: 100%;
  height: 100%;
  display: none;
  z-index: 3;
`;
const BaseCopy = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 2.5px;
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
  width: 90px;
  height: 5px;
  z-index: 4;
`;
const Amountall = styled.b`
  position: relative;
  font-size: var(--font-size-10);
  letter-spacing: 0.3px;
  color: var(--color-darkviolet);
  z-index: 3;
`;
const TextInformation = styled.b`
  position: relative;
  font-size: var(--font-size-10);
  color: var(--color-gray-200);
  z-index: 3;
`;
const Oval5Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 4;
`;
const Oval6Icon = styled.img`
  position: absolute;
  top: 9px;
  left: 9px;
  width: 18px;
  height: 18px;
  z-index: 5;
`;
const TitleAssesmentReport = styled.b`
  align-self: stretch;
  position: relative;
  line-height: 25px;
  z-index: 1;
`;
const StatisticsInner = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 961px;
  bottom: 548px;
  left: 0px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: contain;
  z-index: 1;
`;
const View = styled.div`
  position: relative;
  font-size: var(--font-size-10);
  text-align: center;
  z-index: 2;
`;
const Delete = styled.div`
  position: relative;
  font-size: var(--font-size-10);
  color: var(--color-gray-100);
  text-align: center;
  z-index: 2;
`;
const Statistics1 = styled.b`
  position: relative;
  font-size: var(--font-size-16);
  display: inline-block;
  min-width: 82px;
  z-index: 1;
`;
const StatisticsRoot = styled.div`
  align-self: stretch;
  border-radius: var(--br-10);
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 45px 0px var(--padding-48) 49px;
  position: relative;
  gap: var(--gap-20);
  max-width: 100%;
  z-index: 1;
  text-align: left;
  font-size: var(--font-size-12);
  color: var(--color-white);
  font-family: var(--font-poppins);
  @media screen and (max-width: 1200px) {
    padding-left: var(--padding-24);
    box-sizing: border-box;
  }
  @media screen and (max-width: 800px) {
    padding-bottom: 31px;
    box-sizing: border-box;
  }
`;

const Statistics: FunctionComponent<StatisticsType> = memo(
  ({ className = "" }) => {
    return (
      <StatisticsRoot className={className}>
        <StatisticsChild />
        <StatisticsItem loading="lazy" alt="" src="/group-96-4.svg" />
        <VerticalLinesGridIcon
          loading="lazy"
          alt=""
          src="/verticallinesgrid.svg"
        />
        <HorizontalLinesGridIcon alt="" src="/horizontallinesgrid.svg" />
        <JonFord>Amazon</JonFord>
        <JonFord1>Google</JonFord1>
        <JonFord2>iTunes</JonFord2>
        <JonFord3>Payoneer</JonFord3>
        <JonFord4>Bitcoin</JonFord4>
        <JonFord5>Ethereum</JonFord5>
        <JonFord6>Tecno</JonFord6>
        <JonFord7>Paypal</JonFord7>
        <JonFord8>Aliexpress</JonFord8>
        <JonFord9>Konga</JonFord9>
        <JonFord9>Jumia</JonFord9>
        <EmptySpaces>10</EmptySpaces>
        <EmptySpaces>20</EmptySpaces>
        <EmptySpaces>30</EmptySpaces>
        <EmptySpaces>40</EmptySpaces>
        <EmptySpaces>50</EmptySpaces>
        <EmptySpaces>60</EmptySpaces>
        <Shape />
        <Shape1 />
        <Shape13 />
        <Shape14 />
        <Shape15 />
        <Shape16 />
        <Shape17 />
        <BackgroundMarkExplanation />
        <Shape18 />
        <Shape19 />
        <Shape20 />
        <Shape21 />
        <Base1 />
        <BaseCopy />
        <Amountall>146/217</Amountall>
        <TextInformation>Avarage score</TextInformation>
        <HorizontalLinesGridIcon alt="" src="/oval-4-2.svg" />
        <Oval5Icon alt="" src="/oval-5.svg" />
        <Oval6Icon loading="lazy" alt="" src="/oval-6.svg" />
        <TitleAssesmentReport>My Own Report</TitleAssesmentReport>
        <StatisticsInner loading="lazy" alt="" src="/group-16-1@2x.png" />
        <View>View</View>
        <Delete>Delete</Delete>
        <Statistics1>Statistics</Statistics1>
      </StatisticsRoot>
    );
  }
);

export default Statistics;
