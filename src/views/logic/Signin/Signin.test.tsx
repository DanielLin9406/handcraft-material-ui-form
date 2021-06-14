import React from "react";
import { render, screen } from "@testing-library/react";
import { Signin } from "./Signin";

// TODO
describe("<SigninForm />", () => {
  test("Header contains correct text", () => {
    render(<Signin />);
    const text = screen.getByText("My React and TypeScript App");
    expect(text).toBeInTheDocument();
  });
});
