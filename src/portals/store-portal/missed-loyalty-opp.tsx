
import Breadcrumb from "@/components/Base/Breadcrumb";
import Lucide from "@/components/Base/Lucide";
import { FormInput, FormLabel, FormInline } from "@/components/Base/Form";
import Button from "@/components/Base/Button";
import Table from "@/components/Base/Table";
import _ from "lodash";
import { Menu } from "@/components/Base/Headless";
import { ChangeEvent, FormEvent, useState } from "react";
import { GetMissedLoyaltyOpp } from "../../api";
import Loader from "@/components/Base/LoadingIcon/loader";
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

function MissedLoyaltyOpportunity() {
    const [formData, setFormData] = useState<{
        dateFrom: Dayjs | null;
        dateTo: Dayjs | null;
        storeNo: string;
      }>({
        dateFrom: dayjs(), 
        dateTo: dayjs(),
        storeNo: ''
      });
      const [loyaltyData, setLoyaltyData] = useState<any>(null);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState<string | null>(null);
      const [noRecords, setNoRecords] = useState(false);
      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };    
      const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setError(null); 
        if (!formData.dateFrom || !formData.dateTo || !formData.storeNo) {
            setError('Please select Date From&Date To and Store No.');
            setLoading(false);
            return;
        }  
        setNoRecords(false);
        const formattedData = {
            storeNo: formData.storeNo,
            dateFrom: formData.dateFrom.format('YYYY-MM-DD'),
            dateTo: formData.dateTo.format('YYYY-MM-DD'),
          };  
        try {
            const data = await GetMissedLoyaltyOpp(formattedData.storeNo, formattedData.dateFrom, formattedData.dateTo);
            setLoyaltyData(data);
            if (data?.code === 404 && data?.message === 'No Record Found') {
             setNoRecords(true);
            }
        } catch (err) {
            setError('Error fetching customer or balance data');
        } finally {
            setLoading(false);
        }
    };
    const handleDateChange = (name: string, value: Dayjs | null) => {
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    // Clear form
    const handleClearForm = () => {
        setFormData({
            dateFrom: null,
            dateTo: null,
            storeNo: ''
        });
    };
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6  mt-15">
      <div className="col-span-12">        
        {/* BEGIN: Breadcrumb */}
        <Breadcrumb className="flex-1 hidden xl:block">
          <Breadcrumb.Link to="/" className="text-white">Dashboards</Breadcrumb.Link>
          <Breadcrumb.Link to="/store-portal" className="text-white">Store Portal</Breadcrumb.Link>
          <Breadcrumb.Link to="/" className="text-white">Missed Loyalty Oppotunity</Breadcrumb.Link>
        </Breadcrumb>
        {/* END: Breadcrumb */}
       </div>
       <div className="col-span-12">
            <div className="flex flex-col gap-8 mt-3.5 p-5 box">
                <div className="flex flex-col">
                <form onSubmit={handleSubmit} className="flex lg:flex-row flex-col items-end border-dashed gap-x-5 gap-y-2 border border-slate-300/80 xl:border-0 rounded-[0.6rem] p-4 sm:p-5 xl:p-0" >               
                    <div className="w-[100%]">
                        <FormLabel className="mr-3 whitespace-nowrap">
                            Date From:
                        </FormLabel>
                        {/* <FormInput                  
                            type="date"
                            className=""
                            name="dateFrom"
                            onChange={handleInputChange}
                            value={formData.dateFrom}
                        /> */}
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                value={formData.dateFrom}
                                onChange={(newValue) => handleDateChange('dateFrom', newValue)}
                                slotProps={{
                                textField: { fullWidth: true },
                                }}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className="w-[100%]">
                        <FormLabel className="mr-3 whitespace-nowrap">
                            Date To:
                        </FormLabel>
                        {/* <FormInput                  
                            type="date"
                            className=""
                            name="dateTo"
                            onChange={handleInputChange}
                            value={formData.dateTo}
                        /> */}
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                value={formData.dateTo}
                                onChange={(newValue) => handleDateChange('dateTo', newValue)}
                                slotProps={{
                                textField: { fullWidth: true },
                                }}
                            />
                        </LocalizationProvider>
                    </div>                
                    <div className="gap-y-2 w-[100%]">
                        <FormLabel className="mr-3 whitespace-nowrap">
                            Store No
                        </FormLabel>
                        <FormInput                  
                            type="text"
                            className=""
                            name="storeNo"
                            onChange={handleInputChange}
                            value={formData.storeNo}
                        />
                    </div>
                    <div className="flex gap-2">
                        <Button type="submit" className="btn-primary" >Search </Button>
                        <Button type="button" className="btn-primary" onClick={handleClearForm}> 
                            <Lucide icon="RotateCw" className="block" /> 
                        </Button>
                        <Button variant="outline-secondary">
                            <Lucide icon="Printer" className="stroke-[1.3] w-4 h-4 mr-2" />
                            Print
                        </Button>
                        <Menu className="sm:ml-auto xl:ml-0">
                            <Menu.Button as={Button} variant="outline-secondary" className="w-full sm:w-auto" >
                                <Lucide icon="FileCheck2" className="stroke-[1.3] w-4 h-4 mr-2" />
                                    Export
                                <Lucide icon="ChevronDown" className="stroke-[1.3] w-4 h-4 ml-2" />
                            </Menu.Button>
                            <Menu.Items className="w-40">
                                <Menu.Item>
                                    <Lucide icon="FileCheck2" className="w-4 h-4 mr-2" />
                                    Export CSV
                                </Menu.Item>                                
                                <Menu.Item >
                                    <Lucide icon="FileCheck2" className="w-4 h-4 mr-2" />
                                    Export XLSX
                                </Menu.Item>
                            </Menu.Items>
                        </Menu>
                    </div>
                  
                </form>
                </div>
                {error && <div className="text-red-500 text-right px-5">{error}</div>}
                <div className="flex flex-col gap-5">
                    <div className="overflow-auto xl:overflow-visible">
                        {loading ? (
                            <div className="flex items-center justify-center">
                                <Loader icon={"oval"} className="w-20 h-20 flex items-center justify-center" />
                            </div>
                        ) : (
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
                                        Receipt No.
                                    </div>
                                </Table.Td>
                                <Table.Td className="px-0 py-0 [&_div]:first:border-l [&_div]:last:border-r [&_div]:first:rounded-l-md [&_div]:last:rounded-r-md border-b-0">
                                    <div className="px-5 py-4 font-medium bg-black text-white">
                                        Store No
                                    </div>
                                </Table.Td>
                            </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody>
                                {noRecords ? (
                                    <Table.Tr>
                                        <Table.Td colSpan={4} className="py-4 text-center text-gray-500">
                                            No records found.
                                        </Table.Td>
                                    </Table.Tr>
                                ) : loyaltyData?.data?.MissedLoyaltyOpportunity?.length ? (
                                    loyaltyData.data.MissedLoyaltyOpportunity.map((loyaltyItem, index) => (
                                        <Table.Tr key={index} className="[&_td]:last:border-b-0">
                                            <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                <div className="whitespace-nowrap">
                                                    {new Date(loyaltyItem['Registration Date']).toLocaleDateString()}
                                                </div>
                                            </Table.Td>
                                            <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                <div className="flex items-center">
                                                    <div className="ml-1.5 whitespace-nowrap">
                                                        {loyaltyItem['Staff ID'] || 'N/A'}
                                                    </div>
                                                </div>
                                            </Table.Td>
                                            <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                <div className="whitespace-nowrap">
                                                    {loyaltyItem['Receipt No']}
                                                </div>
                                            </Table.Td>
                                            <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                <div className="flex items-center whitespace-nowrap">
                                                    {loyaltyItem['Store No']}
                                                </div>
                                            </Table.Td>
                                        </Table.Tr>
                                    ))
                                ) : (
                                    <Table.Tr>
                                        <Table.Td colSpan={4} className="py-4 text-center text-gray-500">
                                            No records available.
                                        </Table.Td>
                                    </Table.Tr>
                                )}
                            </Table.Tbody>
                        </Table>
                        )}
                    </div>                            
                </div>
            </div>
            
       </div>
       
      
    </div>
  );
}

export default MissedLoyaltyOpportunity;
