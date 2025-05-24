import { FunctionComponent, memo } from "react";
import styled from "styled-components";

export type SideNav1Type = {
  className?: string;
};

const Rectangle2 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  width: 294px;
  height: 3223px;
`;
const SideNavChild = styled.img`
  position: absolute;
  top: 124px;
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
  height: 0.62%;
  width: 7.24%;
  top: 6.46%;
  right: 13.1%;
  bottom: 92.92%;
  left: 79.66%;
  text-align: center;
  font-size: var(--font-size-8);
`;
const Oval4Group = styled.div`
  position: absolute;
  height: 0.62%;
  width: 7.24%;
  top: 10.56%;
  right: 13.1%;
  bottom: 88.82%;
  left: 79.66%;
  text-align: center;
  font-size: var(--font-size-8);
`;
const Overview1 = styled.div`
  position: absolute;
  top: 142px;
  left: 91.5px;
  display: inline-block;
  width: 99px;
  height: 27px;
`;
const Wallet2 = styled.div`
  position: absolute;
  top: 277px;
  left: 92px;
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
  top: 476px;
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
  top: 209px;
  left: 91.5px;
  display: inline-block;
  width: 99px;
  height: 27px;
`;
const SideNavItem = styled.img`
  position: absolute;
  height: 0.31%;
  width: 5.17%;
  top: 4.54%;
  right: 75.86%;
  bottom: 95.15%;
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
  height: 0.49%;
  width: 5.52%;
  top: 10.63%;
  right: 75.17%;
  bottom: 88.88%;
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
const SideNavRoot = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 290px;
  height: 3219px;
  text-align: left;
  font-size: var(--font-size-12);
  color: var(--color-white);
  font-family: var(--font-poppins);
`;

const SideNav1: FunctionComponent<SideNav1Type> = memo(({ className = "" }) => {
  return (
    <SideNavRoot className={className}>
      <Rectangle2 />
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
      <SideNavItem alt="" src="/group-260.svg" />
      <SideNavInner alt="" src="/group-15.svg" />
      <GroupIcon alt="" src="/group-14.svg" />
      <GroupIcon1 alt="" src="/group.svg" />
      <SideNavChild1 alt="" src="/group-10.svg" />
      <SideNavChild2 alt="" src="/group-111.svg" />
    </SideNavRoot>
  );
});

export default SideNav1;