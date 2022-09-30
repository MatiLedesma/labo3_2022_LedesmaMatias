const datosString = '[{"id":1, "nombre":"Clark", "apellido":"Kent", "edad":45, "alterego":"Superman", "ciudad":"Metropolis","publicado":2002},{"id":2, "nombre":"Bruce", "apellido":"Wayne", "edad":35, "alterego":"Batman", "ciudad":"Gotica","publicado":20012},{"id":3, "nombre":"Bart", "apellido":"Alen", "edad":30, "alterego":"Flash", "ciudad":"Central","publicado":2017},{"id":4, "nombre":"Lex", "apellido":"Luthor", "edad":18, "enemigo":"Superman", "robos":500,"asesinatos":7},{"id":5, "nombre":"Harvey", "apellido":"Dent", "edad":20, "enemigo":"Batman", "robos":750,"asesinatos":2},{"id":666, "nombre":"Celina", "apellido":"kyle", "edad":23, "enemigo":"Batman", "robos":25,"asesinatos":1}]';

const data_form = document.getElementById("data");
const abm_form = document.getElementById("abm");
const abm_id = document.getElementById("abm_id");
const abm_name = document.getElementById("abm_name");
const abm_surname = document.getElementById("abm_surname");
const abm_age = document.getElementById("abm_age");
const abm_type = document.getElementById("abm_type");
const abm_alterEgo = document.getElementById("abm_alterEgo");
const abm_ciudad = document.getElementById("abm_ciudad");
const abm_publicado = document.getElementById("abm_publicado");
const abm_enemigo = document.getElementById("abm_enemigo");
const abm_robos = document.getElementById("abm_robos");
const abm_asesinatos = document.getElementById("abm_asesinatos");

const filter = document.getElementById('filtrar');
const tr_root = document.getElementById("tr_root");
const p_id = document.getElementById("p_id");
const p_name = document.getElementById("p_name");
const p_surname = document.getElementById("p_surname");
const p_age = document.getElementById("p_age");
const p_alterego = document.getElementById("p_alterego");
const p_ciudad = document.getElementById("p_ciudad");
const p_publicado = document.getElementById("p_publicado");
const p_enemigo = document.getElementById("p_enemigo");
const p_robos = document.getElementById("p_robos");
const p_asesinatos = document.getElementById("p_asesinatos");

const h_id = document.querySelector('.h_id');
const h_name = document.querySelector('.h_name');
const h_surname = document.querySelector('.h_surname');
const h_age = document.querySelector('.h_age');
const h_alterego = document.querySelector('.h_alterego');
const h_ciudad = document.querySelector('.h_ciudad');
const h_publicado = document.querySelector('.h_publicado');
const h_enemigo = document.querySelector('.h_enemigo');
const h_robos = document.querySelector('.h_robos');
const h_asesinatos = document.querySelector('.h_asesinatos');

const add_btn = document.getElementById("add_btn");
const alta_btn = document.getElementById("alta_btn");
const mod_btn = document.getElementById("mod_btn");
const del_btn = document.getElementById("del_btn");
const cancel_btn = document.getElementById("cancel_btn");

let personas = [];

const getData = () => {
    for (let persona of JSON.parse(datosString)) {
        if (persona.hasOwnProperty("id") && persona.hasOwnProperty("nombre")
            && persona.hasOwnProperty("apellido") && persona.hasOwnProperty("edad")) {
            if (persona.hasOwnProperty("alterego")) {
                let heroe = new Heroe(persona.id, persona.nombre, persona.apellido, persona.edad, persona.alterego, persona.ciudad, persona.publicado);
                personas.push(heroe);
            } else if (persona.hasOwnProperty("enemigo")) {
                let villano = new Villano(persona.id, persona.nombre, persona.apellido, persona.edad, persona.enemigo, persona.robos, persona.asesinatos);
                personas.push(villano);
            }
        }
    }
}

