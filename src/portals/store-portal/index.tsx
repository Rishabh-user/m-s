
import { getColor } from "@/utils/colors";
import ReportDonutChart from "@/components/ReportDonutChart";
import ReportPieChart from "@/components/ReportPieChart";
import ReportBarChart5 from "@/components/ReportBarChart5";
import _ from "lodash";
import Breadcrumb from "@/components/Base/Breadcrumb";
import SearchCustomer from '../../assets/images/icons/search-customer.png';
import Reports from '../../assets/images/icons/reports.png';
import SalesTracker from '../../assets/images/icons/sales-tracker.png';
import NPSDashboard from '../../assets/images/icons/NPS-dashboard.png'
import CaptureData from '../../assets/images/icons/Capture-Bra-FitData.png'

import { PieChart } from "lucide-react";
import { Link } from "react-router-dom";

function Main() {

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6  mt-15">
      <div className="col-span-12">        
        {/* BEGIN: Breadcrumb */}
        <Breadcrumb className="flex-1 hidden xl:block">
          <Breadcrumb.Link to="/" className="text-white">Dashboards</Breadcrumb.Link>
          <Breadcrumb.Link to="/store-portal" className="text-white">Store Portal</Breadcrumb.Link>
        </Breadcrumb>
        {/* END: Breadcrumb */}
        <div className="grid grid-cols-12 gap-5 mt-3.5">          
          <div className="flex flex-col col-span-12 p-5 md:col-span-6 sm:col-span-6 2xl:col-span-4 box ">            
            <div className="flex items-center">             
              <div className="ml-4">
                <div className="text-base font-medium ">Account Downgraded</div>
                <div className="mt-0.5">Below Information is Based on Transactions</div>
              </div>
            </div>
            <div className="relative mt-5 mb-6 overflow-hidden">                           
              <ReportPieChart className="relative z-10" height={150} />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-5">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-success"></div>
                <div className="ml-2.5">Premier to Club: <span>1.81</span></div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-danger"></div>
                <div className="ml-2.5">Elite to Premier: 16</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col col-span-12 p-5 md:col-span-6 sm:col-span-6 2xl:col-span-4 box ">           
            <div className="flex items-center">              
              <div className="ml-4">
                <div className="text-base font-medium">
                    Account Upgraded
                </div>
                <div className="mt-0.5">
                    Below Information is Based on Transactions
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden account-upgrade colored-box">              
              <div className="grid grid-cols-12 gap-5 mt-3.5 ">
                <div className="flex flex-col col-span-12 md:col-span-4 text-white">
                    <h3>290</h3>
                    <div className="mt-0.5">Club to Premier</div>
                </div>
                <div className="flex flex-col col-span-12 md:col-span-4 text-white">
                    <h3>03</h3>
                    <div className="mt-0.5">Club to Elite</div>
                </div>
                <div className="flex flex-col col-span-12 md:col-span-4 text-white">
                    <h3>49</h3>
                    <div className="mt-0.5">Premier to Elite</div>
                </div>
              </div>
            </div>            
          </div>
          <div className="flex flex-col col-span-12 p-5 md:col-span-6 sm:col-span-6 2xl:col-span-4 box ">           
            <div className="flex items-center">              
              <div className="ml-4">
                <div className="text-base font-medium">
                    Gift Voucher Assigned
                </div>
                <div className="mt-0.5">
                    Below Information is Based on Transactions
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden colored-box  gift-voucher">
            <div className="grid grid-cols-12 gap-5 mt-3.5 ">
                <div className="flex flex-col col-span-12 md:col-span-4 text-white">
                    <h3>290</h3>
                    <div className="mt-0.5">Club to Premier</div>
                </div>
                <div className="flex flex-col col-span-12 md:col-span-4 text-white">
                    <h3>03</h3>
                    <div className="mt-0.5">Club to Elite</div>
                </div>
                <div className="flex flex-col col-span-12 md:col-span-4 text-white">
                    <h3>49</h3>
                    <div className="mt-0.5">Premier to Elite</div>
                </div>
              </div>
            </div>            
          </div>
          <div className="flex flex-col col-span-12 p-5 md:col-span-6 sm:col-span-6 2xl:col-span-4 box ">
            <div className="flex items-center">
              <div className="ml-4">
                <div className="text-base font-medium">
                    Welcome Voucher
                </div>
                <div className="mt-0.5">Below Information is Based on Transactions</div>
              </div>
            </div>
            <div className="relative mt-5 mb-6">
              <ReportDonutChart className="relative z-10" height={200} />
              
            </div>
          </div>
          <div className="flex flex-col col-span-12 p-5 md:col-span-12 sm:col-span-12 2xl:col-span-8 box ">
            <div className="flex items-center">
              <div className="ml-4">
                <div className="text-base font-medium">
                    Lot Run Date
                </div>
                <div className="mt-0.5">Below Information is Based on Transactions</div>
              </div>
            </div>
            <div className="relative mt-5 mb-6">
              <ReportBarChart5 className="relative z-10" height={200} />
              
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12">
        <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium">Store Portal</div>          
        </div>
        <div className="mt-3.5 grid grid-cols-12 gap-y-4 gap-x-4">          
          <div className="flex-col col-span-12 md:col-span-3">
            <Link to="/store-portal/loyalty-customer">
              <div className="relative p-5 box text-center">
                  <div className="">
                      <img loading="lazy" alt="MNSPortal" src={SearchCustomer} className="m-auto" width={100} height={100} />
                  </div>
                  <div className="mt-5">
                    <div className="text-base font-medium">Search Customer</div>              
                  </div>            
              </div>
            </Link>
          </div>
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <div className="">
                    <img loading="lazy" alt="FAMS" src={Reports} className="m-auto" width={100} height={100} />
                </div>
                <div className="mt-5">
                  <div className="text-base font-medium">Reports</div>              
                </div>            
            </div>
          </div>
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <div className="">
                    <img loading="lazy" alt="StorePortal" src={SalesTracker} className="m-auto" width={100} height={100} />
                </div>
                <div className="mt-5">
                  <div className="text-base font-medium">Sales Tracker</div>              
                </div>            
            </div>
          </div>
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <div className="">
                    <img loading="lazy" alt="CoPortal" src={NPSDashboard} className="m-auto" width={100} height={100} />
                </div>
                <div className="mt-5">
                  <div className="text-base font-medium">NPS Dashboard</div>              
                </div>            
            </div>
          </div>
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <div className="">
                    <img loading="lazy" alt="CoPortal" src={CaptureData} className="m-auto" width={100} height={100} />
                </div>
                <div className="mt-5">
                  <div className="text-base font-medium">Capture Bra Fit Data</div>              
                </div>            
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Main;
