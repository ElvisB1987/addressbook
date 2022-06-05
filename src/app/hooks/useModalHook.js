import { ModalContext } from "../components/Modal";
import { useContext } from "react";

const useModalHook = () => {
    return useContext(ModalContext);
};

export default useModalHook;
