import { FunctionComponent } from "react";
import styled from "styled-components";
import SideNav2 from "../components/SideNav2";
import Nav1 from "../components/Nav1";

const Child = styled.div`
  width: 1500px;
  height: 1104px;
  position: relative;
  background-color: var(--color-midnightblue);
  display: none;
  max-width: 100%;
`;
const TriangleIcon = styled.img`
  width: 9px;
  height: 5px;
  position: relative;
  z-index: 1;
`;
const Accounts = styled.b`
  position: relative;
  z-index: 1;
`;
const NikeS = styled.b`
  position: relative;
  text-align: left;
  z-index: 1;
`;
const Item = styled.img`
  width: 3px;
  height: 13px;
  position: relative;
  z-index: 1;
`;
const Div = styled.div`
  position: relative;
  display: none;
  text-align: center;
`;
const CampaignsManagement = styled.b`
  position: relative;
  white-space: pre-wrap;
  z-index: 1;
`;
const Transactions2 = styled.b`
  position: relative;
  font-size: var(--font-size-16);
  z-index: 1;
`;
const TransactionsChild = styled.div`
  width: 1027px;
  height: 820px;
  position: relative;
  border-radius: var(--br-10);
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
  z-index: 0;
`;
const TransactionsItem = styled.div`
  height: 67px;
  width: 927px;
  position: relative;
  border-radius: var(--br-100);
  background-color: var(--color-midnightblue);
  border: 1px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
  z-index: 1;
`;
const TransactionsInner = styled.img`
  width: 16px;
  height: 3.7px;
  position: relative;
  z-index: 2;
`;
const RectangleIcon = styled.img`
  height: 27px;
  width: 91px;
  position: relative;
  border-radius: 215px;
  display: none;
  z-index: 3;
`;
const Completed = styled.b`
  position: relative;
  z-index: 3;
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
const Div1 = styled.div`
  position: relative;
  z-index: 2;
`;
const Div2 = styled.div`
  position: relative;
  line-height: 180%;
  z-index: 2;
`;
const Bitcoin = styled.div`
  position: relative;
  line-height: 163.42%;
  z-index: 2;
`;
const RectangleDiv = styled.div`
  height: 67px;
  width: 927px;
  position: relative;
  border-radius: var(--br-100);
  background-color: var(--color-midnightblue);
  border: 1px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
  z-index: 12;
`;
const TransactionsChild1 = styled.img`
  height: 27px;
  width: 91px;
  position: relative;
  border-radius: 215px;
  display: none;
  z-index: 14;
`;
const TransactionsChild2 = styled.div`
  height: 67px;
  width: 927px;
  position: relative;
  border-radius: var(--br-100);
  background-color: var(--color-midnightblue);
  border: 1px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
  z-index: 21;
`;
const TransactionsChild3 = styled.img`
  height: 27px;
  width: 91px;
  position: relative;
  border-radius: 215px;
  display: none;
  z-index: 23;
`;
const TransactionsChild4 = styled.div`
  height: 67px;
  width: 927px;
  position: relative;
  border-radius: var(--br-100);
  background-color: var(--color-midnightblue);
  border: 1px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
  z-index: 31;
`;
const TransactionsChild5 = styled.img`
  height: 27px;
  width: 91px;
  position: relative;
  border-radius: 215px;
  display: none;
  z-index: 33;
`;
const TransactionsChild6 = styled.img`
  width: 16px;
  height: 10.9px;
  position: relative;
  z-index: 2;
`;
const TransactionsChild7 = styled.div`
  height: 67px;
  width: 927px;
  position: relative;
  border-radius: var(--br-100);
  background-color: var(--color-midnightblue);
  border: 1px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
  z-index: 49;
`;
const TransactionsChild8 = styled.img`
  height: 27px;
  width: 91px;
  position: relative;
  border-radius: 215px;
  display: none;
  z-index: 51;
`;
const TransactionsChild9 = styled.div`
  height: 67px;
  width: 927px;
  position: relative;
  border-radius: var(--br-100);
  background-color: var(--color-midnightblue);
  border: 1px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
  z-index: 59;
