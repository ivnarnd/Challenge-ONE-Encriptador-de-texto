var botonEncriptar = document.querySelector("#btn-encriptar");
var botonDesenncriptar = document.querySelector("#btn-desencriptar");
var botonCopy = document.querySelector("#btn-copy");
var texto = document.querySelector("#input-texto");
var result = document.querySelector("#msg");
console.log(texto)
function encriptar(){
    /* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/
    event.preventDefault();
    var txt=texto.value;
    var enc=txt.replace(/e/gi,'enter').replace(/i/gi,'imes').replace(/a/gi,'ai').replace(/o/gi,'ober').replace(/u/gi,'ufat');
    result.value=enc;
    
}
function desencriptar(){
    
/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
    event.preventDefault();
    var txt=texto.value;
    var desEnc=txt.replace(/enter/gi,'e').replace(/imes/gi,'i').replace(/ai/gi,'a').replace(/ober/gi,'o').replace(/ufat/gi,'u');
    result.value=desEnc;
    
}
function copiar(){
    txt=result.value;
    navigator.clipboard.writeText(txt);
}
botonEncriptar.onclick=encriptar;
botonDesenncriptar.onclick=desencriptar;
botonCopy.onclick=copiar;


