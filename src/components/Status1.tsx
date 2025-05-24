import { FunctionComponent, memo } from "react";
import styled from "styled-components";

export type StatusType = {
  className?: string;
};

const StatusChild = styled.div`
  position: absolute;
  top: 0px;
  left: 710px;
  border-radius: var(--br-10);
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  width: 317px;
  height: 168px;
`;
const Div = styled.div`
  position: absolute;
  width: 72.73%;
  top: calc(50% - 8px);
  left: 0%;
  line-height: 30px;
  display: inline-block;
  height: 16px;
`;
const Path2Icon = styled.img`
  position: absolute;
  height: 25%;
  width: 15.91%;
  top: 50%;
  right: 0%;
  bottom: 25%;
  left: 84.09%;
  border-radius: 0.5px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Parent = styled.div`
  position: absolute;
  width: 4.3%;
  top: calc(50% + 24px);
  right: 10.75%;
  left: 84.95%;
  height: 16px;
  font-size: var(--font-size-14);
`;
const MarketRateValue = styled.b`
  position: absolute;
  top: 43px;
  left: 867px;
  font-size: var(--font-size-16);
  display: inline-block;
  color: var(--color-white);
  width: 97px;
`;
const StatusItem = styled.img`
  position: absolute;
  top: 19px;
  left: 985px;
  width: 16px;
  height: 3.7px;
`;
const Path6Icon = styled.img`
  position: absolute;
  height: 83.67%;
  width: 85.13%;
  top: 16.41%;
  right: 0%;
  bottom: -0.08%;
  left: 14.87%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: contain;
  mix-blend-mode: normal;
`;
const Path2Copy = styled.img`
  position: absolute;
  height: 41.07%;
  width: 48.87%;
  top: 0%;
  right: 16.09%;
  bottom: 58.93%;
  left: 35.04%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: contain;
  mix-blend-mode: normal;
