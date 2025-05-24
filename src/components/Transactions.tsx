import { FunctionComponent, memo } from "react";
import styled from "styled-components";

export type TransactionsType = {
  className?: string;
};

const TransactionsChild = styled.div`
  width: 1027px;
  height: 563px;
  position: relative;
  border-radius: var(--br-10);
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
`;
const TransactionsItem = styled.div`
  height: 69px;
  width: 929px;
  position: relative;
  border-radius: var(--br-100);
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
`;
const TransactionsInner = styled.img`
  height: 3.7px;
  width: 16px;
  position: relative;
  z-index: 1;
`;
const GroupIcon = styled.img`
  width: 16px;
  height: 3.7px;
  position: relative;
  z-index: 2;
`;
const Transactions2 = styled.b`
  position: relative;
  font-size: var(--font-size-16);
  display: inline-block;
  min-width: 116px;
  z-index: 1;
`;
const RectangleIcon = styled.img`
  height: 27px;
  width: 91px;
  position: relative;
  border-radius: 215px;
  display: none;
`;
const Completed = styled.b`
  position: relative;
  z-index: 3;
`;
const FrameChild = styled.div`
  height: 42px;
  width: 134px;
  position: relative;
  border-radius: var(--br-100);
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
  display: none;
`;
const ViewMore = styled.div`
  flex: 1;
  position: relative;
  z-index: 1;
`;
const RectangleParent = styled.div`
  flex: 1;
  border-radius: var(--br-100);
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 13px var(--padding-20) var(--padding-12) 23px;
  z-index: 1;
  text-align: center;
  font-size: var(--font-size-10);
`;
const Bitcoin2Icon = styled.img`
  width: 16px;
  height: 16px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 2;
`;
const Date1 = styled.b`
  position: relative;
  line-height: 163.42%;
  z-index: 1;
`;
const ColumnDividers = styled.div`
  position: relative;
  z-index: 2;
`;
const DividerInfo = styled.div`
  position: relative;
  line-height: 180%;
  z-index: 2;
`;
const Bitcoin = styled.div`
  position: relative;
  line-height: 163.42%;
  z-index: 2;
`;
const Completed1 = styled.b`
  position: relative;
  line-height: 15px;
  z-index: 3;
`;
const TransactionsChild1 = styled.img`
  width: 16px;
  height: 10.9px;
  position: relative;
  z-index: 2;
`;
const TransactionsRoot = styled.div`
  align-self: stretch;
  border-radius: var(--br-10);
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 45px 44px 29px 50px;
  gap: 29px;
  max-width: 100%;
  z-index: 1;
  text-align: left;
  font-size: var(--font-size-12);
  color: var(--color-white);
  font-family: var(--font-poppins);
  @media screen and (max-width: 1200px) {
    padding-left: 25px;
    padding-right: var(--padding-22);
    box-sizing: border-box;
  }
  @media screen and (max-width: 800px) {
    padding-bottom: var(--padding-20);
    box-sizing: border-box;
  }
`;

const Transactions: FunctionComponent<TransactionsType> = memo(
  ({ className = "" }) => {
    return (
      <TransactionsRoot className={className}>
        <TransactionsChild />
        <TransactionsItem />
        <TransactionsInner loading="lazy" alt="" src="/group-96-4.svg" />
        <GroupIcon loading="lazy" alt="" src="/group-96-4.svg" />
        <Transactions2>Transactions</Transactions2>
        <RectangleIcon alt="" src="/rectangle-291.svg" />
        <Completed>Completed</Completed>
        <RectangleParent>
          <FrameChild />
          <ViewMore>View More</ViewMore>
        </RectangleParent>
        <Bitcoin2Icon loading="lazy" alt="" src="/bitcoin-2.svg" />
        <Date1>Date</Date1>
        <ColumnDividers>14/01/2019</ColumnDividers>
        <DividerInfo>12345678</DividerInfo>
        <Bitcoin>Bitcoin</Bitcoin>
        <Bitcoin>$100</Bitcoin>
        <Bitcoin>#18000</Bitcoin>
        <TransactionsItem />
        <GroupIcon loading="lazy" alt="" src="/group-96-7.svg" />
        <RectangleIcon alt="" src="/rectangle-294.svg" />
        <Completed>Failed</Completed>
        <ColumnDividers>14/01/2019</ColumnDividers>
        <DividerInfo>12345678</DividerInfo>
        <Bitcoin>Amazon</Bitcoin>
        <Bitcoin>$100</Bitcoin>
        <Bitcoin>#18000</Bitcoin>
        <TransactionsItem />
        <GroupIcon loading="lazy" alt="" src="/group-96-4.svg" />
        <RectangleIcon alt="" src="/rectangle-296.svg" />
        <Completed>In Progress</Completed>
        <Bitcoin2Icon loading="lazy" alt="" src="/bitcoin-2.svg" />
        <ColumnDividers>14/01/2019</ColumnDividers>
        <DividerInfo>12345678</DividerInfo>
        <Bitcoin>Bitcoin</Bitcoin>
        <Bitcoin>$100</Bitcoin>
        <Bitcoin>#18000</Bitcoin>
        <TransactionsItem />
        <GroupIcon loading="lazy" alt="" src="/group-96-4.svg" />
        <RectangleIcon alt="" src="/rectangle-291.svg" />
        <Completed1>Completed</Completed1>
        <ColumnDividers>14/01/2019</ColumnDividers>
        <DividerInfo>12345678</DividerInfo>
        <Bitcoin>Bitcoin</Bitcoin>
        <Bitcoin>$100</Bitcoin>
        <Bitcoin>#18000</Bitcoin>
        <Date1>Transaction ID</Date1>
        <Date1>Name</Date1>
        <Date1>Value</Date1>
        <Date1>Return</Date1>
        <Date1>Status</Date1>
        <Date1>Action</Date1>
        <Date1>Type</Date1>
        <TransactionsChild1 loading="lazy" alt="" src="/group-269.svg" />
        <TransactionsChild1 loading="lazy" alt="" src="/group-269.svg" />
      </TransactionsRoot>
    );
  }
);

export default Transactions;
