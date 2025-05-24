import { FunctionComponent } from "react";
import styled from "styled-components";
import SideNav from "../components/SideNav";
import Nav from "../components/Nav";

const Base = styled.div`
  align-self: stretch;
  width: 1500px;
  position: relative;
  background-color: var(--color-midnightblue);
  display: none;
  max-width: 100%;
`;
const ChatTradeChild = styled.div`
  align-self: stretch;
  width: 1027px;
  position: relative;
  border-radius: var(--br-10);
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
  z-index: 0;
`;
const ChatTradeItem = styled.img`
  align-self: stretch;
  height: 686px;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  z-index: 1;
`;
const MaskGroupIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 2;
`;
const RamonRidwan = styled.b`
  position: relative;
  line-height: 24px;
  flex-shrink: 0;
  z-index: 2;
`;
const AgentRue = styled.b`
  position: relative;
  line-height: 24px;
  z-index: 2;
`;
const Online = styled.div`
  margin-top: -8px;
  position: relative;
  font-size: var(--font-size-10);
  line-height: 24px;
  flex-shrink: 0;
  z-index: 2;
`;
const Typing = styled.div`
  position: relative;
  font-size: var(--font-size-10);
  line-height: 24px;
  z-index: 2;
`;
const ChatTradeInner = styled.div`
  position: absolute;
  top: 23px;
  left: 26px;
  border-radius: 50%;
  background-color: var(--color-limegreen);
  width: 10px;
  height: 10px;
  z-index: 3;
`;
const EllipseDiv = styled.div`
  position: absolute;
  top: 24px;
  left: 26px;
  border-radius: 50%;
  background-color: var(--color-limegreen);
  width: 10px;
  height: 10px;
  z-index: 3;
`;
const Offline = styled.div`
  position: relative;
  font-size: var(--font-size-10);
  line-height: 24px;
  z-index: 3;
`;
const ChatTradeChild1 = styled.div`
  position: absolute;
  top: 24px;
  left: 26px;
  border-radius: 50%;
  background-color: var(--color-gainsboro-200);
  width: 10px;
  height: 10px;
  z-index: 3;
`;
const LineDiv = styled.div`
  align-self: stretch;
  height: 2px;
  position: relative;
  border-top: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  z-index: 2;
`;
const AgentJohnCount = styled.b`
  position: absolute;
  top: 4px;
  left: 3px;
  letter-spacing: -0.43px;
  display: inline-block;
  width: 14px;
  min-width: 14px;
  z-index: 3;
`;
const Div = styled.div`
  position: relative;
  display: none;
  z-index: 24;
  text-align: center;
  font-size: var(--font-size-8);
`;
const Div1 = styled.div`
  position: relative;
  display: none;
  z-index: 25;
  text-align: center;
  font-size: var(--font-size-8);
`;
const InputBox = styled.div`
  height: 50px;
  width: 688px;
  position: relative;
  border-radius: var(--br-100);
  background-color: var(--color-midnightblue);
  border: 1px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
  z-index: 26;
`;
const Path753Icon = styled.img`
  height: 23.2px;
  width: 23.2px;
  position: absolute;
  margin: 0 !important;
  top: 11.5px;
  right: 444.3px;
  object-fit: contain;
  z-index: 2;
`;
const Placeholder = styled.div`
  width: 145.9px;
  position: relative;
  letter-spacing: 0.44px;
  line-height: 22px;
  color: var(--color-silver);
  display: inline-block;
  flex-shrink: 0;
  z-index: 2;
`;
const Btn = styled.div`
  height: 30px;
  width: 73px;
  position: relative;
  border-radius: var(--br-100);
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
  display: none;
`;
const Btn1 = styled.b`
  flex: 1;
  position: relative;
  letter-spacing: 0.38px;
  line-height: 22px;
  text-transform: uppercase;
  display: inline-block;
  min-width: 41px;
  z-index: 1;
`;
const Uibuttonssqnormal = styled.div`
  border-radius: var(--br-100);
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 6px 16px 2px;
  z-index: 2;
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
  display: none;
`;
const Uilinegray = styled.div`
  align-self: stretch;
  height: 2px;
  position: relative;
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
  flex-shrink: 0;
  z-index: 1;
