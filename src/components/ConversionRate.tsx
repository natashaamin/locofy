import { FunctionComponent, memo } from "react";
import styled from "styled-components";

export type ConversionRateType = {
  className?: string;
};

const ConversionRateChild = styled.div`
  height: 315px;
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
const ConversionRateItem = styled.img`
  height: 3.7px;
  width: 16px;
  position: relative;
  z-index: 1;
`;
const ItunesCard = styled.b`
  flex: 1;
  position: relative;
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 1;
`;
const UsaPhysical = styled.div`
  width: 95px;
  position: relative;
  line-height: 163.42%;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const UsaECodeCard = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 163.42%;
  z-index: 1;
`;
const N = styled.div`
  width: 63px;
  position: relative;
  line-height: 163.42%;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const ConversionRateTo = styled.b`
  position: relative;
  font-size: var(--font-size-16);
  z-index: 1;
`;
const ConversionRateInner = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const GroupIcon = styled.img`
  position: absolute;
  top: 15px;
  left: 15px;
  width: 14px;
  height: 14px;
  z-index: 2;
`;
const ConversionRateRoot = styled.section`
  align-self: stretch;
  border-radius: var(--br-10);
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 45px 42px 38.7px 52px;
  position: relative;
  gap: 44px;
  max-width: 100%;
  z-index: 1;
  text-align: left;
  font-size: var(--font-size-12);
  color: var(--color-white);
  font-family: var(--font-poppins);
  @media screen and (max-width: 1200px) {
    padding-left: var(--padding-26);
    padding-right: 21px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 1125px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 800px) {
    gap: var(--gap-22);
  }
`;

const ConversionRate: FunctionComponent<ConversionRateType> = memo(
  ({ className = "" }) => {
    return (
      <ConversionRateRoot className={className}>
        <ConversionRateChild />
        <ConversionRateItem alt="" src="/group-96-4.svg" />
        <ItunesCard>iTunes Card</ItunesCard>
        <UsaPhysical>USA Physical</UsaPhysical>
        <UsaECodeCard>N400.00</UsaECodeCard>
        <UsaECodeCard>N400.00</UsaECodeCard>
        <UsaECodeCard>N400.00</UsaECodeCard>
        <UsaECodeCard>N400.00</UsaECodeCard>
        <UsaECodeCard>USA E-Code card</UsaECodeCard>
        <UsaECodeCard>UK Physical Card</UsaECodeCard>
        <UsaECodeCard>UK E-Code Card</UsaECodeCard>
        <ItunesCard>Amazon Card</ItunesCard>
        <UsaPhysical>USA Physical</UsaPhysical>
        <N>N400.00</N>
        <N>N400.00</N>
        <N>N400.00</N>
        <N>N400.00</N>
        <UsaECodeCard>USA E-Code card</UsaECodeCard>
        <UsaECodeCard>UK Physical Card</UsaECodeCard>
        <UsaECodeCard>UK E-Code Card</UsaECodeCard>
        <ItunesCard>Bitcoin</ItunesCard>
        <UsaPhysical>Bitcoin BTC</UsaPhysical>
        <UsaECodeCard>N400.00</UsaECodeCard>
        <UsaECodeCard>N400.00</UsaECodeCard>
        <UsaECodeCard>N400.00</UsaECodeCard>
        <UsaECodeCard>N400.00</UsaECodeCard>
        <UsaECodeCard>Bitcoin BTC</UsaECodeCard>
        <UsaECodeCard>Bitcoin BTC</UsaECodeCard>
        <UsaECodeCard>Bitcoin BTC</UsaECodeCard>
        <ConversionRateTo>Conversion Rate to Naira</ConversionRateTo>
        <ConversionRateInner />
        <GroupIcon loading="lazy" alt="" src="/group-266.svg" />
      </ConversionRateRoot>
    );
  }
);

export default ConversionRate;
