const edad = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let sumapares = 0
for (let contador = 0; contador < edad.length; contador++) {
    const actual = edad[contador]
    if ( actual % 2 == 0) {
        sumapares += actual
    }

} 
console.log("tu suma es :", sumapares)




