import React, { useMemo } from "react";

const btnClasses =
    "w-32 h-14 px-8 py-5 rounded-xl justify-center items-center gap-2 inline-flex text-lg leading-none font-normal";

const getColorButton = (isColor) => {
    switch (isColor) {
        case "red": {
            return "bg-red-600 text-white";
        }
        case "black": {
            return "bg-stone-950 text-white";
        }
        case "gray": {
            return "bg-zinc-100 text-gray-400";
        }
        default: {
            return "bg-transparent"
        }
    }
};

const getBorderColorButton = (isColor) => {
    switch (isColor) {
        case 'red': {
            return "border border-red-600 text-red-600";
        }
        case 'black': {
            return "border border-stone-950 text-stone-950";
        }
        default: {
          return ""
        }
    }
};

export const Button = ({ color, label, border, ...props }) => {
    const colorClass = getColorButton(color);
    const borderClass = getBorderColorButton(border);

    const buttonClasses = [btnClasses, colorClass, borderClass].join(" ");

    return (
        <button
            type="button"
            className={`${buttonClasses}`}
            {...props}
        >
            {label}
        </button>
    );
};