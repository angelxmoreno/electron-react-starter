import React, { Component, ChangeEvent, FormEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getStatus, getError, getInfo } from '../store/weather/selectors';
import * as actions from '../store/weather/actions';
import { AppState } from '../store/rootReducers';
import Layout from './Layout';

interface WeatherProps { }

interface WeatherStateProps {
    status?: string
    error?: Error
    info?: Object
}

interface WeatherDispatchProps {
    onFetchWeather: (location: string) => void
    onCacelFetch: () => void
}

const initialState = {
    location: ''
}

type WeatherState = Readonly<typeof initialState>

class Weather extends Component<WeatherProps & WeatherStateProps & WeatherDispatchProps, WeatherState> {
    readonly state: WeatherState = initialState

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ location: event.currentTarget.value });
    }

    handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        const location = this.state.location;
        if (location !== '') {
            this.props.onFetchWeather(location)
        }
    }
    render() {
        const { status, onCacelFetch, error, info } = this.props
        const errorMsg = error ? error.message : ''
        
        return (
            <Layout title="Weather">
                <h3>Status: {status}</h3>
                <h3>Error: {errorMsg}</h3>
                <h3>Info: {JSON.stringify(info)}</h3>
                <input type="text" name="location" placeholder="Enter Location" onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Fetch Weather</button>
                <button onClick={onCacelFetch}>Cancel Fetch</button>
            </Layout>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    status: getStatus(state),
    error: getError(state),
    info: getInfo(state),
})

const mapDispatchToProps = (dispatch: Dispatch<void>) => ({
    onFetchWeather: (lookUpLocation: string) => { dispatch(actions.fetchWeatherAction(lookUpLocation)) },
    onCacelFetch: () => { dispatch(actions.cancelWeatherAction()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
