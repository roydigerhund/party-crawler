import { City, Prisma } from '@prisma/client';
import { LoaderFunction, MetaFunction, useLoaderData } from 'remix';
import Page from '~/components/Page';
import PartyList from '~/components/PartyList';
import db from '~/db.server';
import { CityData, PartyData } from '~/utils/types-and-enums';

export const meta: MetaFunction = ({ data }) => {
  const { city } = data as LoaderReturnType;
  return { title: `${city?.name || 'Stadt'} - Partybilder` };
};

const perPage = 12;

type LoaderReturnType = { city: Omit<CityData, 'parties'> | null; parties: PartyData[]; page: number };

export const loader: LoaderFunction = async ({ params, request }): Promise<LoaderReturnType> => {
  const { cityId } = params;
  const url = new URL(request.url);
  const search = url.searchParams.get('search') || '';
  const pageParam = url.searchParams.get('page') || '1';
  const page = parseInt(pageParam, 10);

  const city = await db.city.findFirst({
    where: { id: cityId },
    include: {
      country: true,
      _count: {
        select: {
          parties: true,
        },
      },
    },
  });

  const parties = await db.party.findMany({
    where: {
      cityId,
      OR: [
        { name: { contains: search, mode: Prisma.QueryMode.insensitive } },
        { city: { name: { contains: search, mode: Prisma.QueryMode.insensitive } } },
      ],
    },
    include: {
      city: { include: { country: true } },
      images: { orderBy: { rawDataId: 'asc' }, take: 1 },
      _count: {
        select: {
          images: true,
        },
      },
    },
    skip: perPage * (page - 1),
    take: perPage,
    orderBy: [{ date: 'desc' }, { id: 'desc' }],
  });

  return { city, parties, page };
};

const City = () => {
  const { city, page, parties } = useLoaderData<LoaderReturnType>();

  if (!city)
    return (
      <Page>
        <div className="px-4 sm:px-6 md:px-0">
          <h1 className="text-2xl font-semibold text-gray-900">Stadt nicht gefunden</h1>
        </div>
      </Page>
    );

  return (
    <Page>
      <div className="px-4 sm:px-6 md:px-0">
        <h1 className="text-2xl font-semibold text-gray-900">{city.name}</h1>
        <p className="text-md font-medium text-gray-500">{city.country.name}</p>
      </div>
      <PartyList parties={parties} partyCount={city._count.parties} page={page} perPage={perPage} />
    </Page>
  );
};

export default City;
