import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Input from "../app/components/Input";

test("Input has no value initially", () => {
    const input = render(<Input />);
    const inputElement = input.getByRole("textbox");
    expect(inputElement.value).toEqual("");
});

test("Input has value 'Hello'", () => {
    const input = render(<Input />);
    const inputElement = input.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "Hello" } });
    expect(inputElement.value).toEqual("Hello");
});
