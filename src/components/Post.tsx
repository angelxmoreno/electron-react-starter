import * as React from "react";
import Layout from "./Layout/";
import { PostViewModel } from '../database/posts/types';
import { AppState } from "../store/rootReducers";
import { selectPost } from "../database/posts/selectors";
import { connect } from "react-redux";
import { match } from "react-router";

interface Props {
  post: PostViewModel;
  match: match<{ id: string }>;
}

const PostPage: React.SFC<Props> = ({ post }) => {
  const headerContent = (
    <p>
      Created by {post.author.name} on {post.createdDate && post.createdDate.toString()}
    </p>
  );
  console.log("post", post);
  return (
    <Layout title={post.title} headerContent={headerContent}>
      {post.body}
    </Layout>
  );
};

const mapStateToProps = (state: AppState, props: Props) => ({
  post: selectPost(state, props.match.params.id)
});

export default connect(mapStateToProps)(PostPage);
