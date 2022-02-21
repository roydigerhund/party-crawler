import { Prisma, User } from '@prisma/client';
import { ActionFunction, json } from 'remix';
import { userCookie } from '~/cookies';
import db from '~/db.server';
import { randomFromArray } from '~/utils/random';
import { adjectives, nouns } from '~/utils/words';

export const action: ActionFunction = async () => {
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
      return json(
        { ok: true, username: user.name },
        {
          headers: {
            'Set-Cookie': await userCookie.serialize(user.name),
          },
        },
      );
    } catch (error) {
      tries++;
    }
  } while (!user && tries < 10);
  return json({ error: 'Could not create user' });
};

export default () => 'user/create';
