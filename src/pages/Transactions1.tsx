import { FunctionComponent } from "react";
import styled from "styled-components";
import SideNav2 from "../components/SideNav2";
import Nav1 from "../components/Nav1";

const TransactionsChild = styled.div`
  position: absolute;
  top: 80px;
  left: 7px;
  background-color: var(--color-midnightblue);
  width: 1500px;
  height: 1107px;
`;
const TriangleIcon = styled.img`
  position: absolute;
  height: 27.78%;
  width: 4.46%;
  top: 44.44%;
  right: 0%;
  bottom: 27.78%;
  left: 95.54%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Accounts = styled.b`
  position: absolute;
  top: calc(50% - 9px);
  left: 0%;
`;
const NikeS = styled.b`
  position: absolute;
  top: calc(50% - 9px);
  left: 43.11%;
  text-align: left;
`;
const GroupChild = styled.img`
  position: absolute;
  height: 72.22%;
  width: 1.49%;
  top: 11.11%;
  right: 63.33%;
  bottom: 16.67%;
  left: 35.18%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  mix-blend-mode: normal;
`;
const TriangleParent = styled.div`
  position: absolute;
  height: 1.51%;
  width: 13.39%;
  top: 10.76%;
  right: 7.25%;
  bottom: 87.73%;
  left: 79.36%;
  text-align: center;
`;
const CampaignsManagement = styled.b`
  position: absolute;
  top: calc(50% - 463px);
  left: 24.88%;
  white-space: pre-wrap;
`;
const Transactions2 = styled.b`
  position: absolute;
  top: 183px;
  left: 375px;
  font-size: var(--font-size-16);
  display: inline-block;
  width: 110px;
  height: 23px;
