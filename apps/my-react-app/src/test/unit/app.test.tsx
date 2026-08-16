 import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import App from "../../App.tsx";
import { currencyFormat } from "@repo/utils";

describe("App", () => {
  it("render button", async () => {
    window.alert = jest.fn();
    render(<App />);
    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(window.alert).toHaveBeenCalledWith(currencyFormat(12345));
  });
});
