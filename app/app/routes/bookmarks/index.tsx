import { LoaderFunction, useLoaderData } from 'remix';
import ImageList from '~/components/ImageList';
import Page from '~/components/Page';
import { userCookie } from '~/cookies';
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

  return (
    <Page noSearch>
      {!!username && (
        <div className="px-4 sm:px-6 md:px-0">
          <h1 className="text-2xl font-semibold text-gray-900">Gemerkte Bilder von {username}</h1>
        </div>
      )}
      <ImageList images={images} toParty showLogin={!username} />
    </Page>
  );
}
