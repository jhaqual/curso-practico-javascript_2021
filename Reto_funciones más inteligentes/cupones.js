// Implementar descuentos con cupones.

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const PrecioConDescuento = (precio * porcentajePrecioConDescuento ) / 100;

    return PrecioConDescuento;

}

// Solución #1: arrays y switch

const coupons = [
    "descuento_01",
    "descuento_02",
    "descuento_03",
];


function buttonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    switch(couponValue) {
    case "descuento_01":
        descuento = 15;
    break;
    case "descuento_02":
        descuento = 30;
    break;
    case "descuento_03":
        descuento = 50;
    break;
  }

    const PrecioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

// Se usa la propiedad .innerText para reflejar los resultados en el HTML
    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = "El precio con descuento son " + PrecioConDescuento + "$";
}

// ----- // ----- //----- // ----- //----- // ----- //----- // ----- //----- // ----- //----- // ----- //----- // ----- //


// Solución #2: legibilidad, error first y muerte al switch


function ifCalcularPrecioConDescuento(ifPrecio, ifDescuento) {
    const ifPorcentajePrecioConDescuento = 100 - ifDescuento;
    const ifPrecioConDescuento = (ifPrecio * ifPorcentajePrecioConDescuento ) / 100;

    return ifPrecioConDescuento;

}

const ifCoupons = [
    "descuento_01",
    "descuento_02",
    "descuento_03",
];

function ifButtonPriceDiscount() {
    const ifPrice = document.getElementById("ifPrice");
    const ifPriceValue = ifPrice.value;

    const ifCoupon = document.getElementById("ifCoupon");
    const ifCouponValue = ifCoupon.value;

    let ifDescuento;

    if (!ifCoupons.includes(ifCouponValue)) {
        alert("El cupón " + ifCouponValue + " no es válido");
     } else if (ifCouponValue === "descuento_01") {
        ifDescuento = 15;
     } else if (ifCouponValue === "descuento_02") {
        ifDescuento = 30;
     } else if (ifCouponValue === "descuento_03") {
        ifDescuento = 50;
     }

    const ifPrecioConDescuento = ifCalcularPrecioConDescuento(ifPriceValue, ifDescuento);

// Se usa la propiedad .innerText para reflejar los resultados en el HTML
    const ifResultPrice = document.getElementById("ifResultPrice");
    ifResultPrice.innerText = "El precio con descuento son " + ifPrecioConDescuento + "$";
}

// ----- // ----- //----- // ----- //----- // ----- //----- // ----- //----- // ----- //----- // ----- //----- // ----- //


// Solución #3: arrays y condicionales mucho más inteligentes


function arrayCalcularPrecioConDescuento(arrayPrecio, arrayDescuento) {
    const arrayPorcentajePrecioConDescuento = 100 - arrayDescuento;
    const arrayPrecioConDescuento = (arrayPrecio * arrayPorcentajePrecioConDescuento ) / 100;

    return arrayPrecioConDescuento;

}


const arrayCoupons = [
    {
        name: "descuento_01",
        discount: 15,
    },
    {
        name: "descuento_02",
        discount: 30,
    },
    {
        name: "descuento_03",
        discount: 50,
    },
];



function arrayButtonPriceDiscount() {
    const arrayPrice = document.getElementById("arrayPrice");
    const arrayPriceValue = arrayPrice.value;

    const arrayCoupon = document.getElementById("arrayCoupon");
    const arrayCouponValue = arrayCoupon.value;


    const isCouponValueValid = function (arrayCoupons) {
        return arrayCoupons.name === arrayCouponValue;
        };

        const arrayUserCoupon = arrayCoupons.find(isCouponValueValid);

        if (!arrayUserCoupon) {
            alert("El cupón " + arrayCouponValue + "no es válido");
        }else {

        const arrayDescuento = arrayUserCoupon.discount;
        const arrayPrecioConDescuento = arrayCalcularPrecioConDescuento(arrayPriceValue, arrayDescuento);

        const arrayResultPrice = document.getElementById("arrayResultPrice");
            arrayResultPrice.innerText = "El precio con descuento son: $" + arrayPrecioConDescuento;
    }

}
