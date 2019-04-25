import React, { SFC } from "react";
import Icon from "../Icon";
import { NavLink } from "react-router-dom";

interface NavLinkItem {
  to: string;
  label: string;
  icon: string;
}

const navLinkItems: NavLinkItem[] = [
  {
    to: "/",
    label: "Home",
    icon: "home"
  },
  {
    to: "/counter",
    label: "Counter",
    icon: "plus-circle"
  },
  {
    to: "/weather",
    label: "Weather",
    icon: "cloud-rain"
  }
];

const Sidebar: SFC = () => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          {navLinkItems.map(({to, label, icon}) => (
            <li className="nav-item" key={label}>
              <NavLink className="nav-link" to={to} exact>
                <Icon name={icon} />
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Saved reports</span>
          <a className="d-flex align-items-center text-muted" href="#">
            <Icon name="plus-circle" />
          </a>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Icon name="plus-square" />
              Current month
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Icon name="file-text" />
              Last quarter
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Icon name="file-text" />
              Social engagement
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Icon name="file-text" />
              Year-end sale
            </a>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};

export default Sidebar;
