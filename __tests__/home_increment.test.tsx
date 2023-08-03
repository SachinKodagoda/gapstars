import Home from "@/app/page";
import { fireEvent, render, screen } from "@testing-library/react";

it("should work", () => {
  render(<Home />);
  expect(screen.queryByTestId("checkIcon")).toBeInTheDocument(); // check that the icon is not rendered
  const btn = screen.queryByTestId("checkIcon"); // get the button (pressable)
  if (btn) {
    fireEvent.click(btn);
  }

  expect(screen.getByRole("span", { name: "count" }).innerHTML).toBe("1");

  // click it
});
