// La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
// La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
// La función debe retornar la altura del triángulo.

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        alert("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

		const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;
        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}

function obtenerDatos() {
    const input1 = document.getElementById("trianguloGrandeLadoA");
    const value1 = input1.value;
    const input2 = document.getElementById("trianguloGrandeLadoB");
    const value2 = input2.value;
    const input3 = document.getElementById("trianguloGrandeLadoBase");
    const value3 = input3.value;

    const altura = alturaTrianguloIsosceles(value1,value2,value3);
    alert (altura);
}

/* Otra solución - Aplicable en consola

function altura(lado1, lado2, base){
    if(lado1 === lado2 && lado1 != base){
        alert('isoceles')
        const altura = Math.sqrt(lado1**2 - base**2/ 4)
        console.log(altura)
    }
    else{
        alert('no lo se')
    }
}
altura(6, 6, 4)

Nota importante para este código:

Cuando usamos el doble asterisco hace referencia a una potencia.
es decir que si dice ‘base ** 2’ significa que la base se esta
elevando a la potencia de dos, que es lo mismo que decir, base * base.
por ejemplo si dijera ‘base ** 3’ significa que se esta elevando
al cubo, osea, base * base * base

*/