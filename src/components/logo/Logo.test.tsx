import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import Logo from "./Logo";

describe("renders a modal logo component", () => {
  it("should render a logo with alt text", () => {
    render(<Logo width={200} height={300} />);
    const logo = screen.getByAltText("логотип Skypro Music");
    expect(logo).toBeInTheDocument();
  });
});
