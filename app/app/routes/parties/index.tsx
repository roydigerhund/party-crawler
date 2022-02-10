import { City, Country, Prisma, Image } from '@prisma/client';
import { Link, LoaderFunction, useLoaderData, useTransition } from 'remix';
import Page from '~/components/Page';
import Pagination from '~/components/Pagination';
import db from '~/db.server';

export type PartyData = {
  id: string;
  name: string;
  city: City & {
    country: Country;
  };
  date: Date;
  images: Image[];
};

type LoaderReturnType = { parties: PartyData[]; partyCount: number; page: number };

const perPage = 20;

export const loader: LoaderFunction = async ({ request }): Promise<LoaderReturnType> => {
  const url = new URL(request.url);
  const search = url.searchParams.get('search') || '';
  const pageParam = url.searchParams.get('page') || '1';
  const page = parseInt(pageParam, 10);

  const partyCount = await db.party.count({
    where: {
      OR: [
        { name: { contains: search, mode: Prisma.QueryMode.insensitive } },
        { city: { name: { contains: search, mode: Prisma.QueryMode.insensitive } } },
      ],
    },
  });
  const parties = await db.party.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: Prisma.QueryMode.insensitive } },
        { city: { name: { contains: search, mode: Prisma.QueryMode.insensitive } } },
      ],
    },
    include: {
      city: { include: { country: true } },
      images: { take: 1 },
    },
    skip: perPage * (page - 1),
    take: perPage,
    orderBy: {
      date: 'desc',
    },
  });
  return { parties, partyCount, page };
};

const Parties = () => {
  const { parties, partyCount, page } = useLoaderData<LoaderReturnType>();
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
                    <Link to={`/parties/${party.id}`} className="absolute inset-0 focus:outline-none">
                      <span className="sr-only">View details for {party.name}</span>
                    </Link>
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
        <Pagination currentPage={page} perPage={perPage} total={partyCount} />
      </div>
    </Page>
  );
};

export default Parties;
