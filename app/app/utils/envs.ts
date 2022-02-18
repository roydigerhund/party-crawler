import { Envs } from './types-and-enums';

declare global {
  interface Window {
    ENV: Envs;
  }
}

export const getEnv = (key: keyof Envs): string =>
  (typeof document === 'undefined' ? process.env[key] : window.ENV[key]) || '';
