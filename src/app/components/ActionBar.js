import React, { useState, useContext } from "react";
import { PropTypes } from "prop-types";
import { PlusIcon, CogIcon, SearchIcon } from "@heroicons/react/outline";
import { ModalContext } from "./Modal";
import Settings from "./Settings";
import { useTranslation } from "react-i18next";
import EntryEditor from "./EntryEditor";
import debounce from "lodash.debounce";
import Input from "./Input";
import Button from "./Button";

const ActionBar = ({ fetchItems, refreshTable }) => {
    const { t } = useTranslation();
    const { openModal } = useContext(ModalContext);

    return (
        <nav className="sticky w-full top-0 py-6 bg-white shadow-lg rounded-b-xl px-6 flex justify-between items-center">
            <Button
                intent={"success"}
                onClick={() =>
                    openModal(
                        t("Add new Entry"),
                        <EntryEditor refreshTable={refreshTable} />
                    )
                }
                className="w-fit px-4 bg-gray-400 rounded-bl-lg py-3 shadow-md text-white hover:bg-gray-500 flex items-center justify-center"
            >
                <PlusIcon className="w-[20px]" />
                <span className="hidden md:inline-block ml-1">{t("Add")}</span>
            </Button>
            <div className="container flex items-center justify-center mx-5">
                <SearchIcon className="w-[20px] mr-1" />

                <Input
                    onChange={debounce((e) => {
                        fetchItems(`?search=${e.target.value}`);
                    }, 350)}
                    type="text"
                    className="w-full"
                    placeholder={t("Search")}
                />
            </div>
            <Button
                intent={"info"}
                onClick={() => openModal(t("settings"), <Settings />)}
                className="w-fit px-4 bg-white rounded-br-lg py-3 shadow-md hover:bg-gray-100 flex items-center justify-center"
            >
                <CogIcon className="w-[20px]" />
                <span className="hidden md:inline-block ml-1">
                    {t("settings")}
                </span>
            </Button>
        </nav>
    );
};

ActionBar.propTypes = {
    searchTerm: PropTypes.func,
    refreshTable: PropTypes.func,
};

export default ActionBar;
