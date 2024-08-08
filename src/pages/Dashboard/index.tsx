import Lucide from "@/components/Base/Lucide";
import { Menu } from "@/components/Base/Headless";
import { getColor } from "@/utils/colors";
import ReportLineChart from "@/components/ReportLineChart";
import ReportDonutChart3 from "@/components/ReportDonutChart3";

import _ from "lodash";
import Breadcrumb from "@/components/Base/Breadcrumb";
import MNSPortal from '../../assets/images/icons/ms-portal.png';
import FAMS from '../../assets/images/icons/FAMS.png';
import StorePortal from '../../assets/images/icons/store-portal.png';
import CoPortal from '../../assets/images/icons/Co-portal.png'
import EcomPortal from '../../assets/images/icons/ecom-portal.png'
import ISSDI from '../../assets/images/icons/issdi.png'
import MNSCare from '../../assets/images/icons/MNS-care.png'
import LeaseManagement from '../../assets/images/icons/Lease-Management.png'
import Outlook from '../../assets/images/icons/Outlook.png'
import BIPortal from '../../assets/images/icons/BI.png'
import Inmoment from '../../assets/images/icons/Inmoment.png'
import RetailCloud from '../../assets/images/icons/Retail.png'
import SAP from '../../assets/images/icons/SAP.png'
import FoofallReport from '../../assets/images/icons/footfall-report.png'
import HRIS from '../../assets/images/icons/HRIS.png'
import DCScanning from '../../assets/images/icons/DC-Scanning.png'
import ITSupport from '../../assets/images/icons/IT-Support.png'
import Qlikview from '../../assets/images/icons/qlikview.png'
import ItemReservation from '../../assets/images/icons/reservesion.png'
import { Link } from "react-router-dom";

