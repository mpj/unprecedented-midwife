
import LocalizedStrings from 'react-localization'

export function mapLanguagesToObject(languageArr) {
    const mappedObj = {};

    for (let i = 0, ii = languageArr.length; i < ii; i++) {
        mappedObj[languageArr[i][0]] = { helloWorld: languageArr[i][1] };
    }

    return mappedObj;
}

export function createLocalization(languageArr) {
    return new LocalizedStrings(mapLanguagesToObject(languageArr));
}
