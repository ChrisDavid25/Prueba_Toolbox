# Prueba_Toolbox
Pruebas Qa
# Resultado de las pruebas 
-------
# Pruebas UI
## Funcionalidad Login
## Descripción
El error se detectó al probar la funcionalidad de inicio de sesión en el sitio web (https://automationexercise.com/login). Al intentar iniciar sesión con las credenciales proporcionadas, el sistema devolvió un mensaje de error.
## Detalles del Error
- **Mensaje de Error en la Página:**  
  Your email or password is incorrect!
 **Credenciales Utilizadas:**  
  - Correo electrónico: christian@example.com
  - Contraseña: (Password123)

## Detalles Técnicos del Test
El test automatizado utilizó **Cypress** para verificar la funcionalidad de inicio de sesión. Algunos puntos clave incluyen:
- **URL probada:** https://automationexercise.com/login
- **Respuesta esperada:** Redirección a una página con `/account` en la URL.
- **Respuesta obtenida:** La prueba falló porque la URL no incluyó `/account`.
- **Estado HTTP esperado:** `200`
- **Estado HTTP obtenido:** `200` (correcto)

### Fragmento del Código Usado
javascript
it('should log in with valid credentials', () => {
  cy.visit('https://automationexercise.com/login');
  // Código adicional omitido por brevedad...
  cy.get('.login-button').click();
  cy.url().should('include', '/account'); // Falló aquí
});


