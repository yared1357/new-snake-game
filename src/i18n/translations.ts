export type Language = 'en' | 'es' | 'fr' | 'de' | 'zh' | 'ar' | 'am';

export interface Translations {
  title: string;
  score: string;
  level: string;
  slow: string;
  medium: string;
  fast: string;
  gameOver: string;
  yourScore: string;
  playAgain: string;
  pause: string;
  resume: string;
  controls: string;
  useArrows: string;
  pressSpace: string;
  designedBy: string;
  selectLanguage: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    title: 'Snake Game',
    score: 'Score',
    level: 'Level',
    slow: 'Slow',
    medium: 'Medium',
    fast: 'Fast',
    gameOver: 'Game Over',
    yourScore: 'Your score is',
    playAgain: 'Play Again',
    pause: 'Pause',
    resume: 'Resume',
    controls: 'Controls',
    useArrows: 'Use arrow keys to move',
    pressSpace: 'Press space to pause',
    designedBy: 'Designed by Yared Alebachewu',
    selectLanguage: 'Select Language'
  },
  es: {
    title: 'Juego de Serpiente',
    score: 'Puntuación',
    level: 'Nivel',
    slow: 'Lento',
    medium: 'Medio',
    fast: 'Rápido',
    gameOver: 'Juego Terminado',
    yourScore: 'Tu puntuación es',
    playAgain: 'Jugar de Nuevo',
    pause: 'Pausar',
    resume: 'Reanudar',
    controls: 'Controles',
    useArrows: 'Use las flechas para moverse',
    pressSpace: 'Presione espacio para pausar',
    designedBy: 'Diseñado por Yared Alebachewu',
    selectLanguage: 'Seleccionar Idioma'
  },
  fr: {
    title: 'Jeu du Serpent',
    score: 'Score',
    level: 'Niveau',
    slow: 'Lent',
    medium: 'Moyen',
    fast: 'Rapide',
    gameOver: 'Jeu Terminé',
    yourScore: 'Votre score est',
    playAgain: 'Rejouer',
    pause: 'Pause',
    resume: 'Reprendre',
    controls: 'Contrôles',
    useArrows: 'Utilisez les flèches pour vous déplacer',
    pressSpace: 'Appuyez sur espace pour mettre en pause',
    designedBy: 'Conçu par Yared Alebachewu',
    selectLanguage: 'Sélectionner la Langue'
  },
  de: {
    title: 'Schlangen Spiel',
    score: 'Punktzahl',
    level: 'Stufe',
    slow: 'Langsam',
    medium: 'Mittel',
    fast: 'Schnell',
    gameOver: 'Spiel Vorbei',
    yourScore: 'Ihre Punktzahl ist',
    playAgain: 'Nochmal Spielen',
    pause: 'Pause',
    resume: 'Fortsetzen',
    controls: 'Steuerung',
    useArrows: 'Verwenden Sie die Pfeiltasten',
    pressSpace: 'Leertaste zum Pausieren',
    designedBy: 'Entworfen von Yared Alebachewu',
    selectLanguage: 'Sprache Auswählen'
  },
  zh: {
    title: '贪吃蛇游戏',
    score: '分数',
    level: '等级',
    slow: '慢速',
    medium: '中速',
    fast: '快速',
    gameOver: '游戏结束',
    yourScore: '你的分数是',
    playAgain: '再玩一次',
    pause: '暂停',
    resume: '继续',
    controls: '控制',
    useArrows: '使用方向键移动',
    pressSpace: '按空格键暂停',
    designedBy: '由 Yared Alebachewu 设计',
    selectLanguage: '选择语言'
  },
  ar: {
    title: 'لعبة الثعبان',
    score: 'النقاط',
    level: 'المستوى',
    slow: 'بطيء',
    medium: 'متوسط',
    fast: 'سريع',
    gameOver: 'انتهت اللعبة',
    yourScore: 'نقاطك هي',
    playAgain: 'العب مرة أخرى',
    pause: 'إيقاف مؤقت',
    resume: 'استئناف',
    controls: 'التحكم',
    useArrows: 'استخدم مفاتيح الأسهم للتحرك',
    pressSpace: 'اضغط على المسافة للإيقاف المؤقت',
    designedBy: 'صمم بواسطة يارد أليباتشيو',
    selectLanguage: 'اختر اللغة'
  },
  am: {
    title: 'የእባብ ጨዋታ',
    score: 'ነጥብ',
    level: 'ደረጃ',
    slow: 'ዘገምተኛ',
    medium: 'መካከለኛ',
    fast: 'ፈጣን',
    gameOver: 'ጨዋታው አልቋል',
    yourScore: 'ነጥብዎ',
    playAgain: 'እንደገና ተጫወት',
    pause: 'ለአፍታ አቁም',
    resume: 'ቀጥል',
    controls: 'መቆጣጠሪያ',
    useArrows: 'ለመንቀሳቀስ የቀስት ቁልፎችን ይጠቀሙ',
    pressSpace: 'ለማቆም ክፍተት ይጫኑ',
    designedBy: 'በያሬድ አለባቸው የተነደፈ',
    selectLanguage: 'ቋንቋ ይምረጡ'
  }
};

export const languageNames: Record<Language, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  zh: '中文',
  ar: 'العربية',
  am: 'አማርኛ'
};
