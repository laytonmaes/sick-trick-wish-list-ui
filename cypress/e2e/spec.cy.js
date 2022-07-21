describe('home page', () => {

  beforeEach (() => {
    cy.visit('http://localhost:3000/')
  })

  it('should see a header with Sick Trick Wish List in it', () => {
    cy.get("h1").contains("Sick Trick Wish List")
  })
  it("should have 3 cards for tricks", () => {
    cy.get(".trick-card").should("have.length", 3)
  })
  it("each card should contain a h2 and 2 paragraph tags with info", () => {
    cy.get(".trick-card").eq(0).within(() => {
      cy.get("h2").contains("treflip")
      cy.get("p").eq(0).contains("Stance: regular")
      cy.get("p").eq(1).contains("Obstacle: flat ground")
    })
    cy.get(".trick-card").eq(1).within(() => {
      cy.get("h2").contains("heelflip")
      cy.get("p").eq(0).contains("Stance: switch")
      cy.get("p").eq(1).contains("Obstacle: stairs")
    })
    cy.get(".trick-card").eq(2).within(() => {
      cy.get("h2").contains("frontside 50-50, backside 180 out")
      cy.get("p").eq(0).contains("Stance: regular")
      cy.get("p").eq(1).contains("Obstacle: ledge")
    })
    
  })
})