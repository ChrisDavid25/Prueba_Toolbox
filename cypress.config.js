const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Variables de entorno para las URLs y pruebas
    env: {
      apiUrlGET: "https://echo-serv.tbxnet.com/v1/qa/test1", // URL para pruebas GET
      apiUrlPOST: "https://echo-serv.tbxnet.com/v1/test", // URL para pruebas POST
      uiUrl: "https://automationexercise.com/", // URL base para interfaz gráfica
    },
    
    // Patrón de archivos de prueba
    specPattern: "cypress/**/*.cy.{js,jsx,ts,tsx}",
    
    // Configuración del viewport
    viewportWidth: 1280,
    viewportHeight: 720,
    
    // Habilitar grabación de video y capturas de pantalla
    video: true,
    screenshotOnRunFailure: true,
    
    // Tiempos de espera configurados para comandos y ejecución
    defaultCommandTimeout: 5000, // 5 segundos
    execTimeout: 60000, // 1 minuto
    
    setupNodeEvents(on, config) {
      // Aquí puedes agregar listeners para eventos personalizados si es necesario
      // Ejemplo: Registrar plugins o manejar acciones específicas

      // Retornar la configuración
      return config;
    },
  },
});