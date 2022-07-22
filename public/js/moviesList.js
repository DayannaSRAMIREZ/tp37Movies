const qs= (element)=>document.querySelector(element); 
const qsa= (elements)=>document.querySelectorAll(elements); 

let body = qs('body');
let titulo = qs('h1'); 

let respuesta= confirm('¿Desea modo oscuro?'); 

if(respuesta){
    body.style.backgroundColor= '#7f7f7f'; 
    body.classList.add('fondoMoviesList')
}

titulo.innerHTML += "LISTADO DE PELÍCULAS"; 
titulo.style.color = "white"; 
titulo.style.backgroundColor= "teal"; 
titulo.style.padding= "20px"