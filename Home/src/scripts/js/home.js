function toggleMenu() {
    const menu = document.getElementById('mainNav');
    menu.classList.toggle('active');
}

// Opcional: Fecha o menu se clicar fora dele
window.onclick = function(event) {
    if (!event.target.matches('.menu-icon img')) {
        const dropdown = document.getElementById('mainNav');
        if (dropdown.classList.contains('active')) {
            dropdown.classList.remove('active');
        }
    }
}

function toggleUserMenu() {
    const dropdown = document.getElementById('userDropdown');
    dropdown.classList.toggle('active');
}

function toggleSearch() {
    const searchBox = document.getElementById('searchBox');
    const overlay = document.getElementById('overlay');
    
    // Toggle adiciona a classe se não tiver, e remove se tiver
    searchBox.classList.toggle('active');
    overlay.classList.toggle('active');
}


function toggleMenu() {
    document.getElementById('mainNav').classList.toggle('active');
    document.getElementById('overlay').classList.toggle('active');
}

function toggleSearch() {
    document.getElementById('searchBox').classList.toggle('active');
    document.getElementById('overlay').classList.toggle('active');
}

// Função para fechar tudo ao clicar no fundo escuro
function closeAll() {
    document.getElementById('mainNav').classList.remove('active');
    document.getElementById('searchBox').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

