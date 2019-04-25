import React, { ReactNode } from "react";

import {
  Button,
  Navbar,
  Container,
  Row,
  Col,
  NavbarBrand,
  NavLink,
  NavItem,
  NavbarToggler,
  UncontrolledDropdown,
  DropdownToggle
} from "reactstrap";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";

interface LayoutProps {
  title: string
  children?: ReactNode
  headerContent?: ReactNode
}

const Layout: React.SFC<LayoutProps> = ({ title, children, headerContent }) => (
  <section>
    <Navigation />
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">{title}</h1>
            {headerContent}
          </div>
          {children}
        </main>
      </div>
    </div>
  </section>
);

export default Layout;