`;
const B = styled.b`
  position: absolute;
  width: 39.3%;
  top: calc(50% - 18.25px);
  left: 19.22%;
  line-height: 49.5px;
  display: inline-block;
  background: linear-gradient(144.12deg, #fc58b3, #feae68);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  height: 21.1px;
`;
const GroupChild = styled.div`
  position: absolute;
  top: 9px;
  left: 0px;
  border-radius: 50%;
  border: 10px solid var(--color-lightpink-100);
  box-sizing: border-box;
  width: 90.5px;
  height: 90.5px;
`;
const GroupItem = styled.div`
  position: absolute;
  top: 9px;
  left: 0px;
  border-radius: 50%;
  width: 90.5px;
  height: 90.5px;
`;
const Path6Parent = styled.div`
  position: absolute;
  height: 76.16%;
  width: 11.24%;
  top: 13.41%;
  right: 16.91%;
  bottom: 10.43%;
  left: 71.85%;
  text-align: center;
`;
const GroupInner = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-10);
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  width: 317px;
  height: 168px;
`;
const Div1 = styled.div`
  position: absolute;
  width: 83.33%;
  top: calc(50% - 8px);
  left: 0%;
  line-height: 30px;
  display: inline-block;
  height: 16px;
`;
const Path2Icon1 = styled.img`
  position: absolute;
  height: 25%;
  width: 16.67%;
  top: 50%;
  right: 0%;
  bottom: 25%;
  left: 83.33%;
  border-radius: 0.5px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: contain;
`;
const Group = styled.div`
  position: absolute;
  width: 13.42%;
  top: calc(50% + 19px);
  right: 40.58%;
  left: 46.01%;
  height: 16px;
`;
const TotalNumberOf = styled.b`
  position: absolute;
  top: 44px;
  left: 144px;
  font-size: var(--font-size-16);
  display: inline-block;
  color: var(--color-white);
  width: 128px;
`;
const GroupIcon = styled.img`
  position: absolute;
  top: 21px;
  left: 276px;
  width: 16px;
  height: 3.7px;
`;
const Path4Icon = styled.img`
  position: absolute;
  height: 83.62%;
  width: 85.18%;
  top: 16.38%;
  right: 0%;
  bottom: 0%;
  left: 14.82%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: contain;
  mix-blend-mode: normal;
`;
const Path2Copy1 = styled.img`
  position: absolute;
  height: 41.08%;
  width: 48.86%;
  top: 0%;
  right: 16.05%;
  bottom: 58.92%;
  left: 35.09%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: contain;
  mix-blend-mode: normal;
`;
const B1 = styled.b`
  position: absolute;
  width: 39.39%;
  top: calc(50% - 18.05px);
  left: 19.21%;
  line-height: 49.5px;
  display: inline-block;
  background: linear-gradient(144.12deg, #fc58b3, #feae68);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  height: 20.9px;
`;
const EllipseDiv = styled.div`
  position: absolute;
  top: 9px;
  left: 0px;
  border-radius: 50%;
  border: 10px solid var(--color-lightpink-200);
  box-sizing: border-box;
  width: 89.7px;
  height: 89.7px;
`;
const GroupChild1 = styled.div`
  position: absolute;
  top: 9px;
  left: 0px;
  border-radius: 50%;
  width: 89.7px;
  height: 89.7px;
`;
const Path4Parent = styled.div`
  position: absolute;
  height: 75.55%;
  width: 36.42%;
  top: 14.02%;
  right: 55.59%;
  bottom: 10.43%;
  left: 7.99%;
  text-align: center;
`;
const BaseIcon = styled.img`
  position: absolute;
  height: 15.85%;
  width: 20.13%;
  top: 57.32%;
  right: 14.38%;
  bottom: 26.83%;
  left: 65.5%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  mix-blend-mode: normal;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 313px;
  height: 164px;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-10);
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  width: 315px;
  height: 168px;
`;
const Div2 = styled.div`
  position: absolute;
  width: 79.41%;
  top: calc(50% - 8px);
  left: 0%;
  line-height: 30px;
  display: inline-block;
  height: 16px;
`;
const Path2Icon2 = styled.img`
  position: absolute;
  height: 25%;
  width: 20.59%;
  top: 43.75%;
  right: 0%;
  bottom: 31.25%;
  left: 79.41%;
  border-radius: 0.5px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Container = styled.div`
  position: absolute;
  width: 10.93%;
  top: calc(50% + 24px);
  right: 39.87%;
  left: 49.2%;
  height: 16px;
`;
const TotalNumberOf1 = styled.b`
  position: absolute;
  top: 44px;
  left: 153px;
  font-size: var(--font-size-16);
  display: inline-block;
  color: var(--color-white);
  width: 115px;
`;
const GroupChild2 = styled.img`
  position: absolute;
  top: 21px;
  left: 274px;
  width: 16px;
  height: 3.7px;
`;
const Path5Icon = styled.img`
  position: absolute;
  height: 83.65%;
  width: 85.19%;
  top: 16.35%;
  right: -0.09%;
  bottom: 0%;
  left: 14.9%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: contain;
  mix-blend-mode: normal;
`;
const Path2Copy2 = styled.img`
  position: absolute;
  height: 41.04%;
  width: 48.83%;
  top: 0%;
  right: 16.16%;
  bottom: 58.96%;
  left: 35.01%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: contain;
  mix-blend-mode: normal;
`;
const B2 = styled.b`
  position: absolute;
  width: 39.32%;
  top: calc(50% - 14.55px);
  left: 19.21%;
  line-height: 49.5px;
  display: inline-block;
  background: linear-gradient(144.12deg, #fc58b3, #feae68);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  height: 20.5px;
`;
const GroupChild3 = styled.div`
  position: absolute;
  top: 8.8px;
  left: 0px;
  border-radius: 50%;
  border: 10px solid var(--color-lightpink-100);
  box-sizing: border-box;
  width: 87.7px;
  height: 87.7px;
`;
const GroupChild4 = styled.div`
  position: absolute;
  top: 8.8px;
  left: 0px;
  border-radius: 50%;
  width: 87.7px;
  height: 87.7px;
`;
const Path5Parent = styled.div`
  position: absolute;
  height: 73.84%;
  width: 35.82%;
  top: 14.63%;
  right: 56.14%;
  bottom: 11.52%;
  left: 8.04%;
  text-align: center;
`;
const BaseIcon1 = styled.img`
  position: absolute;
  height: 15.85%;
  width: 20.26%;
  top: 57.32%;
  right: 13.18%;
  bottom: 26.83%;
  left: 66.56%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  mix-blend-mode: normal;
`;
const RectangleGroup = styled.div`
  position: absolute;
  top: 0px;
  left: 356px;
  width: 311px;
  height: 164px;
`;
const BaseIcon2 = styled.img`
  position: absolute;
  height: 15.85%;
  width: 6.16%;
  top: 57.32%;
  right: 3.52%;
  bottom: 26.83%;
  left: 90.32%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  mix-blend-mode: normal;
`;
const StatusInner = styled.img`
  position: absolute;
  height: 33.54%;
  width: 6.16%;
  top: 17.68%;
  right: 67.16%;
  bottom: 48.78%;
  left: 26.69%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: contain;
`;
const View = styled.div`
  position: absolute;
  top: 36.6px;
  left: 279.4px;
  font-size: var(--font-size-10);
  color: var(--color-white);
  text-align: center;
`;
const Delete = styled.div`
  position: absolute;
  top: 62px;
  left: 280px;
  font-size: var(--font-size-10);
  color: var(--color-gray);
  text-align: center;
`;
const StatusRoot = styled.div`
  position: absolute;
  top: 232px;
  left: 375px;
  width: 1023px;
  height: 164px;
  text-align: left;
  font-size: var(--font-size-12);
  color: var(--color-mediumaquamarine);
  font-family: var(--font-poppins);
`;

const Status: FunctionComponent<StatusType> = memo(({ className = "" }) => {
  return (
    <StatusRoot className={className}>
      <StatusChild />
      <Parent>
        <Div>11.8%</Div>
        <Path2Icon alt="" src="/path-2-2.svg" />
      </Parent>
      <MarketRateValue>Market Rate Value</MarketRateValue>
      <StatusItem alt="" src="/group-96-7.svg" />
      <Path6Parent>
        <Path6Icon alt="" src="/path-6.svg" />
        <Path2Copy alt="" src="/path-2-copy-2.svg" />
        <B>87%</B>
        <GroupChild />
        <GroupItem />
      </Path6Parent>
      <RectangleParent>
        <GroupInner />
        <Group>
          <Div1>22.8%</Div1>
          <Path2Icon1 alt="" src="/path-2-2.svg" />
        </Group>
        <TotalNumberOf>Total Number Of Transaction</TotalNumberOf>
        <GroupIcon alt="" src="/group-96-4.svg" />
        <Path4Parent>
          <Path4Icon alt="" src="/path-4.svg" />
          <Path2Copy1 alt="" src="/path-2-copy.svg" />
          <B1>15000</B1>
          <EllipseDiv />
          <GroupChild1 />
        </Path4Parent>
        <BaseIcon alt="" src="/base.svg" />
      </RectangleParent>
      <RectangleGroup>
        <RectangleDiv />
        <Container>
          <Div2>11.8%</Div2>
          <Path2Icon2 alt="" src="/path-2-2.svg" />
        </Container>
        <TotalNumberOf1>Total Number Of Trade</TotalNumberOf1>
        <GroupChild2 alt="" src="/group-96-4.svg" />
        <Path5Parent>
          <Path5Icon alt="" src="/path-5.svg" />
          <Path2Copy2 alt="" src="/path-2-copy-1.svg" />
          <B2>43498</B2>
          <GroupChild3 />
          <GroupChild4 />
        </Path5Parent>
        <BaseIcon1 alt="" src="/base.svg" />
      </RectangleGroup>
      <BaseIcon2 alt="" src="/base.svg" />
      <StatusInner alt="" src="/group-16-1@2x.png" />
      <View>View</View>
      <Delete>Delete</Delete>
    </StatusRoot>
  );
});

export default Status;
