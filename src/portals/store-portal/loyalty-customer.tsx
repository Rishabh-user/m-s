import React, {useState, ChangeEvent, FormEvent} from "react";
import Breadcrumb from "@/components/Base/Breadcrumb";
import Lucide from "@/components/Base/Lucide";
import Pagination from "@/components/Base/Pagination";
import { FormInput, FormLabel, FormInline, FormSelect } from "@/components/Base/Form";
import Button from "@/components/Base/Button";
import Table from "@/components/Base/Table";
import _ from "lodash";
import { searchCustomer } from "./api";
import { GetLCRunningBalance } from "./api";
import { GetCoupenCodeForAccountNoForStorePortal } from "./api";
import LoadingIcon from "@/components/Base/LoadingIcon";

function LoyaltyCustomer() {
    const [formData, setFormData] = useState({
        name: '',
        emailID: '',
        loyaltyId: '',
        mobile: '',
      });
      const [customerData, setCustomerData] = useState<any>(null);
      const [balanceData, setBalanceData] = useState<any | null>(null);
      const [coupenCodeData, setCoupenCodeData] = useState<any | null>(null);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState<string | null>(null);
    
      const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
    
        try {
          const data = await searchCustomer(formData.name, formData.mobile, formData.emailID);
          setCustomerData(data);    
          const accountNo = data.memberContact[0].account_No;
          const balance = await GetLCRunningBalance(accountNo);
          setBalanceData(balance);
          const coupenCode = await GetCoupenCodeForAccountNoForStorePortal(accountNo);
          setCoupenCodeData(coupenCode);
        } catch (err) {
          setError('Error fetching customer or balance data');
        } finally {
          setLoading(false);
        }
      };

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6  mt-15">
      <div className="col-span-12">        
        {/* BEGIN: Breadcrumb */}
        <Breadcrumb className="flex-1 hidden xl:block">
          <Breadcrumb.Link to="/" className="text-white">Dashboards</Breadcrumb.Link>
          <Breadcrumb.Link to="/store-portal" className="text-white">Store Portal</Breadcrumb.Link>
          <Breadcrumb.Link to="/" className="text-white">Loyalty Customer</Breadcrumb.Link>
        </Breadcrumb>
        {/* END: Breadcrumb */}
       </div>
       <div className="col-span-12">
        <div className="flex flex-col gap-8 mt-3.5">
          <div className="flex flex-col box py-4">
            <div className="flex flex-col p-5 xl:items-center xl:flex-row gap-y-2">
            <form onSubmit={handleSubmit}
                className="flex xl:flex-row flex-col items-end border-dashed gap-x-5 gap-y-2 border border-slate-300/80 xl:border-0 rounded-[0.6rem] p-4 sm:p-5 xl:p-0"
                >
                <div>
                    <FormLabel className="mr-3 whitespace-nowrap">Name</FormLabel>
                    <FormInput
                    type="text"
                    name="name"
                    onChange={handleInputChange}
                    value={formData.name}
                    />
                </div>
                <div>
                    <FormLabel className="mr-3 whitespace-nowrap">Email ID</FormLabel>
                    <FormInput
                    type="text"
                    name="emailID"
                    onChange={handleInputChange}
                    value={formData.emailID}
                    />
                </div>
                <div>
                    <FormLabel className="mr-3 whitespace-nowrap">Loyalty ID</FormLabel>
                    <FormInput
                    type="text"
                    // onChange={handleInputChange}
                    // value={formData.loyaltyId}
                    />
                </div>
                <div>
                    <FormLabel className="mr-3 whitespace-nowrap">Mobile No.</FormLabel>
                    <FormInput
                    type="text"
                    name="mobile"
                    onChange={handleInputChange}
                    value={formData.mobile}
                    />
                </div>
                <div className="flex gap-2">
                    <Button type="submit" className="btn-primary">
                       Search
                    </Button>
                    <Button type="button" className="btn-primary">
                        <Lucide icon="RotateCw" className="block" />
                    </Button>
                </div>
                </form>
            </div>
          </div>
        </div>
       </div>
       {customerData && customerData.memberContact  && (
       <div className="col-span-12">
        <div className="col-span-12">
          <div className="col-span-12 mb-5">
            <div className="grid grid-cols-10 gap-5">
              <div className="col-span-12">
                <div className="flex flex-col p-5 box h-full">
                  <div className="flex flex-col gap-5 h-full">
                    <div className="border rounded-[0.6rem] relative mt-3 h-full">
                      <div className="absolute left-0 px-3 ml-4 -mt-3 bg-white">
                        <h3>Members Information</h3>
                      </div>
                      <div className="p-5 mt-2.5 flex flex-col gap-5">
                        <table className="min-w-full leading-normal">
                          <thead className="bg-black">
                            <tr>
                              <th className="px-5 py-3 border-b dark:border-darkmode-300 whitespace-nowrap text-white text-left">
                                Name
                              </th>
                              <th className="px-5 py-3 border-b dark:border-darkmode-300 whitespace-nowrap text-white text-left">
                                Account No
                              </th>                              
                              <th className="px-5 py-3 border-b dark:border-darkmode-300 whitespace-nowrap text-white text-left">
                                Mobile No
                              </th>
                              <th className="px-5 py-3 border-b dark:border-darkmode-300 whitespace-nowrap text-white text-left">
                                Email
                              </th>
                              <th className="px-5 py-3 border-b dark:border-darkmode-300 whitespace-nowrap text-white text-left">
                                Tier
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {customerData.memberContact.map((contact, index) => (
                              <tr key={index}>
                                <td className="px-5 border-b dark:border-darkmode-300 py-4 border-dashed dark:bg-darkmode-600">
                                  {contact.name}
                                </td>
                                <td className="px-5 border-b dark:border-darkmode-300 py-4 border-dashed dark:bg-darkmode-600">
                                  {contact.account_No}
                                </td>                                
                                <td className="px-5 border-b dark:border-darkmode-300 py-4 border-dashed dark:bg-darkmode-600">
                                  {contact.mobile_Phone_No}
                                </td>
                                <td className="px-5 border-b dark:border-darkmode-300 py-4 border-dashed dark:bg-darkmode-600">
                                  {contact.e_Mail}
                                </td>
                                <td className="px-5 border-b dark:border-darkmode-300 py-4 border-dashed dark:bg-darkmode-600">
                                  {contact.scheme_Code}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>                    
                  </div>
                </div>
              </div>             
            </div>
          </div>
        </div>
            <div className="col-span-12 mb-5">
                <div className="grid grid-cols-10 gap-5">
                    <div className="col-span-12 xl:col-span-3">
                        <div className="flex flex-col p-5 box h-full">
                        <div className="flex flex-col gap-5 h-full">
                            <div className="border rounded-[0.6rem] relative mt-3 h-full">
                            <div className="absolute left-0 px-3 ml-4 -mt-3 bg-white">
                                <h3>Member Information</h3>
                            </div>
                            <div className="p-5 mt-2.5 flex flex-col gap-5">
                                <div className="flex items-center">
                                <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                    <div className="sm:mr-auto w-54">Name:</div>
                                    <span> {customerData.memberContact[0].name} </span>
                                </div>
                                </div>
                                <div className="flex items-center">                      
                                <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                    <div className="sm:mr-auto w-54">Tier</div>
                                    <span>{customerData.memberContact[0].scheme_Code}</span>
                                </div>
                                </div>
                                <div className="flex items-center">                      
                                <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                    <div className="sm:mr-auto w-54">Account No</div>
                                    <span>{customerData.memberContact[0].account_No}</span>
                                </div>
                                </div>
                                <div className="flex items-center">                     
                                <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                    <div className="sm:mr-auto w-54">Mobile No</div>
                                    <div className="text-right truncate w-52">
                                        {customerData.memberContact[0].mobile_Phone_No}
                                    </div>
                                </div>
                                </div>
                                
                                <div className="flex items-center">                      
                                <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                    <div className="sm:mr-auto">Status</div>
                                    <span>N/A</span>
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
                                            <span>{customerData.memberContact[0].account_No} </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center">                      
                                        <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                            <div>Tier</div>
                                            <div>{customerData.memberContact[0].scheme_Code}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">                      
                                        <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                            <div>Date of Anniversary</div>
                                            <div>{customerData.memberContact[0].wedding_Anniversary? new Date(customerData.memberContact[0].wedding_Anniversary).toLocaleDateString() : 'N/A'}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">                     
                                        <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                            <div>Email ID</div>
                                            <div>{customerData.memberContact[0].e_Mail}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">                      
                                        <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                            <div>Address</div>
                                            <span>{customerData.memberContact[0].address}, {customerData.memberContact[0].address_2}, {customerData.memberContact[0].city}</span>
                                        </div>
                                    </div>   
                                    <div className="flex items-center">                      
                                        <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                            <div>Enrollment Date</div>
                                            <span>{customerData.memberContact[0].last_date_modified}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center">                      
                                        <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                            <div>Account Status</div>
                                            <span>{customerData.memberContact[0].main_Contact}</span>
                                        </div>
                                    </div>                     
                                </div>
                                <div className="flex flex-col col-span-12 col-span-6 gap-7 pl-4 border-left">
                                    <div className="flex items-center">
                                        <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                            <div>Name</div>
                                            <span>{customerData.memberContact[0].name}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center">                      
                                        <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                            <div>Date of Birth</div>
                                            <div>{customerData.memberContact[0].date_of_Birth ? new Date(customerData.memberContact[0].date_of_Birth).toLocaleDateString() : 'N/A'}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">                      
                                        <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                            <div>Mobile No</div>
                                            <div>{customerData.memberContact[0].mobile_Phone_No}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">                     
                                        <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                            <div>Gender</div>
                                            <div>{customerData.memberContact[0].gender === 1 ? 'Male' : 'Female'}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">                      
                                        <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                            <div>Enrollment Store</div>
                                            <span>{customerData.memberContact[0].club_Code}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center">                      
                                        <div className="flex flex-col justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                            <div>Balance Points</div>
                                            <span>{customerData.memberContact[0].unprocessed_Points}</span>
                                        </div>
                                    </div>                        
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>            
            <div className="col-span-12 mb-5">
                <div className="flex flex-col p-5 box">
                    <div className="border rounded-[0.6rem] relative mt-3">
                    <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs bg-white">
                        <h3>Loyalty Account Running Balance</h3>
                    </div>
                    <div className="p-5 mt-2.5 flex flex-col gap-5">
                        <div className="overflow-x-auto">
                        {loading ? (
                            <div className="flex items-center justify-center">
                                <LoadingIcon icon={"oval"} className="w-20 h-20 flex items-center justify-center" />
                            </div>
                            ) : (
                            <Table className="border-b border-dashed border-slate-200/80">
                                <Table.Thead className="bg-black">
                                <Table.Tr>
                                    <Table.Td className="whitespace-nowrap text-white">
                                        Receipt No
                                    </Table.Td>
                                    <Table.Td  className="whitespace-nowrap text-white">
                                        Transaction Date Time
                                    </Table.Td>
                                    <Table.Td  className="whitespace-nowrap text-white">
                                        Store Code
                                    </Table.Td>
                                    <Table.Td  className="whitespace-nowrap text-white">
                                        Payment
                                    </Table.Td>
                                    <Table.Td  className="whitespace-nowrap text-white">
                                        Tier
                                    </Table.Td>
                                    <Table.Td  className="whitespace-nowrap text-white">
                                        Earned Points
                                    </Table.Td>
                                    <Table.Td  className="whitespace-nowrap text-white">
                                        Redeemed Points
                                    </Table.Td>
                                </Table.Tr>
                                </Table.Thead>
                                <Table.Tbody> 
                                    {balanceData?.data?.LCRunningBalance.map((LCBalance, index) => (
                                        <Table.Tr key={index} className="[&_td]:last:border-b-0">
                                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                            <div className="whitespace-nowrap">
                                                {LCBalance.ReceiptNo}
                                            </div>
                                        </Table.Td>
                                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                            <div className= "flex items-center">
                                                <div className="ml-1.5 whitespace-nowrap">
                                                    {new Date(LCBalance.TransactionDateTime).toLocaleString()}
                                                </div>
                                            </div>
                                        </Table.Td>
                                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                            <div className="whitespace-nowrap">
                                                {LCBalance.StoreShortCode}
                                            </div>
                                        </Table.Td>
                                        <Table.Td className="py-4border-dashed dark:bg-darkmode-600">
                                            <div className="flex items-center justify-center text-primary whitespace-nowrap"
                                            >
                                                {LCBalance.Payment || 'N/A'}
                                            </div>
                                        </Table.Td>
                                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                            <div className="flex items-center justify-center text-primary whitespace-nowrap"
                                            >
                                                {LCBalance.Tier}
                                            </div>
                                        </Table.Td>
                                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                            <div className="flex items-center justify-center text-primary whitespace-nowrap"
                                            >
                                                {LCBalance.EarnedPoints}
                                            </div>
                                        </Table.Td>
                                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                            <div className="flex items-center justify-center text-primary whitespace-nowrap"
                                            >
                                                {LCBalance.RedeemedPoints}
                                            </div>
                                        </Table.Td>
                                        </Table.Tr>
                                    ))}      
                                </Table.Tbody>
                            </Table>
                        )}
                        </div>
                        <div className="flex flex-col-reverse flex-wrap items-center p-5 flex-reverse gap-y-2 sm:flex-row">
                            <Pagination className="flex-1 w-full mr-auto sm:w-auto">
                                <Pagination.Link>
                                <Lucide icon="ChevronsLeft" className="w-4 h-4" />
                                </Pagination.Link>
                                <Pagination.Link>
                                <Lucide icon="ChevronLeft" className="w-4 h-4" />
                                </Pagination.Link>
                                <Pagination.Link>...</Pagination.Link>
                                <Pagination.Link>1</Pagination.Link>
                                <Pagination.Link active>2</Pagination.Link>
                                <Pagination.Link>3</Pagination.Link>
                                <Pagination.Link>...</Pagination.Link>
                                <Pagination.Link>
                                <Lucide icon="ChevronRight" className="w-4 h-4" />
                                </Pagination.Link>
                                <Pagination.Link>
                                <Lucide icon="ChevronsRight" className="w-4 h-4" />
                                </Pagination.Link>
                            </Pagination>
                            <FormSelect className="sm:w-20 rounded-[0.5rem]">
                                <option>10</option>
                                <option>25</option>
                                <option>35</option>
                                <option>50</option>
                            </FormSelect>
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>
            <div className="col-span-12 mb-5">
                <div className="flex flex-col p-5 box">
                    <div className="border rounded-[0.6rem] relative mt-3">
                    <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs bg-white">
                        <h3>Coupon Information</h3>
                    </div>
                    <div className="p-5 mt-2.5 flex flex-col gap-5">
                        <div className="overflow-x-auto">
                        {loading ? (
                        <div className="flex items-center justify-center">
                            <LoadingIcon icon={"oval"} className="w-20 h-20 flex items-center justify-center" />
                        </div>
                        ) : (
                        <Table className="border-b border-dashed border-slate-200/80">
                            <Table.Thead className="bg-black">
                            <Table.Tr>
                                <Table.Td className="whitespace-nowrap text-white">
                                Coupon Code
                                </Table.Td>
                                <Table.Td className="whitespace-nowrap text-white">
                                    Valid From
                                </Table.Td>
                                <Table.Td className="whitespace-nowrap text-white">
                                    Valid To
                                </Table.Td>
                                <Table.Td className="whitespace-nowrap text-white">
                                    Discount Type
                                </Table.Td>
                                <Table.Td className="whitespace-nowrap text-white">
                                    Discount Value
                                </Table.Td>
                                <Table.Td className="whitespace-nowrap text-white">
                                    Qualifier Amount
                                </Table.Td>
                                <Table.Td className="whitespace-nowrap text-white">
                                    Redeem Receipt No
                                </Table.Td>
                                <Table.Td className="whitespace-nowrap text-white">
                                    Mobile No
                                </Table.Td>
                                <Table.Td className="whitespace-nowrap text-white">
                                    Action
                                </Table.Td>
                            </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody> 
                                {coupenCodeData?.data?.VouchersByAccountNoForStorePortal.map((coupenData, index) => ( 
                                    <Table.Tr key={index} className="[&_td]:last:border-b-0">
                                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                            <div className="whitespace-nowrap">
                                                {coupenData.Barcode}
                                            </div>
                                        </Table.Td>
                                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                            <div className= "flex items-center">
                                                <div className="ml-1.5 whitespace-nowrap">
                                                    {coupenData.ValidFrom}
                                                </div>
                                            </div>
                                        </Table.Td>
                                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                            <div className="whitespace-nowrap">
                                                {coupenData.ValidTo}
                                            </div>
                                        </Table.Td>
                                        <Table.Td className="py-4border-dashed dark:bg-darkmode-600">
                                            <div className="flex items-center justify-center text-primary whitespace-nowrap"
                                            >
                                                {coupenData.DiscountType}
                                            </div>
                                        </Table.Td>
                                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                            <div className="flex items-center justify-center text-primary whitespace-nowrap"
                                            >
                                                {coupenData.DiscountValue}
                                            </div>
                                        </Table.Td>
                                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                            <div className="flex items-center justify-center text-primary whitespace-nowrap"
                                            >
                                                {coupenData.QualifierAmount}
                                            </div>
                                        </Table.Td>
                                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                            <div className="flex items-center justify-center text-primary whitespace-nowrap"
                                            >
                                                    {coupenData.RedeemReceiptNo}   
                                            </div>
                                        </Table.Td>
                                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                            <div className="flex items-center justify-center text-primary whitespace-nowrap"
                                            >
                                                {coupenData.MobileNo}
                                            </div>
                                        </Table.Td>
                                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                            <div className="flex items-center justify-center text-primary whitespace-nowrap"
                                            >
                                                {coupenData.isExpired === 1 ? 'Active' : 'Inactive'}
                                            </div>
                                        </Table.Td>
                                    </Table.Tr>
                                ))}  
                            </Table.Tbody>
                        </Table>
                        )}
                        </div>
                        
                    </div>
                    </div>
                </div>                 
            </div>           
       </div>
       )}
       
    </div>
  );
}

export default LoyaltyCustomer;
