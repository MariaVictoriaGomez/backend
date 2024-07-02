async function cargarTiposConsulta() {
    try {
        //  console.log("Estoy en cargar tipos consulta");

        const response = await fetch('/tipoconsulta');
        const tiposConsulta = await response.json();
        //console.log(tiposConsulta);

        const tiposConsultaDiv = document.querySelector('.tipos-consulta');

        tiposConsulta.forEach(tipo => {
            const div = document.createElement('div');
            const label = document.createElement('label');
            label.textContent = tipo.descripcion;
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.name = 'tipoConsulta';
            input.id = tipo.id;
            input.value = tipo.id;

            div.appendChild(input);
            div.appendChild(label);
            tiposConsultaDiv.appendChild(div);
        });
    } catch (error) {
        console.error('Error al cargar los tipos de consulta:', error);
    }
}

async function cargarNextConsultaId() {
    try {
        const response = await fetch('/consultas/next');
        const nextId = await response.json();
        const nextIdInput = document.getElementById('consulta-id');
        nextIdInput.value = parseInt(nextId);


    } catch (error) {
        console.error('Error al cargar los tipos de consulta:', error);
    }
}

function cargarFecha() {
    const dateInput = document.getElementById('fecha');
    const today = new Date().toLocaleDateString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' });
    dateInput.value = today;
}

function cargarDom() {
    cargarTiposConsulta();
    cargarFecha();
    cargarNextConsultaId();
}


document.addEventListener('DOMContentLoaded', cargarDom());























