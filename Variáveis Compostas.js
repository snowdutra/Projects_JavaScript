let num = [5 ,8 , 2 , 9 , 3]
num.push(1) // Esse tem qure vim primeiro 
num.sort() // Esse vem depois
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor ${num[0]}`)
let pos = num.indexOf(4)
if( pos == -1) {
    console.log("O valor não foi encontrado")
} else {
    console.log(`O valor está na ${pos}`)
}


  
