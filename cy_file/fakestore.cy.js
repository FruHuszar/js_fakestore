const VEGPONT = "https://fakestoreapi.com/products";
const VEGPONTUSER = "https://fakestoreapi.com/users";
const OLDAL = "https://fruhuszar.github.io/js_fakestore/";

function betoltTermekek() {
  cy.intercept("GET", VEGPONT).as("getProducts");
  cy.visit(OLDAL);
  cy.get("#termekek").click();
}

function betoltFelhasznalok() {
  cy.intercept("GET", VEGPONTUSER).as("getUsers");
  cy.visit(OLDAL);
  cy.get("#felhasznalok").click();
}

describe("Termékek lekérése végpontról", () => {
  beforeEach(() => {
    betoltTermekek();
  });

  it("Sikeres hálózati választ ad (200 OK)", () => {
    cy.wait("@getProducts").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });
  });

  it("Megjeleníti a termékeket a felületen", () => {
    cy.wait("@getProducts");
    cy.get(".card").should("have.length.greaterThan", 0);
  });
});

describe("Felhasználok lekérése végpontról", () => {
  beforeEach(() => {
    betoltFelhasznalok();
  });

  it("Sikeres hálózati választ ad (200 OK)", () => {
    cy.wait("@getUsers").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });
  });

  it("Megjeleníti a felhasználókat a felületen", () => {
    cy.wait("@getUsers");
    cy.get("tr").should("have.length.greaterThan", 1);
  });
});

describe("Hibakezelés", () => {
  it("500-as hibaüzenet", () => {
    cy.intercept("GET", VEGPONT, {
      statusCode: 500,
      body: { error: "Internal Server Error" },
    }).as("getProductsError");

    cy.visit(OLDAL);
    cy.get("#termekek").click();
    cy.wait("@getProductsError");

    /* meg kéne jelennie valahol a hibaüzenetnek az oldalon. Van ilyen? */
    cy.get(".error-message")
      .should("be.visible")
      .and("contain", "Hiba történt a termékek lekérése során.");
  });

  it("404 esetén is kezelve van a hiba", () => {
    cy.intercept("GET", VEGPONT, {
      statusCode: 404,
      body: { error: "Not Found" },
    }).as("getProducts404");

    cy.visit(OLDAL);
    cy.get("#termekek").click();
    cy.wait("@getProducts404");

    cy.get(".error-message").should("be.visible");
  });

  it("hálózati hiba esetén (offline) fallback üzenet", () => {
    cy.intercept("GET", VEGPONT, {
      forceNetworkError: true,
    }).as("getNetworkError");

    cy.visit(OLDAL);
    cy.get("#termekek").click();
    cy.wait("@getNetworkError");

    cy.get(".error-message").should("be.visible");
  });
});
