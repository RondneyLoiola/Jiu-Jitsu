window.addEventListener('scroll', function () {
    const header = document.querySelector("header"); // pega o header lá do HTML
    let activeSectionIndex = 0;

    // saber qual a posição do scroll, se está em cima, meio, baixo...
    const scrollPosition = window.scrollY - header.offsetHeight; // offsetHeight retorna a altura do elemento incluindo padding e border

    if (scrollPosition <= 0) { // verifica se a posição do scroll é menor ou igual a zero
        header.style.boxShadow = 'none'; // se for igual ou menor que zero, a box-shadow é none
        header.style.backgroundColor = 'transparent'

    }
    else {
        header.style.boxShadow = '5px 1px 5px rgba(0, 0, 0, 0.1)'; // se não for igual ou menor que zero, adiciona uma box-shadow
        header.style.backgroundColor = '#000'
    }
});


document.addEventListener('DOMContentLoaded', function () {
    // Mapeamento dos botões para as divs de informação
    const beltMap = {
        // infantil
        'branca-infantil': 'info-branca-infantil',
        'cinza-infantil': 'info-cinza-infantil',
        'amarela-infantil': 'info-amarela-infantil',
        'laranja-infantil': 'info-laranja-infantil',
        'verde-infantil': 'info-verde-infantil',
        //adulta
        'branca-adulta': 'info-branca-adulta',
        'azul-adulta': 'info-azul-adulta',
        'roxa-adulta': 'info-roxa-adulta',
        'marrom-adulta': 'info-marrom-adulta',
        'preta-adulta': 'info-preta-adulta',
        'coral-adulta': 'info-coral-adulta',
        'vermelha-adulta': 'info-vermelha-adulta'
    };

    // Adiciona eventos a todos os botões
    Object.keys(beltMap).forEach(beltColor => {
        const buttons = document.querySelectorAll(`.${beltColor}`);
        const infoId = beltMap[beltColor];

        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                showInfo(infoId); // Aqui chamamos a função showInfo com o ID correto
            });
        });
    });

    // Overlay
    const overlay = document.getElementById('info-overlay');
    overlay.addEventListener('click', hideInfo);

    // Funções para mostrar/esconder
    function showInfo(id) {
        const infoDiv = document.getElementById(id); // Aqui você define a infoDiv corretamente
        if (infoDiv) {
            // Esconde todas as outras informações primeiro
            document.querySelectorAll('.belt-info').forEach(el => {
                el.style.display = 'none';
            });

            infoDiv.style.display = 'flex';
            overlay.style.display = 'block';
        }
    }

    function hideInfo() {
        document.querySelectorAll('.belt-info').forEach(el => {
            el.style.display = 'none';
        });
        overlay.style.display = 'none';
    }

    // Fecha ao pressionar ESC
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            hideInfo();
        }
    });

    ScrollReveal().reveal('#home .box', {
        origin: 'bottom',
        distance: '10%',
        duration: 2000
    })

    ScrollReveal().reveal('#about .container', {
        origin: 'bottom',
        distance: '10%',
        duration: 2000
    })

    ScrollReveal().reveal('#history .pack', {
        origin: 'bottom',
        distance: '10%',
        duration: 2000
    })

    ScrollReveal().reveal('#belts .pack', {
        origin: 'bottom',
        distance: '10%',
        duration: 2000
    })
          
})

