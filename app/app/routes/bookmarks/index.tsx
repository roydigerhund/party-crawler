import { CheckCircleIcon, HeartIcon } from '@heroicons/react/solid';
import { User } from '@prisma/client';
import { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { LoaderFunction, useLoaderData } from 'remix';
import ImageList from '~/components/ImageList';
import Page from '~/components/Page';
import UserLogin from '~/components/UserLogin';
import { userCookie } from '~/cookies.server';
import db from '~/db.server';
import { getEnv } from '~/utils/envs';
import { BookmarkData } from '~/utils/types-and-enums';

type LoaderReturnType = { user?: User & { bookmarks: BookmarkData[] } };

export const loader: LoaderFunction = async ({ request }): Promise<LoaderReturnType> => {
  const cookieHeader = request.headers.get('Cookie');
  const username = (await userCookie.parse(cookieHeader)) || undefined;
  const user =
    (await db.user.findUnique({
      where: { name: username },
      include: { bookmarks: { include: { image: true }, orderBy: { createdAt: 'desc' } } },
    })) || undefined;
  return { user };
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
      {!!user ? (
        <>
          <div className="flex items-end justify-between space-x-2 px-4 sm:px-6 md:px-0">
            <div className="grow">
              <h1 className="text-2xl font-semibold text-gray-900">Gemerkte Bilder</h1>
              <p className="text-md font-medium text-gray-500">{user.name}</p>
            </div>

            <CopyToClipboard text={`${getEnv('APP_BASE_URL')}/user/${user.id}`} onCopy={() => setIsCopied(true)}>
              <div className="xxs:px-4 pointer-events-auto relative flex cursor-pointer items-center justify-center overflow-hidden truncate rounded-md bg-gray-100 px-3 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur-sm backdrop-filter hover:bg-gray-200">
                {isCopied ? (
                  <>
                    <span className="truncate">Link kopiert</span>
                    <CheckCircleIcon className="ml-1 h-4 w-4 shrink-0 grow-0 text-emerald-500" />
                  </>
                ) : (
                  'Profil teilen'
                )}
              </div>
            </CopyToClipboard>
          </div>
          {!!user.bookmarks.length ? (
            <ImageList images={user.bookmarks.map((bookmark) => bookmark.image)} toImage allowCancelingDeleteBookmark />
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
