import { FunctionComponent, memo } from "react";
import styled from "styled-components";

export type TransactionsType = {
  className?: string;
};

const TransactionsChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-10);
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  width: 1027px;
  height: 563px;
`;
const TransactionsItem = styled.div`
  position: absolute;
  top: 169px;
  left: 52px;
  border-radius: var(--br-100);
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  width: 929px;
  height: 69px;
`;
const TransactionsInner = styled.img`
  position: absolute;
  top: 56px;
  left: 961px;
  width: 16px;
  height: 3.7px;
`;
const GroupIcon = styled.img`
  position: absolute;
  top: 197px;
  left: 939px;
  width: 16px;
  height: 3.7px;
`;
const Transactions2 = styled.b`
  position: absolute;
  top: 45px;
  left: 52px;
  font-size: var(--font-size-16);
  display: inline-block;
  width: 116px;
  height: 23px;
`;
const RectangleIcon = styled.img`
  position: absolute;
  top: 188px;
  left: 789px;
  border-radius: 215px;
  width: 91px;
  height: 27px;
`;
const Completed = styled.b`
  position: absolute;
  top: 193px;
  left: 802px;
  display: inline-block;
  width: 70px;
  height: 15px;
`;
const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-100);
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
  width: 134px;
  height: 42px;
`;
const ViewMore = styled.div`
  position: absolute;
  top: 13px;
  left: 23px;
  display: inline-block;
  width: 91px;
  height: 17px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 488px;
  left: 445px;
  width: 134px;
  height: 42px;
  text-align: center;
  font-size: var(--font-size-10);
`;
const Bitcoin2Icon = styled.img`
  position: absolute;
  top: 192px;
  left: 356px;
  width: 16px;
  height: 16px;
  overflow: hidden;
`;
const Date1 = styled.b`
  position: absolute;
  top: 120px;
  left: 70px;
  line-height: 163.42%;
`;
const Div = styled.div`
  position: absolute;
  top: 195px;
  left: 67px;
`;
const Div1 = styled.div`
  position: absolute;
  top: 195px;
  left: 192px;
  line-height: 180%;
`;
const Bitcoin = styled.div`
  position: absolute;
  top: 195px;
  left: 457px;
  line-height: 163.42%;
`;
const Div2 = styled.div`
  position: absolute;
  top: 195px;
  left: 572px;
  line-height: 163.42%;
`;
const Div3 = styled.div`
  position: absolute;
  top: 195px;
  left: 683px;
  line-height: 163.42%;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 244px;
  left: 52px;
  border-radius: var(--br-100);
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  width: 929px;
  height: 69px;
`;
const TransactionsChild1 = styled.img`
  position: absolute;
  top: 272px;
  left: 939px;
  width: 16px;
  height: 3.7px;
`;
const TransactionsChild2 = styled.img`
  position: absolute;
  top: 263px;
  left: 789px;
  border-radius: 215px;
  width: 91px;
  height: 27px;
`;
const Failed = styled.b`
  position: absolute;
  top: 268px;
  left: 816px;
  display: inline-block;
  width: 38px;
  height: 15px;
`;
const Div4 = styled.div`
  position: absolute;
  top: 270px;
  left: 67px;
`;
const Div5 = styled.div`
  position: absolute;
  top: 270px;
  left: 192px;
  line-height: 180%;
`;
const Amazon = styled.div`
  position: absolute;
  top: 270px;
  left: 454px;
  line-height: 163.42%;
`;
const Div6 = styled.div`
  position: absolute;
  top: 270px;
  left: 572px;
  line-height: 163.42%;
`;
const Div7 = styled.div`
  position: absolute;
  top: 270px;
  left: 683px;
  line-height: 163.42%;
`;
const TransactionsChild3 = styled.div`
  position: absolute;
  top: 319px;
  left: 52px;
  border-radius: var(--br-100);
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  width: 929px;
  height: 69px;
`;
const TransactionsChild4 = styled.img`
  position: absolute;
  top: 347px;
  left: 939px;
  width: 16px;
  height: 3.7px;
`;
const TransactionsChild5 = styled.img`
  position: absolute;
  top: 338px;
  left: 789px;
  border-radius: 215px;
  width: 91px;
  height: 27px;
`;
const InProgress = styled.b`
  position: absolute;
  top: 343px;
  left: 802px;
  display: inline-block;
  width: 70px;
  height: 15px;
`;
const Bitcoin4Icon = styled.img`
  position: absolute;
  top: 342px;
  left: 356px;
  width: 16px;
  height: 16px;
  overflow: hidden;
`;
const Div8 = styled.div`
  position: absolute;
  top: 345px;
  left: 67px;
`;
const Div9 = styled.div`
  position: absolute;
  top: 345px;
  left: 192px;
  line-height: 180%;
`;
const Bitcoin1 = styled.div`
  position: absolute;
  top: 345px;
  left: 457px;
  line-height: 163.42%;
`;
const Div10 = styled.div`
  position: absolute;
  top: 345px;
  left: 572px;
  line-height: 163.42%;
`;
const Div11 = styled.div`
  position: absolute;
  top: 345px;
  left: 683px;
  line-height: 163.42%;
`;
const TransactionsChild6 = styled.div`
  position: absolute;
  top: 394px;
  left: 52px;
  border-radius: var(--br-100);
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  width: 929px;
  height: 69px;
`;
const TransactionsChild7 = styled.img`
  position: absolute;
  top: 422px;
  left: 939px;
  width: 16px;
  height: 3.7px;
`;
const TransactionsChild8 = styled.img`
  position: absolute;
  top: 413px;
  left: 789px;
  border-radius: 215px;
  width: 91px;
  height: 27px;
`;
const Completed1 = styled.b`
  position: absolute;
  top: 418px;
  left: 802px;
  display: inline-block;
  width: 70px;
  height: 15px;
`;
const Div12 = styled.div`
  position: absolute;
  top: 420px;
  left: 67px;
`;
const Div13 = styled.div`
  position: absolute;
  top: 420px;
  left: 192px;
  line-height: 180%;
`;
const Bitcoin2 = styled.div`
  position: absolute;
  top: 420px;
  left: 457px;
  line-height: 163.42%;
`;
const Div14 = styled.div`
  position: absolute;
  top: 420px;
  left: 572px;
  line-height: 163.42%;
`;
const Div15 = styled.div`
  position: absolute;
  top: 420px;
  left: 683px;
  line-height: 163.42%;
`;
const TransactionId = styled.b`
  position: absolute;
  top: 120px;
  left: 180px;
  line-height: 163.42%;
`;
const Name = styled.b`
  position: absolute;
  top: 118px;
  left: 459px;
  line-height: 163.42%;
`;
const Value = styled.b`
  position: absolute;
  top: 120px;
  left: 569px;
  line-height: 163.42%;
`;
const Return = styled.b`
  position: absolute;
  top: 120px;
  left: 684px;
  line-height: 163.42%;
`;
const Status1 = styled.b`
  position: absolute;
  top: 120px;
  left: 807px;
  line-height: 163.42%;
`;
const Action = styled.b`
  position: absolute;
  top: 120px;
  left: 927px;
  line-height: 163.42%;
`;
const Type = styled.b`
  position: absolute;
  top: 120px;
  left: 349px;
  line-height: 163.42%;
`;
const TransactionsChild9 = styled.img`
  position: absolute;
  top: 269.4px;
  left: 356px;
  width: 16px;
  height: 10.9px;
`;
const TransactionsChild10 = styled.img`
  position: absolute;
  top: 423px;
  left: 356px;
  width: 16px;
  height: 10.9px;
`;
const TransactionsRoot = styled.div`
  position: absolute;
  top: 1766px;
  left: 375px;
  width: 1023px;
  height: 559px;
  text-align: left;
  font-size: var(--font-size-12);
  color: var(--color-white);
  font-family: var(--font-poppins);
`;

