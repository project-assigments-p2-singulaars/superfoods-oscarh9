# SuperFoods

## Introducción

Nos han pedido construir una aplicación para ofrecer consejos de nutrición. De momento sólo se abordará la lista de alimentos y su selección para realizar un menú diario. Nos ofrecen el siguiente prototipo como base:

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_0e106e84e22155f1d2775e37cd4aa865.gif)

## Instrucciones de entrega

1. Acepta la asignación de classroom.
2. Clona el repositorio con las instrucciones.
3. Selecciona el directorio clonado en un terminal.
4. Crea la aplicación de Angular con el siguiente comando:
```sh
        ng new superfoods --directory ./
```
5. Realiza la aplicación.
6. Sube los cambios al repositorio en la rama `main`
7. Realiza el deploy de la aplicación al servidor que consideres.
8. Modifica el archivo `readme.md` de la aplicación para enlazar la url de la aplicación desplegada.

## Requerimientos

- Mostrar una **lista de alimentos** utilizando la información que se ofrece (`food.ts`); que deben incluir una imagen, un nombre y el contenido en calorías.
- Incluir un **buscador de alimentos** por nombre,que filtre la lista en tiempo real.
- Incluir un botón para añadir nuevos alimentos. Este botón debe mostrar un **formulario**.
- El formulario debe tener los siguientes campos:
  -  name,
  -  calories number y,
  -  upload image (solo una url)
-  El formulario tendrá un botón enviar que añadirá el alimento a la lista.
-  Al clicar el botón enviar el formulario debe desaparecer.
- Incluir un **menú diario** en la página que se irá informando cuando el usuario clique un botón **"Añadir al menú"** situado al lado de cada alimento.
- El menú diario debe incluir el número total de calorías.
- **Bonus | Cantidades**. Incluir un elemento para seleccionar el número de unidades, al lado de cada alimento. Al clicar el botón "añadir alimentos al menú" debe añadir todos los elementos que se han seleccionado.
El valor por defecto de cantidad será 1.
- **Super Bonus**. Si el usuario ha añadido más de un elemento del mismo tipo a la lista, no lo muestres varias veces. En su lugar, muestra el número de elementos que se han añadido.

Por ejemplo:

- `Banana x2`
- `Salmon x5`
- `Cake`

## Requerimientos técnicos
- Puedes utilizar los componentes que consideres necesarios.
- Puedes realizar los estilos de la manera que quieras. Aunque se sugiere que comiences a utilizar la librería @angular/material.
- El filtrado de la lista puedes hacerlo con pipes, eventos u observables.
- Incluye un tablero kanban para la gestión de las tareas del proyecto.
- Investiga la interacción entre componentes
- Incluye algún test unitario.

## Modalidad

- Trabajo individual, plazo de entrega 30/04/24.
- El feedback a los proyectos se dará de manera individual vía classroom.

## Evaluación
- En este trabajo se va a evaluar la búsqueda de soluciones al problema planteado.
- Código de limpio. Utilizar patrones: YAGNI,KISS,DRY
- Buena semántica de componentes, propiedades,etc.
- Buena arquitectura: Patrón LIFT
- Incluir los elementos conocidos: componentes, enrutamiento.
- Utilización de nuevas funcionalidades: Pipes, directivas, @Input, Binding,...
- Comenzar a utilizar tests unitarios.