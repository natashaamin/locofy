import { FunctionComponent, memo } from "react";
import styled from "styled-components";

export type ConversionRateType = {
  className?: string;
};

const ConversionRateChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-10);
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  width: 1027px;
  height: 315px;
`;
const ConversionRateItem = styled.img`
  position: absolute;
  top: 56px;
  left: 961px;
  width: 16px;
  height: 3.7px;
`;
const ItunesCard = styled.b`
  position: absolute;
  top: 108px;
  left: 54px;
  display: inline-block;
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 115px;
  height: 23px;
`;
const UsaPhysical = styled.div`
  position: absolute;
  top: 142px;
  left: 53px;
  line-height: 163.42%;
  display: inline-block;
  width: 95px;
  height: 25px;
`;
const N = styled.div`
  position: absolute;
  top: 142px;
  left: 209px;
  line-height: 163.42%;
  display: inline-block;
  width: 63px;
  height: 25px;
`;
const N1 = styled.div`
  position: absolute;
  top: 177.1px;
  left: 209px;
  line-height: 163.42%;
  display: inline-block;
  width: 63px;
  height: 25px;
`;
const N2 = styled.div`
  position: absolute;
  top: 212.2px;
  left: 209px;
  line-height: 163.42%;
  display: inline-block;
  width: 63px;
  height: 25px;
`;
const N3 = styled.div`
  position: absolute;
  top: 247.3px;
  left: 209px;
  line-height: 163.42%;
  display: inline-block;
  width: 63px;
  height: 25px;
`;
const UsaECodeCard = styled.div`
  position: absolute;
  top: 177.1px;
  left: 53px;
  line-height: 163.42%;
  display: inline-block;
  width: 135px;
  height: 25px;
`;
const UkPhysicalCard = styled.div`
  position: absolute;
  top: 212.2px;
  left: 53px;
  line-height: 163.42%;
  display: inline-block;
  width: 135px;
  height: 25px;
`;
const UkECodeCard = styled.div`
  position: absolute;
  top: 247.3px;
  left: 53px;
  line-height: 163.42%;
  display: inline-block;
  width: 135px;
  height: 25px;
`;
const AmazonCard = styled.b`
  position: absolute;
  top: 108px;
  left: 364px;
  display: inline-block;
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 115px;
  height: 23px;
`;
const UsaPhysical1 = styled.div`
  position: absolute;
  top: 142px;
  left: 363px;
  line-height: 163.42%;
  display: inline-block;
  width: 95px;
  height: 25px;
`;
const N4 = styled.div`
  position: absolute;
  top: 142px;
  left: 519px;
  line-height: 163.42%;
  display: inline-block;
  width: 63px;
  height: 25px;
`;
const N5 = styled.div`
  position: absolute;
  top: 177.1px;
  left: 519px;
  line-height: 163.42%;
  display: inline-block;
  width: 63px;
  height: 25px;
`;
const N6 = styled.div`
  position: absolute;
  top: 212.2px;
  left: 519px;
  line-height: 163.42%;
  display: inline-block;
  width: 63px;
  height: 25px;
`;
const N7 = styled.div`
  position: absolute;
  top: 247.3px;
  left: 519px;
  line-height: 163.42%;
  display: inline-block;
  width: 63px;
  height: 25px;
`;
const UsaECodeCard1 = styled.div`
  position: absolute;
  top: 177.1px;
  left: 363px;
  line-height: 163.42%;
  display: inline-block;
  width: 135px;
  height: 25px;
`;
const UkPhysicalCard1 = styled.div`
  position: absolute;
  top: 212.2px;
  left: 363px;
  line-height: 163.42%;
  display: inline-block;
  width: 135px;
  height: 25px;
`;
const UkECodeCard1 = styled.div`
  position: absolute;
  top: 247.3px;
  left: 363px;
  line-height: 163.42%;
  display: inline-block;
  width: 135px;
  height: 25px;
`;
const Bitcoin = styled.b`
  position: absolute;
  top: 108px;
  left: 675px;
  display: inline-block;
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 115px;
  height: 23px;
`;
const BitcoinBtc = styled.div`
  position: absolute;
  top: 142px;
  left: 674px;
  line-height: 163.42%;
  display: inline-block;
  width: 95px;
  height: 25px;
