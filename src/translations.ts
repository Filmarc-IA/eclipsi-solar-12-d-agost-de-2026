import { ca } from './locales/ca';
import { en } from './locales/en';
import { de } from './locales/de';

export const translations = {
  ca,
  en,
  de
};

export type Lang = keyof typeof translations;


