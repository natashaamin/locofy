import { FunctionComponent } from "react";
import styled from "styled-components";
import SideNav from "../components/SideNav";
import Nav from "../components/Nav";

const Base = styled.div`
  position: absolute;
  top: 83px;
  left: 0px;
  background-color: var(--color-midnightblue);
  width: 1500px;
  height: 937px;
`;
const ChatTradeChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-10);
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  width: 1027px;
  height: 690px;
`;
const ChatTradeItem = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 262px;
  height: 686px;
`;
const MaskGroupIcon = styled.img`
  position: absolute;
  top: 24px;
  left: 35px;
  width: 36px;
  height: 36px;
`;
const RamonRidwan = styled.b`
  position: absolute;
  top: 24px;
  left: 84px;
  line-height: 24px;
`;
const MaskGroupIcon1 = styled.img`
  position: absolute;
  top: 112px;
  left: 35px;
  width: 36px;
  height: 36px;
`;
const AgentRue = styled.b`
  position: absolute;
  top: 112px;
  left: 84px;
  line-height: 24px;
`;
const Online = styled.div`
  position: absolute;
  top: 40px;
  left: 84px;
  font-size: var(--font-size-10);
  line-height: 24px;
`;
const Online1 = styled.div`
  position: absolute;
  top: 129px;
  left: 84px;
  font-size: var(--font-size-10);
  line-height: 24px;
`;
const Typing = styled.div`
  position: absolute;
  top: 129px;
  left: 193px;
  font-size: var(--font-size-10);
  line-height: 24px;
`;
const ChatTradeInner = styled.div`
  position: absolute;
  top: 47px;
  left: 61px;
  border-radius: 50%;
  background-color: var(--color-limegreen);
  width: 10px;
  height: 10px;
`;
const EllipseDiv = styled.div`
  position: absolute;
  top: 136px;
  left: 61px;
  border-radius: 50%;
  background-color: var(--color-limegreen);
  width: 10px;
  height: 10px;
`;
const MaskGroupIcon2 = styled.img`
  position: absolute;
  top: 178px;
  left: 35px;
  width: 36px;
  height: 36px;
`;
const AgentDaniel = styled.b`
  position: absolute;
  top: 178px;
  left: 84px;
  line-height: 24px;
`;
const Offline = styled.div`
  position: absolute;
  top: 195px;
  left: 84px;
  font-size: var(--font-size-10);
  line-height: 24px;
`;
const ChatTradeChild1 = styled.div`
  position: absolute;
  top: 202px;
  left: 61px;
  border-radius: 50%;
  background-color: var(--color-gainsboro);
  width: 10px;
  height: 10px;
`;
const MaskGroupIcon3 = styled.img`
  position: absolute;
  top: 244px;
  left: 35px;
  width: 36px;
  height: 36px;
`;
const AgentRose = styled.b`
  position: absolute;
  top: 244px;
  left: 84px;
  line-height: 24px;
`;
const Offline1 = styled.div`
  position: absolute;
  top: 261px;
  left: 84px;
  font-size: var(--font-size-10);
  line-height: 24px;
`;
const ChatTradeChild2 = styled.div`
  position: absolute;
  top: 268px;
  left: 61px;
  border-radius: 50%;
  background-color: var(--color-gainsboro);
  width: 10px;
  height: 10px;
`;
const MaskGroupIcon4 = styled.img`
  position: absolute;
  top: 308px;
  left: 35px;
  width: 36px;
  height: 36px;
`;
const AgentWilliam = styled.b`
  position: absolute;
  top: 308px;
  left: 84px;
  line-height: 24px;
`;
const Online2 = styled.div`
  position: absolute;
  top: 325px;
  left: 84px;
  font-size: var(--font-size-10);
  line-height: 24px;
`;
const ChatTradeChild3 = styled.div`
  position: absolute;
  top: 332px;
  left: 61px;
  border-radius: 50%;
  background-color: var(--color-gainsboro);
  width: 10px;
  height: 10px;
`;
const LineDiv = styled.div`
  position: absolute;
  top: 80px;
  left: 0px;
  border-top: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  width: 264px;
  height: 2px;
`;
const Oval4Icon = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const B = styled.b`
  position: absolute;
  width: 66.67%;
  top: calc(50% - 6px);
  left: 14.29%;
  letter-spacing: -0.43px;
  display: inline-block;
`;
const Oval4Parent = styled.div`
  position: absolute;
  height: 2.92%;
  width: 2.05%;
  top: 27.55%;
  right: 77.22%;
  bottom: 69.53%;
  left: 20.72%;
  text-align: center;
  font-size: var(--font-size-8);
`;
const Oval4Group = styled.div`
  position: absolute;
  height: 2.92%;
  width: 2.05%;
  top: 36.73%;
  right: 77.22%;
  bottom: 60.35%;
  left: 20.72%;
  text-align: center;
  font-size: var(--font-size-8);
`;
const InputBox = styled.div`
  position: absolute;
  height: 7.29%;
  width: 67.25%;
  top: 89.5%;
  right: 3.42%;
  bottom: 3.21%;
  left: 29.33%;
  border-radius: var(--br-100);
  background-color: var(--color-midnightblue);
  border: 1px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
`;
const Path753Icon = styled.img`
  position: absolute;
  top: 625.5px;
  left: 855.5px;
  width: 23.2px;
  height: 23.2px;
  object-fit: contain;
`;
const Placeholder = styled.div`
  position: absolute;
  width: 14.26%;
  top: calc(50% + 287px);
  left: 32.26%;
  letter-spacing: 0.44px;
  line-height: 22px;
  color: var(--color-silver);
  display: inline-block;
`;
const Btn = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: var(--br-100);
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
`;
const Btn1 = styled.b`
  position: absolute;
  width: calc(100% - 32px);
  top: 6px;
  left: 16px;
  letter-spacing: 0.38px;
  line-height: 22px;
  text-transform: uppercase;
  display: inline-block;
  height: 16px;
