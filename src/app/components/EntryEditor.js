import React, { useEffect } from "react";
import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { XIcon } from "@heroicons/react/outline";
import {
    API_POST_V2_ENTRY_ROUTE,
    API_PUT_V2_ENTRY_ROUTE,
    API_GET_ENTRIES_ROUTE,
} from "../../server/routes/Routes";
import { useFetchPut, useFetchPost } from "../hooks/useFetch";
import PropTypes from "prop-types";
import EntryEditorControls from "./EntryEditorControls";
import { ModalContext } from "./Modal";
import { useTranslation } from "react-i18next";
import Input from "./Input";
import defaultAvatar from "../../../resources/images/DefaultAvatar.jpg";
// import defaultAvatar from "../../../resources/images/DefaultAvatar.jpg"

const EntryEditor = ({ resolve, reject, readOnly, entry, refreshTable }) => {
    const {
        register,
        formState: { errors },
        setValue,
        getValues,
        trigger,
    } = useForm();
    if (!entry) entry = {};
    const [isDisabled, setIsDisabled] = useState(readOnly ?? false);
    const { closeModal } = useContext(ModalContext);
    const { t } = useTranslation();

    /*------------------Setting the values------------------*/

    useEffect(() => {
        setValue("firstName", entry.firstName ?? "");
        setValue("lastName", entry.lastName ?? "");
        setValue("country", entry.country ?? "");
        setValue("city", entry.city ?? "");
        setValue("street", entry.street ?? "");
        setValue("postalCode", entry.postalCode ?? "");
        setValue(
            "birthDate",
            entry.birthDate ? entry.birthDate.replace("Z", "") : ""
        );
        setValue("email", entry.email ?? "");
    }, []);

    /*------------------Formdata------------------*/

    const formData = new FormData();

    const prepareData = () => {
        console.log(getValues());
        const file = DataURIToBlob(defaultAvatar);
        function DataURIToBlob(dataURI) {
            const splitDataURI = dataURI.split(",");
            const byteString =
                splitDataURI[0].indexOf("base64") >= 0
                    ? atob(splitDataURI[1])
                    : decodeURI(splitDataURI[1]);
            const mimeString = splitDataURI[0].split(":")[1].split(";")[0];

            const ia = new Uint8Array(byteString.length);
            for (let i = 0; i < byteString.length; i++)
                ia[i] = byteString.charCodeAt(i);

            return new Blob([ia], { type: mimeString });
        }
        var avatarFile = document.querySelector('input[type="file"]').files[0];

        if (avatarFile) {
            formData.append("avatar", avatarFile);
        } else if (entry.avatarUrl) {
            formData.append("avatarUrl", entry.avatarUrl);
        } else {
            formData.append("avatar", file, "defaultAvatar.jpg");
        }
        formData.append(
            "postalCode",
            getValues("postalCode") ? getValues("postalCode") : ""
        );
        formData.append("firstName", getValues("firstName"));
        formData.append("lastName", getValues("lastName"));
        formData.append("country", getValues("country"));
        formData.append("city", getValues("city"));
        formData.append("street", getValues("street"));
        formData.append("birthDate", getValues("birthDate"));
        formData.append("email", getValues("email"));
    };

    /*------------------UseFetch Hook Implemetation------------------*/

    //Post
    const { fetch: fetchPost } = useFetchPost(API_POST_V2_ENTRY_ROUTE, {
        body: formData,
    });

    async function postData() {
        prepareData();
        await fetchPost();
        refreshTable();
        closeModal();
    }

    //Put
    const { fetch: fetchPut } = useFetchPut(
        API_PUT_V2_ENTRY_ROUTE.replace(":uuid", entry.uuid),
        { body: formData }
    );

    async function putData() {
        prepareData();
        await fetchPut();
        refreshTable();
        closeModal();
    }

    /*------------------Handlers------------------*/
    function onAdd() {
        trigger().then((value) => {
            if (value) postData();
        });
    }

    function onSave() {
        trigger().then((value) => {
            if (value) putData();
        });
    }

    return (
        <form className="text-xs flex flex-col lg:text-md lg:grid lg:grid-cols-2 gap-7 mx-4 my-3">
            {isDisabled ? (
                <div className="col-span-1 lg:col-span-2 flex justify-center">
                    <img
                        className="w-[150px] lg:w-[300px]"
                        src={entry.avatarUrl}
                    ></img>
                </div>
            ) : (
                <div className="col-span-1 lg:col-span-2">
                    <label className="font-bold uppercase mr-4" htmlFor="">
                        {t("avatar")}:
                    </label>
                    <input
                        type="file"
                        disabled={isDisabled}
                        {...register("avatar")}
                        placeholder=""
                    />
                </div>
            )}
            <div>
                <label className="font-bold uppercase mr-4" htmlFor="">
                    {t("firstName")}:
                </label>
                <Input
                    type="text"
                    disabled={isDisabled}
                    {...register("firstName", {
                        required: t("This field can't be empty"),
                    })}
                    placeholder=""
                />
                <p className="text-red-500">{errors.firstName?.message}</p>
            </div>
            <div>
                <label className="font-bold uppercase mr-4" htmlFor="">
                    {t("lastName")}:
                </label>
                <Input
                    type="text"
                    disabled={isDisabled}
                    {...register("lastName", {
                        required: t("This field can't be empty"),
                    })}
                    placeholder=""
                />
                <p className="text-red-500">{errors.lastName?.message}</p>
            </div>
            <div>
                <label className="font-bold uppercase mr-4" htmlFor="">
                    {t("country")}:
                </label>
                <Input
                    type="text"
                    disabled={isDisabled}
                    {...register("country", {
                        required: t("This field can't be empty"),
                    })}
                    placeholder=""
                />
                <p className="text-red-500">{errors.country?.message}</p>
            </div>
            <div>
                <label className="font-bold uppercase mr-4" htmlFor="">
                    {t("city")}:
                </label>
                <Input
                    type="text"
                    disabled={isDisabled}
                    {...register("city", {
                        required: t("This field can't be empty"),
                    })}
                    placeholder=""
                />
                <p className="text-red-500">{errors.city?.message}</p>
            </div>
            <div>
                <label className="font-bold uppercase mr-4" htmlFor="">
                    {t("street")}:
                </label>
                <Input
                    type="text"
                    disabled={isDisabled}
                    {...register("street", {
                        required: t("This field can't be empty"),
                    })}
                    placeholder=""
                />
                <p className="text-red-500">{errors.street?.message}</p>
            </div>
            <div>
                <label className="font-bold uppercase mr-4" htmlFor="">
                    {t("postalCode")}:
                </label>
                <Input
                    type="number"
                    disabled={isDisabled}
                    {...register("postalCode")}
                    placeholder=""
                />
            </div>
            <div>
                <label className="font-bold uppercase mr-4" htmlFor="">
                    {t("birthDate")}:
                </label>
                <Input
                    className="w-[145px] lg:w-fit"
                    type="datetime-local"
                    disabled={isDisabled}
                    {...register("birthDate", {
                        required: t("This field can't be empty"),
                    })}
                    placeholder=""
                />
                <p className="text-red-500">{errors.birthDate?.message}</p>
            </div>
            <div>
                <label className="font-bold uppercase mr-4" htmlFor="">
                    {t("email")}:
                </label>
                <Input
                    type="text"
                    disabled={isDisabled}
                    {...register("email", {
                        required: t("This field can't be empty"),
                    })}
                    placeholder=""
                />
                <p className="text-red-500">{errors.email?.message}</p>
            </div>
            <div className="lg:col-span-2 w-full flex justify-center items-center">
                <EntryEditorControls
                    onSave={onSave}
                    onAdd={onAdd}
                    setIsDisabled={setIsDisabled}
                    isDisabled={isDisabled}
                    entry={entry}
                />
            </div>
        </form>
    );
};

EntryEditor.propTypes = {
    resolve: PropTypes.func,
    reject: PropTypes.func,
    readOnly: PropTypes.bool,
    entry: PropTypes.object,
    refreshTable: PropTypes.func,
};

export default EntryEditor;
