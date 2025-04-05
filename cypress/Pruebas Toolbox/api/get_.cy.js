describe('Prueba de API GET en Echo Server', () => {
  it('Debería realizar una solicitud GET y validar la respuesta de Echo Server', () => {
    // URL de la API de Echo Server
    const url = 'https://echo-serv.tbxnet.com/v1/qa/test1';

    // Realizamos la solicitud GET
    cy.request({
      method: 'GET',
      url: url,
      headers: {
        accept: 'application/json', // Encabezado requerido por la API
      }
    }).then((response) => {
      // Validamos el código de estado de la respuesta
      expect(response.status).to.eq(200);

      // Validamos el cuerpo de la respuesta
      expect(response.body).to.have.property('ok', true); // Verifica que 'ok' sea true
      expect(response.body).to.have.property('date'); // Verifica que incluya el campo 'date'

      // Validamos algunos encabezados clave de la respuesta
      expect(response.headers).to.have.property('content-type', 'application/json; charset=utf-8');
      expect(response.headers).to.have.property('server', 'cloudflare');
      expect(response.headers).to.have.property('cf-cache-status', 'DYNAMIC');
    });
  });
});
