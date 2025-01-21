import Sider from "./Sider";
import SiteContent from "./SiteContent";
import SiteHeader from "./SIteHeader";
import { Route, Routes } from "react-router-dom";
import ROUTES from "../../constants/ROUTES";
import Home from "../../components/pages/home";
import Warehouses from "../../components/pages/warehouses";
import InventoryItems from "../../components/pages/inventoryItems.tsx";
import StockRecords from "../../components/pages/stockRecords/index.tsx";

function MainWindow() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sider />
      <div className="flex-1 h-screen flex flex-col overflow-y-hidden">
        <SiteHeader />
        {/* <div className="relative p-5 md:p-10 overflow-y-auto flex-1">
          <Routes>
            <Route path={`${ROUTES.home}/*`} element={<Home />} />
            <Route path={`${ROUTES.warehouses}/*`} element={<Warehouses />} />
            <Route
              path={`${ROUTES.inventoryItems}/*`}
              element={<InventoryItems />}
            />
            <Route
              path={`${ROUTES.stockRecords}/*`}
              element={<StockRecords />}
            />
          </Routes>
        </div> */}
        <SiteContent />
      </div>
    </div>
    // <Layout className="min-h-screen">
    //   <Sider />
    //   <Layout className="z-10 max-h-screen overflow-y-auto">
    //     <SiteHeader />
    //     <SiteContent />
    //   </Layout>
    // </Layout>
  );
}

export default MainWindow;
