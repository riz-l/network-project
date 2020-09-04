// Import: Dependencies
import React from "react";
import { render } from "@testing-library/react";

// Import: Components
import App from "./App.component";

// Test
test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
