import { FunctionComponent, memo, type CSSProperties } from "react";
import styled from "styled-components";

export type NavType = {
  className?: string;
  group364?: string;
  showRectangle?: boolean;
  showRectangleDiv?: boolean;
  showGroupDiv?: boolean;

  /** Style props */
  navPadding?: CSSProperties["padding"];
  frameDivPadding?: CSSProperties["padding"];
  searchAreaBorder?: CSSProperties["border"];
  rectangleDivBorder?: CSSProperties["border"];
  navPosition?: CSSProperties["position"];
  navTop?: CSSProperties["top"];
  navLeft?: CSSProperties["left"];
  navWidth?: CSSProperties["width"];
  navHeight?: CSSProperties["height"];
  navAlignSelf?: CSSProperties["alignSelf"];
  navBackgroundColor?: CSSProperties["backgroundColor"];
  navBorder?: CSSProperties["border"];
  navDisplay?: CSSProperties["display"];
  navFlexDirection?: CSSProperties["flexDirection"];
  navAlignItems?: CSSProperties["alignItems"];
  navJustifyContent?: CSSProperties["justifyContent"];
  navGap?: CSSProperties["gap"];
  rectanglePosition?: CSSProperties["position"];
  rectangleTop?: CSSProperties["top"];
  rectangleLeft?: CSSProperties["left"];
  rectangleDivPosition?: CSSProperties["position"];
  rectangleDivTop?: CSSProperties["top"];
  rectangleDivLeft?: CSSProperties["left"];
  maskGroupIconPosition?: CSSProperties["position"];
  maskGroupIconTop?: CSSProperties["top"];
  maskGroupIconLeft?: CSSProperties["left"];
  ramonRidwanPosition?: CSSProperties["position"];
  ramonRidwanTop?: CSSProperties["top"];
  ramonRidwanLeft?: CSSProperties["left"];
  groupIconTop?: CSSProperties["top"];
  groupIconLeft?: CSSProperties["left"];
  groupIconMargin?: CSSProperties["margin"];
  groupIconBottom?: CSSProperties["bottom"];
  groupDivPosition?: CSSProperties["position"];
  groupDivHeight?: CSSProperties["height"];
  groupDivWidth?: CSSProperties["width"];
  groupDivTop?: CSSProperties["top"];
  groupDivRight?: CSSProperties["right"];
  groupDivBottom?: CSSProperties["bottom"];
  groupDivLeft?: CSSProperties["left"];
  searchEgLivePosition?: CSSProperties["position"];
  searchEgLiveWidth?: CSSProperties["width"];
  searchEgLiveTop?: CSSProperties["top"];
  searchEgLiveLeft?: CSSProperties["left"];
  searchEgLiveColor?: CSSProperties["color"];
  searchEgLiveHeight?: CSSProperties["height"];
  searchEgLiveOpacity?: CSSProperties["opacity"];
  searchEgLiveMixBlendMode?: CSSProperties["mixBlendMode"];
  searchEgLiveBorder?: CSSProperties["border"];
  searchEgLiveOutline?: CSSProperties["outline"];
  searchEgLiveBackgroundColor?: CSSProperties["backgroundColor"];
  searchEgLivePadding?: CSSProperties["padding"];
  searchIconPosition?: CSSProperties["position"];
  searchIconHeight?: CSSProperties["height"];
  searchIconWidth?: CSSProperties["width"];
  searchIconTop?: CSSProperties["top"];
  searchIconRight?: CSSProperties["right"];
  searchIconBottom?: CSSProperties["bottom"];
  searchIconLeft?: CSSProperties["left"];
  searchIconOverflow?: CSSProperties["overflow"];
  searchIconMaxHeight?: CSSProperties["maxHeight"];
  groupIconPosition?: CSSProperties["position"];
  groupIconTop1?: CSSProperties["top"];
  groupIconLeft1?: CSSProperties["left"];
  groupIconWidth?: CSSProperties["width"];
  groupIconAlignSelf?: CSSProperties["alignSelf"];
  groupIconOverflow?: CSSProperties["overflow"];
};

