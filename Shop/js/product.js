document.addEventListener("DOMContentLoaded", () => {

const sizeButtons = document.querySelectorAll(".size-btn")

let selectedSize = null;

sizeButtons.forEach(button => {
    button.addEventListener("click", () => { sizeButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    selectedSize = button.textContent;
});

});


const buyButton = document.querySelector(".buy-btn")

buyButton.addEventListener("click", () => {
    if (!selectedSize) {
        alert("Selecione um tamanho antes de comprar.");
        return;
    }

    alert(`Produto adicionado no tamanho ${selectedSize}`)
});

});