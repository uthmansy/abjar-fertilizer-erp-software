import { IconType } from "react-icons";

interface Props {
  label: string;
  Icon: IconType;
}

function TabLabel({ Icon, label }: Props) {
  return (
    <div className="uppercase flex space-x-2 items-center">
      <Icon className="text-inherit opacity-70 text-xs scale-75" />
      <span>{label}</span>
    </div>
  );
}

export default TabLabel;