const Rectangle3 = styled.div<{
  rectanglePosition?: CSSProperties["position"];
  rectangleTop?: CSSProperties["top"];
  rectangleLeft?: CSSProperties["left"];
}>`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-100);
  box-sizing: border-box;
  width: 1504px;
  height: 87px;
  position: ${(p) => p.rectanglePosition};
  top: ${(p) => p.rectangleTop};
  left: ${(p) => p.rectangleLeft};
`;
const NavChild = styled.div<{
  rectangleDivBorder?: CSSProperties["border"];
  rectangleDivPosition?: CSSProperties["position"];
  rectangleDivTop?: CSSProperties["top"];
  rectangleDivLeft?: CSSProperties["left"];
}>`
  position: absolute;
  top: 21px;
  left: 722px;
  border-radius: var(--br-100);
  border: 1px solid var(--color-palevioletred);
  box-sizing: border-box;
  width: 422px;
  height: 40px;
  border: ${(p) => p.rectangleDivBorder};
  position: ${(p) => p.rectangleDivPosition};
  top: ${(p) => p.rectangleDivTop};
  left: ${(p) => p.rectangleDivLeft};
`;
const MaskGroupIcon = styled.img<{
  maskGroupIconPosition?: CSSProperties["position"];
  maskGroupIconTop?: CSSProperties["top"];
  maskGroupIconLeft?: CSSProperties["left"];
}>`
  position: absolute;
  top: 23px;
  left: 1196px;
  width: 36px;
  height: 36px;
  position: ${(p) => p.maskGroupIconPosition};
  top: ${(p) => p.maskGroupIconTop};
  left: ${(p) => p.maskGroupIconLeft};
`;
const RamonRidwan = styled.div<{
  ramonRidwanPosition?: CSSProperties["position"];
  ramonRidwanTop?: CSSProperties["top"];
  ramonRidwanLeft?: CSSProperties["left"];
}>`
  position: absolute;
  top: 35px;
  left: 1243px;
  line-height: 24px;
  position: ${(p) => p.ramonRidwanPosition};
  top: ${(p) => p.ramonRidwanTop};
  left: ${(p) => p.ramonRidwanLeft};
`;
const NavItem = styled.img<{
  groupIconTop?: CSSProperties["top"];
  groupIconLeft?: CSSProperties["left"];
  groupIconMargin?: CSSProperties["margin"];
  groupIconBottom?: CSSProperties["bottom"];
}>`
  position: absolute;
  top: 33.2px;
  left: 1377px;
  width: 12.3px;
  height: 20px;
  top: ${(p) => p.groupIconTop};
  left: ${(p) => p.groupIconLeft};
  margin: ${(p) => p.groupIconMargin};
  bottom: ${(p) => p.groupIconBottom};
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
const Oval2Parent = styled.div<{
  groupDivPosition?: CSSProperties["position"];
  groupDivHeight?: CSSProperties["height"];
  groupDivWidth?: CSSProperties["width"];
  groupDivTop?: CSSProperties["top"];
  groupDivRight?: CSSProperties["right"];
  groupDivBottom?: CSSProperties["bottom"];
  groupDivLeft?: CSSProperties["left"];
}>`
  position: absolute;
  height: 16.87%;
  width: 0.97%;
  top: 34.94%;
  right: 6.81%;
  bottom: 48.19%;
  left: 92.22%;
  text-align: center;
  font-size: var(--font-size-6);
  position: ${(p) => p.groupDivPosition};
  height: ${(p) => p.groupDivHeight};
  width: ${(p) => p.groupDivWidth};
  top: ${(p) => p.groupDivTop};
  right: ${(p) => p.groupDivRight};
  bottom: ${(p) => p.groupDivBottom};
  left: ${(p) => p.groupDivLeft};
`;
const SearchEgLive = styled.div<{
  searchEgLivePosition?: CSSProperties["position"];
  searchEgLiveWidth?: CSSProperties["width"];
  searchEgLiveTop?: CSSProperties["top"];
  searchEgLiveLeft?: CSSProperties["left"];
  searchEgLiveColor?: CSSProperties["color"];
  searchEgLiveHeight?: CSSProperties["height"];
  searchEgLiveOpacity?: CSSProperties["opacity"];
  searchEgLiveMixBlendMode?: CSSProperties["mixBlendMode"];
  searchEgLiveBorder?: CSSProperties["border"];
  searchEgLiveOutline?: CSSProperties["outline"];
  searchEgLiveBackgroundColor?: CSSProperties["backgroundColor"];
  searchEgLivePadding?: CSSProperties["padding"];
}>`
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
  position: ${(p) => p.searchEgLivePosition};
  width: ${(p) => p.searchEgLiveWidth};
  top: ${(p) => p.searchEgLiveTop};
  left: ${(p) => p.searchEgLiveLeft};
  color: ${(p) => p.searchEgLiveColor};
  height: ${(p) => p.searchEgLiveHeight};
  opacity: ${(p) => p.searchEgLiveOpacity};
  mix-blend-mode: ${(p) => p.searchEgLiveMixBlendMode};
  border: ${(p) => p.searchEgLiveBorder};
  outline: ${(p) => p.searchEgLiveOutline};
  background-color: ${(p) => p.searchEgLiveBackgroundColor};
  padding: ${(p) => p.searchEgLivePadding};
