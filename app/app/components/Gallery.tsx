/* This example requires Tailwind CSS v2.0+ */
import { Dialog, Transition } from '@headlessui/react';
import { Image } from '@prisma/client';
import { Fragment, useEffect, useState } from 'react';
import { getEnv } from '~/utils/envs';
import ImageActions from './ImageActions';

export default function Gallery({
  images,
  index,
  open,
  onClose,
  toParty,
  isRandom,
  allowCancelingDeleteBookmark,
  onShowLogin,
}: {
  images: Image[];
  index?: number;
  open?: boolean;
  onClose: () => void;
  toParty?: boolean;
  isRandom?: boolean;
  allowCancelingDeleteBookmark?: boolean;
  onShowLogin: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (index !== undefined && open) {
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
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
  };

  const currentImage = images[currentIndex];

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={onClose}>
        <div className="block min-h-screen items-end justify-center px-4 text-center">
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
                <div className="absolute top-full flex w-full justify-center items-center pt-1 xs:pt-2">
                  <ImageActions
                    image={currentImage}
                    {...{
                      toParty,
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
