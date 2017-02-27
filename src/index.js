import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ReactDI from 'react-di'
import helloWorldReducer from './reducer'
import { createStore } from 'redux'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'

import getLanguages from './languages';

import createReducer from './industrial-neighborhood/reducer.factory';
import { createLocalization, mapLanguagesToObject } from './industrial-neighborhood/localization.factory';


function getGreeting(stringName, di) {
  return di('localizedStrings')[stringName]
}

function initResolver(localizedStrings) {
    const resolver = new ReactDI({
      localizedStrings
    });

    resolver.inject(React)
}

function initLocalization(languages) {
    const localizedStrings = createLocalization(languages);

    localizedStrings.setLanguage(navigator.language)

    return localizedStrings;
}

function initReducer(languages) {
  return createReducer(navigator.language, mapLanguagesToObject(languages));
}

function initStore(reducer) {
  return createStore(reducer);
}

function initRender(store, localizedStrings, ConnectedApp) {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedApp strings={localizedStrings} />
    </Provider>,
    document.getElementById('root')
  );
}

function init() {
  const languages = getLanguages();
  const localizedStrings = initLocalization(languages)
  const reducer = initReducer(languages);
  const store = initStore(reducer);

  initResolver(localizedStrings);

  const mapStateToProps = (state, ownProps) => {
    return {
      greeting: getGreeting('helloWorld', ownProps.di)
    }
  }

  const ConnectedApp = connect(
    mapStateToProps
  )(App)

  initRender(store, localizedStrings, ConnectedApp);
}

init();
