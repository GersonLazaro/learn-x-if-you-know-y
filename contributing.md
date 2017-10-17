Todas las contribuciones son bienvenidas. Desde una pequeña corrección de una letra, hasta añadir un lenguaje entero. Sin embargo, para hacer mas facil el proceso de colaboración, y para que todos podamos entendernos, es mejor seguir unas sencillas reglas:

#### Si quieres hacer correcciones

¿Hemos cometido algún error en un código expuesto en el sitio? Puedes informarnos inmediatamente abriendo un issue explicativo en español o ingles, o solucionarlo tu mismo y enviarnos un Pull Request.

#### Si quieres agregar un código de ejemplo

Revisas Java sabiendo C++ y ves un ejemplo que luego no aparece si revisas C++ sabiendo Javascript. Esto significa que ese ejemplo no está en Javascript. Si esto te ocurre (con Javascript o con cualquier lenguaje), puedes programar ese ejemplo y enviar un Pull Request. Para esto sigue los siguientes pasos:

1. Revisa en config.json la sección instructions, y en ella ubica el nombre del ejemplo que quieres agregar (Por ejemplo, "Hola Mundo").
2. Verifica cual es su filename (En este caso seria "hello-world")
3. En la carpeta langs, busca el lenguaje en el cual vas a programar el ejemplo, y crea un archivo con ese filename (sin extensión). En ese archivo debes colocar el código del ejemplo con el cual vas a colaborar.
4. OPCIONAL - Si aún no lo has hecho, agrega tu nombre en la sección de colaboradores en about.html.
5. Envia un Pull Request. En el título agrega [LENGUAJE/CODIGO] (Por ejemplo [Javascript/Hola Mundo]). Si vas a añadir varios códigos, puedes separarlos por comas, si vas a añadir varios lenguajes puedes colocar varios corchetes diferentes, uno con los códigos enviados a cada lenguaje. Preferiblemente, envia pocos códigos en cada Pull Request.

#### Si quieres agregar un nuevo lenguaje

Para agregar nuevos lenguajes, necesitamos que los ejemplos ya existentes sean "traducidos" a ese lenguaje. Por lo tanto, si quieres agregar un lenguaje nuevo, añade su carpeta en langs y sigue las instrucciones del punto anterior. El nombre de la carpeta debe iniciar en mayúscula. En el momento de enviar el Pull Request, aclara en el titulo que es un nuevo lenguaje.

#### Si tienes otras ideas para este sitio

Simplemente escribelas en los issues, todas las ideas son bienvenidas.

#### Si quieres agregar un ejemplo de código NO existente

Si crees que hay un ejemplo de código que sería interesante que estuviera disponible en las comparaciones, primero indicalo en un issue. Si consideramos que sería positivo incluirlo, lo responderemos y pasaremos a los pasos indicados previamente.

## Reglas generales

- Se respetuoso
- Ante cualquier duda, pregunta en un issue
- No compliques el código, hazlo simple
- Son validos (y recomendados) los comentarios en el código, siempre y cuando no sean exageraciones. 
- Cuando pases un código de un lenguaje a otro, en la medida de lo posible, trata de mantener similitudes (comentarios en los mismos sitios, mismos nombres de variables, etc.) Recuerda que en el sitio se mostrará como una comparación, y las comparaciones son mas efectivas si las semejanzas se notan.