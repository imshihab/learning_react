import React from "react";
import { useState, useEffect } from "react";

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({});
    const [err, setErr] = useState(null);
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result[currency]);
                setErr(null);
            } catch (error) {
                setErr(error);
                setData(null);
            }
        };
        fetchData();
    }, [currency]);

    return [err, data];
};

export default useCurrencyInfo;
