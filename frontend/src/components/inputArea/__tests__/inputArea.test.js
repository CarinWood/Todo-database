import InputArea from "../InputArea.jsx";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";

test("First div renders with correct className", () => {
  const component = render(<InputArea />);
  const firstDiv = component.getByTestId("first-div");

  expect(firstDiv.className).toBe("input-fields");
});

test("Render button with correct text", () => {
  const component = render(<InputArea />);
  const button = component.getByTestId("btn");

  expect(button.textContent).toBe("Add");
});

test("Check if todo input renders correctly", () => {
  const component = render(<InputArea />);
  const taskInput = component.getByTestId("taskInput");
  const nameInput = component.getByTestId("name-input");

  expect(taskInput.value).toBe("");
  expect(nameInput.value).toBe("");

  fireEvent.change(nameInput, {
    target: {
      value: "Carin",
    },
  });

  expect(nameInput.value).toBe("Carin");

  fireEvent.change(taskInput, {
    target: {
      value: "Study",
    },
  });

  expect(taskInput.value).toBe("Study");
});
