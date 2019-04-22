import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { AppState } from './store/rootReducers';
import { connect, MapDispatchToProps } from 'react-redux';
import { incrementAction, decrementAction } from './store/counter/actions';
import { getCounter } from './store/counter/selectors';
import { Dispatch } from 'redux';

interface AppProps { }

interface AppStateProps {
  counter: number
}

interface AppDispatchProps {
  onIncrementClicked: ()=>void
  onDecrementClicked: () => void
}

class App extends Component<AppProps & AppStateProps & AppDispatchProps> {
  render() {
    const {counter, onIncrementClicked, onDecrementClicked} = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <hr />
          <button onClick={onIncrementClicked}>Add</button>
          <span>Counter: {counter}</span>
          <button onClick={onDecrementClicked}>Remove</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  counter: getCounter(state)
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onIncrementClicked: () => {dispatch(incrementAction())},
  onDecrementClicked: () => {dispatch(decrementAction())}
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
