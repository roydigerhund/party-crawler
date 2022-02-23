import { HeartIcon } from '@heroicons/react/outline';
import { CheckCircleIcon, HeartIcon as HeartIconSolid } from '@heroicons/react/solid';
import { Image } from '@prisma/client';
import { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link, useFetcher, useMatches } from 'remix';
import { classNames } from '~/utils/class-names';
import { getEnv } from '~/utils/envs';
import { RootData } from '~/utils/types-and-enums';

const ImageListItem = ({
  image,
  toParty,
  isRandom,
  onClick,
  onShowLogin,
}: {
  image: Image;
  toParty?: boolean;
  isRandom?: boolean;
  onClick: () => void;
  onShowLogin: () => void;
}) => {
  const { bookmarks, username } = useMatches()[0]!.data as RootData;
  const bookmarker = useFetcher();
  const [copiedId, setCopiedId] = useState<string>();

  // reset the copied id after a second
  useEffect(() => {
    if (copiedId) {
      const timeout = setTimeout(() => setCopiedId(undefined), 1000);
      return () => clearTimeout(timeout);
    }
  }, [copiedId]);

  const handleCreateBookmarkClick = (imageId: string) => {
    if (!username) {
      onShowLogin();
    } else {
      bookmarker.submit(
        { username: username, imageId },
        {
          method: 'post',
          action: `/bookmarks/create`,
        },
      );
    }
  };

  const handleDeleteBookmarkClick = (bookmarkId: string) => {
    bookmarker.submit(
      { bookmarkId },
      {
        method: 'delete',
        action: `/bookmarks/delete`,
      },
    );
  };

  const bookmarkId = bookmarks.find((bookmark) => bookmark.imageId === image.id)?.id;
  const isBookmarked =
    (!!bookmarkId || bookmarker.submission?.method === 'POST') && bookmarker.submission?.method !== 'DELETE';
  const actionPending = bookmarker.state !== 'idle';

  return (
    <li key={image.id} className="relative">
      <div className="group aspect-w-10 aspect-h-10 block w-full overflow-hidden rounded-lg bg-black focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
        <img
          src={getEnv('MINIO_BASE_URL') + image.filePath}
          alt=""
          className={classNames('pointer-events-none object-cover', 'is-hover:group-hover:blur-sm')}
        />
        <img
          src={getEnv('MINIO_BASE_URL') + image.filePath}
          alt={image.id}
          className="is-hover:group-hover:block pointer-events-none hidden object-contain"
        />
        <button onClick={onClick} className="absolute inset-0 focus:outline-none">
          <span className="sr-only">Details anzeigen für {image.id}</span>
        </button>
        <div
          className={classNames(
            'xs:p-2 pointer-events-none flex items-end space-x-2 p-1 sm:p-4',
            'is-hover:translate-y-2 is-hover:opacity-0 is-hover:duration-300 is-hover:group-hover:translate-y-0 is-hover:group-hover:opacity-100',
          )}
          aria-hidden="true"
        >
          <button
            onClick={() => (!!bookmarkId ? handleDeleteBookmarkClick(bookmarkId) : handleCreateBookmarkClick(image.id))}
            disabled={actionPending}
            className={classNames(
              'pointer-events-auto flex-grow-0 cursor-pointer rounded-md bg-white bg-opacity-75 py-2 px-2.5 text-gray-900 backdrop-blur-sm backdrop-filter transition-all duration-300 hover:bg-opacity-100',
            )}
          >
            {isBookmarked ? <HeartIconSolid className="h-5 w-5 text-red-500" /> : <HeartIcon className="h-5 w-5" />}
          </button>
          {toParty ? (
            <Link
              to={`/parties/${image.partyId}`}
              target={isRandom ? '_blank' : undefined}
              className="pointer-events-auto w-full rounded-md bg-white bg-opacity-75 py-2 px-4 text-center text-sm font-medium text-gray-900 backdrop-blur-sm backdrop-filter transition-all duration-300 hover:bg-opacity-100"
            >
              Zur Party
            </Link>
          ) : (
            <CopyToClipboard text={`${getEnv('APP_BASE_URL')}/image/${image.id}`} onCopy={() => setCopiedId(image.id)}>
              <div className="pointer-events-auto flex w-full cursor-pointer items-center justify-center rounded-md bg-white bg-opacity-75 py-2 px-4 text-center text-sm font-medium text-gray-900 backdrop-blur-sm backdrop-filter transition-all duration-300 hover:bg-opacity-100">
                {copiedId === image.id ? (
                  <>
                    <span>Link kopiert</span>
                    <CheckCircleIcon className="ml-1 h-4 w-4 text-emerald-500" />
                  </>
                ) : (
                  'Bild teilen'
                )}
              </div>
            </CopyToClipboard>
          )}
        </div>
      </div>
    </li>
  );
};

export default ImageListItem;
