// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();


// Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1,lado2,base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

// Código del círculo
console.group("Circulos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es de: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio){
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("El valor de PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();