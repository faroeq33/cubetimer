import React from "react";
import { Button } from "./button";

describe("<Button />", () => {
  it("renders", () => {
    cy.mount(<Button />);
  });
});
