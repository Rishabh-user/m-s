import { useRoutes } from "react-router-dom";
import MainDashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Departments from "../pages/Departments";
import AddUser from "../pages/AddUser";
import ProfileOverview from "../pages/ProfileOverview";
import Settings from "../pages/Settings";
import Billing from "../pages/Billing";
import Invoice from "../pages/Invoice";
import Categories from "../pages/Categories";
import AddProduct from "../pages/AddProduct";
import ProductList from "../pages/ProductList";
import ProductGrid from "../pages/ProductGrid";
import TransactionList from "../pages/TransactionList";
import TransactionDetail from "../pages/TransactionDetail";
import SellerList from "../pages/SellerList";
import SellerDetail from "../pages/SellerDetail";
import Reviews from "../pages/Reviews";
import Inbox from "../pages/Inbox";
import FileManagerList from "../pages/FileManagerList";
import FileManagerGrid from "../pages/FileManagerGrid";
import Chat from "../pages/Chat";
import Calendar from "../pages/Calendar";
import PointOfSale from "../pages/PointOfSale";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Creative from "../pages/Creative";
import Dynamic from "../pages/Dynamic";
import Interactive from "../pages/Interactive";
import RegularTable from "../pages/RegularTable";
import Tabulator from "../pages/Tabulator";
import Modal from "../pages/Modal";
import Slideover from "../pages/Slideover";
import Notification from "../pages/Notification";

import Alert from "../pages/Alert";
import ProgressBar from "../pages/ProgressBar";
import Tooltip from "../pages/Tooltip";
import Dropdown from "../pages/Dropdown";

import Icon from "../pages/Icon";
import LoadingIcon from "../pages/LoadingIcon";
import RegularForm from "../pages/RegularForm";
import Datepicker from "../pages/Datepicker";
import TomSelect from "../pages/TomSelect";
import FileUpload from "../pages/FileUpload";
import WysiwygEditor from "../pages/WysiwygEditor";
import Validation from "../pages/Validation";
import Chart from "../pages/Chart";

import ImageZoom from "../pages/ImageZoom";
import LandingPage from "../pages/LandingPage";

import Layout from "../themes";
import StorePortal from '@/portals/store-portal'
import LoyaltyCustomer from "@/portals/store-portal/loyalty-customer";
import LoyaltyEnrollment from "@/portals/store-portal/loyalty-enrollment";
import MissedLoyaltyOpportunity from "@/portals/store-portal/missed-loyalty-opp";
import SalesTrackerOldView from "@/portals/store-portal/sales-tracker-old-view";
import SalesTrackerNewView from "@/portals/store-portal/sales-tracker-new-view";
import TransactionSummery from "@/portals/store-portal/transaction-summery";
import OnePieceTransactionSummery from "@/portals/store-portal/one-piece-transaction-summery";
import ErrorPage from "@/pages/404Page/error-404";

function Router() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <MainDashboard />,
        },
        {
          path: "store-portal",
          element: <StorePortal />,
        },
        {
          path: "store-portal/loyalty-customer",
          element: <LoyaltyCustomer />,
        },
        {
          path: "store-portal/loyalty-enrollment",
          element: <LoyaltyEnrollment />,
        },
        {
          path: "store-portal/missed-loyalty",
          element: <MissedLoyaltyOpportunity />,
        },
        {
          path: "store-portal/transaction-summery",
          element: <TransactionSummery />,
        },
        {
          path: "store-portal/one-piece-transaction-summery",
          element: <OnePieceTransactionSummery />,
        },
        {
          path: "store-portal/sales-tracker-old-view",
          element: <SalesTrackerOldView />,
        },
        {
          path: "store-portal/sales-tracker-new-view",
          element: <SalesTrackerNewView />,
        },
        
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "departments",
          element: <Departments />,
        },
        {
          path: "add-user",
          element: <AddUser />,
        },
        {
          path: "profile-overview",
          element: <ProfileOverview />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
        
        {
          path: "notification",
          element: <Notification />,
        },       
       
      ],
    },
    
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];

  return useRoutes(routes);
}

export default Router;
