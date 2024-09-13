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
import { ClassNames } from "@emotion/react";

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
  mnsMenu: Array<Menu | string>;
  HRISMenu: Array<Menu | string>;
  CoPortalMenu: Array<Menu | string>
}

const initialState: SideMenuState = {
  menu: {
    mainMenu: [
      "DASHBOARDS",
      {
        image: MNSPortal,
        pathname: "http://10.24.3.55/WebPortal/Home1/Index/0",
        title: "M&S Portal",
      },
      {
        image: FAMS,
        pathname: "http://10.24.3.55/WebPortal/Home1/Index/1",
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
        pathname: "http://10.24.3.55/WebPortal/Home1/Index/4",
        title: "Lease Management",
      },
      {
        image: ISSDI,
        pathname: "http://10.24.3.55/WebPortal/Home1/Index/5",
        title: "ISSDI",
      },
      {
        image: MNSCare,
        pathname: "/mns-care",
        title: "MNS Care",
      },
      {
        image: EcomPortal,
        pathname: "http://10.24.3.55/WebPortal/Home1/Index/8",
        title: "Ecom Portal",
      },
      "External Application",
      {
        image: Outlook,
        pathname: "https://login.microsoftonline.com/common/oauth2/authorize?client_id=00000002-0000-0ff1-ce00-000000000000&redirect_uri=https%3a%2f%2foutlook.office365.com%2fowa%2f&resource=00000002-0000-0ff1-ce00-000000000000&response_mode=form_post&response_type=code+id_token&scope=openid&msafed=1&msaredir=1&client-request-id=b3331a2e-3bfa-7fe1-0a16-dd16b2d01c8c&protectedtoken=true&claims=%7b%22id_token%22%3a%7b%22xms_cc%22%3a%7b%22values%22%3a%5b%22CP1%22%5d%7d%7d%7d&domain_hint=mnscorp.net&nonce=638574912985750846.73c72cff-0900-4bdf-a65e-0cfd51b8d725&state=DYvJEYAgEMBAG7ARYEGWhXI45Cc46oztu48kr0ghxMosjASWoLBHJJ-sS1yE6IOmvZKrvStIAMqX1lUOeCiovaEtsZFDye9m5pfNOZ4670uP4_0B",
        title: "Outlook",
        // badge: 4,
      },
      {
        image: SAP,
        pathname: "http://ecc-a-eap-isap.webapps.marksandspencer.com/sap/bc/gui/sap/its/z_wosm?sap-client=900",
        title: "SAP",
      },
      {
        image: BIPortal,
        pathname: "http://ep-j-bjp-isap.webapps.marksandspencer.com/irj/portal",
        title: "BI Portal",
      },
      {
        image: Inmoment,
        pathname: "https://www.inmoment.com/report/app?service=page&page=Login",
        title: "Inmoment",
      },
      {
        image: RetailCloud,
        pathname: "https://mands.retailcloud.net/public_first_login.cfm",
        title: "Retail Cloud",
      },
      {
        image: FoofallReport,
        pathname: "http://10.24.3.127:90/htareports/Login.aspx",
        title: "FootFall Reports",
      },
      {
        image: HRIS,
        pathname: "/hris",
        title: "HRIS",
      },
      {
        image: StorePortal,
        pathname: "https://signin.wooqer.com/idp/profile/SAML2/POST/SSO;jsessionid=node0oxvvt3txqg9mww41k794bpmj11554410.node0?execution=e1s1",
        title: "Wooqer",
      },
      {
        image: DCScanning,
        pathname: "http://10.24.128.23/mnsutility",
        title: "DC Scanning App",
      },
      {
        image: ITSupport,
        pathname: "https://10.24.3.61/",
        title: "One IT Support",
      },
      {
        image: StorePortal,
        pathname: "https://msripl.in/lander",
        title: "Member Login",
      },
      {
        image: Qlikview,
        pathname: "http://10.24.3.41/qlikview/index.htm",
        title: "Qlikview",
      },
      {
        image: ItemReservation,
        pathname: "http://10.24.3.55/Views/Shared/Error.cshtml?aspxerrorpath=/ItemsReservationPortal",
        title: "Item Reservation",
      },
      "Administrator Application",
      {
        image: Administration,
        pathname: "http://10.24.3.55/WebPortal/Home1/Index/6",
        title: "Administrator",
      },
    ],
    storeMenu: [
      "Store Portal", 
      {
        image: SearchCustomer,
        pathname: "/store-portal",
        title: "Dashboard",       
      },     
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
            pathname: "/store-portal/loyalty-enrollment",
            title: "Loyalty Enrollment",
          },
          {
            pathname: "/store-portal/missed-loyalty",
            title: "Missed Loyalty Opp",
          },
          {
            pathname: "/store-portal/active-promotion",
            title: "Active Promotions",
          },
          {
            pathname: "/store-portal/transaction-summery",
            title: "Transaction Summary",
          },
          {
            pathname: "/store-portal/one-piece-transaction-summery",
            title: "One Pieces Transaction",
          },          
        ],
      },
      {
        image: SalesTracker,
        title: "Sales Tracker",
        subMenu: [
          {
            pathname: "/store-portal/sales-tracker-old-view",
            title: "Old View",
          },
          {
            pathname: "store-portal/sales-tracker-new-view",
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
    mnsMenu: [
      "MNS Care", 
      {
        image: SearchCustomer,
        pathname: "/mns-care",
        title: "Dashboard",        
      },     
      {
        image: SearchCustomer,
        title: "Search UPC",        
      },
      {
        image: SearchCustomer,
        title: "Search Gift Card",        
      },
    ],
    HRISMenu: [
      "HRIMS", 
      {
        image: SearchCustomer,
        pathname: "/hris",
        title: "Dashboard",        
      },     
      {
        image: SearchCustomer,
        title: "User Management",        
      },      
    ],
    CoPortalMenu: [
      "HRIMS", 
      {
        image: SearchCustomer,
        pathname: "/co-portal",
        title: "Dashboard",        
      },     
      {
        image: SearchCustomer,
        pathname: "/request-application",
        title: "Request & Maintenance Application",        
      }, 
      {
        image: SearchCustomer,
        pathname: "/co-portal/sales-tracker",
        title: "Sales Tracker",        
      }, 
      {
        image: SearchCustomer,
        pathname: "co-portal/sales-tracker-old",
        title: "Sales Tracker Old",        
      },    
    ]
  },
  mainMenu: [],
  storeMenu: [],
  mnsMenu: [],
  HRISMenu: [],
  CoPortalMenu: []
};

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {},
});

//export const selectSideMenu = (state: RootState) => state.sideMenu.menu;
export const selectSideMenu = (state: RootState) => state.sideMenu.menu.mainMenu;
export const selectStoreMenu = (state: RootState) => state.sideMenu.menu.storeMenu;
export const selectMNSMenu = (state: RootState) => state.sideMenu.menu.mnsMenu;
export const selectHRISMenu = (state: RootState) => state.sideMenu.menu.HRISMenu;
export const selectCOPortalMenu = (state: RootState) => state.sideMenu.menu.CoPortalMenu;

export default sideMenuSlice.reducer;
