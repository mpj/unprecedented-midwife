// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ReactDI from 'react-di'
import helloWorldReducer from './reducer'
import { createStore } from 'redux'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import LocalizedStrings from 'react-localization'
import type { State } from './reducer'

type DI = () => Object;

let strings = new LocalizedStrings({
 en: {
   helloWorld: "Hello world"
 },
 sv: {
   helloWorld: "Hej världen!"
 },
 es: {
   helloWorld: "Hola Mundo!"
 }
});

var resolver = new ReactDI({
  strings
});

resolver.inject(React)

strings.setLanguage(navigator.language)
const store = createStore(helloWorldReducer)

store.dispatch({ type: 'init' })

function getGreeting(stringName: string, di: DI) {
  return di('strings')[stringName]
}

const mapStateToProps = (state: State, ownProps: Object) => {
  if (state.stringName) {
    return {
      greeting: getGreeting(state.stringName, ownProps.di),
      loading: false
    }
  } else {
    return {
      loading: true
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps
)(App)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp strings={strings} />
  </Provider>,
  document.getElementById('root')
);