function Main() {
  
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6  mt-15">
      <div className="col-span-12">        
        {/* BEGIN: Breadcrumb */}
        <Breadcrumb className="flex-1 hidden xl:block">
          <Breadcrumb.Link to="/" className="text-white">Dashboards</Breadcrumb.Link>
        </Breadcrumb>
        {/* END: Breadcrumb */}
        <div className="grid grid-cols-12 gap-5 mt-3.5">          
          <div className="flex flex-col col-span-12 p-5 md:col-span-4 2xl:col-span-4 box ">
            <Menu className="absolute top-0 right-0 mt-5 mr-5">
              <Menu.Button className="w-5 h-5 text-slate-500">
                <Lucide
                  icon="MoreVertical"
                  className="w-6 h-6 stroke-slate-400/70 fill-slate-400/70"
                />
              </Menu.Button>
              <Menu.Items className="w-40">
                <Menu.Item>
                  <Lucide icon="Copy" className="w-4 h-4 mr-2" /> Copy Link
                </Menu.Item>
                <Menu.Item>
                  <Lucide icon="Trash" className="w-4 h-4 mr-2" />
                  Delete
                </Menu.Item>
              </Menu.Items>
            </Menu>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 border rounded-full border-primary/10 bg-primary/10">
                <Lucide
                  icon="Database"
                  className="w-6 h-6 text-primary fill-primary/10"
                />
              </div>
              <div className="ml-4">
                <div className="text-base font-medium">41k Products Sold</div>
                <div className="text-slate-500 mt-0.5">Across 21 stores</div>
              </div>
            </div>
            <div className="relative mt-5 mb-6 overflow-hidden">
              <div className="absolute inset-0 h-px my-auto tracking-widest text-slate-400/60 whitespace-nowrap leading-[0] text-xs">
                .......................................................................
              </div>
              <ReportLineChart
                className="relative z-10 -ml-1.5"
                height={100}
                index={2}
                borderColor={getColor("primary")}
                backgroundColor={getColor("primary", 0.3)}
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-5">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary/70"></div>
                <div className="ml-2.5">Products Sold</div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                <div className="ml-2.5">Store Locations</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col col-span-12 p-5 md:col-span-4 2xl:col-span-4 box ">
            <Menu className="absolute top-0 right-0 mt-5 mr-5">
              <Menu.Button className="w-5 h-5 text-slate-500">
                <Lucide
                  icon="MoreVertical"
                  className="w-6 h-6 stroke-slate-400/70 fill-slate-400/70"
                />
              </Menu.Button>
              <Menu.Items className="w-40">
                <Menu.Item>
                  <Lucide icon="Copy" className="w-4 h-4 mr-2" /> Copy Link
                </Menu.Item>
                <Menu.Item>
                  <Lucide icon="Trash" className="w-4 h-4 mr-2" />
                  Delete
                </Menu.Item>
              </Menu.Items>
            </Menu>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 border rounded-full border-success/10 bg-success/10">
                <Lucide
                  icon="Files"
                  className="w-6 h-6 text-success fill-success/10"
                />
              </div>
              <div className="ml-4">
                <div className="text-base font-medium">
                  36k Products Shipped
                </div>
                <div className="text-slate-500 mt-0.5">
                  Across 14 warehouses
                </div>
              </div>
            </div>
            <div className="relative mt-5 mb-6 overflow-hidden">
              <div className="absolute inset-0 h-px my-auto tracking-widest text-slate-400/60 whitespace-nowrap leading-[0] text-xs">
                .......................................................................
              </div>
              <ReportLineChart
                className="relative z-10 -ml-1.5"
                height={100}
                index={0}
                borderColor={getColor("success")}
                backgroundColor={getColor("success", 0.3)}
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-5">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-success/70"></div>
                <div className="ml-2.5">Total Shipped</div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                <div className="ml-2.5">Warehouses</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col col-span-12 p-5 md:col-span-4 2xl:col-span-4 box ">
            <Menu className="absolute top-0 right-0 mt-5 mr-5">
              <Menu.Button className="w-5 h-5 text-slate-500">
                <Lucide
                  icon="MoreVertical"
                  className="w-6 h-6 stroke-slate-400/70 fill-slate-400/70"
                />
              </Menu.Button>
              <Menu.Items className="w-40">
                <Menu.Item>
                  <Lucide icon="Copy" className="w-4 h-4 mr-2" /> Copy Link
                </Menu.Item>
                <Menu.Item>
                  <Lucide icon="Trash" className="w-4 h-4 mr-2" />
                  Delete
                </Menu.Item>
              </Menu.Items>
            </Menu>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 border rounded-full border-primary/10 bg-primary/10">
                <Lucide
                  icon="Zap"
                  className="w-6 h-6 text-primary fill-primary/10"
                />
              </div>
              <div className="ml-4">
                <div className="text-base font-medium">
                  3.7k Orders Processed
                </div>
                <div className="text-slate-500 mt-0.5">Across 9 regions</div>
              </div>
            </div>
            <div className="relative mt-5 mb-6">
              <ReportDonutChart3 className="relative z-10" height={100} />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-5">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary/70"></div>
                <div className="ml-2.5">Order Volume</div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-danger/70"></div>
                <div className="ml-2.5">Coverage Area</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12">
        <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium">Internal Application</div>          
        </div>
        <div className="mt-3.5 grid grid-cols-12 gap-y-4 gap-x-4">          
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <Link to="http://10.24.3.55/WebPortal/Home1/Index/0" target="_blank">
                  <div className="">
                      <img loading="lazy" alt="MNSPortal" src={MNSPortal} className="m-auto" width={100} height={100} />
                  </div>
                  <div className="mt-5">
                    <div className="text-base font-medium">M&S Portal</div>              
                  </div>
                </Link>            
            </div>
          </div>
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <Link to="http://10.24.3.55/WebPortal/Home1/Index/1" target="_blank">
                  <div className="">
                      <img loading="lazy" alt="FAMS" src={FAMS} className="m-auto" width={100} height={100} />
                  </div>
                  <div className="mt-5">
                    <div className="text-base font-medium">FAMS</div>              
                  </div>
                </Link>            
            </div>
          </div>
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <Link to="/store-portal">
                  <div className="">
                      <img loading="lazy" alt="StorePortal" src={StorePortal} className="m-auto" width={100} height={100} />
                  </div>
                  <div className="mt-5">
                    <div className="text-base font-medium">Store Portal</div>              
                  </div> 
                </Link>           
            </div>
          </div>
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <Link to="http://127.0.0.1:5173/co-portal" target="_blank">
                  <div className="">
                      <img loading="lazy" alt="CoPortal" src={CoPortal} className="m-auto" width={100} height={100} />
                  </div>
                  <div className="mt-5">
                    <div className="text-base font-medium">Co Portal</div>              
                  </div> 
                </Link>           
            </div>
          </div>
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <Link to="http://10.24.3.55/WebPortal/Home1/Index/8" target="_blank">
                  <div className="">
                      <img loading="lazy" alt="EcomPortal" src={EcomPortal} className="m-auto" width={100} height={100} />
                  </div>
                  <div className="mt-5">
                    <div className="text-base font-medium">ECOM Portal</div>              
                  </div> 
                </Link>           
            </div>
          </div>
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <Link to="http://10.24.3.55/WebPortal/Home1/Index/5" target="_blank">
                  <div className="">
                      <img loading="lazy" alt="ISSDI" src={ISSDI} className="m-auto" width={100} height={100} />
                  </div>
                  <div className="mt-5">
                    <div className="text-base font-medium">ISSDI</div>              
                  </div>
                </Link>            
            </div>
          </div>
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <Link to="/mns-care">
                  <div className="">
                      <img loading="lazy" alt="MNSCare" src={MNSCare} className="m-auto" width={100} height={100} />
                  </div>
                  <div className="mt-5">
                    <div className="text-base font-medium">MNS Care</div>              
                  </div>
                </Link>            
            </div>
          </div>
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <Link to="http://10.24.3.55/WebPortal/Home1/Index/4" target="_blank">
                  <div className="">
                      <img loading="lazy" alt="LeaseManagement" src={LeaseManagement} className="m-auto" width={100} height={100} />
                  </div>
                  <div className="mt-5">
                    <div className="text-base font-medium">Lease Management</div>              
                  </div>
                </Link>            
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 external-app">
        <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium">External Application</div>          
        </div>
        <div className="mt-3.5 grid grid-cols-12 gap-y-4 gap-x-4">          
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <Link target="_blank" to="https://login.microsoftonline.com/common/oauth2/authorize?client_id=00000002-0000-0ff1-ce00-000000000000&redirect_uri=https%3a%2f%2foutlook.office365.com%2fowa%2f&resource=00000002-0000-0ff1-ce00-000000000000&response_mode=form_post&response_type=code+id_token&scope=openid&msafed=1&msaredir=1&client-request-id=b3331a2e-3bfa-7fe1-0a16-dd16b2d01c8c&protectedtoken=true&claims=%7b%22id_token%22%3a%7b%22xms_cc%22%3a%7b%22values%22%3a%5b%22CP1%22%5d%7d%7d%7d&domain_hint=mnscorp.net&nonce=638574912985750846.73c72cff-0900-4bdf-a65e-0cfd51b8d725&state=DYvJEYAgEMBAG7ARYEGWhXI45Cc46oztu48kr0ghxMosjASWoLBHJJ-sS1yE6IOmvZKrvStIAMqX1lUOeCiovaEtsZFDye9m5pfNOZ4670uP4_0B">
                  <div className="box-img box-img1">
                      <img loading="lazy" alt="Outlook" src={Outlook} className="m-auto" width={100} height={100} />
                  </div>
                  <div className="mt-5">
                    <div className="text-base font-medium">Outlook</div>              
                  </div> 
                </Link>           
            </div>
          </div>
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <Link to="http://ecc-a-eap-isap.webapps.marksandspencer.com/sap/bc/gui/sap/its/z_wosm?sap-client=900" target="_blank">
                  <div className="box-img box-img2">
                      <img loading="lazy" alt="SAP" src={SAP} className="m-auto" width={100} height={100} />
                  </div>
                  <div className="mt-5">
                    <div className="text-base font-medium">SAP</div>              
                  </div>
                </Link>            
            </div>
          </div>
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <Link to="http://ep-j-bjp-isap.webapps.marksandspencer.com/irj/portal" target="_blank">
                  <div className="box-img box-img3">
                      <img loading="lazy" alt="BIPortal" src={BIPortal} className="m-auto" width={100} height={100} />
                  </div>
                  <div className="mt-5">
                    <div className="text-base font-medium">BI Portal</div>              
                  </div> 
                </Link>           
            </div>
          </div>
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <Link to="https://www.inmoment.com/report/app?service=page&page=Login" target="_blank">
                  <div className="box-img box-img4">
                      <img loading="lazy" alt="Inmoment" src={Inmoment} className="m-auto" width={100} height={100} />
                  </div>
                  <div className="mt-5">
                    <div className="text-base font-medium">Inmoment</div>              
                  </div> 
                </Link>           
            </div>
          </div>
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <Link to="https://mands.retailcloud.net/public_first_login.cfm" target="_blank">
                  <div className="box-img box-img5">
                      <img loading="lazy" alt="RetailCloud" src={RetailCloud} className="m-auto" width={100} height={100} />
                  </div>
                  <div className="mt-5">
                    <div className="text-base font-medium">Retail Cloud</div>              
                  </div> 
                </Link>           
            </div>
          </div>
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <Link to="http://10.24.3.127:90/htareports/Login.aspx" target="_blank">
                  <div className="box-img box-img6">
                      <img loading="lazy" alt="FoofallReport" src={FoofallReport} className="m-auto" width={100} height={100} />
                  </div>
                  <div className="mt-5">
                    <div className="text-base font-medium">Footfall Reports</div>              
                  </div> 
                </Link>           
            </div>
          </div>
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <Link to="https://hr.allsectech.com/msr/Common/web_Signon.aspx" target="_blank">
                  <div className="box-img box-img7">
                      <img loading="lazy" alt="HRIS" src={HRIS} className="m-auto" width={100} height={100} />
                  </div>
                  <div className="mt-5">
                    <div className="text-base font-medium">HRIS</div>              
                  </div> 
                </Link>           
            </div>
          </div>
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <Link to="https://signin.wooqer.com/idp/profile/SAML2/POST/SSO;jsessionid=node01l89cblx78dmvnl6dcc36q6i812239259.node0?execution=e1s1" target="_blank">
                  <div className="box-img box-img8">
                      <img loading="lazy" alt="Wooqer" src={StorePortal} className="m-auto" width={100} height={100} />
                  </div>
                  <div className="mt-5">
                    <div className="text-base font-medium">Wooqer</div>              
                  </div> 
                </Link>           
            </div>
          </div>
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <Link to="http://10.24.128.23/mnsutility" target="_blank">
                  <div className="box-img box-img9">
                      <img loading="lazy" alt="DCScanning" src={DCScanning} className="m-auto" width={100} height={100} />
                  </div>
                  <div className="mt-5">
                    <div className="text-base font-medium">DC Scanning App</div>              
                  </div> 
                </Link>           
            </div>
          </div>
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <Link to="https://10.24.3.61/" target="_blank">
                  <div className="box-img box-img10">
                      <img loading="lazy" alt="ITSupport" src={ITSupport} className="m-auto" width={100} height={100} />
                  </div>
                  <div className="mt-5">
                    <div className="text-base font-medium">One IT Support</div>              
                  </div> 
                </Link>           
            </div>
          </div>
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <Link to="https://msripl.in/msr/" target="_blank">
                  <div className="box-img box-img8">
                      <img loading="lazy" alt="MemberLogin" src={StorePortal} className="m-auto" width={100} height={100} />
                  </div>
                  <div className="mt-5">
                    <div className="text-base font-medium">Member Login</div>              
                  </div> 
                </Link>           
            </div>
          </div>
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <Link to="http://10.24.3.41/qlikview/index.htm" target="_blank">
                  <div className="box-img box-img12">
                      <img loading="lazy" alt="Qlikview" src={Qlikview} className="m-auto" width={100} height={100} />
                  </div>
                  <div className="mt-5">
                    <div className="text-base font-medium">Qlikview</div>              
                  </div> 
                </Link>           
            </div>
          </div>
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <Link to="http://10.24.3.55/Views/Shared/Error.cshtml?aspxerrorpath=/ItemsReservationPortal" target="_blank">
                  <div className="box-img box-img13">
                      <img loading="lazy" alt="ItemReservation" src={ItemReservation} className="m-auto" width={100} height={100} />
                  </div>
                  <div className="mt-5">
                    <div className="text-base font-medium">Item Reservation Portal</div>              
                  </div> 
                </Link>           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
