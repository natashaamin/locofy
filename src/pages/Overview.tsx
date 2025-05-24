import { FunctionComponent } from "react";
import styled from "styled-components";
import SideNav1 from "../components/SideNav1";
import Statistics from "../components/Statistics";
import ConversionRate from "../components/ConversionRate";
import Transactions from "../components/Transactions";
import Wallet from "../components/Wallet1";
import Status from "../components/Status1";
import Nav from "../components/Nav";

const Base = styled.div`
  position: absolute;
  top: 83px;
  left: 0px;
  background-color: var(--color-midnightblue);
  width: 1500px;
  height: 2429px;
`;
const Overview1 = styled.b`
  position: absolute;
  top: 183px;
  left: 375px;
  font-size: var(--font-size-16);
  display: inline-block;
  width: 99px;
  height: 23px;
`;
const GroupIcon = styled.img`
  position: absolute;
  top: 181px;
  left: 1379.8px;
  width: 18.3px;
  height: 19.2px;
`;
const CampaignsManagement = styled.b`
  position: absolute;
  top: calc(50% - 1477.5px);
  left: 25%;
  white-space: pre-wrap;
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
  height: 0.56%;
  width: 13.45%;
  top: 3.98%;
  right: 6.81%;
  bottom: 95.46%;
  left: 79.73%;
  text-align: center;
`;
const Overview2 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1500px;
  height: 3219px;
`;
const OverviewRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  height: 2509px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-12);
  color: var(--color-white);
  font-family: var(--font-poppins);
`;

const Overview: FunctionComponent = () => {
  return (
    <OverviewRoot>
      <Overview2>
        <Base />
        <SideNav1 />
        <Statistics />
        <ConversionRate />
        <Transactions />
        <Overview1>Overview</Overview1>
        <GroupIcon alt="" src="/group-1.svg" />
        <CampaignsManagement>
          User Management System Overview
        </CampaignsManagement>
        <TriangleParent>
          <TriangleIcon alt="" src="/triangle.svg" />
          <Accounts>Accounts</Accounts>
          <NikeS>RAMON RIDWAN</NikeS>
          <GroupChild alt="" src="/line-22.svg" />
        </TriangleParent>
        <Wallet />
        <Status />
        <Nav
          group364="/group-3641.svg"
          showRectangle
          showRectangleDiv
          showGroupDiv
        />
      </Overview2>
    </OverviewRoot>
  );
};

export default Overview;