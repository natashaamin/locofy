import { FunctionComponent, memo } from "react";
import styled from "styled-components";

export type WalletType = {
  className?: string;
};

const WalletChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-10);
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  width: 1027px;
  height: 328px;
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
const Wallet2 = styled.b`
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
const GroupChild = styled.div`
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
const B = styled.b`
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
const B1 = styled.b`
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
const WalletRoot = styled.div`
  position: absolute;
  top: 773px;
  left: 376px;
  width: 1023px;
  height: 324px;
  text-align: left;
  font-size: var(--font-size-12);
  color: var(--color-white);
  font-family: var(--font-poppins);
`;

const Wallet: FunctionComponent<WalletType> = memo(({ className = "" }) => {
  return (
    <WalletRoot className={className}>
      <WalletChild />
      <MaskGroupIcon alt="" src="/mask-group-11.svg" />
      <VectorIcon alt="" src="/vector-1.svg" />
      <VectorIcon1 alt="" src="/vector.svg" />
      <VectorIcon2 alt="" src="/vector-2.svg" />
      <Wallet2>Wallet</Wallet2>
      <Trophy1Icon alt="" src="/trophy-1.svg" />
      <RectangleParent>
        <GroupChild />
        <WithdrawFunds>Withdraw Funds</WithdrawFunds>
      </RectangleParent>
      <WalletItem alt="" src="/group-303@2x.png" />
      <B>#120000.00</B>
      <WalletInner alt="" src="/rectangle-287.svg" />
      <TotalEarnings>Total Earnings</TotalEarnings>
      <B1>#30000.00</B1>
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
    </WalletRoot>
  );
});

export default Wallet;