`;
const TransactionsItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-10);
  background-color: var(--color-midnightblue);
  border: 2px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  width: 1027px;
  height: 820px;
`;
const TransactionsInner = styled.div`
  position: absolute;
  top: 104px;
  left: 52px;
  border-radius: var(--br-100);
  background-color: var(--color-midnightblue);
  border: 1px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  width: 927px;
  height: 67px;
`;
const GroupIcon = styled.img`
  position: absolute;
  top: 132px;
  left: 939px;
  width: 16px;
  height: 3.7px;
`;
const RectangleIcon = styled.img`
  position: absolute;
  top: 123px;
  left: 789px;
  border-radius: 215px;
  width: 91px;
  height: 27px;
`;
const Completed = styled.b`
  position: absolute;
  top: 128px;
  left: 802px;
  display: inline-block;
  width: 70px;
  height: 15px;
`;
const Bitcoin2Icon = styled.img`
  position: absolute;
  top: 127px;
  left: 356px;
  width: 16px;
  height: 16px;
  overflow: hidden;
`;
const Date1 = styled.b`
  position: absolute;
  top: 55px;
  left: 70px;
  line-height: 163.42%;
`;
const Div = styled.div`
  position: absolute;
  top: 130px;
  left: 67px;
`;
const Div1 = styled.div`
  position: absolute;
  top: 130px;
  left: 192px;
  line-height: 180%;
`;
const Bitcoin = styled.div`
  position: absolute;
  top: 130px;
  left: 457px;
  line-height: 163.42%;
`;
const Div2 = styled.div`
  position: absolute;
  top: 130px;
  left: 572px;
  line-height: 163.42%;
`;
const Div3 = styled.div`
  position: absolute;
  top: 130px;
  left: 683px;
  line-height: 163.42%;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 179px;
  left: 52px;
  border-radius: var(--br-100);
  background-color: var(--color-midnightblue);
  border: 1px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  width: 927px;
  height: 67px;
`;
const TransactionsChild1 = styled.img`
  position: absolute;
  top: 207px;
  left: 939px;
  width: 16px;
  height: 3.7px;
`;
const TransactionsChild2 = styled.img`
  position: absolute;
  top: 198px;
  left: 789px;
  border-radius: 215px;
  width: 91px;
  height: 27px;
`;
const Failed = styled.b`
  position: absolute;
  top: 203px;
  left: 816px;
  display: inline-block;
  width: 38px;
  height: 15px;
`;
const Div4 = styled.div`
  position: absolute;
  top: 205px;
  left: 67px;
`;
const Div5 = styled.div`
  position: absolute;
  top: 205px;
  left: 192px;
  line-height: 180%;
`;
const Amazon = styled.div`
  position: absolute;
  top: 205px;
  left: 454px;
  line-height: 163.42%;
`;
const Div6 = styled.div`
  position: absolute;
  top: 205px;
  left: 572px;
  line-height: 163.42%;
`;
const Div7 = styled.div`
  position: absolute;
  top: 205px;
  left: 683px;
  line-height: 163.42%;
`;
const TransactionsChild3 = styled.div`
  position: absolute;
  top: 254px;
  left: 52px;
  border-radius: var(--br-100);
  background-color: var(--color-midnightblue);
  border: 1px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  width: 927px;
  height: 67px;
`;
const TransactionsChild4 = styled.img`
  position: absolute;
  top: 282px;
  left: 939px;
  width: 16px;
  height: 3.7px;
`;
const TransactionsChild5 = styled.img`
  position: absolute;
  top: 273px;
  left: 789px;
  border-radius: 215px;
  width: 91px;
  height: 27px;
`;
const InProgress = styled.b`
  position: absolute;
  top: 278px;
  left: 802px;
  display: inline-block;
  width: 70px;
  height: 15px;
`;
const Bitcoin4Icon = styled.img`
  position: absolute;
  top: 277px;
  left: 356px;
  width: 16px;
  height: 16px;
  overflow: hidden;
`;
const Div8 = styled.div`
  position: absolute;
  top: 280px;
  left: 67px;
`;
const Div9 = styled.div`
  position: absolute;
  top: 280px;
  left: 192px;
  line-height: 180%;
`;
const Bitcoin1 = styled.div`
  position: absolute;
  top: 280px;
  left: 457px;
  line-height: 163.42%;
`;
const Div10 = styled.div`
  position: absolute;
  top: 280px;
  left: 572px;
  line-height: 163.42%;
`;
const Div11 = styled.div`
  position: absolute;
  top: 280px;
  left: 683px;
  line-height: 163.42%;
`;
const TransactionsChild6 = styled.div`
  position: absolute;
  top: 329px;
  left: 52px;
  border-radius: var(--br-100);
  background-color: var(--color-midnightblue);
  border: 1px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  width: 927px;
  height: 67px;
`;
const TransactionsChild7 = styled.img`
  position: absolute;
  top: 357px;
  left: 939px;
  width: 16px;
  height: 3.7px;
`;
const TransactionsChild8 = styled.img`
  position: absolute;
  top: 348px;
  left: 789px;
  border-radius: 215px;
  width: 91px;
  height: 27px;
`;
const Completed1 = styled.b`
  position: absolute;
  top: 353px;
  left: 802px;
  display: inline-block;
  width: 70px;
  height: 15px;
`;
const Div12 = styled.div`
  position: absolute;
  top: 355px;
  left: 67px;
`;
const Div13 = styled.div`
  position: absolute;
  top: 355px;
  left: 192px;
  line-height: 180%;
`;
const Bitcoin2 = styled.div`
  position: absolute;
  top: 355px;
  left: 457px;
  line-height: 163.42%;
`;
const Div14 = styled.div`
  position: absolute;
  top: 355px;
  left: 572px;
  line-height: 163.42%;
`;
const Div15 = styled.div`
  position: absolute;
  top: 355px;
  left: 683px;
  line-height: 163.42%;
`;
const TransactionId = styled.b`
  position: absolute;
  top: 55px;
  left: 180px;
  line-height: 163.42%;
`;
const Name = styled.b`
  position: absolute;
  top: 53px;
  left: 459px;
  line-height: 163.42%;
`;
const Value = styled.b`
  position: absolute;
  top: 55px;
  left: 569px;
  line-height: 163.42%;
`;
const Return = styled.b`
  position: absolute;
  top: 55px;
  left: 684px;
  line-height: 163.42%;
`;
const Status1 = styled.b`
  position: absolute;
  top: 55px;
  left: 807px;
  line-height: 163.42%;
`;
const Action = styled.b`
  position: absolute;
  top: 55px;
  left: 927px;
  line-height: 163.42%;
`;
const Type = styled.b`
  position: absolute;
  top: 55px;
  left: 349px;
  line-height: 163.42%;
`;
const TransactionsChild9 = styled.img`
  position: absolute;
  top: 204.4px;
  left: 356px;
  width: 16px;
  height: 10.9px;
`;
const TransactionsChild10 = styled.img`
  position: absolute;
  top: 358px;
  left: 356px;
  width: 16px;
  height: 10.9px;
`;
const TransactionsChild11 = styled.div`
  position: absolute;
  top: 402px;
  left: 52px;
  border-radius: var(--br-100);
  background-color: var(--color-midnightblue);
  border: 1px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  width: 927px;
  height: 67px;
`;
const TransactionsChild12 = styled.img`
  position: absolute;
  top: 430px;
  left: 939px;
  width: 16px;
  height: 3.7px;
`;
const TransactionsChild13 = styled.img`
  position: absolute;
  top: 421px;
  left: 789px;
  border-radius: 215px;
  width: 91px;
  height: 27px;
`;
const Completed2 = styled.b`
  position: absolute;
  top: 426px;
  left: 802px;
  display: inline-block;
  width: 70px;
  height: 15px;
`;
const Bitcoin5Icon = styled.img`
  position: absolute;
  top: 425px;
  left: 356px;
  width: 16px;
  height: 16px;
  overflow: hidden;
`;
const Div16 = styled.div`
  position: absolute;
  top: 428px;
  left: 67px;
`;
const Div17 = styled.div`
  position: absolute;
  top: 428px;
  left: 192px;
  line-height: 180%;
`;
const Bitcoin3 = styled.div`
  position: absolute;
  top: 428px;
  left: 457px;
  line-height: 163.42%;
`;
const Div18 = styled.div`
  position: absolute;
  top: 428px;
  left: 572px;
  line-height: 163.42%;
`;
const Div19 = styled.div`
  position: absolute;
  top: 428px;
  left: 683px;
  line-height: 163.42%;
`;
const TransactionsChild14 = styled.div`
  position: absolute;
  top: 477px;
  left: 52px;
  border-radius: var(--br-100);
  background-color: var(--color-midnightblue);
  border: 1px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  width: 927px;
  height: 67px;
`;
const TransactionsChild15 = styled.img`
  position: absolute;
  top: 505px;
  left: 939px;
  width: 16px;
  height: 3.7px;
`;
const TransactionsChild16 = styled.img`
  position: absolute;
  top: 496px;
  left: 789px;
  border-radius: 215px;
  width: 91px;
  height: 27px;
`;
const Failed1 = styled.b`
  position: absolute;
  top: 501px;
  left: 816px;
  display: inline-block;
  width: 38px;
  height: 15px;
`;
const Div20 = styled.div`
  position: absolute;
  top: 503px;
  left: 67px;
`;
const Div21 = styled.div`
  position: absolute;
  top: 503px;
  left: 192px;
  line-height: 180%;
`;
const Amazon1 = styled.div`
  position: absolute;
  top: 503px;
  left: 454px;
  line-height: 163.42%;
`;
const Div22 = styled.div`
  position: absolute;
  top: 503px;
  left: 572px;
  line-height: 163.42%;
`;
const Div23 = styled.div`
  position: absolute;
  top: 503px;
  left: 683px;
  line-height: 163.42%;
`;
const TransactionsChild17 = styled.div`
  position: absolute;
  top: 552px;
  left: 52px;
  border-radius: var(--br-100);
  background-color: var(--color-midnightblue);
  border: 1px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  width: 927px;
  height: 67px;
`;
const TransactionsChild18 = styled.img`
  position: absolute;
  top: 580px;
  left: 939px;
  width: 16px;
  height: 3.7px;
`;
const TransactionsChild19 = styled.img`
  position: absolute;
  top: 571px;
  left: 789px;
  border-radius: 215px;
  width: 91px;
  height: 27px;
`;
const InProgress1 = styled.b`
  position: absolute;
  top: 576px;
  left: 802px;
  display: inline-block;
  width: 70px;
  height: 15px;
`;
const Bitcoin6Icon = styled.img`
  position: absolute;
  top: 575px;
  left: 356px;
  width: 16px;
  height: 16px;
  overflow: hidden;
`;
const Div24 = styled.div`
  position: absolute;
  top: 578px;
  left: 67px;
`;
const Div25 = styled.div`
  position: absolute;
  top: 578px;
  left: 192px;
  line-height: 180%;
`;
const Bitcoin4 = styled.div`
  position: absolute;
  top: 578px;
  left: 457px;
  line-height: 163.42%;
`;
const Div26 = styled.div`
  position: absolute;
  top: 578px;
  left: 572px;
  line-height: 163.42%;
`;
const Div27 = styled.div`
  position: absolute;
  top: 578px;
  left: 683px;
  line-height: 163.42%;
`;
const TransactionsChild20 = styled.div`
  position: absolute;
  top: 627px;
  left: 52px;
  border-radius: var(--br-100);
  background-color: var(--color-midnightblue);
  border: 1px solid var(--color-whitesmoke-300);
  box-sizing: border-box;
  width: 927px;
  height: 67px;
`;
const TransactionsChild21 = styled.img`
  position: absolute;
  top: 655px;
  left: 939px;
  width: 16px;
  height: 3.7px;
`;
const TransactionsChild22 = styled.img`
  position: absolute;
  top: 646px;
  left: 789px;
  border-radius: 215px;
  width: 91px;
  height: 27px;
`;
const Completed3 = styled.b`
  position: absolute;
  top: 651px;
  left: 802px;
  display: inline-block;
  width: 70px;
  height: 15px;
`;
const Div28 = styled.div`
  position: absolute;
  top: 653px;
  left: 67px;
`;
const Div29 = styled.div`
  position: absolute;
  top: 653px;
  left: 192px;
  line-height: 180%;
`;
const Bitcoin5 = styled.div`
  position: absolute;
  top: 653px;
  left: 457px;
  line-height: 163.42%;
`;
const Div30 = styled.div`
  position: absolute;
  top: 653px;
  left: 572px;
  line-height: 163.42%;
`;
const Div31 = styled.div`
  position: absolute;
  top: 653px;
  left: 683px;
  line-height: 163.42%;
`;
const TransactionsChild23 = styled.img`
  position: absolute;
  top: 502.4px;
  left: 356px;
  width: 16px;
  height: 10.9px;
`;
const TransactionsChild24 = styled.img`
  position: absolute;
  top: 656px;
  left: 356px;
  width: 16px;
  height: 10.9px;
`;
const TransactionsChild25 = styled.img`
  position: absolute;
  height: 6.74%;
  width: 7.14%;
  top: 17.52%;
  right: 0.88%;
  bottom: 75.74%;
  left: 91.98%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: contain;
`;
const PlaceNew = styled.div`
  position: absolute;
  top: 150.6px;
  left: 948px;
  font-size: var(--font-size-10);
  text-align: center;
`;
const Delete = styled.div`
  position: absolute;
  top: 176px;
  left: 948px;
  font-size: var(--font-size-10);
  color: var(--color-gray);
  text-align: center;
`;
const GroupItem = styled.div`
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
  top: 12px;
  left: 41px;
  display: inline-block;
  width: 52px;
  height: 17px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 738px;
  left: 445px;
  width: 134px;
  height: 42px;
  font-size: var(--font-size-10);
`;
const Transactions3 = styled.div`
  position: absolute;
  top: 244px;
  left: 375px;
  width: 1023px;
  height: 816px;
`;
const Transactions4 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1507px;
  height: 1190px;
