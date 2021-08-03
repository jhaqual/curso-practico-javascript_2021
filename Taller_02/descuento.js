// const precioOriginal = 120;
// const descuento = 18;


// Se puede imprimir en consola todas las variables que hemos creado usando el console.log creando un objeto
// console.log({
//     precioOriginal, 
//     descuento,
//     porcentajePrecioConDescuento,
//     PrecioConDescuento

// });

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const PrecioConDescuento = (precio * porcentajePrecioConDescuento ) / 100;

    return PrecioConDescuento;

}

function buttonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const PrecioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

// Se usa la propiedad .innerText para reflejar los resultados en el HTML
    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = "El precio con descuento son " + PrecioConDescuento + "$";
}