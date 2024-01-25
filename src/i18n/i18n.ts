import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import HttpApi from 'i18next-http-backend';
import Language from "./Language";
import resourcesToBackend from "i18next-resources-to-backend";
import Backend from 'i18next-chained-backend';

const inMemoryResourceBackend = resourcesToBackend(
    (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`)
);

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        backend: {
            backends: [inMemoryResourceBackend, HttpApi],
            backendOptions: [{}, {
                loadPath: 'http://localhost:8000/locales/{{lng}}/{{ns}}.json',
            }]
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
