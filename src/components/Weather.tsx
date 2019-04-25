import React, { Component, ChangeEvent, FormEvent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { getStatus, getError, getInfo } from "../store/weather/selectors";
import * as actions from "../store/weather/actions";
import { AppState } from "../store/rootReducers";
import Layout from "./Layout/";
import { Button, Form, FormGroup, Label, Input, ButtonGroup } from "reactstrap";

interface WeatherProps {}

interface WeatherStateProps {
  status?: string;
  error?: Error;
  info?: Object;
}

interface WeatherDispatchProps {
  onFetchWeather: (location: string) => void;
  onCacelFetch: () => void;
}

const initialState = {
  location: ""
};

type WeatherState = Readonly<typeof initialState>;

class Weather extends Component<
  WeatherProps & WeatherStateProps & WeatherDispatchProps,
  WeatherState
> {
  readonly state: WeatherState = initialState;

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ location: event.currentTarget.value });
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const location = this.state.location;
    if (location !== "") {
      this.props.onFetchWeather(location);
    }
  };
  render() {
    const { status, onCacelFetch, error, info } = this.props;
    const errorMsg = error ? error.message : "";

    return (
      <Layout title="Weather">
        <h3>Status: {status}</h3>

        <Form inline>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail" className="mr-sm-2">
              Location
            </Label>
            <Input
              type="text"
              name="location"
              placeholder="Enter Location"
              onChange={this.handleChange}
            />
          </FormGroup>
          <ButtonGroup>
            <Button color="success" onClick={this.handleSubmit}>Fetch Weather</Button>
            <Button color="danger" onClick={onCacelFetch}>Cancel Fetch</Button>
          </ButtonGroup>
        </Form>
        {errorMsg && <h3>Error: {errorMsg}</h3>}
        {info && <h3>Info: {JSON.stringify(info)}</h3>}
      </Layout>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  status: getStatus(state),
  error: getError(state),
  info: getInfo(state)
});

const mapDispatchToProps = (dispatch: Dispatch<void>) => ({
  onFetchWeather: (lookUpLocation: string) => {
    dispatch(actions.fetchWeatherAction(lookUpLocation));
  },
  onCacelFetch: () => {
    dispatch(actions.cancelWeatherAction());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather);
