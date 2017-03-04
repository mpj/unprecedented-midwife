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

let strings = new LocalizedStrings({
 en: {
   helloWorld: "Hello world"
 },
 sv: {
   helloWorld: "Hej världen!"
 },
 es: {
   helloWorld: "Hola Mundo!"
 },
 de: {
   helloWorld: "Hallo Welt!"
 }
});

var resolver = new ReactDI({
  strings
});

resolver.inject(React)

strings.setLanguage(navigator.language)
let store = createStore(helloWorldReducer)

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
