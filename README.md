# Programacion-V-Cronometro

Instrucciones:

Desarrolla una aplicación web funcional que actúe como un cronómetro. El usuario debe poder iniciar el conteo de tiempo, pausarlo y registrar vueltas (laps). Las vueltas deben listarse con su tiempo correspondiente. El diseño debe ser limpio, intuitivo y responsivo. Te puedes basar en la aplicación de cronómetro de aplicativo móvil.



HTML
Debe contener al menos:

Un título principal de la aplicación.

Un área para mostrar el tiempo transcurrido (por ejemplo, en formato mm:ss:ms).

Botones claramente etiquetados para:

Iniciar (Start)

Vuelta (Lap)

Detener (Stop / Reset)

Un contenedor para listar las vueltas realizadas .

CSS 
Debe incluir al menos:

Estilo visual claro para el display del tiempo (fuente grande, centrado, destacado).

Diseño adecuado para los botones (colores diferenciados, hover).

Lista de vueltas con estilos legibles y formato consistente.

Alineación visual básica con flexbox o grid.

Responsividad simple (ej. centrar elementos, adaptar a pantallas pequeñas).

JavaScript
Debe incluir como mínimo:

Funcionalidad para iniciar y actualizar el tiempo cada centésima o décima de segundo (setInterval).

Mostrar el tiempo en formato legible: minutos:segundos:milisegundos.

Botón "Vuelta" que:

Capture el tiempo actual.

Agregue ese tiempo a la lista de vueltas sin detener el cronómetro.

Botón "Detener" que:

Pausa el cronómetro.

Limpia la lista de vueltas (opcional).

Control de estados:

No permitir presionar "Vuelta" si el cronómetro no está corriendo.

Cambio de texto o estilo del botón Start → Stop si se desea.

