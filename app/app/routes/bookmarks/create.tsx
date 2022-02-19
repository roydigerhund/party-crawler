import { Prisma } from '@prisma/client';
import { ActionFunction, json } from 'remix';
import db from '~/db.server';

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const userName = formData.get('userName');
  const imageId = formData.get('imageId');

  if (!userName || !imageId || typeof userName !== 'string' || typeof imageId !== 'string') {
    return json({ error: 'Missing userName or imageId' });
  }
  const bookmark: Prisma.BookmarkCreateInput = {
    user: { connectOrCreate: { where: { name: userName }, create: { name: userName } } },
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
