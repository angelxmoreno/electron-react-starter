import React, { Component, ChangeEvent } from "react";
import ModalContainer, { ModalContainerProps } from "../ModalContainer";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppState } from "../../store/rootReducers";
import { createUserAction } from '../../database/users/actions';
import { selectUsers } from "../../database/users/selectors";
import { createStructuredSelector } from 'reselect';
import { User } from "../../database/users/types";

interface StateProps {
  users: User[]
}

interface DispatchProps {
  createUser: (form: NewUserState) => void;
}

interface NewUserState {
  name: string;
  imgUrl: string;
}

type NewUserProps = ModalContainerProps & StateProps & DispatchProps

class NewUserModal extends Component<NewUserProps, NewUserState> {
  static defaultProps = {
    buttonLabel: "New User",
    buttonProps: { color: "success" },
    className: "",
    title: "Create a User"
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
    this.props.createUser(this.state);
    (this.refs.child as ModalContainer).toggle();
  };

  body = () => (
    <Form>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="User Name"
          onChange={this.handleChange}
        />
      </FormGroup>

      <FormGroup>
        <Label for="imgUrl">Photo Url</Label>
        <Input
          type="text"
          name="imgUrl"
          id="imgUrl"
          placeholder="User Photo URL"
          onChange={this.handleChange}
        />
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
  users: selectUsers
})

const mapDispatchToProps = (dispatch: Dispatch<void>) => ({
  createUser: (form: NewUserState) => {
    console.log("dispatch", dispatch);
    dispatch(
      createUserAction({
        id: Date.now().toString(),
        name: form.name,
        imgUrl: form.imgUrl,
        createdDate: new Date,
        modifiedDate: new Date,
      })
    );
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewUserModal);
