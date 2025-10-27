import { Globe } from 'lucide-react';
import { Language, languageNames } from '../i18n/translations';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export const LanguageSelector = ({ currentLanguage, onLanguageChange }: LanguageSelectorProps) => {
  return (
    <div className="flex items-center gap-2">
      <Globe className="text-white" size={20} />
      <select
        value={currentLanguage}
        onChange={(e) => onLanguageChange(e.target.value as Language)}
        className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg font-medium cursor-pointer hover:bg-opacity-30 transition-all duration-200 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
      >
        {(Object.keys(languageNames) as Language[]).map(lang => (
          <option key={lang} value={lang} className="bg-blue-700 text-white">
            {languageNames[lang]}
          </option>
        ))}
      </select>
    </div>
  );
};
