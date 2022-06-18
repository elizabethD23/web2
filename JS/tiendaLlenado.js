export function llenarTienda(){

    let productosBD = [

        { foto: '../IMG/10.webp', nombre: "Batimovil Escala", precio: 150000,descripcion:""},
        { foto: '../IMG/11.webp', nombre: "Camiseta Batman", precio: 50000},
        { foto: 'img/tienda3.jpg', nombre: "Gorra Batman DC", precio: 25000},
        { foto: 'img/tienda4.jpg', nombre: "Termo Batman DC", precio: 35500 },
        { foto: 'img/tienda5.jpg', nombre: "Batman v Superman", precio: 95000 },
        { foto: 'img/tienda6.jpg', nombre: "Maleta Batman", precio: 250000 },
        { foto: 'img/tienda7.jpg', nombre: "Silla Batman PRO", precio: 1500000},
        { foto: 'img/tienda8.jpg', nombre: "Comics Batman", precio: 350000},
        { foto: 'img/tienda9.jpg', nombre: "Caja sorpresa", precio: 187000},
        { foto: 'img/tienda10.jpg', nombre: "Lonchera Batman", precio: 70000}
    
    ]

    let productosBD= [
        {foto: './IMG'}
    ]
    
    let fila=document.getElementById("fila")
    productosBD.forEach(function(producto){
        
    
        
        let columna=document.createElement("div")
        columna.classList.add("col")
    
      
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")
    
       
        let foto=document.createElement("img")
        foto.classList.add("card-img-top")
        foto.src=producto.foto
    
        
        let titulo=document.createElement("h4")
        titulo.classList.add("text-center")
        titulo.textContent=producto.nombre

        
        let boton=document.createElement("button")
        boton.setAttribute("type","button")
        boton.classList.add("btn","btn-warning","mx-4","mb-4")
        boton.textContent="ver producto"
        
        
        tarjeta.appendChild(foto)
        tarjeta.appendChild(titulo)
        tarjeta.appendChild(boton)
    
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    
    })
    


}
    