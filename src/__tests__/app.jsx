/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";

import { test, expect } from "vitest";
import App from "../App";

test("test if app.jsx file render", () => {
  render(<App />);
  const element = screen.getByText("Hello World");
  expect(element).toBeInTheDocument();
});
