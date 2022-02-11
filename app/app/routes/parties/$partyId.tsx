import { Party } from '@prisma/client';
import { useState } from 'react';
import { LoaderFunction, useLoaderData, useTransition } from 'remix';
import Gallery from '~/components/Gallery';
import Page from '~/components/Page';
import db from '~/db.server';
import { formatDate } from '~/utils/intl';
import { PartyData } from '~/utils/types-and-enums';

export const loader: LoaderFunction = async ({ params }): Promise<PartyData | null> => {
  const { partyId } = params;

  const party = await db.party.findFirst({
    where: { id: partyId },
    include: {
      images: true,
      city: {
        include: {
          country: true,
        },
      },
      _count: {
        select: {
          images: true,
        },
      },
    },
  });
  return party;
};

const Party = () => {
  const party = useLoaderData<PartyData | null>();
  const { state } = useTransition();
  const [openGallery, setOpenGallery] = useState(false);
  const [initialGalleryIndex, setInitialGalleryIndex] = useState<number>(0);

  if (!party)
    return (
      <Page>
        <div className="px-4 sm:px-6 md:px-0">
          <h1 className="text-2xl font-semibold text-gray-900">Party nicht gefunden</h1>
        </div>
      </Page>
    );

  return (
    <Page>
      <Gallery
        images={party.images}
        index={initialGalleryIndex}
        open={openGallery}
        onClose={() => setOpenGallery(false)}
      />
      <div className="px-4 sm:px-6 md:px-0">
        <h1 className="text-2xl font-semibold text-gray-900">
          {party.name} in {party.city.name}
        </h1>
        <p className="text-md font-medium text-gray-500">{formatDate(party.date)}</p>
      </div>
      <div className="px-4 sm:px-6 md:px-0">
        <div className="py-4">
          <ul
            role="list"
            className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
          >
            {state !== 'idle' ? (
              <li className="relative">
                <div className="group aspect-w-10 aspect-h-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"></div>
                <p className="pointer-events-none mt-2 block text-sm font-medium text-gray-900">{'image.party'}</p>
                <p className="pointer-events-none block text-sm font-medium text-gray-500">{'image.partydate'}</p>
              </li>
            ) : (
              party.images.map((image, index) => (
                <li key={image.id} className="relative">
                  <div className="group aspect-w-10 aspect-h-10 block w-full overflow-hidden rounded-lg bg-black focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                    <img src={image.filePath} alt="" className="pointer-events-none object-cover group-hover:blur-sm" />
                    <img
                      src={image.filePath}
                      alt=""
                      className="pointer-events-none hidden object-contain group-hover:block"
                    />
                    <button
                      onClick={() => {
                        setInitialGalleryIndex(index);
                        setOpenGallery(true);
                      }}
                      className="absolute inset-0 focus:outline-none"
                    >
                      <span className="sr-only">Details anzeigen für {image.id}</span>
                    </button>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </Page>
  );
};

export default Party;
