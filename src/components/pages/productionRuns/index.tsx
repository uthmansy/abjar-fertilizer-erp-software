import RefreshButton from "../../RefreshButton";
import { productionsKeys } from "../../../constants/QUERY_KEYS";
import AddNew from "./AddNew";
import AllProductions from "./AllProductions";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
// import AllItems from "./AllItems";

function ProductionRuns() {
  return (
    <>
      {" "}
      <Breadcrumb
        className="mb-5"
        items={[
          {
            href: "",
            title: <HomeOutlined />,
          },
          {
            href: "",
            title: (
              <>
                <span className="uppercase">Production Runs</span>
              </>
            ),
          },
        ]}
      />
      <div className="mb-5 flex space-x-3">
        <RefreshButton queryKey={productionsKeys.getAllProductions} />
        <AddNew />
      </div>
      <AllProductions />
    </>
  );
}

export default ProductionRuns;
