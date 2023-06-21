import React from "react";
import BenefitsSection from "./BenefitsSection";

describe("<BenefitsSection />", () => {
  beforeEach(() => {
    cy.mount(<BenefitsSection />);
  });
  it("renders the BenefitsSection component", () => {
    cy.contains("RideShare Benefits").should("exist");

    cy.get(".flex.flex-col").should("have.length", 4);

    cy.get(".text-2xl.font-semibold").should("exist");
    cy.get(".italic.text-sm").should("exist");

    cy.get("[data-testid='image']").should("exist");
  });
});
