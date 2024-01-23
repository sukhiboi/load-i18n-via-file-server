import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import HttpApi from 'i18next-http-backend';
import Language from "./Language";

i18n
    .use(HttpApi)
    .use(initReactI18next)
    .init({
        backend: {
            loadPath: 'http://localhost:8000/locales/{{lng}}/{{ns}}.json',
        },
        ns: [],
        nsSeparator: ":",
        detection: {
            order: ["querystring", "localStorage"],
            lookupQuerystring: "lang",
            caches: ["localStorage"],
        },
        fallbackLng: {
            pt_PT: [Language.PORTUGUESE, Language.ENGLISH],
            default: [Language.ENGLISH],
        },
    });

export default i18n;
