import { useState, useEffect, useCallback, useRef } from 'react';
import { GameState, Direction, Position, GameLevel } from '../types/game';

const CELL_SIZE = 20;
const GRID_WIDTH = 30;
const GRID_HEIGHT = 25;

const SPEED_MAP: Record<GameLevel, number> = {
  slow: 200,
  medium: 100,
  fast: 50
};

const getRandomPosition = (): Position => ({
  x: Math.floor(Math.random() * GRID_WIDTH),
  y: Math.floor(Math.random() * GRID_HEIGHT)
});

export const useGameLogic = () => {
  const [gameState, setGameState] = useState<GameState>({
    snake: [{ x: 10, y: 10 }],
    food: getRandomPosition(),
    direction: 'right',
    score: 0,
    isGameOver: false,
    isPaused: false,
    level: 'medium'
  });

  const directionRef = useRef<Direction>('right');
  const gameIntervalRef = useRef<number | null>(null);

  const generateFood = useCallback((snake: Position[]): Position => {
    let newFood: Position;
    do {
      newFood = getRandomPosition();
    } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  }, []);

  const resetGame = useCallback(() => {
    const initialSnake = [{ x: 10, y: 10 }];
    setGameState({
      snake: initialSnake,
      food: getRandomPosition(),
      direction: 'right',
      score: 0,
      isGameOver: false,
      isPaused: false,
      level: 'medium'
    });
    directionRef.current = 'right';
  }, []);

  const moveSnake = useCallback(() => {
    setGameState(prevState => {
      if (prevState.isPaused || prevState.isGameOver) return prevState;

      const head = { ...prevState.snake[0] };
      const direction = directionRef.current;

      switch (direction) {
        case 'up':
          head.y--;
          break;
        case 'down':
          head.y++;
          break;
        case 'left':
          head.x--;
          break;
        case 'right':
          head.x++;
          break;
      }

      if (
        head.x < 0 ||
        head.x >= GRID_WIDTH ||
        head.y < 0 ||
        head.y >= GRID_HEIGHT ||
        prevState.snake.some(segment => segment.x === head.x && segment.y === head.y)
      ) {
        return { ...prevState, isGameOver: true };
      }

      const newSnake = [head, ...prevState.snake];
      let newFood = prevState.food;
      let newScore = prevState.score;

      if (head.x === prevState.food.x && head.y === prevState.food.y) {
        newScore++;
        newFood = generateFood(newSnake);
      } else {
        newSnake.pop();
      }

      return {
        ...prevState,
        snake: newSnake,
        food: newFood,
        score: newScore,
        direction
      };
    });
  }, [generateFood]);

  const togglePause = useCallback(() => {
    setGameState(prev => ({ ...prev, isPaused: !prev.isPaused }));
  }, []);

  const changeDirection = useCallback((newDirection: Direction) => {
    const currentDirection = directionRef.current;
    const opposites: Record<Direction, Direction> = {
      up: 'down',
      down: 'up',
      left: 'right',
      right: 'left'
    };

    if (opposites[currentDirection] !== newDirection) {
      directionRef.current = newDirection;
    }
  }, []);

  const setLevel = useCallback((level: GameLevel) => {
    setGameState(prev => ({ ...prev, level }));
  }, []);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
          event.preventDefault();
          changeDirection('up');
          break;
        case 'ArrowDown':
          event.preventDefault();
          changeDirection('down');
          break;
        case 'ArrowLeft':
          event.preventDefault();
          changeDirection('left');
          break;
        case 'ArrowRight':
          event.preventDefault();
          changeDirection('right');
          break;
        case ' ':
          event.preventDefault();
          togglePause();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [changeDirection, togglePause]);

  useEffect(() => {
    if (gameIntervalRef.current) {
      clearInterval(gameIntervalRef.current);
    }

    if (!gameState.isGameOver) {
      gameIntervalRef.current = window.setInterval(moveSnake, SPEED_MAP[gameState.level]);
    }

    return () => {
      if (gameIntervalRef.current) {
        clearInterval(gameIntervalRef.current);
      }
    };
  }, [gameState.level, gameState.isGameOver, moveSnake]);

  return {
    gameState,
    resetGame,
    togglePause,
    setLevel,
    cellSize: CELL_SIZE,
    gridWidth: GRID_WIDTH,
    gridHeight: GRID_HEIGHT
  };
};
