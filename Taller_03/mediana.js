// Queda pendiente crear una función que acepte cualquier listado de datos
// Se aplicó la propiedad sort() para ordenar los elementos de la lista

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}


const lista1 = [
  100,
  200,
  500,
  400000000,
];


  const mitadLista1 = parseInt(lista1.length / 2); // Parseint convierte el resultado en un número entero

  function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }

  }

  let mediana;

  if (esPar(lista1.length)) {
    lista1.sort(function (a, b) {
      return a - b
    });
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

    mediana = promedioElemento1y2;
  } else {
    mediana = lista1[mitadLista1];
  }


// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //


// if(lista1 es par?) {
//   //necesitamos dos elementos
//   // -> el promedio
//   // -> mediana
// } else {
//   // posición mitadLista1 dentro de Lista1
//   // -> mediana
// }

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //

// function calcularMediaAritmetica(lista) {
//   const sumaLista = lista.reduce(
//     function (valorAcumulado = 0, nuevoElemento) {
//       return valorAcumulado + nuevoElemento;
//     }
//   );
//   const promedioLista = sumaLista / lista.length;
//   return promedioLista;
// }

// const lista1 = [
//   100,
//   200,
//   500,
//   400000000,
// ];

// const mitadLista1 = parseInt(lista1.length / 2);

// function esPar(numerito) {
//   if (numerito % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let mediana;

// if (esPar(lista1.length)) {
//   const elemento1 = lista1[mitadLista1 - 1];
//   const elemento2 = lista1[mitadLista1];

//   const promedioElemento1y2 = calcularMediaAritmetica([
//     elemento1,
//     elemento2,
//   ]);
//   mediana = promedioElemento1y2;
// } else {
//   mediana = lista1[mitadLista1];
// }
