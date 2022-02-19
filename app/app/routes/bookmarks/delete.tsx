import { ActionFunction, json } from 'remix';
import db from '~/db.server';

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const bookmarkId = formData.get('bookmarkId');

  if (!bookmarkId || typeof bookmarkId !== 'string') {
    return json({ error: 'Missing bookmarkId' });
  }
  try {
    await db.bookmark.delete({
      where: {
        id: bookmarkId,
      },
      select: {
        id: true,
        imageId: true,
      },
    });
    return json({ ok: true });
  } catch (error) {
    if (error instanceof Error) {
      return json({ error: error.message });
    }
    return json({ error: 'Unknown error' });
  }
};
