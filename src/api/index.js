// Esta información en un caso real debería provenir del Backend
const items = [
  { 
    id: 1,
    title: 'Trek 2000',
    description: 'La mejor bici del 2000, la Trek 2000.',
    price: 950,
    pictureUrl: 'https://borabikes.com.ar/64631-large_default/bicicleta-mtb-trek-fuel-ex-7-nx-r29-12v-sram-doble-rock-shox.jpg',
  },
  { 
    id: 2,
    title: 'Casco Rocket 🚀',
    description: 'El casco para que te puedan chocar y no perder la vida.',
    price: 30,
    pictureUrl: 'https://borabikes.com.ar/61631-large_default/casco-bicicleta-mtb-skate-urbano-tipo-protec-adultos-y-ninos.jpg',
  },
  { 
    id: 3,
    title: 'Campera Canguro Gris',
    description: 'La campera canguro que te hará estar abrigado en invierno ❄️',
    price: 35,
    pictureUrl: 'https://borabikes.com.ar/61943-large_default/campera-buzo-canguro-bicicleta-moto-giant-liv-casual-bora.jpg',
  },
]

// Función que va a llamar al Backend
function getItems() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(items);
    }, 2000)
  });
}

// Exportar las funciones que necesito
export {
  getItems,
}
