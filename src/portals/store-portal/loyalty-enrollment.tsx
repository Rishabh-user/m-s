
import Breadcrumb from "@/components/Base/Breadcrumb";
import Lucide from "@/components/Base/Lucide";
import { FormInput, FormLabel, FormInline } from "@/components/Base/Form";
import Button from "@/components/Base/Button";
import Table from "@/components/Base/Table";
import _ from "lodash";

function LoyaltyEnrollment() {

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
       <div className="flex flex-col gap-8 mt-3.5">
          <div className="flex flex-col box py-4">
            <div className="flex flex-col p-5 xl:items-center xl:flex-row gap-y-2">
              <form className="flex xl:flex-row flex-col items-end border-dashed gap-x-5 gap-y-2 border border-slate-300/80 xl:border-0 rounded-[0.6rem] p-4 sm:p-5 xl:p-0" >               
                <div>
                  <FormLabel className="mr-3 whitespace-nowrap">
                    Name
                  </FormLabel>
                  <FormInput                  
                    type="text"
                    className=""
                  />
                </div>
                <div>
                  <FormLabel className="mr-3 whitespace-nowrap">
                    Email ID
                  </FormLabel>
                  <FormInput                  
                    type="text"
                    className=""
                  />
                </div>
                <div>
                  <FormLabel className="mr-3 whitespace-nowrap">
                    Loyalty ID
                  </FormLabel>
                  <FormInput                  
                    type="text"
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
              </form>
            </div>
          </div>
        </div>
       </div>
       <div className="col-span-12">
        <div className="grid grid-cols-10 gap-5">
            <div className="col-span-12 xl:col-span-3">
                <div className="flex flex-col p-5 box h-full">
                <div className="flex flex-col gap-5 h-full">
                    <div className="border rounded-[0.6rem] relative mt-3 h-full">
                    <div className="absolute left-0 px-3 ml-4 -mt-3 bg-white">
                        <h3>Members Information</h3>
                    </div>
                    <div className="p-5 mt-2.5 flex flex-col gap-5">
                        <div className="flex items-center">
                        <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                            <div className="sm:mr-auto w-54">Name:</div>
                            <a
                            href=""
                            className=""
                            > Rajeev Sharma </a>
                        </div>
                        </div>
                        <div className="flex items-center">                      
                        <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                            <div className="sm:mr-auto w-54">Tier</div>
                                12767460
                        </div>
                        </div>
                        <div className="flex items-center">                      
                        <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                            <div className="sm:mr-auto w-54">Account No</div>
                                564984121
                        </div>
                        </div>
                        <div className="flex items-center">                     
                        <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                            <div className="sm:mr-auto w-54">Mobile No</div>
                            <div className="text-right truncate w-52">
                                99******58
                            </div>
                        </div>
                        </div>
                        
                        <div className="flex items-center">                      
                        <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                            <div className="sm:mr-auto">Status</div>
                            <a href="">Active</a>
                        </div>
                        </div>
                        
                    </div>
                    </div>                    
                </div>
                </div>
            </div>
            <div className="flex flex-col col-span-12 xl:col-span-7 gap-7">                
                <div className="flex flex-col p-5 box">
                <div className="border rounded-[0.6rem] relative mt-3">
                    <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs bg-white">
                    <h3>Personal Information</h3>
                    </div>
                    <div className="grid grid-cols-12 gap-5 mt-3.5 p-5">
                        <div className="flex flex-col col-span-12 col-span-6 gap-7 pr-4">
                            <div className="flex items-center">
                                <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                    <div>Account No</div>
                                    <a href=""> 12767460 </a>
                                </div>
                            </div>
                            <div className="flex items-center">                      
                                <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                    <div>Tier</div>
                                    <div>12767460</div>
                                </div>
                            </div>
                            <div className="flex items-center">                      
                                <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                    <div>Date of Anniversary</div>
                                    <div>N/A</div>
                                </div>
                            </div>
                            <div className="flex items-center">                     
                                <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                    <div>Email ID</div>
                                    <div>ra****@********.com</div>
                                </div>
                            </div>
                            <div className="flex items-center">                      
                                <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                    <div>Address</div>
                                    <a href="">Delhi</a>
                                </div>
                            </div>   
                            <div className="flex items-center">                      
                                <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                    <div>Enrollment Date</div>
                                    <a href="">01/01/2024</a>
                                </div>
                            </div>
                            <div className="flex items-center">                      
                                <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                    <div>Account Status</div>
                                    <a href="">Active</a>
                                </div>
                            </div>                     
                        </div>
                        <div className="flex flex-col col-span-12 col-span-6 gap-7 pl-4 border-left">
                            <div className="flex items-center">
                                <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                    <div>Name</div>
                                    <a href=""> Anil Kumar </a>
                                </div>
                            </div>
                            <div className="flex items-center">                      
                                <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                    <div>Date of Birth</div>
                                    <div>30/03/1992</div>
                                </div>
                            </div>
                            <div className="flex items-center">                      
                                <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                    <div>Mobile No</div>
                                    <div>99******58</div>
                                </div>
                            </div>
                            <div className="flex items-center">                     
                                <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                    <div>Gender</div>
                                    <div>Male</div>
                                </div>
                            </div>
                            <div className="flex items-center">                      
                                <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                    <div>Enrollment Store</div>
                                    <a href="">Shipra Mall Ghaziabad</a>
                                </div>
                            </div>
                            <div className="flex items-center">                      
                                <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                    <div>Balance Points</div>
                                    <a href="">2550</a>
                                </div>
                            </div>                        
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
       </div>
       <div className="col-span-12">
            <div className="flex flex-col p-5 box">
                <div className="border rounded-[0.6rem] relative mt-3">
                <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs bg-white">
                    <h3>Loyalty Account Running Balance</h3>
                </div>
                <div className="p-5 mt-2.5 flex flex-col gap-5">
                    <div className="overflow-auto xl:overflow-visible">
                    <Table className="border-b border-dashed border-slate-200/80">
                        <Table.Thead>
                        <Table.Tr>
                            <Table.Td className="px-0 py-0 [&_div]:first:border-l [&_div]:last:border-r [&_div]:first:rounded-l-md [&_div]:last:rounded-r-md border-b-0">
                                <div className="px-5 py-4 font-medium bg-black text-white">
                                    Receipt No
                                </div>
                            </Table.Td>
                            <Table.Td className="px-0 py-0 [&_div]:first:border-l [&_div]:last:border-r [&_div]:first:rounded-l-md [&_div]:last:rounded-r-md border-b-0">
                                <div className="px-5 py-4 font-medium bg-black text-white">
                                    Transaction Date Time
                                </div>
                            </Table.Td>
                            <Table.Td className="px-0 py-0 [&_div]:first:border-l [&_div]:last:border-r [&_div]:first:rounded-l-md [&_div]:last:rounded-r-md border-b-0">
                                <div className="px-5 py-4 font-medium bg-black text-white">
                                    Store Code
                                </div>
                            </Table.Td>
                            <Table.Td className="px-0 py-0 [&_div]:first:border-l [&_div]:last:border-r [&_div]:first:rounded-l-md [&_div]:last:rounded-r-md border-b-0">
                                <div className="px-5 py-4 font-medium bg-black text-white">
                                    Payment
                                </div>
                            </Table.Td>
                            <Table.Td className="px-0 py-0 [&_div]:first:border-l [&_div]:last:border-r [&_div]:first:rounded-l-md [&_div]:last:rounded-r-md border-b-0">
                                <div className="px-5 py-4 font-medium bg-black text-white">
                                    Tier
                                </div>
                            </Table.Td>
                            <Table.Td className="px-0 py-0 [&_div]:first:border-l [&_div]:last:border-r [&_div]:first:rounded-l-md [&_div]:last:rounded-r-md border-b-0">
                                <div className="px-5 py-4 font-medium bg-black text-white">
                                    Earned Points
                                </div>
                            </Table.Td>
                            <Table.Td className="px-0 py-0 [&_div]:first:border-l [&_div]:last:border-r [&_div]:first:rounded-l-md [&_div]:last:rounded-r-md border-b-0">
                                <div className="px-5 py-4 font-medium bg-black text-white">
                                    Redeemed Points
                                </div>
                            </Table.Td>
                        </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>                    
                            <Table.Tr className="[&_td]:last:border-b-0">
                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                    <div className="whitespace-nowrap">
                                        000T78700
                                    </div>
                                </Table.Td>
                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                    <div className= "flex items-center">
                                        <div className="ml-1.5 whitespace-nowrap">
                                            12/14/2023 9:17:41 AM
                                        </div>
                                    </div>
                                </Table.Td>
                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                    <div className="whitespace-nowrap">
                                        GCH
                                    </div>
                                </Table.Td>
                                <Table.Td className="py-4border-dashed dark:bg-darkmode-600">
                                    <div className="flex items-center justify-center text-primary whitespace-nowrap"
                                       >8470
                                    </div>
                                </Table.Td>
                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                    <div className="flex items-center justify-center text-primary whitespace-nowrap"
                                        >CLUB
                                    </div>
                                </Table.Td>
                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                    <div className="flex items-center justify-center text-primary whitespace-nowrap"
                                        >00000
                                    </div>
                                </Table.Td>
                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                    <div className="flex items-center justify-center text-primary whitespace-nowrap"
                                        >00000
                                    </div>
                                </Table.Td>
                            </Table.Tr>
                            <Table.Tr className="[&_td]:last:border-b-0">
                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                    <div className="whitespace-nowrap">
                                        000T78700
                                    </div>
                                </Table.Td>
                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                    <div className= "flex items-center">
                                        <div className="ml-1.5 whitespace-nowrap">
                                            12/14/2023 9:17:41 AM
                                        </div>
                                    </div>
                                </Table.Td>
                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                    <div className="whitespace-nowrap">
                                        GCH
                                    </div>
                                </Table.Td>
                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                    <div className="flex items-center justify-center text-primary whitespace-nowrap"
                                        >8470
                                    </div>
                                </Table.Td>
                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                    <div className="flex items-center justify-center text-primary whitespace-nowrap"
                                        >CLUB
                                    </div>
                                </Table.Td>
                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                    <div className="flex items-center justify-center text-primary whitespace-nowrap"
                                        >00000
                                    </div>
                                </Table.Td>
                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                    <div className="flex items-center justify-center text-primary whitespace-nowrap"
                                       >00000
                                    </div>
                                </Table.Td>
                            </Table.Tr>
                        </Table.Tbody>
                    </Table>
                    </div>
                    {/* <div className="mt-2">
                    <Button
                        variant="primary"
                        className="w-full bg-white text-primary border-primary/20 hover:bg-primary/20"
                    >
                        View all transactions
                        <Lucide
                        icon="ArrowRight"
                        className="stroke-[1.3] w-4 h-4 ml-2"
                        />
                    </Button>
                    </div> */}
                </div>
                </div>
            </div>
       </div>
       <div className="col-span-12">
            <div className="flex flex-col p-5 box">
                <div className="border rounded-[0.6rem] relative mt-3">
                <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs bg-white">
                    <h3>Coupon Information</h3>
                </div>
                <div className="p-5 mt-2.5 flex flex-col gap-5">
                    <div className="overflow-auto xl:overflow-visible">
                    <Table className="border-b border-dashed border-slate-200/80">
                        <Table.Thead>
                        <Table.Tr>
                            <Table.Td className="px-0 py-0 [&_div]:first:border-l [&_div]:last:border-r [&_div]:first:rounded-l-md [&_div]:last:rounded-r-md border-b-0">
                                <div className="px-5 py-4 font-medium bg-black text-white">
                                    Coupon Code
                                </div>
                            </Table.Td>
                            <Table.Td className="px-0 py-0 [&_div]:first:border-l [&_div]:last:border-r [&_div]:first:rounded-l-md [&_div]:last:rounded-r-md border-b-0">
                                <div className="px-5 py-4 font-medium bg-black text-white">
                                    Valid From
                                </div>
                            </Table.Td>
                            <Table.Td className="px-0 py-0 [&_div]:first:border-l [&_div]:last:border-r [&_div]:first:rounded-l-md [&_div]:last:rounded-r-md border-b-0">
                                <div className="px-5 py-4 font-medium bg-black text-white">
                                    Valid To
                                </div>
                            </Table.Td>
                            <Table.Td className="px-0 py-0 [&_div]:first:border-l [&_div]:last:border-r [&_div]:first:rounded-l-md [&_div]:last:rounded-r-md border-b-0">
                                <div className="px-5 py-4 font-medium bg-black text-white">
                                    Discount Type
                                </div>
                            </Table.Td>
                            <Table.Td className="px-0 py-0 [&_div]:first:border-l [&_div]:last:border-r [&_div]:first:rounded-l-md [&_div]:last:rounded-r-md border-b-0">
                                <div className="px-5 py-4 font-medium bg-black text-white">
                                    Discount Value
                                </div>
                            </Table.Td>
                            <Table.Td className="px-0 py-0 [&_div]:first:border-l [&_div]:last:border-r [&_div]:first:rounded-l-md [&_div]:last:rounded-r-md border-b-0">
                                <div className="px-5 py-4 font-medium bg-black text-white">
                                    Qualifier Amount
                                </div>
                            </Table.Td>
                            <Table.Td className="px-0 py-0 [&_div]:first:border-l [&_div]:last:border-r [&_div]:first:rounded-l-md [&_div]:last:rounded-r-md border-b-0">
                                <div className="px-5 py-4 font-medium bg-black text-white">
                                    Redeem Receipt No
                                </div>
                            </Table.Td>
                            <Table.Td className="px-0 py-0 [&_div]:first:border-l [&_div]:last:border-r [&_div]:first:rounded-l-md [&_div]:last:rounded-r-md border-b-0">
                                <div className="px-5 py-4 font-medium bg-black text-white">
                                    Mobile No
                                </div>
                            </Table.Td>
                            <Table.Td className="px-0 py-0 [&_div]:first:border-l [&_div]:last:border-r [&_div]:first:rounded-l-md [&_div]:last:rounded-r-md border-b-0">
                                <div className="px-5 py-4 font-medium bg-black text-white">
                                    Action
                                </div>
                            </Table.Td>
                        </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>                    
                            <Table.Tr className="[&_td]:last:border-b-0">
                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                    <div className="whitespace-nowrap">
                                        2978039
                                    </div>
                                </Table.Td>
                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                    <div className= "flex items-center">
                                        <div className="ml-1.5 whitespace-nowrap">
                                            15/12/2023
                                        </div>
                                    </div>
                                </Table.Td>
                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                    <div className="whitespace-nowrap">
                                        14/03/2024
                                    </div>
                                </Table.Td>
                                <Table.Td className="py-4border-dashed dark:bg-darkmode-600">
                                    <div className="flex items-center justify-center text-primary whitespace-nowrap"
                                       >Men's Wears
                                    </div>
                                </Table.Td>
                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                    <div className="flex items-center justify-center text-primary whitespace-nowrap"
                                      >500
                                    </div>
                                </Table.Td>
                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                    <div className="flex items-center justify-center text-primary whitespace-nowrap"
                                        >500
                                    </div>
                                </Table.Td>
                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                    <div className="flex items-center justify-center text-primary whitespace-nowrap"
                                        >INVOICE0056
                                    </div>
                                </Table.Td>
                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                    <div className="flex items-center justify-center text-primary whitespace-nowrap"
                                        >9971705858
                                    </div>
                                </Table.Td>
                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                    <div className="flex items-center justify-center text-primary whitespace-nowrap"
                                        >Active
                                    </div>
                                </Table.Td>
                            </Table.Tr>
                            <Table.Tr className="[&_td]:last:border-b-0">
                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                    <div className="whitespace-nowrap">
                                        2978039
                                    </div>
                                </Table.Td>
                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                    <div className= "flex items-center">
                                        <div className="ml-1.5 whitespace-nowrap">
                                            15/12/2023
                                        </div>
                                    </div>
                                </Table.Td>
                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                    <div className="whitespace-nowrap">
                                        14/03/2024
                                    </div>
                                </Table.Td>
                                <Table.Td className="py-4border-dashed dark:bg-darkmode-600">
                                    <div className="flex items-center justify-center text-primary whitespace-nowrap"
                                       >Men's Wears
                                    </div>
                                </Table.Td>
                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                    <div className="flex items-center justify-center text-primary whitespace-nowrap"
                                        >500
                                    </div>
                                </Table.Td>
                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                    <div className="flex items-center justify-center text-primary whitespace-nowrap"
                                        >500
                                    </div>
                                </Table.Td>
                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                    <div className="flex items-center justify-center text-primary whitespace-nowrap"
                                        >INVOICE0056
                                    </div>
                                </Table.Td>
                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                    <div className="flex items-center justify-center text-primary whitespace-nowrap"
                                        >9971705858
                                    </div>
                                </Table.Td>
                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                    <div className="flex items-center justify-center text-primary whitespace-nowrap"
                                        >Active
                                    </div>
                                </Table.Td>
                            </Table.Tr>
                        </Table.Tbody>
                    </Table>
                    </div>
                    {/* <div className="mt-2">
                    <Button
                        variant="primary"
                        className="w-full bg-white text-primary border-primary/20 hover:bg-primary/20"
                    >
                        View all transactions
                        <Lucide
                        icon="ArrowRight"
                        className="stroke-[1.3] w-4 h-4 ml-2"
                        />
                    </Button>
                    </div> */}
                </div>
                </div>
            </div>
       </div>
    </div>
  );
}

export default LoyaltyEnrollment;
