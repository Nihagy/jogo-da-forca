let palavras = [
    {'palavra': 'banana' , 'dica': 'fruta' },
]
let teclado = document.getElementsByClassName('teclas')
let divsPalavra = document.getElementsByClassName('palavra')
let letras = "abcdefghijklmnopqrstuvwxyz"
let palavra = palavras[0].palavra
const palavraEmArray = palavra.split('')

const compararLetras = (letra) => {
    if(palavraEmArray.includes(letra)){
        console.log("Letra que pertence:", letra)
    }
    else{
        console.log("Letra que não pertence:", letra)
    }
    
}

const pegarValor = (event) => {
    const letra = event.target.innerHTML
    compararLetras(letra)
    console.log(letra)
}

const atribuirValores = () => {

    for(let i = 0; i < teclado.length; i++){
        teclado[i].innerHTML = letras[i]
        teclado[i].onclick = pegarValor
    }
}

const atribuirPalavra = () => {
    for(let i = 0; i < palavraEmArray.length; i++){
        divsPalavra[i].innerHTML = palavraEmArray[i]
    }
}

atribuirValores()
atribuirPalavra()




