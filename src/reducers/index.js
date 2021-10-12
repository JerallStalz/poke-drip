import {
  MENU_SIDER_HANDLER,
  GET_POKEMONS,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_ERROR,
  CLEAN_POKEMONS,
  SELECT_REGION,
  GET_REGION,
  GET_REGION_SUCCESS,
  GET_REGION_ERROR,
  SEARCH_POKEMON,
  SEARCH_POKEMON_ERROR,
  SEARCH_POKEMON_SUCCESS,
  FOCUS_NEW,
} from "../types";

const initialState = {
  posts: [],
  notice: [
    {
      id: 1,
      desc: "<h1>Estos son todos los juegos de Pokémon que están actualmente en desarrollo</h1> <img src='https://www.nintenderos.com/wp-content/uploads/2021/01/detective-pikachu-pokemon-espada-escudo.jpg '/> <span>Como todos sabéis, <b>Pokémon</b> es una de las mayores franquicias mediáticas del planeta, y solo una parte de sus ingresos procede de sus juegos. Los juegos de Pokémon son la piedra angular de todos los demás aspectos de la franquicia.</span> <span>Pues bien, hoy os hablaremos precisamente de los diferentes juegos de Pokémon que están actualmente en desarrollo, algunos de los cuales se lanzarán este mismo año y son los siguientes:</span> <ul> <li>Pokémon Unite (versión Android/iOS): Es un videojuego gratuito, del tipo multijugador de arena de batalla en línea, desarrollado por TiMi Estudios y publicado por The Pokémon Company para Android, iOS, y la Nintendo Switch. Se anunció en un Pokémon Presents el 24 de junio de 2020. La versión de la consola híbrida ya está disponible, pero la versión para móviles se lanzará en septiembre de este año.</li> <img src='https://albumizr.com/ia/d84cb433bd4388b9dd1ed81ff9f786cd.jpg '/> <li><b>Secuela de Detective Pikachu</b>: El juego original de Detective Pikachu se lanzó para la Nintendo 3DS en Japón en 2016, con un lanzamiento internacional posterior en 2018. La película de Detective Pikachu inspiró un nuevo interés en el concepto, y se anunció una secuela de Detective Pikachu para Nintendo Switch en 2019. The Pokémon Company no ha mencionado el juego desde entonces, pero se supone que sigue en desarrollo hasta que se confirme su cancelación. De momento no se sabe nada sobre una posible fecha de lanzamiento</li> <img src='https://albumizr.com/ia/3f97f1330f2a8aec422fb673a5d486cc.jpg '/> <li><b>Pokémon Sleep</b>: Pokémon Sleep se anunció durante la misma conferencia de prensa que la secuela de Detective Pikachu, y tampoco hemos vuelto a saber de él. El juego hace un seguimiento de cómo duerme el jugador con la ayuda del accesorio Pokémon GO Plus. Muchos fans han asumido que Pokémon Sleep ha sido cancelado, y ha acabado compartiendo el destino del Wii Vitality Sensor, pero se considera que sigue en desarrollo hasta que Pokémon Company confirme que el proyecto ha sido cancelado.</li> <img src='https://albumizr.com/ia/51f6fbd3b9fdeb7f7b1ae86ba2fa55cc.jpg '/> <li><b>Pokémon Diamante Brillante y Perla Reluciente</b>: Son los remakes para Nintendo Switch de los juegos de Sinnoh. Hasta ahora se han revelado muy pocas imágenes y detalles de los juegos, pero parecen ser remakes directos de Pokémon Diamante y Perla. No está claro si contarán con algún contenido o concepto de Pokémon Espada y Escudo, como el efecto Dinamax o la el Área Silvestre. Tampoco está claro si tendrán contenidos de Pokémon Platino. Se lanzará para Nintendo Switch el 19 de noviembre de 2021 en todo el mundo.</li> <img src='https://albumizr.com/ia/0755a3399fb52a94f46398786256ad5e.jpg '/> <li><b>Leyendas Pokémon: Arceus</b>: Es el próximo juego de mundo abierto ambientado en el pasado lejano de la región de Sinnoh. El juego consiste en la búsqueda de Arceus, durante una época en la que Sinnoh aún no ha sido colonizada por los humanos. Pokémon Legends: Arceus se lanzará para Nintendo Switch el 28 de enero de 2022.</li> <img src='https://albumizr.com/ia/65d334092ff027682da4a4c319f3033f.jpg '/> </ul>",
      title: "Juegos de Pokémon que están actualmente en desarrollo",
      category: "Noticia",
      imgUrl: "https://i.imgur.com/p2d8n0c.jpg",
    },
    {
      id: 2,
      desc: "<h1>Pokémon Unite (versión Android/iOS)</h1> <img src='https://www.nintenderos.com/wp-content/uploads/2021/08/203822-pokemon-unite-moviles-amp_main_media_schema-1.jpg '/> <span>Ayer pudimos conocer novedades para hoy con un nuevo tráiler y más junto a un mensaje con la llegada del español y otra información, además de ajustes en varios personajes jugables, y ahora traemos más detalles relacionados con Pokémon Unite.</span> <span>En este caso, hemos podido conocer que ya podemos descargar el juego en iOS y Android. En los siguientes enlaces, podéis empezar a descargar el juego:</span> <ul> <li>App Store (810,5 MB) aquí</li> <li>Google Play (638 MB) aquí</li> </ul> <span>Por otro lado, ya tenemos disponible la correspondiente actualización 1.2.1 en Nintendo Switch (que es la misma con la que se lanza ya directamente en móviles). Esta incluye las siguientes novedades:</span> <ul> <li>El juego estará disponible en español mañana tras la actualización.</li> <li>El Pase de combate Gravedad 094 nos dará objetos inspirados en el espacio.</li> <li>Los Círculos Unite nos permiten crear grupos o buscar grupos para conectar con otros jugadores.</li> <li>Los que no tengan la recompensa del lanzamiento de Nintendo Switch pueden conseguir la licencia Unite de Zeraora en una misión especial que arranca el 22 de septiembre, y quienes ya hayan conseguido la licencia de Zeraora recibirán monedas Aeos en su lugar. </li> </ul>",
      title: "Pokémon Unite (versión Android/iOS)",
      category: "Noticia",
      imgUrl: "https://i.imgur.com/GYxCmPT.jpg",
    },
    {
      id: 3,
      desc: "<h1>[Rumor] Warner Bros. podría estar trabajando en una secuela de Detective Pikachu</h1> <img src='https://www.nintenderos.com/wp-content/uploads/2019/01/Detective-Pikachu-1.jpg '/> <span> <b>Pikachu</b> es uno de los personajes más famosos de <b>Nintendo</b>, y es por eso que han sacado una infinidad de productos sobre él: desde peluches, videojuegos, y obviamente películas. La de <b>Detective Pikachu</b> se estrenará este mismo año, y teniendo en cuenta todo lo emocionados que están los fans por ella, no sería de extrañar que los rumores que apuntan hacia una posible secuela sean ciertos.</span> <span> <b>The Hollywood Reporter</b> afirma poder filtrar que se está preparando ya una segunda parte. Estos son los detalles sobre los que han hablado:</span> <ul> <li>Legendary habría empezado a trabajar en la secuela</li> <li><b>Oren Uziel</b> se ocuparía del guión</li> <li>Uriel ha trabajado en la nueva película de <b>Sonic, Men in Black International, 22 Jump Street, The Cloverfield Paradox</b> y la próxima película de las Super Nenas.</li> </ul> <span>En el caso de que estos rumores fueran ciertos, Warner Bros. demostraría tener confianza absoluta en la adaptación a la gran pantalla del título de 3DS, ¿vosotros tenéis ganas de verla?</span> <div className='iframe-container' ><iframe title='YouTube video player' allowfullscreen src='https://www.youtube.com/embed/1roy4o4tqQM'/></div>",
      title: "Secuela de Detective Pikachu",
      category: "Noticia",
      imgUrl: "https://i.imgur.com/skaatiC.jpg",
    },
    {
      id: 4,
      desc: "<h1>[Impresiones] Nintendo Switch (modelo OLED)</h1> <img src='https://www.nintenderos.com/wp-content/uploads/2021/07/461.png '/> <span>Tras más de 4 años en el mercado, Nintendo Switch por fin consigue una renovación destacable que mejora algunos de sus apartados más importantes, soluciona errores de diseño iniciales que han dado algo de lata a los fans, y reajusta su calidad a lo que esperamos de un producto de 2021.</span> <span>Nintendo Switch OLED es el nuevo modelo de Nintendo Switch que llega a las tiendas el 8 de octubre de 2021, y <b>Nintendo nos ha invitado a sus oficinas para contaros qué nos ha parecido su nuevo hardware</b>.</span> <span>Lo más destacable y que más llama la atención cuando pruebas Nintendo Switch OLED es su gran pantalla. Nintendo ha querido aumentar lo máximo posible las dimensiones del panel, que pasa de ser LCD a tipo OLED, y de tener 6,2 a 7 pulgadas. No es una diferencia enorme, pero estéticamente resulta más atractiva al quedarse el cuerpo de Switch con un borde mucho más reducido.</span> <span>La tecnología OLED se ha perfeccionado durante bastantes años, y ahora estamos viendo como muchos dispositivos electrónicos se benefician de la gran calidad de imagen que aportan, entre ellos los últimos iPhone y Apple Watch. La pantalla OLED de Nintendo Switch permite una mejor representación del color, lo que se traduce en una saturación de los colores que hace que los juegos parezcan más vívidos.</span> <img src='https://www.nintenderos.com/wp-content/uploads/2021/07/aa-1250x703.jpg '/> <span>Está claro que no todo el software aprovecha esto de la misma forma: pudimos probar títulos clásicos de la consola, como Mario Kart 8 Deluxe o Zelda: Breath Of The Wild, y hemos notado que, en el primero de ellos, los colores saturados que tiene de por sí se potencian y lucen mejor que nunca. En cambio, Zelda: Breath Of The Wild y su paleta de colores más pastel, no se beneficia tanto de esta mejora de la pantalla, aunque en general, los colores se ven más brillantes y fuertes.</span> <span>El brillo de la pantalla hace que veamos menos reflejos de luces externas, y aunque no pudimos probarla al aire libre, esperamos que tenga un mejor rendimiento y menos problemas de visualización en exteriores que el modelo original de Nintendo Switch.</span> <span>El modelo OLED de Nintendo Switch ha retocado un montón de pequeños detalles que los fans habían pedido desde su lanzamiento. Los Joy-Con son exactamente los mismos que los del modelo actual, así que el drift, a priori, seguirá presente. Lo que sí ha cambiado a nivel externo es el soporte principal de la consola para el modo tabletop.</span> <span>La “patilla” trasera que escondía la ranura de tarjetas microSD era poco útil si la superficie donde apoyamos la consola no es lisa. Ahora Nintendo ha convertido toda la parte trasera de Nintendo Switch en un enorme soporte graduable y rígido que aguanta lo que le echen. Podremos poner la Nintendo Switch sobre cualquier superficie, eligiendo la inclinación y manteniéndose perfectamente estable. Esto, junto al gran tamaño de la pantalla, hace que jugar en modo tabletop sea mejor que nunca.</span> <img src='https://www.nintenderos.com/wp-content/uploads/2021/07/Nintendo-Switch-OLED-Model11.jpg '/> <span>Nintendo advirtió que los altavoces de la consola habían sido renovados, y lo que hemos visto es que son más grandes y están más separados… ¡y suenan más alto! La potencia ha aumentado y podemos escuchar mejor el sonido de los juegos, aunque tampoco hay una diferencia enorme respecto al modelo original. Una mejora más enfocada al modo portátil de Nintendo Switch.</span> <span>Estéticamente han cambiado algunos detalles, como los botones de la consola que pasan de ser redondos a ovalados, además de que las rejillas de ventilación de la parte trasera pasan a estar en la parte inferior. ¡Ahora es más eficiente!</span> <span>El Dock de Nintendo Switch es prácticamente “la mitad” de la consola: no a nivel de hardware, que ya sabemos que lo más importante está en la parte central, si no por todas las funcionalidades que aporta. El Dock de Nintendo Switch OLED ha sido renovado a nivel estético, incluyendo además un puerto LAN para conexión a internet mediante cable Ethernet.</span> <span>Esto antes era posible gracias a hubs externos que se conectaban a los puertos USB del Dock, y que permitían el uso de cables Ethernet. Con el nuevo Dock de Nintendo Switch, ya no será necesaria la adquisición de complementos externos.</span> <img src='https://www.nintenderos.com/wp-content/uploads/2021/07/Oled-1250x703.jpg '/> <span>Si bien no todo es tan bonito como parece; Nintendo ha eliminado el único puerto USB 3.0 que había en el Dock de Nintendo Switch. Directamente, se ha sustituido por la entrada LAN, así que hemos perdido la versatilidad de esa entrada.</span> <span>Por fuera, el Dock tiene una línea más elegante por primera vez en color blanco, y la tapa con bisagra trasera que sirve para orientar los cables, se ha sustituido por una tapa que podemos retirar en su totalidad de forma muy cómoda. </span> <img src='https://www.nintenderos.com/wp-content/uploads/2021/07/3333-Cropped.jpg '/> <span>Las gomas que han provocado pequeños arañazos en las pantallas de los jugadores de la Nintendo Switch original han desaparecido. Desconocemos si con el úso, el plástico que hay en su lugar no dañará la pantalla. Esto es algo que se tendrá que comprobar con un uso prolongado de la consola.</span> <span>Nintendo Switch OLED no es todo lo que podía dar de sí Nintendo Switch. Tenemos que verla como lo que es: una puesta al día de un producto con casi 5 años a sus espaldas, y que no viene a revolucionar la consola original, si no a mejorar sus componentes y renovarlos.</span> <span>La elección de la pantalla nos ha parecido estupenda. Es brillante, muy colorida y saca lo mejor de los juegos de Nintendo Switch. La nueva pata trasera plegable le da la estabilidad necesaria para que, por fin, jugar en modo tabletop sea compatible con casi cualquier tipo de superficie.</span> <div className='iframe-container' ><iframe title='YouTube video player' allowfullscreen src='https://www.youtube.com/embed/XoMEATvLpyA'/></div> <span>Otros pequeños detalles como el sonido mejorado, el ajuste de posición de los ventiladores o el Dock con conexión LAN, dejan muy claro que Nintendo Switch OLED no es una justificación para vender una Switch de 2019 o 2020 y adquirir este nuevo modelo. Si tienes una Nintendo Switch más antigua que dé problemas o si estás pensando en comprar una Nintendo Switch por primera vez, el modelo OLED debería ser tu única opción a partir de ahora.</span>",
      title: "Nintendo Switch (Diseño OLED)",
      category: "Noticia",
      imgUrl: "https://i.imgur.com/3DZEdHb.jpg",
    },
    {
      id: 5,
      desc: "<h1>Blissey confirma fecha de llegada a Pokémon Unite: tráiler y más detalles</h1> <img src='https://www.nintenderos.com/wp-content/uploads/2021/08/Pokemon-Unite.jpg '/> <span>Nos llegan más novedades relacionadas con Pokémon Unite. Tras su estreno en Nintendo Switch como descarga gratuita, hemos podido conocer nuevos contenidos que ya están confirmados para el título.</span> <span>En este caso, se trata de la fecha en la que se lanzará Blissey como personaje adicional auxiliar en el título. Estará disponible este 18 de agosto en Nintendo Switch. Recordad que los dataminers ya habían avanzado la llegada de este personaje, incluyendo numerosos detalles como sus habilidades y más.</span>",
      title: "Blissey ya está disponible en Pokémon UNITE",
      category: "Noticia",
      imgUrl: "https://i.imgur.com/vAEJSJQ.jpg",
    },
    {
      id: 6,
      desc: "<h1>La app de TV Pokémon se acaba de lanzar en Nintendo Switch por completa sorpresa</h1> <img src='https://www.nintenderos.com/wp-content/uploads/2021/08/tv-pokemon-switch.jpg '/> <span>Traemos un interesante anuncio relacionado con una de las franquicias más queridas por parte de los nintenderos. Se trata efectivamente de Pokémon.</span> <span>En el texto que tenéis abajo, podemos conocer que la app de TV Pokémon se ha lanzado en Nintendo Switch de forma completamente gratuita a través de la eShop. Se trata de la aplicación que nos permite ver las diferentes temporadas del anime y que anteriormente se lanzó para móviles.</span> <img src='https://pbs.twimg.com/media/E9uusy5XsAs4GsQ?format=jpg&name=large '/>",
      title: "La aplicación TV Pokémon ya está disponible en Nintendo Switch",
      category: "Noticia",
      imgUrl: "https://i.imgur.com/KQNMdgg.jpg",
    },
  ],
  news: [
    {
      id: 1,
      title: "Pokémon Masters EX detalla más contenidos de su segundo aniversario",
      desc: "<h1>Pokémon Masters EX detalla más contenidos de su segundo aniversario</h1> <img src='https://www.nintenderos.com/wp-content/uploads/2021/09/pokemon-masters-ex.jpg' /> <span>Nos llegan más novedades que DeNA ha confirmado hoy mismo para esta aplicación para móviles. Se trata de los eventos que se han compartido para <b>Pokémon Masters EX</b>.</span> <span>Hoy hemos podido conocer más planes para el segundo aniversario del juego. Se trata de una nueva historia cuyo preludio comienza este jueves. Incluye parejas de compis de Kanto que pueden usar Dinamax, concretamente <b>Rojo y Snorlax Gigamax</b> a partir del 16 de septiembre, y Megaevolución, concretamente <b>Azul y Mega Aerodactyl</b> a partir del 18 de septiembre.</span> <span>Os dejamos con el vídeo publicado:</span> <div className='iframe-container' ><iframe title='YouTube video player' allowfullscreen src='https://www.youtube.com/embed/Vla1rKA0jZg'/></div>",
      shortDesc: "Nos llegan más novedades que DeNA ha confirmado hoy mismo para esta aplicación para móviles. Se trata de los eventos que...",
      imgUrl: "https://www.nintenderos.com/wp-content/uploads/2021/09/pokemon-masters-ex.jpg"
    },
    {
      id: 2,
      title: "Zarude Papá y Celebi shiny ya disponibles en Pokémon Espada y Escudo: pasos para conseguirlos",
      desc: "<h1>Pokémon GO: Conoce todos los detalles de la Semana de la Moda</h1> <img src='https://www.nintenderos.com/wp-content/uploads/2021/10/Dada-Zarude-Mystery.jpg '/> <span>Nos llegan novedades interesantes relacionadas con uno de los videojuegos más reseñables dentro del catálogo de Nintendo Switch. Se trata concretamente de <b>Pokémon Espada y Escudo.</b> </span> <span>El detalle en cuestión que se ha publicado por parte de The Pokémon Company se centra en un nuevo evento de distribución. Este nos permite conseguir desde ya mismo a <b>Zarude Papá y Celebi shiny</b> en el juego. La distribución ha comenzado y los jugadores que se hayan suscrito al Club de Entrenadores Pokémon <b>antes del 25 de septiembre</b> pueden recibirlos.</span> <span>Estos son los pasos:</span> <ul> <li>Regístrate para obtener una cuenta del Club de Entrenadores Pokémon si aún no tienes una.</li> <li>En la página de «Editar Perfil» de tu cuenta, desplázate hasta «Preferencias de Marketing/Comerciales».</li> <li>Confirma que quieres recibir comunicaciones de marketing/comerciales.</li> <li>Espera un correo electrónico que contenga tu código de Zarude Papá y de Celebi shiny.</li> <li>Enciende tu consola con el juego Pokémon Espada o Pokémon Escudo y entra en el menú de Regalo Misterioso.</li> <li>Introduce el código mientras tu Switch está conectada a Internet y pulsa reclamar.</li> <li>Zarude Papá y Celebi shiny ya son tuyos.</li> <li>Recordad que debíais suscribiros a esta newsletter de Pokémon antes del 25 de septiembre para poder obtener los códigos.</li> </ul>",
      shortDesc: "Nos llegan novedades interesantes relacionadas con uno de los videojuegos más reseñables dentro del catálogo de Nintendo Switch. Se tr...",
      imgUrl: "https://www.nintenderos.com/wp-content/uploads/2021/10/Dada-Zarude-Mystery.jpg"
    },
    {
      id: 3,
      title: "Consigue tu Nintendo Switch por solo 299,99 € con packs de juegos",
      desc: "<h1>Consigue tu Nintendo Switch por solo 299,99 € con packs de juegos</h1> <img src='https://www.nintenderos.com/wp-content/uploads/2021/09/switchbajadanintenderos.jpg '/> <span>Si aún no tienes la consola de Nintendo no esperes más y aprovecha la <b>bajada de precio de Nintendo Switch</b> </span> <span>Además puedes empezar esta nueva etapa con los <b>Packs de Nintendo Switch con juegos.</b> </span> <span> <b>Nintendo Switch es la consola de Nintendo para el hogar que puedes llevar donde quieras</b>. La consola presenta tres modos de juegos: modo televisor, modo portátil y modo tabletop.</span> <span> <b>Consigue la Nintendo Switch JoyCon Gris por 299,99 €</b> </span> <span> <b>Consigue Nintendo Switch JoyCon Gris Pack Juegos A por 299,99 €</b> y llévate los siguientes juegos:</span> <span>- Nintendo Switch JoyCon Neón (Versión 2019)</span> <span>– El juego Kill la Kill IF (Código de descarga)</span> <span>– El juego Super Chariot (Código de descarga)</span> <span>– El juego Vegas Party</span> <span> <b>Consigue Nintendo Switch JoyCon Gris Pack Juegos B por 299,99 €</b> y llévate los siguientes juegos:</span> <span>– Nintendo Switch JoyCon Neón (Versión 2019)</span> <span>– El juego Story of Seasons: Friends of Mineral Town</span> <span>– El juego Professor Rubik Brain Fitness</span> <span>– El juego New Super Lucky’s Tale (Code in Box)</span> % </span>*Consigue Nintendo Switch JoyCon Neón por 299,99 €</b> </span> <span> <b>Consigue Nintendo Switch JoyCon Neón Pack Juegos A por 299,99 €</b> y llévate los siguientes juegos:</span> <span>– Nintendo Switch JoyCon Neón (Versión 2019)</span> <span>– El juego Kill la Kill IF (Código de descarga)</span> <span>– El juego Super Chariot (Código de descarga)</span> <span>– El juego Vegas Party</span> <span> <b>Consigue Nintendo Switch JoyCon Neón Pack Juegos B por 299,99 €</b> y llévate los siguientes juegos:</span> <span>– Nintendo Switch JoyCon Neón (Versión 2019)</span> <span>– El juego Story of Seasons: Friends of Mineral Town</span> <span>– El juego Professor Rubik Brain Fitness</span> <span>– El juego New Super Lucky’s Tale (Code in Box)</span>",
      shortDesc: "Si aún no tienes la consola de Nintendo no esperes más y aprovecha la bajada de precio de Nintendo Switch. Además puedes empezar esta n...",
      imgUrl: "https://www.nintenderos.com/wp-content/uploads/2021/09/switchbajadanintenderos-347x195.jpg"
    },
    {
      id: 4,
      title: "Tetris 99 confirma Maximus Cup de WarioWare: Get It Together!",
      desc: "<h1>Tetris 99 confirma Maximus Cup de WarioWare: Get It Together!</h1> <img src='https://www.nintenderos.com/wp-content/uploads/2021/09/wa-1.jpg '/> <span>Parece que <b>Tetris 99</b> ha confirmado recientemente un nuevo evento: se trata de un evento protagonizado por <b>WarioWare: Get It Together!</b>. Este celebra el reciente estreno de este título de Switch.</span> <span>En esta ocasión, se espera que los jugadores tengan la oportunidad de hacerse con <b>un tema del juego</b> si se consiguen 100 puntos. Este es el mensaje publicado:</span> <ul> <li>un tema del juego</li> <li>Regiones: todas</li> <li>Objetivo: recolecta tantos puntos de evento como puedas</li> <li>Premio: ¡acumula 100 puntos y obtén un tema especial con gráficos y música como recompensa!</li> </ul> <div className='iframe-container' ><iframe title='YouTube video player' allowfullscreen src='https://youtube.com/embed/WIii1D3TH8w'/></div>",
      shortDesc: "Parece que Tetris 99 ha confirmado recientemente un nuevo evento: se trata de un evento protagonizado por WarioWare: Get It Together!. Este...",
      imgUrl: "https://www.nintenderos.com/wp-content/uploads/2021/09/wa-1-347x195.jpg"
    },
    {
      id: 5,
      title: "Pokémon 25 The Album confirma novedades",
      desc: "<h1>Pokémon 25 The Album confirma novedades</h1> <img src='https://www.nintenderos.com/wp-content/uploads/2021/02/pokemon-25.jpg '/> <span>Vuelve a llegarnos un interesante mensaje relacionado con una de las franquicias más queridas por parte de los nintenderos. Se trata efectivamente de Pokémon.</span> <span>En el texto que tenéis abajo, podemos conocer que el álbum <b>Pokémon 25 The Album</b> saldrá a la venta el 15 de octubre de 2021. También se ha confirmado la lista de canciones incluidas:</span> <img src='https://pbs.twimg.com/media/E_P3CG7WQAUBlwn?format=png&name=large '/>",
      shortDesc: "Vuelve a llegarnos un interesante mensaje relacionado con una de las franquicias más queridas por parte de los nintenderos. Se trata...",
      imgUrl: "https://www.nintenderos.com/wp-content/uploads/2021/02/pokemon-25-360x202.jpg"
    },
    {
      id: 6,
      title: "Imágenes de cartas V, VMAX y del Starter Deck 100 del JCC Pokémon",
      desc: "<h1>Imágenes de cartas V, VMAX y del Starter Deck 100 del JCC Pokémon</h1> <img src='https://www.nintenderos.com/wp-content/uploads/2021/09/E_FLJdrXoAkwSCg-Cropped.jpg '/> <span>Para muchos niños de los años 90, Pokémon fue un fenómeno absoluto. La adictiva jugabilidad del querido RPG con su popular lema «Hazte con todos» se extendió como la pólvora cuando los niños buscaban intercambiar monstruos de bolsillo con sus amigos. El <b>Juego de Cartas Coleccionables (JCC)</b>, que se introdujo en 1996, demostró ser igual de popular.</span> <span>Pues bien, en esta ocasión se ha compartido <b>imágenes de cartas V, VMAX y del Starter Deck 100</b>. Os las dejamos todas a continuación:</span> <li>Cartas de Kingler V y Kingler VMAX del Starter Deck 100.</li> <img src='https://pbs.twimg.com/media/E_FKYQGXsAEGZjD?format=jpg&name=large '/> <img src='https://pbs.twimg.com/media/E_FKYt-WYAERqFk?format=jpg&name=large '/> <li>Cartas de Pokémon V del Starter Deck 100.</li> <img src='https://pbs.twimg.com/media/E_FKjW5XsAASePP?format=jpg&name=small '/> <img src='https://pbs.twimg.com/media/E_FKjp8XEAQF3HH?format=jpg&name=small '/> <img src='https://pbs.twimg.com/media/E_FKj6OXMAkJXJO?format=jpg&name=small '/> <img src='https://pbs.twimg.com/media/E_FKkL2WYAUmjSF?format=jpg&name=small '/> <img src='https://pbs.twimg.com/media/E_FLJdrXoAkwSCg?format=jpg&name=large '/> <img src='https://pbs.twimg.com/media/E_FLJ2BXsAEBZhw?format=jpg&name=4096x4096 '/> <img src='https://pbs.twimg.com/media/E_FLKXnX0AExeqC?format=jpg&name=large '/> <img src='https://pbs.twimg.com/media/E_FMJDbXoAUhUsw?format=jpg&name=medium '/> <img src='https://pbs.twimg.com/media/E_FMJa_WQAQZlKM?format=jpg&name=900x900 '/>",
      shortDesc: "Para muchos niños de los años 90, Pokémon fue un fenómeno absoluto. La adictiva jugabilidad del querido RPG con su popular...",
      imgUrl: "https://www.nintenderos.com/wp-content/uploads/2021/09/E_FLJdrXoAkwSCg-Cropped.jpg"
    },
    {
      id: 7,
      title: "Sony lanza una televisión 'perfecta para PS5' y la promociona con una función para videojuegos",
      imgUrl: "https://i.3djuegos.com/juegos/15263/playstation_5/fotos/noticias/playstation_5-5536670.webp",
      shortDesc: "Bravia XR es la televisión de Sony más moderna, por lo que no solo usa la consola para decorar los...",
      desc: "<h1>Sony lanza una televisión 'perfecta para PS5' y la promociona con una función para videojuegos</h1><span>La compañía nipona utiliza su nueva consola para publicitar uno de sus últimos productos.</span><img src='https://i.3djuegos.com/juegos/15263/playstation_5/fotos/noticias/playstation_5-5536670.webp' /><span>Hace años, los videojuegos eran un entretenimiento más bien aislado, del que solo disfrutaban unas pocas personas. Sin embargo, su crecimiento económico y social ha llevado a que muchas empresas empiecen a mirar el sector <b>con otros ojos</b>, algo que nos ha traído la última publicidad de Sony: una televisión 'perfecta para PS5', algo que no solo ayuda a promocionar la nueva consola de la compañía, sino que también indica <b>el gancho que significan los videojuegos</b> para considerar la compra de otros productos.</span><span><b>Bravia XR</b> es la televisión de Sony más moderna, por lo que no solo usa la consola para decorar los paneles publicitarios, ya que también cuenta con una funcionalidad que permite a la televisión entrar en <b>Modo Juego</b> cuando PS5 detecta el dispositivo. Por lo que <b>las sensaciones en el videojuego</b> ahora son una parte importante en la promoción de televisiones, algo que ha venido de perlas a la compañía nipona al fabricar productos de ambos sectores.</span><img src='https://i.3djuegos.com/juegos/15263/playstation_5/fotos/noticias/playstation_5-5536671.webp'/><span>Además, Sony incita a que los jugadores consideren la compra de Bravia XR con una oferta limitada: quienes compren la televisión en Reino Unido antes del 30 de noviembre recibirán <b>100 libras en créditos de la PlayStation Store </b>. Lo que se suma a la posibilidad de encender el aparato y la consola <b>al mismo tiempo</b> con el mando DualSense de PS5.</span><span>En definitiva, está claro que Sony aprovecha dos de sus departamentos para conseguir <b>una retroalimentación</b> que, quizás, beneficia en las ventas de televisores Bravia XR y PS5. Además, parece que las pantallas están empezando a ver <b>las bondades del mundo del videojuego</b>, ya que recientemente hemos conocido una televisión de la marca Sky que utilizará la tecnología de Kinect para llevar a cabo las mismas funcionalidades que se ofrecían con Xbox 360. Una acción curiosa que, quizás, da una segunda vida al dispositivo de Microsoft.</span>"
    }
  ],
  firstLaunch: false,
  selectedOffset: 0,
  baseDisplay: 12,
  baseOffset: 0,
  offset: 0,
  display: 12,
  pokemons: [],
  error: false,
  loadingMore:  false,
  loading: false,
  menu: false,
  selectedPokemon: null,
  actualFocus: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MENU_SIDER_HANDLER:
      return {
        ...state,
        menu: !state.menu,
      };
    case GET_POKEMONS:
      return {
        ...state,
        loadingMore: true,
      };
    case GET_POKEMONS_SUCCESS:
      return {
        ...state,
        display: state.display + state.baseDisplay,
        offset: state.offset + state.baseDisplay,
        pokemons: state.pokemons === 'error' ? action.payload : [...state.pokemons, ...action.payload],
        loadingMore: false,
      };
    case GET_POKEMONS_ERROR:
      return {
        ...state,
        loadingMore: false,
      };
    case CLEAN_POKEMONS:
      return {
        ...state,
        offset: state.baseOffset,
        display: state.baseDisplay,
      };
    case SELECT_REGION:
      return {
        ...state,
        selectedOffset: action.payload,
        offset: action.payload,
        display: action.payload + state.baseDisplay,
        pokemons: [],
      };
    case GET_REGION:
      return {
        ...state,
        loading: true,
        pokemons: []
      };
    case GET_REGION_SUCCESS:
      return {
        ...state,
        offset: state.offset + state.baseDisplay,
        display: state.display + state.baseDisplay,
        pokemons: action.payload,
        firstLaunch: true,
        loading: false,
      };
    case GET_REGION_ERROR:
      return {
        ...state,
        loading: false,
      };
    case SEARCH_POKEMON:
      return {
        ...state,
        loading: true,
        menu: false,
        pokemons: []

      };
    case SEARCH_POKEMON_SUCCESS:
      return {
        ...state,
        offset: state.baseOffset,
        display: state.baseDisplay,
        pokemons: [action.payload],
        loading: false,
      };
    case SEARCH_POKEMON_ERROR:
      return {
        ...state,
        offset: state.baseOffset,
        display: state.baseDisplay,
        loading: false,
        pokemons: 'error'
      };
    case FOCUS_NEW:
      return {
        ...state,
        actualFocus: action.payload
      }

    default:
      return state;
  }
}
