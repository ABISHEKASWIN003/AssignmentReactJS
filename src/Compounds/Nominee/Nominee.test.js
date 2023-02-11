import { render, screen } from "@testing-library/react";
// import { act } from "@testing-library/react";
// import React from "react";
import App from "../../App";

import Nominee from "./Nominee";
test("render Submit Text", () => {
  render(<App />);
  const SUBMIT = screen.queryByText("SUBMIT", { exact: false });
  expect(SUBMIT).toBeInTheDocument();
});
test("render Hello Text", () => {
  render(<App />);
  const Hello = screen.queryByText("Hello", { exact: false });
  expect(Hello).not.toBeInTheDocument();
});
test("render Best Movie", () => {
  render(<App />);
  const BestMovie = screen.queryByText("Best Movie", { exact: false });
  expect(BestMovie).toBeInTheDocument();
});

// import React from "react";
// // import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "@testing-library/react";

// let container = null;
// beforeEach(() => {
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// it("renders with or without a name", () => {
//   act(() => {
//     render(<Nominee />, container);
//   });
//   const message = screen.getByText("Best", { exact: false });
//   expect(message).toBeInTheDocument();

//   act(() => {
//     render(<Nominee name="Jenny" />, container);
//   });
//   const messageWithName = screen.getByText("Hello, Jenny!");
//   expect(messageWithName).toBeInTheDocument();
// });
