import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

test("renders pfinder link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/pfinder/i);

  expect(linkElement).toBeInTheDocument();
});
