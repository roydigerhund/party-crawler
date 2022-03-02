import { Image } from '@prisma/client';
import { classNames } from '~/utils/class-names';
import { getEnv } from '~/utils/envs';
import ImageActions from './ImageActions';

const ImageListItem = ({
  image,
  toParty,
  isRandom,
  allowCancelingDeleteBookmark,
  onClick,
  onShowLogin,
}: {
  image: Image;
  toParty?: boolean;
  isRandom?: boolean;
  allowCancelingDeleteBookmark?: boolean;
  onClick: () => void;
  onShowLogin: () => void;
}) => {
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
