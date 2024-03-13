let container = document.querySelector('.container');
let beginButton = document.querySelector('.beginButton');

beginButton.addEventListener('click', () => {
    container.innerHTML = "";
    const titulo = document.createElement('h1');
    titulo.innerText = '¿Que nivel de calidad esta buscando?';
    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('optionsContainer');
    const option1 = document.createElement('div');
    option1.classList.add('option')
    const imgoption1 = document.createElement('img');
    imgoption1.src = 'storage/images/answer-1-1.png';
    const textoption1 = document.createElement('h5');
    textoption1.innerText = 'calidad optima';
    option1.appendChild(imgoption1);
    option1.appendChild(textoption1);
    optionsContainer.appendChild(option1);

    const option2 = document.createElement('div');
    option2.classList.add('option')
    const imgoption2 = document.createElement('img');
    imgoption2.src = 'storage/images/answer-1-2.png';
    const textoption2 = document.createElement('h5');
    textoption2.innerText = 'Buena relacion calidad/precio';
    option2.appendChild(imgoption2);
    option2.appendChild(textoption2);
    optionsContainer.appendChild(option2);

    const option3 = document.createElement('div');
    option3.classList.add('option')
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
})
