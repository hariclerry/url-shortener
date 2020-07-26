import React from "react";
import { render, screen } from "@testing-library/react";

import UrlShortener from "../../components/url-shortener";

describe("UrlShortener", () => {
  test("renders UrlShortener component", () => {
    render(<UrlShortener />);
      expect(screen.queryByText(/Url Shortner/)).toBeTruthy();
      
  });
});
