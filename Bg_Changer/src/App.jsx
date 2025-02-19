import { useState, useEffect } from "react";
import { get, set, onChange } from "esmls";

function App() {
    const [color, setColor] = useState(() => get("color", "white"));

    onChange("color", (newColor) => {
        setColor(newColor);
    });

    const Button = ({ label, bgColor }) => {
        return (
            <button
                className="border-0 flex flex-col items-center text-white cursor-pointer bg-gray-700 hover:bg-gray-600 p-2 px-3.5 rounded-lg"
                style={{ backgroundColor: bgColor }}
                onClick={() => set("color", bgColor)}
            >
                <span className="text-xs font-bold">{label}</span>
            </button>
        );
    };

    // random color values
    const colors = [
        "#3DCDBD",
        "#A29043",
        "#FECB59",
        "#3DD490",
        "#DE6510",
        "#d96570",
        "#145ED9",
        "#2A9DA5",
        "#2AE152",
    ];

    return (
        <div className="w-full h-screen" style={{ backgroundColor: color }}>
            <div className="fixed flex flex-wrap justify-center items-center left-8 right-8 bottom-6 inset-x-0 bg-[#202124] rounded-3xl shadow-2xl">
                <div className="flex items-center justify-evenly h-16 w-full ">
                    {colors.map((item) => (
                        <Button label={item} key={item} bgColor={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
