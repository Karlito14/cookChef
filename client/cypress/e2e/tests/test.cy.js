/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('my first set of tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('test home page', () => {
    cy.contains('h1', 'Découvrez nos recettes');
    cy.findByText(/recettes/i);
    cy.get('._divInput_ob5i0_1')
      .find('input')
      .should('have.class', '_divInput__input_ob5i0_13')
      .should('have.attr', 'placeholder', 'Rechercher');
  });

  it('should write input', () => {
    cy.get('input').type('fromage');
  });

  it('should clic connexion', () => {
    cy.contains('a', /connexion/i).click();
    cy.contains('h2', /connexion/i);
  });

  it('should clic inscription', () => {
    cy.contains('a', /inscription/i).click();
    cy.contains('h2', /inscription/i);
  });
});
