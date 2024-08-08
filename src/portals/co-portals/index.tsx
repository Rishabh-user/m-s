import _ from "lodash";
import Breadcrumb from "@/components/Base/Breadcrumb";


function CoPortals() {

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6  mt-15">
      <div className="col-span-12">        
        {/* BEGIN: Breadcrumb */}
        <Breadcrumb className="flex-1 hidden xl:block">
          <Breadcrumb.Link to="/" className="text-white">Dashboards</Breadcrumb.Link>
          <Breadcrumb.Link to="/store-portal" className="text-white">Co-Portals</Breadcrumb.Link>
        </Breadcrumb>
        {/* END: Breadcrumb */}
        
      </div>
     
     
    </div>
  );
}

export default CoPortals;
