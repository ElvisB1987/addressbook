import { useState, useCallback, useMemo } from "react";

export const GET_RESPONSE_DATA_JSON = async (response) => response.json();
export const GET_RESPONSE_DATA_BLOB = async (response) => response.blob();
export const GET_RESPONSE_DATA_TEXT = async (response) => response.text();
export const GET_RESPONSE_DATA_FORM_DATA = async (response) =>
    response.formData();

const useFetch = (url, init = null, getResponseData = undefined) => {
    const [response, setResponse] = useState(null);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isFetching, setIsFetching] = useState(false);

    const fetch = useCallback(
        async (query = "") => {
            try {
                setError(null);
                setResponse(null);
                setIsFetching(true);

                // start fetching
                const response = await window.fetch(url + query, init);
                // console.log(response);

                // check if response is ok
                if (!response.ok) {
                    throw new Error({
                        status: response.status,
                        message: response.statusText,
                    });
                }

                setResponse(response);
                // if(getResponseData){
                // setData(await getResponseData(response))
                // }

                if (getResponseData) {
                    const getData = await getResponseData(response);
                    setData(getData);
                }
            } catch (error) {
                // catches errors
                console.log(error);
                setError(error);
            } finally {
                setIsFetching(false);
            }
        },
        [url, init, getResponseData]
    );

    return { response, data, error, isFetching, fetch };
};

export const useFetchGet = (url, init, getResponseData) => {
    const initObject = useMemo(() => {
        const checkedInit = init && typeof init !== "function" ? init : {};
        return { ...checkedInit, method: "GET" };
    }, [init]);

    if (typeof init === "function") {
        getResponseData = init;
    }

    return useFetch(url, initObject, getResponseData);
};

export const useFetchPost = (url, init, getResponseData) => {
    const initObject = useMemo(() => {
        const checkedInit = init && typeof init !== "function" ? init : {};
        return { ...checkedInit, method: "POST" };
    }, [init]);

    if (typeof init === "function") {
        getResponseData = init;
    }

    return useFetch(url, initObject, getResponseData);
};

export const useFetchPut = (url, init, getResponseData) => {
    const initObject = useMemo(() => {
        const checkedInit = init && typeof init !== "function" ? init : {};
        return { ...checkedInit, method: "PUT" };
    }, [init]);

    if (typeof init === "function") {
        getResponseData = init;
    }
    return useFetch(url, initObject, getResponseData);
};

export const useFetchDelete = (url, init, getResponseData) => {
    const initObject = useMemo(() => {
        const checkedInit = init && typeof init !== "function" ? init : {};
        return { ...checkedInit, method: "DELETE" };
    }, [init]);

    if (typeof init === "function") {
        getResponseData = init;
    }
    return useFetch(url, initObject, getResponseData);
};
