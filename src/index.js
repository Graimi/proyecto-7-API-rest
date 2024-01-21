const express = require('express');
require('./config/db');
// Creamos el soporte para peticiones
// Declarar luego de crear las routes
// const mainRouter = require('./routes/index');
const router = express.Router();

const app = express();
app.use(express.json());

// Creamos el middleware de las rutas en /api
// app.use('/api', mainRouter);
app.use('/api', router);

// Controlador de rutas no encontradas
app.use('*', (req, res, next) => {
  res.status(404).json({ data: 'Not found' });
});

// Controlador de errores generales del servidor
app.use((error, req, res, next) => {
  res.status(500).json({ data: 'Internal Server Error' });
});

const sciFiArtifacts = [
  {
    name: 'Pip-Boy 3000',
    universe: 'Fallout',
    description:
      'Dispositivo portátil utilizado por los habitantes del yermo post-apocalíptico. Actúa como computadora personal y asistente, mostrando estadísticas, mapas y registros.',
    type: 'Dispositivos tecnológicos',
    powers: 'Registro de datos, navegación, supervivencia.',
  },
  {
    name: 'Neuralyzer',
    universe: 'Men in Black',
    description:
      'Dispositivo utilizado por la organización Men in Black para borrar la memoria de testigos de avistamientos alienígenas. Emite un flash de luz que borra recuerdos selectivos.',
    type: 'Dispositivos tecnológicos',
    creator:
      'Desarrollado por la tecnología extraterrestre de los Men in Black.',
    powers: 'Borrado selectivo de memoria con un destello de luz.',
  },
  {
    name: 'Batmóvil',
    universe: 'Batman',
    description:
      'El vehículo utilizado por Batman en su lucha contra el crimen en Gotham City. Es un automóvil altamente avanzado, equipado con tecnología de vanguardia, armamento y capacidades de alta velocidad.',
    type: 'Vehículos y Equipamiento Especial',
    powers:
      'Alta velocidad, armamento avanzado, tecnología de camuflaje, capacidad para maniobras extremas y versatilidad en terrenos urbanos.',
  },
  {
    name: 'Omni-directional Mobility Gear',
    universe: 'Attack on Titan',
    description:
      'Dispositivo usado por los soldados en la serie para moverse y atacar con eficacia a los Titanes. Consiste en un arnés de maniobra y ganchos que se enganchan a edificios y árboles para permitir un movimiento ágil.',
    type: 'Vehículos y Equipamiento Especial',
    powers: 'Habilidades de movimiento y ataque contra los Titanes.',
  },
  {
    name: 'Death Note',
    universe: 'Death Note',
    description:
      'Cuaderno sobrenatural que causa la muerte de cualquier persona cuyo nombre sea escrito en él, siempre y cuando el escritor conozca el rostro de la víctima.',
    type: 'Armas y Habilidades Sobrenaturales',
    powers:
      'Capacidad de causar la muerte escribiendo el nombre de una persona.',
  },
  {
    name: 'Kunai',
    universe: 'Naruto',
    description:
      'Un arma arrojadiza utilizada por los ninjas en la serie Naruto. Tiene múltiples usos como arma de ataque, herramienta de excavación y como soporte para sellados.',
    type: 'Armas',
    powers: 'Arma arrojadiza, herramienta multifuncional.',
  },
  {
    name: 'Atium',
    series: 'Mistborn',
    description:
      'Metal precioso y extremadamente raro en el mundo de Scadrial. El Atium es una de las metales místicas que otorga habilidades sobrenaturales, permite al usuario ver el futuro cercano y obtener ventaja en la lucha.',
    type: 'Armas y Habilidades Sobrenaturales',
    powers:
      'Habilidad para ver el futuro cercano, otorga ventaja estratégica en la lucha.',
  },
];



// http://localhost:${PORT}/api/students GET
router.get('/students', (req, res, next) => {
  res.status(200).json({ data: sciFiArtifacts });
});


// Establecemos el puerto
const PORT = 4001;
app.listen(PORT, () => {
  console.log(`>> Aplicación corriendo en el puerto http://localhost:${PORT}`);
});