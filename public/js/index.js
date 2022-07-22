const qs= (element)=>document.querySelector(element); 
const qsa= (elements)=>document.querySelectorAll(elements); 




let main= qs('main'); 
let subtitulo= qs('.subtitulo'); 
let parrafos= qsa('p'); 
let link = qs('a'); 

let nombre = prompt('Ingrese su nombre'); 

if(nombre.length>0){
    
    subtitulo.innerHTML+= nombre; 
}else{
    nombre= "Invitado"
    subtitulo.innerHTML+= nombre; 
}
subtitulo.style.textTransform= "upperCase"; 

link.style.color= "#E51B3E"; 
let respuesta = confirm(`${nombre} desea agregar un fondo de pantalla`);

if(respuesta){
 qs('body').classList.add('fondo')
}
parrafos.forEach((parrafo,i)=>{
   if(i%2===0){
    parrafo.classList.add('destacadoPar')
   }else{
    parrafo.classList.add('destacadoImpar')
   }
})


main.style.display= "block"; 