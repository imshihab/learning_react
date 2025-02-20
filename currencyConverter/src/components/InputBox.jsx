import React, { useId } from "react";

const InputBox = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    className = "",
    isReadonly = false,
}) => {
    const inpID = useId();
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label
                    htmlFor={inpID}
                    className="text-black/40 mb-2 inline-block"
                >
                    {label}
                </label>
                <input
                    className="outline-none w-full bg-transparent py-1.5 text-blue-500"
                    type="number"
                    placeholder="Amount"
                    id={inpID}
                    value={amount}
                    onChange={(e) => {
                        const value = e.target?.valueAsNumber;
                        onAmountChange &&
                            onAmountChange(value ? value : 0);
                    }}
                    readOnly={isReadonly}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 text-emerald-600 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => {
                        onCurrencyChange && onCurrencyChange(e.target.value);
                    }}
                >
                    {currencyOptions.map((item) => (
                        <option
                            key={item}
                            value={item}
                            className="text-blue-500 "
                        >
                            {item}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default InputBox;
