# backen-ecommerce

**Proyecto educativo**: Este repositorio contiene el backend de una aplicación de comercio electrónico, desarrollado con Node.js y Express. Está diseñado con fines educativos para comprender la estructura y funcionamiento de una API RESTful en un entorno de comercio electrónico.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu entorno de desarrollo:

* [Node.js](https://nodejs.org/) (versión 14 o superior)
* [npm](https://www.npmjs.com/) (gestor de paquetes de Node.js)
* [MongoDB](https://www.mongodb.com/) (base de datos NoSQL)

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/Polsix/ecommerce-sixto.git
   cd ecommerce-sixto
   ```

2. **Instala las dependencias:**

   ```bash
   npm install
   ```

3. **Configura las variables de entorno:**

   * Se ha creado un archivo `.env` en la raíz del proyecto.
   * Tomando como plantilla `.envexample` proporcionado en el repositorio.
   * Los valores de las variables según tu configuración local:

     ```env
     PORT=5000
     MONGO_URI=mongodb+srv://polsix2013:<db_password>@proybackend.myf0icm.mongodb.net/
     JWT_SECRET=c5e94b0e6ac2d1ac1908a1223c35fef60d1556a256c1dfac867f9525b02387eb8f17b8828067ae62aa0850f35189e894bf5eb89b6814f9b993158e798f43d20b

     ```

4. **Inicia el servidor:**

   ```bash
   npm start
   ```

   El servidor debería estar corriendo en `http://localhost:3000`.
   El inicio del servidor esta sujeto a verificación del código

## Estructura del proyecto

El proyecto está organizado de la siguiente manera:

```
ecommerce-sixto/
├── src/
│   ├── adapters/
        ├── controllers/
            ├── ProductController.js
        ├── middlewares/
            ├── authJwt.js
        ├── routes/
            ├── authRoutes.js
            ├── productRouts.js
            ├── userRouts.js
│   ├── application/
        ├── dtos/
            ├── ProductDTO.js
        ├── useCases/
            ├── CreateCart.js
            ├── CreateOrder.js
            ├── CreateProduct.js
            ├── SignIn.js
│   ├── config/
        ├── index.js
│   ├── domain/
        ├── entities/
            ├── Cart.js
            ├── Order.js
            ├── Product.js
            ├── User.js
        ├── repositories/
            ├── CartRepository.js
            ├── OrderRepository.js
            ├── ProductRepository.js
            ├── UserRepository.js
    ├── infraestructure/
        ├── database/
            ├── models/
                ├── ProductModel.js
            ├── mongoose.js
            ├── mysqlConnection.js
        ├── docs/
            ├── swaggerConfig.js
        ├── repositories/
            ├── MongoProductRepository.js
            ├── MySQLProductRepository.js
│   └── index.js
├── .env
├── .envexample
├── .eslintrc.json
├── .gitignore
├── package.json
└── package-lock.json
```

* `adapters/`: Contiene la lógica de negocio para manejar las solicitudes y respuestas.
* `models/`: Define los esquemas de Mongoose para las entidades de la base de datos.
* `routes/`: Define las rutas de la API y las asocia con los controladores correspondientes.
* `middlewares/`: Contiene funciones intermedias para el manejo de errores, autenticación, etc.
* `index.js`: Punto de entrada de la aplicación.

## Tecnologías utilizadas

* **Node.js**: Entorno de ejecución para JavaScript en el servidor.
* **Express**: Framework web para Node.js.
* **MongoDB**: Base de datos NoSQL para almacenar la información de la aplicación.
* **Mongoose**: ODM (Object Data Modeling) para MongoDB y Node.js.
* **JWT (JSON Web Tokens)**: Para la autenticación y autorización de usuarios.
* **dotenv**: Para manejar variables de entorno.

## Contribuciones

Este proyecto es de código abierto y está abierto a contribuciones. Si deseas colaborar:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commits descriptivos.
4. Envía un pull request detallando los cambios realizados.

## Licencia

Este proyecto es de tipo educativo 
