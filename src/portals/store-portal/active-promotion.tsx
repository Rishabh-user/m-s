import React, {useState, ChangeEvent, FormEvent} from "react";
import Breadcrumb from "@/components/Base/Breadcrumb";
import Lucide from "@/components/Base/Lucide";
import Pagination from "@/components/Base/Pagination";
import { FormInput, FormLabel, FormInline, FormSelect } from "@/components/Base/Form";
import Button from "@/components/Base/Button";
import Table from "@/components/Base/Table";
import _ from "lodash";
import Loader from "@/components/Base/LoadingIcon/loader";
import { GetActivePromo, GetActivePromotionbyUPC } from "../../api";


function ActivePromotion() {
  const [formData, setFormData] = useState({ upc: '' });
  const [activepromotionupcData, setActivePromotionupcData] = useState<any>(null);
  const [activePromoData, setActivePromoData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Pagination states
  const [promoPage, setPromoPage] = useState(1);
  const [promoItemsPerPage, setPromoItemsPerPage] = useState(10);
  // Pagination states for inactive promotions
  const [activePromoPage, setActivePromoPage] = useState(1);
  const [activePromoItemsPerPage, setActivePromoItemsPerPage] = useState(10);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    if (!formData.upc) {
        setError('Please UPC No.');
        setLoading(false);
        return;
    } 
    try {
      const data = await GetActivePromotionbyUPC(formData.upc);
      const activeData = await GetActivePromo(formData.upc);
      setActivePromotionupcData(data);
      if (data.message === "No Record Found") {
        setActivePromoData(null);
        setError("No records available.");
      } else {
        setActivePromoData(data);
      }
    } catch (err) {
      setError('Error fetching promotion data');
    } finally {
      setLoading(false);
    }
  };
  // Clear form
  const handleClearForm = () => {
        setFormData({
            upc: '',
        });
    };

  const handlePromoItemsPerPageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPromoItemsPerPage(Number(event.target.value));
    setPromoPage(1);
  };
  const handleActivePromoItemsPerPageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setActivePromoItemsPerPage(Number(event.target.value));
    setActivePromoPage(1); 
  };

  const promoTotalPages = activepromotionupcData?.data?.ActivePromotionByUPC?.length
    ? Math.ceil(activepromotionupcData?.data?.ActivePromotionByUPC?.length / promoItemsPerPage)
    : 1;
  const activePromoTotalPages = activePromoData?.data?.ActivePromotionByUPC?.length
    ? Math.ceil(activePromoData?.data?.ActivePromotionByUPC?.length / activePromoItemsPerPage)
    : 1;
  const currentPromoItems = activepromotionupcData?.data?.ActivePromotionByUPC
    ? activepromotionupcData?.data?.ActivePromotionByUPC.slice(
        (promoPage - 1) * promoItemsPerPage,
        promoPage * promoItemsPerPage
      )
    : [];
    const currentActivePromoItems = activePromoData
    ? activePromoData?.data?.ActivePromotionByUPC.slice(
        (activePromoPage - 1) * activePromoItemsPerPage,
        activePromoPage * activePromoItemsPerPage
      )
    : [];
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
                    <div className="w-[100%]">
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
                        <Button type="button" className="btn-primary" onClick={handleClearForm}>
                            <Lucide icon="RotateCw" className="block" />
                        </Button>
                    </div>
                </form>
            </div>
            {error && <div className="text-red-500 text-left px-5">{error}</div>}
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
                            ) : currentPromoItems && currentPromoItems.length > 0 ? (
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
                                    {currentPromoItems.map((promo, index) => (
                                    <Table.Tr key={index} className="[&_td]:last:border-b-0">
                                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                        <div className="whitespace-nowrap">{promo.PromoCode}</div>
                                        </Table.Td>
                                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                        <div className="flex items-center">
                                            <div className="ml-1.5 whitespace-nowrap">{promo['Promo Name']}</div>
                                        </div>
                                        </Table.Td>
                                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                        <div className="whitespace-nowrap">{promo['Start Date']}</div>
                                        </Table.Td>
                                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                        <div className="flex items-center text-primary whitespace-nowrap">
                                            {promo['End Date']}
                                        </div>
                                        </Table.Td>
                                    </Table.Tr>
                                    ))}
                                </Table.Tbody>
                            </Table>
                        ) : (
                            <Table.Tr className="flex w-[100%]">
                                <Table.Td colSpan={4} className="py-4 text-center text-gray-500 w-[100%]">
                                    {currentPromoItems?.message || "No records available."}
                                </Table.Td>
                            </Table.Tr>
                          )}
                        </div>
                        <div className="flex flex-col-reverse justify-between items-center p-5 flex-reverse gap-y-2 sm:flex-row">
                            <Pagination
                                currentPage={promoPage}
                                totalPages={promoTotalPages}
                                onPageChange={setPromoPage}
                            />
                            <FormSelect
                                className="sm:w-20 rounded-[0.5rem]"
                                onChange={handlePromoItemsPerPageChange}
                                value={promoItemsPerPage}
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
                                    {currentActivePromoItems.length > 0 ? (
                                        currentActivePromoItems.map((promo, index) => (
                                        <Table.Tr key={index} className="[&_td]:last:border-b-0">
                                            <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                            <div className="whitespace-nowrap">{promo.PromoCode}</div>
                                            </Table.Td>
                                            <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                            <div className="flex items-center">
                                                <div className="ml-1.5 whitespace-nowrap">{promo['Promo Name']}</div>
                                            </div>
                                            </Table.Td>
                                            <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                            <div className="whitespace-nowrap">{promo['Start Date']}</div>
                                            </Table.Td>
                                            <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                            <div className="flex items-center text-primary whitespace-nowrap">
                                                {promo['End Date']}
                                            </div>
                                            </Table.Td>
                                        </Table.Tr>
                                        ))
                                    ) : (
                                        <Table.Tr>
                                        <Table.Td colSpan={4} className="py-4 text-center text-gray-500">
                                            {currentActivePromoItems?.message || "No records available."}
                                        </Table.Td>
                                        </Table.Tr>
                                    )}
                                </Table.Tbody>
                            </Table>
                        )}
                        </div>
                        <div className="flex flex-col-reverse justify-between items-center p-5 flex-reverse gap-y-2 sm:flex-row">
                            <Pagination
                                currentPage={activePromoPage}
                                totalPages={activePromoTotalPages}
                                onPageChange={setActivePromoPage}
                            />
                            <FormSelect
                                className="sm:w-20 rounded-[0.5rem]"
                                onChange={handleActivePromoItemsPerPageChange}
                                value={activePromoItemsPerPage}
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
  );
  
}

export default ActivePromotion;
