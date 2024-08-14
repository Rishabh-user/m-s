import Lucide from "./Base/Lucide";

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
        <div className="flex justify-between w-[100%]">
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

export default Pagination;