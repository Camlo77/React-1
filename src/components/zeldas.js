export const zeldas = [
  {
    id: "P001",
    name: "The Legend of Zelda",
    desc: "El juego original de 1986 para NES. Link explora Hyrule, recorre mazmorras y reúne los fragmentos de la Trifuerza para detener a Ganon.",
    img: "./assets/Juego1.jpg",
    ingredients: ["espada de madera", "boomerang", "bombas", "vela"],
    price: 19990,
  },
  {
    id: "P002",
    name: "A Link to the Past",
    desc: "Aventura de SNES ambientada en dos mundos paralelos: Hyrule y el Mundo Oscuro. Un clásico de la exploración y los puzles.",
    img: "/img/alttp.jpg",
    ingredients: ["espada maestra", "espejo mágico", "garfio", "botas de pegaso"],
    price: 24990,
  },
  {
    id: "P003",
    name: "Ocarina of Time",
    desc: "Primera aventura 3D de la saga (N64). Link viaja entre dos épocas usando la música de la ocarina para salvar Hyrule.",
    img: "/img/oot.jpg",
    ingredients: ["ocarina del tiempo", "espada maestra", "arco de las hadas", "escudo espejo"],
    price: 29990,
  },
  {
    id: "P004",
    name: "Majora's Mask",
    desc: "Link tiene tres días para evitar que la luna caiga sobre Términa. Una aventura oscura, con máscaras y bucles temporales.",
    img: "/img/mm.jpg",
    ingredients: ["máscara de Majora", "máscara de Deku", "máscara de Goron", "máscara de Zora"],
    price: 27990,
  },
  {
    id: "P005",
    name: "Breath of the Wild",
    desc: "Mundo abierto para Switch. Link despierta tras 100 años para derrotar a la Calamidad Ganon con total libertad de exploración.",
    img: "/img/botw.jpg",
    ingredients: ["tableta Sheikah", "paravela", "runas", "armas rompibles"],
    price: 49990,
  },
  {
    id: "P006",
    name: "Tears of the Kingdom",
    desc: "Secuela de BOTW. Hyrule se expande a los cielos y las profundidades, con nuevos poderes para construir y manipular objetos.",
    img: "/img/totk.jpg",
    ingredients: ["Ultramano", "Infiltración", "Retroceso", "Ensamblaje"],
    price: 59990,
  },
];

// Simulación de un carrito de compras
export const zeldasCart = zeldas.slice(0, 3).map(({ id, name, price, img }) => ({
  id,
  name,
  price,
  img,
  count: 1,
}));