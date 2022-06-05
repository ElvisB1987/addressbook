import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

/**
 * @typedef {object} Props
 * @property {"text" | "password"} [type="text"] - Input type.
 * @property {boolean} [disabled=false] - Whether the input is disabled.
 * @property {string} [className] - Additional classes to pass onto button.
 * @property {...any} [props] - Rest of the props.
 */

/**
 * Simple input.
 *
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<Props> & React.RefAttributes<unknown>>}
 */
const Input = React.forwardRef(
    ({ intent = "", type = "text", disabled = false, className, ...props }, ref) => {
        const changeColor = () => {
            switch (intent) {
                case "info":
                    return ["border-b-cyan-300",
                        "hover:border-cyan-500"];
                case "warning":
                    return ["border-b-orange-300",
                        "hover:border-orange-500"];
                case "danger":
                    return ["border-b-red-300",
                        "hover:border-red-500"];
                case "success":
                    return ["border-b-green-300",
                        "hover:border-green-500"];
                default:
                    return ["border-b-gray-300",
                        "hover:border-gray-500"];
            }
        };
        return (
            <input
                intent={intent}
                ref={ref}
                type={type}
                disabled={disabled}
                className={clsx(
                    "px-[1rem]",
                    "py-[0.5rem]",
                    "outline-none",
                    "border-b",
                    "rounded-[4px]",
                    "ring-offset-0",
                    "ring-gray-200",
                    "hover:",
                    "focus:outline-none",
                    "focus:none",
                    "disabled:border-opacity-60",
                    "disabled:bg-gray-100",
                    "disabled:bg-opacity-60",
                    "disabled:placeholder-opacity-60",
                    "disabled:text-gray-400",
                    "disabled:text-opacity-60",
                    "disabled:cursor-not-allowed",
                    className,
                    changeColor()
                )}
                {...props}
            />
        );
    }
);

Input.propTypes = {
    type: PropTypes.oneOf(["text", "password"]),
    disabled: PropTypes.bool,
    className: PropTypes.string,
    intent: PropTypes.oneOf(["warning", "info", "success", "danger"])
};

Input.displayName = "Input";

export default Input;
