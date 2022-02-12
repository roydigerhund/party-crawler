import { CheckCircleIcon } from '@heroicons/react/solid';
import { Image } from '@prisma/client';
import { primaryInput } from 'detect-it';
import { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link, useOutletContext } from 'remix';
import { OutletContext } from '~/root';
import { classNames } from '~/utils/class-names';
import Gallery from './Gallery';

const ImageList = ({ images, toParty }: { images: Image[]; toParty?: boolean }) => {
  const { MINIO_BASE_URL, APP_BASE_URL } = useOutletContext<OutletContext>();
  const [openGallery, setOpenGallery] = useState(false);
  const [initialGalleryIndex, setInitialGalleryIndex] = useState<number>(0);
  const [copiedId, setCopiedId] = useState<string>();
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(primaryInput === 'touch');
  }, []);

  // reset the copied id after a second
  useEffect(() => {
    if (copiedId) {
      const timeout = setTimeout(() => setCopiedId(undefined), 1000);
      return () => clearTimeout(timeout);
    }
  }, [copiedId]);

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
              <li key={image.id} className="relative">
                <div className="group aspect-w-10 aspect-h-10 block w-full overflow-hidden rounded-lg bg-black focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  <img
                    src={MINIO_BASE_URL + image.filePath}
                    alt=""
                    className={classNames('pointer-events-none object-cover', !isTouchDevice && 'group-hover:blur-sm')}
                  />
                  {!isTouchDevice && (
                    <img
                      src={MINIO_BASE_URL + image.filePath}
                      alt={image.id}
                      className="pointer-events-none hidden object-contain group-hover:block"
                    />
                  )}
                  <button
                    onClick={() => {
                      setInitialGalleryIndex(index);
                      setOpenGallery(true);
                    }}
                    className="absolute inset-0 focus:outline-none"
                  >
                    <span className="sr-only">Details anzeigen für {image.id}</span>
                  </button>
                  <div
                    className={classNames(
                      'xs:p-2 pointer-events-none flex items-end p-1 sm:p-4',
                      !isTouchDevice &&
                        'translate-y-2 opacity-0 duration-300 group-hover:translate-y-0 group-hover:opacity-100',
                    )}
                    aria-hidden="true"
                  >
                    {toParty ? (
                      <Link
                        to={`/parties/${image.partyId}`}
                        target="_blank"
                        className="pointer-events-auto w-full rounded-md bg-white bg-opacity-75 py-2 px-4 text-center text-sm font-medium text-gray-900 backdrop-blur-sm backdrop-filter transition-all duration-300 hover:bg-opacity-100"
                      >
                        Zur Party
                      </Link>
                    ) : (
                      <CopyToClipboard text={`${APP_BASE_URL}/image/${image.id}`} onCopy={() => setCopiedId(image.id)}>
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
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ImageList;
