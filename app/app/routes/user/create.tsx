import { Prisma, User } from '@prisma/client';
import { ActionFunction, json } from 'remix';
import db from '~/db.server';
import { randomFromArray } from '~/utils/random';
import { adjectives, nouns } from '~/utils/words';

export const action: ActionFunction = async ({ request }) => {
  let user: User | null = null;
  let tries = 0;
  do {
    const username = `${randomFromArray(adjectives)} ${randomFromArray(nouns)}`;
    const newUser: Prisma.UserCreateInput = {
      name: username,
    };
    try {
      user = await db.user.create({
        data: newUser,
      });
      return json({ ok: true });
    } catch (error) {
      tries++;
    }
  } while (!user && tries < 10);
  return json({ error: 'Could not create user' });
};
