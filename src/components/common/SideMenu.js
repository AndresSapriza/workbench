import React from "react";
import PropTypes from "prop-types";
import SideMenuItem from "./SideMenuItem";

const SideMenu = ({ isCollapsed, menuList, onItemClick }) => {
  return (
    // <!-- Sidebar  -->
    <nav id="sidebar" className={isCollapsed ? "active" : ""}>
      <div className="sidebar-header">
        <h3>{menuList.title}</h3>
        <strong>{menuList.smallTitle}</strong>
      </div>

      <ul className="list-unstyled components">
        <SideMenuItem menuList={menuList.menu} onItemClick={onItemClick} />
      </ul>
    </nav>
  );
};

SideMenu.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  menuList: PropTypes.object.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default SideMenu;