const loadData = (persona) => {
    tr_root.innerHTML += `
        <tr>
            ${p_id.checked ? `<td id="td_id">${persona.id}</td>` : ''}
            ${p_name.checked ? `<td id="td_name">${persona.nombre}</td>` : ''}
            ${p_surname.checked ? `<td id="td_surname">${persona.apellido}</td>` : ''}
            ${p_age.checked ? `<td id="td_age">${persona.edad}</td>` : ''}
            ${p_alterego.checked ? `<td id="td_alterego">${persona.alterEgo ? persona.alterEgo : '--'}</td>` : ''}
            ${p_ciudad.checked ? `<td id="td_ciudad">${persona.ciudad ? persona.ciudad : '--'}</td>` : ''}
            ${p_publicado.checked ? `<td id="td_publicado">${persona.publicado >= 0 ? persona.publicado : '--'}</td>` : ''}
            ${p_enemigo.checked ? `<td id="td_enemigo">${persona.enemigo ? persona.enemigo : '--'}</td>` : ''}
            ${p_robos.checked ? `<td id="td_robos">${persona.robos ? persona.robos : '--'}</td>` : ''}
            ${p_asesinatos.checked ? `<td id="td_asesinatos">${persona.asesinatos ? persona.asesinatos : '--'}</td>` : ''}
        </tr>
    `;
}

window.onload = () => {
    getData();
    personasMap(filter.value);
    handleClickTable();
};

const personasMap = (filter) => {
    tr_root.innerHTML = '';
    personas.map((value) => {
        switch (filter) {
            case 'todos':
                loadData(value);
                break;
            case 'heroe':
                value.alterEgo && value.ciudad && value.publicado > 1940 && loadData(value);
                break;
            case 'villano':
                value.enemigo && value.robos && value.asesinatos && loadData(value);
                break;
        }
    });
}

filter.addEventListener('change', () => {
    personasMap(filter.value);
});

//toggle class to hidden and remove hidden
const toggleHE = () => {
    const heroe = document.querySelector(".heroe");
    const villano = document.querySelector(".villano");
    heroe.classList.toggle("hidden");
    villano.classList.toggle("hidden");

}
abm_type.addEventListener("change", () => {
    toggleHE();
});

p_id.addEventListener('click', (e) => {
    if (p_id.checked) {
        h_id.style.removeProperty("display");
        personasMap(filter.value);
    } else {
        h_id.style.display = 'none';
        personasMap(filter.value);
    }
});
p_name.addEventListener('click', (e) => {
    if (p_name.checked) {
        h_name.style.removeProperty("display");
        personasMap(filter.value);
    } else {
        h_name.style.display = 'none';
        personasMap(filter.value);
    }
});
p_surname.addEventListener('click', (e) => {
    if (p_surname.checked) {
        h_surname.style.removeProperty("display");
        personasMap(filter.value);
    } else {
        h_surname.style.display = 'none';
        personasMap(filter.value);
    }
});
p_age.addEventListener('click', (e) => {
    if (p_age.checked) {
        h_age.style.removeProperty("display");
        personasMap(filter.value);
    } else {
        h_age.style.display = 'none';
        personasMap(filter.value);
    }
});
p_alterego.addEventListener('click', (e) => {
    if (p_alterego.checked) {
        h_alterego.style.removeProperty("display");
        personasMap(filter.value);
    } else {
        h_alterego.style.display = 'none';
        personasMap(filter.value);
    }
});
p_ciudad.addEventListener('click', (e) => {
    if (p_ciudad.checked) {
        h_ciudad.style.removeProperty("display");
        personasMap(filter.value);
    } else {
        h_ciudad.style.display = 'none';
        personasMap(filter.value);
    }
});
p_publicado.addEventListener('click', (e) => {
    if (p_publicado.checked) {
        h_publicado.style.removeProperty("display");
        personasMap(filter.value);
    } else {
        h_publicado.style.display = 'none';
        personasMap(filter.value);
    }
});
p_enemigo.addEventListener('click', (e) => {
    if (p_enemigo.checked) {
        h_enemigo.style.removeProperty("display");
        personasMap(filter.value);
    } else {
        h_enemigo.style.display = 'none';
        personasMap(filter.value);
    }
});
p_robos.addEventListener('click', (e) => {
    if (p_robos.checked) {
        h_robos.style.removeProperty("display");
        personasMap(filter.value);
    } else {
        h_robos.style.display = 'none';
        personasMap(filter.value);
    }
});
p_asesinatos.addEventListener('click', (e) => {
    if (p_asesinatos.checked) {
        h_asesinatos.style.removeProperty("display");
        personasMap(filter.value);
    } else {
        h_asesinatos.style.display = 'none';
        personasMap(filter.value);
    }
});