`;
const N8 = styled.div`
  position: absolute;
  top: 142px;
  left: 830px;
  line-height: 163.42%;
  display: inline-block;
  width: 63px;
  height: 25px;
`;
const N9 = styled.div`
  position: absolute;
  top: 177.1px;
  left: 830px;
  line-height: 163.42%;
  display: inline-block;
  width: 63px;
  height: 25px;
`;
const N10 = styled.div`
  position: absolute;
  top: 212.2px;
  left: 830px;
  line-height: 163.42%;
  display: inline-block;
  width: 63px;
  height: 25px;
`;
const N11 = styled.div`
  position: absolute;
  top: 247.3px;
  left: 830px;
  line-height: 163.42%;
  display: inline-block;
  width: 63px;
  height: 25px;
`;
const BitcoinBtc1 = styled.div`
  position: absolute;
  top: 177.1px;
  left: 674px;
  line-height: 163.42%;
  display: inline-block;
  width: 135px;
  height: 25px;
`;
const BitcoinBtc2 = styled.div`
  position: absolute;
  top: 212.2px;
  left: 674px;
  line-height: 163.42%;
  display: inline-block;
  width: 135px;
  height: 25px;
`;
const BitcoinBtc3 = styled.div`
  position: absolute;
  top: 247.3px;
  left: 674px;
  line-height: 163.42%;
  display: inline-block;
  width: 135px;
  height: 25px;
`;
const ConversionRateTo = styled.b`
  position: absolute;
  top: 45px;
  left: 52px;
  font-size: var(--font-size-16);
  display: inline-block;
  width: 213px;
  height: 23px;
`;
const ConversionRateInner = styled.div`
  position: absolute;
  top: 183px;
  left: 937px;
  border-radius: 50%;
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
  width: 44px;
  height: 44px;
`;
const GroupIcon = styled.img`
  position: absolute;
  top: 198px;
  left: 952px;
  width: 14px;
  height: 14px;
`;
const ConversionRateRoot = styled.div`
  position: absolute;
  top: 429px;
  left: 375px;
  width: 1023px;
  height: 311px;
  text-align: left;
  font-size: var(--font-size-12);
  color: var(--color-white);
  font-family: var(--font-poppins);
`;

const ConversionRate: FunctionComponent<ConversionRateType> = memo(
  ({ className = "" }) => {
    return (
      <ConversionRateRoot className={className}>
        <ConversionRateChild />
        <ConversionRateItem alt="" src="/group-96-4.svg" />
        <ItunesCard>iTunes Card</ItunesCard>
        <UsaPhysical>USA Physical</UsaPhysical>
        <N>N400.00</N>
        <N1>N400.00</N1>
        <N2>N400.00</N2>
        <N3>N400.00</N3>
        <UsaECodeCard>USA E-Code card</UsaECodeCard>
        <UkPhysicalCard>UK Physical Card</UkPhysicalCard>
        <UkECodeCard>UK E-Code Card</UkECodeCard>
        <AmazonCard>Amazon Card</AmazonCard>
        <UsaPhysical1>USA Physical</UsaPhysical1>
        <N4>N400.00</N4>
        <N5>N400.00</N5>
        <N6>N400.00</N6>
        <N7>N400.00</N7>
        <UsaECodeCard1>USA E-Code card</UsaECodeCard1>
        <UkPhysicalCard1>UK Physical Card</UkPhysicalCard1>
        <UkECodeCard1>UK E-Code Card</UkECodeCard1>
        <Bitcoin>Bitcoin</Bitcoin>
        <BitcoinBtc>Bitcoin BTC</BitcoinBtc>
        <N8>N400.00</N8>
        <N9>N400.00</N9>
        <N10>N400.00</N10>
        <N11>N400.00</N11>
        <BitcoinBtc1>Bitcoin BTC</BitcoinBtc1>
        <BitcoinBtc2>Bitcoin BTC</BitcoinBtc2>
        <BitcoinBtc3>Bitcoin BTC</BitcoinBtc3>
        <ConversionRateTo>Conversion Rate to Naira</ConversionRateTo>
        <ConversionRateInner />
        <GroupIcon alt="" src="/group-266.svg" />
      </ConversionRateRoot>
    );
  }
);

export default ConversionRate;