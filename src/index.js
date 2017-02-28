import './index.css';

import App from './App';
import LocalizedStrings from 'react-localization'
import { Provider } from 'react-redux'
import React from 'react';
import ReactDI from 'react-di'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import createSeparatorCreator from './separator/separatorFactory'
import { createStore } from 'redux'
import helloWorldReducer from './reducer'

let strings = new LocalizedStrings({
 en: {
   hello: "Hello",
   world: "world",
   space: ' '
 },
 sv: {
   hello: 'Hej',
   world: 'världen!',
   space: ' '
 },
 es: {
   hello: 'Hola',
   world: 'Mundo!',
   space: ' '
 }
});

const separatorCreator = createSeparatorCreator()

var resolver = new ReactDI({
  strings,
  separatorCreator
});

resolver.inject(React)

strings.setLanguage(navigator.language)
let store = createStore(
  helloWorldReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.dispatch({ type: 'init' })

function getGreeting(stringName, di) {
  const separator = di('separatorCreator').getString()
  const allStringKeys = stringName.split(separator)
  return allStringKeys.reduce((acc, val) => {
    return acc + di('strings')[val]
  }, '')
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
