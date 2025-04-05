describe('Login de Usuario', () => {
  it('Debería hacer login con credenciales válidas', () => {
    cy.visit('https://automationexercise.com/login');
    cy.get('input[data-qa="login-email"]').type('christian@example.com');
    cy.get('input[data-qa="login-password"]').type('Password123');
    cy.get('button[data-qa="login-button"]').click();
    
    // 2. Haz clic en el botón y verifica la solicitud
    cy.intercept('POST', '/login').as('loginRequest');
    cy.get('button[data-qa="login-button"]').click();
    cy.wait('@loginRequest').its('response.statusCode').should('eq', 200);

    // 3. Valida la redirección y el mensaje
    cy.url().should('include', '/account');
    cy.contains('Logged in as', { timeout: 10000 }).should('be.visible');
  });
});

