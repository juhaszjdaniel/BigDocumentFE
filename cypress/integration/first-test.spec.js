describe("Tests", () => {
  it("should visit the page", () => {
    cy.visit("");
  });

  it('should check counter', () => {
    cy.visit("");
    cy.get('#counter').should('contain', '15');
  });

  it('should check scroll and check counter', () => {
    cy.visit("");
    cy.get('.scroll').scrollTo('bottom');
    cy.get('#counter').should('contain', '30');
  });

  it('should scroll twice and the counter should be the same as for one', function () {
    cy.visit("");
    cy.get('.scroll').scrollTo('bottom');
    cy.get('.scroll').scrollTo('bottom');
    cy.get('#counter').should('contain', '30');
  });
});
