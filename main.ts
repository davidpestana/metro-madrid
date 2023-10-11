import { render } from './actions/render';
import { genero, limitador, media } from './filters/genero';
import { peliculas } from './types/pelicula';

let misPeliculas: peliculas = [
    { titulo: 'Scary movie', genero: 'comedia'},
    { titulo: 'La jungla de cristal', genero: 'accion'},
    { titulo: 'Los mercenarios', genero: 'accion'},
    { titulo: 'Salvar al soldado Ryan', genero: 'belica'}
];


misPeliculas
    .filter((pelicula) => genero(pelicula))
    .map(render);



console.log('la media es', media(1 ,2));