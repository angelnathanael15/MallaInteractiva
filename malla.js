// Objeto de datos que define el pensum
const pensumData = {
    '1': [
        {
            period: 'Cuatrimestre 1',
            courses: [
                { code: 'ART E01-T', name: 'Electiva Arte', credits: 2, prerequisites: [], corequisites: [] },
                { code: 'BIO-111-T', name: 'Biología I', credits: 3, prerequisites: [], corequisites: ['BIO-111-P'] },
                { code: 'BIO-111-P', name: 'Lab. BIO-111', credits: 1, prerequisites: [], corequisites: ['BIO-111-T'] },
                { code: 'CHU-E01-T', name: 'Electiva de Ciencia y Humanismo', credits: 2, prerequisites: [], corequisites: [] },
                { code: 'HG-E01-T', name: 'Electiva de Historia y Sociedad Mundial', credits: 3, prerequisites: [], corequisites: [] },
                { code: 'LET-101-T', name: 'Español I', credits: 4, prerequisites: [], corequisites: [] },
                { code: 'MAT-110-T', name: 'Razonamiento Lógico-matemático', credits: 4, prerequisites: [], corequisites: [] }
            ]
        },
        {
            period: 'Cuatrimestre 2',
            courses: [
                { code: 'BIO-112-T', name: 'Biología II', credits: 3, prerequisites: ['BIO-111-T', 'BIO-111-P'], corequisites: ['BIO-112-P'] },
                { code: 'BIO-112-P', name: 'Lab. BIO-112', credits: 1, prerequisites: ['BIO-111-T', 'BIO-111-P'], corequisites: ['BIO-112-T'] },
                { code: 'DEP-E01-P', name: 'Electiva de Deporte', credits: 1, prerequisites: [], corequisites: [] },
                { code: 'LET-102-T', name: 'Español II', credits: 4, prerequisites: ['LET-101-T'], corequisites: [] },
                { code: 'MAT-118-T', name: 'Matemática para Ciencias', credits: 5, prerequisites: ['MAT-110-T'], corequisites: ['QMA-110-T', 'QMA-110-P'] },
                { code: 'QMA-110-T', name: 'Química I', credits: 3, prerequisites: ['MAT-110-T'], corequisites: ['MAT-118-T', 'QMA-110-P'] },
                { code: 'QMA-110-P', name: 'Lab. QMA-110', credits: 1, prerequisites: ['MAT-110-T'], corequisites: ['MAT-118-T', 'QMA-110-T'] }
            ]
        },
        {
            period: 'Cuatrimestre 3',
            courses: [
                { code: 'FIL-E11-T', name: 'Electiva de Filosofía', credits: 4, prerequisites: [], corequisites: [] },
                { code: 'FIS-201-T', name: 'Física I', credits: 3, prerequisites: ['MAT-118-T'], corequisites: ['FIS-201-P'] },
                { code: 'FIS-201-P', name: 'Lab. FIS 201', credits: 1, prerequisites: ['MAT-118-T'], corequisites: ['FIS-201-T'] },
                { code: 'HG-E02-T', name: 'Electiva de Historia y Sociedad Dominicana', credits: 3, prerequisites: [], corequisites: [] },
                { code: 'QMA-111-T', name: 'Química II', credits: 3, prerequisites: ['QMA-110-T', 'QMA-110-P'], corequisites: ['QMA-111-P'] },
                { code: 'QMA-111-P', name: 'Lab. QMA-111', credits: 1, prerequisites: ['QMA-110-T', 'QMA-110-P'], corequisites: ['QMA-111-T'] },
                { code: 'EES-123-T', name: 'Bioética y Fundamentos en Estomatología', credits: 1, prerequisites: [], corequisites: [] },
                { code: 'TSS-107-T', name: 'Sociología de la Salud', credits: 2, prerequisites: [], corequisites: [] }
            ]
        }
    ],
    '2': [
        {
            period: 'Cuatrimestre 1',
            courses: [
                { code: 'BIO-211-T', name: 'Biología Celular y Genética', credits: 3, prerequisites: ['BIO-112-T', 'BIO-112-P'], corequisites: ['BIO-211-P'] },
                { code: 'BIO-211-P', name: 'Lab. BIO-211', credits: 1, prerequisites: ['BIO-112-T', 'BIO-112-P'], corequisites: ['BIO-211-T'] },
                { code: 'ILE-205-T', name: 'Inglés 1', credits: 4, prerequisites: [], corequisites: [] },
                { code: 'LIT-E01-T', name: 'Electiva de Literatura', credits: 4, prerequisites: [], corequisites: [] },
                { code: 'QMA-214-T', name: 'Introducción a la Química Orgánica', credits: 3, prerequisites: ['QMA-111-T', 'QMA-111-P'], corequisites: ['QMA-214-P'] },
                { code: 'QMA-214-P', name: 'Lab. QMA-214', credits: 1, prerequisites: ['QMA-111-T', 'QMA-111-P'], corequisites: ['QMA-214-T'] }
            ]
        },
        {
            period: 'Cuatrimestre 2',
            courses: [
                { code: 'BIO-224-T', name: 'Introducción a la Anatomía', credits: 2, prerequisites: ['BIO-112-T', 'BIO-112-P'], corequisites: [] },
                { code: 'BIO-225-T', name: 'Introducción a la Fisiología', credits: 2, prerequisites: ['FIS-201-T', 'FIS-201-P'], corequisites: ['BIO-224-T'] },
                { code: 'ET-XXX-T', name: 'Fe Cristiana y Antropología', credits: 2, prerequisites: [], corequisites: [] },
                { code: 'ILE-303-T', name: 'Inglés II', credits: 4, prerequisites: ['ILE-205-T'], corequisites: [] },
                { code: 'QMA-XXX-T', name: 'Bioquímica para Estomatología', credits: 2, prerequisites: ['QMA-214-T', 'QMA-214-P'], corequisites: [] },
                { code: 'EES-E01-T', name: 'Electiva Estomatológica I', credits: 3, prerequisites: [], corequisites: [] }
            ]
        },
        {
            period: 'Cuatrimestre 3',
            courses: [
                { code: 'BIO-231-T', name: 'Microbiología General', credits: 2, prerequisites: ['BIO-112-T', 'BIO-112-P'], corequisites: ['BIO-231-P'] },
                { code: 'BIO-231-P', name: 'Lab. BIO-231', credits: 1, prerequisites: ['BIO-112-T', 'BIO-112-P'], corequisites: ['BIO-231-T'] },
                { code: 'CN-E01-T', name: 'Electiva de Ciencia Ambiental', credits: 3, prerequisites: [], corequisites: ['CN-E01-P'] },
                { code: 'CN-E01-P', name: 'Lab. Electiva de Ciencia Ambiental', credits: 1, prerequisites: [], corequisites: ['CN-E01-T'] },
                { code: 'ILE-305-T', name: 'Inglés III', credits: 4, prerequisites: ['ILE-303-T'], corequisites: [] },
                { code: 'TSS-230-T', name: 'Fundamentos Metodología de Investigación', credits: 3, prerequisites: ['MAT-118-T'], corequisites: [] },
                { code: 'EES-223-T', name: 'Bioseguridad y Ergonomía', credits: 2, prerequisites: [], corequisites: [] },
                { code: 'EES-253-T', name: 'Inmunología Básica', credits: 2, prerequisites: ['BIO-231-T', 'BIO-231-P'], corequisites: [] }
            ]
        }
    ],
    '3': [
        {
            period: 'Cuatrimestre 1',
            courses: [
                { code: 'EES-331-T', name: 'Anatomía e Histología de Cabeza y Cuello', credits: 4, prerequisites: ['BIO-224-T'], corequisites: ['EES-361-T'] },
                { code: 'EES-381-T', name: 'Fisiología del Sistema Estomatognático', credits: 1, prerequisites: ['BIO-225-T'], corequisites: [] },
                { code: 'EES-351-T', name: 'Genética y Embriología Craneofacial', credits: 2, prerequisites: ['BIO-211-T', 'BIO-211-P'], corequisites: [] },
                { code: 'EES-341-T', name: 'Patología Oral I', credits: 2, prerequisites: ['BIO-231-T', 'BIO-231-P'], corequisites: [] },
                { code: 'EES-361-T', name: 'Anatomía Bucodental y Oclusión', credits: 2, prerequisites: ['BIO-224-T'], corequisites: ['EES-331-T', 'EES-371-T'] },
                { code: 'EES-321-T', name: 'Estomatología y Sociedad', credits: 1, prerequisites: ['TSS-107-T'], corequisites: [] },
                { code: 'EES-311-T', name: 'Psicología Aplicada', credits: 1, prerequisites: [], corequisites: [] },
                { code: 'EES-371-T', name: 'Cariología', credits: 1, prerequisites: [], corequisites: ['EES-361-T'] }
            ]
        },
        {
            period: 'Cuatrimestre 2',
            courses: [
                { code: 'EES-382-T', name: 'Semiología Clínica', credits: 1, prerequisites: [], corequisites: [] },
                { code: 'EES-362-T', name: 'Imagenología I', credits: 2, prerequisites: ['FIS-201-T', 'FIS-201-P'], corequisites: [] },
                { code: 'EES-322-T', name: 'Materiales en Estomatología I', credits: 3, prerequisites: [], corequisites: [] },
                { code: 'EES-312-T', name: 'Farmacología General y Anestesia Local', credits: 2, prerequisites: ['QMA-214-T', 'QMA-214-P'], corequisites: [] },
                { code: 'EES-332-T', name: 'Endodoncia I', credits: 2, prerequisites: ['EES-361-T', 'EES-341-T'], corequisites: [] },
                { code: 'EES-342-T', name: 'Cirugía I', credits: 2, prerequisites: ['EES-361-T', 'EES-341-T'], corequisites: [] },
                { code: 'EES-372-T', name: 'Operatoria Dental', credits: 2, prerequisites: ['EES-361-T', 'EES-371-T'], corequisites: [] },
                { code: 'EES-352-T', name: 'Periodoncia I', credits: 2, prerequisites: ['EES-361-T', 'EES-341-T'], corequisites: [] }
            ]
        },
        {
            period: 'Cuatrimestre 3',
            courses: [
                { code: 'EES-313-P', name: 'Clínica Integrada I', credits: 8, prerequisites: ['EES-362-T', 'EES-382-T', 'EES-332-T', 'EES-372-T', 'EES-342-T', 'EES-352-T'], corequisites: [] },
                { code: 'ILE-493-T', name: 'Inglés para Salud', credits: 4, prerequisites: ['ILE-305-T'], corequisites: [] },
                { code: 'EES-333-T', name: 'Endodoncia II', credits: 1, prerequisites: ['EES-332-T'], corequisites: [] },
                { code: 'EES-363-T', name: 'Rehabilitación y Estética I', credits: 1, prerequisites: ['EES-372-T'], corequisites: [] },
                { code: 'EES-353-T', name: 'Periodoncia II', credits: 1, prerequisites: ['EES-352-T'], corequisites: [] },
                { code: 'EES-393-T', name: 'Investigación en Estomatología I', credits: 1, prerequisites: ['TSS-230-T'], corequisites: ['EES-321-T'] }
            ]
        }
    ],
    '4': [
        {
            period: 'Cuatrimestre 1',
            courses: [
                { code: 'EES-431-T', name: 'Urgencias en Salud', credits: 2, prerequisites: ['EES-331-T', 'EES-381-T'], corequisites: [] },
                { code: 'EES-481-T', name: 'Fisiopatología de la Oclusión', credits: 1, prerequisites: ['EES-361-T'], corequisites: [] },
                { code: 'EES-411-P', name: 'Clínica Integrada II', credits: 8, prerequisites: ['EES-313-P'], corequisites: [] },
                { code: 'EES-441-T', name: 'Cirugía II', credits: 2, prerequisites: ['EES-342-T'], corequisites: [] },
                { code: 'EES-421-T', name: 'Salud Comunitaria I', credits: 1, prerequisites: [], corequisites: [] },
                { code: 'EES-451-T', name: 'Farmacología Aplicada', credits: 2, prerequisites: ['EES-312-T'], corequisites: [] },
                { code: 'EES-461-T', name: 'Rehabilitación y Estética II', credits: 1, prerequisites: ['EES-363-T'], corequisites: [] }
            ]
        },
        {
            period: 'Cuatrimestre 2',
            courses: [
                { code: 'EES-412-P', name: 'Clínica Integrada III', credits: 8, prerequisites: ['EES-411-P'], corequisites: [] },
                { code: 'EES-482-T', name: 'Ortodoncia', credits: 1, prerequisites: ['EES-481-T'], corequisites: [] },
                { code: 'EES-472-T', name: 'Odontopediatría I', credits: 2, prerequisites: ['EES-311-T'], corequisites: [] },
                { code: 'EES-422-T', name: 'Materiales en Estomatología II', credits: 1, prerequisites: ['EES-322-T', 'EES-352-T'], corequisites: [] },
                { code: 'EES-462-T', name: 'Rehabilitación y Estética III', credits: 2, prerequisites: ['EES-461-T'], corequisites: [] },
                { code: 'EES-492-T', name: 'Investigación en Estomatología II', credits: 1, prerequisites: ['EES-393-T'], corequisites: [] }
            ]
        },
        {
            period: 'Cuatrimestre 3',
            courses: [
                { code: 'EES-433-T', name: 'Atención en Paciente Adulto y Geriátrico', credits: 2, prerequisites: ['EES-431-T'], corequisites: [] },
                { code: 'EES-413-P', name: 'Clínica Integrada IV', credits: 8, prerequisites: ['EES-412-P', 'EES-472-T'], corequisites: [] },
                { code: 'EES-443-T', name: 'Patología Oral II', credits: 3, prerequisites: ['EES-341-T'], corequisites: [] },
                { code: 'EES-483-T', name: 'Gestión en Estomatología', credits: 1, prerequisites: ['EES-223-T'], corequisites: [] },
                { code: 'EES-423-P', name: 'Salud Comunitaria II', credits: 2, prerequisites: ['EES-421-T'], corequisites: [] },
                { code: 'EES-473-T', name: 'Odontopediatría II', credits: 1, prerequisites: ['EES-472-T'], corequisites: [] },
                { code: 'EES-463-T', name: 'Imagenología II', credits: 2, prerequisites: ['EES-362-T'], corequisites: [] }
            ]
        }
    ],
    '5': [
        {
            period: 'Cuatrimestre 1',
            courses: [
                { code: 'EES-511-P', name: 'Clínica Integrada V', credits: 8, prerequisites: ['EES-413-P', 'EES-473-T'], corequisites: [] },
                { code: 'EES-521-T', name: 'Recursos Tecnológicos', credits: 1, prerequisites: [], corequisites: [] },
                { code: 'EES-591-T', name: 'Investigación en Estomatología III', credits: 2, prerequisites: ['EES-492-T'], corequisites: [] },
                { code: 'EES-E02-T', name: 'Electiva Estomatológica II', credits: 1, prerequisites: ['EES-413-P', 'EES-473-T'], corequisites: [] },
                { code: 'EES-571-T', name: 'Atención a Pacientes con Discapacidad', credits: 1, prerequisites: [], corequisites: [] },
                { code: 'EES-541-T', name: 'Estomatología Forense', credits: 1, prerequisites: ['EES-341-T'], corequisites: [] },
                { code: 'ET-XXX-T', name: 'Bioética Teológica', credits: 3, prerequisites: [], corequisites: [] }
            ]
        }
    ]
};

