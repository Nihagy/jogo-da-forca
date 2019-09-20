const divsPalavra = document.querySelectorAll('section div')
const spanPalavra = document.querySelectorAll('section span')
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
const teclado = document.getElementsByClassName('teclas')
const paragrafoParaDica = document.querySelector('header p')


const atribuirPalavra = () => {
    for(let i = 0; i < palavra.length; i++){
        divsPalavra[i].innerHTML = palavra[i]
        divsPalavra[i].className = 'inativo' 
        divsPalavra[i].style.gridArea = "d"+ i
        spanPalavra[i].style.gridArea = "t"+ i
    }
    escreverDica(dica)
}

const atribuirTracos = () => {
    let l = divsPalavra.length - palavra.length
    for(let i = divsPalavra.length - 1; l > 0 ; i-- ){
        spanPalavra[i].className = 'inativo'
        l--
    }
}

const atribuirValores = () => {
    
    for(let i = 0; i < teclado.length; i++){
        teclado[i].innerHTML = letrasParaTeclado[i]
        teclado[i].onclick = pegarValor
    }
    atribuirPalavra()
}

const compararLetras = (letra, tecla) => {
    const palavraEmArray = palavra.split('')
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
        alert("Você perdeu")
        setTimeout(() => {
             window.location.reload()}, 2000)
    }
    
}
const verificarVitoria = () => {
    const inativos = document.getElementsByClassName('inativo')
    if(inativos.length == 0){
        alert("Você venceu!!!!")
        setTimeout(() => {
            window.location.reload()}, 2000)
    }
}
atribuirValores()  

atribuirTracos()

