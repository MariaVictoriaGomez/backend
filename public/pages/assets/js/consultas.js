document.addEventListener('DOMContentLoaded', (event) => {
    const dateInput = document.getElementById('fecha');
    const today = new Date().toLocaleDateString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' });
    dateInput.value = today;
});