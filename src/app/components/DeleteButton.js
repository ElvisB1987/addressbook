import React, { useContext } from "react";
import Button from "./Button";
import { TrashIcon } from "@heroicons/react/solid";
import { API_DELETE_ENTRY_ROUTE } from "../../server/routes/Routes";
import { ModalContext } from "./Modal";
import { useFetchDelete } from "../hooks/useFetch";
import { useTranslation } from "react-i18next";
import { CONFIRM_MODAL_YES } from "./ConfirmModal";
import clsx from "clsx";

// eslint-disable-next-line react/prop-types
const DeleteButton = ({ uuid, onDelete }) => {
    const { openConfirmModal } = useContext(ModalContext);
    const { t } = useTranslation();
    const openDeleteModal = () => {
        openConfirmModal(t("title")).then((resolveValue) => {
            if (CONFIRM_MODAL_YES === resolveValue) {
                deleteUser();
            }
        });
    };

    // eslint-disable-next-line no-unused-vars
    const { response, error, fetch } = useFetchDelete(
        API_DELETE_ENTRY_ROUTE.replace(":uuid", uuid)
    );

    const deleteUser = async () => {
        await fetch();
        onDelete(uuid);
        if (error) {
            console.error();
        }
    };
    return (
        <Button
            intent="danger"
            className={clsx("rounded-br-md rounded-bl-md")}
            onClick={openDeleteModal}
        >
            <TrashIcon className=" w-5 h-5  text-black-500" />
        </Button>
    );
};

export default DeleteButton;