add_btn.addEventListener("click", (e) => {
    data_form.style.display = 'none';
    abm_form.style.display = 'block';
    mod_btn.classList.toggle('hidden');
    del_btn.classList.toggle('hidden');
});
cancel_btn.addEventListener("click", (e) => {
    data_form.style.display = 'block';
    abm_form.style.display = 'none';
    checkToggleValue();
});


const checkToggleValue = () => {
    alta_btn.classList.contains('hidden') &&
    alta_btn.classList.toggle('hidden');
    mod_btn.classList.contains('hidden') &&
    mod_btn.classList.toggle('hidden');
    del_btn.classList.contains('hidden') &&
    del_btn.classList.toggle('hidden');
}

alta_btn.addEventListener("click", () => {
    let heroe;
    let villano;
    checkToggleValue();

    switch (abm_type.value) {
        case 'heroe':
            heroe = new Heroe(
                abm_id.value, abm_name.value, abm_surname.value, abm_age.value,
                abm_alterEgo.value, abm_ciudad.value, abm_publicado.value);
            personas.push(heroe);
            abm_id.value = "";
            abm_name.value = "";
            abm_surname.value = "";
            abm_age.value = "";
            abm_alterEgo.value = "";
            abm_ciudad.value = "";
            abm_publicado.value = "";
            break;
        case 'villano':
            villano = new Villano(
                abm_id.value, abm_name.value, abm_surname.value, abm_age.value,
                abm_enemigo.value, abm_robos.value, abm_asesinatos.value);
            personas.push(villano);
            abm_id.value = "";
            abm_name.value = "";
            abm_surname.value = "";
            abm_age.value = "";
            abm_enemigo.value = "";
            abm_robos.value = "";
            abm_asesinatos.value = "";
            break;
    }

    personasMap(filter.value);
    data_form.style.display = 'block';
    abm_form.style.display = 'none';
});

mod_btn.addEventListener("click", () => {
    checkToggleValue();
    switch (abm_type.value) {
        case 'heroe':
            personas.filter((value, index) => {
                if (value.id === parseInt(abm_id.value)) {
                    personas[index] = {
                        id: abm_id.value ? abm_id.value : personas[index].id,
                        nombre: abm_name.value ? abm_name.value : personas[index].nombre,
                        apellido: abm_surname.value ? abm_surname.value : personas[index].apellido,
                        edad: abm_age.value ? abm_age.value : personas[index].edad,
                        alterEgo: abm_alterEgo.value ? abm_alterEgo.value : personas[index].alterEgo,
                        ciudad: abm_ciudad.value ? abm_ciudad.value : personas[index].ciudad,
                        publicado: abm_publicado.value ? abm_publicado.value : personas[index].publicado
                    };
                }
            });
            abm_id.value = "";
            abm_name.value = "";
            abm_surname.value = "";
            abm_age.value = "";
            abm_alterEgo.value = "";
            abm_ciudad.value = "";
            abm_publicado.value = "";
            break;
        case 'villano':
            personas.filter((value, index) => {
                if (value.id === parseInt(abm_id.value)) {
                    console.log('a')
                    personas[index] = {
                        id: abm_id.value ? abm_id.value : personas[index].id,
                        nombre: abm_name.value ? abm_name.value : personas[index].nombre,
                        apellido: abm_surname.value ? abm_surname.value : personas[index].apellido,
                        edad: abm_age.value ? abm_age.value : personas[index].edad,
                        enemigo: abm_enemigo.value ? abm_enemigo.value : personas[index].enemigo,
                        robos: abm_robos.value ? abm_robos.value : personas[index].robos,
                        asesinatos: abm_asesinatos.value ? abm_asesinatos.value : personas[index].asesinatos
                    };
                }
            });
            abm_id.value = "";
            abm_name.value = "";
            abm_surname.value = "";
            abm_age.value = "";
            abm_enemigo.value = "";
            abm_robos.value = "";
            abm_asesinatos.value = "";
            break;
    }

    personasMap(filter.value);
    data_form.style.display = 'block';
    abm_form.style.display = 'none';
});

