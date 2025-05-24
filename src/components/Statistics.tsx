import { FunctionComponent, memo } from "react";
import styled from "styled-components";

export type StatisticsType = {
  className?: string;
};

const StatisticsChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-10);
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  width: 1027px;
  height: 607px;
`;
const StatisticsItem = styled.img`
  position: absolute;
  top: 52px;
  left: 961px;
  width: 16px;
  height: 3.7px;
`;
const VerticalLinesGridIcon = styled.img`
  position: absolute;
  height: 59.85%;
  width: 0.09%;
  top: 27.71%;
  right: 89.65%;
  bottom: 12.44%;
  left: 10.26%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  mix-blend-mode: normal;
`;
const HorizontalLinesGridIcon = styled.img`
  position: absolute;
  height: 49.95%;
  width: 84.17%;
  top: 27.66%;
  right: 5.41%;
  bottom: 22.39%;
  left: 10.42%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  mix-blend-mode: normal;
`;
const JonFord = styled.div`
  position: absolute;
  width: 5.27%;
  top: calc(50% + 236.5px);
  left: 11.13%;
  line-height: 16px;
  display: inline-block;
  height: 17px;
`;
const JonFord1 = styled.div`
  position: absolute;
  width: 4.49%;
  top: calc(50% + 236.5px);
  left: 19.43%;
  line-height: 16px;
  display: inline-block;
  height: 17px;
`;
const JonFord2 = styled.div`
  position: absolute;
  width: 4.2%;
  top: calc(50% + 236.5px);
  left: 27.64%;
  line-height: 16px;
  display: inline-block;
  height: 17px;
`;
const JonFord3 = styled.div`
  position: absolute;
  width: 5.96%;
  top: calc(50% + 236.5px);
  left: 35.06%;
  line-height: 16px;
  display: inline-block;
  height: 17px;
`;
const JonFord4 = styled.div`
  position: absolute;
  width: 4.69%;
  top: calc(50% + 236.5px);
  left: 43.16%;
  line-height: 16px;
  display: inline-block;
  height: 17px;
`;
const JonFord5 = styled.div`
  position: absolute;
  width: 6.15%;
  top: calc(50% + 236.5px);
  left: 50.88%;
  line-height: 16px;
  display: inline-block;
  height: 17px;
`;
const JonFord6 = styled.div`
  position: absolute;
  width: 3.71%;
  top: calc(50% + 236.5px);
  left: 60.06%;
  line-height: 16px;
  display: inline-block;
  height: 17px;
`;
const JonFord7 = styled.div`
  position: absolute;
  width: 4.39%;
  top: calc(50% + 236.5px);
  left: 66.8%;
  line-height: 16px;
  display: inline-block;
  height: 17px;
`;
const JonFord8 = styled.div`
  position: absolute;
  width: 6.45%;
  top: calc(50% + 236.5px);
  left: 74.22%;
  line-height: 16px;
  display: inline-block;
  height: 17px;
`;
const JonFord9 = styled.div`
  position: absolute;
  width: 4.1%;
  top: calc(50% + 236.5px);
  left: 83.69%;
  line-height: 16px;
  display: inline-block;
  height: 17px;
`;
const JonFord10 = styled.div`
  position: absolute;
  width: 4.1%;
  top: calc(50% + 236.5px);
  left: 90.82%;
  line-height: 16px;
  display: inline-block;
  height: 17px;
`;
const Div = styled.div`
  position: absolute;
  width: 1.66%;
  top: calc(50% + 158.5px);
  left: 6.64%;
  line-height: 14px;
  display: inline-block;
  height: 22px;
`;
const Div1 = styled.div`
  position: absolute;
  width: 1.66%;
  top: calc(50% + 98.5px);
  left: 6.64%;
  line-height: 14px;
  display: inline-block;
  height: 22px;
`;
const Div2 = styled.div`
  position: absolute;
  width: 1.66%;
  top: calc(50% + 36.5px);
  left: 6.64%;
  line-height: 14px;
  display: inline-block;
  height: 22px;
