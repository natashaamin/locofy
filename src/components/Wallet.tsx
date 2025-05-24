import { FunctionComponent, memo } from "react";
import styled from "styled-components";
import Nav1 from "./Nav1";

export type WalletType = {
  className?: string;
};

const Base = styled.div`
  align-self: stretch;
  width: 1500px;
  position: relative;
  background-color: var(--color-midnightblue);
  display: none;
  max-width: 100%;
`;
const Rectangle = styled.div`
  width: 294px;
  height: 657px;
  position: relative;
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  display: none;
`;
const SideNavChild = styled.img`
  height: 54px;
  width: 273px;
  position: relative;
  display: none;
`;
const Oval4Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const NotificationCount = styled.b`
  position: absolute;
  top: 4px;
  left: 3px;
  letter-spacing: -0.43px;
  display: inline-block;
  width: 14px;
  min-width: 14px;
  z-index: 2;
`;
const Div = styled.div`
  position: relative;
  display: none;
  text-align: center;
  font-size: var(--font-size-8);
  color: var(--color-white);
`;
const Overview1 = styled.div`
  flex: 1;
  position: relative;
  z-index: 1;
`;
const Wallet1 = styled.div`
  width: 99px;
  position: relative;
  color: var(--color-white);
  display: inline-block;
  z-index: 2;
`;
const Transactions2 = styled.div`
  align-self: stretch;
  position: relative;
  z-index: 1;
`;
const Referral = styled.div`
  width: 74px;
  position: relative;
  font-size: var(--font-size-14);
  display: inline-block;
  z-index: 1;
`;
const Logout = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-14);
  z-index: 1;
`;
const Trade1 = styled.div`
  flex: 1;
  position: relative;
  flex-shrink: 0;
  z-index: 1;
`;
const SideNavItem = styled.img`
  width: 15px;
  height: 10px;
  position: relative;
  z-index: 1;
`;
const SideNavInner = styled.img`
  width: 14.6px;
  height: 13.1px;
  position: relative;
  flex-shrink: 0;
  z-index: 1;
`;
const GroupIcon = styled.img`
  width: 15.3px;
  height: 11px;
  position: relative;
  z-index: 2;
`;
const GroupIcon1 = styled.img`
  width: 16px;
  height: 15.8px;
  position: relative;
  z-index: 1;
`;
const SideNavChild1 = styled.img`
  height: 17.3px;
  width: 10.3px;
  position: relative;
  z-index: 1;
`;
const SideNavChild2 = styled.img`
  width: 16px;
  height: 13.8px;
  position: relative;
  z-index: 1;
`;
const SideNav3 = styled.section`
  width: 294px;
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 124px var(--padding-8) 67.4px 0px;
  gap: 106px;
  z-index: 1;
  text-align: left;
  font-size: var(--font-size-12);
  color: var(--color-ghostwhite);
  font-family: var(--font-poppins);
  @media screen and (max-width: 800px) {
    padding-top: 143px;
    padding-bottom: 44px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: 53px;
  }
`;
const CampaignsManagement = styled.b`
  position: relative;
  white-space: pre-wrap;
  flex-shrink: 0;
  z-index: 1;
`;
const Wallet2 = styled.b`
  position: relative;
  font-size: var(--font-size-16);
  display: inline-block;
  min-width: 56px;
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
const Div1 = styled.div`
  position: relative;
  display: none;
  text-align: center;
`;
const WalletChild = styled.div`
  height: 326px;
  width: 1025px;
  position: relative;
  border-radius: var(--br-10);
  background-color: var(--color-midnightblue);
  border: 1px solid var(--color-whitesmoke-300);
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
  flex-shrink: 0;
  z-index: 2;
`;
const VectorIcon1 = styled.img`
  height: 19.1px;
  width: 19.1px;
  position: absolute;
  margin: 0 !important;
  top: 14px;
  right: 724.9px;
  object-fit: contain;
  z-index: 2;
`;
const RefreshIcon = styled.img`
  height: 13.7px;
  width: 13.7px;
  position: relative;
  z-index: 2;
`;
const Wallet3 = styled.b`
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
const SumValue = styled.h1`
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
const Available = styled.h2`
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
const Wallet4 = styled.div`
  align-self: stretch;
  border-radius: var(--br-10);
  background-color: var(--color-midnightblue);
  border: 1px solid var(--color-whitesmoke-300);
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
  color: var(--color-white);
  @media screen and (max-width: 1125px) {
    flex-wrap: wrap;
    padding-left: var(--padding-26);
    box-sizing: border-box;
  }
  @media screen and (max-width: 800px) {
    gap: var(--gap-19);
  }
