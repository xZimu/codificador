const areaTexto = document.querySelector(".ingrese-texto");
const textoDeEncriptacion = document.querySelector(".texto-encriptado");

function buttonEncrip(){
    const textoEncriptado = encriptar(areaTexto.value)
    textoDeEncriptacion.value = textoEncriptado;
    textoDeEncriptacion.style.backgroundImage = "none"
    areaTexto.value = ""
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for( let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}


function buttonDesencrip(){
    const textoEncriptado = desencriptar(areaTexto.value)
    textoDeEncriptacion.value = textoEncriptado;
    areaTexto.value = ""
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for( let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

function copiarArea() {
    
    textoDeEncriptacion.select();
    navigator.clipboard.writeText(textoDeEncriptacion.value)
    textoDeEncriptacion.value = "";
    alert("✅Texto Copiado")
}