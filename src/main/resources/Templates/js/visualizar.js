const surveys = {
    encuesta1: {
        nombre: "Encuesta de Satisfacción del Cliente",
        descripcion: "Esta encuesta tiene como objetivo medir la satisfacción de nuestros clientes con nuestros productos y servicios.",
        capitulos: [
            {
                numero: 1,
                titulo: "Información General",
                preguntas: [
                    {
                        texto: "¿Cuánto tiempo lleva utilizando nuestros productos/servicios?",
                        opciones: ["Menos de 1 mes", "1-6 meses", "6-12 meses", "Más de 1 año"]
                    },
                    {
                        texto: "¿Con qué frecuencia utiliza nuestros productos/servicios?",
                        opciones: ["Diariamente", "Semanalmente", "Mensualmente", "Ocasionalmente"]
                    }
                ]
            },
            {
                numero: 2,
                titulo: "Calidad del Producto/Servicio",
                preguntas: [
                    {
                        texto: "¿Cómo calificaría la calidad general de nuestros productos/servicios?",
                        opciones: ["Excelente", "Buena", "Regular", "Mala"]
                    },
                    {
                        texto: "¿Nuestros productos/servicios cumplen con sus expectativas?",
                        opciones: ["Siempre", "Casi siempre", "A veces", "Nunca"]
                    }
                ]
            }
        ]
    },
    encuesta2: {
        nombre: "Encuesta de Clima Laboral",
        descripcion: "Esta encuesta tiene como objetivo evaluar el ambiente de trabajo y la satisfacción de los empleados.",
        capitulos: [
            {
                numero: 1,
                titulo: "Satisfacción Laboral",
                preguntas: [
                    {
                        texto: "¿Qué tan satisfecho está con su trabajo actual?",
                        opciones: ["Muy satisfecho", "Satisfecho", "Neutral", "Insatisfecho", "Muy insatisfecho"]
                    },
                    {
                        texto: "¿Siente que su trabajo es valorado por la empresa?",
                        opciones: ["Siempre", "Casi siempre", "A veces", "Rara vez", "Nunca"]
                    }
                ]
            },
            {
                numero: 2,
                titulo: "Comunicación y Colaboración",
                preguntas: [
                    {
                        texto: "¿Cómo calificaría la comunicación dentro de su equipo de trabajo?",
                        opciones: ["Excelente", "Buena", "Regular", "Mala", "Muy mala"]
                    },
                    {
                        texto: "¿Con qué frecuencia colabora con otros departamentos?",
                        opciones: ["Diariamente", "Semanalmente", "Mensualmente", "Rara vez", "Nunca"]
                    }
                ]
            }
        ]
    }
};

const surveySelect = document.getElementById('surveySelect');
const visualizeBtn = document.getElementById('visualizeBtn');
const surveyContainer = document.getElementById('surveyContainer');

visualizeBtn.addEventListener('click', () => {
    const selectedSurvey = surveySelect.value;
    if (selectedSurvey) {
        displaySurvey(surveys[selectedSurvey]);
    } else {
        alert('Por favor, selecciona una encuesta.');
    }
});

function displaySurvey(survey) {
    let html = `
        <h2>${survey.nombre}</h2>
        <p>${survey.descripcion}</p>
    `;

    survey.capitulos.forEach(capitulo => {
        html += `
            <div class="chapter">
                <h3>Capítulo ${capitulo.numero}: ${capitulo.titulo}</h3>
        `;

        capitulo.preguntas.forEach((pregunta, index) => {
            html += `
                <div class="question">
                    <p><strong>Pregunta ${index + 1}:</strong> ${pregunta.texto}</p>
                    <ul>
            `;

            pregunta.opciones.forEach(opcion => {
                html += `<li>${opcion}</li>`;
            });

            html += `
                    </ul>
                </div>
            `;
        });

        html += `</div>`;
    });

    surveyContainer.innerHTML = html;
}
