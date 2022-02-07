import { RawData, Prisma } from '@prisma/client';
import { LoaderFunction, useLoaderData, useTransition } from 'remix';
import Page from '~/components/Page';
import db from '~/db.server';

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get('search') || '';

  const images = db.rawData.findMany({
    where: {
      OR: [
        { party: { contains: search, mode: Prisma.QueryMode.insensitive } },
        { city: { contains: search, mode: Prisma.QueryMode.insensitive } },
        { country: { contains: search, mode: Prisma.QueryMode.insensitive } },
      ],
    },
    take: 200,
  });
  return images;
};

export default function Index() {
  const images = useLoaderData<RawData[]>();
  const { state } = useTransition();

  return (
    <Page>
      <div className="px-4 sm:px-6 md:px-0">
        <h1 className="text-2xl font-semibold text-gray-900">Home</h1>
      </div>
      <div className="px-4 sm:px-6 md:px-0"></div>
    </Page>
  );
}
