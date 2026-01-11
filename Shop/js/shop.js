//data final do Drop countdown 31 de dezembro de 2026//
const endDate = new Date("2026-12-31T23:59:59");

const timerElement = document.getElementById ("timer");

function updateCountdown() {
    const now = new Date();
    const diff = endDate - now;

    if (diff <= 0) {
    timerElement.textContent = "Drop Encerrado";
    disableButtons();
    return;

}


const days = Math.floor(diff/ (1000 * 60 * 60 * 24));
const hours = Math.floor ((diff/ (1000 * 60 * 60)) % 24);
const minutes = Math.floor ((diff/ (1000 * 60)) % 60);
const seconds = Math.floor ((diff/ 1000) % 60);

timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

}

function disableButtons() {
    const buttons = document.querySelectorAll("button");

    buttons.forEach (button => {
        button.disabled =  true;
        button.textContent = "Drop Encerrado";
        button.style.backgroundColor = "#555555";
        button.style.cursor = "not-allowed";
    });
}

setInterval(updateCountdown, 1000);