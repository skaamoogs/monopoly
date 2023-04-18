import { type ThemeList } from './typings';

export enum ThemeNames {
  Dark = 'DARK',
  Light = 'LIGHT',
}

export const THEME_LIST: Array<ThemeList> = [
  {
    name: ThemeNames.Dark,
    viewBox: '0 0 32 32',
    svgPath:
      'M27.733 17.056c-.571 6.013-5.595 10.679-11.709 10.679-6.494 0-11.759-5.265-11.759-11.759 0-6.114 4.666-11.138 10.632-11.706l.047-.004a9.083 9.083 0 0 0-1.791 5.436 9.146 9.146 0 0 0 8.432 9.118l.031.002c2.185.164 4.354-.843 6.116-2.144v.38z',
  },
  {
    name: ThemeNames.Light,
    viewBox: '0 0 24 24',
    svgPath:
      'M12.5,18 C9.46243388,18 7,15.5375661 7,12.5 C7,9.46243388 9.46243388,7 12.5,7 C15.5375661,7 18,9.46243388 18,12.5 C18,15.5375661 15.5375661,18 12.5,18 Z M12.5,17 C14.9852814,17 17,14.9852814 17,12.5 C17,10.0147186 14.9852814,8 12.5,8 C10.0147186,8 8,10.0147186 8,12.5 C8,14.9852814 10.0147186,17 12.5,17 Z M13,5.5 C13,5.77614237 12.7761424,6 12.5,6 C12.2238576,6 12,5.77614237 12,5.5 L12,2.5 C12,2.22385763 12.2238576,2 12.5,2 C12.7761424,2 13,2.22385763 13,2.5 L13,5.5 Z M13,22.5 C13,22.7761424 12.7761424,23 12.5,23 C12.2238576,23 12,22.7761424 12,22.5 L12,19.5 C12,19.2238576 12.2238576,19 12.5,19 C12.7761424,19 13,19.2238576 13,19.5 L13,22.5 Z M17.8033009,7.90380592 C17.6080387,8.09906807 17.2914562,8.09906807 17.0961941,7.90380592 C16.9009319,7.70854378 16.9009319,7.39196129 17.0961941,7.19669914 L19.1464466,5.14644661 C19.3417088,4.95118446 19.6582912,4.95118446 19.8535534,5.14644661 C20.0488155,5.34170876 20.0488155,5.65829124 19.8535534,5.85355339 L17.8033009,7.90380592 Z M5.85355339,19.8535534 C5.65829124,20.0488155 5.34170876,20.0488155 5.14644661,19.8535534 C4.95118446,19.6582912 4.95118446,19.3417088 5.14644661,19.1464466 L7.19669914,17.0961941 C7.39196129,16.9009319 7.70854378,16.9009319 7.90380592,17.0961941 C8.09906807,17.2914562 8.09906807,17.6080387 7.90380592,17.8033009 L5.85355339,19.8535534 Z M19.5,13 C19.2238576,13 19,12.7761424 19,12.5 C19,12.2238576 19.2238576,12 19.5,12 L22.5,12 C22.7761424,12 23,12.2238576 23,12.5 C23,12.7761424 22.7761424,13 22.5,13 L19.5,13 Z M2.5,13 C2.22385763,13 2,12.7761424 2,12.5 C2,12.2238576 2.22385763,12 2.5,12 L5.5,12 C5.77614237,12 6,12.2238576 6,12.5 C6,12.7761424 5.77614237,13 5.5,13 L2.5,13 Z M17.0961941,17.8033009 C16.9009319,17.6080387 16.9009319,17.2914562 17.0961941,17.0961941 C17.2914562,16.9009319 17.6080387,16.9009319 17.8033009,17.0961941 L19.8535534,19.1464466 C20.0488155,19.3417088 20.0488155,19.6582912 19.8535534,19.8535534 C19.6582912,20.0488155 19.3417088,20.0488155 19.1464466,19.8535534 L17.0961941,17.8033009 Z M5.14644661,5.85355339 C4.95118446,5.65829124 4.95118446,5.34170876 5.14644661,5.14644661 C5.34170876,4.95118446 5.65829124,4.95118446 5.85355339,5.14644661 L7.90380592,7.19669914 C8.09906807,7.39196129 8.09906807,7.70854378 7.90380592,7.90380592 C7.70854378,8.09906807 7.39196129,8.09906807 7.19669914,7.90380592 L5.14644661,5.85355339 Z',
  },
];