// Referencia al contenedor principal donde se generará la malla
const pensumContainer = document.querySelector('.pensum-container');

// Mantener una lista de materias aprobadas en localStorage
let completedCourses = JSON.parse(localStorage.getItem('completedCourses')) || [];

// Obtener todas las materias en un solo array para una búsqueda más eficiente
const allCourses = Object.values(pensumData).flat().flatMap(period => period.courses);

// Evento que se dispara cuando la página ha cargado completamente
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    renderAllPensum();
});

// Función para generar el HTML del pensum a partir de los datos
function renderAllPensum() {
    pensumContainer.innerHTML = ''; // Limpiar el contenido anterior

    const years = Object.keys(pensumData);
    years.forEach(year => {
        const yearSection = document.createElement('section');
        yearSection.id = `year${year}`;
        yearSection.classList.add('pensum-content', 'active');
        
        const yearTitle = document.createElement('h3');
        yearTitle.textContent = `Año ${year}`;
        yearSection.appendChild(yearTitle);

        const yearData = pensumData[year];
        yearData.forEach(period => {
            const periodBox = document.createElement('div');
            periodBox.classList.add('period-box');
            
            const periodTitle = document.createElement('h4');
            periodTitle.textContent = period.period;
            periodBox.appendChild(periodTitle);
    
            const courseList = document.createElement('div');
            courseList.classList.add('period-courses');
    
            period.courses.forEach(course => {
                const courseItem = document.createElement('div');
                courseItem.classList.add('course-cell');
                courseItem.dataset.code = course.code;
                courseItem.innerHTML = `<span class="course-code">${course.code}</span><br>${course.name}`;
                courseList.appendChild(courseItem);
            });
    
            periodBox.appendChild(courseList);
            yearSection.appendChild(periodBox);
        });
    
        pensumContainer.appendChild(yearSection);
    });

    updateCourseStyles();
}