`;
const TransactionsRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  height: 1190px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-12);
  color: var(--color-white);
  font-family: var(--font-poppins);
`;

const Transactions1: FunctionComponent = () => {
  return (
    <TransactionsRoot>
      <Transactions4>
        <TransactionsChild />
        <SideNav2 />
        <TriangleParent>
          <TriangleIcon alt="" src="/triangle.svg" />
          <Accounts>Accounts</Accounts>
          <NikeS>RAMON RIDWAN</NikeS>
          <GroupChild alt="" src="/line-22.svg" />
        </TriangleParent>
        <CampaignsManagement>User Management Transactions</CampaignsManagement>
        <Transactions2>Transactions</Transactions2>
        <Transactions3>
          <TransactionsItem />
          <TransactionsInner />
          <GroupIcon alt="" src="/group-96-4.svg" />
          <RectangleIcon alt="" src="/rectangle-291.svg" />
          <Completed>Completed</Completed>
          <Bitcoin2Icon alt="" src="/bitcoin-21.svg" />
          <Date1>Date</Date1>
          <Div>14/01/2019</Div>
          <Div1>12345678</Div1>
          <Bitcoin>Bitcoin</Bitcoin>
          <Div2>$100</Div2>
          <Div3>#18000</Div3>
          <RectangleDiv />
          <TransactionsChild1 alt="" src="/group-96-4.svg" />
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
          <Bitcoin4Icon alt="" src="/bitcoin-21.svg" />
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
          <TransactionsChild9 alt="" src="/group-2691.svg" />
          <TransactionsChild10 alt="" src="/group-2691.svg" />
          <TransactionsChild11 />
          <TransactionsChild12 alt="" src="/group-96-4.svg" />
          <TransactionsChild13 alt="" src="/rectangle-291.svg" />
          <Completed2>Completed</Completed2>
          <Bitcoin5Icon alt="" src="/bitcoin-21.svg" />
          <Div16>14/01/2019</Div16>
          <Div17>12345678</Div17>
          <Bitcoin3>Bitcoin</Bitcoin3>
          <Div18>$100</Div18>
          <Div19>#18000</Div19>
          <TransactionsChild14 />
          <TransactionsChild15 alt="" src="/group-96-4.svg" />
          <TransactionsChild16 alt="" src="/rectangle-294.svg" />
          <Failed1>Failed</Failed1>
          <Div20>14/01/2019</Div20>
          <Div21>12345678</Div21>
          <Amazon1>Amazon</Amazon1>
          <Div22>$100</Div22>
          <Div23>#18000</Div23>
          <TransactionsChild17 />
          <TransactionsChild18 alt="" src="/group-96-4.svg" />
          <TransactionsChild19 alt="" src="/rectangle-296.svg" />
          <InProgress1>In Progress</InProgress1>
          <Bitcoin6Icon alt="" src="/bitcoin-21.svg" />
          <Div24>14/01/2019</Div24>
          <Div25>12345678</Div25>
          <Bitcoin4>Bitcoin</Bitcoin4>
          <Div26>$100</Div26>
          <Div27>#18000</Div27>
          <TransactionsChild20 />
          <TransactionsChild21 alt="" src="/group-96-4.svg" />
          <TransactionsChild22 alt="" src="/rectangle-291.svg" />
          <Completed3>Completed</Completed3>
          <Div28>14/01/2019</Div28>
          <Div29>12345678</Div29>
          <Bitcoin5>Bitcoin</Bitcoin5>
          <Div30>$100</Div30>
          <Div31>#18000</Div31>
          <TransactionsChild23 alt="" src="/group-2691.svg" />
          <TransactionsChild24 alt="" src="/group-2691.svg" />
          <TransactionsChild25 alt="" src="/group-16@2x.png" />
          <PlaceNew>Place New</PlaceNew>
          <Delete>Delete</Delete>
          <RectangleParent>
            <GroupItem />
            <ViewMore>View More</ViewMore>
          </RectangleParent>
        </Transactions3>
      </Transactions4>
      <Nav1
        navFlex="unset"
        navTop="0px"
        navPosition="absolute"
        group364="/group-364.svg"
      />
    </TransactionsRoot>
  );
};

export default Transactions1;