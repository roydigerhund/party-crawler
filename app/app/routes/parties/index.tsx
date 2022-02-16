import { Prisma } from '@prisma/client';
import { LoaderFunction, MetaFunction, useLoaderData } from 'remix';
import Page from '~/components/Page';
import PartyList from '~/components/PartyList';
import db from '~/db.server';
import { PartyData } from '~/utils/types-and-enums';

export const meta: MetaFunction = () => {
  return { title: 'Parties - Partybilder' };
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
  return { parties, partyCount, page };
};

const Parties = () => {
  const { parties, partyCount, page } = useLoaderData<LoaderReturnType>();

  return (
    <Page>
      <div className="px-4 sm:px-6 md:px-0">
        <h1 className="text-2xl font-semibold text-gray-900">Parties</h1>
      </div>
      <PartyList parties={parties} partyCount={partyCount} page={page} perPage={perPage} />
    </Page>
  );
};

export default Parties;
