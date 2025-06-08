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

const house = {
    x: 100,
    y: 200,
    width: 120,
    height: 120
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

function drawHouse() {
    // Main house body
    drawPixelRect(house.x, house.y + 40, house.width, 80, '#8b4513');
    
    // Roof
    drawPixelRect(house.x - 8, house.y + 32, house.width + 16, 16, '#e74c3c');
    drawPixelRect(house.x + 8, house.y + 16, house.width - 16, 16, '#e74c3c');
    drawPixelRect(house.x + 24, house.y, house.width - 48, 16, '#e74c3c');
    
    // Door
    drawPixelRect(house.x + 45, house.y + 80, 16, 40, '#34495e');
    drawPixelRect(house.x + 56, house.y + 95, 2, 2, '#f39c12');
    
    // Windows
    drawPixelRect(house.x + 20, house.y + 60, 16, 16, '#3498db');
    drawPixelRect(house.x + 84, house.y + 60, 16, 16, '#3498db');
    
    // Window frames
    drawPixelRect(house.x + 26, house.y + 60, 4, 16, '#34495e');
    drawPixelRect(house.x + 20, house.y + 66, 16, 4, '#34495e');
    drawPixelRect(house.x + 90, house.y + 60, 4, 16, '#34495e');
    drawPixelRect(house.x + 84, house.y + 66, 16, 4, '#34495e');
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
    
    drawHouse();
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
