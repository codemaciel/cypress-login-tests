describe('template spec', () => {
  it('login-valido', () => {
    cy.visit('https://practice.expandtesting.com/login')
    cy.get('#username') .type('practice') 
    cy.get('#password') .type('SuperSecretPassword!')
    cy.get('button[type=submit').click()
    cy.url().should('include', '/secure') 
    cy.contains('Secure Area') .should('be.visible');

  })

    it('login-invalido', () => {
    cy.visit('https://practice.expandtesting.com/login')
    cy.get('#username') .type('test') 
    cy.get('#password') .type('senha123')
    cy.get('button[type=submit').click()
    cy.contains('Your password is invalid!') .should('be.visible');

  })
  
})