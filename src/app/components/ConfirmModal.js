import React from "react";
import { ModalContext } from "./Modal";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import Button from "./Button";

export const CONFIRM_MODAL_YES = "yes";
export const CONFIRM_MODAL_NO = "no";

const ConfirmModal = () => {
    const { t } = useTranslation();
    const { closeModal } = useContext(ModalContext);

    const handleCloseModalYes = () => {
        return closeModal(CONFIRM_MODAL_YES);
    };
    const handleCloseModalNo = () => {
        return closeModal(CONFIRM_MODAL_NO);
    };

    return (
        <div className="flex justify-end text-black w-100 py-2 px-4 text-left rounded mt-4">
            <Button
                onClick={handleCloseModalYes}
                intent="success"
                className="mr-4 text-base font-medium"
            >
                {t("yes")}
            </Button>
            <Button
                onClick={handleCloseModalNo}
                intent="danger"
                className="text-base font-medium"
            >
                {t("no")}
            </Button>
        </div>
    );
};

export const CONFIRM_MODAL_ID = <ConfirmModal />;
