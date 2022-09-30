class Heroe extends Persona {
    constructor(id, nombre, apellido, edad, alterEgo, ciudad, publicado) {
        super(id, nombre, apellido, edad);
        this.alterEgo = alterEgo ? alterEgo : "default";
        this.ciudad = ciudad ? ciudad : "default";
        this.publicado = parseInt(publicado > 1940 ? publicado : 1941);
    }

    toString = () => {
        return `${super.toString()} - alterEgo: ${this.alterEgo} - ciudad: ${this.ciudad} - publicado: ${this.publicado}`;
    }
}