async function cargarTiposConsulta() {
    try {
      //  console.log("Estoy en cargar tipos consulta");

        const response = await fetch('/tipoconsulta');
        const tiposConsulta = await response.json();
   //console.log(tiposConsulta);

        const tiposConsultaDiv = document.querySelector('.tipos-consulta');

        tiposConsulta.forEach(tipo => {
            const label = document.createElement('label');
            label.textContent = tipo.descripcion;

            const input = document.createElement('input');
            input.type = 'checkbox';
            input.name = 'tipoConsulta';
            input.value = tipo.id;


            tiposConsultaDiv.appendChild(input);
            tiposConsultaDiv.appendChild(label);

        });
    } catch (error) {
        console.error('Error al cargar los tipos de consulta:', error);
    }
}

document.addEventListener('DOMContentLoaded', cargarTiposConsulta);
