import { FunctionComponent, memo } from "react";
import styled from "styled-components";

export type SideNavType = {
  className?: string;
};

const Rectangle2 = styled.div`
  width: 294px;
  height: 941px;
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
  z-index: 2;
`;
const Label = styled.b`
  position: absolute;
  top: 4px;
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
  z-index: 1;
`;
const Label1 = styled.b`
  position: absolute;
  top: 4px;
  left: 3px;
  letter-spacing: -0.43px;
  display: inline-block;
  width: 14px;
  min-width: 14px;
  z-index: 2;
`;
const Overview1 = styled.div`
  flex: 1;
  position: relative;
  z-index: 1;
`;
const Wallet1 = styled.div`
  width: 99px;
  position: relative;
  display: inline-block;
  z-index: 1;
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
  z-index: 2;
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
  z-index: 2;
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
const SideNavRoot = styled.section`
  width: 294px;
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 57px var(--padding-8) 351.4px 0px;
  gap: 106px;
  z-index: 1;
  text-align: left;
  font-size: var(--font-size-12);
  color: var(--color-white);
  font-family: var(--font-poppins);
  @media screen and (max-width: 1125px) {
    padding-top: 37px;
    padding-bottom: 228px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 800px) {
    gap: 53px;
  }
  @media screen and (max-width: 450px) {
    padding-top: var(--padding-24);
    padding-bottom: 148px;
    box-sizing: border-box;
  }
`;

const SideNav: FunctionComponent<SideNavType> = memo(({ className = "" }) => {
  return (
    <SideNavRoot className={className}>
      <Rectangle2 />
      <SideNavChild alt="" src="/rectangle-274.svg" />
      <Div>
        <Oval4Icon loading="lazy" alt="" src="/oval-4.svg" />
        <Label>19</Label>
      </Div>
      <Div>
        <Oval4Icon1 loading="lazy" alt="" src="/oval-4-1.svg" />
        <Label1>10</Label1>
      </Div>
      <Overview1>Overview</Overview1>
      <Wallet1>Wallet</Wallet1>
      <Transactions2>Transactions</Transactions2>
      <Transactions2>Statistics</Transactions2>
      <Transactions2>Settings</Transactions2>
      <Referral>Referral</Referral>
      <Logout>Logout</Logout>
      <Trade1>Trade</Trade1>
      <SideNavItem loading="lazy" alt="" src="/group-260.svg" />
      <SideNavInner loading="lazy" alt="" src="/group-15.svg" />
      <GroupIcon alt="" src="/group-14.svg" />
      <GroupIcon1 loading="lazy" alt="" src="/group.svg" />
      <SideNavChild1 loading="lazy" alt="" src="/group-10.svg" />
      <SideNavChild2 loading="lazy" alt="" src="/group-111.svg" />
    </SideNavRoot>
  );
});

export default SideNav;
