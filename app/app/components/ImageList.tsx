import { Image } from '@prisma/client';
import { useState } from 'react';
import Gallery from './Gallery';
import ImageListItem from './ImageListItem';
import UserLogin from './UserLogin';

const ImageList = ({
  images,
  toParty,
  isRandom,
}: {
  images: Image[];
  toParty?: boolean;
  isRandom?: boolean;
}) => {
  const [openGallery, setOpenGallery] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [initialGalleryIndex, setInitialGalleryIndex] = useState<number>(0);

  return (
    <>
      <Gallery images={images} index={initialGalleryIndex} open={openGallery} onClose={() => setOpenGallery(false)} />
      <UserLogin open={openLogin} onClose={() => setOpenLogin(false)} />
      <div className="px-4 sm:px-6 md:px-0">
        <div className="py-4">
          <ul
            role="list"
            className="grid grid-cols-2 gap-4 gap-y-5 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-7 lg:grid-cols-4 xl:gap-x-8 xl:gap-y-9"
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
                toParty={toParty}
                isRandom={isRandom}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ImageList;
