"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var render_1 = require("./actions/render");
var genero_1 = require("./filters/genero");
var misPeliculas = [
    { titulo: 'Scary movie', genero: 'comedia' },
    { titulo: 'La jungla de cristal', genero: 'accion' },
    { titulo: 'Los mercenarios', genero: 'accion' },
    { titulo: 'Salvar al soldado Ryan', genero: 'belica' }
];
misPeliculas
    .filter(function (pelicula) { return (0, genero_1.genero)(pelicula); })
    .map(render_1.render);
(0, genero_1.limitador)(1);
