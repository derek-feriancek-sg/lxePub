const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

ctx.imageSmoothingEnabled = false;

const player = {
    x: 400,
    y: 300,
    width: 32,
    height: 32,
    speed: 4,
    color: '#e74c3c'
};

const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
};

function drawPixelRect(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(Math.floor(x), Math.floor(y), width, height);
}

function drawPlayer() {
    drawPixelRect(player.x, player.y, player.width, player.height, player.color);
    
    drawPixelRect(player.x + 8, player.y + 4, 16, 8, '#f39c12');
    
    drawPixelRect(player.x + 12, player.y + 8, 4, 4, '#2c3e50');
    drawPixelRect(player.x + 20, player.y + 8, 4, 4, '#2c3e50');
    
    drawPixelRect(player.x + 8, player.y + 16, 16, 4, '#34495e');
    
    drawPixelRect(player.x + 4, player.y + 20, 8, 12, '#3498db');
    drawPixelRect(player.x + 20, player.y + 20, 8, 12, '#3498db');
}

function updatePlayer() {
    if (keys.ArrowUp && player.y > 0) {
        player.y -= player.speed;
    }
    if (keys.ArrowDown && player.y < canvas.height - player.height) {
        player.y += player.speed;
    }
    if (keys.ArrowLeft && player.x > 0) {
        player.x -= player.speed;
    }
    if (keys.ArrowRight && player.x < canvas.width - player.width) {
        player.x += player.speed;
    }
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    updatePlayer();
    drawPlayer();
    
    requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', (e) => {
    if (keys.hasOwnProperty(e.code)) {
        keys[e.code] = true;
        e.preventDefault();
    }
});

document.addEventListener('keyup', (e) => {
    if (keys.hasOwnProperty(e.code)) {
        keys[e.code] = false;
        e.preventDefault();
    }
});

gameLoop();
