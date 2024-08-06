import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import ModalInput from "./ModalInput";

describe("renders a modal input component", () => {
  it("should render an input with placeholder 'Введите имя'", () => {
    const onChange = jest.fn();
    render(
      <ModalInput
        type="text"
        placeholder="Введите имя"
        name="name"
        onChange={onChange}
        value=""
      />
    );
    const input = screen.getByPlaceholderText("Введите имя");
    expect(input).toBeInTheDocument();
  });
});