del_btn.addEventListener("click", () => {
    checkToggleValue();
    let aux = [];
    personas.map((value) => {
        if (value.id !== parseInt(abm_id.value)) {
            aux.push(value);
        }
    });
    personas = aux;
    personasMap(filter.value);
    data_form.style.display = 'block';
    abm_form.style.display = 'none';
});

// table filter 

h_id.addEventListener('click', () => {
    personas.sort((a, b) => { return a.id - b.id });
    personasMap(filter.value);
});
h_name.addEventListener('click', () => {
    personas.sort((a, b) => a.nombre.localeCompare(b.nombre));
    personasMap(filter.value);
});
h_surname.addEventListener('click', () => {
    personas.sort((a, b) => a.apellido.localeCompare(b.apellido));
    personasMap(filter.value);
});
h_age.addEventListener('click', () => {
    personas.sort((a, b) => { return a.edad - b.edad });
    personasMap(filter.value);
});
h_alterego.addEventListener('click', () => {
    personas.sort((a, b) => a.alterEgo.localeCompare(b.alterEgo));
    personasMap(filter.value);
});
h_ciudad.addEventListener('click', () => {
    personas.sort((a, b) => a.ciudad.localeCompare(b.ciudad));
    personasMap(filter.value);
});
h_publicado.addEventListener('click', () => {
    personas.sort((a, b) => { return a.publicado - b.publicado });
    personasMap(filter.value);
});
h_enemigo.addEventListener('click', () => {
    personas.sort((a, b) => a.enemigo.localeCompare(b.enemigo));
    personasMap(filter.value);
});
h_robos.addEventListener('click', () => {
    personas.sort((a, b) => { return a.robos - b.robos });
    personasMap(filter.value);
});
h_asesinatos.addEventListener('click', () => {
    personas.sort((a, b) => { return a.asesinatos - b.asesinatos });
    personasMap(filter.value);
});


// table click 
window.addEventListener('click', (e) => {
    e.preventDefault();
    handleClickTable();
})
const handleClickTable = () => {
    for (var i = 0; i < tr_root.rows.length; i++) {
        for (var j = 0; j < tr_root.rows[i].cells.length; j++) {
            tr_root.rows[i].cells[j].onclick = function () {
                personas.filter((value, index) => { // filtrar por id
                    if (value.id === parseInt(this.innerText) /*|| value.nombre === this.innerText 
                || value.apellido === this.innerText || value.edad === parseInt(this.innerText) ||
                value.ciudad === this.innerText || value.publicado === this.innerText || 
                value.publicado === parseInt(this.innerText) || value.enemigo === this.innerText ||
                value.robos === parseInt(this.innerText) || value.asesinatos === parseInt(this.innerText)*/) {
                        data_form.style.display = 'none';
                        abm_form.style.display = 'block';
                        alta_btn.classList.toggle('hidden');
                        abm_id.value = value.id;
                        abm_name.value = value.nombre;
                        abm_surname.value = value.apellido;
                        abm_age.value = value.edad;
                        if (value.alterEgo) {
                            if (abm_type.value !== 'heroe') toggleHE();
                            abm_type.value = 'heroe';
                            abm_alterEgo.value = value.alterEgo;
                            abm_ciudad.value = value.ciudad;
                            abm_publicado.value = value.publicado;
                        } else {
                            if (abm_type.value !== 'villano') toggleHE();
                            abm_type.value = 'villano';
                            abm_enemigo.value = value.enemigo;
                            abm_robos.value = value.robos;
                            abm_asesinatos.value = value.asesinatos;
                        }
                    }
                });
            };
        }
    }
}

// calcular edad promedio

document.getElementById('calculate_average').addEventListener('click', () => {
    let acum = 0;
    personas.map(val=> {
        acum += val.edad;
    })
    document.getElementById('av_age').value = acum / personas.length;
})