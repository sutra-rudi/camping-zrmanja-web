import { UserLanguage } from '../types/appState';

export const parseByLang = (hrString: string, enString: string, langState: UserLanguage) =>
  langState === UserLanguage.hr ? hrString : enString;
