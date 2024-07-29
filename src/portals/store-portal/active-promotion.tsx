import React, {useState, ChangeEvent, FormEvent} from "react";
import Breadcrumb from "@/components/Base/Breadcrumb";
import Lucide from "@/components/Base/Lucide";
import Pagination from "@/components/Base/Pagination";
import { FormInput, FormLabel, FormInline, FormSelect } from "@/components/Base/Form";
import Button from "@/components/Base/Button";
import Table from "@/components/Base/Table";
import _ from "lodash";
import Loader from "@/components/Base/LoadingIcon/loader";
import { GetActivePromotionbyUPC } from "./api";


function ActivePromotion() {
    const [formData, setFormData] = useState({
        upc: '',       
      });
      const [activepromotionData, setactivepromotionData] = useState<any>(null);
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
          const data = await GetActivePromotionbyUPC(formData.upc);
          setactivepromotionData(data);
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
          <Breadcrumb.Link to="/" className="text-white">Active Promotion</Breadcrumb.Link>
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
                    <FormLabel className="mr-3 whitespace-nowrap">Enter UPC</FormLabel>
                    <FormInput
                    type="text"
                    name="upc"
                    onChange={handleInputChange}
                    value={formData.upc}
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
       <div className="col-span-12 mb-5">
            <div className="flex flex-col p-5 box">
                <div className="border rounded-[0.6rem] relative mt-3">
                    <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs bg-white">
                        <h3>Active Promotion By UPC</h3>
                    </div>
                    <div className="p-5 mt-2.5 flex flex-col gap-5">
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
                                        Promo Code
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap text-white">
                                        Promo Name
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap text-white">
                                        Valid From
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap text-white">
                                        Valid To
                                    </Table.Td>                                    
                                </Table.Tr>
                                </Table.Thead>
                                <Table.Tbody> 
                                    {activepromotionData?.data?.ActivePromotionByUPC.map((promo, index) => ( 
                                        <Table.Tr key={index} className="[&_td]:last:border-b-0">
                                            <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                <div className="whitespace-nowrap">
                                                    {promo.PromoCode}
                                                </div>
                                            </Table.Td>
                                            <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                <div className= "flex items-center">
                                                    <div className="ml-1.5 whitespace-nowrap">
                                                        {promo['Promo Name']}
                                                    </div>
                                                </div>
                                            </Table.Td>
                                            <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                <div className="whitespace-nowrap">
                                                    {promo['Start Date']}
                                                </div>
                                            </Table.Td>
                                            <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                <div className="flex items-center text-primary whitespace-nowrap"
                                                >
                                                    {promo['End Date']}
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
       <div className="col-span-12 mb-5">
            <div className="flex flex-col p-5 box">
                <div className="border rounded-[0.6rem] relative mt-3">
                    <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs bg-white">
                        <h3>Active Promotion</h3>
                    </div>
                    <div className="p-5 mt-2.5 flex flex-col gap-5">
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
                                        Promo Code
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap text-white">
                                        Promo Name
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap text-white">
                                        Valid From
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap text-white">
                                        Valid To
                                    </Table.Td>                                    
                                </Table.Tr>
                                </Table.Thead>
                                <Table.Tbody> 
                                    {activepromotionData?.data?.ActivePromotionByUPC.map((promo, index) => ( 
                                        <Table.Tr key={index} className="[&_td]:last:border-b-0">
                                            <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                <div className="whitespace-nowrap">
                                                    {promo.PromoCode}
                                                </div>
                                            </Table.Td>
                                            <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                <div className= "flex items-center">
                                                    <div className="ml-1.5 whitespace-nowrap">
                                                        {promo['Promo Name']}
                                                    </div>
                                                </div>
                                            </Table.Td>
                                            <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                <div className="whitespace-nowrap">
                                                    {promo['Start Date']}
                                                </div>
                                            </Table.Td>
                                            <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                <div className="flex items-center text-primary whitespace-nowrap"
                                                >
                                                    {promo['End Date']}
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
  );
}

export default ActivePromotion;
