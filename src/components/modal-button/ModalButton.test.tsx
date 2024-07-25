import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import ModalButton from "./ModalButton";

describe("renders a modal button component", () => {
  it("should render a button with text 'Отправить'", () => {
    render(<ModalButton type="secondary">Отправить</ModalButton>);
    const button = screen.getByText("Отправить");
    expect(button).toBeInTheDocument();
  });
});