`;
const Div3 = styled.div`
  position: absolute;
  width: 1.66%;
  top: calc(50% - 24.5px);
  left: 6.64%;
  line-height: 14px;
  display: inline-block;
  height: 22px;
`;
const Div4 = styled.div`
  position: absolute;
  width: 1.66%;
  top: calc(50% - 85.5px);
  left: 6.64%;
  line-height: 14px;
  display: inline-block;
  height: 22px;
`;
const Div5 = styled.div`
  position: absolute;
  width: 1.66%;
  top: calc(50% - 142.5px);
  left: 6.64%;
  line-height: 14px;
  display: inline-block;
  height: 22px;
`;
const Shape = styled.div`
  position: absolute;
  height: 40.13%;
  width: 1.56%;
  top: 47.43%;
  right: 85.35%;
  bottom: 12.44%;
  left: 13.09%;
  border-radius: 55px 55px 0px 0px;
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
`;
const Shape1 = styled.div`
  position: absolute;
  height: 46.77%;
  width: 1.66%;
  top: 40.63%;
  right: 77.34%;
  bottom: 12.6%;
  left: 21%;
  border-radius: 55px 55px 0px 0px;
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
`;
const Shape13 = styled.div`
  position: absolute;
  height: 20.23%;
  width: 1.66%;
  top: 67.33%;
  right: 69.43%;
  bottom: 12.44%;
  left: 28.91%;
  border-radius: 55px 55px 0px 0px;
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
`;
const Shape14 = styled.div`
  position: absolute;
  height: 34.83%;
  width: 1.56%;
  top: 52.74%;
  right: 61.52%;
  bottom: 12.44%;
  left: 36.91%;
  border-radius: 55px 55px 0px 0px;
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
`;
const Shape15 = styled.div`
  position: absolute;
  height: 41.79%;
  width: 1.56%;
  top: 45.44%;
  right: 53.61%;
  bottom: 12.77%;
  left: 44.82%;
  border-radius: 55px 55px 0px 0px;
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
`;
const Shape16 = styled.div`
  position: absolute;
  height: 36.65%;
  width: 1.56%;
  top: 50.91%;
  right: 45.7%;
  bottom: 12.44%;
  left: 52.73%;
  border-radius: 55px 55px 0px 0px;
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
`;
const Shape17 = styled.div`
  position: absolute;
  height: 26.37%;
  width: 1.56%;
  top: 61.19%;
  right: 37.79%;
  bottom: 12.44%;
  left: 60.64%;
  border-radius: 55px 55px 0px 0px;
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
`;
const BackgroundMarkExplanation = styled.div`
  position: absolute;
  height: 14.26%;
  width: 14.94%;
  top: 26.37%;
  right: 46.78%;
  bottom: 59.37%;
  left: 38.28%;
  border-radius: var(--br-4);
  background-color: var(--color-lavender);
  mix-blend-mode: normal;
`;
const Shape18 = styled.div`
  position: absolute;
  height: 40.13%;
  width: 1.56%;
  top: 47.43%;
  right: 29.88%;
  bottom: 12.44%;
  left: 68.55%;
  border-radius: 55px 55px 0px 0px;
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
`;
const Shape19 = styled.div`
  position: absolute;
  height: 46.93%;
  width: 1.66%;
  top: 40.63%;
  right: 21.78%;
  bottom: 12.44%;
  left: 76.56%;
  border-radius: 55px 55px 0px 0px;
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
`;
const Shape20 = styled.div`
  position: absolute;
  height: 49.09%;
  width: 1.56%;
  top: 38.47%;
  right: 13.87%;
  bottom: 12.44%;
  left: 84.57%;
  border-radius: 55px 55px 0px 0px;
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
`;
const Shape21 = styled.div`
  position: absolute;
  height: 45.44%;
  width: 1.46%;
  top: 42.12%;
  right: 6.15%;
  bottom: 12.44%;
  left: 92.38%;
  border-radius: 55px 55px 0px 0px;
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
`;
const Base1 = styled.div`
  position: absolute;
  height: 0.83%;
  width: 12.7%;
  top: 36.98%;
  right: 47.85%;
  bottom: 62.19%;
  left: 39.45%;
  border-radius: 2.5px;
  background-color: var(--color-white);
