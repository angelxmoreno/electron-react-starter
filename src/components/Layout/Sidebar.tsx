import React, { SFC } from "react";
import Icon from "../Icon";
import { NavLink } from "react-router-dom";
import { Post } from "../../database/posts/types";
import { AppState } from "../../store/rootReducers";
import { createStructuredSelector } from "reselect";
import { selectPosts } from "../../database/posts/selectors";
import { connect } from "react-redux";

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
  },
  {
    to: "/blog",
    label: "Blog",
    icon: "coffee"
  }
];

interface Props {
  posts: Post[];
}

const Sidebar: SFC<Props> = ({ posts }) => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          {navLinkItems.map(({ to, label, icon }) => (
            <li className="nav-item" key={label}>
              <NavLink className="nav-link" to={to} exact>
                <Icon name={icon} />
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Posts</span>
          <a className="d-flex align-items-center text-muted" href="#">
            <Icon name="plus-circle" />
          </a>
        </h6>
        <ul className="nav flex-column mb-2">
          {posts.map((post: Post) => (
            <li className="nav-item" key={post.id}>
              <NavLink className="nav-link" to={`/post/${post.id}`} exact>
                <Icon name="file-text" />
                {post.title}
              </NavLink>
            </li>
          ))}
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Icon name="file-text" />
              Last quarter
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = createStructuredSelector<AppState, Props>({
  posts: selectPosts
});

export default connect(mapStateToProps)(Sidebar);
