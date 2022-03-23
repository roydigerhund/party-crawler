import { HeartIcon } from '@heroicons/react/outline';
import { CheckCircleIcon, HeartIcon as HeartIconSolid } from '@heroicons/react/solid';
import { Image } from '@prisma/client';
import { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link, useFetcher, useMatches } from 'remix';
import { classNames } from '~/utils/class-names';
import { getEnv } from '~/utils/envs';
import { RootData } from '~/utils/types-and-enums';

const ImageActions = ({
  image,
  toParty,
  toImage,
  isRandom,
  onWhite,
  allowCancelingDeleteBookmark,
  onShowLogin,
}: {
  image: Image;
  toParty?: boolean;
  toImage?: boolean;
  isRandom?: boolean;
  onWhite?: boolean;
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

  const buttonClassName = classNames(
    'relative pointer-events-auto cursor-pointer truncate flex items-center justify-center backdrop-blur-sm backdrop-filter text-gray-900 rounded-md py-2 text-center overflow-hidden',
    onWhite ? 'bg-gray-100 hover:bg-gray-200' : 'bg-white bg-opacity-50 hover:bg-opacity-100',
  );

  return (
    <div className="xs:space-x-2 flex space-x-1 text-sm font-semibold">
      {!!toDeletedBookmarkId ? (
        <button
          onClick={() => setToDeletedBookmarkId(undefined)}
          className={classNames(buttonClassName, 'xxs:px-4 w-full px-3')}
        >
          <span className="cancel-bar absolute bottom-0 left-0 h-1 w-full bg-sky-500" />
          <HeartIcon className="mr-1.5 h-4 w-4 shrink-0 grow-0" />
          <span className="truncate">Rückgängig</span>
        </button>
      ) : !!copiedId ? (
        <div className={classNames(buttonClassName, 'xxs:px-4 w-full px-3')}>
          <span className="truncate">Link kopiert</span>
          <CheckCircleIcon className="ml-1 h-4 w-4 shrink-0 grow-0 text-emerald-500" />
        </div>
      ) : (
        <>
          <button
            onClick={() => (!!bookmarkId ? handleDeleteBookmarkClick(bookmarkId) : handleCreateBookmarkClick(image.id))}
            disabled={actionPending}
            className={classNames(buttonClassName, 'grow-0 shrink-0 px-2.5')}
          >
            {isBookmarked ? <HeartIconSolid className="shrink-0 h-5 w-5 text-red-500" /> : <HeartIcon className="shrink-0 h-5 w-5" />}
          </button>
          {toParty ? (
            <Link
              to={`/image/${image.id}`}
              target={isRandom ? '_blank' : undefined}
              className={classNames(buttonClassName, 'xxs:px-4 w-full px-3')}
            >
              Zur Party
            </Link>
          ) : toImage ? (
            <Link
              to={`/image/${image.id}`}
              target={isRandom ? '_blank' : undefined}
              className={classNames(buttonClassName, 'xxs:px-4 w-full px-3')}
            >
              Zum Bild
            </Link>
          ) : (
            <CopyToClipboard text={`${getEnv('APP_BASE_URL')}/image/${image.id}`} onCopy={() => setCopiedId(image.id)}>
              <div className={classNames(buttonClassName, 'xxs:px-4 w-full px-3')}>
                Bild teilen
              </div>
            </CopyToClipboard>
          )}
        </>
      )}
    </div>
  );
};

export default ImageActions;
