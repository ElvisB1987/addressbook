import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

/**
 * @typedef {object} Props
 * @property {"button" | "submit"} [type="button"] - Button type.
 * @property {boolean} [disabled=false] - Whether the button is disabled.
 * @property {React.ReactNode} [label] - Button label.
 * @property {string} [className] - Additional classes to pass onto button.
 * @property {React.ReactNode} [children] - Button children.
 * @property {...any} [props] - Rest of the props.
 */

/**
 * Simple button.
 *
 * @type {React.FC<Props>}
 *
 */

const Button = ({
    intent = " ",
    type = "button",
    disabled = false,
    label,
    className,
    children,
    ...props
}) => {
    const getColor = () => {
        switch (intent) {
            case "info":
                return [
                    "border-blue-600",
                    "hover:border-blue-400",
                    "hover:bg-blue-400",
                    "ring-blue-400",
                    "active:bg-blue-600",
                    "text-white",
                    "bg-blue-600",
                    "focus:ring-blue-500",
                    "active:translate-y-0.5",
                ];

            case "warning":
                return [
                    "border-orange-500",
                    "hover:border-orange-300",
                    "bg-orange-500",
                    "hover:bg-orange-300",
                    "ring-orange-200",
                    "active:bg-orange-500",
                    "text-white",
                    "focus:ring-orange-500",
                    "active:translate-y-0.5",
                ];
            case "danger":
                return [
                    "border-red-500",
                    "hover:border-red-300",
                    "hover:bg-red-300",
                    "ring-red-200",
                    "active:bg-red-500",
                    "text-white",
                    "bg-red-500",
                    "focus-ring-red-500",
                    "active:translate-y-0.5",
                ];
            case "success":
                return [
                    "border-green-600",
                    "hover:border-green-400",
                    "hover:bg-green-400",
                    "ring-green-200",
                    "active:bg-green-600",
                    "text-white",
                    "bg-green-600",
                    "active:translate-y-0.5",
                ];
            case "default":
            default:
                return [
                    "border-gray-500",
                    "hover:border-gray-900",
                    "hover:bg-gray-100",
                    "ring-gray-200",
                    "active:bg-gray-600",
                    "ring-offset-0",
                    "focus:outline-none",
                    "focus:ring-2",
                    "active:translate-y-0.5",
                ];
        }
    };
    return (
        <button
            intent={intent}
            type={type}
            disabled={disabled}
            className={clsx(
                "px-[1rem]",
                "py-[0.5rem]",
                "border",
                "rounded-[4px]",

                className,
                getColor()
            )}
            {...props}
        >
            {children || label}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf(["button", "submit"]),
    intent: PropTypes.oneOf([
        "warning",
        "info",
        "success",
        "danger",
        "default",
    ]),
    disabled: PropTypes.bool,
    label: PropTypes.node,
    className: PropTypes.string,
    children: PropTypes.node,
    openModal: PropTypes.func,
};

Button.displayName = "Button";

export default Button;
