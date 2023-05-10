<script>
  // Import necessary Svelte functions
  import { onMount, beforeUpdate } from 'svelte';

  // Initialize game variables
  let playerX = 50;
  let playerY = 250;
  let playerVelocity = 0;
  let pillars = [];
  let score = 0;
  let gameOver = false;

  // Constants for the game
  const GRAVITY = 0.5;
  const JUMP_FORCE = 8;
  const PILLAR_SPEED = 2;
  const PILLAR_GAP = 200;

  // Function to add a new pillar to the game
  const addPillar = (x) => {
    const minGap = 100;
    const maxGap = 300;
    const gap = Math.floor(Math.random() * (maxGap - minGap) + minGap);

    pillars.push({
      x,
      topHeight: Math.floor(Math.random() * (300 - gap)),
      bottomHeight: 300 - gap - Math.floor(Math.random() * (300 - gap)),
      passed: false,
    });
  };

  // Function to check if the player has collided with a pillar or boundary
  const checkCollision = () => {
    const playerLeft = playerX;
    const playerRight = playerX + 55;
    const playerTop = playerY + 15;
    const playerBottom = playerY + 35;

    for (const pillar of pillars) {
      if (playerRight > pillar.x && playerLeft < pillar.x + 50) {
        if (
          playerTop < pillar.topHeight ||
          playerBottom > 300 - pillar.bottomHeight
        ) {
          gameOver = true;
        } else if (!pillar.passed) {
          pillar.passed = true;
          score++;
        }
      }
    }

    if (playerY < 0 || playerY + 50 > 600) {
      gameOver = true;
    }
  };

  // Function to restart the game
  const restartGame = () => {
    score = 0;
    pillars = [];
    playerX = 50;
    playerY = 250;
    playerVelocity = 0;
    gameOver = false;
    addPillar(500);
  };

  // Function to handle player controls
  const handleKeyDown = (event) => {
    if (event.code === 'Space') {
      playerVelocity = -JUMP_FORCE;
    } else if (event.code === 'ArrowLeft' && playerX > 20) {
      playerX -= 10;
    } else if (event.code === 'ArrowRight' && playerX < 335) {
      playerX += 10;
    }
  };

  // Setup game loop and event listener on mount
  onMount(() => {
    window.addEventListener('keydown', handleKeyDown);
    addPillar(500);

    // Main game loop
    const gameLoop = () => {
      if (gameOver) {
        return;
      }

      // Update pillars
      for (const pillar of pillars) {
        pillar.x -= PILLAR_SPEED;
        if (pillar.x < -50) {
          pillars.shift();
        }
      }

      // Add new pillar if necessary
      if (
        pillars.length === 0 ||
        pillars[pillars.length - 1].x < 500 - PILLAR_GAP
      ) {
        addPillar(500);
      }

      // Update player position
      playerVelocity += GRAVITY;
      playerY += playerVelocity;

// Check for collisions
checkCollision();
};

// Define gameTickTimeout at the top-level scope
let gameTickTimeout;

// ...

// Game tick function to maintain consistent frame rate
let lastTime = performance.now();
const gameTick = () => {
  const now = performance.now();
  const deltaTime = now - lastTime;
  lastTime = now;

  // Run the game loop
  gameLoop();

  // Schedule the next game tick
  gameTickTimeout = setTimeout(gameTick, Math.max(0, 16.67 - deltaTime));
};

// Start the game tick
gameTick();
});

// Cleanup event listener before update
beforeUpdate(() => {
if (gameOver) {
window.removeEventListener('keydown', handleKeyDown);
}
});
</script>

<div class="flex flex-col items-center space-y-4">
  <!-- Game container -->
  <div class="relative w-80 h-80 border border-gray-600">
    <!-- Player character -->
    <div
      class="absolute top-0 left-0 w-12 h-50 bg-cover"
      style={`background-image: url('/bookoptions.png'); top: ${playerY}px; left: ${playerX}px`}
    />
    {#each pillars as pillar}
      <!-- Bottom pillar -->
      <div
        class="absolute bottom-0 left-0 w-50 h-[300px] bg-cover"
        style={`background-image: url('/picklesandjeremiah1.png'); transform: translateX(${pillar.x}px) translateY(${300 - pillar.bottomHeight}px)`}
      />
      <!-- Top pillar -->
      <div
        class="absolute top-0 left-0 w-50 h-[300px] bg-cover"
        style={`background-image: url('/picklesandjeremiah1.png'); transform: translateX(${pillar.x}px) translateY(-${pillar.topHeight}px)`}
      />
    {/each}
  </div>
  <!-- Game over and score display -->
{#if gameOver}
<div class="text-4xl font-bold text-red-500">Game Over!</div>
<button
class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
on:click={() => restartGame()}
>
Restart
</button>
{:else}
<div class="text-4xl font-bold text-gray-500">Score: {score}</div>
{/if}

</div>