// Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();


// Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

// Código del círculo
console.group("Circulos");

// Diámetro
function diametroCirculo(radio) {
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

// Aquí interactuamos con el HTML

// function cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value)
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value)
    alert(area);
}

// function triángulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("Inputlado1");
    const value1 = input1.value;
    const input2 = document.getElementById("Inputlado2");
    const value2 = input2.value;
    const input3 = document.getElementById("Inputbase");
    const value3 = input3.value;

    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert (perimetro);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("Inputbase");
    const value1 = input1.value;
    const input2 = document.getElementById("InputAltura");
    const value2 = input2.value;

    const area = areaTriangulo(value1, value2);
    alert (area);
}

// function circulo
function calcularPerimetroCirculo() {
    const input = document.getElementById("Inputdiametro");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert (perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("Inputdiametro");
    const value = input.value;

    const area = areaCirculo(value);
    alert (area);
}