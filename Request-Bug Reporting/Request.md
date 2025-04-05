# Informe de Error: Solicitud cURL a la API REST

## Descripción
Error detectado al realizar un llamado a la API REST utilizando cURL. el cual se relaciona está relacionado con el uso incorrecto de comillas en el cuerpo de la solicitud.
Se identifico tambien comillas multiples en el campo `details`
## Solicitud corregida 
`curl -L -X POST 'https://echo-serv.tbxnet.com/v1/test' \
-H 'accept: application/json' \
-H 'Content-Type: application/json' \
--data-raw '{
    "contact1": "David \"Dave\" Letterman",
    "price": "30.00",
    "details": "Greatest \'Hits\' Album"
}'`
