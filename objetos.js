// var miAuto = {
//     marca: "toyota",
//     modelo: "supra",
//     annio: "2020",
//     detalleAuto: function(){
//         console.log(`auto ${this.modelo} ${this.annio}`);
//     }
// };

// miAuto.detalleAuto();

// function auto(marca, modelo, annio) {
//   this.marca = marca;
//   this.modelo = modelo;
//   this.annio = annio;
// }

// var autoNuevo = new auto("honda","civic",2020);
// var autoNuevo2 = new auto("toyota","supra",2010);
// var autoNuevo3 = new auto("mcLaren","p1",2022);
// console.log(autoNuevo);
// console.log(autoNuevo2);
// console.log(autoNuevo3);

var articulos = [
    {nombre:"bici",costo:3000},
    {nombre:"tv",costo:2500},
    {nombre:"libro",costo:320},
    {nombre:"telefono",costo:10000},
    {nombre:"laptop",costo:20000},
    {nombre:"teclado",costo:500},
    {nombre:"audifono",costo:1700},

];

// var articulosFiltrados = articulos.filter(function(articulos){
//     return articulos.costo <=500;
// });

// var nombreArticulos = articulos.map(function(articulo){
//     return articulo.nombre
// })

// var encuentraArticulo = articulos.find(function(articulo){
//     return articulo.nombre === "laptop";
// })

// articulos.forEach(function(articulo){
//     console.log(articulo.nombre);
// })
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
})

console.log(articulosBaratos);