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

document.getElementById('formConsultar').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
        const response = await fetch('/consultas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            alert('Tu consulta fue enviada!  - Nos comunicaremos con vos por email :)');
            window.location.href = '/pages/consultas.html';
        } else {
            alert('Tu consulta no pudo ser enviada. Por favor intentalo nuevamente.');
        }
    } catch (error) {
        console.error('Error al enviar el formulario:', error);
        alert('Hubo un error al enviar el formulario.');
    }
});






















