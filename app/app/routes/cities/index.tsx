/* This example requires Tailwind CSS v2.0+ */
import { ChevronRightIcon, UsersIcon } from '@heroicons/react/solid';
import { Prisma } from '@prisma/client';
import { Link, LoaderFunction, MetaFunction, useLoaderData } from 'remix';
import Page from '~/components/Page';
import Pagination from '~/components/Pagination';
import db from '~/db.server';
import { getEnv } from '~/utils/envs';
import { CityData } from '~/utils/types-and-enums';

export const meta: MetaFunction = () => {
  return { title: 'Städte - Partybilder' };
};

type LoaderReturnType = { cities: CityData[]; cityCount: number; page: number };

const perPage = 12;

export const loader: LoaderFunction = async ({ request }): Promise<LoaderReturnType> => {
  const url = new URL(request.url);
  const search = url.searchParams.get('search') || '';
  const pageParam = url.searchParams.get('page') || '1';
  const page = parseInt(pageParam, 10);

  const cityCount = await db.city.count({
    where: {
      OR: [{ name: { contains: search, mode: Prisma.QueryMode.insensitive } }],
    },
  });
  const cities = await db.city.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: Prisma.QueryMode.insensitive } },
        { country: { name: { contains: search, mode: Prisma.QueryMode.insensitive } } },
      ],
    },
    include: {
      country: true,
      parties: {
        orderBy: [{ date: 'desc' }, { id: 'desc' }],
        select: {
          id: true,
          name: true,
          images: {
            orderBy: { rawDataId: 'asc' },
            select: {
              id: true,
              filePath: true,
            },
            take: 1,
          },
        },
        take: 4,
      },
      _count: {
        select: {
          parties: true,
        },
      },
    },
    skip: perPage * (page - 1),
    take: perPage,
    orderBy: [{ name: 'asc' }, { id: 'desc' }],
  });
  return { cities, cityCount, page };
};

export default function Cities() {
  const { cities, cityCount, page } = useLoaderData<LoaderReturnType>();

  return (
    <Page>
      <div className="px-4 sm:px-6 md:px-0">
        <h1 className="text-2xl font-semibold text-gray-900">Städte</h1>
      </div>

      <div className="px-4 sm:px-6 md:px-0">
        <div className="py-4">
          <ul role="list" className="divide-y divide-gray-200">
            {cities.map((city) => (
              <li key={city.id}>
                <Link
                  to={`/cities/${city.id}`}
                  className="group relative block transition-transform duration-300 hover:translate-x-1"
                >
                  <div className="absolute -left-5 top-0 bottom-0 w-1 origin-right scale-x-0 bg-sky-500 transition-transform duration-300 group-hover:scale-x-100" />
                  <div className="flex items-center py-4">
                    <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                      <div className="truncate">
                        <div className="flex text-sm">
                          <p className="truncate font-medium text-sky-600">{city.name}</p>
                          <p className="ml-1 flex-shrink-0 font-normal text-gray-500">in {city.country.name}</p>
                        </div>
                        <div className="mt-2 flex">
                          <div className="flex items-center text-sm text-gray-500">
                            <UsersIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            <p>
                              {city._count.parties} {city._count.parties === 1 ? 'Party' : 'Parties'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                      <div className="xxs:flex hidden -space-x-1 overflow-hidden">
                        {city.parties.map((party) => (
                          <img
                            key={party.id}
                            className="xs:h-10 xs:w-10 h-8 w-8 rounded-lg object-cover ring-2 ring-white sm:h-12 sm:w-12"
                            src={getEnv('MINIO_BASE_URL') + party.images[0]?.filePath}
                            alt={party.name}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="ml-5 flex-shrink-0">
                      <ChevronRightIcon className="h-5 w-5 text-gray-400 group-hover:text-sky-500" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Pagination currentPage={page} perPage={perPage} total={cityCount} />
      </div>
    </Page>
  );
}
