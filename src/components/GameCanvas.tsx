import { useEffect, useRef } from 'react';
import { GameState } from '../types/game';

interface GameCanvasProps {
  gameState: GameState;
  cellSize: number;
  gridWidth: number;
  gridHeight: number;
}

export const GameCanvas = ({ gameState, cellSize, gridWidth, gridHeight }: GameCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    gameState.snake.forEach((segment, index) => {
      ctx.beginPath();
      ctx.arc(
        segment.x * cellSize + cellSize / 2,
        segment.y * cellSize + cellSize / 2,
        cellSize / 2 - 2,
        0,
        2 * Math.PI
      );
      ctx.fillStyle = index === 0 ? '#facc15' : '#22c55e';
      ctx.fill();
      ctx.strokeStyle = '#16a34a';
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    ctx.fillStyle = '#ef4444';
    ctx.fillRect(
      gameState.food.x * cellSize,
      gameState.food.y * cellSize,
      cellSize,
      cellSize
    );
  }, [gameState, cellSize]);

  return (
    <canvas
      ref={canvasRef}
      width={gridWidth * cellSize}
      height={gridHeight * cellSize}
      className="border-4 border-white rounded-lg shadow-2xl"
      style={{ imageRendering: 'pixelated' }}
    />
  );
};
