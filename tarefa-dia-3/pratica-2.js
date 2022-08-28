/*let i = 9
let multiplicador = 1
let n = 10

while (i <= n) {
    
    console.log(`${multiplicador} X ${i} = ${resultado}`)
    i++
}*/


const multiplicador = 9
let i = 1
let n = 9

while (i <= n) {
    const resultado = i*multiplicador
    const valorExibido = `${multiplicador} X ${i} = ${resultado}`
    console.log(valorExibido)
    i++
}