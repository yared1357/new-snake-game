import { Translations } from '../i18n/translations';

interface GameOverModalProps {
  score: number;
  onPlayAgain: () => void;
  t: Translations;
}

export const GameOverModal = ({ score, onPlayAgain, t }: GameOverModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-8 shadow-2xl text-center max-w-md mx-4 transform animate-scale-in">
        <h2 className="text-4xl font-bold text-red-600 mb-4">{t.gameOver}</h2>
        <p className="text-2xl text-gray-700 mb-6">
          {t.yourScore}: <span className="font-bold text-blue-600">{score}</span>
        </p>
        <button
          onClick={onPlayAgain}
          className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          {t.playAgain}
        </button>
      </div>
    </div>
  );
};