`;
const Uibuttonssqnormal = styled.div`
  position: absolute;
  height: 4.37%;
  width: 7.14%;
  top: 90.79%;
  right: 4.69%;
  bottom: 4.84%;
  left: 88.17%;
  text-align: center;
`;
const Line = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
`;
const Uilinegray = styled.div`
  position: absolute;
  height: 0.29%;
  width: 61%;
  top: 53.94%;
  right: 5%;
  bottom: 45.77%;
  left: 34%;
`;
const Unread = styled.b`
  position: absolute;
  width: 5.59%;
  top: calc(50% + 20px);
  left: 27.96%;
  letter-spacing: 0.38px;
  line-height: 16px;
  text-transform: uppercase;
  display: inline-block;
  font-family: var(--font-nunito);
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Bg = styled.div`
  position: absolute;
  height: 57.83%;
  width: 91%;
  top: 33.73%;
  right: 9%;
  bottom: 8.43%;
  left: 0%;
  border-radius: var(--br-10);
  background-color: var(--color-whitesmoke-200);
`;
const Text = styled.div`
  position: absolute;
  width: calc(100% - 12px);
  top: 42px;
  left: 20px;
  line-height: 22px;
  display: inline-block;
`;
const Name = styled.div`
  position: absolute;
  width: 9.45%;
  top: calc(50% - 41.5px);
  left: 0%;
  font-size: var(--font-size-10);
  line-height: 17px;
  color: var(--color-white);
  display: inline-block;
`;
const Messageleft = styled.div`
  position: absolute;
  height: 12.1%;
  width: 47.59%;
  top: 4.37%;
  right: 23.09%;
  bottom: 83.53%;
  left: 29.33%;
  color: var(--color-gray);
`;
const Bg1 = styled.div`
  position: absolute;
  height: 57.83%;
  width: 67.38%;
  top: 33.73%;
  right: 32.62%;
  bottom: 8.43%;
  left: 0%;
  border-radius: var(--br-10);
  background-color: var(--color-whitesmoke-200);
`;
const Text1 = styled.div`
  position: absolute;
  width: calc(100% - 202.8px);
  top: 42px;
  left: 20px;
  line-height: 22px;
  display: inline-block;
`;
const Name1 = styled.div`
  position: absolute;
  width: 31.39%;
  top: calc(50% - 41.5px);
  left: 0%;
  font-size: var(--font-size-10);
  line-height: 17px;
  color: var(--color-white);
  display: inline-block;
`;
const Messageleft1 = styled.div`
  position: absolute;
  height: 12.1%;
  width: 47.59%;
  top: 33.38%;
  right: 23.09%;
  bottom: 54.52%;
  left: 29.33%;
  color: var(--color-gray);
`;
const Bg2 = styled.div`
  position: absolute;
  height: 63.16%;
  width: 100%;
  top: 36.84%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: var(--br-10);
  background-color: var(--color-whitesmoke-200);
`;
const Text2 = styled.div`
  position: absolute;
  width: calc(100% - 41px);
  top: 42px;
  left: 20px;
  line-height: 22px;
  display: inline-block;
`;
const Name2 = styled.div`
  position: absolute;
  width: 25.94%;
  top: calc(50% - 38px);
  left: 74.06%;
  font-size: var(--font-size-10);
  line-height: 17px;
  color: var(--color-white);
  display: inline-block;
