import { render, screen } from "@testing-library/react";
import App from "./App";

test("Greeting", () => {
  render(<App />);
  const linkElement = screen.getByText(/Greeting/i);
  expect(linkElement).toBeInTheDocument();
});
