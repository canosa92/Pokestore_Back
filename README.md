# PokéStore - Backend

## Descripción

**PokéStore** es un proyecto de tienda en línea donde los usuarios pueden comprar y vender Pokémon. Este repositorio contiene el backend de la aplicación, que maneja la lógica del servidor, la base de datos, y las API necesarias para interactuar con el frontend.

## Características

- **Autenticación**: Registro e inicio de sesión de usuarios.
- **Gestión de Pokémon**: Los usuarios pueden ver los Pokémon para su compra, dejar comentarios, además pueden obtener los Pokémon por distintos filtros.
- **Gestión de usuarios**: Actualización de perfiles, gestión de lista de deseos y comentarios realizados.
- **API REST**: Endpoints para todas las operaciones CRUD necesarias para la funcionalidad de la tienda.

## Tecnologías Utilizadas

- **Lenguaje**: JavaScript
- **Framework**: Node.js con Express.js
- **Base de Datos**: MongoDB con Mongoose, Firestore de Firebase
- **Autenticación**: Auth de Firebase

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Firebase](https://firebase.google.com/)

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. Clona este repositorio:

   ```bash
   git clone https://github.com/canosa92/Pokestore_Back.git
   cd Pokestore_Back
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```
 3. Configura las variables de entorno:

   Crea un archivo `.env` en la raíz del proyecto con la siguiente estructura:

   ```bash
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Inicia el servidor:

   ```bash
   npm start
   ```

## Estructura de archivos

El backend de la aplicacion 'Pokestore' posee la siguiente estructura de archivos:

```
├── src
│   ├── config
│   │   ├── db.js
│   │   └── firebase.js 
│   ├── controllers
│   │   ├── orderController.js 
│   │   ├── productController.js
│   │   └── userController.js
│   ├── middlewares 
│   │   └── authentication.js
│   ├── models
│   │   ├── OrderModel.js 
│   │   ├── ProductModel.js 
│   │   └── UserModel.js
│   ├── routes
│   │   ├── orderRoutes.js
│   │   ├── productRoutes.js
│   │   └── userRoutes.js 
│   ├── test 
│   │   ├── orderController.test.js
│   │   ├── productController.test.js
│   │   └── userController.test.js 
│   └── utils 
│       ├── axiosItems.js
│       └── axiosPoke.js
├── .env
├── .gitignore   
├── package.json
└── serve.js

```

### Características de los archivos

- `config/db.js`: Establece la conexión a la base de datos MongoDB utilizando Mongoose. Usa `dotenv` para las variables de entorno.
- `config/firebase.js`: Contiene la configuración de Firebase e inicia la conexión.
- `controllers/productController.js`: Contiene la lógica para manejar las solicitudes CRUD de los productos.
- `controllers/userController.js`: Maneja el registro, inicio de sesión, cierre de sesión y actualización de información de usuarios utilizando Firebase Authentication.
- `middlewares/authentication.js`: Middleware para comprobar la autenticación del usuario utilizando Firebase Authentication.
- `models/ProductModel.js`: Definición del esquema de productos utilizando Mongoose.
- `models/UserModel.js`: Definición del esquema de usuario utilizando Mongoose.
- `routes/productRoutes.js`: Definición de las rutas relacionadas con los productos.
- `routes/userRoutes.js`: Definición de las rutas relacionadas con los usuarios.
- `test/productController.test.js`: Pruebas del funcionamiento relacionadas con los productos.
- `test/userController.test.js`: Pruebas del funcionamiento relacionadas con los usuarios.
- `utils/axiosPoke.js`: Funciones para las peticiones de Pokémon a la PokeAPI.
- `.env`: Contiene las variables de entorno (URI de la base de datos, puerto, credenciales de Firebase).
- `.gitignore`: Lista de archivos y directorios ignorados por Git.
- `package.json`: Dependencias del proyecto y scripts de inicio.
- `index.js`: Archivo principal que inicia el servidor Express.

## Funciones del controlador de productos

- `getAll`: Devuelve todos los productos.
- `getById`: Devuelve un producto por su ID.
- `getProductsByName`: Devuelve un producto por su nombre.
- `edit`: Edita el producto.
- `update`: Procesa la actualización de un producto.
- `delete`: Elimina un producto.
- `insertComment`: Añade un comentario.
- `create`: Crea un producto nuevo.

## Funciones del controlador de usuarios

- `register`: Procesa el registro del usuario.
- `login`: Procesa el inicio de sesión del usuario.
- `logout`: Cierra la sesión del usuario.
- `getInfo`: Procesa la actualización de la información del usuario.

## Endpoints de la App

### Cliente no registrado

- `GET /products`: Devuelve todos los productos.
- `GET /products/:id`: Devuelve un producto por su ID.
- `GET /products/nombre/:nombre`: Devuelve un producto por su nombre.

### Cliente registrado

Incluye todos los endpoints del cliente no registrado, más:

- `POST /orders`: Crea una orden de compra.
- `PUT /orders/id/:_id`: Modifica el estado del pedido.
- `POST /products/:id/comentario`: Inserta un comentario en el producto.
- `POST /products/:id/like`: Añade un "me gusta" a un producto.

### Administradores

Incluye todos los endpoints anteriores, más:

- `PUT /products/:id/editar`: Edita un producto.
- `POST /products/crear`: Crea un nuevo producto.
- `DELETE /products/:id`: Elimina un producto.
- `DELETE /users/:id`: Elimina un usuario.
## Contribuir

Si deseas contribuir al proyecto, por favor:

1. Haz un fork del repositorio
2. Crea una nueva rama (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Haz push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Soporte

Si tienes alguna pregunta o problema, por favor abre un issue en el repositorio de GitHub.

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.