import { HeartIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { LoaderFunction, useLoaderData } from 'remix';
import ImageList from '~/components/ImageList';
import Page from '~/components/Page';
import UserLogin from '~/components/UserLogin';
import { userCookie } from '~/cookies.server';
import db from '~/db.server';
import { BookmarkData } from '~/utils/types-and-enums';

type LoaderReturnType = { bookmarks: BookmarkData[]; username?: string };

export const loader: LoaderFunction = async ({ request }): Promise<LoaderReturnType> => {
  const cookieHeader = request.headers.get('Cookie');
  const username = (await userCookie.parse(cookieHeader)) || undefined;
  const bookmarks =
    username && typeof username === 'string'
      ? await db.bookmark.findMany({
          where: {
            user: { name: username },
          },
          include: {
            image: true,
          },
          orderBy: {
            createdAt: 'desc',
          },
        })
      : [];
  return { bookmarks, username };
};

export default function Index() {
  const { bookmarks, username } = useLoaderData<LoaderReturnType>();
  const images = bookmarks?.map((bookmark) => bookmark.image);
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <Page noSearch>
      <UserLogin open={openLogin} onClose={() => setOpenLogin(false)} />
      {!!username ? (
        <>
          <div className="px-4 sm:px-6 md:px-0">
            <h1 className="text-2xl font-semibold text-gray-900">Gemerkte Bilder von {username}</h1>
          </div>
          {!!bookmarks.length ? (
            <ImageList images={images} toParty allowCancelingDeleteBookmark />
          ) : (
            <div className="px-4 sm:px-6 md:px-0">
              <div className="relative mt-4 block w-full rounded-lg border-2 border-dashed border-gray-300 px-4 py-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <HeartIcon className="mx-auto h-12 w-12 text-gray-200" />

                <span className="mt-4 block text-base font-medium text-gray-600">
                  Du hast dir noch keine Bilder gemerkt.
                </span>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="pt-16 text-center">
          <h3 className="mt-2 text-3xl font-extrabold text-gray-900">Nicht angemeldet</h3>
          <p className="mt-2 text-sm text-gray-600">Melde dich an um Bilder auf deiner Merkliste zu speichern.</p>
          <button
            type="button"
            onClick={() => setOpenLogin(true)}
            className="mx-auto mt-6 flex w-full max-w-xs justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            Anmelden
          </button>
        </div>
      )}
    </Page>
  );
}
