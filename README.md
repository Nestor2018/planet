# Proyecto Planet

Este es un proyecto de aplicación móvil desarrollado con React Native y Expo. La
aplicación proporciona información detallada sobre planetas.

## Características

- Navegación entre pantallas utilizando React Navigation.
- Almacenamiento asíncrono con `@react-native-async-storage`.
- Soporte para iconos vectoriales con `react-native-vector-icons`.

## Requisitos

- Node.js
- Expo CLI

## Instalación

1. Clona este repositorio en tu máquina local.
2. Navega al directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.

## Scripts Disponibles

- `npm start`: Inicia el servidor de desarrollo de Expo.
- `npm run android`: Inicia la aplicación en un emulador de Android.
- `npm run ios`: Inicia la aplicación en un emulador de iOS.
- `npm run web`: Inicia la aplicación en un navegador web.
- `npm test`: Ejecuta las pruebas utilizando Jest.

## Tecnologías Utilizadas

- **React Native**: Framework para construir aplicaciones móviles nativas.
- **Expo**: Plataforma para aplicaciones universales de React.
- **React Navigation**: Librería para la navegación en aplicaciones de React Native.
- **Jest**: Framework de pruebas para JavaScript.

## Estructura del Proyecto

- `App.tsx`: Punto de entrada de la aplicación.
- `index.ts`: Archivo principal para la ejecución.
- `assets/`: Contiene los recursos gráficos de la aplicación.
- `jest.config.js`: Configuración para las pruebas con Jest.
- `tsconfig.json`: Configuración de TypeScript.

## Nota sobre el rendimiento de la API

Retraso en la consulta de un solo planeta

Durante el desarrollo de la funcionalidad para consultar los detalles de un planeta
individual, se ha observado un retraso significativo en la respuesta de la API.
Este comportamiento es inconsistente: en pruebas realizadas con herramientas como
Postman, la solicitud funciona correctamente y responde rápidamente, pero dentro
de la aplicación, en algunos casos, la carga se prolonga indefinidamente, obligando
al usuario a retroceder y volver a ingresar a la pantalla del planeta para intentar
de nuevo.

No se ha identificado la causa exacta de este problema. Se sospecha que podría estar
relacionado con el rendimiento o la estabilidad del servidor de la API, ya que el
código de la aplicación realiza la petición correctamente y otras funcionalidades
no presentan este inconveniente. Este comportamiento no afecta el resto de las funcionalidades,
las cuales cumplen con los requisitos solicitados.

### Alternativa considerada

Para evitar este retraso, se evaluó la posibilidad de reutilizar la información
ya obtenida en el listado inicial de planetas (GET /bodies), que incluye datos básicos
de cada planeta. En lugar de realizar una petición adicional (GET /bodies/{id}) al
seleccionar un planeta, se podría pasar la información existente del JSON del listado
directamente a la pantalla de detalles. Esta solución eliminaría la necesidad de
una nueva solicitud a la API, garantizando una carga instantánea y sin retrasos.
Sin embargo, se optó por mantener la petición individual porque es el enfoque más
recomendado:

- Permite obtener datos más detallados y actualizados del planeta.
- Sigue las buenas prácticas de diseño de APIs RESTful, donde cada recurso tiene
  su propia solicitud.
- Evita depender únicamente de los datos del listado, que podrían estar incompletos
  o desactualizados en el futuro.

Si el retraso persiste o se convierte en un problema crítico para la experiencia
del usuario, esta alternativa podría implementarse como mejora.