const Transactions: FunctionComponent<TransactionsType> = memo(
  ({ className = "" }) => {
    return (
      <TransactionsRoot className={className}>
        <TransactionsChild />
        <TransactionsItem />
        <TransactionsInner alt="" src="/group-96-4.svg" />
        <GroupIcon alt="" src="/group-96-4.svg" />
        <Transactions2>Transactions</Transactions2>
        <RectangleIcon alt="" src="/rectangle-291.svg" />
        <Completed>Completed</Completed>
        <RectangleParent>
          <GroupChild />
          <ViewMore>View More</ViewMore>
        </RectangleParent>
        <Bitcoin2Icon alt="" src="/bitcoin-2.svg" />
        <Date1>Date</Date1>
        <Div>14/01/2019</Div>
        <Div1>12345678</Div1>
        <Bitcoin>Bitcoin</Bitcoin>
        <Div2>$100</Div2>
        <Div3>#18000</Div3>
        <RectangleDiv />
        <TransactionsChild1 alt="" src="/group-96-7.svg" />
        <TransactionsChild2 alt="" src="/rectangle-294.svg" />
        <Failed>Failed</Failed>
        <Div4>14/01/2019</Div4>
        <Div5>12345678</Div5>
        <Amazon>Amazon</Amazon>
        <Div6>$100</Div6>
        <Div7>#18000</Div7>
        <TransactionsChild3 />
        <TransactionsChild4 alt="" src="/group-96-4.svg" />
        <TransactionsChild5 alt="" src="/rectangle-296.svg" />
        <InProgress>In Progress</InProgress>
        <Bitcoin4Icon alt="" src="/bitcoin-2.svg" />
        <Div8>14/01/2019</Div8>
        <Div9>12345678</Div9>
        <Bitcoin1>Bitcoin</Bitcoin1>
        <Div10>$100</Div10>
        <Div11>#18000</Div11>
        <TransactionsChild6 />
        <TransactionsChild7 alt="" src="/group-96-4.svg" />
        <TransactionsChild8 alt="" src="/rectangle-291.svg" />
        <Completed1>Completed</Completed1>
        <Div12>14/01/2019</Div12>
        <Div13>12345678</Div13>
        <Bitcoin2>Bitcoin</Bitcoin2>
        <Div14>$100</Div14>
        <Div15>#18000</Div15>
        <TransactionId>Transaction ID</TransactionId>
        <Name>Name</Name>
        <Value>Value</Value>
        <Return>Return</Return>
        <Status1>Status</Status1>
        <Action>Action</Action>
        <Type>Type</Type>
        <TransactionsChild9 alt="" src="/group-269.svg" />
        <TransactionsChild10 alt="" src="/group-269.svg" />
      </TransactionsRoot>
    );
  }
);

export default Transactions;