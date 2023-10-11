let numeros: Array<number>;
let promesaDeNumero = Promise<string>;

const dameItemAleatorio = <T>(items: Array<T>): T => {
    let posicion = Math.floor(Math.random() * items.length);
    return items[posicion];
}

const dameNumero = (numeros:number[]):number => {
    let posicion = Math.floor(Math.random() * numeros.length);
    return numeros[posicion];
}

const dameCadena = (cadenas:string[]):string => {
    let posicion = Math.floor(Math.random() * cadenas.length);
    return cadenas[posicion];
}



let itemNum = dameItemAleatorio([1, 3, 5, 2]);


let itemFamiliaGot = dameItemAleatorio(['Stark', 'Lannister', 'Baratheon', 'Targaryen', 'Martell', 'Greyjoy']);




interface Inventario<T> {
    addItem: (item: T) => void;
    getItemsInventario: () => Array<T>;
}
interface Portatil {
    marca: string;
}

interface SmartPhone {
    marca: string;
    so: string
}
class Catalogo<T> implements Inventario<T> {
    private catalogo = new Array<T>();
    addItem(item: T) {
        this.catalogo.push(item);
    }
    getItemsInventario(): Array<T> {
        return this.catalogo;
    }
}
    

let catalogoPortatil = new Catalogo<Portatil>();

catalogoPortatil.addItem({marca: 'HP'});
catalogoPortatil.addItem({marca: 'Lenovo'});
let items = catalogoPortatil.getItemsInventario();


let catalogoSmartPhone = new Catalogo<SmartPhone>();
catalogoSmartPhone.addItem({marca: 'apple', so: 'ios'})
catalogoSmartPhone.addItem({marca: 'xiaomi', so: 'android'})