import { FunctionComponent, memo, type CSSProperties } from "react";
import styled from "styled-components";

export type NavType = {
  className?: string;
  group364?: string;

  /** Style props */
  navPadding?: CSSProperties["padding"];
  frameDivPadding?: CSSProperties["padding"];
  searchAreaBorder?: CSSProperties["border"];
  rectangleDivBorder?: CSSProperties["border"];
};

const Rectangle2 = styled.div`
  height: 87px;
  width: 1504px;
  position: relative;
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-100);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
  z-index: 0;
`;
const NavChild = styled.div<{ rectangleDivBorder?: CSSProperties["border"] }>`
  height: 40px;
  width: 422px;
  position: relative;
  border-radius: var(--br-100);
  border: 1px solid var(--color-palevioletred);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
  z-index: 1;
  border: ${(p) => p.rectangleDivBorder};
`;
const MaskGroupIcon = styled.img`
  height: 36px;
  width: 36px;
  position: relative;
  z-index: 1;
`;
const RamonRidwan = styled.div`
  position: relative;
  line-height: 24px;
  z-index: 1;
`;
const NavItem = styled.img`
  height: 20px;
  width: 12.3px;
  position: absolute;
  margin: 0 !important;
  bottom: 61.8px;
  left: -10.3px;
  z-index: 1;
`;
const Oval2Icon = styled.img`
  height: 14px;
  width: 14.6px;
  position: relative;
  z-index: 2;
`;
const UserRole = styled.b`
  position: relative;
  letter-spacing: -0.43px;
  z-index: 3;
`;
const Div = styled.div`
  position: relative;
  display: none;
  z-index: 5;
  text-align: center;
  font-size: var(--font-size-6);
`;
const SearchEgLive = styled.input`
  width: 97px;
  border: none;
  outline: none;
  font-family: var(--font-poppins);
  font-size: var(--font-size-10);
  background-color: transparent;
  position: relative;
  line-height: 24px;
  color: var(--color-gray-300);
  text-align: left;
  display: inline-block;
  padding: 0;
  z-index: 2;
`;
const SearchIcon = styled.img`
  height: 13px;
  width: 13.5px;
  position: relative;
  z-index: 2;
`;
const NavInner = styled.img`
  align-self: stretch;
  height: 21.4px;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
`;
const NavRoot = styled.header<{ navPadding?: CSSProperties["padding"] }>`
  align-self: stretch;
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 21px 106px var(--padding-22) var(--padding-64);
  position: sticky;
  gap: var(--gap-20);
  top: 0;
  z-index: 99;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-12);
  color: var(--color-white);
  font-family: var(--font-poppins);
  @media screen and (max-width: 800px) {
    padding-left: var(--padding-32);
    padding-right: 53px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-right: var(--padding-20);
    box-sizing: border-box;
  }
  padding: ${(p) => p.navPadding};
`;

const Nav: FunctionComponent<NavType> = memo(
  ({
    className = "",
    navPadding,
    frameDivPadding,
    group364,
    searchAreaBorder,
    rectangleDivBorder,
  }) => {
    return (
      <NavRoot navPadding={navPadding} className={className}>
        <Rectangle2 />
        <NavChild rectangleDivBorder={rectangleDivBorder} />
        <MaskGroupIcon loading="lazy" alt="" src="/mask-group-1.svg" />
        <RamonRidwan>Ramon Ridwan</RamonRidwan>
        <NavItem alt="" src="/group-254.svg" />
        <Div>
          <Oval2Icon alt="" src="/oval-2.svg" />
          <UserRole>24</UserRole>
        </Div>
        <SearchEgLive placeholder="Search e.g card" type="text" />
        <SearchIcon alt="" src="/searchicon.svg" />
        <NavInner loading="lazy" alt="" src={group364} />
      </NavRoot>
    );
  }
);

export default Nav;
