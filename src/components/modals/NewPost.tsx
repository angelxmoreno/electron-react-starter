import React, { Component, ChangeEvent } from "react";
import ModalContainer, { ModalContainerProps } from "../ModalContainer";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppState } from "../../store/rootReducers";
import { createPostAction } from '../../database/posts/actions';
import { createStructuredSelector } from 'reselect';
import { selectUsers } from "../../database/users/selectors";
import { User } from "../../database/users/types";

interface StateProps {
  authors: User[]
}

interface DispatchProps {
  createPost: (form: NewPostState) => void;
}

interface NewPostState {
  title: string;
  body: string;
  authorId: string
}

type NewPostProps = ModalContainerProps & StateProps & DispatchProps

class NewPostModal extends Component<NewPostProps, NewPostState> {
  static defaultProps = {
    buttonLabel: "New Post",
    buttonProps: { color: "success" },
    className: "",
    title: "Create a Post"
  };
  child: React.RefObject<{}> | undefined;

  toggle = () => {
    (this.refs.child as ModalContainer).toggle();
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    const name = target.name;
    const value = target.value;
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  handleSubmit = () => {
    this.props.createPost(this.state);
    (this.refs.child as ModalContainer).toggle();
  };

  body = () => (
    <Form>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input
          type="text"
          name="title"
          id="title"
          placeholder="Post Title"
          onChange={this.handleChange}
        />
      </FormGroup>

      <FormGroup>
        <Label for="body">Body</Label>
        <Input
          type="textarea"
          name="body"
          id="body"
          placeholder="Post Body"
          onChange={this.handleChange}
        />
      </FormGroup>

      <FormGroup>
        <Label for="authorId">Author</Label>
        <Input
          type="select"
          name="authorId"
          id="authorId"
          onChange={this.handleChange}
        >
        <option>Choose One</option>
          {this.props.authors.map((author:User)=>(
            <option key={author.id} value={author.id}>{author.name}</option>
          ))}
        </Input>
      </FormGroup>
    </Form>
  );

  footer = () => (
    <section>
      <Button color="primary" onClick={this.handleSubmit}>
        Create
      </Button>{" "}
      <Button color="secondary" onClick={this.toggle}>
        Cancel
      </Button>
    </section>
  );

  render() {
    return (
      <ModalContainer
        ref="child"
        {...this.props}
        title={this.props.title}
        body={this.body()}
        footer={this.footer()}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector<AppState, StateProps>({
  authors: selectUsers
})

const mapDispatchToProps = (dispatch: Dispatch<void>) => ({
  createPost: (form: NewPostState) => {
    const postData = {
      id: Date.now().toString(),
      title: form.title,
      body: form.body,
      authorId: form.authorId,
      createdDate: new Date,
      modifiedDate: new Date,
    }
    dispatch(
      createPostAction(postData)
    );
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPostModal);
