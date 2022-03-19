import { Image } from '@prisma/client';
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { classNames } from '~/utils/class-names';
import Gallery from './Gallery';
import ImageListItem from './ImageListItem';
import UserLogin from './UserLogin';

type ImageListProps = {
  images: Image[];
  toParty?: boolean;
  toImage?: boolean;
  isRandom?: boolean;
  allowCancelingDeleteBookmark?: boolean;
};

export type ImageListRef = {
  setHighlightedImageId: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const ImageList = forwardRef<ImageListRef, ImageListProps>(
  ({ images, toParty, toImage, isRandom, allowCancelingDeleteBookmark }, ref) => {
    const [openGallery, setOpenGallery] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const [initialGalleryIndex, setInitialGalleryIndex] = useState<number>(0);
    const [highlightedImageId, setHighlightedImageId] = useState<Image['id'] | undefined>(undefined);

    useImperativeHandle(ref, () => ({ setHighlightedImageId }));

    useEffect(() => {
      if (highlightedImageId) {
        setTimeout(() => {
          setHighlightedImageId(undefined);
        }, 1250);
      }
    }, [highlightedImageId]);

    return (
      <>
        <Gallery
          images={images}
          index={initialGalleryIndex}
          open={openGallery}
          onClose={(imageId) => {
            setOpenGallery(false);
            setHighlightedImageId(imageId);
          }}
          onShowLogin={() => setOpenLogin(true)}
          {...{ toParty, toImage, isRandom, allowCancelingDeleteBookmark }}
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
                  highlighted={image.id === highlightedImageId}
                  onShowLogin={() => setOpenLogin(true)}
                  {...{ toParty, toImage, isRandom, allowCancelingDeleteBookmark }}
                  lazy={index > 5}
                />
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  },
);

export default ImageList;
