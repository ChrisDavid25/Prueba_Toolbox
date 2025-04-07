# Prueba_Toolbox
Pruebas Qa
# Guía para configurar y ejecutar tests con Cypress
-------

## Paso 1: Clonar el repositorio
* Abrir la terminal. (Deseable abrir la terminal desde Visual Studio Code)
* Accede al directorio donde se desea clonar el repositorio.
* Ejecutar el siguiente comando para clonar el repositorio desde GitHub:
   `git clone https://github.com/ChrisDavid25/Prueba_Toolbox.git`
* Ingresar al repositorio clonado `cd Prueba_Toolbox` .

## Paso 2: Instalar dependencias
* Validar que se tenga instalado Node.js con los siguientes comando `node -v`
`npm -v` los cuales indicaran las versiones que se tienen de las liberias Node.js.
* Si no estan descargadas, ingresar a la pagina oficial de Node.js descargar la ultima version y en la terminal indicar `npm install` .

## Paso 3: Configuración Cypress
* Validar que el archivo `cypress.config.js` esté presente en el directorio raíz del proyecto. Este archivo es muy importante ya que contiene las configuraciones necesarias para Cypress.
* Abrir Cypress desde la terminal (Deseable abrir la terminal desde Visual Studio Code) `npx cypress` open esto abrira la interfaz grafica de Cyprees
* Si no se tiene instalado Cypress desde la terminal ingresar comando npm install `cypress --save-dev` .

## Paso 4: Ejecutar test 
* Para ejecutar las pruebas desde la terminal ingresar el codigo `npx cypress run`
* Para ejecutar las pruebas desde la web desde la terminal ingresar el codigo `npx cypres open`
* En la interfaz de cypress selecciónar pruebas e2e
* Ingresar a Specs y seleccionar la carpeta Pruebas Toolbox
* Ejecutar las pruebas necesarias:
   - Se encuentra la carpeta Api = Pruebas Get y Post
   - Se encuentra la carpeta e2e = Login y Registro de usuario
* Verificar los resultados arrojados por la prueba.

## Descripción de los test 
# 1. Teste UI : 
# Login:
Objetivo: Validar que el sistema permita a un usuario autenticarse correctamente con credenciales válidas.
Flujo validado:
* Acceso a la página de inicio de sesión.
* Validación de correo electrónico y contraseña válidos.
* Verificación de la solicitud POST /login para asegurarse de que el código de respuesta sea `200` (éxito).
* Validación de la redirección hacia la página de cuenta de usuario `(/account)`.
* Confirmación de que el mensaje "Logged in as" se muestre correctamente, indicando que el usuario ha iniciado sesión satisfactoriamente.
# Registro
Objetivo: Validar el registro de un nuevo usuario en la interfaz
* Completar los campos como nombre, correo único, contraseña, fecha de nacimiento y contacto.
* Verificar que el registro se procese correctamente.
* Validar que el fomulario se envie correctamente
* Confirma que el mensaje `"Account Created!"` se muestre, indicando que el registro fue exitoso.
* Validar que el usuario sea redirigido a la página donde aparece el mensaje `"Logged in as"` para confirmar el inicio de sesión después del registro.
# 2. Test API:
# GET:
Objetivo: Validar que el endpoint de la API https://echo-serv.tbxnet.com/v1/qa/test1 responda correctamente y cumpla con los requisitos de estado, encabezados y contenido.
* Se realiza una solicitud `HTTP GET `al endpoint indicado.
* Verificar que el código de estado de la respuesta sea `200`, indicando éxito.
* Confirmar que el encabezado content-type indica que la respuesta está en formato JSON (`application/json; charset
* Comprobar que el campo ok esté presente y sea true.
* Validar la presencia del campo date para confirmar que el servidor devuelve un valor de fecha.
# POST:
Objetivo: Validar que el endpoint de la API https://echo-serv.tbxnet.com/v1/test procese correctamente una solicitud POST y devuelva la respuesta esperada.
* Compruebar que el código de estado HTTP sea `200`, lo cual indica que la solicitud fue exitosa.
* Realizar una solicitud HTTP POST al endpoint proporcionado.
* Validación del cuerpo de la respuesta, Verificar que la respuesta contenga: Campo `date` indicando la fecha de la solicitud,campo protocol confirmando el uso de `https`, campo `method` asegurando que se utilizó el método `POST`, Campo originalUrl corroborando la URL del endpoint (/v1/test).
* Encabezados correctos `(content-type, server, cf-cache-status)`.

   
