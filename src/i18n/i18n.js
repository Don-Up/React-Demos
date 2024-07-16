// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            welcome: "Welcome to our application",
            description: "This is an example of i18n in a React app"
        }
    },
    fr: {
        translation: {
            welcome: "Bienvenue dans notre application",
            description: "Ceci est un exemple de i18n dans une application React"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
