class Villano extends Persona {
    constructor(id, nombre, apellido, edad, enemigo, robos, asesinatos) {
        super(id, nombre, apellido, edad);
        this.enemigo = enemigo ? enemigo : "default";
        this.robos = parseInt(robos > 0 ? robos : 1);
        this.asesinatos = parseInt(asesinatos > 0 ? asesinatos : 1);
    }

    toString = () => {
        return `${super.toString()} - enemigo: ${this.enemigo} - robos: ${this.robos} - asesinatos: ${this.asesinatos}`;
    }
}