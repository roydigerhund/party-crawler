import { ActionFunction, json } from 'remix';
import db from '~/db.server';

export const action: ActionFunction = async ({ request }) => {
  const username = (await request.formData()).get('username');
  if (!username || typeof username !== 'string') {
    return json({ error: 'Missing username' });
  }
  try {
    await db.user.findUnique({
      where: {
        name: username,
      },
      rejectOnNotFound: true,
    });
    return json({ ok: true });
  } catch (error) {
    if (error instanceof Error) {
      return json({ error: error.message });
    }
    return json({ error: 'Unknown error' });
  }
};
