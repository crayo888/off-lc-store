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
    const searchInput = document.getElementById('searchInput');
    
    // Liga/Desliga a classe active
    searchBox.classList.toggle('active');
    
    // Se a caixa abrir, coloca o teclado direto no campo
    if (searchBox.classList.contains('active')) {
        searchInput.focus();
    }
}

