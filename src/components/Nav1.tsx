import { FunctionComponent, memo, type CSSProperties } from "react";
import styled from "styled-components";

export type Nav1Type = {
  className?: string;
  group364?: string;

  /** Style props */
  navFlex?: CSSProperties["flex"];
  navTop?: CSSProperties["top"];
  navPosition?: CSSProperties["position"];
};

const Rectangle2 = styled.div`
  position: absolute;
  top: 81px;
  left: -2px;
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-100);
  box-sizing: border-box;
  width: 1504px;
  height: 87px;
`;
const NavChild = styled.div`
  position: absolute;
  top: 21px;
  left: 722px;
  border-radius: var(--br-100);
  border: 1px solid var(--color-white);
  box-sizing: border-box;
  width: 422px;
  height: 40px;
`;
const MaskGroupIcon = styled.img`
  position: absolute;
  top: 23px;
  left: 1196px;
  width: 36px;
  height: 36px;
`;
const RamonRidwan = styled.div`
  position: absolute;
  top: 35px;
  left: 1243px;
  line-height: 24px;
`;
const NavItem = styled.img`
  position: absolute;
  top: 33.2px;
  left: 1377px;
  width: 12.3px;
  height: 20px;
`;
const Oval2Icon = styled.img`
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
  width: 47.95%;
  top: calc(50% - 4px);
  left: 27.4%;
  letter-spacing: -0.43px;
  display: inline-block;
`;
const Oval2Parent = styled.div`
  position: absolute;
  height: 16.87%;
  width: 0.97%;
  top: 34.94%;
  right: 6.81%;
  bottom: 48.19%;
  left: 92.22%;
  text-align: center;
  font-size: var(--font-size-6);
`;
const SearchEgLive = styled.div`
  position: absolute;
  width: 6.47%;
  top: calc(50% - 6.5px);
  left: 52.47%;
  font-size: var(--font-size-10);
  line-height: 24px;
  display: inline-block;
  height: 16px;
  opacity: 0.5;
  mix-blend-mode: normal;
`;
const SearchIcon = styled.img`
  position: absolute;
  height: 15.66%;
  width: 0.9%;
  top: 42.17%;
  right: 48.7%;
  bottom: 42.17%;
  left: 50.4%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const NavInner = styled.img`
  position: absolute;
  top: 35px;
  left: 65px;
  width: 104px;
  height: 21px;
`;
const NavRoot = styled.div<{
  navFlex?: CSSProperties["flex"];
  navTop?: CSSProperties["top"];
  navPosition?: CSSProperties["position"];
}>`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1500px;
  height: 83px;
  text-align: left;
  font-size: var(--font-size-12);
  color: var(--color-white);
  font-family: var(--font-poppins);
  flex: ${(p) => p.navFlex};
  top: ${(p) => p.navTop};
  position: ${(p) => p.navPosition};
`;

const Nav1: FunctionComponent<Nav1Type> = memo(
  ({ className = "", navFlex, navTop, navPosition, group364 }) => {
    return (
      <NavRoot
        navFlex={navFlex}
        navTop={navTop}
        navPosition={navPosition}
        className={className}
      >
        <Rectangle2 />
        <NavChild />
        <MaskGroupIcon alt="" src="/mask-group-1.svg" />
        <RamonRidwan>Ramon Ridwan</RamonRidwan>
        <NavItem alt="" src="/group-254.svg" />
        <Oval2Parent>
          <Oval2Icon alt="" src="/oval-2.svg" />
          <B>24</B>
        </Oval2Parent>
        <SearchEgLive>Search e.g card</SearchEgLive>
        <SearchIcon alt="" src="/searchicon.svg" />
        <NavInner alt="" src={group364} />
      </NavRoot>
    );
  }
);

export default Nav1;