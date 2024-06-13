
import Breadcrumb from "@/components/Base/Breadcrumb";
import Lucide from "@/components/Base/Lucide";
import { FormInput, FormLabel, FormInline } from "@/components/Base/Form";
import Button from "@/components/Base/Button";
import Table from "@/components/Base/Table";
import _ from "lodash";
import { Menu } from "@/components/Base/Headless";

function MissedLoyaltyOpportunity() {

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6  mt-15">
      <div className="col-span-12">        
        {/* BEGIN: Breadcrumb */}
        <Breadcrumb className="flex-1 hidden xl:block">
          <Breadcrumb.Link to="/" className="text-white">Dashboards</Breadcrumb.Link>
          <Breadcrumb.Link to="/store-portal" className="text-white">Store Portal</Breadcrumb.Link>
          <Breadcrumb.Link to="/" className="text-white">Loyalty Enrollment</Breadcrumb.Link>
        </Breadcrumb>
        {/* END: Breadcrumb */}
       </div>
       <div className="col-span-12">
            <div className="flex flex-col gap-8 mt-3.5 p-5 box">
                <div className="flex flex-col">
                <form className="flex xl:flex-row flex-col items-end border-dashed gap-x-5 gap-y-2 border border-slate-300/80 xl:border-0 rounded-[0.6rem] p-4 sm:p-5 xl:p-0" >               
                    <div>
                        <FormLabel className="mr-3 whitespace-nowrap">
                            Date From:
                        </FormLabel>
                        <FormInput                  
                            type="date"
                            className=""
                        />
                    </div>
                    <div>
                        <FormLabel className="mr-3 whitespace-nowrap">
                            Date To:
                        </FormLabel>
                        <FormInput                  
                            type="date"
                            className=""
                        />
                    </div>                
                    <div className="gap-y-2">
                        <FormLabel className="mr-3 whitespace-nowrap">
                            Mobile No.
                        </FormLabel>
                        <FormInput                  
                            type="text"
                            className=""
                        />
                    </div>
                    <div className="flex gap-2">
                        <Button type="button" className="btn-primary" >Search </Button>
                        <Button type="button" className="btn-primary"> <Lucide icon="RotateCw" className="block" /> </Button>
                    </div>
                    <Button variant="outline-secondary">
                  <Lucide
                    icon="Printer"
                    className="stroke-[1.3] w-4 h-4 mr-2"
                  />
                  Print
                </Button>
                <Menu className="sm:ml-auto xl:ml-0">
                  <Menu.Button
                    as={Button}
                    variant="outline-secondary"
                    className="w-full sm:w-auto"
                  >
                    <Lucide
                      icon="FileCheck2"
                      className="stroke-[1.3] w-4 h-4 mr-2"
                    />
                    Export
                    <Lucide
                      icon="ChevronDown"
                      className="stroke-[1.3] w-4 h-4 ml-2"
                    />
                  </Menu.Button>
                  <Menu.Items className="w-40">
                    <Menu.Item>
                      <Lucide icon="FileCheck2" className="w-4 h-4 mr-2" />{" "}
                      Export CSV
                    </Menu.Item>
                    
                    <Menu.Item >
                      <Lucide icon="FileCheck2" className="w-4 h-4 mr-2" />
                      Export XLSX
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
                </form>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="overflow-auto xl:overflow-visible">
                        <Table className="border-b border-dashed border-slate-200/80">
                            <Table.Thead>
                            <Table.Tr>
                                <Table.Td className="px-0 py-0 [&_div]:first:border-l [&_div]:last:border-r [&_div]:first:rounded-l-md [&_div]:last:rounded-r-md border-b-0">
                                    <div className="px-5 py-4 font-medium bg-black text-white">
                                        Registration Date
                                    </div>
                                </Table.Td>
                                <Table.Td className="px-0 py-0 [&_div]:first:border-l [&_div]:last:border-r [&_div]:first:rounded-l-md [&_div]:last:rounded-r-md border-b-0">
                                    <div className="px-5 py-4 font-medium bg-black text-white">
                                        Staff ID
                                    </div>
                                </Table.Td>
                                <Table.Td className="px-0 py-0 [&_div]:first:border-l [&_div]:last:border-r [&_div]:first:rounded-l-md [&_div]:last:rounded-r-md border-b-0">
                                    <div className="px-5 py-4 font-medium bg-black text-white">
                                        Staff Name
                                    </div>
                                </Table.Td>
                                <Table.Td className="px-0 py-0 [&_div]:first:border-l [&_div]:last:border-r [&_div]:first:rounded-l-md [&_div]:last:rounded-r-md border-b-0">
                                    <div className="px-5 py-4 font-medium bg-black text-white">
                                        Registration Count
                                    </div>
                                </Table.Td>
                            </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody>                    
                                <Table.Tr className="[&_td]:last:border-b-0">
                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                        <div className="whitespace-nowrap">
                                            5/8/2024 7:54:16 AM
                                        </div>
                                    </Table.Td>
                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                        <div className= "flex items-center">
                                            <div className="ml-1.5 whitespace-nowrap">
                                                10003428
                                            </div>
                                        </div>
                                    </Table.Td>
                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                        <div className="whitespace-nowrap">
                                            1392
                                        </div>
                                    </Table.Td>
                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                        <div className="flex items-center text-primary whitespace-nowrap"
                                        >000T653000108748
                                        </div>
                                    </Table.Td>
                                </Table.Tr>
                                <Table.Tr className="[&_td]:last:border-b-0">
                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                        <div className="whitespace-nowrap">
                                            5/8/2024 7:54:16 AM
                                        </div>
                                    </Table.Td>
                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                        <div className= "flex items-center">
                                            <div className="ml-1.5 whitespace-nowrap">
                                                10003428
                                            </div>
                                        </div>
                                    </Table.Td>
                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                        <div className="whitespace-nowrap">
                                            1392
                                        </div>
                                    </Table.Td>
                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                        <div className="flex items-center text-primary whitespace-nowrap"
                                        >000T653000108748
                                        </div>
                                    </Table.Td>
                                </Table.Tr>
                            </Table.Tbody>
                        </Table>
                    </div>                            
                </div>
            </div>
            
       </div>
       
      
    </div>
  );
}

export default MissedLoyaltyOpportunity;
