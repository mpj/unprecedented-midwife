
const LANGUAGES = ['en-GB', 'sv', 'fr', 'es', 'lt', 'rus', 'pl'];

function validateLanguage(providedLanguage, cb) {
  if (LANGUAGES.indexOf(providedLanguage) === -1) {
    throw new Error(`The provided language ${providedLanguage} does not match any of the available languages ${LANGUAGES}`);
  }
}

function createReducer(defaultLanguage, localizationStrings) {
  validateLanguage(defaultLanguage);

  const initialState = {
      currentLanguage: defaultLanguage,
      languageObj: localizationStrings
  };

  return (state = initialState, action) => {
    switch (action.type) {
      case 'LANGUAGE_CURRENT_SET':
        return Object.assign({}, state, { currentLanguage: action.payload });
      default:
        return state;
    }
  }
}

export default createReducer;
