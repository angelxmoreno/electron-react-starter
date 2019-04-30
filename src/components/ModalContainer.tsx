import React, { Fragment, ReactNode } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ButtonProps
} from "reactstrap";
const EMPTY = <div />;

export interface ModalContainerProps {
  buttonLabel: string;
  buttonProps: ButtonProps;
  className: string;
  title?: string
  body?: ReactNode
  footer?: ReactNode
}

export interface ModalContainerState {
  visible: boolean;
}

class ModalContainer extends React.Component<ModalContainerProps, ModalContainerState> {
  state: ModalContainerState = {
    visible: false
  };

  static defaultProps = {
    buttonLabel: "open",
    buttonProps: {},
    className: ""
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible
    }));
  };

  renderHeader = () => {
    const showComp = !!this.props.title

    return showComp ? (
      <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
    ) : (
      ""
    );
  };

  renderBody = () => {
    const showComp = !!this.props.body

    return showComp ? (
      <ModalBody>{this.props.body}</ModalBody>
    ) : (
      ""
    );
  };

  renderFooter = () => {
    const showComp = !!this.props.footer

    return showComp ? <ModalFooter>{this.props.footer}</ModalFooter> : "";
  };

  render() {
    return (
      <Fragment>
        <Button {...this.props.buttonProps} onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.visible}
          toggle={this.toggle}
          className={this.props.className}
        >
          {this.renderHeader()}
          {this.renderBody()}
          {this.renderFooter()}
        </Modal>
      </Fragment>
    );
  }
}

export default ModalContainer;
