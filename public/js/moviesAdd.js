const qs= (element)=>document.querySelector(element); 

let titulo = qs('h1'); 
let section = qs('section');
let article = qs('article'); 
titulo.innerHTML += 'AGREGAR PELICULAS'; 
titulo.classList.add('titulo'); 
article.classList.add('fondoTransparente'); 
section.classList.add('fondoCRUD');

