describe('Registro de Usuario', () => {
    it('Debería permitir registrar un nuevo usuario', () => {
      cy.visit('https://automationexercise.com/login');
      cy.get('input[data-qa="signup-name"]').type('Christian');
      // Generar un correo electrónico único
      // para evitar conflictos de registro      
      cy.get('input[data-qa="signup-email"]').type('test' + Math.random() + 'christian@example.com');
      cy.get('button[data-qa="signup-button"]').click();
      // Completar formulario de registro
      cy.get('#id_gender1').check();
      cy.get('#password').type('Password123');
      cy.get('#days').select('15');
      cy.get('#months').select('June');
      cy.get('#years').select('1990');
      cy.get('#newsletter').check();
      cy.get('#optin').check();
      cy.get('#first_name').type('Test');
      cy.get('#last_name').type('User');
      cy.get('#company').type('ToolBox Corp');
      cy.get('#address1').type('Calle Falsa 123');
      cy.get('#country').select('Canada');
      cy.get('#state').type('Montevideo');
      cy.get('#city').type('Montevideo');
      cy.get('#zipcode').type('25410');
      cy.get('#mobile_number').type('1234567890');
      cy.get('button[data-qa="create-account"]').click();
      // Validar registro exitoso
      cy.contains('Account Created!').should('be.visible');
      cy.contains('Continue').click();
      cy.contains('Logged in as').should('be.visible');
    });
  });