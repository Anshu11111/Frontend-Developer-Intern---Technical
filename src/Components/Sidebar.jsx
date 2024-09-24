import React from "react";
import "../Components/Sidebar.css";
import icon from "../assets/icon.svg";
import { IconLayoutDashboardFilled, IconUserPlus,IconCalendarEvent,IconUsersGroup ,IconVector,IconHeadphonesFilled,IconSettingsFilled} from "@tabler/icons-react";
function Sidebar() {
  return (
    <>
      <div className="sidebar-main">
        <img src={icon} alt="icon" className="icon" />
        <div className="sidebar-2">
          <p>MAIN MENU</p>

          <div className="list">
            <ul>
              <div className="li"  style={{ color: "red" }}>
                <IconLayoutDashboardFilled />
                <li>Dashboard</li>

              </div>
              <div className="li">
                <IconUserPlus />
                <li>Recruitment</li>
              </div>
              <div className="li">
                <IconCalendarEvent />
                <li>Schedule</li>
              </div>
              <div className="li">
                <IconUsersGroup />
                <li>Employee</li>
              </div>
              <div className="li">
                <IconVector />
                <li>Department</li>
              </div>
            </ul>
          </div>
          <p>OTHERS</p>
          <div className="list">
            <ul>
            <div className="li">
                <IconHeadphonesFilled />
                <li>Supports</li>
              </div>
              <div className="li">
                <IconSettingsFilled />
                <li>Settings</li>
              </div>
             
             
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
