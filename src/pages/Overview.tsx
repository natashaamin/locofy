import { FunctionComponent } from "react";
import styled from "styled-components";
import SideNav1 from "../components/SideNav1";
import Statistics from "../components/Statistics";
import ConversionRate from "../components/ConversionRate";
import Transactions from "../components/Transactions";
import Nav from "../components/Nav";

const Base3 = styled.div`
  width: 1500px;
  height: 2429px;
  position: relative;
  background-color: var(--color-midnightblue);
  display: none;
  max-width: 100%;
`;
const Overview1 = styled.b`
  width: 99px;
  position: relative;
  font-size: var(--font-size-16);
  display: inline-block;
  z-index: 1;
`;
const GroupIcon = styled.img`
  width: 18.3px;
  height: 19.2px;
  position: relative;
  flex-shrink: 0;
  z-index: 1;
`;
const CampaignsManagement = styled.b`
  position: relative;
  white-space: pre-wrap;
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
const Div = styled.div`
  position: relative;
  display: none;
  text-align: center;
`;
const WalletChild = styled.div`
  height: 328px;
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
const MaskGroupIcon = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  z-index: 1;
`;
const VectorIcon = styled.img`
  width: 18.2px;
  height: 18.2px;
  position: relative;
  z-index: 2;
`;
const StatsSymbolIcon = styled.img`
  height: 19.1px;
  width: 19.1px;
  position: absolute;
  margin: 0 !important;
  top: 14px;
  right: 724.9px;
  object-fit: contain;
  z-index: 2;
`;
const BalanceIcon = styled.img`
  height: 13.7px;
  width: 13.7px;
  position: relative;
  z-index: 2;
`;
const Wallet1 = styled.b`
  position: relative;
  font-size: var(--font-size-16);
  z-index: 2;
`;
const Trophy1Icon = styled.img`
  position: absolute;
  height: calc(100% - 146px);
  top: 0px;
  bottom: 146px;
  left: 0px;
  max-height: 100%;
  width: 178px;
  overflow: hidden;
  z-index: 2;
`;
const FrameChild = styled.div`
  height: 42px;
  width: 134px;
  position: relative;
  border-radius: var(--br-100);
  background-color: var(--color-white);
  display: none;
`;
const WithdrawFunds = styled.div`
  position: relative;
  font-size: var(--font-size-10);
  font-family: var(--font-poppins);
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: left;
  z-index: 1;
`;
const RectangleParent = styled.button`
  cursor: pointer;
  border: none;
  padding: 13px var(--padding-26) var(--padding-12);
  background-color: var(--color-white);
  border-radius: var(--br-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 2;
  &:hover {
    background-color: var(--color-gainsboro-100);
  }
`;
const WalletItem = styled.img`
  height: 29.5px;
  width: 29.7px;
  position: absolute;
  margin: 0 !important;
  top: 9.5px;
  left: 6.9px;
  object-fit: contain;
  z-index: 2;
`;
const AmountFigure = styled.h1`
  margin: 0;
  position: relative;
  font-size: var(--font-size-36);
  line-height: 34px;
  font-weight: 700;
  font-family: inherit;
  z-index: 2;
  @media screen and (max-width: 800px) {
    font-size: 29px;
    line-height: 27px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-22);
    line-height: 20px;
  }
`;
const WalletInner = styled.img`
  height: 27px;
  width: 115px;
  position: relative;
  border-radius: 215px;
  display: none;
  z-index: 10;
`;
const TotalEarnings = styled.div`
  position: relative;
  display: inline-block;
  min-width: 86px;
  z-index: 3;
`;
const AvailableFunds = styled.h2`
  margin: 0;
  position: relative;
  font-size: var(--font-size-36);
  line-height: 45px;
  font-weight: 700;
  font-family: inherit;
  z-index: 2;
  @media screen and (max-width: 800px) {
    font-size: 29px;
    line-height: 36px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-22);
    line-height: 27px;
  }
