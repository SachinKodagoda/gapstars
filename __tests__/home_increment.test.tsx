import Home from "@/app/page";
import { fireEvent, render, screen } from "@testing-library/react";

it("Test Home Page", () => {
  render(<Home />);
  // Check if the page is rendered with the heading
  const heading = screen.getByRole("heading", {
    name: /Counter App/i,
  });
  expect(heading).toBeInTheDocument();

  // get the buttons
  const increment = screen.queryByTestId("increment"); // get the increment button
  const decrement = screen.queryByTestId("decrement"); // get the increment button
  const reset = screen.queryByTestId("reset"); // get the reset button

  // check if the buttons are rendered
  expect(increment).toBeInTheDocument();
  expect(decrement).toBeInTheDocument();
  expect(reset).toBeInTheDocument();

  // get the counter
  const counter = screen.queryByTestId("count");

  // Test for Increment decrement and reset
  expect(counter?.textContent).toBe("0"); // initially it should be 0
  increment && fireEvent.click(increment); // increment it by 1
  expect(counter?.textContent).toBe("1");
  decrement && fireEvent.click(decrement); // decrement it by 1
  expect(counter?.textContent).toBe("0");
  decrement && fireEvent.click(decrement); // decrement it (shouldn't go below 0)
  expect(counter?.textContent).toBe("0");
  for (let i = 0; i < 25; i++) {
    increment && fireEvent.click(increment); // increment it above 10 (shouldn't go above 10)
  }
  expect(counter?.textContent).toBe("10");
  reset && fireEvent.click(reset); // This will reset the count back to 0
  expect(counter?.textContent).toBe("0");
});
