# poke-drip
Proyecto personal hecho con react y deployed con netlify.
La idea de la pagina es ser un sitio web dedicado a pokemon, con una seccion de noticias y una pokedex simple.
El front'end esta completamente hecho en react, usando functional components y hooks, para manejar datos y estados he utilizado Redux, y axios para los post y fetch.
Todos los datos usados provienen de la api de pokeapi.co, originalmente pensaba manejar el fetch directamente pero los tiempos de carga eran muy largos asi que los maneje  aparte en un servidor y los recibia ya ordenados correctamente en redux.
El servidor esta en el repositorio poke-drip-server.
