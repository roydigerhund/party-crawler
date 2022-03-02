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
  allowCancelingDeleteBookmark,
  onShowLogin,
}: {
  image: Image;
  toParty?: boolean;
  isRandom?: boolean;
  allowCancelingDeleteBookmark?: boolean;
  onShowLogin: () => void;
}) => {
  const { bookmarks, username } = useMatches()[0]!.data as RootData;
  const bookmarker = useFetcher();
  const [copiedId, setCopiedId] = useState<string>();
  const [toDeletedBookmarkId, setToDeletedBookmarkId] = useState<string>();

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

  const deleteBookmark = (bookmarkId: string) => {
    bookmarker.submit(
      { bookmarkId },
      {
        method: 'delete',
        action: `/bookmarks/delete`,
      },
    );
  };

  useEffect(() => {
    if (toDeletedBookmarkId) {
      // wait 4000ms to delete the bookmark
      const timeout = setTimeout(() => {
        deleteBookmark(toDeletedBookmarkId);
      }, 4000);

      return () => clearTimeout(timeout);
    }
  }, [toDeletedBookmarkId]);

  const handleDeleteBookmarkClick = async (bookmarkId: string) => {
    if (allowCancelingDeleteBookmark) {
      setToDeletedBookmarkId(bookmarkId);
    } else {
      deleteBookmark(bookmarkId);
    }
  };

  const bookmarkId = bookmarks.find((bookmark) => bookmark.imageId === image.id)?.id;
  const isBookmarked =
    (!!bookmarkId || bookmarker.submission?.method === 'POST') && bookmarker.submission?.method !== 'DELETE';
  const actionPending = bookmarker.state !== 'idle';

  return (
    <div className="xs:space-x-2 xxs:text-sm flex space-x-1 text-xs leading-5">
      {!!toDeletedBookmarkId ? (
        <button
          onClick={() => setToDeletedBookmarkId(undefined)}
          className="pointer-events-auto relative flex w-full items-center justify-center overflow-hidden truncate rounded-md bg-white py-2 px-4 text-center font-medium text-gray-900 backdrop-blur-sm backdrop-filter"
        >
          <span className="cancel-bar absolute bottom-0 left-0 h-1 w-full bg-sky-500" />
          <HeartIcon className="mr-1.5 h-4 w-4 shrink-0 grow-0" />
          <span className="truncate">Rückgängig</span>
        </button>
      ) : !!copiedId ? (
        <div className="pointer-events-auto flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-md bg-white py-2 px-4 text-center font-medium text-gray-900 backdrop-blur-sm backdrop-filter">
          <span className="truncate">Link kopiert</span>
          <CheckCircleIcon className="ml-1 h-4 w-4 shrink-0 grow-0 text-emerald-500" />
        </div>
      ) : (
        <>
          <button
            onClick={() => (!!bookmarkId ? handleDeleteBookmarkClick(bookmarkId) : handleCreateBookmarkClick(image.id))}
            disabled={actionPending}
            className={classNames(
              'pointer-events-auto flex-grow-0 cursor-pointer rounded-md bg-white bg-opacity-75 py-2 px-2.5 text-gray-900 backdrop-blur-sm backdrop-filter hover:bg-opacity-100',
            )}
          >
            {isBookmarked ? <HeartIconSolid className="h-5 w-5 text-red-500" /> : <HeartIcon className="h-5 w-5" />}
          </button>
          {toParty ? (
            <Link
              to={`/parties/${image.partyId}`}
              target={isRandom ? '_blank' : undefined}
              className="xxs:px-4 pointer-events-auto w-full truncate rounded-md bg-white bg-opacity-75 py-2 px-3 text-center font-medium text-gray-900 backdrop-blur-sm backdrop-filter hover:bg-opacity-100"
            >
              Zur Party
            </Link>
          ) : (
            <CopyToClipboard text={`${getEnv('APP_BASE_URL')}/image/${image.id}`} onCopy={() => setCopiedId(image.id)}>
              <div className="pointer-events-auto flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-md bg-white bg-opacity-75 py-2 px-4 text-center font-medium text-gray-900 backdrop-blur-sm backdrop-filter hover:bg-opacity-100">
                Bild teilen
              </div>
            </CopyToClipboard>
          )}
        </>
      )}
    </div>
  );
};

export default ImageListItem;
