import { useState, useCallback, useEffect, useRef } from "react";

function App() {
    const [length, setLength] = useState(7);
    const [numAllowed, setNumAllowed] = useState(false);
    const [symbolsAllowed, setSymbolsAllowed] = useState(false);
    const [Password, setPassword] = useState("");
    const passref = useRef(null);

    const PasswordGenerator = useCallback(() => {
        let password = "";
        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerCase = "abcdefghijklmnopqrstuvwxyz";
        let str = upperCase + lowerCase;
        const numbers = "0123456789";
        if (numAllowed) str += numbers;
        const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
        if (symbolsAllowed) str += symbols;

        for (let index = 0; index < length; index++) {
            let char = Math.floor(Math.random() * str.length + 1);
            password += str.charAt(char);
        }
        setPassword(password);
    }, [length, numAllowed, symbolsAllowed, setPassword]);

    const CopyToClipboard = useCallback(() => {
        passref.current?.select();
        navigator.clipboard.writeText(Password);
    }, [Password]);

    useEffect(() => {
        PasswordGenerator();
    }, [length, numAllowed, symbolsAllowed, PasswordGenerator]);

    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <div className="min-w-96 min-h-52 bg-[#202124] px-3 py-2 flex items-center flex-col gap-2">
                <h3>Password Generator</h3>
                <div className="flex items-center gap-2 h-[56px] w-full text-sm font-normal">
                    <input
                        value={Password}
                        type="text"
                        className="border-0 flex-1 outline-0 h-[32px] rounded-3xl bg-white text-[#202124] px-[12px] py-[8px] font-medium font-mono"
                        readOnly
                        ref={passref}
                    />
                    <button onClick={CopyToClipboard}>Copy</button>
                </div>
                <div className="flex items-center gap-2 h-[48px] w-full text-sm font-normal px-2">
                    length {length}:
                    <input
                        type="range"
                        value={length}
                        min={7}
                        max={32}
                        className="flex-[01]"
                        onChange={(val) => {
                            setLength(val.target.value);
                        }}
                    />
                </div>
                <div className="flex items-center gap-2 h-[48px] w-full text-sm font-normal px-2">
                    <input
                        type="checkbox"
                        value={numAllowed}
                        onChange={(val) => {
                            setNumAllowed((prev) => !prev);
                        }}
                    />
                    Numbers
                </div>
                <div className="flex items-center gap-2 h-[48px] w-full text-sm font-normal px-2">
                    <input
                        type="checkbox"
                        value={symbolsAllowed}
                        onChange={() => {
                            setSymbolsAllowed((prev) => !prev);
                        }}
                    />
                    Symbols
                </div>
            </div>
        </div>
    );
}

export default App;
