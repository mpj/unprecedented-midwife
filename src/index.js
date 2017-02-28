import './index.css';

import App from './App';
import LocalizedStrings from 'react-localization'
import { Provider } from 'react-redux'
import React from 'react';
import ReactDI from 'react-di'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { createStore } from 'redux'
import helloWorldReducer from './reducer'

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
let store = createStore(
  helloWorldReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.dispatch({ type: 'init' })

function getGreeting(stringName, di) {
  return di('strings')[stringName]
}

const mapStateToProps = (state, ownProps) => {
  return {
    greeting: getGreeting(state.stringName, ownProps.di)
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
