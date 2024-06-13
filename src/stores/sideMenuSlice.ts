import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import MNSPortal from '../assets/images/icons/ms-portal.png';
import FAMS from '../assets/images/icons/FAMS.png';
import StorePortal from '../assets/images/icons/store-portal.png';
import CoPortal from '../assets/images/icons/Co-portal.png'
import EcomPortal from '../assets/images/icons/ecom-portal.png'
import ISSDI from '../assets/images/icons/issdi.png'
import MNSCare from '../assets/images/icons/MNS-care.png'
import LeaseManagement from '../assets/images/icons/Lease-Management.png'
import Outlook from '../assets/images/icons/Outlook.png'
import BIPortal from '../assets/images/icons/BI.png'
import Inmoment from '../assets/images/icons/Inmoment.png'
import RetailCloud from '../assets/images/icons/Retail.png'
import SAP from '../assets/images/icons/SAP.png'
import FoofallReport from '../assets/images/icons/footfall-report.png'
import HRIS from '../assets/images/icons/HRIS.png'
import DCScanning from '../assets/images/icons/DC-Scanning.png'
import ITSupport from '../assets/images/icons/IT-Support.png'
import Qlikview from '../assets/images/icons/qlikview.png'
import ItemReservation from '../assets/images/icons/reservesion.png'
import Administration from '../assets/images/icons/Administrator.png'
import SearchCustomer from '../assets/images/icons/search-customer.png';
import Reports from '../assets/images/icons/reports.png';
import SalesTracker from '../assets/images/icons/sales-tracker.png';
import NPSDashboard from '../assets/images/icons/NPS-dashboard.png';
import CaptureFitData from '../assets/images/icons/Capture-Bra-FitData.png'

export interface Menu {
  image?: string;
  //icon: keyof typeof icons;
  title: string;
  badge?: number;
  pathname?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}


export interface SideMenuState {
  menu: any;
  mainMenu: Array<Menu | string>;
  storeMenu: Array<Menu | string>;
}

const initialState: SideMenuState = {
  menu: {
    mainMenu: [
      "DASHBOARDS",
      {
        image: MNSPortal,
        pathname: "/",
        title: "M&S Portal",
      },
      {
        image: FAMS,
        pathname: "/fams",
        title: "FAMS",
      },
      {
        image: StorePortal,
        pathname: "/store-portal",
        title: "Store Portal",
      },
      {
        image: CoPortal,
        pathname: "/co-portal",
        title: "Co Portal",
      },
      {
        image: LeaseManagement,
        pathname: "/lease-management",
        title: "Lease Management",
      },
      {
        image: ISSDI,
        pathname: "/issdi",
        title: "ISSDI",
      },
      {
        image: MNSCare,
        pathname: "/mns-care",
        title: "MNS Care",
      },
      {
        image: EcomPortal,
        pathname: "/ecom-portal",
        title: "Ecom Portal",
      },
      "External Application",
      {
        image: Outlook,
        pathname: "/outlook",
        title: "Outlook",
        // badge: 4,
      },
      {
        image: SAP,
        pathname: "/sap",
        title: "SAP",
      },
      {
        image: BIPortal,
        pathname: "/bi-portal",
        title: "BI Portal",
      },
      {
        image: Inmoment,
        pathname: "/inmoment",
        title: "Inmoment",
      },
      {
        image: RetailCloud,
        pathname: "/reatil-cloud",
        title: "Retail Cloud",
      },
      {
        image: FoofallReport,
        pathname: "/football-report",
        title: "FootFall Reports",
      },
      {
        image: HRIS,
        pathname: "/hris",
        title: "HRIS",
      },
      {
        image: StorePortal,
        pathname: "/wooqer",
        title: "Wooqer",
      },
      {
        image: DCScanning,
        pathname: "/dc-scanning-app",
        title: "DC Scanning App",
      },
      {
        image: ITSupport,
        pathname: "/one-it-support",
        title: "One IT Support",
      },
      {
        image: StorePortal,
        pathname: "/member-login",
        title: "Member Login",
      },
      {
        image: Qlikview,
        pathname: "/qlikview",
        title: "Qlikview",
      },
      {
        image: ItemReservation,
        pathname: "/item-reservation",
        title: "Item Reservation",
      },
      "Administrator Application",
      {
        image: Administration,
        pathname: "/administrator",
        title: "Administrator",
      },
    ],
    storeMenu: [
      "Store Portal",      
      {
        image: SearchCustomer,
        title: "Search Customer",
        subMenu: [
          {
            pathname: "store-portal/loyalty-customer",
            title: "Loyalty Customers",
          }          
        ],
      },
      {
        image: Reports,
        title: "Reports",
        subMenu: [
          {
            pathname: "store-portal/loyalty-enrollment",
            title: "Loyalty Enrollment",
          },
          {
            pathname: "store-portal/missed-loyalty",
            title: "Missed Loyalty Opp",
          },
          {
            pathname: "store-portal/loyalty-customer",
            title: "Active Promotions",
          },
          {
            pathname: "/loyalty-customer",
            title: "Transaction Summary",
          },
          {
            pathname: "/loyalty-customer",
            title: "One Pieces Transaction",
          },          
        ],
      },
      {
        image: SalesTracker,
        title: "Sales Tracker",
        subMenu: [
          {
            pathname: "/loyalty-customer",
            title: "Old View",
          },
          {
            pathname: "/store-portal",
            title: "New View"
          }         
        ],
      },
      {
        image: NPSDashboard,
        pathname: "/store-portal",
        title: "NPS Dashboard",        
      },
      {
        image: CaptureFitData,
        pathname: "/store-portal",
        title: "Capture Bra Fit Data",        
      },
    ],
  },
  mainMenu: [],
  storeMenu: []
};

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {},
});

//export const selectSideMenu = (state: RootState) => state.sideMenu.menu;
export const selectSideMenu = (state: RootState) => state.sideMenu.menu.mainMenu;
export const selectStoreMenu = (state: RootState) => state.sideMenu.menu.storeMenu;

export default sideMenuSlice.reducer;
