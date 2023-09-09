import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
test("render greeting", () => {
  render(<Greeting />);
  const greetingElement = screen.getByText("greeting", { exact: false });
  expect(greetingElement).toBeInTheDocument();
});
