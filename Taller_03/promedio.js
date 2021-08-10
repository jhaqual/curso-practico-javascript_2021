// En el video

// 01 Primera etapa

// const lista1 = [
//   100,
//   200,
//   300,
//   500,
// ];

// let sumaLista1 = 0;
// for (let i = 0; i < lista1.length; i++) {
//   sumaLista1 = sumaLista1 + lista1[i];
// }

// const promedioLista1 = sumaLista1 / lista1.length;

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //



// 02 Segunda etapa - Con ciclo for


// function calcularMediaAritmetica(lista) {
//   let sumaLista = 0;
//   for (let i = 0; i < lista.length; i++) {
//     sumaLista = sumaLista + lista[i];
//   }

//   const promedioLista = sumaLista / lista.length;

//   return promedioLista;
// }


// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //


// 03 Tercera etapa - "Metodo reduce"



function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}
