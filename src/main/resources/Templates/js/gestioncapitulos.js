function showForm(action) {
    const formContainer = document.getElementById('formContainer');
    let formHTML = '';

    if (action === 'crear' || action === 'actualizar') {
        formHTML = `
            <form onsubmit="return false;">
                <input type="text" placeholder="ID de la encuesta" required>
                <input type="text" placeholder="Número del capítulo" required>
                <input type="text" placeholder="Título del capítulo" required>
                <button onclick="guardarCambios('${action}')">GUARDAR CAMBIOS</button>
            </form>
        `;
    } else if (action === 'eliminar') {
        formHTML = `
            <form onsubmit="return false;">
                <input type="text" placeholder="ID de la encuesta" required>
                <input type="text" placeholder="Número del capítulo" required>
                <button onclick="guardarCambios('${action}')">GUARDAR CAMBIOS</button>
            </form>
        `;
    }

    formContainer.innerHTML = formHTML;
}

function guardarCambios(action) {
    console.log(`Acción: ${action}`);
    console.log('Datos del formulario:', document.querySelector('form').elements);
    alert('Cambios guardados');
}
