/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";

import { test, expect } from "vitest";
import App from "../App";

test("test if app.jsx file render", () => {
  render(<App />);
  const element = screen.getByText("Hello World");
  const element2 = screen.getByRole("heading", {
    name: "Hello World",
  });
  const button = screen.getByRole("button", {
    name: "submit now2",
  });

  expect(element).toBeInTheDocument();
  expect(element2).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});
