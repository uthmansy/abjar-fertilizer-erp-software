import { Button, Menu } from "antd";
import useDashboard from "../../hooks/useDashboard";
import { sidebarMenuMapping } from "../../constants/MAPPINGS";
import { Link } from "react-router-dom";
import useAuthStore from "../../store/auth";
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import useAdminMenu from "../../store/adminMenu";
import useDarkMode from "../../store/theme";
import { LOGO } from "../../assets/images";

function Sider() {
  const {
    collapsed,
    handleCollapse,
    isMobile,
    isLoading,
    handleSignOut,
    handleMenuClick,
  } = useDashboard();
  const { userProfile } = useAuthStore();
  const { currentMenu } = useAdminMenu();
  const menu =
    userProfile?.role === "ADMIN" || userProfile?.role === "SUPER ADMIN"
      ? currentMenu || userProfile?.role
      : userProfile?.role;
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`bg-primary w-72 h-screen flex flex-col justify-between transition-all duration-300 ${
        isMobile ? `fixed ${collapsed ? "-left-72" : "-left-0"}` : "relative"
      } z-10`}
    >
      <Button
        size="large"
        loading={isLoading}
        type={isMobile ? "primary" : "text"}
        onClick={handleCollapse}
        className="absolute left-full rounded-none top-0"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        style={{
          fontSize: "16px",
          width: 56,
          height: 56,
          zIndex: 100,
          display: isMobile ? "block" : "none",
        }}
      />
      <div
        className={`h-24 w-full overflow-hidden flex items-center px-5 py-3 transition-all duration-[600] bg-primary mb-10`}
      >
        <img src={LOGO} className="w-auto h-full" alt="" />
      </div>
      <Menu
        onClick={handleMenuClick}
        theme={darkMode ? "dark" : "light"}
        mode="inline"
        defaultSelectedKeys={["1"]}
        className={`flex-1 overflow-y-auto sider-menu`}
      >
        {sidebarMenuMapping[menu || "DEFAULT"].map((menu, index) => (
          <Menu.Item key={index + 1} icon={<menu.icon />}>
            <Link to={menu.path} className="uppercase">
              {menu.label}
            </Link>
          </Menu.Item>
        ))}
      </Menu>

      <div>
        <button
          className="w-full flex space-x-3 text-primary font-semibold items-center justify-center h-16 bg-primaryDark uppercase"
          onClick={handleSignOut}
        >
          <span>Logout</span>
          <span className="text-xl">
            <LogoutOutlined />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Sider;
