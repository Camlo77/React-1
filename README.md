# Zelda Store

Tienda tematica del conocido clasico The Legend of Zelda.

## Screenshot

![Zelda Store Screenshot](./src/assets/screenshot.png)

## Descripcion

Zelda Store es una aplicacion de e-commerce ficticia de tipo SPA (Single Page Application), donde se muestran distintos productos de la saga Zelda mediante cards con imagen, nombre, caracteristicas y precio. Incluye navegacion entre paginas con React Router, catalogo de productos, carrito de compras con estado global mediante Context API y pie de pagina.

## Tecnologias utilizadas

- React
- Vite
- React Router 6
- Context API
- Bootstrap 5
- CSS3
- JavaScript (ES6+)

## Rutas

| Ruta | Pagina |
|---|---|
| `/` | Home (catalogo de productos) |
| `/register` | Registro |
| `/login` | Inicio de sesion |
| `/cart` | Carrito de compras |
| `/pizza/p001` | Detalle de un producto |
| `/profile` | Perfil de usuario |
| `/404` y cualquier otra | Pagina NotFound |

## Estructura del proyecto

```
src/
├── components/   # Navbar, Footer, CardZelda, datos del carrito
├── context/      # CartContext (estado global del carrito), UserContext (token simulado y logout)
├── pages/        # Home, Register, Login, Cart, Pizza, Profile, NotFound
├── App.jsx       # Definicion de rutas y rutas protegidas
└── main.jsx      # BrowserRouter, UserProvider y punto de entrada
```

## Funcionalidades

- Boton "Añadir" en cada card para agregar productos al carrito desde Home
- Boton "Pagar" del carrito deshabilitado cuando el token es false
- Boton "Ver mas" en cada card que lleva al detalle del producto con su id en la URL
- Carrito de compras con estado global: aumentar y disminuir cantidades, y eliminar el producto al llegar a 0
- Catalogo de productos cargado desde una API local mediante `fetch`, con componente reutilizable `CardZelda`
- Footer con informacion de derechos reservados
- Formateo de precios con separador de miles (en clp)
- Navegacion sin recargar la pagina usando `Link` de React Router
- Navbar responsive con enlaces a Home, Login, Register, Profile y boton de Total que lleva al carrito
- Pagina de detalle que obtiene el id con `useParams` y consulta la API para mostrar la informacion del producto
- Pagina NotFound con enlace de regreso al inicio
- Pagina de perfil con email y boton de cerrar sesion (estaticos por ahora)
- Ruta protegida `/profile` y redireccion al Home desde `/login` y `/register` cuando hay token
- Total de la compra calculado y sincronizado entre el Navbar y la pagina Cart
- Token de sesion simulado en `UserContext` (por defecto en true) con metodo `logout` que lo cambia a false