// Función para actualizar los estilos de todas las materias
function updateCourseStyles(selectedCode = null) {
    document.querySelectorAll('.course-cell').forEach(courseCell => {
        const courseCode = courseCell.dataset.code;
        const course = allCourses.find(c => c.code === courseCode);

        // Limpiar clases de realce de la selección anterior
        courseCell.classList.remove('selected', 'prerequisite', 'correquisite', 'completed', 'locked');

        // Aplicar la clase 'completed' si la materia ya fue cursada
        if (completedCourses.includes(courseCode)) {
            courseCell.classList.add('completed');
        }

        // Bloquear materias que tienen prerrequisitos sin cumplir
        if (course && course.prerequisites.length > 0) {
            const hasUncompletedPrerequisites = course.prerequisites.some(prereqCode => !completedCourses.includes(prereqCode));
            if (hasUncompletedPrerequisites) {
                courseCell.classList.add('locked');
            }
        }

        // Resaltar prerrequisitos y correquisitos de la materia seleccionada
        if (selectedCode && course) {
            if (courseCode === selectedCode) {
                courseCell.classList.add('selected');
            } else if (course.prerequisites.includes(selectedCode)) {
                courseCell.classList.add('prerequisite');
            } else if (course.corequisites.includes(selectedCode)) {
                courseCell.classList.add('correquisite');
            }
        }
    });
}

