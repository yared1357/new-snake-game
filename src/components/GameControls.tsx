import { GameLevel } from '../types/game';
import { Translations } from '../i18n/translations';

interface GameControlsProps {
  level: GameLevel;
  onLevelChange: (level: GameLevel) => void;
  t: Translations;
}

export const GameControls = ({ level, onLevelChange, t }: GameControlsProps) => {
  const levels: GameLevel[] = ['slow', 'medium', 'fast'];

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-white text-lg font-medium">
        {t.level}: <span className="font-bold capitalize">{t[level]}</span>
      </p>
      <div className="flex gap-3">
        {levels.map(lvl => (
          <button
            key={lvl}
            onClick={() => onLevelChange(lvl)}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
              level === lvl
                ? 'bg-red-600 text-white shadow-lg'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            {t[lvl]}
          </button>
        ))}
      </div>
    </div>
  );
};
