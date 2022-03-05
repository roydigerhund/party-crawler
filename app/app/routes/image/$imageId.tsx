import { City, Country, Image, Party } from '@prisma/client';
import { Ref, useRef } from 'react';
import { Link, LoaderFunction, MetaFunction, useLoaderData } from 'remix';
import ImageList, { ImageListRef } from '~/components/ImageList';
import Page from '~/components/Page';
import db from '~/db.server';
import { getEnv } from '~/utils/envs';
import { formatDate } from '~/utils/intl';

export const meta: MetaFunction = ({ data }) => {
  return { title: `${data?.party.name || 'Party'} - Partybilder` };
};

type LoaderReturnType = Image & { party: Party & { images: Image[]; city: City & { country: Country } } };

export const loader: LoaderFunction = async ({ params }): Promise<LoaderReturnType | null> => {
  const { imageId } = params;

  const image = await db.image.findFirst({
    where: { id: imageId },
    include: {
      party: {
        include: {
          city: {
            include: {
              country: true,
            },
          },
          images: {
            orderBy: {
              rawDataId: 'asc',
            },
          },
        },
      },
    },
  });
  return image;
};

const Party = () => {
  const image = useLoaderData<LoaderReturnType | null>();
  const imageListRef: Ref<ImageListRef> | null = useRef(null);

  if (!image)
    return (
      <Page noSearch>
        <div className="px-4 sm:px-6 md:px-0">
          <h1 className="text-2xl font-semibold text-gray-900">Partybild nicht gefunden</h1>
        </div>
      </Page>
    );

  const handleImageClick = () => {
    if (imageListRef.current) {
      imageListRef.current.setHighlightedImageId(image.id);
    }
  };

  return (
    <Page noSearch>
      <div className="px-4 sm:px-6 md:px-0">
        <h1 className="text-2xl font-semibold text-gray-900">
          Partybild von{' '}
          <Link to={`/parties/${image.party.id}`} className="text-sky-700 underline-offset-2 hover:underline">
            {image.party.name}
          </Link>{' '}
          in{' '}
          <Link to={`/cities/${image.party.city.id}`} className="text-sky-700 underline-offset-2 hover:underline">
            {image.party.city.name}
          </Link>
        </h1>
        <p className="text-md font-medium text-gray-500">{formatDate(image.party.date)}</p>
      </div>
      <div className="p-4 sm:px-6 md:px-0">
        <img
          className="block h-auto max-w-full rounded-lg cursor-pointer"
          src={getEnv('MINIO_BASE_URL') + image.filePath}
          alt={image.party.name}
          onClick={handleImageClick}
        />
      </div>
      {image.party.images.length > 1 && (
        <>
          <div className="mt-4 px-4 sm:px-6 md:px-0">
            <h2 className="text-2xl font-semibold text-gray-900">Alle Bilder der Party</h2>
          </div>
          <ImageList ref={imageListRef} images={image.party.images} />
        </>
      )}
    </Page>
  );
};

export default Party;
