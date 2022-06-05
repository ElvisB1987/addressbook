import React, { useRef, useState } from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import useModalHook from "../hooks/useModalHook";
import Button from "./Button";

const Settings = () => {
    const { t } = useTranslation();
    const [language, setLanguage] = useState(i18n.language); //language detector

    const refSelect = useRef(null);

    const onConfirmClick = () => {
        i18n.changeLanguage(refSelect.current.value);
        closeModal();
    };

    const { closeModal } = useModalHook();

    return (
        <div className="settings pb-6 pt-5 rounded-lg min-w-[200px] text-base">
            <select
                value={language}
                onChange={(e) => {
                    setLanguage(e.target.value);
                }}
                ref={refSelect}
                name="language"
                className="mb-12 w-full outline-none bg-gray-100 px-4"
            >
                <option value="en">{t("english")}</option>
                <option value="sr">{t("serbian")}</option>
            </select>
            <div className="flex justify-around">
                <Button onClick={onConfirmClick} intent="success">
                    {t("confirm")}
                </Button>
                <Button onClick={closeModal} intent="danger">
                    {t("cancel")}
                </Button>
            </div>
        </div>
    );
};

export default Settings;
