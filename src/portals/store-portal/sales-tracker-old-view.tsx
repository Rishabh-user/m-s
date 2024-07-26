
import React, { useState, useEffect } from "react";
import Breadcrumb from "@/components/Base/Breadcrumb";
import Lucide from "@/components/Base/Lucide";
import { FormInput, FormLabel, FormInline } from "@/components/Base/Form";
import Button from "@/components/Base/Button";
import Table from "@/components/Base/Table";
import _ from "lodash";
import { Menu } from "@/components/Base/Headless";
import { Link } from "react-router-dom";
import { BASE_URL } from "./api";
import axios from "axios";

function SalesTrackerOldView() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [salesData, setSalesData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`${BASE_URL}/StorePortal/SalesTracker`); 
            setSalesData(response.data);
            //setLoading(false);
          } catch (err) {
            // setError(err.message);
            // setLoading(false);
          }
        };
    
        fetchData();
      }, []);
    //   const totalPages = Math.ceil(salesData.TodaySale.length / itemsPerPage);
    //   const currentData = salesData.TodaySale.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
      
    //   const changePage = (pageNumber) => {
    //     setCurrentPage(pageNumber);
    //   };
      
    //   const handleItemsPerPageChange = (event) => {
    //     setItemsPerPage(Number(event.target.value));
    //     setCurrentPage(1); 
    //   };
      
    //   const nextPage = () => {
    //     if (currentPage < totalPages) {
    //       setCurrentPage(currentPage + 1);
    //     }
    //   };
      
    //   const previousPage = () => {
    //     if (currentPage > 1) {
    //       setCurrentPage(currentPage - 1);
    //     }
    //   };
      
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6  mt-15">
      <div className="col-span-12">        
        {/* BEGIN: Breadcrumb */}
        <Breadcrumb className="flex-1 hidden xl:block">
          <Breadcrumb.Link to="/" className="text-white">Dashboards</Breadcrumb.Link>
          <Breadcrumb.Link to="/store-portal" className="text-white">Store Portal</Breadcrumb.Link>
          <Breadcrumb.Link to="/store-portal" className="text-white">Sales Tracker</Breadcrumb.Link>
          <Breadcrumb.Link to="/store-portal/sales-tracker-old-view" className="text-white">Old View</Breadcrumb.Link>
        </Breadcrumb>
        {/* END: Breadcrumb */}
       </div>
       <div className="col-span-12">
            <div className="box p-5">
                <h3> Today's Sale : 157.36</h3> 
                <div className="grid grid-cols-12 gap-5 mt-5"> 
                    <div className="flex flex-col col-span-12 p-5 md:col-span-4 2xl:col-span-4 box ">            
                        <div className="north-sales flex flex-col gap-5">             
                            <div className="north box-sales">
                                <h4>North</h4>
                                <div className="sales-value">63.28</div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div className="flex items-center">                      
                                    <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                        <div>Ghaziabad</div>
                                        <div>4.20</div>
                                    </div>
                                </div>
                                <div className="flex items-center">                      
                                    <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                        <div>Dehradun</div>
                                        <div>0.28</div>
                                    </div>
                                </div>
                                <div className="flex items-center">                      
                                    <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                        <div>NCR</div>
                                        <div>43.38</div>
                                    </div>
                                </div>
                                <div className="flex items-center">                      
                                    <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                        <div>RONE (North)</div>
                                        <div>1.81</div>
                                    </div>
                                </div>
                                <div className="flex items-center">                      
                                    <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                        <div>RONE (North)</div>
                                        <div>13.61</div>
                                    </div>
                                </div>
                            </div>
                            <Link to="#" className="btn btn-primary">Checkout</Link>
                        </div>
                    </div>
                    <div className="flex flex-col col-span-12 p-5 md:col-span-4 2xl:col-span-4 box ">            
                        <div className="south-sales flex flex-col gap-5">             
                            <div className="south box-sales">
                                <h4>South-East</h4>
                                <div className="sales-value">63.28</div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div className="flex items-center">                      
                                    <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                        <div>Andhra Pradesh</div>
                                        <div>4.20</div>
                                    </div>
                                </div>
                                <div className="flex items-center">                      
                                    <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                        <div>Bangalore</div>
                                        <div>0.28</div>
                                    </div>
                                </div>
                                <div className="flex items-center">                      
                                    <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                        <div>Hyderabad & East</div>
                                        <div>43.38</div>
                                    </div>
                                </div>
                                <div className="flex items-center">                      
                                    <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                        <div>Hyderabad & East</div>
                                        <div>1.81</div>
                                    </div>
                                </div>
                                <div className="flex items-center">                      
                                    <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                        <div>SOUTH (TN & Kerela)</div>
                                        <div>13.61</div>
                                    </div>
                                </div>
                            </div>
                            <Link to="#" className="btn btn-primary">Checkout</Link>
                        </div>
                    </div>
                    <div className="flex flex-col col-span-12 p-5 md:col-span-4 2xl:col-span-4 box ">            
                        <div className="west-sales flex flex-col gap-5">             
                            <div className="west box-sales">
                                <h4>West</h4>
                                <div className="sales-value">63.28</div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div className="flex items-center">                      
                                    <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                        <div>Mumbai</div>
                                        <div>4.20</div>
                                    </div>
                                </div>
                                <div className="flex items-center">                      
                                    <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                        <div>West (Ex Mumbai)</div>
                                        <div>0.28</div>
                                    </div>
                                </div>
                                
                            </div>
                            <Link to="#" className="btn btn-primary">Checkout</Link>
                        </div>
                    </div>                      
                </div>
            </div>
       </div>
       <div className="col-span-12">
            <div className="flex flex-col gap-8 mt-3.5 p-5 box">               
                <div className="flex flex-col gap-5">
                    <div className="overflow-auto xl:overflow-visible">
                        <h3> Todays Sale  (16630412)</h3>
                        <Table className="border-b border-dashed border-slate-200/80 mt-5">
                            <Table.Thead>
                                <Table.Tr>
                                    <Table.Td className="px-0 py-0 border-b-0">
                                        <div className="px-5 py-4 font-medium bg-black text-white">
                                            Store
                                        </div>
                                    </Table.Td>
                                    <Table.Td className="px-0 py-0 border-b-0">
                                        <div className="px-5 py-4 font-medium bg-black text-white">
                                            Store Date
                                        </div>
                                    </Table.Td>
                                    <Table.Td className="px-0 py-0 border-b-0">
                                        <div className="px-5 py-4 font-medium bg-black text-white">
                                            Sale
                                        </div>
                                    </Table.Td>
                                    <Table.Td className="px-0 py-0 border-b-0">
                                        <div className="px-5 py-4 font-medium bg-black text-white">
                                            Region
                                        </div>
                                    </Table.Td>
                                </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody>                            
                                {salesData?.data?.TodaySale.map((item, index) => (
                                    <Table.Tr key={index} className="[&_td]:last:border-b-0">
                                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                        <div className="whitespace-nowrap">{item.Store}</div>
                                        </Table.Td>
                                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                        <div className="flex items-center">
                                            <div className="ml-1.5 whitespace-nowrap">{new Date(item.SaleDate).toLocaleDateString()}</div>
                                        </div>
                                        </Table.Td>
                                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                        <div className="whitespace-nowrap">{item.Sale}</div>
                                        </Table.Td>
                                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                        <div className="flex items-center text-primary whitespace-nowrap">{item.Region}</div>
                                        </Table.Td>
                                    </Table.Tr>
                                ))}                           
                            </Table.Tbody>
                        </Table>
                        {/* <div className="pagination flex items-center justify-between mt-4">
                            <div className="flex items-center">
                                <button onClick={previousPage} disabled={currentPage === 1} className="px-2 py-1 disabled:opacity-50">
                                    <Lucide icon="ChevronLeft" className="w-[18px] h-[18px]" />
                                </button>
                                <div className="mx-2">
                                    Page {currentPage} of {totalPages}
                                </div>
                                <button onClick={nextPage} disabled={currentPage === totalPages} className="px-2 py-1 disabled:opacity-50">
                                    <Lucide icon="ChevronRight" className="w-[18px] h-[18px]" />
                                </button>
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="itemsPerPage" className="mr-2">Items per page:</label>
                                <select
                                    id="itemsPerPage"
                                    value={itemsPerPage}
                                    onChange={handleItemsPerPageChange}
                                    className="border rounded"
                                >
                                    <option value={10}>10</option>
                                    <option value={20}>20</option>
                                    <option value={30}>30</option>
                                </select>
                            </div>
                        </div> */}
                    </div>                            
                </div>
            </div>
            <div className="flex flex-col gap-8 mt-3.5 p-5 box">               
                <div className="flex flex-col gap-5">
                    <div className="overflow-auto xl:overflow-visible">
                        <h3>  Active Loyalty Customers</h3>
                        <Table className="border-b border-dashed border-slate-200/80 mt-5">
                            <Table.Thead>
                                <Table.Tr>
                                    <Table.Td className="px-0 py-0 border-b-0">
                                        <div className="px-5 py-4 font-medium bg-black text-white">
                                            Registration Date
                                        </div>
                                    </Table.Td>
                                    <Table.Td className="px-0 py-0 border-b-0">
                                        <div className="px-5 py-4 font-medium bg-black text-white">
                                            Staff ID
                                        </div>
                                    </Table.Td>
                                    <Table.Td className="px-0 py-0 border-b-0">
                                        <div className="px-5 py-4 font-medium bg-black text-white">
                                            Staff Name
                                        </div>
                                    </Table.Td>
                                    <Table.Td className="px-0 py-0 border-b-0">
                                        <div className="px-5 py-4 font-medium bg-black text-white">
                                            Registration Count
                                        </div>
                                    </Table.Td>
                                </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody>
                                {/* {currentData.map((item, index) => (
                                    <Table.Tr key={index} className="[&_td]:last:border-b-0">
                                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                            <div className="whitespace-nowrap">{item.registrationDate}</div>
                                        </Table.Td>
                                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                            <div className="flex items-center">
                                                <div className="ml-1.5 whitespace-nowrap">{item.staffId}</div>
                                            </div>
                                        </Table.Td>
                                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                            <div className="whitespace-nowrap">{item.staffName}</div>
                                        </Table.Td>
                                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                            <div className="flex items-center text-primary whitespace-nowrap">{item.registrationCount}</div>
                                        </Table.Td>
                                    </Table.Tr>
                                ))} */}
                            </Table.Tbody>
                        </Table>
                        {/* <div className="pagination flex items-center justify-between mt-4">
                            <div className="flex items-center">
                                <button onClick={previousPage} disabled={currentPage === 1} className="px-2 py-1 disabled:opacity-50">
                                    <Lucide icon="ChevronLeft" className="w-[18px] h-[18px]" />
                                </button>
                                <div className="mx-2">
                                    Page {currentPage} of {totalPages}
                                </div>
                                <button onClick={nextPage} disabled={currentPage === totalPages} className="px-2 py-1 disabled:opacity-50">
                                    <Lucide icon="ChevronRight" className="w-[18px] h-[18px]" />
                                </button>
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="itemsPerPage" className="mr-2">Items per page:</label>
                                <select
                                    id="itemsPerPage"
                                    value={itemsPerPage}
                                    onChange={handleItemsPerPageChange}
                                    className="border rounded"
                                >
                                    <option value={10}>10</option>
                                    <option value={20}>20</option>
                                    <option value={30}>30</option>
                                </select>
                            </div>
                        </div> */}
                    </div>                            
                </div>
            </div>
            <div className="flex flex-col gap-8 mt-3.5 p-5 box">               
                <div className="flex flex-col gap-5">
                    <div className="overflow-auto xl:overflow-visible">
                        <h3>  Top 10 Department Sale</h3>
                        <Table className="border-b border-dashed border-slate-200/80 mt-5">
                            <Table.Thead>
                                <Table.Tr>
                                    <Table.Td className="px-0 py-0 border-b-0">
                                        <div className="px-5 py-4 font-medium bg-black text-white">
                                            Registration Date
                                        </div>
                                    </Table.Td>
                                    <Table.Td className="px-0 py-0 border-b-0">
                                        <div className="px-5 py-4 font-medium bg-black text-white">
                                            Staff ID
                                        </div>
                                    </Table.Td>
                                    <Table.Td className="px-0 py-0 border-b-0">
                                        <div className="px-5 py-4 font-medium bg-black text-white">
                                            Staff Name
                                        </div>
                                    </Table.Td>
                                    <Table.Td className="px-0 py-0 border-b-0">
                                        <div className="px-5 py-4 font-medium bg-black text-white">
                                            Registration Count
                                        </div>
                                    </Table.Td>
                                </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody>
                                {/* {currentData.map((item, index) => (
                                    <Table.Tr key={index} className="[&_td]:last:border-b-0">
                                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                            <div className="whitespace-nowrap">{item.registrationDate}</div>
                                        </Table.Td>
                                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                            <div className="flex items-center">
                                                <div className="ml-1.5 whitespace-nowrap">{item.staffId}</div>
                                            </div>
                                        </Table.Td>
                                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                            <div className="whitespace-nowrap">{item.staffName}</div>
                                        </Table.Td>
                                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                            <div className="flex items-center text-primary whitespace-nowrap">{item.registrationCount}</div>
                                        </Table.Td>
                                    </Table.Tr>
                                ))} */}
                            </Table.Tbody>
                        </Table>
                        {/* <div className="pagination flex items-center justify-between mt-4">
                            <div className="flex items-center">
                                <button onClick={previousPage} disabled={currentPage === 1} className="px-2 py-1 disabled:opacity-50">
                                    <Lucide icon="ChevronLeft" className="w-[18px] h-[18px]" />
                                </button>
                                <div className="mx-2">
                                    Page {currentPage} of {totalPages}
                                </div>
                                <button onClick={nextPage} disabled={currentPage === totalPages} className="px-2 py-1 disabled:opacity-50">
                                    <Lucide icon="ChevronRight" className="w-[18px] h-[18px]" />
                                </button>
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="itemsPerPage" className="mr-2">Items per page:</label>
                                <select
                                    id="itemsPerPage"
                                    value={itemsPerPage}
                                    onChange={handleItemsPerPageChange}
                                    className="border rounded"
                                >
                                    <option value={10}>10</option>
                                    <option value={20}>20</option>
                                    <option value={30}>30</option>
                                </select>
                            </div>
                        </div> */}
                    </div>                            
                </div>
            </div>
       </div>
       
      
    </div>
  );
}

export default SalesTrackerOldView;
