import { ColumnsType } from "antd/es/table";
import { DailyProductionSummary } from "../types/db"; // Ensure this matches the updated Sales type
import { formatNumber } from "../helpers/functions";

export const dailyProductionColumns: ColumnsType<DailyProductionSummary> = [
  {
    title: "S.N",
    render: (_, __, index) => index + 1, // Calculate row number
    width: "10px",
  },
  {
    title: "Product",
    dataIndex: "product",
    key: "product",
    render: (_, record) => <span>{record.product_info.name}</span>,
    width: 100,
  },
  {
    title: "Quantity",
    dataIndex: "total_quantity_produced",
    key: "total_quantity_produced",
    render: (_, record) => (
      <span>
        {formatNumber(record.total_quantity_produced)}{" "}
        {record.product_info.unit}
      </span>
    ),
    width: 100,
  },
];
