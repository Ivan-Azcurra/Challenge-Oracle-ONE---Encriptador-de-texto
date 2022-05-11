const inputTexto = document.querySelector("#input-text");
const mensaje = document.querySelector("#input-text-area");
const botonEncriptar = document.querySelector("#btn-encriptar");
const botonDesencriptar = document.querySelector("#btn-desencriptar");
const ocultarLayout = document.querySelector("#resultado-final");
const mostrarResultado = document.querySelector("#area-resultado");


botonEncriptar.addEventListener("click", function(){
     ocultarLayout.classList.add("ocultar");
     const textoEncirptado = encriptar(inputTexto.value);
     mensaje.value = textoEncirptado;
     mostrarResultado.classList.remove("ocultar");
   

});

botonDesencriptar.addEventListener("click", function(){
    ocultarLayout.classList.add("ocultar");
    const textoDesencirptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencirptado;
    mostrarResultado.classList.remove("ocultar");
  
});


function encriptar(stringParaEncriptar) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringParaEncriptar = stringParaEncriptar.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringParaEncriptar.includes(matrizCodigo[i][0])){
            stringParaEncriptar = stringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringParaEncriptar; 
} 

function desencriptar(stringParaDesencriptar) {
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    stringParaDesencriptar = stringParaDesencriptar.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringParaDesencriptar.includes(matrizCodigo[i][0])){
            stringParaDesencriptar = stringParaDesencriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringParaDesencriptar; 
} 



// esto funciona hay que analizar el codigo. Estudiar matriz multidimensional