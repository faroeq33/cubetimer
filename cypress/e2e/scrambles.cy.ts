describe("Scramble functionality", () => {
  beforeEach(() => {
    cy.visit("/"); // base url configured in cypress.config.ts
  });

  it("should show a different scramble when pressing spacebar", () => {
    let firstScramble: string;

    cy.getDataCy("scramble")
      .invoke("text")
      .then((text: string) => {
        firstScramble = text;
      });

    cy.get("body").type(" ");
    cy.getDataCy("scramble")
      .invoke("text")
      .should((text) => {
        expect(text).not.to.equal(firstScramble);
      });
  });

  it("should be 25 moves long", () => {
    cy.getDataCy("scramble")
      .invoke("text")
      .should((text) => {
        const moves = text.split(" ");
        expect(moves.length).to.eq(25);
      });
  });

  it("should be a valid scramble", () => {
    cy.getDataCy("scramble")
      .invoke("text")
      .should((text) => {
        const moves = text.split(" ");
        const validMoves = [
          "U",
          "D",
          "L",
          "R",
          "F",
          "B",
          "U'",
          "D'",
          "L'",
          "R'",
          "F'",
          "B'",
          "U2",
          "D2",
          "L2",
          "R2",
          "F2",
          "B2",
        ];
        moves.forEach((move) => {
          expect(validMoves).to.include(move);
        });
      });
  });
});
