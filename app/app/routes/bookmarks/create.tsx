import { Prisma } from '@prisma/client';
import { ActionFunction, json } from 'remix';
import db from '~/db.server';

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const username = formData.get('username');
  const imageId = formData.get('imageId');

  if (!username || !imageId || typeof username !== 'string' || typeof imageId !== 'string') {
    return json({ error: 'Missing username or imageId' });
  }
  const bookmark: Prisma.BookmarkCreateInput = {
    user: { connect: { name: username } },
    image: { connect: { id: imageId } },
  };
  try {
    await db.bookmark.create({
      data: bookmark,
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
