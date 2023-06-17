const btn_encriptado= document.querySelector(".encriptar");
const btn_desencriptar= document.querySelector(".desencriptar");
const textoParaEncriptar= document.querySelector(".areaTexto");
const interiorCuadro=document.getElementById("interiorCuadro");
const resultadoTexto= document.getElementById("resultadoTexto");

interiorCuadro.style.display=("block")
resultadoTexto.style.display=("none")

function encriptar(){ 
  let textoEncriptado= textoParaEncriptar.value.replace(/\ba\b/gi, "ai").replace(/e/gi, "enter").replace(/\bi\b/gi, "imes").replace(/o/gi, "ober").replace(/u/gi, "ufat");
  document.querySelector("#myTextarea").value=textoEncriptado
  textoEncriptado.value
  interiorCuadro.style.display=("none")
  resultadoTexto.style.display=("block")
}
btn_encriptado.onclick=encriptar;


function desencriptar(){
  let textoDesencriptado= textoParaEncriptar.value.replace(/\bai\b/gi, "a").replace(/enter/gi, "e").replace(/\bimes\b/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u");
  document.querySelector("#myTextarea").value=textoDesencriptado;
  textoParaEncriptar.value
  interiorCuadro.style.display=("none")
  resultadoTexto.style.display=("block")
}
btn_desencriptar.onclick=desencriptar;

function btnCopiar(){
  let copiarTexto = document.querySelector("#myTextarea");
  copiarTexto.select();
  copiarTexto.setSelectionRange(0, 99999)
  document.execCommand("copy")
}


