import { FunctionComponent, memo } from "react";
import styled from "styled-components";

export type SideNav2Type = {
  className?: string;
};

const Rectangle2 = styled.div`
  width: 294px;
  height: 1111px;
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
const B = styled.b`
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
`;
const Oval4Icon1 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 2;
`;
const NotificationCount = styled.b`
  position: absolute;
  top: 5px;
  left: 3px;
  letter-spacing: -0.43px;
  display: inline-block;
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 14px;
  min-width: 14px;
  z-index: 3;
`;
const Overview1 = styled.div`
  flex: 1;
  position: relative;
  z-index: 1;
`;
const Transactions2 = styled.div`
  align-self: stretch;
  position: relative;
  z-index: 2;
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
  z-index: 1;
`;
const GroupIcon = styled.img`
  width: 15.3px;
  height: 11px;
  position: relative;
  z-index: 1;
`;
const GroupIcon1 = styled.img`
  width: 16px;
  height: 15.8px;
  position: relative;
  z-index: 2;
`;
const SideNavChild1 = styled.img`
  width: 10.3px;
  height: 17.3px;
  position: relative;
  z-index: 1;
`;
const SideNavChild2 = styled.img`
  width: 16px;
  height: 13.8px;
  position: relative;
  z-index: 1;
`;
const SideNavRoot = styled.section`
  width: 294px;
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 57px var(--padding-8) 521.4px 0px;
  gap: 106px;
  z-index: 1;
  text-align: left;
  font-size: var(--font-size-12);
  color: var(--color-white);
  font-family: var(--font-poppins);
  @media screen and (max-width: 1325px) {
    padding-top: 37px;
    padding-bottom: 339px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 800px) {
    padding-top: var(--padding-24);
    padding-bottom: 220px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: 53px;
  }
`;

const SideNav2: FunctionComponent<SideNav2Type> = memo(({ className = "" }) => {
  return (
    <SideNavRoot className={className}>
      <Rectangle2 />
      <SideNavChild alt="" src="/rectangle-274.svg" />
      <Div>
        <Oval4Icon loading="lazy" alt="" src="/oval-4-1.svg" />
        <B>19</B>
      </Div>
      <Div>
        <Oval4Icon1 loading="lazy" alt="" src="/oval-4.svg" />
        <NotificationCount>10</NotificationCount>
      </Div>
      <Overview1>Overview</Overview1>
      <Overview1>Wallet</Overview1>
      <Transactions2>Transactions</Transactions2>
      <Overview1>Statistics</Overview1>
      <Overview1>Settings</Overview1>
      <Referral>Referral</Referral>
      <Logout>Logout</Logout>
      <Overview1>Trade</Overview1>
      <SideNavItem loading="lazy" alt="" src="/group-260.svg" />
      <SideNavInner loading="lazy" alt="" src="/group-15.svg" />
      <GroupIcon loading="lazy" alt="" src="/group-14.svg" />
      <GroupIcon1 loading="lazy" alt="" src="/group.svg" />
      <SideNavChild1 loading="lazy" alt="" src="/group-10.svg" />
      <SideNavChild2 loading="lazy" alt="" src="/group-111.svg" />
    </SideNavRoot>
  );
});

export default SideNav2;
