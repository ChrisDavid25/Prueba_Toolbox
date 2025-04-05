describe('Prueba de API POST en Echo Server', () => {
  it('Debería realizar una solicitud POST y validar la respuesta', () => {
    // URL de la API de Echo Server
    const url = 'https://echo-serv.tbxnet.com/v1/test';

    // Realizamos la solicitud POST
    cy.request({
      method: 'POST',
      url: url,
      headers: {
        accept: 'application/json' // Encabezado requerido por la API
      }
    }).then((response) => {
      // Validamos el código de estado de la respuesta
      expect(response.status).to.eq(200);

      // Validamos el cuerpo de la respuesta
      expect(response.body).to.have.property('date'); // Verifica que incluya el campo 'date'
      expect(response.body).to.have.property('protocol', 'https'); // Verifica el protocolo
      expect(response.body).to.have.property('method', 'POST'); // Verifica el método
      expect(response.body).to.have.property('originalUrl', '/v1/test'); // Verifica la URL original

      // Validamos algunos encabezados específicos en la respuesta
      expect(response.headers).to.have.property('content-type', 'application/json; charset=utf-8');
      expect(response.headers).to.have.property('server', 'cloudflare');
      expect(response.headers).to.have.property('cf-cache-status', 'DYNAMIC');
    });
  });
});


