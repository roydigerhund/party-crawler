import { useState } from 'react';
import { LoaderFunction, useLoaderData } from 'remix';
import ImageList from '~/components/ImageList';
import Page from '~/components/Page';
import UserLogin from '~/components/UserLogin';
import db from '~/db.server';
import { BookmarkData } from '~/utils/types-and-enums';

export const loader: LoaderFunction = async (): Promise<BookmarkData[]> => {
  const bookmarks = await db.bookmark.findMany({
    // where: {
    //   userId: user.id,
    // },
    include: {
      image: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return bookmarks;
};

export default function Index() {
  const bookmarks = useLoaderData<BookmarkData[]>();
  const images = bookmarks?.map((bookmark) => bookmark.image);

  const [open, setOpen] = useState(true);

  return (
    <Page noSearch>
      <div className="px-4 sm:px-6 md:px-0">
        <h1 className="text-2xl font-semibold text-gray-900">Gemerkte Bilder</h1>
      </div>
      <UserLogin open={open} onClose={() => setOpen(false)} />
      <ImageList images={images} toParty />
    </Page>
  );
}
