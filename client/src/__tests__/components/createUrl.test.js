import React from 'react';
import {
  render,
  fireEvent,
  screen
} from "@testing-library/react";
import CreateUrl from "../../components/url-shortener/createUrl";


describe("CreateUrl", () => {

  it("Should render CreateUrl component", () => {
    render(<CreateUrl />);
    expect(screen.queryByText(/Submit/)).toBeTruthy();
  });
  
    it("Should allow the user to type url", async () => {
      const { getByPlaceholderText } = render(<CreateUrl />);
      const input = getByPlaceholderText("Enter Url");
      input.value = "https://phaneroo-prayer-requests/";
      fireEvent.change(input);

    });

});

