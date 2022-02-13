import { createCookie } from 'remix';

export const authCookie = createCookie('auth', {
  domain: process.env.NODE_ENV === 'production' ? process.env.APP_BASE_URL : undefined,
  expires: new Date(Date.now() + 60_000 * 60 * 24 * 365), // 1 year
  httpOnly: true,
  maxAge: 60 * 60 * 24 * 365, // 1 year
  path: '/',
  sameSite: 'strict',
  secrets: [process.env.APP_SECRET || ''],
  secure: process.env.NODE_ENV === 'production',
});
