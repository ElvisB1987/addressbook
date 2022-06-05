import React, { StrictMode } from "react";
import ReactDom from "react-dom";
import App from "./App";
import { ModalContextProvider } from "../app/components/Modal";

ReactDom.render(
    <StrictMode>
        <ModalContextProvider>
            <App />
        </ModalContextProvider>
    </StrictMode>,
    document.getElementById("app-root")
);
