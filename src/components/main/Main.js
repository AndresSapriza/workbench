import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { newUser } from "../../../tools/mockData";
import * as authActions from "../../redux/actions/authActions";
import TopMenu from "../common/TopMenu";
import SideMenu from "../common/SideMenu";
import { Row, Col } from "react-bootstrap";

const Main = ({ user, logOut, ...props }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [menuList, setMenuList] = useState({
    title: "Workbench",
    smallTitle: "WB",
    menu: [
      {
        linkTo: "/#",
        title: "Home",
        icon: "fas fa-home",
        actived: false,
        collapsed: false,
        subMenu: [],
      },
      {
        linkTo: "/#/project",
        title: "Projects",
        icon: "fas fa-briefcase",
        actived: false,
        collapsed: false,
        subMenu: [],
      },
      {
        title: "Components",
        icon: "fas fa-copy",
        actived: false,
        collapsed: false,
        subMenu: [
          {
            linkTo: "/#",
            title: "Component1",
            actived: false,
            collapsed: false,
          },
          {
            linkTo: "/#",
            title: "Component2",
            actived: false,
            collapsed: true,
          },
          {
            linkTo: "/#",
            title: "Component3",
            actived: false,
            collapsed: false,
          },
        ],
      },
    ],
  });

  function collapse() {
    collapsed ? setCollapsed(false) : setCollapsed(true);
  }

  function searchItemClicked(key, menu) {
    menu.map((element) => {
      if (element.title == key) {
        element.actived = true;
        element.collapsed = !element.collapsed;
      } else {
        if (element.subMenu && element.subMenu.length > 0) {
          searchItemClicked(key, element.subMenu);
        }
        element.actived = false;
      }
    });
  }

  function menuClicked(key) {
    searchItemClicked(key, menuList.menu);

    setMenuList((prevMenu) => ({ ...prevMenu, menu: menuList.menu }));
  }
  return (
    <div className="wrapper">
      <SideMenu
        isCollapsed={collapsed}
        menuList={menuList}
        onItemClick={menuClicked}
      />
      <div id="content">
        <Row>
          <Col>
            <Row>
              <Col>
                <TopMenu user={user} logOut={logOut} collapse={collapse} />
              </Col>
            </Row>
            <Row>
              <Col>{props.children}</Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

Main.propTypes = {
  user: PropTypes.object.isRequired,
  logOut: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

function mapStateToProps(state) {
  const user = state.auth.user ? state.auth.user : newUser;
  return {
    user,
  };
}

const mapDispatchToProps = {
  logOut: authActions.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
