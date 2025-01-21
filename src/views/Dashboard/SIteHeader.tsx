import { Avatar, Badge, Dropdown, Select, Space, theme } from "antd";
import useDashboard from "../../hooks/useDashboard";
import useDarkMode from "../../store/theme";
import { MdSunny } from "react-icons/md";
import { LogoutOutlined } from "@ant-design/icons";
import { UserOutlined, BellOutlined, SettingOutlined } from "@ant-design/icons";
import useWindow from "../../store/window";
import { SelectOption } from "../../types/comps";
import useAdminMenu from "../../store/adminMenu";
import { UserRole } from "../../types/db";
import { USER_ROLE } from "../../constants/ENUMS";
import useAuthStore from "../../store/auth";
import { useNavigate } from "react-router-dom";

function SiteHeader() {
  const { isDesktop, items, handleSignOut } = useDashboard();
  const { darkMode, toggleMode } = useDarkMode();
  const { currentWindow } = useWindow();
  const { setMenu, currentMenu } = useAdminMenu();
  const { userProfile } = useAuthStore();
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuOptions: SelectOption[] = USER_ROLE.map((role) => ({
    label: role,
    value: role,
  }));

  return (
    <div
      className="h-24 flex justify-between items-center px-5 md:px-10"
      style={{ background: colorBgContainer }}
    >
      <div>
        {isDesktop && (
          <Space>
            {currentWindow === "main" &&
              (userProfile?.role === "ADMIN" ||
                userProfile?.role === "SUPER ADMIN") && (
                <Select
                  defaultValue={currentMenu}
                  style={{ width: 100, borderRadius: "50%" }}
                  onChange={(value) => {
                    setMenu(value as UserRole | null);
                    navigate("/");
                  }}
                  options={menuOptions}
                />
              )}
          </Space>
        )}
      </div>
      <h2 className="uppercase font-semibold">
        Abjar Fertilizer Erp Software dashboard
      </h2>
      <div className="cursor-pointer flex space-x-3 items-center">
        {isDesktop && (
          <Avatar
            size="large"
            icon={<LogoutOutlined />}
            onClick={handleSignOut}
          />
        )}
        <Space>
          <Avatar
            icon={
              darkMode ? <MdSunny color="white" /> : <MdSunny color="white" />
            }
            onClick={toggleMode}
            size="large"
          />
          <Badge>
            <Avatar size="large" shape="circle" icon={<SettingOutlined />} />
          </Badge>
          <Badge dot>
            <Avatar size="large" shape="circle" icon={<BellOutlined />} />
          </Badge>
          <Dropdown menu={{ items }} placement="bottomRight">
            <Avatar size="large" icon={<UserOutlined />} />
          </Dropdown>
        </Space>
      </div>
    </div>
    // <Header
    //   className={`p-0 px-5 ${currentWindow === "main" && "pl-20"} flex top-0 ${
    //     isMobile ? "justify-end" : "justify-between"
    //   } items-center shadow-sm`}
    //   style={{ background: colorBgContainer, zIndex: 99 }}
    // >
    //   <div>
    //     {isDesktop && (
    //       <Space>
    //         <Select
    //           defaultValue={currentWindow}
    //           style={{ width: 200, borderRadius: "50%" }}
    //           placeholder="Select Window"
    //           onChange={(value) => setWindow(value as "main" | "pos")}
    //           options={
    //             [
    //               { value: "main", label: "Main Window" },
    //               { value: "pos", label: "POS System" },
    //             ] as SelectOption[]
    //           }
    //         />
    //         {currentWindow === "main" &&
    //           (userProfile?.role === "ADMIN" ||
    //             userProfile?.role === "SUPER ADMIN") && (
    //             <Select
    //               defaultValue={currentMenu}
    //               style={{ width: 100, borderRadius: "50%" }}
    //               onChange={(value) => {
    //                 setMenu(value as UserRole | null);
    //                 navigate("/");
    //               }}
    //               options={menuOptions}
    //             />
    //           )}
    //       </Space>
    //     )}
    //   </div>

    //   <div className="cursor-pointer flex space-x-3 items-center">
    //     {isDesktop && (
    //       <Avatar
    //         size="large"
    //         icon={<LogoutOutlined />}
    //         onClick={handleSignOut}
    //       />
    //     )}
    //     <Space>
    //       <Avatar
    //         icon={
    //           darkMode ? <MdSunny color="white" /> : <MdSunny color="white" />
    //         }
    //         onClick={toggleMode}
    //         size="large"
    //       />
    //       <Badge>
    //         <Avatar size="large" shape="circle" icon={<SettingOutlined />} />
    //       </Badge>
    //       <Badge dot>
    //         <Avatar size="large" shape="circle" icon={<BellOutlined />} />
    //       </Badge>
    //       <Dropdown menu={{ items }} placement="bottomRight">
    //         <Avatar size="large" icon={<UserOutlined />} />
    //       </Dropdown>
    //     </Space>
    //   </div>
    // </Header>
  );
}

export default SiteHeader;
