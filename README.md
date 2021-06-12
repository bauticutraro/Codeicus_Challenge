# Codeicus Challenge

## Ejecutarlo

yarn
yarn start

## Analisis previo

Se implementara react (creado con vite) para resolver los ejercicios. Cada ejercicio tendra su propia rama.

En cuanto a los stilos se usara el paquete styled components. No se usara ninguna libreria para complementar los estilos.

En cuanto al formulario se utilizara la libreria react hook form para validacion de datos.

El ejercicio 3 sera resuelto en este documento README.md.

Se estima que la duracion del challenge será de 1:30hs iniciando el desarrollo del mismo a las 15:30.

## Segundo ejercicio aclaraciones

Se utilizo react hook form debido a que provee herramientas que ayudan a la validacion. En la funcion onSubmit (en el archivo Home.jsx) se valida si hay productos añadidos y si algun supera al stock que hay.

## Tercer Ejercicio

A) Opción B

B) La funcionalidad es de un login, a continuacion voy parte por parte.
La funcion getSessionToken apunta a un endpoint para obtener un token. En caso de que devuelva un token la funcion retorna el mismo y si no retorna el token recibido.
La funcion postData ejecuta la funcion anterior en caso de que no haya un token ya guardado. Luego apunta a un endpoint, que es recibido mediante el parametro url, ya pasandole el token guardado y un body, que contiene lo que se le pasa mediante el parametro payload. En caso de haber un error te lo devuelve y sino retorna lo que obtiene de la api.
Luego se ejecuta mediante js un click en un boton. Al hacer click en el boton el formulario se deshabilita (ya que esta en loading) y se ejecuta la funcion postData a la cual se le pega al endpoint del login pasandole el usuario y la contraseña. Si la promesa se ejecuta bien vuelve a habilitar el formulario y lo manda al dashboard ya estando logueado. En caso contrario vuelve a habilitar el formulario mostrando el error obtenido y sumando un intento mas. Y si supera el limite de intentos manda un captcha. Esto ultimo se hace para evitar ataques de seguirdad.

C) Lo que se utiliza es async await y promesas.

D) En la funcion postData, luego del fetch se deberia usar el .then para poder obtener correctamente la respuesta de la promesa y para poder manejar bien los errores.

E) Al codigo lo que le cambiaria es que utilizaria try catch en lugar de las promesas. Ademas tambien tendira una funcion que se llame api a la cual se le pueda pasar el metodo, el body y el token (opcionalmente), asi podria utilizar esta funcion cada vez que querramos hacer un request pasandolo solamente pocos parametros y quedaria mas ordenado.
