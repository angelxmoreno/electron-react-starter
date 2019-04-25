import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { getCounter } from "../store/counter/selectors";
import { incrementAction, decrementAction } from "../store/counter/actions";
import { AppState } from "../store/rootReducers";
import Layout from "./Layout/Layout";
import { Button, ButtonGroup } from "reactstrap";
import Icon from "./Icon";

interface CounterProps {}

interface CounterStateProps {
  counter: number;
}

interface CounterDispatchProps {
  onIncrementClicked: () => void;
  onDecrementClicked: () => void;
}

class Counter extends Component<
  CounterProps & CounterStateProps & CounterDispatchProps
> {
  render() {
    const { counter, onIncrementClicked, onDecrementClicked } = this.props;
    return (
      <Layout title="Counter">
        <ButtonGroup size="lg">
          <Button outline color="danger" onClick={onDecrementClicked}>
            <Icon name="minus" />
          </Button>
          <Button color="primary">{counter}</Button>
          <Button outline color="success" onClick={onIncrementClicked}>
            <Icon name="plus" />
          </Button>
        </ButtonGroup>
      </Layout>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  counter: getCounter(state)
});

const mapDispatchToProps = (dispatch: Dispatch<void>) => ({
  onIncrementClicked: () => {
    dispatch(incrementAction());
  },
  onDecrementClicked: () => {
    dispatch(decrementAction());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
