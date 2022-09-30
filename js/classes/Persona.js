class Persona {
    constructor(id, nombre, apellido, edad) {
        this.id = parseInt(id);
        this.nombre = nombre ? nombre : "default";
        this.apellido = apellido ? apellido : "default";
        this.edad = parseInt(edad ? edad : 0);
    }

    toString = () => {
        return `id: ${this.id} - nombre: ${this.nombre} - apellido: ${this.apellido} - edad: ${this.edad}`;
    }
}