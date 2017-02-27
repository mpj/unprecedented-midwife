import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ReactDI from 'react-di'
import helloWorldReducer from './reducer'
import { createStore } from 'redux'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'

import createReducer from './industrial-neighborhood/reducer.factory';
import { createLocalization, mapLanguagesToObject } from './industrial-neighborhood/localization.factory';

/*let strings = new LocalizedStrings({
 en: {
   helloWorld: "Hello world"
 },
 sv: {
   helloWorld: "Hej världen!"
 },
 es: {
   helloWorld: "Hola Mundo!"
 }
});*/

const langArr = [
  ['en', 'Hello World'],
  ['sv', 'Hej världen!']
];

const localizedStrings = createLocalization(langArr);

var resolver = new ReactDI({
  localizedStrings
});

resolver.inject(React)

localizedStrings.setLanguage(navigator.language)


const reducer = createReducer(navigator.language, mapLanguagesToObject(langArr));
const store = createStore(reducer);
//let store = createStore(helloWorldReducer)

//store.dispatch({ type: 'init' })

function getGreeting(stringName, di) {
  return di('localizedStrings')[stringName]
}

const mapStateToProps = (state, ownProps) => {
  return {
    greeting: getGreeting('helloWorld', ownProps.di)
  }
}

const ConnectedApp = connect(
  mapStateToProps
)(App)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp strings={localizedStrings} />
  </Provider>,
  document.getElementById('root')
);
