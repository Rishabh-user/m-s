import { useRoutes } from "react-router-dom";
import MainDashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Departments from "../pages/Departments";
import AddUser from "../pages/AddUser";
import ProfileOverview from "../pages/ProfileOverview";
import Settings from "../pages/Settings";
import Login from "../pages/Login";
import Notification from "../pages/Notification";
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
import ActivePromotion from "@/portals/store-portal/active-promotion";
import MNSCare from "@/portals/mns-care";
import HRIMS from "@/portals/HRIS";

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
          path: "mns-care",
          element: <MNSCare />,
        },
        {
          path: "hris",
          element: <HRIMS />,
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
          path: "store-portal/active-promotion",
          element: <ActivePromotion />,
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
