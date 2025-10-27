import { Keyboard, Pause } from 'lucide-react';
import { Translations } from '../i18n/translations';

interface InstructionsPanelProps {
  t: Translations;
}

export const InstructionsPanel = ({ t }: InstructionsPanelProps) => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-white max-w-md">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Keyboard size={24} />
        {t.controls}
      </h3>
      <ul className="space-y-2">
        <li className="flex items-center gap-2">
          <span className="text-yellow-300">↑ ↓ ← →</span>
          <span>{t.useArrows}</span>
        </li>
        <li className="flex items-center gap-2">
          <Pause size={16} className="text-yellow-300" />
          <span>{t.pressSpace}</span>
        </li>
      </ul>
    </div>
  );
};