`;
const Div2 = styled.div`
  position: relative;
  display: none;
`;
const WalletRoot = styled.div`
  width: 1500px;
  background-color: var(--color-white);
  max-width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  font-size: var(--font-size-12);
  color: var(--color-ghostwhite);
  font-family: var(--font-poppins);
`;

const Wallet: FunctionComponent<WalletType> = memo(({ className = "" }) => {
  return (
    <WalletRoot className={className}>
      <Div2>
        <Base />
        <SideNav3>
          <Rectangle />
          <SideNavChild alt="" src="/rectangle-274.svg" />
          <Div>
            <Oval4Icon loading="lazy" alt="" src="/oval-4-1.svg" />
            <NotificationCount>19</NotificationCount>
          </Div>
          <Div>
            <Oval4Icon loading="lazy" alt="" src="/oval-4-1.svg" />
            <NotificationCount>10</NotificationCount>
          </Div>
          <Overview1>Overview</Overview1>
          <Wallet1>Wallet</Wallet1>
          <Transactions2>Transactions</Transactions2>
          <Transactions2>Statistics</Transactions2>
          <Transactions2>Settings</Transactions2>
          <Referral>Referral</Referral>
          <Logout>Logout</Logout>
          <Trade1>Trade</Trade1>
          <SideNavItem loading="lazy" alt="" src="/group-2601.svg" />
          <SideNavInner loading="lazy" alt="" src="/group-151.svg" />
          <GroupIcon loading="lazy" alt="" src="/group-14.svg" />
          <GroupIcon1 loading="lazy" alt="" src="/group1.svg" />
          <SideNavChild1 loading="lazy" alt="" src="/group-101.svg" />
          <SideNavChild2 loading="lazy" alt="" src="/group-1111.svg" />
        </SideNav3>
        <CampaignsManagement>User Management Wallet</CampaignsManagement>
        <Wallet2>Wallet</Wallet2>
        <Div1>
          <TriangleIcon loading="lazy" alt="" src="/triangle1.svg" />
          <Accounts>Accounts</Accounts>
          <NikeS>RAMON RIDWAN</NikeS>
          <Child loading="lazy" alt="" src="/line-221.svg" />
        </Div1>
        <Wallet4>
          <WalletChild />
          <MaskGroupIcon alt="" src="/mask-group-12.svg" />
          <VectorIcon loading="lazy" alt="" src="/vector-1.svg" />
          <VectorIcon1 loading="lazy" alt="" src="/vector.svg" />
          <RefreshIcon loading="lazy" alt="" src="/vector-2.svg" />
          <Wallet3>Wallet</Wallet3>
          <Trophy1Icon alt="" src="/trophy-1.svg" />
          <RectangleParent>
            <FrameChild />
            <WithdrawFunds>Withdraw Funds</WithdrawFunds>
          </RectangleParent>
          <WalletItem loading="lazy" alt="" src="/group-303@2x.png" />
          <SumValue>#120000.00</SumValue>
          <WalletInner alt="" src="/rectangle-287.svg" />
          <TotalEarnings>Total Earnings</TotalEarnings>
          <Available>#30000.00</Available>
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
        </Wallet4>
      </Div2>
      <Nav1 group364="/group-364.svg" />
    </WalletRoot>
  );
});

export default Wallet;
