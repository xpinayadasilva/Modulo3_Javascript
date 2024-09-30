const precio = 400000;
const precioSpan=document.querySelector(".precio-unitario");
const cantidadSpan = document.querySelector(".cantidad");
const totalSpan=document.querySelector(".valor-total");
const sumarCantidad = document.getElementById('sumarCantidad');
const restarCantidad = document.getElementById('restarCantidad');

precioSpan.innerHTML=precio;
let cantidad=0;

function actualizarTotal(){
    totalSpan.innerHTML=cantidad * precio;    
}

sumarCantidad.addEventListener('click',() =>{
    cantidad=cantidad+1;
    cantidadSpan.innerHTML=cantidad;    
    actualizarTotal();
})

restarCantidad.addEventListener('click',() =>{
    if (cantidad>0){
        cantidad=cantidad-1;
        cantidadSpan.innerHTML=cantidad;
        actualizarTotal();
    }      
})

