const notas = [1.3, 2.1, 3.4, 7.0, 6.2, 5.4]
let suma = 0
let contador = 0

while(contador < notas.length){
    suma = suma + notas[contador]
    contador = contador+1
    console.log(suma)
}const promedio = suma/notas.length
console.log("tu promedio es:", promedio)