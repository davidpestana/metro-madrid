import { render } from './actions/render';
import { accion } from './filters/accion';
import { belica } from './filters/belica';
import { peliculas } from './types/pelicula';

let misPeliculas: peliculas = [
    { titulo: 'Scary movie', genero: 'comedia'},
    { titulo: 'La jungla de cristal', genero: 'accion'},
    { titulo: 'Los mercenarios', genero: 'accion'},
    { titulo: 'Salvar al soldado Ryan', genero: 'belica'}
];


misPeliculas.filter(accion).map(render);


// definir el tipo cliente con nombre y edad ( string , numero )
// definir una funcion filtro para mayores de edad que reciba un cliente
// definir una funcion que dado una coleccion de clientes "notifica"

