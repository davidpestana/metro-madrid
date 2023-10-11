"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var render_1 = require("./actions/render");
var accion_1 = require("./filters/accion");
var misPeliculas = [
    { titulo: 'Scary movie', genero: 'comedia' },
    { titulo: 'La jungla de cristal', genero: 'accion' },
    { titulo: 'Los mercenarios', genero: 'accion' },
    { titulo: 'Salvar al soldado Ryan', genero: 'belica' }
];
misPeliculas.filter(accion_1.accion).map(render_1.render);
// definir el tipo cliente con nombre y edad ( string , numero )
// definir una funcion filtro para mayores de edad que reciba un cliente
// definir una funcion que dado una coleccion de clientes "notifica"
