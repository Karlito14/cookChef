/* eslint-disable no-undef */
describe('my first set of tests', () => {
  it('test home page', () => {
    cy.visit('/');
    cy.contains('h1', 'Découvrez nos recettes');
    cy.findByText(/recettes/i);
    cy.get('._divInput_ob5i0_1').find('input')
  });

  it('test signup page', () => {
    cy.visit('/signup');
    cy.contains('h2', /inscription/i);
  });

  it('test signin page', () => {
    cy.visit('/signin');
    cy.contains('h2', /connexion/i);
  });
});