`;
const Unread = styled.b`
  position: relative;
  letter-spacing: 0.38px;
  line-height: 16px;
  text-transform: uppercase;
  display: inline-block;
  font-family: var(--font-nunito);
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  min-width: 57.2px;
  flex-shrink: 0;
  z-index: 1;
`;
const Bg2 = styled.input`
  border: none;
  outline: none;
  background-color: var(--color-whitesmoke-200);
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-10);
  width: 443px;
  height: 48px;
  z-index: 1;
`;
const Text = styled.div`
  position: absolute;
  top: 14px;
  left: 20px;
  line-height: 22px;
  display: inline-block;
  width: 474.8px;
  z-index: 2;
`;
const Name = styled.div`
  position: relative;
  font-size: var(--font-size-10);
  line-height: 17px;
  color: var(--color-white);
  z-index: 1;
`;
const Div2 = styled.div`
  position: relative;
  display: none;
  z-index: 32;
  color: var(--color-gray-100);
`;
const Bg3 = styled.div`
  width: 328px;
  position: relative;
  border-radius: var(--br-10);
  background-color: var(--color-whitesmoke-200);
  height: 48px;
  display: none;
`;
const Text1 = styled.div`
  width: 284px;
  position: relative;
  line-height: 22px;
  display: inline-block;
  z-index: 2;
`;
const Name1 = styled.div`
  width: 152.8px;
  position: relative;
  font-size: var(--font-size-10);
  line-height: 17px;
  color: var(--color-white);
  display: inline-block;
  z-index: 1;
`;
const Div3 = styled.div`
  position: relative;
  display: none;
  z-index: 33;
  color: var(--color-gray-100);
`;
const Bg4 = styled.div`
  width: 320px;
  position: relative;
  border-radius: var(--br-10);
  background-color: var(--color-whitesmoke-200);
  height: 48px;
  display: none;
`;
const ChatMessageInput = styled.div`
  width: 279px;
  position: relative;
  line-height: 22px;
  display: inline-block;
  z-index: 2;
`;
const Name2 = styled.div`
  position: relative;
  font-size: var(--font-size-10);
  line-height: 17px;
  color: var(--color-white);
  display: inline-block;
  min-width: 83px;
  z-index: 1;
`;
const Div4 = styled.div`
  position: relative;
  display: none;
  z-index: 34;
  color: var(--color-gray-100);
`;
const Div5 = styled.div`
  position: relative;
  display: none;
  z-index: 35;
  color: var(--color-gray-100);
`;
const Name3 = styled.div`
  position: relative;
  font-size: var(--font-size-10);
  line-height: 17px;
  z-index: 1;
`;
const Div6 = styled.div`
  position: relative;
  display: none;
  z-index: 36;
  color: var(--color-gray-100);
`;
const FrameChild = styled.div`
  height: 42px;
  width: 134px;
  position: relative;
  border-radius: var(--br-100);
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
  display: none;
`;
const NewTrade = styled.div`
  position: relative;
  font-size: var(--font-size-10);
  font-family: var(--font-poppins);
  color: var(--color-white);
  text-align: left;
  display: inline-block;
  min-width: 61px;
  z-index: 1;
`;
const RectangleParent = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-12) 33px 13px 40px;
  background-color: transparent;
  border-radius: var(--br-100);
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 2;
`;
const ChatTrade = styled.div`
  align-self: stretch;
  border-radius: var(--br-10);
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 37px 0px 0px;
  position: relative;
  gap: 24px;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 1125px) {
    flex-wrap: wrap;
    padding: var(--padding-20);
    box-sizing: border-box;
  }
`;
const CampaignsManagement = styled.b`
  position: relative;
  white-space: pre-wrap;
  z-index: 1;
`;
const Trade1 = styled.b`
  position: relative;
  font-size: var(--font-size-16);
  display: inline-block;
  min-width: 53px;
  z-index: 1;
`;
const TriangleIcon = styled.img`
  width: 9px;
  height: 5px;
  position: relative;
  z-index: 1;
`;
const Accounts = styled.b`
  position: relative;
  z-index: 1;
`;
const NikeS = styled.b`
  position: relative;
  text-align: left;
  z-index: 1;
`;
const Child = styled.img`
  width: 3px;
  height: 13px;
  position: relative;
  z-index: 1;
`;
const Div7 = styled.div`
  position: relative;
  display: none;
  text-align: center;
`;
const Div8 = styled.div`
  position: relative;
  display: none;
`;
const TradeRoot = styled.div`
  width: 100%;
  height: 1020px;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  font-size: var(--font-size-12);
  color: var(--color-white);
  font-family: var(--font-poppins);
`;

