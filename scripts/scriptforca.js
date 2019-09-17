const divsPalavra = document.querySelectorAll('section div')
const indice = Math.floor(Math.random()*4)
const letrasParaTeclado = "abcdefghijklmnopqrstuvwxyz"
const palavras = [
    {'palavra': 'banana' , 'dica': 'Fruta' },
    {'palavra': 'uva' , 'dica': 'Fruta' },
    {'palavra': 'manga' , 'dica': 'Fruta' },
    {'palavra': 'morango' , 'dica': 'Fruta' },
]
const dica = palavras[indice].dica
const palavra = palavras[indice].palavra
const palavraEmArray = palavra.split('')
const teclado = document.getElementsByClassName('teclas')
const paragrafoParaDica = document.querySelector('header p')


const atribuirPalavra = () => {
    for(let i = 0; i < palavraEmArray.length; i++){
        divsPalavra[i].innerHTML = palavraEmArray[i]
        divsPalavra[i].className = 'inativo'
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
        verificarVitoria()
    }
    else{
        tecla.className = 'incorreta'
        verificarDerrota()
    }
}

const escreverDica = (dica) => {
    paragrafoParaDica.innerHTML = dica
}

const mostrarPalavra = (letra) => {

    for(let i = 0; i < divsPalavra.length; i++){
        if(divsPalavra[i].innerHTML === letra){
            divsPalavra[i].className = "palavra"
        }
    }
}


const pegarValor = (event) => {
    const letra = event.target.innerHTML
    const tecla = event.target
    compararLetras(letra, tecla)
}

const verificarDerrota = () => {
    const incorretas = document.getElementsByClassName('incorreta').length

    if(incorretas > 6){
        document.write("Você perdeu")
    }
}
const verificarVitoria = () => {
    let contador
    let i = 0

    while(divsPalavra[i].innerHTML){
        contador++
        i++
    }

    if(contador == palavra.length){
        document.write("Você venceu!!!!")
    }
}
atribuirValores()