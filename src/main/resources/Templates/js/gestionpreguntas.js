function showForm(action) {
    const formContainer = document.getElementById('formContainer');
    let formHTML = '';

    if (action === 'crear' || action === 'actualizar') {
        formHTML = `
            <form onsubmit="return false;">
                <input type="text" placeholder="ID de la encuesta" required>
                <input type="text" placeholder="Número del capítulo" required>
                <input type="text" placeholder="Número de la pregunta" required>
                <input type="text" placeholder="Texto de la pregunta" required>
                <input type="text" placeholder="Comentario de la pregunta" required>
                
                <label for="tipoRespuesta">Tipo de respuesta:</label>
                <select id="tipoRespuesta" required>
                    <option value="">-- Selecciona un tipo de respuesta --</option>
                    <option value="abierta">Respuesta Abierta</option>
                    <option value="unica_seleccion">Única Selección</option>
                    <option value="seleccion_multiple">Selección Múltiple</option>
                </select>
                
                <button onclick="guardarCambios('${action}')">GUARDAR CAMBIOS</button>
            </form>
        `;
    } else if (action === 'eliminar') {
        formHTML = `
            <form onsubmit="return false;">
                <input type="text" placeholder="ID de la encuesta" required>
                <input type="text" placeholder="Número del capítulo" required>
                <input type="text" placeholder="Número de la pregunta" required>
                <button onclick="guardarCambios('${action}')">GUARDAR CAMBIOS</button>
            </form>
        `;
    }

    formContainer.innerHTML = formHTML;
}

function guardarCambios(action) {
    console.log(`Acción: ${action}`);
    const formElements = document.querySelector('form').elements;
    console.log('Datos del formulario:', formElements);
    alert('Cambios guardados');
}