const Trade: FunctionComponent = () => {
  return (
    <TradeRoot>
      <Div8>
        <Base />
        <SideNav />
        <ChatTrade>
          <ChatTradeChild />
          <ChatTradeItem alt="" src="/rectangle-300.svg" />
          <MaskGroupIcon loading="lazy" alt="" src="/mask-group-1.svg" />
          <RamonRidwan>Ramon Ridwan</RamonRidwan>
          <MaskGroupIcon loading="lazy" alt="" src="/mask-group-1.svg" />
          <AgentRue>Agent Rue</AgentRue>
          <Online>Online</Online>
          <Typing>Online</Typing>
          <Typing>typing....</Typing>
          <ChatTradeInner />
          <EllipseDiv />
          <MaskGroupIcon loading="lazy" alt="" src="/mask-group-1.svg" />
          <AgentRue>Agent Daniel</AgentRue>
          <Offline>Offline</Offline>
          <ChatTradeChild1 />
          <MaskGroupIcon loading="lazy" alt="" src="/mask-group-1.svg" />
          <AgentRue>Agent Rose</AgentRue>
          <Offline>Offline</Offline>
          <ChatTradeChild1 />
          <MaskGroupIcon loading="lazy" alt="" src="/mask-group-1.svg" />
          <AgentRue>Agent William</AgentRue>
          <Offline>Online</Offline>
          <ChatTradeChild1 />
          <LineDiv />
          <Div>
            <MaskGroupIcon loading="lazy" alt="" src="/oval-4-1.svg" />
            <AgentJohnCount>10</AgentJohnCount>
          </Div>
          <Div1>
            <MaskGroupIcon loading="lazy" alt="" src="/oval-4-1.svg" />
            <AgentJohnCount>9</AgentJohnCount>
          </Div1>
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
          <Div2>
            <Bg2 type="text" />
            <Text>
              Hello am new to this system can i get a breakdown on how it works?
            </Text>
            <Name>{`Me, 10.:22 `}</Name>
          </Div2>
          <Div3>
            <Bg3 />
            <Text1>Please, can you go into details bout the service</Text1>
            <Name1>Me, 3 minutes ago</Name1>
          </Div3>
          <Div4>
            <Bg4 />
            <ChatMessageInput>
              Yes we currently run both on our platform here
            </ChatMessageInput>
            <Name2>Agent Rue, 10:24</Name2>
          </Div4>
          <Div5>
            <Bg2 type="text" />
            <Text>
              Hello am new to this system can i get a breakdown on how it works?
            </Text>
            <Name>Agent Rue, 9 minutes ago</Name>
          </Div5>
          <Div6>
            <Bg4 />
            <ChatMessageInput>
              Yes we currently run both on our platform here
            </ChatMessageInput>
            <Name3>Agent Rue, 9 minutes ago</Name3>
          </Div6>
          <RectangleParent>
            <FrameChild />
            <NewTrade>New Trade?</NewTrade>
          </RectangleParent>
        </ChatTrade>
        <CampaignsManagement>User Management Trade</CampaignsManagement>
        <Trade1>Trade</Trade1>
        <Div7>
          <TriangleIcon loading="lazy" alt="" src="/triangle.svg" />
          <Accounts>Accounts</Accounts>
          <NikeS>RAMON RIDWAN</NikeS>
          <Child loading="lazy" alt="" src="/line-22.svg" />
        </Div7>
        <Nav
          navPadding="21px 106px 22px 65px"
          group364="/group-364.svg"
          rectangleDivBorder="1px solid #fff"
        />
      </Div8>
    </TradeRoot>
  );
};

export default Trade;
