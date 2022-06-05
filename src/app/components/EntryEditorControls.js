import React, { useState } from "react";
import Button from "./Button";
import { useTranslation } from "react-i18next";

const EntryEditorControls = ({
    onSave,
    onAdd,
    setIsDisabled,
    isDisabled,
    entry,
}) => {
    const { t } = useTranslation();

    if (Object.keys(entry).length === 0)
        return (
            <Button
                intent={"success"}
                onClick={() => onAdd()}
                className="mt-5 w-[80%]"
            >
                {t("Add")}
            </Button>
        );
    else if (isDisabled) {
        return (
            <Button
                intent={"info"}
                onClick={() => {
                    setIsDisabled(false);
                }}
                className="mt-5 w-[80%]"
            >
                {t("Edit")}
            </Button>
        );
    } else {
        return (
            <Button
                intent={"success"}
                onClick={() => {
                    onSave();
                }}
                className="mt-5 w-[80%]"
            >
                {t("Save")}
            </Button>
        );
    }

    // if (isEdit)
    //     return (
    //         <Button
    //             intent={"success"}
    //             onClick={() => {
    //                 setIsEdit(false);
    //                 onSave();
    //             }}
    //             className="mt-5 w-[80%]"
    //         >
    //             {t("Save")}
    //         </Button>
    //     );
    // else {
    //     if (isDisabled)
    //         return (
    //             <Button
    //                 intent={"info"}
    //                 onClick={() => {
    //                     setIsDisabled(false);
    //                     setIsEdit(true);
    //                 }}
    //                 className="mt-5 w-[80%]"
    //             >
    //                 {t("Edit")}
    //             </Button>
    //         );
    //     else
    //         return (
    //             <Button
    //                 intent={"success"}
    //                 onClick={() => onAdd()}
    //                 className="mt-5 w-[80%]"
    //             >
    //                 {t("Add")}
    //             </Button>
    //         );
    // }
};

export default EntryEditorControls;
