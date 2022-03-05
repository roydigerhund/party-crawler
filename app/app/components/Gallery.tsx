/* This example requires Tailwind CSS v2.0+ */
import { Dialog, Transition } from '@headlessui/react';
import { Image } from '@prisma/client';
import { Fragment, useEffect, useState } from 'react';
import { classNames } from '~/utils/class-names';
import { getEnv } from '~/utils/envs';
import ImageActions from './ImageActions';

export default function Gallery({
  images,
  index,
  open,
  onClose,
  toParty,
  toImage,
  isRandom,
  allowCancelingDeleteBookmark,
  onShowLogin,
}: {
  images: Image[];
  index?: number;
  open?: boolean;
  onClose: (imageId?: Image['id']) => void;
  toParty?: boolean;
  toImage?: boolean;
  isRandom?: boolean;
  allowCancelingDeleteBookmark?: boolean;
  onShowLogin: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showImageNumber, setShowImageNumber] = useState(true);
  const [changeOffset, setChangeOffset] = useState(0);

  useEffect(() => {
    if (index !== undefined && open) {
      setChangeOffset(0);
      setCurrentIndex(index);
    }
  }, [index, open]);

  const handleUserKeyPress = (event: KeyboardEvent) => {
    const { keyCode } = event;
    if (keyCode === 37) handlePrevious();
    if (keyCode === 39) handleNext();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress);
    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  const handlePrevious = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
    setChangeOffset(old => old - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
    setChangeOffset(old => old + 1);
  };

  useEffect(() => {
    if (open) {
      setShowImageNumber(true);
      const timeout = setTimeout(() => {
        setShowImageNumber(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, open]);

  const currentImage = images[currentIndex];

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => onClose(Math.abs(changeOffset) > 4 ? currentImage?.id : undefined)}
      >
        <div className="xs:px-4 block min-h-screen items-end justify-center px-1 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {!!currentImage && (
              <div className="relative mt-4 mb-16 inline-block max-w-4xl transform rounded-lg bg-white p-0.5 text-left align-middle shadow-xl transition-all">
                {/* Show number of current image and number of total images */}
                <div
                  className={classNames(
                    'absolute top-0 right-0 rounded-bl-lg rounded-tr-lg bg-white px-2 pt-0.5 pb-1 transition-opacity duration-300',
                    !showImageNumber && 'opacity-0',
                  )}
                >
                  <span className="text-xs font-semibold text-gray-600">
                    {currentIndex + 1} / {images.length}
                  </span>
                </div>
                <button
                  onClick={handlePrevious}
                  className="absolute inset-y-0 left-0 right-2/3 cursor-w-resize focus:outline-none"
                />
                <img
                  src={getEnv('MINIO_BASE_URL') + currentImage.filePath}
                  alt={`Bild ${currentIndex + 1}`}
                  className="block w-full rounded-md object-cover"
                />
                <button
                  onClick={handleNext}
                  className="absolute inset-y-0 left-2/3 right-0 cursor-e-resize focus:outline-none"
                />
                <div className="xs:pt-2 absolute top-full flex w-full items-center justify-center pt-1">
                  <ImageActions
                    image={currentImage}
                    {...{
                      toParty,
                      toImage,
                      isRandom,
                      allowCancelingDeleteBookmark,
                      onShowLogin,
                    }}
                  />
                </div>
              </div>
            )}
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
