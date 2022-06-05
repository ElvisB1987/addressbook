import React, { useRef } from "react";
import { Dialog } from "@headlessui/react";
import { PropTypes } from "prop-types";
import { useCallback, useState } from "react";
import { createContext } from "react";
import { CONFIRM_MODAL_ID } from "./ConfirmModal";

let MODAL_CONTENT = null;

export const ModalContext = createContext({});

export const ModalContextProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("");
    let resolveRef = useRef(undefined);
    const openModal = useCallback((title, content) => {
        setTitle(title);
        MODAL_CONTENT = content;
        const promise = new Promise((resolve) => {
            resolveRef.current = resolve;
        });

        setIsOpen(true);
        return promise;
    }, []);

    const openConfirmModal = (title) => {
        return openModal(title, CONFIRM_MODAL_ID);
    };

    const closeModal = useCallback((arg) => {
        resolveRef.current(arg);
        setIsOpen(false);
    }, []);

    return (
        <ModalContext.Provider
            value={{ closeModal, openModal, openConfirmModal }}
        >
            {children}
            <Modal isOpen={isOpen} title={title} closeModal={closeModal} />
        </ModalContext.Provider>
    );
};

const Modal = ({ isOpen, closeModal, title }) => {
    return (
        <Dialog
            open={isOpen}
            onClose={closeModal}
            className="fixed z-10 inset-0 overflow-y-auto"
        >
            <div className="flex items-center justify-center min-h-screen">
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                <div className="relative bg-white rounded-[8px] p-[8px] w-fit mx-auto">
                    <div className="flex flex-col justify-between">
                        <div className="flex flex-row justify-between items-center">
                            <Dialog.Title className="mr-4 text-slate-800 py-4 px-4 font-medium">
                                {title}
                            </Dialog.Title>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 hover:cursor-pointer ml-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                onClick={closeModal}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </div>
                        <div>{MODAL_CONTENT}</div>
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool,
    openModal: PropTypes.func,
    closeModal: PropTypes.func,
    title: PropTypes.string,
    resolve: PropTypes.func,
    reject: PropTypes.func,
};

ModalContextProvider.propTypes = {
    children: PropTypes.node,
};

export default Modal;
