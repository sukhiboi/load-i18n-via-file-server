import {useTranslation} from "react-i18next";
import {useState} from "react";

const App = () => {
    const {t, i18n} = useTranslation(["common", "secret"])
    const [value, setValue] = useState("");
    const [showSecretText, setShowSecretText] = useState(false);

    const changeLanguage = (langCode: string) => {
        i18n.changeLanguage(langCode);
        setValue("");
    };

    return <div>
        <h1>{t("common:awesome.text")}</h1>
        <div>
            <label>Change language (lang code) </label>
            <input value={value} onChange={e => setValue(e.target.value)}/>

            <div style={{marginTop: "2rem", marginBottom: "2rem"}}>
                <h2 style={{background: showSecretText ? "white" : "grey"}}>{showSecretText ? t("secret:awesome.text") : "Very secret message"}</h2>
                <button onClick={() => setShowSecretText(prevState => !prevState)}>
                    Wanna see secret text!!!
                </button>
            </div>

            <div style={{marginTop: "1rem"}}>
                <button onClick={() => changeLanguage(value)} style={{marginRight: "1rem"}}>Change</button>
                <button onClick={() => changeLanguage("en_US")}>Reset</button>
            </div>
        </div>
    </div>;
};

export default App
