import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { icons } from "@/components/Base/Lucide";
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
  menu: Array<Menu | string>;
}

const initialState: SideMenuState = {
  menu: [
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
      image: FoofallReport ,
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
    // {
    //   icon: "CakeSlice",
    //   pathname: "/departments",
    //   title: "Departments",
    // },
    // {
    //   icon: "PackagePlus",
    //   pathname: "/add-user",
    //   title: "Add User",
    // },
    // "PERSONAL DASHBOARD",
    // {
    //   icon: "Presentation",
    //   pathname: "/profile-overview",
    //   title: "Profile Overview",
    // },
    // {
    //   icon: "CalendarRange",
    //   pathname: "/profile-overview?page=events",
    //   title: "Events",
    // },
    // {
    //   icon: "Medal",
    //   pathname: "/profile-overview?page=achievements",
    //   title: "Achievements",
    // },
    // {
    //   icon: "TabletSmartphone",
    //   pathname: "/profile-overview?page=contacts",
    //   title: "Contacts",
    // },
    // {
    //   icon: "Snail",
    //   pathname: "/profile-overview?page=default",
    //   title: "Default",
    // },
    // "GENERAL SETTINGS",
    // {
    //   icon: "Briefcase",
    //   pathname: "/settings",
    //   title: "Profile Info",
    // },
    // {
    //   icon: "MailCheck",
    //   pathname: "/settings?page=email-settings",
    //   title: "Email Settings",
    // },
    // {
    //   icon: "Fingerprint",
    //   pathname: "/settings?page=security",
    //   title: "Security",
    // },
    // {
    //   icon: "Radar",
    //   pathname: "/settings?page=preferences",
    //   title: "Preferences",
    // },
    // {
    //   icon: "DoorOpen",
    //   pathname: "/settings?page=two-factor-authentication",
    //   title: "Two-factor Authentication",
    // },
    // {
    //   icon: "Keyboard",
    //   pathname: "/settings?page=device-history",
    //   title: "Device History",
    // },
    // {
    //   icon: "Ticket",
    //   pathname: "/settings?page=notification-settings",
    //   title: "Notification Settings",
    // },
    // {
    //   icon: "BusFront",
    //   pathname: "/settings?page=connected-services",
    //   title: "Connected Services",
    // },
    // {
    //   icon: "Podcast",
    //   pathname: "/settings?page=social-media-links",
    //   title: "Social Media Links",
    // },
    // {
    //   icon: "PackageX",
    //   pathname: "/settings?page=account-deactivation",
    //   title: "Account Deactivation",
    // },
    // "ACCOUNT",
    // {
    //   icon: "PercentSquare",
    //   pathname: "/billing",
    //   title: "Billing",
    // },
    // {
    //   icon: "DatabaseZap",
    //   pathname: "/invoice",
    //   title: "Invoice",
    // },
    // "E-COMMERCE",
    // {
    //   icon: "BookMarked",
    //   pathname: "/categories",
    //   title: "Categories",
    // },
    // {
    //   icon: "Compass",
    //   pathname: "/add-product",
    //   title: "Add Product",
    // },
    // {
    //   icon: "Table2",
    //   pathname: "/products",
    //   title: "Products",
    //   subMenu: [
    //     {
    //       icon: "LayoutPanelTop",
    //       pathname: "/product-list",
    //       title: "Product List",
    //     },
    //     {
    //       icon: "LayoutPanelLeft",
    //       pathname: "/product-grid",
    //       title: "Product Grid",
    //     },
    //   ],
    // },
    // {
    //   icon: "SigmaSquare",
    //   pathname: "/transactions",
    //   title: "Transactions",
    //   subMenu: [
    //     {
    //       icon: "DivideSquare",
    //       pathname: "/transaction-list",
    //       title: "Transaction List",
    //     },
    //     {
    //       icon: "PlusSquare",
    //       pathname: "/transaction-detail",
    //       title: "Transaction Detail",
    //     },
    //   ],
    // },
    // {
    //   icon: "FileArchive",
    //   pathname: "/sellers",
    //   title: "Sellers",
    //   subMenu: [
    //     {
    //       icon: "FileImage",
    //       pathname: "/seller-list",
    //       title: "Seller List",
    //     },
    //     {
    //       icon: "FileBox",
    //       pathname: "/seller-detail",
    //       title: "Seller Detail",
    //     },
    //   ],
    // },
    // {
    //   icon: "Goal",
    //   pathname: "/reviews",
    //   title: "Reviews",
    // },
    // "AUTHENTICATIONS",
    // {
    //   icon: "BookKey",
    //   pathname: "login",
    //   title: "Login",
    // },
    // {
    //   icon: "BookLock",
    //   pathname: "register",
    //   title: "Register",
    // },
    // "COMPONENTS",
    // {
    //   icon: "LayoutPanelLeft",
    //   title: "Table",
    //   subMenu: [
    //     {
    //       icon: "FlipVertical",
    //       pathname: "/regular-table",
    //       title: "Regular Table",
    //     },
    //     {
    //       icon: "FlipHorizontal",
    //       pathname: "/tabulator",
    //       title: "Tabulator",
    //     },
    //   ],
    // },
    // {
    //   icon: "MemoryStick",
    //   title: "Overlay",
    //   subMenu: [
    //     {
    //       icon: "MenuSquare",
    //       pathname: "/modal",
    //       title: "Modal",
    //     },
    //     {
    //       icon: "Newspaper",
    //       pathname: "/slideover",
    //       title: "Slide Over",
    //     },
    //     {
    //       icon: "PanelBottom",
    //       pathname: "/notification",
    //       title: "Notification",
    //     },
    //   ],
    // },
    // {
    //   icon: "Package2",
    //   pathname: "/tab",
    //   title: "Tab",
    // },
    // {
    //   icon: "Pocket",
    //   pathname: "/accordion",
    //   title: "Accordion",
    // },
    // {
    //   icon: "PlusSquare",
    //   pathname: "/button",
    //   title: "Button",
    // },
    // {
    //   icon: "Presentation",
    //   pathname: "/alert",
    //   title: "Alert",
    // },
    // {
    //   icon: "ShieldEllipsis",
    //   pathname: "/progress-bar",
    //   title: "Progress Bar",
    // },
    // {
    //   icon: "Clapperboard",
    //   pathname: "/tooltip",
    //   title: "Tooltip",
    // },
    // {
    //   icon: "FlipVertical",
    //   pathname: "/dropdown",
    //   title: "Dropdown",
    // },
    // {
    //   icon: "FileType2",
    //   pathname: "/typography",
    //   title: "Typography",
    // },
    // {
    //   icon: "Aperture",
    //   pathname: "/icon",
    //   title: "Icon",
    // },
    // {
    //   icon: "Droplets",
    //   pathname: "/loading-icon",
    //   title: "Loading Icon",
    // },
    // {
    //   icon: "GalleryHorizontalEnd",
    //   pathname: "/regular-form",
    //   title: "Regular Form",
    // },
    // {
    //   icon: "Microwave",
    //   pathname: "/datepicker",
    //   title: "Datepicker",
    // },
    // {
    //   icon: "Disc3",
    //   pathname: "/tom-select",
    //   title: "Tom Select",
    // },
    // {
    //   icon: "Sandwich",
    //   pathname: "/file-upload",
    //   title: "File Upload",
    // },
    // {
    //   icon: "HopOff",
    //   pathname: "/wysiwyg-editor",
    //   title: "Wysiwyg Editor",
    // },
    // {
    //   icon: "ClipboardType",
    //   pathname: "/validation",
    //   title: "Validation",
    // },
    // {
    //   icon: "PieChart",
    //   pathname: "/chart",
    //   title: "Chart",
    // },
    // {
    //   icon: "KanbanSquare",
    //   pathname: "/slider",
    //   title: "Slider",
    // },
    // {
    //   icon: "Image",
    //   pathname: "/image-zoom",
    //   title: "Image Zoom",
    // },
  ],
};

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {},
});

export const selectSideMenu = (state: RootState) => state.sideMenu.menu;

export default sideMenuSlice.reducer;
