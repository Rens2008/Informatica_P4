const canvas = document.getElementById('tetrisCanvas');
const context = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const startButton = document.getElementById('startButton');

const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30; // Size of each block in pixels
const EMPTY_COLOR = '#1a252f'; // Background color of the game board

// Adjust canvas size based on constants
canvas.width = COLS * BLOCK_SIZE;
canvas.height = ROWS * BLOCK_SIZE;

// Tetrominoes and their colors
const TETROMINOES = {
    'I': { shape: [[1, 1, 1, 1]], color: '#3498db' }, // Cyan
    'L': { shape: [[1, 0, 0], [1, 1, 1]], color: '#e67e22' }, // Orange
    'J': { shape: [[0, 0, 1], [1, 1, 1]], color: '#2980b9' }, // Blue
    'T': { shape: [[0, 1, 0], [1, 1, 1]], color: '#8e44ad' }, // Purple
    'O': { shape: [[1, 1], [1, 1]], color: '#f1c40f' }, // Yellow
    'S': { shape: [[0, 1, 1], [1, 1, 0]], color: '#2ecc71' }, // Green
    'Z': { shape: [[1, 1, 0], [0, 1, 1]], color: '#e74c3c' }  // Red
};

let board = [];
let currentPiece;
let currentRow;
let currentCol;
let score = 0;
let gameInterval;
let gameSpeed = 500; // Milliseconds
let gameActive = false;

// --- Game Board ---
function createBoard() {
    for (let r = 0; r < ROWS; r++) {
        board[r] = [];
        for (let c = 0; c < COLS; c++) {
            board[r][c] = EMPTY_COLOR;
        }
    }
}

function drawBoard() {
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            drawSquare(c, r, board[r][c]);
        }
    }
}

function drawSquare(x, y, color) {
    context.fillStyle = color;
    context.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    context.strokeStyle = '#2c3e50'; // Border for blocks
    context.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
}

// --- Tetrominoes ---
function getRandomPiece() {
    const types = 'ILJOTSZ';
    const type = types[Math.floor(Math.random() * types.length)];
    const piece = TETROMINOES[type];
    return {
        shape: piece.shape,
        color: piece.color,
        row: 0,
        col: Math.floor(COLS / 2) - Math.floor(piece.shape[0].length / 2)
    };
}

function drawPiece(piece) {
    piece.shape.forEach((row, r) => {
        row.forEach((value, c) => {
            if (value) {
                drawSquare(piece.col + c, piece.row + r, piece.color);
            }
        });
    });
}

// --- Game Logic ---
function isValidMove(piece, offsetX, offsetY, newShape) {
    const shape = newShape || piece.shape;
    for (let r = 0; r < shape.length; r++) {
        for (let c = 0; c < shape[r].length; c++) {
            if (shape[r][c]) {
                const newRow = piece.row + r + offsetY;
                const newCol = piece.col + c + offsetX;

                if (newRow >= ROWS || newCol < 0 || newCol >= COLS || (newRow >= 0 && board[newRow] && board[newRow][newCol] !== EMPTY_COLOR)) {
                    return false;
                }
            }
        }
    }
    return true;
}

function mergePiece() {
    currentPiece.shape.forEach((row, r) => {
        row.forEach((value, c) => {
            if (value) {
                board[currentPiece.row + r][currentPiece.col + c] = currentPiece.color;
            }
        });
    });
}

function removeFullLines() {
    let linesCleared = 0;
    for (let r = ROWS - 1; r >= 0; r--) {
        if (board[r].every(cell => cell !== EMPTY_COLOR)) {
            board.splice(r, 1); // Remove the full line
            board.unshift(Array(COLS).fill(EMPTY_COLOR)); // Add an empty line at the top
            linesCleared++;
            r++; // Re-check the current row index as lines shift down
        }
    }
    if (linesCleared > 0) {
        score += linesCleared * 100 * linesCleared; // Bonus for multiple lines
        updateScore();
    }
}

function updateScore() {
    scoreElement.textContent = score;
}

function gameOver() {
    clearInterval(gameInterval);
    gameActive = false;
    context.fillStyle = 'rgba(0, 0, 0, 0.75)';
    context.fillRect(0, canvas.height / 2 - 30, canvas.width, 60);
    context.font = '24px sans-serif';
    context.fillStyle = 'white';
    context.textAlign = 'center';
    context.fillText('Game Over!', canvas.width / 2, canvas.height / 2);
    context.font = '16px sans-serif';
    context.fillText('Druk op "Start Spel" om opnieuw te beginnen', canvas.width / 2, canvas.height / 2 + 25);
    startButton.disabled = false;
}

function drop() {
    if (!gameActive) return;

    if (isValidMove(currentPiece, 0, 1)) {
        currentPiece.row++;
    } else {
        mergePiece();
        removeFullLines();
        currentPiece = getRandomPiece();
        if (!isValidMove(currentPiece, 0, 0)) {
            gameOver();
            return;
        }
    }
    drawGame();
}

function rotatePiece() {
    if (!gameActive) return;
    const shape = currentPiece.shape;
    const newShape = [];
    for (let c = 0; c < shape[0].length; c++) {
        newShape[c] = [];
        for (let r = shape.length - 1; r >= 0; r--) {
            newShape[c].push(shape[r][c]);
        }
    }

    if (isValidMove(currentPiece, 0, 0, newShape)) {
        currentPiece.shape = newShape;
    }
    drawGame();
}


function movePiece(direction) {
    if (!gameActive) return;
    if (isValidMove(currentPiece, direction, 0)) {
        currentPiece.col += direction;
    }
    drawGame();
}

// --- Controls ---
document.addEventListener('keydown', (event) => {
    if (!gameActive) return;

    switch (event.key) {
        case 'ArrowLeft':
        case 'a':
            movePiece(-1);
            break;
        case 'ArrowRight':
        case 'd':
            movePiece(1);
            break;
        case 'ArrowDown':
        case 's':
            drop(); // Accelerate drop
            break;
        case 'ArrowUp':
        case 'w':
            rotatePiece();
            break;
    }
});

// --- Game Loop ---
function drawGame() {
    context.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    drawBoard();
    if (currentPiece) {
        drawPiece(currentPiece);
    }
}

function startGame() {
    if (gameInterval) clearInterval(gameInterval);
    createBoard();
    currentPiece = getRandomPiece();
    score = 0;
    updateScore();
    gameActive = true;
    startButton.disabled = true;
    drawGame();
    gameInterval = setInterval(drop, gameSpeed);
}

// --- Initialization ---
startButton.addEventListener('click', startGame);
createBoard(); // Initial board setup
drawGame(); // Draw empty board initially