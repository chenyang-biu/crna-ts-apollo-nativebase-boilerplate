import I18n from 'ex-react-native-i18n';
import settings from './../Config/Settings';
import en from './en';
import zh from './zh';

//I18n.defaultLocale = settings.defaultLanguage;
I18n.locale = settings.defaultLanguage;
I18n.fallbacks = true;
I18n.translations = {
  en,
  zh
};

//console.log(I18n.locale);

export default I18n;
