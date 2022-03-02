import { Image } from '@prisma/client';
import { useState } from 'react';
import { classNames } from '~/utils/class-names';
import Gallery from './Gallery';
import ImageListItem from './ImageListItem';
import UserLogin from './UserLogin';

const ImageList = ({
  images,
  toParty,
  isRandom,
  allowCancelingDeleteBookmark,
}: {
  images: Image[];
  toParty?: boolean;
  isRandom?: boolean;
  allowCancelingDeleteBookmark?: boolean;
}) => {
  const [openGallery, setOpenGallery] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [initialGalleryIndex, setInitialGalleryIndex] = useState<number>(0);

  return (
    <>
      <Gallery
        images={images}
        index={initialGalleryIndex}
        open={openGallery}
        onClose={() => setOpenGallery(false)}
        onShowLogin={() => setOpenLogin(true)}
        {...{ toParty, isRandom, allowCancelingDeleteBookmark }}
      />
      <UserLogin open={openLogin} onClose={() => setOpenLogin(false)} />
      <div className="px-4 sm:px-6 md:px-0">
        <div className="py-4">
          <ul
            role="list"
            className={classNames(
              'grid grid-cols-2 gap-3 gap-y-3',
              'xs:gap-4 xs:gap-y-5',
              'lg:grid-cols-3 lg:gap-x-6 lg:gap-y-7',
              'xl:grid-cols-4 xl:gap-x-8 xl:gap-y-9',
            )}
          >
            {images.map((image, index) => (
              <ImageListItem
                key={image.id}
                image={image}
                onClick={() => {
                  setInitialGalleryIndex(index);
                  setOpenGallery(true);
                }}
                onShowLogin={() => setOpenLogin(true)}
                {...{ toParty, isRandom, allowCancelingDeleteBookmark }}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ImageList;