`;
const BgParent = styled.div`
  position: absolute;
  height: 11.08%;
  width: 31.28%;
  top: 19.39%;
  right: 3.62%;
  bottom: 69.53%;
  left: 65.1%;
  color: var(--color-gray);
`;
const Name3 = styled.div`
  position: absolute;
  width: 26.5%;
  top: calc(50% - 41.5px);
  left: 0%;
  font-size: var(--font-size-10);
  line-height: 17px;
  color: var(--color-white);
  display: inline-block;
`;
const Messageleft2 = styled.div`
  position: absolute;
  height: 12.1%;
  width: 47.59%;
  top: 57.43%;
  right: 23.09%;
  bottom: 30.47%;
  left: 29.33%;
  color: var(--color-gray);
`;
const Name4 = styled.div`
  position: absolute;
  width: 40.94%;
  top: calc(50% - 38px);
  left: 59.06%;
  font-size: var(--font-size-10);
  line-height: 17px;
  display: inline-block;
`;
const BgGroup = styled.div`
  position: absolute;
  height: 11.08%;
  width: 31.28%;
  top: 72.45%;
  right: 3.62%;
  bottom: 16.47%;
  left: 65.1%;
  color: var(--color-gray);
`;
const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-100);
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
  width: 134px;
  height: 42px;
`;
const NewTrade = styled.div`
  position: absolute;
  top: 12px;
  left: 40px;
  display: inline-block;
  width: 61px;
  height: 17px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 620px;
  left: 61px;
  width: 134px;
  height: 42px;
  font-size: var(--font-size-10);
`;
const ChatTrade = styled.div`
  position: absolute;
  top: 232px;
  left: 375px;
  width: 1023px;
  height: 686px;
`;
const CampaignsManagement = styled.b`
  position: absolute;
  top: calc(50% - 378px);
  left: 25%;
  white-space: pre-wrap;
`;
const Trade1 = styled.b`
  position: absolute;
  top: 183px;
  left: 375px;
  font-size: var(--font-size-16);
  display: inline-block;
  width: 53px;
  height: 23px;
`;
const TriangleIcon = styled.img`
  position: absolute;
  height: 27.78%;
  width: 4.46%;
  top: 44.44%;
  right: 0%;
  bottom: 27.78%;
  left: 95.54%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Accounts = styled.b`
  position: absolute;
  top: calc(50% - 9px);
  left: 0%;
`;
const NikeS = styled.b`
  position: absolute;
  top: calc(50% - 9px);
  left: 43.11%;
  text-align: left;
`;
const GroupItem = styled.img`
  position: absolute;
  height: 72.22%;
  width: 1.49%;
  top: 11.11%;
  right: 63.33%;
  bottom: 16.67%;
  left: 35.18%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  mix-blend-mode: normal;
`;
const TriangleParent = styled.div`
  position: absolute;
  height: 1.76%;
  width: 13.45%;
  top: 12.55%;
  right: 6.81%;
  bottom: 85.69%;
  left: 79.73%;
  text-align: center;
`;
const Trade2 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1500px;
  height: 1020px;
`;
const TradeRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  height: 1020px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-12);
  color: var(--color-white);
  font-family: var(--font-poppins);
