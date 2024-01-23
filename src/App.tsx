import {useTranslation} from "react-i18next";
import {useState} from "react";

const App = () => {
    const {t, i18n} = useTranslation(["common"])
    const [value, setValue] = useState("");

    const changeLanguage = (langCode: string) => {
        i18n.changeLanguage(langCode);
        setValue("");
    };

    return <div>
        <h1>{t("awesome.text")}</h1>
        <div>
            <label>Change language (lang code) </label>
            <input name="yoooo" value={value} onChange={e => setValue(e.target.value)}/>

            <div style={{marginTop: "1rem"}}>
                <button onClick={() => changeLanguage(value)} style={{marginRight: "1rem"}}>Change</button>
                <button onClick={() => changeLanguage("en_US")}>Reset</button>
            </div>
        </div>
    </div>;
};

export default App
