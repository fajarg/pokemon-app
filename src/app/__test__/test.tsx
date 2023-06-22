import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../page";
import DetailPokemon from "../[id]/page";

import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";

expect.extend({ toBeInTheDocument });

test("navbar component should render", () => {
  render(<Home />);
  const element = screen.getByText(/pokemon list/i);
  expect(element).toBeInTheDocument();
});

test("data pokemon should show after data fetching", async () => {
  render(<Home />);
  const tableHead = await screen.findByText(/bulbasaur/i);
  expect(tableHead).toBeInTheDocument();
});

test("input search should change when text inserted", () => {
  render(<Home />);
  const searchInput = screen.getByPlaceholderText(/search.../i);
  const testValue = "test search";

  fireEvent.change(searchInput, { target: { value: testValue } });
  expect(searchInput.value).toBe(testValue);
});