// Configurar los escuchadores de eventos
function setupEventListeners() {
    // Event listener para el clic en las materias
    pensumContainer.addEventListener('click', (event) => {
        const courseCell = event.target.closest('.course-cell');
        if (!courseCell) return;

        const courseCode = courseCell.dataset.code;
        const isLocked = courseCell.classList.contains('locked');
        
        // Si la materia está bloqueada, muestra un mensaje y no hagas nada más
        if (isLocked) {
            const course = allCourses.find(c => c.code === courseCode);
            const uncompletedPrereqs = course.prerequisites.filter(prereq => !completedCourses.includes(prereq));
            alert(`No puedes cursar esta materia hasta que apruebes los siguientes prerrequisitos: ${uncompletedPrereqs.join(', ')}`);
            return;
        }

        // Limpiar el realce de la selección anterior
        document.querySelectorAll('.course-cell').forEach(item => {
            item.classList.remove('selected', 'prerequisite', 'correquisite');
        });
        
        // Si la materia ya está aprobada, la desmarcamos
        if (completedCourses.includes(courseCode)) {
            completedCourses = completedCourses.filter(code => code !== courseCode);
        } else {
            // Si no está aprobada, la marcamos como aprobada
            completedCourses.push(courseCode);
        }

        // Guardar el estado en localStorage
        localStorage.setItem('completedCourses', JSON.stringify(completedCourses));

        // Volver a aplicar los estilos a todas las materias
        updateCourseStyles();
    });
}