import Lucide from "@/components/Base/Lucide";
import { Menu } from "@/components/Base/Headless";
import TinySlider, { TinySliderElement } from "@/components/Base/TinySlider";
import { getColor } from "@/utils/colors";
import ReportLineChart from "@/components/ReportLineChart";
import ReportDonutChart3 from "@/components/ReportDonutChart3";
import Pagination from "@/components/Base/Pagination";
import { FormSelect } from "@/components/Base/Form";
import Tippy from "@/components/Base/Tippy";
import transactions from "@/fakers/transactions";
import Button from "@/components/Base/Button";
import Litepicker from "@/components/Base/Litepicker";
import Table from "@/components/Base/Table";
import { useState, useRef } from "react";
import clsx from "clsx";
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

function Main() {
  const [generalReportFilter, setGeneralReportFilter] = useState<string>();
  const sliderRef = useRef<TinySliderElement>();
  const prevImportantNotes = () => {
    sliderRef.current?.tns.goTo("prev");
  };
  const nextImportantNotes = () => {
    sliderRef.current?.tns.goTo("next");
  };

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6  mt-15">
      <div className="col-span-12">        
        {/* BEGIN: Breadcrumb */}
        <Breadcrumb className="flex-1 hidden xl:block">
          <Breadcrumb.Link to="/">Dashboards</Breadcrumb.Link>
        </Breadcrumb>
        {/* END: Breadcrumb */}
        <div className="grid grid-cols-12 gap-5 mt-3.5">          
          <div className="flex flex-col col-span-12 p-5 md:col-span-4 2xl:col-span-3 box ">
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
            <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-5">
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
          <div className="flex flex-col col-span-12 p-5 md:col-span-4 2xl:col-span-3 box ">
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
            <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-5">
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
          <div className="flex flex-col col-span-12 p-5 md:col-span-4 2xl:col-span-3 box ">
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
            <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-5">
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
                <div className="">
                    <img loading="lazy" alt="MNSPortal" src={MNSPortal} className="m-auto" width={100} height={100} />
                </div>
                <div className="mt-5">
                  <div className="text-base font-medium">M&S Portal</div>              
                </div>            
            </div>
          </div>
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <div className="">
                    <img loading="lazy" alt="FAMS" src={FAMS} className="m-auto" width={100} height={100} />
                </div>
                <div className="mt-5">
                  <div className="text-base font-medium">FAMS</div>              
                </div>            
            </div>
          </div>
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <div className="">
                    <img loading="lazy" alt="StorePortal" src={StorePortal} className="m-auto" width={100} height={100} />
                </div>
                <div className="mt-5">
                  <div className="text-base font-medium">Store Portal</div>              
                </div>            
            </div>
          </div>
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <div className="">
                    <img loading="lazy" alt="CoPortal" src={CoPortal} className="m-auto" width={100} height={100} />
                </div>
                <div className="mt-5">
                  <div className="text-base font-medium">Co Portal</div>              
                </div>            
            </div>
          </div>
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <div className="">
                    <img loading="lazy" alt="EcomPortal" src={EcomPortal} className="m-auto" width={100} height={100} />
                </div>
                <div className="mt-5">
                  <div className="text-base font-medium">ECOM Portal</div>              
                </div>            
            </div>
          </div>
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <div className="">
                    <img loading="lazy" alt="ISSDI" src={ISSDI} className="m-auto" width={100} height={100} />
                </div>
                <div className="mt-5">
                  <div className="text-base font-medium">ISSDI</div>              
                </div>            
            </div>
          </div>
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <div className="">
                    <img loading="lazy" alt="MNSCare" src={MNSCare} className="m-auto" width={100} height={100} />
                </div>
                <div className="mt-5">
                  <div className="text-base font-medium">MNS Care</div>              
                </div>            
            </div>
          </div>
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <div className="">
                    <img loading="lazy" alt="LeaseManagement" src={LeaseManagement} className="m-auto" width={100} height={100} />
                </div>
                <div className="mt-5">
                  <div className="text-base font-medium">Lease Management</div>              
                </div>            
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
                <div className="box-img box-img1">
                    <img loading="lazy" alt="Outlook" src={Outlook} className="m-auto" width={100} height={100} />
                </div>
                <div className="mt-5">
                  <div className="text-base font-medium">Outlook</div>              
                </div>            
            </div>
          </div>
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <div className="box-img box-img2">
                    <img loading="lazy" alt="SAP" src={SAP} className="m-auto" width={100} height={100} />
                </div>
                <div className="mt-5">
                  <div className="text-base font-medium">SAP</div>              
                </div>            
            </div>
          </div>
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <div className="box-img box-img3">
                    <img loading="lazy" alt="BIPortal" src={BIPortal} className="m-auto" width={100} height={100} />
                </div>
                <div className="mt-5">
                  <div className="text-base font-medium">BI Portal</div>              
                </div>            
            </div>
          </div>
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <div className="box-img box-img4">
                    <img loading="lazy" alt="Inmoment" src={Inmoment} className="m-auto" width={100} height={100} />
                </div>
                <div className="mt-5">
                  <div className="text-base font-medium">Inmoment</div>              
                </div>            
            </div>
          </div>
          <div className="flex-col col-span-12 md:col-span-3">
            <div className="relative p-5 box text-center">
                <div className="box-img box-img5">
                    <img loading="lazy" alt="RetailCloud" src={RetailCloud} className="m-auto" width={100} height={100} />
                </div>
                <div className="mt-5">
                  <div className="text-base font-medium">Retail Cloud</div>              
                </div>            
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Main;
