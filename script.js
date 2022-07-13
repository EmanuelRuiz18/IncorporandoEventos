class Producto {
    constructor(nombre, marca, modelo, precio, stock){
        this._nombre = nombre;
        this._marca = marca;
        this._modelo = modelo;
        this._precio = precio;
    }
    modificarPrecio(nuevoPrecio) {
        this._precio = nuevoPrecio;
    }
    modificarModelo(nuevoModelo) {
        this._modelo = nuevoModelo;
    }
    modificarNombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }
}

const productos = [];

const usb = new Producto('usb', 'generico', '1.1', 100);
const motherboard = new Producto('motherboard', 'Gigabyte', 'B450', 2000);
const ssd = new Producto('ssd 512gb', 'Adata', '2.0', 900);
const hdd = new Producto('ssd 1tb', 'seagate', '2.0', 800);
productos.push(usb, motherboard, ssd,hdd);

alert('Bienvenido a TecnoSoluciones');
let nombre = prompt('Ingrese su nombre');

while ((nombre == '') & (nombre !== '')) {
    nombre = prompt('Ingrese su nombre');
}

let bienvenida = document.getElementById('container');
bienvenida.innerHTML = `<h2>Bienvenido a TecnoSoluciones</h2> <p>Es un placer verte de nuevo, ${nombre}.</p>`;
bienvenida.className = 'titulo';
console.log(bienvenida.innerHTML);

/* let agregarProductos = parseInt(prompt('Desea agregar productos? \n1.Si\n2.No'));
while(agregarProductos === 1) {
    let nombreProducto = prompt('Ingrese el nombre del producto');
    let marcaProducto = prompt('Ingrese la marca del producto');
    let modeloProducto = prompt('Ingrese el modelo del producto');
    let precioProducto = prompt('Ingrese el precio del producto');
    let concatenar = new Producto(nombreProducto, marcaProducto, modeloProducto, precioProducto);
    productos.push(concatenar);
    agregarProductos = parseInt(prompt('Desea agregar productos? \n1.Si\n2.No'));
}
 */
const mostrarFormulario = () => {
    let contenedorInputs = document.getElementById('inputsProducto');
    contenedorInputs.innerHTML = `  <form id='formularioProducto'>
                                        <label for="nombreFormulario">Nombre</label>
                                        <input type='text' id='nombreFormulario' placeholder='Ingrese nombre'>
                                        <label for="marcaFormulario">Marca</label>
                                        <input type='text' id='marcaFormulario' placeholder='Ingrese marca'>
                                        <label for="modeloFormulario">Modelo</label>
                                        <input type='text' id='modeloFormulario' placeholder='Ingrese modelo'>      
                                        <label for="precioFormulario">Precio</label>
                                        <input type='text' id='precioProducto' placeholder='Ingrese precio'>

                                        <input type="submit" id="enviarFormularioProducto" value="Agregar Producto">
                                    <form>`;
    let formularioProducto = document.getElementById('formularioProducto');
    formularioProducto.style.display = 'flex';
    formularioProducto.style.flexDirection = 'column';
    formularioProducto.style.gap = '10px'
}
let botonProducto = document.getElementById('agregarProducto');

botonProducto.onclick = () => {
    mostrarFormulario();        /* Se agrega evento cuando se le da click al boton */
}

let botonInventario = document.getElementById("consultarProductos");
botonInventario.onclick = () => {
    console.log('Se hizo click en el boton2');
}
botonInventario.addEventListener("click", () => {
    console.log('Se hizo click en el boton 2 alv');
});

