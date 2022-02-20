import { Image } from '@prisma/client';
import { useState } from 'react';
import Gallery from './Gallery';
import ImageListItem from './ImageListItem';

const ImageList = ({ images, toParty }: { images: Image[]; toParty?: boolean }) => {
  const [openGallery, setOpenGallery] = useState(false);
  const [initialGalleryIndex, setInitialGalleryIndex] = useState<number>(0);

  return (
    <>
      <Gallery images={images} index={initialGalleryIndex} open={openGallery} onClose={() => setOpenGallery(false)} />
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
                toParty={toParty}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ImageList;
