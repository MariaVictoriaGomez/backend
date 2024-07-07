const selectProvincia = document.getElementById('provincia');

    async function cargarProvincias() {
        try {
            const response = await fetch('/provincias');
            const provincias = await response.json();
            selectProvincia.innerHTML = '';

            provincias.forEach(provincia => {
                const option = document.createElement('option');
                option.value = provincia.idprovincia; 
                option.textContent = provincia.nombreprovincia;
                selectProvincia.appendChild(option);
            });
        } catch (error) {
            console.error('Error al cargar provincias:', error);
        }
    }
