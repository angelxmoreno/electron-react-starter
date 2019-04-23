import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getCounter } from '../store/counter/selectors';
import { incrementAction, decrementAction } from '../store/counter/actions';
import { AppState } from '../store/rootReducers';
import Navigation from './Navigation';

interface CounterProps { }

interface CounterStateProps {
    counter: number
}

interface CounterDispatchProps {
    onIncrementClicked: () => void
    onDecrementClicked: () => void
}

class Counter extends Component<CounterProps & CounterStateProps & CounterDispatchProps> {
    render() {
        const { counter, onIncrementClicked, onDecrementClicked } = this.props
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Counter
                    </p>
                    <button onClick={onIncrementClicked}>Add</button>
                    <span>Counter: {counter}</span>
                    <button onClick={onDecrementClicked}>Remove</button>
                    <Navigation />
                </header>
            </div>

        );
    }
}

const mapStateToProps = (state: AppState) => ({
    counter: getCounter(state)
})

const mapDispatchToProps = (dispatch: Dispatch<void>) => ({
    onIncrementClicked: () => { dispatch(incrementAction()) },
    onDecrementClicked: () => { dispatch(decrementAction()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
