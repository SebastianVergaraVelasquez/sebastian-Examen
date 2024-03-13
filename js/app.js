let container = document.querySelector('.container');
let beginButton = document.querySelector('.beginButton');

beginButton.addEventListener('click', () => {
    // Al hacer click en este boton se generan los elementos de las tres
    // opciones de la ventana
    // referente a la calidad de la app


    //creacion y adicion de cada elemento a la pantalla principal
    container.innerHTML = "";
    const titulo = document.createElement('h1');
    titulo.innerText = '¿Que nivel de calidad estas buscando?';
    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('optionsContainer');
    const option1 = document.createElement('div');
    option1.id = 'optima'
    option1.classList.add('option')
    option1.classList.add('optionSet1')
    const imgoption1 = document.createElement('img');
    imgoption1.src = 'storage/images/answer-1-1.png';
    const textoption1 = document.createElement('h5');   
    textoption1.innerText = 'calidad optima';
    option1.appendChild(imgoption1);
    option1.appendChild(textoption1);
    optionsContainer.appendChild(option1);

    const option2 = document.createElement('div');
    option2.id = 'calidad-precio'
    option2.classList.add('option')
    option2.classList.add('optionSet1')
    const imgoption2 = document.createElement('img');
    imgoption2.src = 'storage/images/answer-1-2.png';
    const textoption2 = document.createElement('h5');
    textoption2.innerText = 'Buena relacion calidad/precio';
    option2.appendChild(imgoption2);
    option2.appendChild(textoption2);
    optionsContainer.appendChild(option2);

    const option3 = document.createElement('div');
    option3.id = 'calidad'
    option3.classList.add('option')
    option3.classList.add('optionSet1')
    const imgoption3 = document.createElement('img');
    imgoption3.src = 'storage/images/answer-1-3.png';
    const textoption3 = document.createElement('h5');
    textoption3.innerText = 'No me importa tanto la calidad';
    option3.appendChild(imgoption3);
    option3.appendChild(textoption3);
    optionsContainer.appendChild(option3);

    container.appendChild(titulo);
    container.appendChild(optionsContainer);
    container.style.gap = '100px'

    debugger
    const buttonSet1 = document.querySelectorAll('.optionSet1')
    buttonSet1.forEach(button => {
        // Al dar click en una de las opciones anteriores se genera una nueva ventana que lleva a seleccionar el tipo de app, se sobreescriben los valores anteriores y se añade una nueva opcion
        button.addEventListener('click', ()=>{
            option1.id = 'and' ;
            option2.id = 'ios' ;
            option3.id = 'win' ;
            titulo.innerText = 'Que tipo de app necesitas';
            imgoption1.src = 'storage/images/answer-2-1.png';
            imgoption2.src = 'storage/images/answer-2-2.png';
            imgoption3.src = 'storage/images/answer-2-3.png';
            textoption1. innerText = "Aplicacion android";
            textoption2. innerText = "Aplicacion iOS";
            textoption3. innerText = "Aplicacion Windows Phone";
            const option4 = document.createElement('div');
            option4.id = 'and+ios'
            option4.classList.add('option')
            option4.classList.add('optionSet1')
            const imgoption4 = document.createElement('img');
            imgoption4.src = 'storage/images/answer-2-4.png';
            const textoption4 = document.createElement('h5');
            textoption4.innerText = 'Aplicacion Android + iOS';
            option4.appendChild(imgoption4);
            option4.appendChild(textoption4);
            optionsContainer.appendChild(option4);
            
            buttonSet1.forEach(button => {
                button.addEventListener('click', () =>{
            option1.id = 'sencilla' ;
            option2.id = 'personalizada' ;
            option3.id = 'replicada' ;
            titulo.innerText = 'Que diseño quieres que tenga tu app';
            imgoption1.src = 'storage/images/answer-3-1.png';
            imgoption2.src = 'storage/images/answer-3-2.png';
            imgoption3.src = 'storage/images/answer-3-3.png';
            imgoption4.src = 'storage/images/answer-3-4.png';
            textoption1. innerText = "Interfaz sencilla";
            textoption2. innerText = "Interfaz personalizada";
            textoption3. innerText = "Interfaz replicada de la web";
            textoption4. innerText = "No necesito diseño";
                })
            })
        })
    });
})

function checkClick () {
    container.addEventListener('click', (e) =>{
        const clicked = e.target.id
        return clicked
    })
}