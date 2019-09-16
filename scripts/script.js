const divsPalavra = document.getElementsByClassName('palavra')
const indice = Math.floor(Math.random()*3)
const letrasParaTeclado = "abcdefghijklmnopqrstuvwxyz"
const palavras = [
    {'palavra': 'banana' , 'dica': 'fruta' },
    {'palavra': 'uva' , 'dica': 'fruta' },
    {'palavra': 'manga' , 'dica': 'fruta' },
    {'palavra': 'morango' , 'dica': 'fruta' },
]
const dica = palavras[indice].dica
const palavra = palavras[indice].palavra
const palavraEmArray = palavra.split('')
const teclado = document.getElementsByClassName('teclas')


const atribuirPalavra = () => {
    for(let i = 0; i < palavraEmArray.length; i++){
        divsPalavra[i].innerHTML = palavraEmArray[i]
    }
    escreverDica(dica)
}

const atribuirValores = () => {

    for(let i = 0; i < teclado.length; i++){
        teclado[i].innerHTML = letrasParaTeclado[i]
        teclado[i].onclick = pegarValor
    }
    atribuirPalavra()
}

const compararLetras = (letra, tecla) => {
    tecla.onclick = null

    if(palavraEmArray.includes(letra)){
        tecla.className = 'correta'
        mostrarPalavra(letra)
    }
    else{
        tecla.className = 'incorreta'
    }
}

const escreverDica = (dica) => {
}

const mostrarPalavra = (letra) => {

    for(let i = 0; i < divsPalavra.length; i++){
        if(divsPalavra[i].innerHTML === letra){
            divsPalavra[i].style.display = 'block'
        }
    }
}


const pegarValor = (event) => {
    const letra = event.target.innerHTML
    const tecla = event.target
    compararLetras(letra, tecla)
}

atribuirValores()




