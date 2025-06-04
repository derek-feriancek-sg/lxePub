# 2D Pixel Art Game

A simple 2D pixel art game built with HTML5 Canvas and JavaScript. Control a pixelated character using arrow keys to move around the game world.

## Features

- Pixel art style graphics with crisp rendering
- Smooth character movement in 4 directions
- Arrow key controls (up, down, left, right)
- Canvas-based rendering with 800x600 game area
- Responsive collision detection with screen boundaries

## How to Run

1. **Clone or download this repository**
2. **Open `index.html` in any modern web browser**
   - Double-click the file to open it directly, or
   - Right-click and select "Open with" â your preferred browser
3. **Start playing immediately**
   - Use arrow keys to move the character around
   - The character cannot move outside the visible game area

## Files Structure

- `index.html` - Main game page with canvas element
- `game.js` - Game logic, player movement, and input handling
- `style.css` - Pixel art styling and visual presentation

## Controls

- **â Arrow Key** - Move up
- **â Arrow Key** - Move down  
- **â Arrow Key** - Move left
- **â Arrow Key** - Move right

## Technical Details

- Built with HTML5 Canvas API
- Pixel-perfect rendering with `imageSmoothingEnabled: false`
- 60 FPS game loop using `requestAnimationFrame`
- Character size: 32x32 pixels
- Movement speed: 4 pixels per frame

derek was here, never fear