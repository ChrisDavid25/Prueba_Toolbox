# Prueba_Toolbox
Pruebas Qa
# Guía para configurar y ejecutar tests con Cypress
-------

## Paso 1: Clonar el repositorio
1. Abrir la terminal. (Deseable abrir la terminal desde Visual Studio Code)
2. Accede al directorio donde se desea clonar el repositorio.
3. Ejecutar el siguiente comando para clonar el repositorio desde GitHub:
   git clone https://github.com/ChrisDavid25/Prueba_Toolbox.git
4. Ingresar al repositorio clonado cd Prueba_Toolbox .

## Paso 2: Instalar dependencias
1. Validar que se tenga instalado Node.js con los siguientes comando node -v
npm -v los cuales indicaran las versiones que se tienen de las liberias Node.js.
2. Si no estan descargadas, ingresar a la pagina oficial de Node.js descargar la ultima version y en la terminal indicar npm install .

## Paso 3: Configuración Cypress
1. Validar que el archivo cypress.config.js esté presente en el directorio raíz del proyecto. Este archivo es muy importante ya que contiene las configuraciones necesarias para Cypress.
2. Abrir Cypress desde la terminal (Deseable abrir la terminal desde Visual Studio Code) npx cypress open esto abrira la interfaz grafica de Cyprees
3. Si no se tiene instalado Cypress desde la terminal ingresar comando npm install cypress --save-dev .

## Paso 4: Ejecutar test 
1. Para ejecutar las pruebas desde la terminal ingresar el codigo npx cypress run
2. Para ejecutar las pruebas desde la web desde la terminal ingresar el codigo npx cypres open
3. En la interfaz de cypress selecciónar pruebas e2e
4. Ingresar a Specs y seleccionar la carpeta Pruebas Toolbox
5. Ejecutar las pruebas necesarias:
   5.1 Se encuentra la carpeta Api = Pruebas Get y Post
   5.2 Se encuentra la carpeta e2e = Login y Registro de usuario
6. Verificar los resultados arrojados por la prueba. 

   
