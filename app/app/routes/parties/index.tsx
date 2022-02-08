import { Prisma } from '@prisma/client';
import { LoaderFunction, useLoaderData, useTransition } from 'remix';
import Page from '~/components/Page';
import db from '~/db.server';

type PartyData = {
  id: string;
  name: string;
  city: {
    id: string;
    name: string;
    country: {
      id: string;
      name: string;
    };
  };
  date: Date;
  images: {
    id: string;
    filePath: string;
  }[];
};

export const loader: LoaderFunction = async ({ request }): Promise<PartyData[]> => {
  const url = new URL(request.url);
  const search = url.searchParams.get('search') || '';

  const parties = db.party.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: Prisma.QueryMode.insensitive } },
        { city: { name: { contains: search, mode: Prisma.QueryMode.insensitive } } },
      ],
    },
    include: {
      _count: {
        select: {
          images: true,
        },
      },
      city: { include: { country: true } },
      images: { take: 1 },
    },
    take: 20,
    orderBy: {
      date: 'desc',
    },
  });
  return parties;
};

const Parties = () => {
  const parties = useLoaderData<PartyData[]>();
  const { state } = useTransition();

  return (
    <Page>
      <div className="px-4 sm:px-6 md:px-0">
        <h1 className="text-2xl font-semibold text-gray-900">Parties</h1>
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
              parties.map((party) => (
                <li key={party.id} className="relative">
                  <div className="group aspect-w-10 aspect-h-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                    {party.images[0] && (
                      <img
                        src={party.images[0].filePath}
                        alt=""
                        className="pointer-events-none object-cover group-hover:opacity-75"
                      />
                    )}
                    {/* <a
                      href={party.id}
                      target="_blank"
                      className="absolute inset-0 focus:outline-none"
                    >
                      <span className="sr-only">View details for {party.name}</span>
                    </a> */}
                  </div>
                  <p className="pointer-events-none mt-2 block text-sm font-medium text-gray-900">
                    {party.name} in{' '}
                    <a
                      href="#"
                      className="pointer-events-auto cursor-pointer text-indigo-700 underline-offset-2 hover:underline"
                    >
                      {party.city.name}
                    </a>
                  </p>
                  <p className="pointer-events-none block text-sm font-medium text-gray-500">
                    {new Date(party.date).toLocaleDateString()}
                  </p>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </Page>
  );
};

export default Parties;