`;
const TransactionsChild10 = styled.img`
  height: 27px;
  width: 91px;
  position: relative;
  border-radius: 215px;
  display: none;
  z-index: 61;
`;
const TransactionsChild11 = styled.div`
  height: 67px;
  width: 927px;
  position: relative;
  border-radius: var(--br-100);
  background-color: var(--color-midnightblue);
  border: 1px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
  z-index: 68;
`;
const TransactionsChild12 = styled.img`
  height: 27px;
  width: 91px;
  position: relative;
  border-radius: 215px;
  display: none;
  z-index: 70;
`;
const TransactionsChild13 = styled.div`
  height: 67px;
  width: 927px;
  position: relative;
  border-radius: var(--br-100);
  background-color: var(--color-midnightblue);
  border: 1px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
  z-index: 78;
`;
const TransactionsChild14 = styled.img`
  height: 27px;
  width: 91px;
  position: relative;
  border-radius: 215px;
  display: none;
  z-index: 80;
`;
const Completed1 = styled.b`
  position: relative;
  line-height: 15px;
  z-index: 3;
`;
const TransactionsChild15 = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 950px;
  bottom: 761px;
  left: 0px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: contain;
  z-index: 2;
`;
const PlaceNew = styled.div`
  position: relative;
  font-size: var(--font-size-10);
  text-align: center;
  z-index: 3;
`;
const Delete = styled.div`
  position: relative;
  font-size: var(--font-size-10);
  color: var(--color-gray-100);
  text-align: center;
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
const Accounts1 = styled.div`
  position: relative;
  z-index: 1;
`;
const RectangleParent = styled.div`
  border-radius: var(--br-100);
  background: linear-gradient(178.18deg, var(--color-palevioletred), #281ac8);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12) 41px 13px;
  z-index: 1;
  font-size: var(--font-size-10);
`;
const Transactions3 = styled.div`
  align-self: stretch;
  border-radius: var(--br-10);
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 53px 44px 36px 50px;
  position: relative;
  gap: 46px;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 1325px) {
    padding-left: 25px;
    padding-right: var(--padding-22);
    box-sizing: border-box;
  }
  @media screen and (max-width: 1125px) {
    padding-top: 1127px;
    padding-bottom: 23px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 800px) {
    gap: 23px;
  }
  @media screen and (max-width: 450px) {
    padding-bottom: var(--padding-20);
    box-sizing: border-box;
  }
`;
const Div3 = styled.div`
  position: relative;
  display: none;
`;
const TransactionsRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  font-size: var(--font-size-12);
  color: var(--color-white);
  font-family: var(--font-poppins);
`;

