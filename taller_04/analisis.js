// Mediana General

//Paso 01
const salariosCol = colombia.map(
  function (personita) {
    return personita.salary;
  }
);

//Paso 02
const salariosColSorted = salariosCol.sort(
  function (salaryA, salaryB) {
    return salaryA - salaryB;
  }
);

//Paso 03
function esPar(numerito) {
  return (numerito % 2 === 0);
}

// Paso 04 - B
function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

// Paso 04 - A
// Calculadora de mediana
function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personitaMitad1 = lista[mitad - 1];
    const personitaMitad2 = lista[mitad];

    const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
    return mediana;
  } else {
    const personitaMitad = lista[mitad];
    return personitaMitad;
  }
}

// Paso 05
const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Paso 06
// Mediana del top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
  spliceStart,
  spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);



console.log({
  medianaGeneralCol,
  medianaTop10Col,
});



 // ----- Esta es la versión original del archivo 👇👇
// Helpers
// function esPar(numerito) {
//   return (numerito % 2 === 0);
// }

// function calcularMediaAritmetica(lista) {
//   const sumaLista = lista.reduce(
//     function (valorAcumulado = 0, nuevoElemento) {
//       return valorAcumulado + nuevoElemento;
//     }
//   );
//   const promedioLista = sumaLista / lista.length;
//   return promedioLista;
// }

// // Calculadora de mediana
// function medianaSalarios(lista) {
//   const mitad = parseInt(lista.length / 2);

//   if (esPar(lista.length)) {
//     const personitaMitad1 = lista[mitad - 1];
//     const personitaMitad2 = lista[mitad];

//     const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
//     return mediana;
//   } else {
//     const personitaMitad = lista[mitad];
//     return personitaMitad;
//   }
// }

// // Mediana General

// //Paso 01
// const salariosCol = colombia.map(
//   function (personita) {
//     return personita.salary;
//   }
// );

// //Paso 02
// const salariosColSorted = salariosCol.sort(
//   function (salaryA, salaryB) {
//     return salaryA - salaryB;
//   }
// );

// const medianaGeneralCol = medianaSalarios(salariosColSorted);

// // Mediana del top 10%
// const spliceStart = (salariosColSorted.length * 90) / 100;
// const spliceCount = salariosColSorted.length - spliceStart;

// const salariosColTop10 = salariosColSorted.splice(
//   spliceStart,
//   spliceCount,
// );

// const medianaTop10Col = medianaSalarios(salariosColTop10);

// console.log({
//   medianaGeneralCol,
//   medianaTop10Col,
// });