`;
const SearchIcon = styled.img<{
  searchIconPosition?: CSSProperties["position"];
  searchIconHeight?: CSSProperties["height"];
  searchIconWidth?: CSSProperties["width"];
  searchIconTop?: CSSProperties["top"];
  searchIconRight?: CSSProperties["right"];
  searchIconBottom?: CSSProperties["bottom"];
  searchIconLeft?: CSSProperties["left"];
  searchIconOverflow?: CSSProperties["overflow"];
  searchIconMaxHeight?: CSSProperties["maxHeight"];
}>`
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
  position: ${(p) => p.searchIconPosition};
  height: ${(p) => p.searchIconHeight};
  width: ${(p) => p.searchIconWidth};
  top: ${(p) => p.searchIconTop};
  right: ${(p) => p.searchIconRight};
  bottom: ${(p) => p.searchIconBottom};
  left: ${(p) => p.searchIconLeft};
  overflow: ${(p) => p.searchIconOverflow};
  max-height: ${(p) => p.searchIconMaxHeight};
`;
const NavInner = styled.img<{
  groupIconPosition?: CSSProperties["position"];
  groupIconTop1?: CSSProperties["top"];
  groupIconLeft1?: CSSProperties["left"];
  groupIconWidth?: CSSProperties["width"];
  groupIconAlignSelf?: CSSProperties["alignSelf"];
  groupIconOverflow?: CSSProperties["overflow"];
}>`
  position: absolute;
  top: 34.8px;
  left: 64px;
  width: 106px;
  height: 21.4px;
  position: ${(p) => p.groupIconPosition};
  top: ${(p) => p.groupIconTop1};
  left: ${(p) => p.groupIconLeft1};
  width: ${(p) => p.groupIconWidth};
  align-self: ${(p) => p.groupIconAlignSelf};
  overflow: ${(p) => p.groupIconOverflow};
`;
const NavRoot = styled.div<{
  navPadding?: CSSProperties["padding"];
  navPosition?: CSSProperties["position"];
  navTop?: CSSProperties["top"];
  navLeft?: CSSProperties["left"];
  navWidth?: CSSProperties["width"];
  navHeight?: CSSProperties["height"];
  navAlignSelf?: CSSProperties["alignSelf"];
  navBackgroundColor?: CSSProperties["backgroundColor"];
  navBorder?: CSSProperties["border"];
  navDisplay?: CSSProperties["display"];
  navFlexDirection?: CSSProperties["flexDirection"];
  navAlignItems?: CSSProperties["alignItems"];
  navJustifyContent?: CSSProperties["justifyContent"];
  navGap?: CSSProperties["gap"];
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
  padding: ${(p) => p.navPadding};
  position: ${(p) => p.navPosition};
  top: ${(p) => p.navTop};
  left: ${(p) => p.navLeft};
  width: ${(p) => p.navWidth};
  height: ${(p) => p.navHeight};
  align-self: ${(p) => p.navAlignSelf};
  background-color: ${(p) => p.navBackgroundColor};
  border: ${(p) => p.navBorder};
  display: ${(p) => p.navDisplay};
  flex-direction: ${(p) => p.navFlexDirection};
  align-items: ${(p) => p.navAlignItems};
  justify-content: ${(p) => p.navJustifyContent};
  gap: ${(p) => p.navGap};
`;