`;
const RectangleIcon = styled.img`
  height: 27px;
  width: 76px;
  position: relative;
  border-radius: 215px;
  display: none;
  z-index: 13;
`;
const Balance = styled.div`
  position: relative;
  display: inline-block;
  min-width: 51px;
  z-index: 4;
`;
const WalletChild1 = styled.img`
  position: absolute;
  top: 166px;
  left: 157px;
  width: 27px;
  height: 10px;
  z-index: 3;
`;
const PleaseNoteThiss = styled.span``;
const PleaseNoteThissContainer = styled.div`
  position: relative;
  line-height: 163.42%;
  z-index: 2;
`;
const Wallet2 = styled.div`
  flex: 0.9251;
  border-radius: var(--br-10);
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-32) var(--padding-32) 27.3px 52px;
  position: relative;
  gap: 38px;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 1200px) {
    padding-left: var(--padding-26);
    box-sizing: border-box;
  }
  @media screen and (max-width: 800px) {
    gap: var(--gap-19);
  }
`;
const Item = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-10);
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: none;
`;
const RateValue = styled.div`
  height: 16px;
  position: relative;
  line-height: 30px;
  display: inline-block;
  z-index: 2;
`;
const Path2Icon = styled.img`
  width: 7px;
  height: 4px;
  position: relative;
  border-radius: 0.5px;
  z-index: 2;
`;
const Div1 = styled.div`
  position: relative;
  display: none;
  font-size: var(--font-size-14);
`;
const MarketRateValue = styled.b`
  width: 97px;
  position: relative;
  font-size: var(--font-size-16);
  display: inline-block;
  color: var(--color-white);
  z-index: 2;
`;
const Inner = styled.img`
  position: absolute;
  top: 19px;
  left: 275px;
  width: 16px;
  height: 3.7px;
  z-index: 2;
`;
const Path6Icon = styled.img`
  position: absolute;
  top: 20.5px;
  left: 0px;
  width: 97.9px;
  height: 104.5px;
  object-fit: contain;
  z-index: 2;
`;
const Path2Copy = styled.img`
  position: absolute;
  top: 0px;
  left: 23.2px;
  width: 56.2px;
  height: 51.3px;
  object-fit: contain;
  z-index: 3;
`;
const AmountDisplay = styled.b`
  position: absolute;
  top: 35.2px;
  left: 22.1px;
  line-height: 49.5px;
  display: inline-block;
  background: linear-gradient(144.12deg, #fc58b3, #feae68);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 45.2px;
  height: 21.1px;
  z-index: 4;
`;
const EllipseDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  border: 0px solid var(--color-lightpink-100);
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  z-index: 5;
`;
const Child1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  z-index: 6;
`;
const FrameItem = styled.div`
  height: 168px;
  width: 317px;
  position: relative;
  border-radius: var(--br-10);
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  display: none;
`;
const TransactionValue = styled.div`
  height: 16px;
  position: relative;
  line-height: 16px;
  display: inline-block;
  min-width: 35px;
  flex-shrink: 0;
  z-index: 1;
`;
const Path2Icon1 = styled.img`
  width: 7px;
  height: 4px;
  position: relative;
  border-radius: 0.5px;
  object-fit: contain;
  flex-shrink: 0;
  z-index: 1;
`;
const Div2 = styled.div`
  position: relative;
  display: none;
`;
const TotalNumberOf = styled.b`
  position: relative;
  font-size: var(--font-size-16);
  color: var(--color-white);
  z-index: 1;
`;
const FrameInner = styled.img`
  width: 16px;
  height: 3.7px;
  position: relative;
  flex-shrink: 0;
  z-index: 1;
`;
const Path4Icon = styled.img`
  position: absolute;
  top: 20.3px;
  left: 0px;
  width: 97.1px;
  height: 103.6px;
  object-fit: contain;
  z-index: 1;
`;
const Path2Copy1 = styled.img`
  position: absolute;
  top: 0px;
  left: 23.1px;
  width: 55.7px;
  height: 50.9px;
  object-fit: contain;
  z-index: 2;
`;
const StatusNumber = styled.b`
  position: absolute;
  top: 34.9px;
  left: 21.9px;
  line-height: 49.5px;
  display: inline-block;
  background: linear-gradient(144.12deg, #fc58b3, #feae68);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 44.9px;
  height: 20.9px;
  min-width: 44.9px;
  z-index: 3;
`;
const PositiveCircle = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  border: 0px solid var(--color-lightpink-200);
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  z-index: 4;
`;
const NegativeCircle = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  z-index: 5;
`;
const BaseIcon = styled.img`
  height: 26px;
  width: 63px;
  position: relative;
  z-index: 1;
`;
const RectangleGroup = styled.div`
  flex: 1;
  border-radius: var(--br-10);
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 21px 21px 17.1px 25px;
  gap: 5px;
  z-index: 1;
`;
const RectangleDiv = styled.div`
  height: 168px;
  width: 315px;
  position: relative;
  border-radius: var(--br-10);
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  display: none;
`;
const TradesAmount = styled.div`
  height: 16px;
  position: relative;
  line-height: 16px;
  display: inline-block;
  z-index: 1;
`;
const Path2Icon2 = styled.img`
  width: 7px;
  height: 4px;
  position: relative;
  border-radius: 0.5px;
  z-index: 1;
`;
const Path5Icon = styled.img`
  position: absolute;
  top: 19.8px;
  left: 0px;
  width: 94.9px;
  height: 101.3px;
  object-fit: contain;
  z-index: 1;
`;
const Path2Copy2 = styled.img`
  position: absolute;
  top: 0px;
  left: 22.4px;
  width: 54.4px;
  height: 49.7px;
  object-fit: contain;
  z-index: 2;
`;
const TradeValue = styled.b`
  position: absolute;
  top: 37.2px;
  left: 21.4px;
  line-height: 49.5px;
  display: inline-block;
  background: linear-gradient(144.12deg, #fc58b3, #feae68);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 43.8px;
  height: 20.5px;
  min-width: 43.8px;
  z-index: 2;
`;
const CircleProgress = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  border: 0px solid var(--color-lightpink-100);
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  z-index: 3;
`;
const CircleProgress1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  z-index: 4;
`;
const BaseIcon1 = styled.img`
  align-self: stretch;
  height: 26px;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
`;
const RectangleContainer = styled.div`
  align-self: stretch;
  height: 168px;
  border-radius: var(--br-10);
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 21px 21px 18.9px 25px;
  gap: 16.5px;
  z-index: 1;
`;
const BaseIcon2 = styled.img`
  height: 26px;
  width: 63px;
  position: relative;
  z-index: 2;
`;
const Child2 = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: -63px;
  bottom: -55px;
  left: 0px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  z-index: 6;
