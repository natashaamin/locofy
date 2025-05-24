import { FunctionComponent, memo } from "react";
import styled from "styled-components";
import Nav1 from "./Nav1";

export type Wallet1Type = {
  className?: string;
};

const Base = styled.div`
  position: absolute;
  top: 83px;
  left: 0px;
  background-color: var(--color-midnightblue);
  width: 1500px;
  height: 653px;
`;
const Rectangle = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  width: 294px;
  height: 740px;
`;
const SideNavChild = styled.img`
  position: absolute;
  top: 258px;
  left: 0px;
  width: 273px;
  height: 54px;
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
  height: 2.72%;
  width: 7.24%;
  top: 28.26%;
  right: 13.1%;
  bottom: 69.02%;
  left: 79.66%;
  text-align: center;
  font-size: var(--font-size-8);
  color: var(--color-white);
`;
const Oval4Group = styled.div`
  position: absolute;
  height: 2.72%;
  width: 7.24%;
  top: 46.2%;
  right: 13.1%;
  bottom: 51.09%;
  left: 79.66%;
  text-align: center;
  font-size: var(--font-size-8);
  color: var(--color-white);
`;
const Overview1 = styled.div`
  position: absolute;
  top: 140px;
  left: 91.5px;
  display: inline-block;
  width: 99px;
  height: 27px;
`;
const Wallet2 = styled.div`
  position: absolute;
  top: 274px;
  left: 92px;
  color: var(--color-white);
  display: inline-block;
  width: 99px;
  height: 27px;
`;
const Transactions2 = styled.div`
  position: absolute;
  top: 341px;
  left: 92px;
  display: inline-block;
  width: 139px;
  height: 27px;
`;
const Statistics1 = styled.div`
  position: absolute;
  top: 408px;
  left: 92.5px;
  display: inline-block;
  width: 139px;
  height: 27px;
`;
const Settings = styled.div`
  position: absolute;
  top: 475px;
  left: 92.5px;
  display: inline-block;
  width: 139px;
  height: 27px;
`;
const Referral = styled.div`
  position: absolute;
  top: 599px;
  left: 139px;
  font-size: var(--font-size-14);
  display: inline-block;
  width: 74px;
  height: 27px;
`;
const Logout = styled.div`
  position: absolute;
  top: 647.6px;
  left: 139px;
  font-size: var(--font-size-14);
  display: inline-block;
  width: 139px;
  height: 27px;
`;
const Trade1 = styled.div`
  position: absolute;
  top: 207px;
  left: 91.5px;
  display: inline-block;
  width: 99px;
  height: 27px;
`;
const SideNavItem = styled.img`
  position: absolute;
  height: 1.36%;
  width: 5.17%;
  top: 19.84%;
  right: 75.86%;
  bottom: 78.8%;
  left: 18.97%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const SideNavInner = styled.img`
  position: absolute;
  top: 212px;
  left: 57px;
  width: 14.6px;
  height: 13.1px;
`;
const GroupIcon = styled.img`
  position: absolute;
  top: 280px;
  left: 57px;
  width: 15.3px;
  height: 11px;
`;
const GroupIcon1 = styled.img`
  position: absolute;
  height: 2.15%;
  width: 5.52%;
  top: 46.48%;
  right: 75.17%;
  bottom: 51.37%;
  left: 19.31%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const SideNavChild1 = styled.img`
  position: absolute;
  top: 409px;
  left: 59px;
  width: 10.3px;
  height: 17.3px;
`;
const SideNavChild2 = styled.img`
  position: absolute;
  top: 479px;
  left: 56px;
  width: 16px;
  height: 13.8px;
`;
const SideNav3 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 290px;
  height: 736px;
`;
const CampaignsManagement = styled.b`
  position: absolute;
  top: calc(50% - 236px);
  left: 25%;
  white-space: pre-wrap;
`;
const Wallet3 = styled.b`
  position: absolute;
  top: 183px;
  left: 375px;
  font-size: var(--font-size-16);
  display: inline-block;
  width: 56px;
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
const GroupChild = styled.img`
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
  height: 2.45%;
  width: 13.45%;
  top: 17.39%;
  right: 6.81%;
  bottom: 80.16%;
  left: 79.73%;
  text-align: center;
`;
const WalletChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-10);
  background-color: var(--color-midnightblue);
  border: 1px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  width: 1025px;
  height: 326px;
`;
const MaskGroupIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1023px;
  height: 324px;
`;
const VectorIcon = styled.img`
  position: absolute;
  height: 5.62%;
  width: 1.78%;
  top: 30.56%;
  right: 53.16%;
  bottom: 63.83%;
  left: 45.06%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon1 = styled.img`
  position: absolute;
  height: 5.9%;
  width: 1.87%;
  top: 14.2%;
  right: 37.43%;
  bottom: 79.91%;
  left: 60.7%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: contain;
`;
const VectorIcon2 = styled.img`
  position: absolute;
  height: 4.23%;
  width: 1.34%;
  top: 87.35%;
  right: 5.99%;
  bottom: 8.43%;
  left: 92.67%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Wallet4 = styled.b`
  position: absolute;
  top: 41px;
  left: 52px;
  font-size: var(--font-size-16);
  display: inline-block;
  width: 55px;
  height: 23px;
`;
const Trophy1Icon = styled.img`
  position: absolute;
  top: 93px;
  left: 99px;
  width: 178px;
  height: 178px;
  overflow: hidden;
