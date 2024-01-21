# API rest

## PROYECTO 7: API rest - EN PROCESO

## Descripción

Primer proyecto de Node, Express y MongoDB en Rock{theCode}!


Idea: Artefactos de Ciencia Ficción, tipos de cervez (pilsner, ipa, indian pale ale)

```jsx
const sciFiArtifacts = {
  _id: 'id del artefacto',
  name: 'Nombre del artefacto',
  universe: 'Universo al que pertenece',
  description: 'Descripción del artefacto y sus características',
  type: 'Tipo de artefacto',
  creator: 'Fabricante del artefacto',
  power: 'Poderes o funcionalidades especiales del artefacto',
}
```

- Describir endpoints<br>

## Criterios de aceptación
<ul>
[✅]  El servidor arranca en el puerto 4001 cuando lanzo el comando `npm run start`.<br>
[ ]  El servidor se conecta con una base de datos MongoDB en mi equipo local que corre en el puerto 27017.<br>
[ ]  En el README del proyecto están definidos los endpoints que tengo a mi disposición.<br>
<ul>
- [ ]  Hay un endpoint GET que me permite traer todos los documentos de un tipo de colección.<br>
- [ ]  Hay un endpoint GET que me permite traer un solo elemento por su id de una colección.<br>
- [ ]  Hay un endpoint POST que me permite crear un nuevo elemento en la colección correspondiente.<br>
- [ ]  Hay un endpoint PUT que me permite crear editar un elemento por su id en una colección.<br>
- [ ]  Hay un endpoint DELETE que me permite borrar un elemento por su id en una colección.<br>
- [✅]  El modelo de datos de MongoDB es un objeto con **al menos cuatro claves distintas**, aquí un ejemplo de algo esperable:

```jsx
const document = {
  _id: 'id_del_documento',
  name: 'Pepe',
  surname: 'Rocker',
  job: 'Full Stack',
  studies: 'Rock{theCode}'
}
```
</ul>
[✅]  El **servidor no se rompe si pido una URL no existente**, es decir, dispone de un middleware para capturar errores 404 o rutas no encontradas.<br>
[ ]  Los **códigos de red son correctos** cuando hago peticiones (200 y 201 para objetos creados).


## Organización

<ul>
<li> [ ] index → Almacenar archivos que actúan como puntos de entrada o partes del sistema</li>
[✅] Middleware declarado<br>
[✅] Middleware para errores declarado<br>
[✅] Puerto establecido <br>
[] Enlaces realizados<br>
<li> [✅] config → Archivos con configuraciones</li>
[✅] Configuración establecida<br>
[✅] Si no funciona recuerda probar la otra ruta<br>
<li> [✅] models → Modelos para representar la estructura de los datos</li>
[✅] Modelo establecido<br>
<li> [ ] repositories → Conjunto de funciones con las querys para traer la información</li>
[] GET all<br>
[] GET one<br>
[] POST<br>
[] PUT<br>
[] DELETE <br>
[] Enlaces realizados<br>
<li> [ ] controllers → Conjunto de funcionalidades</li>
[] GET all<br>
[] GET one<br>
[] POST<br>
[] PUT<br>
[] DELETE <br>
[] Enlaces realizados<br>
<li> [ ] routes → Enrutado de la aplicación</li>
[✅] index con el router establecido<br>
[✅] archivo con los endpoints declarados<br>
[] Enlaces realizados<br>
</ul>