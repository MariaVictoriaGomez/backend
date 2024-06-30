const selectProvincia = document.getElementById('provincia');

    async function cargarProvincias() {
        try {
            const response = await fetch('/provincias'); // Ruta donde obtienes las provincias
            const provincias = await response.json(); // Convertir la respuesta a JSON
            selectProvincia.innerHTML = '';

            provincias.forEach(provincia => {
                const option = document.createElement('option');
                option.value = provincia.idprovincia; // Valor del ID de la provincia
                option.textContent = provincia.nombreprovincia; // Nombre de la provincia
                selectProvincia.appendChild(option);
            });
        } catch (error) {
            console.error('Error al cargar provincias:', error);
        }
    }
