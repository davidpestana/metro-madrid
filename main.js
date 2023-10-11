var numeros;
var promesaDeNumero = (Promise);
var dameItemAleatorio = function (items) {
    var posicion = Math.floor(Math.random() * items.length);
    return items[posicion];
};
var dameNumero = function (numeros) {
    var posicion = Math.floor(Math.random() * numeros.length);
    return numeros[posicion];
};
var dameCadena = function (cadenas) {
    var posicion = Math.floor(Math.random() * cadenas.length);
    return cadenas[posicion];
};
var itemNum = dameItemAleatorio([1, 3, 5, 2]);
var itemFamiliaGot = dameItemAleatorio(['Stark', 'Lannister', 'Baratheon', 'Targaryen', 'Martell', 'Greyjoy']);
var Catalogo = /** @class */ (function () {
    function Catalogo() {
        this.catalogo = new Array();
    }
    Catalogo.prototype.addItem = function (item) {
        this.catalogo.push(item);
    };
    Catalogo.prototype.getItemsInventario = function () {
        return this.catalogo;
    };
    return Catalogo;
}());
var catalogoPortatil = new Catalogo();
catalogoPortatil.addItem({ marca: 'HP' });
catalogoPortatil.addItem({ marca: 'Lenovo' });
var items = catalogoPortatil.getItemsInventario();
var catalogoSmartPhone = new Catalogo();
catalogoSmartPhone.addItem({ marca: 'apple', so: 'ios' });
catalogoSmartPhone.addItem({ marca: 'xiaomi', so: 'android' });
