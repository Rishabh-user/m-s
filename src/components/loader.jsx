import React from "react";
import LoadingIcon from "@/components/Base/LoadingIcon"; 

const Loader = () => {
  return (
    <div className="loader-overlay">
        <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
            <LoadingIcon icon="oval" className="w-8 h-8" />
            <div className="mt-2 text-xs text-center">
                Loading...
            </div>
        </div>
    </div>
  );
};

export default Loader;