const Nav: FunctionComponent<NavType> = memo(
  ({
    className = "",
    navPadding,
    frameDivPadding,
    group364,
    searchAreaBorder,
    rectangleDivBorder,
    navPosition,
    navTop,
    navLeft,
    navWidth,
    navHeight,
    navAlignSelf,
    navBackgroundColor,
    navBorder,
    navDisplay,
    navFlexDirection,
    navAlignItems,
    navJustifyContent,
    navGap,
    showRectangle,
    rectanglePosition,
    rectangleTop,
    rectangleLeft,
    showRectangleDiv,
    rectangleDivPosition,
    rectangleDivTop,
    rectangleDivLeft,
    maskGroupIconPosition,
    maskGroupIconTop,
    maskGroupIconLeft,
    ramonRidwanPosition,
    ramonRidwanTop,
    ramonRidwanLeft,
    groupIconTop,
    groupIconLeft,
    groupIconMargin,
    groupIconBottom,
    showGroupDiv,
    groupDivPosition,
    groupDivHeight,
    groupDivWidth,
    groupDivTop,
    groupDivRight,
    groupDivBottom,
    groupDivLeft,
    searchEgLivePosition,
    searchEgLiveWidth,
    searchEgLiveTop,
    searchEgLiveLeft,
    searchEgLiveColor,
    searchEgLiveHeight,
    searchEgLiveOpacity,
    searchEgLiveMixBlendMode,
    searchEgLiveBorder,
    searchEgLiveOutline,
    searchEgLiveBackgroundColor,
    searchEgLivePadding,
    searchIconPosition,
    searchIconHeight,
    searchIconWidth,
    searchIconTop,
    searchIconRight,
    searchIconBottom,
    searchIconLeft,
    searchIconOverflow,
    searchIconMaxHeight,
    groupIconPosition,
    groupIconTop1,
    groupIconLeft1,
    groupIconWidth,
    groupIconAlignSelf,
    groupIconOverflow,
  }) => {
    return (
      <NavRoot
        navPadding={navPadding}
        navPosition={navPosition}
        navTop={navTop}
        navLeft={navLeft}
        navWidth={navWidth}
        navHeight={navHeight}
        navAlignSelf={navAlignSelf}
        navBackgroundColor={navBackgroundColor}
        navBorder={navBorder}
        navDisplay={navDisplay}
        navFlexDirection={navFlexDirection}
        navAlignItems={navAlignItems}
        navJustifyContent={navJustifyContent}
        navGap={navGap}
        className={className}
      >
        {!!showRectangle && (
          <Rectangle3
            rectanglePosition={rectanglePosition}
            rectangleTop={rectangleTop}
            rectangleLeft={rectangleLeft}
          />
        )}
        {!!showRectangleDiv && (
          <NavChild
            rectangleDivBorder={rectangleDivBorder}
            rectangleDivPosition={rectangleDivPosition}
            rectangleDivTop={rectangleDivTop}
            rectangleDivLeft={rectangleDivLeft}
          />
        )}
        <MaskGroupIcon
          alt=""
          src="/mask-group-1.svg"
          maskGroupIconPosition={maskGroupIconPosition}
          maskGroupIconTop={maskGroupIconTop}
          maskGroupIconLeft={maskGroupIconLeft}
        />
        <RamonRidwan
          ramonRidwanPosition={ramonRidwanPosition}
          ramonRidwanTop={ramonRidwanTop}
          ramonRidwanLeft={ramonRidwanLeft}
        >
          Ramon Ridwan
        </RamonRidwan>
        <NavItem
          alt=""
          src="/group-254.svg"
          groupIconTop={groupIconTop}
          groupIconLeft={groupIconLeft}
          groupIconMargin={groupIconMargin}
          groupIconBottom={groupIconBottom}
        />
        {!!showGroupDiv && (
          <Oval2Parent
            groupDivPosition={groupDivPosition}
            groupDivHeight={groupDivHeight}
            groupDivWidth={groupDivWidth}
            groupDivTop={groupDivTop}
            groupDivRight={groupDivRight}
            groupDivBottom={groupDivBottom}
            groupDivLeft={groupDivLeft}
          >
            <Oval2Icon alt="" src="/oval-2.svg" />
            <B>24</B>
          </Oval2Parent>
        )}
        <SearchEgLive
          searchEgLivePosition={searchEgLivePosition}
          searchEgLiveWidth={searchEgLiveWidth}
          searchEgLiveTop={searchEgLiveTop}
          searchEgLiveLeft={searchEgLiveLeft}
          searchEgLiveColor={searchEgLiveColor}
          searchEgLiveHeight={searchEgLiveHeight}
          searchEgLiveOpacity={searchEgLiveOpacity}
          searchEgLiveMixBlendMode={searchEgLiveMixBlendMode}
          searchEgLiveBorder={searchEgLiveBorder}
          searchEgLiveOutline={searchEgLiveOutline}
          searchEgLiveBackgroundColor={searchEgLiveBackgroundColor}
          searchEgLivePadding={searchEgLivePadding}
        >
          Search e.g card
        </SearchEgLive>
        <SearchIcon
          alt=""
          src="/searchicon.svg"
          searchIconPosition={searchIconPosition}
          searchIconHeight={searchIconHeight}
          searchIconWidth={searchIconWidth}
          searchIconTop={searchIconTop}
          searchIconRight={searchIconRight}
          searchIconBottom={searchIconBottom}
          searchIconLeft={searchIconLeft}
          searchIconOverflow={searchIconOverflow}
          searchIconMaxHeight={searchIconMaxHeight}
        />
        <NavInner
          alt=""
          src={group364}
          groupIconPosition={groupIconPosition}
          groupIconTop1={groupIconTop1}
          groupIconLeft1={groupIconLeft1}
          groupIconWidth={groupIconWidth}
          groupIconAlignSelf={groupIconAlignSelf}
          groupIconOverflow={groupIconOverflow}
        />
      </NavRoot>
    );
  }
);

export default Nav;