`;
const View = styled.div`
  position: relative;
  font-size: var(--font-size-10);
  color: var(--color-white);
  text-align: center;
  z-index: 7;
`;
const Delete = styled.div`
  position: relative;
  font-size: var(--font-size-10);
  color: var(--color-gray-100);
  text-align: center;
  z-index: 7;
`;
const Div3 = styled.div`
  position: relative;
  display: none;
  color: var(--color-mediumaquamarine);
`;
const OverviewRoot = styled.div`
  width: 100%;
  height: 2509px;
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

const Overview: FunctionComponent = () => {
  return (
    <OverviewRoot>
      <Div2>
        <Base3 />
        <SideNav1 />
        <Statistics />
        <ConversionRate />
        <Transactions />
        <Overview1>Overview</Overview1>
        <GroupIcon alt="" src="/group-1.svg" />
        <CampaignsManagement>
          User Management System Overview
        </CampaignsManagement>
        <Div>
          <TriangleIcon alt="" src="/triangle.svg" />
          <Accounts>Accounts</Accounts>
          <NikeS>RAMON RIDWAN</NikeS>
          <Child alt="" src="/line-22.svg" />
        </Div>
        <Wallet2>
          <WalletChild />
          <MaskGroupIcon alt="" src="/mask-group-11.svg" />
          <VectorIcon loading="lazy" alt="" src="/vector-1.svg" />
          <StatsSymbolIcon loading="lazy" alt="" src="/vector.svg" />
          <BalanceIcon loading="lazy" alt="" src="/vector-2.svg" />
          <Wallet1>Wallet</Wallet1>
          <Trophy1Icon alt="" src="/trophy-1.svg" />
          <RectangleParent>
            <FrameChild />
            <WithdrawFunds>Withdraw Funds</WithdrawFunds>
          </RectangleParent>
          <WalletItem loading="lazy" alt="" src="/group-303@2x.png" />
          <AmountFigure>#120000.00</AmountFigure>
          <WalletInner alt="" src="/rectangle-287.svg" />
          <TotalEarnings>Total Earnings</TotalEarnings>
          <AvailableFunds>#30000.00</AvailableFunds>
          <RectangleIcon alt="" src="/rectangle-299.svg" />
          <Balance>Balance</Balance>
          <WalletChild1 loading="lazy" alt="" src="/vector-11.svg" />
          <PleaseNoteThissContainer>
            <PleaseNoteThiss>{`Please note this’s the total sum of ya’ transaction here on `}</PleaseNoteThiss>
            <PleaseNoteThiss>GOGE AFRICA</PleaseNoteThiss>
          </PleaseNoteThissContainer>
          <PleaseNoteThissContainer>
            Please note this the current balance amount left on ya’ wallet.
          </PleaseNoteThissContainer>
        </Wallet2>
        <Div3>
          <Item />
          <Div1>
            <RateValue>11.8%</RateValue>
            <Path2Icon alt="" src="/path-2-2.svg" />
          </Div1>
          <MarketRateValue>Market Rate Value</MarketRateValue>
          <Inner alt="" src="/group-96-7.svg" />
          <Div>
            <Path6Icon alt="" src="/path-6.svg" />
            <Path2Copy loading="lazy" alt="" src="/path-2-copy-2.svg" />
            <AmountDisplay>87%</AmountDisplay>
            <EllipseDiv />
            <Child1 />
          </Div>
          <RectangleGroup>
            <FrameItem />
            <Div2>
              <TransactionValue>22.8%</TransactionValue>
              <Path2Icon1 alt="" src="/path-2-2.svg" />
            </Div2>
            <TotalNumberOf>Total Number Of Transaction</TotalNumberOf>
            <FrameInner alt="" src="/group-96-4.svg" />
            <Div>
              <Path4Icon alt="" src="/path-4.svg" />
              <Path2Copy1 loading="lazy" alt="" src="/path-2-copy.svg" />
              <StatusNumber>15000</StatusNumber>
              <PositiveCircle />
              <NegativeCircle />
            </Div>
            <BaseIcon loading="lazy" alt="" src="/base.svg" />
          </RectangleGroup>
          <RectangleContainer>
            <RectangleDiv />
            <Div2>
              <TradesAmount>11.8%</TradesAmount>
              <Path2Icon2 alt="" src="/path-2-2.svg" />
            </Div2>
            <TotalNumberOf>Total Number Of Trade</TotalNumberOf>
            <FrameInner alt="" src="/group-96-4.svg" />
            <Div>
              <Path5Icon alt="" src="/path-5.svg" />
              <Path2Copy2 loading="lazy" alt="" src="/path-2-copy-1.svg" />
              <TradeValue>43498</TradeValue>
              <CircleProgress />
              <CircleProgress1 />
            </Div>
            <BaseIcon1 loading="lazy" alt="" src="/base.svg" />
          </RectangleContainer>
          <BaseIcon2 loading="lazy" alt="" src="/base.svg" />
          <Child2 loading="lazy" alt="" src="/group-16-1@2x.png" />
          <View>View</View>
          <Delete>Delete</Delete>
        </Div3>
        <Nav group364="/group-3641.svg" />
      </Div2>
    </OverviewRoot>
  );
};

export default Overview;
