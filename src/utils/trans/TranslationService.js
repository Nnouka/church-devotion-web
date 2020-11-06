
import {map_en} from './en/english';
import {map_fr} from './fr/french';
import * as App from '../AppUtils'; 

const englishMap = map_en;
const frenchMap = map_fr;

const getLocaleMap = (locale) => {
    switch(locale) {
        case 'en': return englishMap;
        case 'fr': return frenchMap;
        default: return englishMap;
    }
}
const getChoiceMapValue = (haystack, key, choice = 0) => { 
  // TODO: ensure haystack is a map
  // key is string
  // choice is number
  if (haystack.has(key)) {
    const val = haystack.get(key);
    return choice >= val.length ? key : val[choice];
  } else {
    return fallBack(key);
  }
}

const fallBackChoice = (key, choice = 0) => {
  if (englishMap.has(key)) {
    const val = englishMap.get(key);
    return choice >= val.length ? key : val[choice];
  } else {
    return key;
  }
}

const fallBack = (key) => {
  return fallBackChoice(key);
}

export const transChoice = (key, choice, locale = '') => {
  if (locale.trim().length === 0) locale = App.getLocale();
  return getChoiceMapValue(getLocaleMap(locale), key, choice);
}

export const trans = (key, locale = '') => {
  if (locale.trim().length === 0) locale = App.getLocale();
  return transChoice(key, 0, locale);
}