`;

const Trade: FunctionComponent = () => {
  return (
    <TradeRoot>
      <Trade2>
        <Base />
        <SideNav />
        <ChatTrade>
          <ChatTradeChild />
          <ChatTradeItem alt="" src="/rectangle-300.svg" />
          <MaskGroupIcon alt="" src="/mask-group-1.svg" />
          <RamonRidwan>Ramon Ridwan</RamonRidwan>
          <MaskGroupIcon1 alt="" src="/mask-group-1.svg" />
          <AgentRue>Agent Rue</AgentRue>
          <Online>Online</Online>
          <Online1>Online</Online1>
          <Typing>typing....</Typing>
          <ChatTradeInner />
          <EllipseDiv />
          <MaskGroupIcon2 alt="" src="/mask-group-1.svg" />
          <AgentDaniel>Agent Daniel</AgentDaniel>
          <Offline>Offline</Offline>
          <ChatTradeChild1 />
          <MaskGroupIcon3 alt="" src="/mask-group-1.svg" />
          <AgentRose>Agent Rose</AgentRose>
          <Offline1>Offline</Offline1>
          <ChatTradeChild2 />
          <MaskGroupIcon4 alt="" src="/mask-group-1.svg" />
          <AgentWilliam>Agent William</AgentWilliam>
          <Online2>Online</Online2>
          <ChatTradeChild3 />
          <LineDiv />
          <Oval4Parent>
            <Oval4Icon alt="" src="/oval-4-1.svg" />
            <B>10</B>
          </Oval4Parent>
          <Oval4Group>
            <Oval4Icon alt="" src="/oval-4-1.svg" />
            <B>9</B>
          </Oval4Group>
          <InputBox />
          <Path753Icon alt="" src="/path75-3.svg" />
          <Placeholder>Start typing here</Placeholder>
          <Uibuttonssqnormal>
            <Btn />
            <Btn1>Send</Btn1>
          </Uibuttonssqnormal>
          <Uilinegray>
            <Line />
          </Uilinegray>
          <Unread>Unread</Unread>
          <Messageleft>
            <Bg />
            <Text>
              Hello am new to this system can i get a breakdown on how it works?
            </Text>
            <Name>{`Me, 10.:22 `}</Name>
          </Messageleft>
          <Messageleft1>
            <Bg1 />
            <Text1>Please, can you go into details bout the service</Text1>
            <Name1>Me, 3 minutes ago</Name1>
          </Messageleft1>
          <BgParent>
            <Bg2 />
            <Text2>Yes we currently run both on our platform here</Text2>
            <Name2>Agent Rue, 10:24</Name2>
          </BgParent>
          <Messageleft2>
            <Bg />
            <Text>
              Hello am new to this system can i get a breakdown on how it works?
            </Text>
            <Name3>Agent Rue, 9 minutes ago</Name3>
          </Messageleft2>
          <BgGroup>
            <Bg2 />
            <Text2>Yes we currently run both on our platform here</Text2>
            <Name4>Agent Rue, 9 minutes ago</Name4>
          </BgGroup>
          <RectangleParent>
            <GroupChild />
            <NewTrade>New Trade?</NewTrade>
          </RectangleParent>
        </ChatTrade>
        <CampaignsManagement>User Management Trade</CampaignsManagement>
        <Trade1>Trade</Trade1>
        <TriangleParent>
          <TriangleIcon alt="" src="/triangle.svg" />
          <Accounts>Accounts</Accounts>
          <NikeS>RAMON RIDWAN</NikeS>
          <GroupItem alt="" src="/line-22.svg" />
        </TriangleParent>
        <Nav
          navPadding="unset"
          group364="/group-364.svg"
          rectangleDivBorder="1px solid #fff"
          navPosition="absolute"
          navTop="0px"
          navLeft="0px"
          navWidth="1500px"
          navHeight="83px"
          navAlignSelf="unset"
          navBackgroundColor="unset"
          navBorder="unset"
          navDisplay="unset"
          navFlexDirection="unset"
          navAlignItems="unset"
          navJustifyContent="unset"
          navGap="unset"
          showRectangle
          rectanglePosition="absolute"
          rectangleTop="0px"
          rectangleLeft="0px"
          showRectangleDiv
          rectangleDivPosition="absolute"
          rectangleDivTop="21px"
          rectangleDivLeft="722px"
          maskGroupIconPosition="absolute"
          maskGroupIconTop="23px"
          maskGroupIconLeft="1196px"
          ramonRidwanPosition="absolute"
          ramonRidwanTop="35px"
          ramonRidwanLeft="1243px"
          groupIconTop="33.2px"
          groupIconLeft="1377px"
          groupIconMargin="unset"
          groupIconBottom="unset"
          showGroupDiv
          groupDivPosition="absolute"
          groupDivHeight="16.87%"
          groupDivWidth="0.97%"
          groupDivTop="34.94%"
          groupDivRight="6.81%"
          groupDivBottom="48.19%"
          groupDivLeft="92.22%"
          searchEgLivePosition="absolute"
          searchEgLiveWidth="6.47%"
          searchEgLiveTop="calc(50% - 6.5px)"
          searchEgLiveLeft="52.47%"
          searchEgLiveColor="#fff"
          searchEgLiveHeight="16px"
          searchEgLiveOpacity="0.5"
          searchEgLiveMixBlendMode="normal"
          searchEgLiveBorder="unset"
          searchEgLiveOutline="unset"
          searchEgLiveBackgroundColor="unset"
          searchEgLivePadding="unset"
          searchIconPosition="absolute"
          searchIconHeight="15.66%"
          searchIconWidth="0.9%"
          searchIconTop="42.17%"
          searchIconRight="48.7%"
          searchIconBottom="42.17%"
          searchIconLeft="50.4%"
          searchIconOverflow="hidden"
          searchIconMaxHeight="100%"
          groupIconPosition="absolute"
          groupIconTop1="35px"
          groupIconLeft1="65px"
          groupIconWidth="104px"
          groupIconAlignSelf="unset"
          groupIconOverflow="unset"
        />
      </Trade2>
    </TradeRoot>
  );
};

export default Trade;