`;
const GroupItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-100);
  background-color: var(--color-white);
  width: 134px;
  height: 42px;
`;
const WithdrawFunds = styled.div`
  position: absolute;
  top: 13px;
  left: 26px;
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  width: 81px;
  height: 17px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 32px;
  left: 857px;
  width: 134px;
  height: 42px;
  font-size: var(--font-size-10);
`;
const WalletItem = styled.img`
  position: absolute;
  height: 9.1%;
  width: 2.9%;
  top: 31.64%;
  right: 91.34%;
  bottom: 59.26%;
  left: 5.76%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: contain;
`;
const B1 = styled.b`
  position: absolute;
  top: 148px;
  left: 369px;
  font-size: var(--font-size-36);
  display: inline-block;
  width: 220px;
  height: 34px;
`;
const WalletInner = styled.img`
  position: absolute;
  top: 121px;
  left: 342px;
  border-radius: 215px;
  width: 115px;
  height: 27px;
`;
const TotalEarnings = styled.div`
  position: absolute;
  top: 126px;
  left: 357px;
  display: inline-block;
  width: 86px;
  height: 15px;
`;
const B2 = styled.b`
  position: absolute;
  top: 148px;
  left: 689px;
  font-size: var(--font-size-36);
  display: inline-block;
  width: 206px;
  height: 45px;
`;
const RectangleIcon = styled.img`
  position: absolute;
  top: 121px;
  left: 662px;
  border-radius: 215px;
  width: 76px;
  height: 27px;
`;
const Balance = styled.div`
  position: absolute;
  top: 126px;
  left: 676px;
  display: inline-block;
  width: 51px;
  height: 15px;
`;
const WalletChild1 = styled.img`
  position: absolute;
  top: 259px;
  left: 256px;
  width: 27px;
  height: 10px;
`;
const PleaseNoteThiss = styled.span``;
const PleaseNoteThissContainer = styled.div`
  position: absolute;
  top: 200px;
  left: 369px;
  line-height: 163.42%;
  display: inline-block;
  width: 255px;
  height: 37px;
`;
const PleaseNoteThis = styled.div`
  position: absolute;
  top: 200px;
  left: 689px;
  line-height: 163.42%;
  display: inline-block;
  width: 227px;
  height: 36px;
`;
const Wallet5 = styled.div`
  position: absolute;
  top: 244px;
  left: 375px;
  width: 1023px;
  height: 324px;
  color: var(--color-white);
`;
const Wallet6 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1500px;
  height: 736px;
`;
const WalletRoot = styled.div`
  width: 1500px;
  background-color: var(--color-white);
  max-width: 100%;
  height: 736px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-12);
  color: var(--color-ghostwhite);
  font-family: var(--font-poppins);
`;

const Wallet1: FunctionComponent<Wallet1Type> = memo(({ className = "" }) => {
  return (
    <WalletRoot className={className}>
      <Wallet6>
        <Base />
        <SideNav3>
          <Rectangle />
          <SideNavChild alt="" src="/rectangle-274.svg" />
          <Oval4Parent>
            <Oval4Icon alt="" src="/oval-4-1.svg" />
            <B>19</B>
          </Oval4Parent>
          <Oval4Group>
            <Oval4Icon alt="" src="/oval-4-1.svg" />
            <B>10</B>
          </Oval4Group>
          <Overview1>Overview</Overview1>
          <Wallet2>Wallet</Wallet2>
          <Transactions2>Transactions</Transactions2>
          <Statistics1>Statistics</Statistics1>
          <Settings>Settings</Settings>
          <Referral>Referral</Referral>
          <Logout>Logout</Logout>
          <Trade1>Trade</Trade1>
          <SideNavItem alt="" src="/group-2601.svg" />
          <SideNavInner alt="" src="/group-151.svg" />
          <GroupIcon alt="" src="/group-14.svg" />
          <GroupIcon1 alt="" src="/group1.svg" />
          <SideNavChild1 alt="" src="/group-101.svg" />
          <SideNavChild2 alt="" src="/group-1111.svg" />
        </SideNav3>
        <CampaignsManagement>User Management Wallet</CampaignsManagement>
        <Wallet3>Wallet</Wallet3>
        <TriangleParent>
          <TriangleIcon alt="" src="/triangle1.svg" />
          <Accounts>Accounts</Accounts>
          <NikeS>RAMON RIDWAN</NikeS>
          <GroupChild alt="" src="/line-221.svg" />
        </TriangleParent>
        <Wallet5>
          <WalletChild />
          <MaskGroupIcon alt="" src="/mask-group.svg" />
          <VectorIcon alt="" src="/vector-1.svg" />
          <VectorIcon1 alt="" src="/vector.svg" />
          <VectorIcon2 alt="" src="/vector-2.svg" />
          <Wallet4>Wallet</Wallet4>
          <Trophy1Icon alt="" src="/trophy-1.svg" />
          <RectangleParent>
            <GroupItem />
            <WithdrawFunds>Withdraw Funds</WithdrawFunds>
          </RectangleParent>
          <WalletItem alt="" src="/group-303@2x.png" />
          <B1>#120000.00</B1>
          <WalletInner alt="" src="/rectangle-287.svg" />
          <TotalEarnings>Total Earnings</TotalEarnings>
          <B2>#30000.00</B2>
          <RectangleIcon alt="" src="/rectangle-299.svg" />
          <Balance>Balance</Balance>
          <WalletChild1 alt="" src="/vector-11.svg" />
          <PleaseNoteThissContainer>
            <PleaseNoteThiss>{`Please note this’s the total sum of ya’ transaction here on `}</PleaseNoteThiss>
            <PleaseNoteThiss>GOGE AFRICA</PleaseNoteThiss>
          </PleaseNoteThissContainer>
          <PleaseNoteThis>
            Please note this the current balance amount left on ya’ wallet.
          </PleaseNoteThis>
        </Wallet5>
      </Wallet6>
      <Nav1 group364="/group-364.svg" />
    </WalletRoot>
  );
});

export default Wallet1;