async function cargarTiposConsulta() {
    try {
        const response = await fetch('/tipoconsulta');
        const tiposConsulta = await response.json();

        const tiposConsultaDiv = document.querySelector('.tipos-consulta');

        tiposConsulta.forEach(tipo => {
            const label = document.createElement('label');
            label.textContent = tipo.descripcion;

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'tipoConsulta';
            input.value = tipo.id;

            tiposConsultaDiv.appendChild(label);
            tiposConsultaDiv.appendChild(input);
            tiposConsultaDiv.appendChild(document.createElement('br'));
        });
    } catch (error) {
        console.error('Error al cargar los tipos de consulta:', error);
    }
}

document.addEventListener('DOMContentLoaded', cargarTiposConsulta);
