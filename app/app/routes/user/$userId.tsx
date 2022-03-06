import { HeartIcon } from '@heroicons/react/solid';
import { User } from '@prisma/client';
import { useEffect, useState } from 'react';
import { LoaderFunction, useLoaderData } from 'remix';
import ImageList from '~/components/ImageList';
import Page from '~/components/Page';
import UserLogin from '~/components/UserLogin';
import db from '~/db.server';
import { BookmarkData } from '~/utils/types-and-enums';

type LoaderReturnType = { user: User & { bookmarks: BookmarkData[] } };

export const loader: LoaderFunction = async ({ params }): Promise<LoaderReturnType> => {
  const { userId } = params;
  const user = await db.user.findUnique({
    where: { id: userId },
    include: { bookmarks: { include: { image: true }, orderBy: { createdAt: 'desc' } } },
  });

  if (!user) {
    throw new Error('User not found');
  }

  return { user: { ...user, name: user.name.split(' ').map((word) => word.slice(0, 2) + '*****').join(' ') } };
};

export default function Index() {
  const { user } = useLoaderData<LoaderReturnType>();
  const [openLogin, setOpenLogin] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // reset isCopied after a second
  useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => setIsCopied(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [isCopied]);

  return (
    <Page noSearch>
      <UserLogin open={openLogin} onClose={() => setOpenLogin(false)} />
      <div className="flex items-end justify-between space-x-2 px-4 sm:px-6 md:px-0">
        <div className="grow">
          <h1 className="text-2xl font-semibold text-gray-900">Profil von</h1>
          <p className="text-md font-medium text-gray-500">{user.name}</p>
        </div>
      </div>
      {!!user.bookmarks.length ? (
        <ImageList images={user.bookmarks.map((bookmark) => bookmark.image)} toImage allowCancelingDeleteBookmark />
      ) : (
        <div className="px-4 sm:px-6 md:px-0">
          <div className="relative mt-4 block w-full rounded-lg border-2 border-dashed border-gray-300 px-4 py-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <HeartIcon className="mx-auto h-12 w-12 text-gray-200" />

            <span className="mt-4 block text-base font-medium text-gray-600">
              Dieser Nutzer hat noch keine Bilder auf der Merkliste.
            </span>
          </div>
        </div>
      )}
    </Page>
  );
}

export const ErrorBoundary = () => {
  return (
    <Page noSearch>
      <div className="px-4 sm:px-6 md:px-0">
        <h1 className="text-2xl font-semibold text-gray-900">Nutzer nicht gefunden</h1>
      </div>
    </Page>
  );
};
