import { Image } from '@prisma/client';
import { useEffect, useRef } from 'react';
import { classNames } from '~/utils/class-names';
import { getEnv } from '~/utils/envs';
import ImageActions from './ImageActions';

const ImageListItem = ({
  image,
  toParty,
  toImage,
  isRandom,
  allowCancelingDeleteBookmark,
  onClick,
  onShowLogin,
  highlighted,
}: {
  image: Image;
  toParty?: boolean;
  toImage?: boolean;
  isRandom?: boolean;
  allowCancelingDeleteBookmark?: boolean;
  onClick: () => void;
  onShowLogin: () => void;
  highlighted?: boolean;
}) => {
  const imageRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (highlighted) {
      imageRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [highlighted]);

  return (
    <li
      ref={imageRef}
      className={classNames(
        'xs:scroll-mt-3 relative scroll-mt-2 transition-all lg:scroll-mt-4 select-none',
        highlighted && 'animate-tada z-10',
      )}
    >
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
        <button onClick={onClick} className="absolute inset-0 focus:outline-none" />
        <div
          className={classNames(
            'xs:p-2 pointer-events-none flex flex-col items-stretch justify-end p-1 sm:p-4',
            'is-hover:translate-y-2 is-hover:opacity-0 is-hover:duration-300 is-hover:group-hover:translate-y-0 is-hover:group-hover:opacity-100',
          )}
        >
          <ImageActions
            {...{
              image,
              toParty,
              toImage,
              isRandom,
              allowCancelingDeleteBookmark,
              onShowLogin,
            }}
          />
        </div>
      </div>
    </li>
  );
};

export default ImageListItem;
