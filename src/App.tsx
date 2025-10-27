import { useState } from 'react';
import { useGameLogic } from './hooks/useGameLogic';
import { GameCanvas } from './components/GameCanvas';
import { GameControls } from './components/GameControls';
import { GameOverModal } from './components/GameOverModal';
import { LanguageSelector } from './components/LanguageSelector';
import { InstructionsPanel } from './components/InstructionsPanel';
import { Language, translations } from './i18n/translations';
import { Trophy } from 'lucide-react';

function App() {
  const { gameState, resetGame, setLevel, cellSize, gridWidth, gridHeight } = useGameLogic();
  const [language, setLanguage] = useState<Language>('en');

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex flex-col items-center justify-center py-8 px-4">
      <div className="absolute top-4 right-4">
        <LanguageSelector currentLanguage={language} onLanguageChange={setLanguage} />
      </div>

      <div className="flex flex-col items-center gap-6 max-w-6xl w-full">
        <h1 className="text-5xl font-bold text-white text-center drop-shadow-2xl">
          {t.title}
        </h1>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <div className="flex flex-col items-center gap-6">
            <GameCanvas
              gameState={gameState}
              cellSize={cellSize}
              gridWidth={gridWidth}
              gridHeight={gridHeight}
            />

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-8 py-4">
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <Trophy className="text-yellow-300" size={32} />
                {t.score}: <span className="text-yellow-300">{gameState.score}</span>
              </h2>
            </div>

            <GameControls
              level={gameState.level}
              onLevelChange={setLevel}
              t={t}
            />
          </div>

          <InstructionsPanel t={t} />
        </div>

        <footer className="mt-8 text-center">
          <p className="text-white text-lg font-medium">
            {t.designedBy} &copy; 2024
          </p>
        </footer>
      </div>

      {gameState.isGameOver && (
        <GameOverModal
          score={gameState.score}
          onPlayAgain={resetGame}
          t={t}
        />
      )}
    </div>
  );
}

export default App;