`;
const BaseCopy = styled.div`
  position: absolute;
  height: 0.83%;
  width: 8.79%;
  top: 36.98%;
  right: 51.76%;
  bottom: 62.19%;
  left: 39.45%;
  border-radius: 2.5px;
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
`;
const Amountall = styled.b`
  position: absolute;
  width: 3.81%;
  top: calc(50% - 103.5px);
  left: 43.85%;
  font-size: var(--font-size-10);
  letter-spacing: 0.3px;
  display: inline-block;
  color: var(--color-darkviolet);
  height: 14px;
`;
const TextInformation = styled.b`
  position: absolute;
  width: 7.42%;
  top: calc(50% - 128.5px);
  left: 42.09%;
  font-size: var(--font-size-10);
  display: inline-block;
  color: var(--color-gray);
  height: 17px;
  opacity: 0.7;
  mix-blend-mode: normal;
`;
const Oval4Icon = styled.img`
  position: absolute;
  height: 9.78%;
  width: 5.76%;
  top: 41.63%;
  right: 51.56%;
  bottom: 48.59%;
  left: 42.68%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  mix-blend-mode: normal;
`;
const Oval5Icon = styled.img`
  position: absolute;
  height: 5.97%;
  width: 3.52%;
  top: 43.62%;
  right: 52.64%;
  bottom: 50.41%;
  left: 43.85%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  mix-blend-mode: normal;
`;
const Oval6Icon = styled.img`
  position: absolute;
  height: 2.99%;
  width: 1.76%;
  top: 45.11%;
  right: 53.52%;
  bottom: 51.91%;
  left: 44.73%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  mix-blend-mode: normal;
`;
const TitleAssesmentReport = styled.b`
  position: absolute;
  width: 12.3%;
  top: calc(50% - 187.5px);
  left: 4.79%;
  line-height: 25px;
  display: inline-block;
  height: 22px;
`;
const StatisticsInner = styled.img`
  position: absolute;
  height: 9.12%;
  width: 6.15%;
  top: 11.28%;
  right: 0%;
  bottom: 79.6%;
  left: 93.85%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: contain;
`;
const View = styled.div`
  position: absolute;
  top: 75.6px;
  left: 967.4px;
  font-size: var(--font-size-10);
  text-align: center;
`;
const Delete = styled.div`
  position: absolute;
  top: 101px;
  left: 968px;
  font-size: var(--font-size-10);
  color: var(--color-gray);
  text-align: center;
`;
const Statistics1 = styled.b`
  position: absolute;
  top: 45px;
  left: 52px;
  font-size: var(--font-size-16);
  display: inline-block;
  width: 82px;
  height: 23px;
`;
const StatisticsRoot = styled.div`
  position: absolute;
  top: 1130px;
  left: 375px;
  width: 1024px;
  height: 603px;
  text-align: left;
  font-size: var(--font-size-12);
  color: var(--color-white);
  font-family: var(--font-poppins);
`;

const Statistics: FunctionComponent<StatisticsType> = memo(
  ({ className = "" }) => {
    return (
      <StatisticsRoot className={className}>
        <StatisticsChild />
        <StatisticsItem alt="" src="/group-96-4.svg" />
        <VerticalLinesGridIcon alt="" src="/verticallinesgrid.svg" />
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
        <JonFord10>Jumia</JonFord10>
        <Div>10</Div>
        <Div1>20</Div1>
        <Div2>30</Div2>
        <Div3>40</Div3>
        <Div4>50</Div4>
        <Div5>60</Div5>
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
        <Oval4Icon alt="" src="/oval-4-2.svg" />
        <Oval5Icon alt="" src="/oval-5.svg" />
        <Oval6Icon alt="" src="/oval-6.svg" />
        <TitleAssesmentReport>My Own Report</TitleAssesmentReport>
        <StatisticsInner alt="" src="/group-16-1@2x.png" />
        <View>View</View>
        <Delete>Delete</Delete>
        <Statistics1>Statistics</Statistics1>
      </StatisticsRoot>
    );
  }
);

export default Statistics;