const Transactions1: FunctionComponent = () => {
  return (
    <TransactionsRoot>
      <Div3>
        <Child />
        <SideNav2 />
        <Div>
          <TriangleIcon loading="lazy" alt="" src="/triangle.svg" />
          <Accounts>Accounts</Accounts>
          <NikeS>RAMON RIDWAN</NikeS>
          <Item loading="lazy" alt="" src="/line-22.svg" />
        </Div>
        <CampaignsManagement>User Management Transactions</CampaignsManagement>
        <Transactions2>Transactions</Transactions2>
        <Transactions3>
          <TransactionsChild />
          <TransactionsItem />
          <TransactionsInner loading="lazy" alt="" src="/group-96-4.svg" />
          <RectangleIcon alt="" src="/rectangle-291.svg" />
          <Completed>Completed</Completed>
          <Bitcoin2Icon loading="lazy" alt="" src="/bitcoin-21.svg" />
          <Date1>Date</Date1>
          <Div1>14/01/2019</Div1>
          <Div2>12345678</Div2>
          <Bitcoin>Bitcoin</Bitcoin>
          <Bitcoin>$100</Bitcoin>
          <Bitcoin>#18000</Bitcoin>
          <RectangleDiv />
          <TransactionsInner loading="lazy" alt="" src="/group-96-4.svg" />
          <TransactionsChild1 alt="" src="/rectangle-294.svg" />
          <Completed>Failed</Completed>
          <Div1>14/01/2019</Div1>
          <Div2>12345678</Div2>
          <Bitcoin>Amazon</Bitcoin>
          <Bitcoin>$100</Bitcoin>
          <Bitcoin>#18000</Bitcoin>
          <TransactionsChild2 />
          <TransactionsInner alt="" src="/group-96-4.svg" />
          <TransactionsChild3 alt="" src="/rectangle-296.svg" />
          <Completed>In Progress</Completed>
          <Bitcoin2Icon loading="lazy" alt="" src="/bitcoin-21.svg" />
          <Div1>14/01/2019</Div1>
          <Div2>12345678</Div2>
          <Bitcoin>Bitcoin</Bitcoin>
          <Bitcoin>$100</Bitcoin>
          <Bitcoin>#18000</Bitcoin>
          <TransactionsChild4 />
          <TransactionsInner loading="lazy" alt="" src="/group-96-4.svg" />
          <TransactionsChild5 alt="" src="/rectangle-291.svg" />
          <Completed>Completed</Completed>
          <Div1>14/01/2019</Div1>
          <Div2>12345678</Div2>
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
          <TransactionsChild6 loading="lazy" alt="" src="/group-2691.svg" />
          <TransactionsChild6 loading="lazy" alt="" src="/group-2691.svg" />
          <TransactionsChild7 />
          <TransactionsInner loading="lazy" alt="" src="/group-96-4.svg" />
          <TransactionsChild8 alt="" src="/rectangle-291.svg" />
          <Completed>Completed</Completed>
          <Bitcoin2Icon loading="lazy" alt="" src="/bitcoin-21.svg" />
          <Div1>14/01/2019</Div1>
          <Div2>12345678</Div2>
          <Bitcoin>Bitcoin</Bitcoin>
          <Bitcoin>$100</Bitcoin>
          <Bitcoin>#18000</Bitcoin>
          <TransactionsChild9 />
          <TransactionsInner loading="lazy" alt="" src="/group-96-4.svg" />
          <TransactionsChild10 alt="" src="/rectangle-294.svg" />
          <Completed>Failed</Completed>
          <Div1>14/01/2019</Div1>
          <Div2>12345678</Div2>
          <Bitcoin>Amazon</Bitcoin>
          <Bitcoin>$100</Bitcoin>
          <Bitcoin>#18000</Bitcoin>
          <TransactionsChild11 />
          <TransactionsInner loading="lazy" alt="" src="/group-96-4.svg" />
          <TransactionsChild12 alt="" src="/rectangle-296.svg" />
          <Completed>In Progress</Completed>
          <Bitcoin2Icon loading="lazy" alt="" src="/bitcoin-21.svg" />
          <Div1>14/01/2019</Div1>
          <Div2>12345678</Div2>
          <Bitcoin>Bitcoin</Bitcoin>
          <Bitcoin>$100</Bitcoin>
          <Bitcoin>#18000</Bitcoin>
          <TransactionsChild13 />
          <TransactionsInner loading="lazy" alt="" src="/group-96-4.svg" />
          <TransactionsChild14 alt="" src="/rectangle-291.svg" />
          <Completed1>Completed</Completed1>
          <Div1>14/01/2019</Div1>
          <Div2>12345678</Div2>
          <Bitcoin>Bitcoin</Bitcoin>
          <Bitcoin>$100</Bitcoin>
          <Bitcoin>#18000</Bitcoin>
          <TransactionsChild6 loading="lazy" alt="" src="/group-2691.svg" />
          <TransactionsChild6 loading="lazy" alt="" src="/group-2691.svg" />
          <TransactionsChild15 loading="lazy" alt="" src="/group-16@2x.png" />
          <PlaceNew>Place New</PlaceNew>
          <Delete>Delete</Delete>
          <RectangleParent>
            <FrameChild />
            <Accounts1>View More</Accounts1>
          </RectangleParent>
        </Transactions3>
      </Div3>
      <Nav1
        navFlex="unset"
        navTop="0"
        navPosition="sticky"
        group364="/group-364.svg"
      />
    </TransactionsRoot>
  );
};

export default Transactions1;
