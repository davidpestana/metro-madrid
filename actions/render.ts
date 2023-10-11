import { pelicula } from "../types/pelicula";

export const render = ({titulo}: pelicula): void => {
    console.log('la peli es', titulo);
}