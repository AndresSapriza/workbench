import React from "react";
import PropTypes from "prop-types";
import { Collapse } from "react-bootstrap";

const SideMenuItem = ({ menuList, onItemClick }) => {
  return menuList.map((element) => (
    <li key={element.title} className={element.actived ? "active" : ""}>
      <a
        onClick={() => onItemClick(element.title)}
        href={element.linkTo}
        aria-controls={element.title}
        data-toggle={
          element.subMenu && element.subMenu.length > 0 ? "collapse" : ""
        }
        aria-expanded={
          element.subMenu && element.subMenu.length > 0 ? element.collapsed : ""
        }
        className={
          element.subMenu && element.subMenu.length > 0
            ? element.collapsed
              ? "dropdown-toggle collapsed"
              : "dropdown-toggle"
            : ""
        }
      >
        {element.icon ? <i className={`${element.icon} mx-1`}></i> : ""}
        <span>{element.title}</span>
      </a>
      {element.subMenu && element.subMenu.length > 0 ? (
        <Collapse in={element.collapsed}>
          <ul className={"list-unstyled"} id={element.title}>
            <SideMenuItem
              menuList={element.subMenu}
              onItemClick={onItemClick}
            />
          </ul>
        </Collapse>
      ) : (
        ""
      )}
    </li>
  ));
};

SideMenuItem.propTypes = {
  menuList: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default SideMenuItem;
