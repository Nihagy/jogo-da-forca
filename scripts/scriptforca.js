const divsPalavra = document.querySelectorAll('section div')

const escolherPalavra = () => {

    const indice = Math.floor(Math.random()*4)

    const palavras = [
        {'palavra': 'banana' , 'dica': 'Fruta' },
        {'palavra': 'uva' , 'dica': 'Fruta' },
        {'palavra': 'manga' , 'dica': 'Fruta' },
        {'palavra': 'morango' , 'dica': 'Fruta' },
    ]

    const dica = palavras[indice].dica

    const palavra = palavras[indice].palavra

    atribuirCamposTracos(palavra)

    atribuirCamposPalavra(palavra)
    
    escreverDica(dica)

    return palavra
}


const atribuirCamposTracos = (palavra) => {
    
    const spanPalavra = document.querySelectorAll('section span')
    
    for(let i = 0; i < palavra.length; i++){
        spanPalavra[i].style.gridArea = "t"+ i
    }
    
    let l = divsPalavra.length - palavra.length
    
    for(let i = divsPalavra.length - 1; l > 0 ; i-- ){
        spanPalavra[i].className = 'span-inativo'
        l--
    }
}

const atribuirCamposPalavra = (palavra) => {
    
    for(let i = 0; i < palavra.length; i++){
        divsPalavra[i].innerHTML = palavra[i]
        divsPalavra[i].className = 'inativo' 
        divsPalavra[i].style.gridArea = "d"+ i
    }
}

const escreverDica = (dica) => {
    
    const paragrafoParaDica = document.querySelector('header p')
    
    paragrafoParaDica.innerHTML = dica
}

const atribuirValoresDoTeclado = () => {
    
    const letrasParaTeclado = "abcdefghijklmnopqrstuvwxyz"
    
    const teclado = document.getElementsByClassName('teclas')
    
    for(let i = 0; i < teclado.length; i++){
        teclado[i].innerHTML = letrasParaTeclado[i]
        teclado[i].onclick = pegarValorTeclado
    }
    
}

const palavra = escolherPalavra()

const compararLetras = (letra, tecla) => {
    
    const palavraEmArray = palavra.split('')
    
    tecla.onclick = null
    
    if(palavraEmArray.includes(letra)){
        tecla.className = 'correta'
        mostrarLetras(letra)
    }
    else{
        tecla.className = 'incorreta'
        verificarDerrota()
    }
}


const mostrarLetras = (letra) => {

    for(let i = 0; i < divsPalavra.length; i++){
        if(divsPalavra[i].innerHTML === letra){
            divsPalavra[i].className = "palavra"
        }
    }
    verificarVitoria()
}


const pegarValorTeclado = (event) => {
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
atribuirValoresDoTeclado() 
