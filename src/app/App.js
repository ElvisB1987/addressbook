import React, { useEffect } from "react";
import "./App.css";
import { API_GET_ENTRIES_ROUTE } from "../server/routes/Routes";
import Table from "./components/Table";
import DeleteButton from "./components/DeleteButton";
import ActionBar from "./components/ActionBar";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import translationsEn from "./translations/en.json";
import translationsSr from "./translations/sr.json";
import { useFetchGet, GET_RESPONSE_DATA_JSON } from "./hooks/useFetch";
import EntryEditor from "./components/EntryEditor";
import useModalHook from "./hooks/useModalHook";
import { useTranslation } from "react-i18next";

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .use(detector)
    .init({
        resources: {
            en: { translation: translationsEn },
            sr: { translation: translationsSr },
        },
        fallbackLng: "en",
        interpolation: { escapeValue: false },
    });

const tableHeaderAllScreensClassName =
    "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell";
const tableCellAllScreensClassName =
    "px-4 py-3 flex-wrap hidden md:table-cell text-left text-base";
const tableHeaderLargeScreenClassName =
    "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden xl:table-cell";
const tableCellLargeScreenClassName =
    "px-4 py-3 flex-wrap hidden xl:table-cell text-left text-base";
const tableHeaderMediumScreenClassName =
    "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell";
const tableCellMediumScreenClassName =
    "px-4 py-3 flex-wrap hidden lg:table-cell text-left text-base";

const App = () => {
    const { t } = useTranslation();

    //modal implementation

    const { openModal } = useModalHook();

    const {
        data: items,
        error,
        fetch: fetchItems,
    } = useFetchGet(API_GET_ENTRIES_ROUTE, GET_RESPONSE_DATA_JSON);

    const refreshTable = () => {
        fetchItems();
    };

    useEffect(() => {
        fetchItems();
    }, [fetchItems]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const columns = [
        {
            label: "avatar",
            renderCell: (item) => {
                return (
                    <img
                        className={
                            "inline object-cover w-12 h-12 mr-2 rounded-full"
                        }
                        src={item.avatarUrl}
                        alt="avatar"
                    />
                );
            },
            headerClassName: tableHeaderAllScreensClassName,
            bodyClassName: tableCellAllScreensClassName,
        },
        {
            label: "firstName",
            renderCell: (item) => {
                return (
                    <span
                        className="cursor-pointer hover:underline hover:text-gray-500"
                        onClick={() =>
                            openModal(
                                t("Edit") + " " + item.firstName,
                                <EntryEditor
                                    readOnly={true}
                                    entry={item}
                                    refreshTable={refreshTable}
                                />
                            )
                        }
                    >
                        {item.firstName}
                    </span>
                );
            },
            headerClassName: tableHeaderAllScreensClassName,
            bodyClassName: tableCellAllScreensClassName,
        },
        {
            label: "lastName",
            renderCell: (item) => {
                return <span>{item.lastName}</span>;
            },
            headerClassName: tableHeaderAllScreensClassName,
            bodyClassName: tableCellAllScreensClassName,
        },
        {
            label: "country",
            renderCell: (item) => {
                return <span>{item.country}</span>;
            },
            headerClassName: tableHeaderMediumScreenClassName,
            bodyClassName: tableCellMediumScreenClassName,
        },
        {
            label: "city",
            renderCell: (item) => {
                return <span>{item.city}</span>;
            },
            headerClassName: tableHeaderAllScreensClassName,
            bodyClassName: tableCellAllScreensClassName,
        },
        {
            label: "street",
            renderCell: (item) => {
                return <span>{item.street}</span>;
            },
            headerClassName: tableHeaderLargeScreenClassName,
            bodyClassName: tableCellLargeScreenClassName,
        },
        {
            label: "postalCode",
            renderCell: (item) => {
                return <span>{item.postalCode}</span>;
            },
            headerClassName: tableHeaderLargeScreenClassName,
            bodyClassName: tableCellLargeScreenClassName,
        },
        {
            label: "birthDate",
            renderCell: (item) => {
                return <span>{item.birthDate}</span>;
            },
            headerClassName: tableHeaderLargeScreenClassName,
            bodyClassName: tableCellLargeScreenClassName,
        },
        {
            label: "email",
            renderCell: (item) => {
                return <span>{item.email}</span>;
            },
            headerClassName: tableHeaderMediumScreenClassName,
            bodyClassName: tableCellMediumScreenClassName,
        },
        {
            label: "delete",
            renderCell: (item) => {
                return (
                    <DeleteButton uuid={item.uuid} onDelete={refreshTable} />
                );
            },
            headerClassName: tableHeaderAllScreensClassName,
            bodyClassName: tableCellAllScreensClassName,
        },
        {
            label: "mobile",
            renderCell: (item) => {
                return (
                    <div className="flex flex-col items-center border-black  shadow-xl rounded-md px-4 py-3 text-base">
                        <div className="flex flex-col items-center pb-3">
                            <div>
                                <img
                                    src={item.avatarUrl}
                                    alt="avatar"
                                    className={"h-[100px] rounded-full"}
                                />
                            </div>
                            <p
                                className="cursor-pointer hover:underline hover:text-gray-500"
                                onClick={() =>
                                    openModal(
                                        t("Add new Entry"),
                                        <EntryEditor
                                            readOnly={true}
                                            entry={item}
                                            refreshTable={refreshTable}
                                        />
                                    )
                                }
                            >
                                <span className="font-bold uppercase ">
                                    {t("firstName")}:
                                </span>{" "}
                                {item.firstName}
                            </p>
                            <p>
                                <span className="font-bold uppercase">
                                    {t("lastName")}:
                                </span>{" "}
                                {item.lastName}
                            </p>
                            <p>
                                <span className="font-bold uppercase">
                                    {t("city")}:
                                </span>{" "}
                                {item.city}
                            </p>
                        </div>
                        <DeleteButton
                            uuid={item.uuid}
                            onDelete={refreshTable}
                        />
                    </div>
                );
            },

            headerClassName: "hidden",
            bodyClassName: "px-6 py-4 flex-wrap table-cell md:hidden",
        },
    ];

    return (
        <div>
            <ActionBar fetchItems={fetchItems} refreshTable={refreshTable} />
            {items && <Table columns={columns} items={items} />}
        </div>
    );
};

export default App;
