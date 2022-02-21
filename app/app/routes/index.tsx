import { Image } from '@prisma/client';
import { LoaderFunction, useLoaderData } from 'remix';
import ImageList from '~/components/ImageList';
import Page from '~/components/Page';
import db from '~/db.server';

export const loader: LoaderFunction = async (): Promise<Image[]> => {
  const images: Image[] = await db.$queryRaw`SELECT * from "Image" ORDER BY random() LIMIT 12`;
  return images;
};

export default function Index() {
  const images = useLoaderData<Image[]>();

  return (
    <Page noSearch>
      <div className="px-4 sm:px-6 md:px-0">
        <h1 className="text-2xl font-semibold text-gray-900">Zufällige Bilder</h1>
      </div>
      <ImageList images={images} toParty isRandom />
    </Page>
  );
}
