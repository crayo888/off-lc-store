const canvas = document.getElementById("particulas")
const ctx = canvas.getContext("2d")
const mouse = {
    x: null,
    y: null,
    radius: 120
};

// Ajusta o tamanho do canvas para preencher a tela//
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//array que guarda as partículas//
let particulasArray = [];


//classe partícula//
class particula {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
    }

    //atualiza a posição//
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        //se sair da tela, volta//
        if (this.x < 0 || this.x > canvas.width) this.x = Math.random() * canvas.width;
        if (this.y < 0 || this.y > canvas.height) this.y = Math.random() * canvas.height;

        //distancia entre o mouse e a partícula//
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        //se estiver perto do mouse//
        if (distance < mouse.radius) {
            const forceX = dx / distance;
            const forceY = dy / distance;

            this.x += forceX * 2;
            this.y += forceY * 2;
        }

        //mantem dentro da tela//
        if (this.x < 0 || this.x > canvas.width) {
            this.x = Math.random() * canvas.width;
        }
        if (this.y < 0 || this.y > canvas.height){
            this.y = Math.random() * canvas.height;
        }
    }

    //desenha no canvas//
    draw() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }

    
}


//cria as partículas//
function init(){
    particulasArray = [];
    for (let i = 0; i < 100; i++) {
        particulasArray.push (new particula());
    }
}

//animação//
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particulasArray.forEach(particula => {
        particula.update();
        particula.draw();
    });

    requestAnimationFrame(animate);
}

//redimensionar a tela//
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

//iniciar//
init();
animate();


//movimento do mouse//
window.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});