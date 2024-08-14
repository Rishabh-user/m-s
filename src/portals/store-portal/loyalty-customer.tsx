import React, {useState, ChangeEvent, FormEvent, useEffect} from "react";
import Breadcrumb from "@/components/Base/Breadcrumb";
import Lucide from "@/components/Base/Lucide";
import { FormInput, FormLabel, FormInline, FormSelect } from "@/components/Base/Form";
import Button from "@/components/Base/Button";
import Table from "@/components/Base/Table";
import _ from "lodash";
import { searchCustomer, GetLCRunningBalance, GetCoupenCodeForAccountNoForStorePortal } from "../../api";
import Loader from "@/components/Base/LoadingIcon/loader";

function LoyaltyCustomer() {
    const [formData, setFormData] = useState({
        name: '',
        emailID: '',
        loyaltyId: '',
        mobile: '',
      });
      const [customerData, setCustomerData] = useState<any>(null);
      const [selectedContact, setSelectedContact] = useState<any>(null);
      const [balanceData, setBalanceData] = useState<any | null>(null);
      const [coupenCodeData, setCoupenCodeData] = useState<any | null>(null);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState<string | null>(null);

      // Customer table pagination state
      const [customerPage, setCustomerPage] = useState(1);
      const [customerItemsPerPage, setCustomerItemsPerPage] = useState(10);

      // Balance table pagination state
      const [balancePage, setBalancePage] = useState(1);
      const [balanceItemsPerPage, setBalanceItemsPerPage] = useState(10);   
      
      // Coupen Code table pagination state
      const [coupenPage, setCoupenPage] = useState(1);
      const [CoupenItemsPerPage, setCoupenItemsPerPage] = useState(10);
    
      const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
      // Handle items per page change for customer table
      const handleCustomerItemsPerPageChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setCustomerItemsPerPage(parseInt(event.target.value, 10));
        setCustomerPage(1); 
      };
      // Handle items per page change for LCRunningbalance table
      const handleBalanceItemsPerPageChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setBalanceItemsPerPage(parseInt(event.target.value, 10));
        setBalancePage(1); 
      };  
      // Handle items per page change for Coupen Code table
      const handleCoupenItemsPerPageChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setCoupenItemsPerPage(parseInt(event.target.value, 10));
        setCoupenPage(1); 
      };   
      const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        if (!formData.name && !formData.mobile && !formData.emailID) {
            setError('Please enter at least one search criteria');
            setLoading(false);
            return;
        }       
        try {
          const data = await searchCustomer(formData.name, formData.mobile, formData.emailID);
          setCustomerData(data);    
          if (data.memberContact && data.memberContact.length > 0) {
            const accountNo = data.memberContact[0].account_No;
            const balance = await GetLCRunningBalance(accountNo);
            setBalanceData(balance);
            const coupenCode = await GetCoupenCodeForAccountNoForStorePortal(accountNo);
            setCoupenCodeData(coupenCode);
        }
        } catch (err) {
          setError('Error fetching customer or balance data');
        } finally {
          setLoading(false);
        }
    };
    // on mobile click    
    const handleMobileClick = async (contact) => {
        setSelectedContact(contact);
        setCustomerData(true);
        try {
            const data = await searchCustomer('', contact.mobile_Phone_No, '');
            setSelectedContact(data);
            const accountNo = data.memberContact[0].account_No;
            const balance = await GetLCRunningBalance(accountNo);
            setBalanceData(balance);
            const coupenCode = await GetCoupenCodeForAccountNoForStorePortal(accountNo);
            setCoupenCodeData(coupenCode);
        } catch (error) {
          console.error('Error sending mobile number:', error);
        } finally {
            setLoading(false);
        }
    };
    // Clear form
    const handleClearForm = () => {
        setFormData({
            name: '',
            emailID: '',
            loyaltyId: '',
            mobile: '',
        });
    };
    // Pagination calculations for customer table
    const customerTotalItems = customerData?.memberContact?.length || 0;
    const customerTotalPages = Math.ceil(customerTotalItems / customerItemsPerPage);
    const customerIndexOfLastItem = customerPage * customerItemsPerPage;
    const customerIndexOfFirstItem = customerIndexOfLastItem - customerItemsPerPage;
    const currentCustomerItems = customerData?.memberContact?.slice(customerIndexOfFirstItem, customerIndexOfLastItem);

    // Pagination calculations for balance table
    const balanceTotalItems = balanceData?.data?.LCRunningBalance?.length || 0;
    const balanceTotalPages = Math.ceil(balanceTotalItems / balanceItemsPerPage);
    const balanceIndexOfLastItem = balancePage * balanceItemsPerPage;
    const balanceIndexOfFirstItem = balanceIndexOfLastItem - balanceItemsPerPage;
    const currentBalanceItems = balanceData?.data?.LCRunningBalance?.slice(balanceIndexOfFirstItem, balanceIndexOfLastItem);
    
    // Pagination calculations for coupen table
    const coupenTotalItems = coupenCodeData?.data?.VouchersByAccountNoForStorePortal?.length || 0;
    const coupenTotalPages = Math.ceil(coupenTotalItems / CoupenItemsPerPage);
    const coupenIndexOfLastItem = coupenPage * CoupenItemsPerPage;
    const coupenIndexOfFirstItem = coupenIndexOfLastItem - balanceItemsPerPage;
    const currentCoupenItems = coupenCodeData?.data?.VouchersByAccountNoForStorePortal?.slice(coupenIndexOfFirstItem, coupenIndexOfLastItem);

    // Pagination component
    const Pagination = ({ currentPage, totalPages, onPageChange }: { currentPage: number, totalPages: number, onPageChange: (pageNumber: number) => void }) => {
        const maxPagesToShow = 5;
        const getPaginationRange = () => {
            const start = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
            const end = Math.min(totalPages, start + maxPagesToShow - 1);
            return { start, end };
        };
        const { start, end } = getPaginationRange();
        return (
            <div className="flex justify-between mt-4 w-[100%]">
                <div className="flex justify-center pagination">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => onPageChange(currentPage - 1)}
                        className="px-4 rounded disabled:opacity-50"
                    >
                        <Lucide icon="ChevronsLeft" className="w-5 h-5" />
                    </button>
                    {Array.from({ length: end - start + 1 }, (_, index) => (
                        <button
                            key={start + index}
                            onClick={() => onPageChange(start + index)}
                            className={`px-4 ${currentPage === start + index} rounded mx-2`}
                        >
                            {start + index}
                        </button>
                    ))}
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => onPageChange(currentPage + 1)}
                        className="px-4 rounded disabled:opacity-50"
                    >
                        <Lucide icon="ChevronsRight" className="w-5 h-5" />
                    </button>
                </div>                
            </div>
        );
    };

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6  mt-15">
        {/* {loading && 
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                <Loader className="w-20 h-20" icon={"oval"} />
            </div>
        } */}
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
                className="flex lg:flex-row flex-col items-end border-dashed gap-x-5 gap-y-2 border border-slate-300/80 xl:border-0 rounded-[0.6rem] p-4 sm:p-5 xl:p-0"
                >
                <div className="w-[100%]">
                    <FormLabel className="mr-3 whitespace-nowrap">Name</FormLabel>
                    <FormInput
                    type="text"
                    name="name"
                    onChange={handleInputChange}
                    value={formData.name}
                    />
                </div>
                <div className="w-[100%]">
                    <FormLabel className="mr-3 whitespace-nowrap">Email ID</FormLabel>
                    <FormInput
                    type="text"
                    name="emailID"
                    onChange={handleInputChange}
                    value={formData.emailID}
                    />
                </div>
                <div className="w-[100%]">
                    <FormLabel className="mr-3 whitespace-nowrap">Loyalty ID</FormLabel>
                    <FormInput
                    type="text"
                    // onChange={handleInputChange}
                    // value={formData.loyaltyId}
                    />
                </div>
                <div  className="w-[100%]">
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
                    <Button type="button" className="btn-primary" onClick={handleClearForm}>
                        <Lucide icon="RotateCw" className="block" />
                    </Button>
                </div>
            </form>
            {error && <div className="text-red-500">{error}</div>}
            </div>
          </div>
        </div>
       </div>
       {customerData && (
            <div className="col-span-12">
                {formData.name && !formData.mobile && !formData.emailID && customerData.memberContact && customerData.memberContact.length > 0 ? (
                    <div className="col-span-12 mb-5">
                        <div className="flex flex-col p-4 box h-full">
                            <div className="flex flex-col gap-5 h-full">
                                <div className="border rounded-[0.6rem] relative mt-3 h-full">
                                    <div className="absolute left-0 px-3 ml-4 -mt-3 bg-white">
                                        <h3>Members Information</h3>
                                    </div>
                                    <div className="p-4 mt-2.5 flex flex-col gap-5">
                                        <div className="overflow-auto">
                                            <table className="min-w-full leading-normal">
                                                <thead className="bg-black">
                                                    <tr>
                                                        <th className="px-5 py-3 border-b dark:border-darkmode-300 whitespace-nowrap text-white text-left">S.No</th>
                                                        <th className="px-5 py-3 border-b dark:border-darkmode-300 whitespace-nowrap text-white text-left">Name</th>
                                                        <th className="px-5 py-3 border-b dark:border-darkmode-300 whitespace-nowrap text-white text-left">Account No</th>                              
                                                        <th className="px-5 py-3 border-b dark:border-darkmode-300 whitespace-nowrap text-white text-left">Mobile No</th>
                                                        <th className="px-5 py-3 border-b dark:border-darkmode-300 whitespace-nowrap text-white text-left">Email</th>
                                                        <th className="px-5 py-3 border-b dark:border-darkmode-300 whitespace-nowrap text-white text-left">Tier</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {currentCustomerItems?.map((contact, index) => (
                                                        <tr key={index}>
                                                            <td className="px-5 border-b dark:border-darkmode-300 py-4 border-dashed dark:bg-darkmode-600">{index+1}</td>
                                                            <td className="px-5 border-b dark:border-darkmode-300 py-4 border-dashed dark:bg-darkmode-600">{contact.name}</td>
                                                            <td className="px-5 border-b dark:border-darkmode-300 py-4 border-dashed dark:bg-darkmode-600">{contact.account_No}</td>                                
                                                            <td className="px-5 border-b dark:border-darkmode-300 py-4 border-dashed dark:bg-darkmode-600" onClick={() => handleMobileClick(contact)}>{contact.mobile_Phone_No}</td>
                                                            <td className="px-5 border-b dark:border-darkmode-300 py-4 border-dashed dark:bg-darkmode-600">{contact.e_Mail}</td>
                                                            <td className="px-5 border-b dark:border-darkmode-300 py-4 border-dashed dark:bg-darkmode-600">{contact.scheme_Code}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="flex flex-col-reverse items-center p-5 flex-reverse justify-between gap-y-2 sm:flex-row">
                                            <Pagination
                                                currentPage={customerPage}
                                                totalPages={customerTotalPages}
                                                onPageChange={setCustomerPage}
                                            />
                                            <FormSelect
                                                className="sm:w-20 rounded-[0.5rem]"
                                                onChange={handleCustomerItemsPerPageChange}
                                                value={customerItemsPerPage}
                                            >
                                                <option value={10}>10</option>
                                                <option value={25}>25</option>
                                                <option value={35}>35</option>
                                                <option value={50}>50</option>
                                            </FormSelect>
                                        </div>
                                    </div>
                                </div>                    
                            </div>
                        </div>
                    </div>
                ) : (
                    (formData.name || formData.mobile || formData.emailID) && customerData.memberContact && customerData.memberContact.length > 0 && (
                        <div>
                            <div className="col-span-12 mb-5">
                                <div className="grid grid-cols-10 gap-5">
                                    <div className="col-span-12 xl:col-span-3">
                                        <div className="flex flex-col p-4 box h-full">
                                            <div className="flex flex-col gap-5 h-full">
                                                <div className="border rounded-[0.6rem] relative mt-3 h-full">
                                                    <div className="absolute left-0 px-3 ml-4 -mt-3 bg-white">
                                                        <h3>Member Information</h3>
                                                    </div>
                                                    <div className="p-4 mt-2.5 flex flex-col gap-5">
                                                        <div className="flex items-center">
                                                            <div className="flex justify-between w-full sm:items-center sm:flex-row gap-y-1">
                                                                <div className="sm:mr-auto w-54">Name:</div>
                                                                <span>{customerData.memberContact[0].name}</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center">                      
                                                            <div className="flex justify-between w-full sm:items-center sm:flex-row gap-y-1">
                                                                <div className="sm:mr-auto w-54">Tier</div>
                                                                <span>{customerData.memberContact[0].scheme_Code}</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center">                      
                                                            <div className="flex justify-between w-full sm:items-center sm:flex-row gap-y-1">
                                                                <div className="sm:mr-auto w-54">Account No</div>
                                                                <span>{customerData.memberContact[0].account_No}</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center">                     
                                                            <div className="flex justify-between w-full sm:items-center sm:flex-row gap-y-1">
                                                                <div className="sm:mr-auto w-54">Mobile No</div>
                                                                <div className="text-right truncate w-52">
                                                                    {customerData.memberContact[0].mobile_Phone_No}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center">                      
                                                            <div className="flex justify-between w-full sm:items-center sm:flex-row gap-y-1">
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
                                        <div className="flex flex-col p-4 box">
                                            <div className="border rounded-[0.6rem] relative mt-3">
                                                <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs bg-white">
                                                    <h3>Personal Information</h3>
                                                </div>
                                                <div className="grid grid-cols-12 gap-5 mt-3.5 p-4">
                                                    <div className="flex flex-col col-span-12 md:col-span-6 w-[100%] gap-7 pr-4">
                                                        <div className="flex items-center">
                                                            <div className="flex justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                                                <div>Account No</div>
                                                                <span>{customerData.memberContact[0].account_No}</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center">                      
                                                            <div className="flex justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                                                <div>Tier</div>
                                                                <div>{customerData.memberContact[0].scheme_Code}</div>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center">                      
                                                            <div className="flex justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                                                <div>Date of Anniversary</div>
                                                                <div>{customerData.memberContact[0].wedding_Anniversary ? new Date(customerData.memberContact[0].wedding_Anniversary).toLocaleDateString() : 'N/A'}</div>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center">                     
                                                            <div className="flex justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                                                <div>Email ID</div>
                                                                <div>{customerData.memberContact[0].e_Mail}</div>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center">                      
                                                            <div className="flex justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                                                <div>Address</div>
                                                                <span>{customerData.memberContact[0].address}, {customerData.memberContact[0].address_2}, {customerData.memberContact[0].city}</span>
                                                            </div>
                                                        </div>   
                                                        <div className="flex items-center">                      
                                                            <div className="flex justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                                                <div>Enrollment Date</div>
                                                                <span>{customerData.memberContact[0].last_date_modified}</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center">                      
                                                            <div className="flex justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                                                <div>Account Status</div>
                                                                <span>{customerData.memberContact[0].main_Contact}</span>
                                                            </div>
                                                        </div>                     
                                                    </div>
                                                    <div className="flex flex-col col-span-12 md:col-span-6 gap-7 pl-4 border-left">
                                                        <div className="flex items-center">
                                                            <div className="flex justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                                                <div>Name</div>
                                                                <span>{customerData.memberContact[0].name}</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center">                      
                                                            <div className="flex justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                                                <div>Date of Birth</div>
                                                                <div>{customerData.memberContact[0].date_of_Birth ? new Date(customerData.memberContact[0].date_of_Birth).toLocaleDateString() : 'N/A'}</div>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center">                      
                                                            <div className="flex justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                                                <div>Mobile No</div>
                                                                <div>{customerData.memberContact[0].mobile_Phone_No}</div>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center">                     
                                                            <div className="flex justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                                                <div>Gender</div>
                                                                <div>{customerData.memberContact[0].gender === 1 ? 'Male' : 'Female'}</div>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center">                      
                                                            <div className="flex justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                                                <div>Enrollment Store</div>
                                                                <span>{customerData.memberContact[0].club_Code}</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center">                      
                                                            <div className="flex justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
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
                                <div className="flex flex-col p-4 box">
                                    <div className="border rounded-[0.6rem] relative mt-3">
                                    <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs bg-white">
                                        <h3>Loyalty Account Running Balance</h3>
                                    </div>
                                    <div className="p-4 mt-2.5 flex flex-col gap-5">
                                        <div className="overflow-x-auto">
                                        {loading ? (
                                            <div className="flex items-center justify-center">
                                                <Loader icon={"oval"} className="w-20 h-20 flex items-center justify-center" />
                                            </div>
                                            ) : (
                                            <Table className="border-b border-dashed border-slate-200/80">
                                                <Table.Thead className="bg-black rounded overflow-hidden">
                                                <Table.Tr>
                                                    <Table.Td className="whitespace-nowrap text-white">
                                                        S.No
                                                    </Table.Td>
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
                                                    {currentBalanceItems?.map((LCBalance, index) => (
                                                        <Table.Tr key={index} className="[&_td]:last:border-b-0">
                                                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                            <div className="whitespace-nowrap">
                                                                {balanceIndexOfFirstItem  + index + 1}
                                                            </div>
                                                        </Table.Td>
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
                                                            <div className="flex items-center justify-center whitespace-nowrap"
                                                            >
                                                                {LCBalance.Payment || 'N/A'}
                                                            </div>
                                                        </Table.Td>
                                                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                            <div className="flex items-center justify-center whitespace-nowrap"
                                                            >
                                                                {LCBalance.Tier}
                                                            </div>
                                                        </Table.Td>
                                                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                            <div className="flex items-center justify-center whitespace-nowrap"
                                                            >
                                                                {LCBalance.EarnedPoints}
                                                            </div>
                                                        </Table.Td>
                                                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                            <div className="flex items-center justify-center whitespace-nowrap"
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
                                        <div className="flex flex-col-reverse justify-between items-center p-5 flex-reverse gap-y-2 sm:flex-row">
                                            <Pagination
                                                currentPage={balancePage}
                                                totalPages={balanceTotalPages}
                                                onPageChange={setBalancePage}
                                            />
                                            <FormSelect
                                                className="sm:w-20 rounded-[0.5rem]"
                                                onChange={handleBalanceItemsPerPageChange}
                                                value={balanceItemsPerPage}
                                            >
                                                <option value={10}>10</option>
                                                <option value={25}>25</option>
                                                <option value={35}>35</option>
                                                <option value={50}>50</option>
                                            </FormSelect>
                                        </div>
                                    </div>
                                    </div>
                                </div>                                
                            </div>
                            <div className="col-span-12 mb-5">
                                <div className="flex flex-col p-4 box">
                                    <div className="border rounded-[0.6rem] relative mt-3">
                                    <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs bg-white">
                                        <h3>Coupon Information</h3>
                                    </div>
                                    <div className="p-4 mt-2.5 flex flex-col gap-5">
                                        <div className="overflow-x-auto">
                                        {loading ? (
                                        <div className="flex items-center justify-center">
                                            <Loader icon={"oval"} className="w-20 h-20 flex items-center justify-center" />
                                        </div>
                                        ) : (
                                        <Table className="border-b border-dashed border-slate-200/80">
                                            <Table.Thead className="bg-black">
                                            <Table.Tr>
                                                <Table.Td className="px-3 whitespace-nowrap text-white">
                                                    S.No
                                                </Table.Td>
                                                <Table.Td className="px-3 whitespace-nowrap text-white">
                                                    Coupon Code
                                                </Table.Td>
                                                <Table.Td className="px-3 whitespace-nowrap text-white">
                                                    Valid From
                                                </Table.Td>
                                                <Table.Td className="px-3 whitespace-nowrap text-white">
                                                    Valid To
                                                </Table.Td>
                                                <Table.Td className="px-3 whitespace-nowrap text-white">
                                                    Dis. Type
                                                </Table.Td>
                                                <Table.Td className="px-3 whitespace-nowrap text-white">
                                                    Dis. Value
                                                </Table.Td>
                                                <Table.Td className="px-3 whitespace-nowrap text-white">
                                                    Qualifier Amt
                                                </Table.Td>
                                                <Table.Td className="px-3 whitespace-nowrap text-white">
                                                    Redeem Receipt No
                                                </Table.Td>
                                                <Table.Td className="px-3 whitespace-nowrap text-white">
                                                    Mobile No
                                                </Table.Td>
                                                <Table.Td className="px-3 whitespace-nowrap text-white">
                                                    Action
                                                </Table.Td>
                                            </Table.Tr>
                                            </Table.Thead>
                                            <Table.Tbody> 
                                                {currentCoupenItems?.map((coupenData, index) => ( 
                                                    <Table.Tr key={index} className="[&_td]:last:border-b-0">
                                                        <Table.Td className="px-3 py-4 border-dashed dark:bg-darkmode-600">
                                                            <div className="whitespace-nowrap">
                                                                {index+1}
                                                            </div>
                                                        </Table.Td>
                                                        <Table.Td className="px-3 py-4 border-dashed dark:bg-darkmode-600">
                                                            <div className="whitespace-nowrap">
                                                                {coupenData.Barcode}
                                                            </div>
                                                        </Table.Td>
                                                        <Table.Td className="px-3 py-4 border-dashed dark:bg-darkmode-600">
                                                            <div className= "flex items-center">
                                                                <div className="ml-1.5 whitespace-nowrap">
                                                                    {coupenData.ValidFrom}
                                                                </div>
                                                            </div>
                                                        </Table.Td>
                                                        <Table.Td className="px-3 py-4 border-dashed dark:bg-darkmode-600">
                                                            <div className="whitespace-nowrap">
                                                                {coupenData.ValidTo}
                                                            </div>
                                                        </Table.Td>
                                                        <Table.Td className="px-3 py-4 border-dashed dark:bg-darkmode-600">
                                                            <div className="flex items-center whitespace-nowrap"
                                                            >
                                                                {coupenData.DiscountType}
                                                            </div>
                                                        </Table.Td>
                                                        <Table.Td className="px-3 py-4 border-dashed dark:bg-darkmode-600">
                                                            <div className="flex items-center justify-center whitespace-nowrap"
                                                            >
                                                                {coupenData.DiscountValue}
                                                            </div>
                                                        </Table.Td>
                                                        <Table.Td className="px-3 py-4 border-dashed dark:bg-darkmode-600">
                                                            <div className="flex items-center justify-center whitespace-nowrap"
                                                            >
                                                                {coupenData.QualifierAmount}
                                                            </div>
                                                        </Table.Td>
                                                        <Table.Td className="px-3 py-4 border-dashed dark:bg-darkmode-600">
                                                            <div className="flex items-center justify-center whitespace-nowrap"
                                                            >
                                                                    {coupenData.RedeemReceiptNo}   
                                                            </div>
                                                        </Table.Td>
                                                        <Table.Td className="px-3 py-4 border-dashed dark:bg-darkmode-600">
                                                            <div className="flex items-center justify-center whitespace-nowrap"
                                                            >
                                                                {coupenData.MobileNo}
                                                            </div>
                                                        </Table.Td>
                                                        <Table.Td className="px-3 py-4 border-dashed dark:bg-darkmode-600">
                                                            <div className="flex items-center justify-center whitespace-nowrap"
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
                                        <div className="flex flex-col-reverse justify-between items-center p-5 flex-reverse gap-y-2 sm:flex-row">
                                            <Pagination
                                                currentPage={coupenPage}
                                                totalPages={coupenTotalPages}
                                                onPageChange={setCoupenPage}
                                            />
                                            <FormSelect
                                                className="sm:w-20 rounded-[0.5rem]"
                                                onChange={handleCoupenItemsPerPageChange}
                                                value={CoupenItemsPerPage}
                                            >
                                                <option value={10}>10</option>
                                                <option value={25}>25</option>
                                                <option value={35}>35</option>
                                                <option value={50}>50</option>
                                            </FormSelect>
                                        </div>
                                    </div>
                                    </div>
                                </div>                 
                            </div>
                        </div>
                    )
                )}
                {selectedContact && selectedContact.memberContact && (
                    <div>
                        <div className="col-span-12 mb-5">
                            <div className="grid grid-cols-10 gap-5">
                                <div className="col-span-12 xl:col-span-3">
                                    <div className="flex flex-col p-4 box h-full">
                                    <div className="flex flex-col gap-5 h-full">
                                        <div className="border rounded-[0.6rem] relative mt-3 h-full">
                                            <div className="absolute left-0 px-3 ml-4 -mt-3 bg-white">
                                            <h3>Member Information</h3>
                                            </div>
                                            <div className="p-4 mt-2.5 flex flex-col gap-5">
                                            <div className="flex items-center">
                                                <div className="flex justify-between w-full sm:items-center sm:flex-row gap-y-1">
                                                <div className="sm:mr-auto w-54">Name:</div>
                                                <span>{selectedContact.memberContact[0].name}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex justify-between w-full sm:items-center sm:flex-row gap-y-1">
                                                <div className="sm:mr-auto w-54">Tier</div>
                                                <span>{selectedContact.memberContact[0].scheme_Code}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex justify-between w-full sm:items-center sm:flex-row gap-y-1">
                                                <div className="sm:mr-auto w-54">Account No</div>
                                                <span>{selectedContact.memberContact[0].account_No}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex justify-between w-full sm:items-center sm:flex-row gap-y-1">
                                                <div className="sm:mr-auto w-54">Mobile No</div>
                                                <div className="text-right truncate w-52">
                                                    {selectedContact.memberContact[0].mobile_Phone_No}
                                                </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex justify-between w-full sm:items-center sm:flex-row gap-y-1">
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
                                    <div className="flex flex-col p-4 box">
                                        <div className="border rounded-[0.6rem] relative mt-3">
                                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs bg-white">
                                            <h3>Personal Information</h3>
                                        </div>
                                        <div className="grid grid-cols-12 gap-5 mt-3.5 p-4">
                                            <div className="flex flex-col col-span-12 col-span-6 gap-7 pr-4">
                                            <div className="flex items-center">
                                                <div className="flex justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                                <div>Account No</div>
                                                <span>{selectedContact.memberContact[0].account_No}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                                <div>Tier</div>
                                                <div>{selectedContact.memberContact[0].scheme_Code}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                                <div>Date of Anniversary</div>
                                                <div>{selectedContact.memberContact[0].wedding_Anniversary ? new Date(selectedContact.memberContact[0].wedding_Anniversary).toLocaleDateString() : 'N/A'}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                                <div>Email ID</div>
                                                <div>{selectedContact.memberContact[0].e_Mail}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                                <div>Address</div>
                                                <span>{selectedContact.memberContact[0].address}, {selectedContact.memberContact[0].address_2}, {selectedContact.memberContact[0].city}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                                <div>Enrollment Date</div>
                                                <span>{selectedContact.memberContact[0].last_date_modified}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                                <div>Account Status</div>
                                                <span>{selectedContact.memberContact[0].main_Contact}</span>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="flex flex-col col-span-12 col-span-6 gap-7 pl-4 border-left">
                                            <div className="flex items-center">
                                                <div className="flex justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                                <div>Name</div>
                                                <span>{selectedContact.memberContact[0].name}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                                <div>Date of Birth</div>
                                                <div>{selectedContact.memberContact[0].date_of_Birth ? new Date(selectedContact.memberContact[0].date_of_Birth).toLocaleDateString() : 'N/A'}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                                <div>Mobile No</div>
                                                <div>{selectedContact.memberContact[0].mobile_Phone_No}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                                <div>Gender</div>
                                                <div>{selectedContact.memberContact[0].gender === 1 ? 'Male' : 'Female'}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                                <div>Enrollment Store</div>
                                                <span>{selectedContact.memberContact[0].club_Code}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex justify-between flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                                                <div>Balance Points</div>
                                                <span>{selectedContact.memberContact[0].unprocessed_Points}</span>
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
                            <div className="flex flex-col p-4 box">
                                <div className="border rounded-[0.6rem] relative mt-3">
                                <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs bg-white">
                                    <h3>Loyalty Account Running Balance</h3>
                                </div>
                                <div className="p-4 mt-2.5 flex flex-col gap-5">
                                    <div className="overflow-x-auto">
                                    {loading ? (
                                        <div className="flex items-center justify-center">
                                            <Loader icon={"oval"} className="w-20 h-20 flex items-center justify-center" />
                                        </div>
                                        ) : (
                                        <Table className="border-b border-dashed border-slate-200/80">
                                            <Table.Thead className="bg-black rounded overflow-hidden">
                                            <Table.Tr>
                                                <Table.Td className="whitespace-nowrap text-white">
                                                    S.No
                                                </Table.Td>
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
                                                {currentBalanceItems?.map((LCBalance, index) => (
                                                    <Table.Tr key={index} className="[&_td]:last:border-b-0">
                                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                        <div className="whitespace-nowrap">
                                                            {balanceIndexOfFirstItem  + index + 1}
                                                        </div>
                                                    </Table.Td>
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
                                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                        <div className="flex items-center justify-center whitespace-nowrap"
                                                        >
                                                            {LCBalance.Payment || 'N/A'}
                                                        </div>
                                                    </Table.Td>
                                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                        <div className="flex items-center justify-center whitespace-nowrap"
                                                        >
                                                            {LCBalance.Tier}
                                                        </div>
                                                    </Table.Td>
                                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                        <div className="flex items-center justify-center whitespace-nowrap"
                                                        >
                                                            {LCBalance.EarnedPoints}
                                                        </div>
                                                    </Table.Td>
                                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                        <div className="flex items-center justify-center whitespace-nowrap"
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
                                    <div className="flex flex-col-reverse justify-between items-center p-5 flex-reverse gap-y-2 sm:flex-row">
                                        <Pagination
                                            currentPage={balancePage}
                                            totalPages={balanceTotalPages}
                                            onPageChange={setBalancePage}
                                        />
                                        <FormSelect
                                            className="sm:w-20 rounded-[0.5rem]"
                                            onChange={handleBalanceItemsPerPageChange}
                                            value={balanceItemsPerPage}
                                        >
                                            <option value={10}>10</option>
                                            <option value={25}>25</option>
                                            <option value={35}>35</option>
                                            <option value={50}>50</option>
                                        </FormSelect>
                                    </div>
                                </div>
                                </div>
                            </div>                                
                        </div>
                        <div className="col-span-12 mb-5">
                            <div className="flex flex-col p-4 box">
                                <div className="border rounded-[0.6rem] relative mt-3">
                                <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs bg-white">
                                    <h3>Coupon Information</h3>
                                </div>
                                <div className="p-4 mt-2.5 flex flex-col gap-5">
                                    <div className="overflow-x-auto">
                                    {loading ? (
                                    <div className="flex items-center justify-center">
                                        <Loader icon={"oval"} className="w-20 h-20 flex items-center justify-center" />
                                    </div>
                                    ) : (
                                    <Table className="border-b border-dashed border-slate-200/80">
                                        <Table.Thead className="bg-black">
                                        <Table.Tr>
                                            <Table.Td className="whitespace-nowrap text-white">
                                                S.No
                                            </Table.Td>
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
                                            {currentCoupenItems?.map((coupenData, index) => ( 
                                                <Table.Tr key={index} className="[&_td]:last:border-b-0">
                                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                        <div className="whitespace-nowrap">
                                                            {index+1}
                                                        </div>
                                                    </Table.Td>
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
                                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                        <div className="flex items-center justify-center whitespace-nowrap"
                                                        >
                                                            {coupenData.DiscountType}
                                                        </div>
                                                    </Table.Td>
                                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                        <div className="flex items-center justify-center whitespace-nowrap"
                                                        >
                                                            {coupenData.DiscountValue}
                                                        </div>
                                                    </Table.Td>
                                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                        <div className="flex items-center justify-center whitespace-nowrap"
                                                        >
                                                            {coupenData.QualifierAmount}
                                                        </div>
                                                    </Table.Td>
                                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                        <div className="flex items-center justify-center whitespace-nowrap"
                                                        >
                                                                {coupenData.RedeemReceiptNo}   
                                                        </div>
                                                    </Table.Td>
                                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                        <div className="flex items-center justify-center whitespace-nowrap"
                                                        >
                                                            {coupenData.MobileNo}
                                                        </div>
                                                    </Table.Td>
                                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                        <div className="flex items-center justify-center whitespace-nowrap"
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
                                    <div className="flex flex-col-reverse justify-between items-center p-5 flex-reverse gap-y-2 sm:flex-row">
                                        <Pagination
                                            currentPage={coupenPage}
                                            totalPages={coupenTotalPages}
                                            onPageChange={setCoupenPage}
                                        />
                                        <FormSelect
                                            className="sm:w-20 rounded-[0.5rem]"
                                            onChange={handleCoupenItemsPerPageChange}
                                            value={CoupenItemsPerPage}
                                        >
                                            <option value={10}>10</option>
                                            <option value={25}>25</option>
                                            <option value={35}>35</option>
                                            <option value={50}>50</option>
                                        </FormSelect>
                                    </div>
                                </div>
                                </div>
                            </div>                 
                        </div>
                    </div>
                )}
            </div>
        )}
    </div>
  );
}

export default LoyaltyCustomer;
