import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppState } from "../store/rootReducers";
import Layout from "./Layout";
// import Icon from "./Icon";
import { deletePostAction } from "../database/posts/actions";
import { deleteUserAction } from "../database/users/actions";
import { IconName } from "./Icon";
import { ButtonGroup, Row, Col } from "reactstrap";
import NewUserModal from "./modals/NewUser";
import { selectUsers } from "../database/users/selectors";
import { User } from "../database/users/types";
import { createStructuredSelector } from "reselect";
import NewPostModal from "./modals/NewPost";
import { Post } from "../database/posts/types";
import { selectPosts } from "../database/posts/selectors";
import Icon from "./Icon";

interface Props {}

interface BlogStateProps {
  authors: User[];
  posts: Post[];
}

interface BlogDispatchProps {
  deleteUser: (id: string) => void;
  deletePost: (id: string) => void;
}

type BlogProps = Props & BlogStateProps & BlogDispatchProps;

class Blog extends Component<BlogProps> {
  deleteUserw = (id: string) => {
    console.log("deleted user id", id);
  };
  render() {
    const { authors, posts } = this.props;
    return (
      <Layout title="Blog">
        <ButtonGroup size="lg">
          <NewUserModal buttonProps={{ size: "lg", color: "primary" }} />
          <NewPostModal buttonProps={{ size: "lg", color: "primary" }} />
        </ButtonGroup>
        <hr />
        <Row>
          <Col>
            <h2>Users</h2>
            {authors.map((user: User) => (
              <p key={user.id}>
                <a onClick={() => this.props.deleteUser(user.id)}>
                  <Icon name={IconName.XCircle} />
                </a>
                {`${user.id} - ${user.name}`}
              </p>
            ))}
          </Col>
          <Col>
            <h2>Posts</h2>
            {posts.map((post: Post) => (
              <p key={post.id}>
                <a onClick={() => this.props.deletePost(post.id)}>
                  <Icon name={IconName.XCircle} />
                </a>
                {`${post.id} - ${post.title}`}
              </p>
            ))}
          </Col>
        </Row>
      </Layout>
    );
  }
}

const mapStateToProps = createStructuredSelector<AppState, BlogStateProps>({
  authors: selectUsers,
  posts: selectPosts
});

const mapDispatchToProps = (dispatch: Dispatch<void>) => ({
  deleteUser: (id: string) => {
    dispatch(deleteUserAction(id));
  },
  deletePost: (id: string) => {
    dispatch(deletePostAction(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);
