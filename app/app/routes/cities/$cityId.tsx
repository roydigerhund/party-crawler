import { City, Prisma } from '@prisma/client';
import { Form, LoaderFunction, MetaFunction, useLoaderData, useSearchParams, useSubmit } from 'remix';
import Page from '~/components/Page';
import PartyList from '~/components/PartyList';
import db from '~/db.server';
import { CityData, PartyData } from '~/utils/types-and-enums';
import { getYearFilter } from '~/utils/year-filter';

export const meta: MetaFunction = ({ data }) => {
  const { city } = data as LoaderReturnType;
  return { title: `${city?.name || 'Stadt'} - Partybilder` };
};

const perPage = 12;

type LoaderReturnType = {
  city: Omit<CityData, 'parties' | '_count'> | null;
  partyCount: number;
  parties: PartyData[];
  page: number;
  years: { year: number }[];
};

export const loader: LoaderFunction = async ({ params, request }): Promise<LoaderReturnType> => {
  const { cityId } = params;
  const url = new URL(request.url);
  const search = url.searchParams.get('search') || '';
  const year = url.searchParams.get('year') || '';
  const yearFilter = getYearFilter(!!year ? parseInt(year, 10) : undefined);
  const pageParam = url.searchParams.get('page') || '1';
  const page = parseInt(pageParam, 10);

  const city = await db.city.findFirst({
    where: { id: cityId },
    include: {
      country: true,
    },
  });

  const partyCount = await db.party.count({
    where: {
      cityId,
      OR: [
        { name: { contains: search, mode: Prisma.QueryMode.insensitive } },
        { city: { name: { contains: search, mode: Prisma.QueryMode.insensitive } } },
      ],
      date: yearFilter,
    },
  });

  const parties = await db.party.findMany({
    where: {
      cityId,
      OR: [
        { name: { contains: search, mode: Prisma.QueryMode.insensitive } },
        { city: { name: { contains: search, mode: Prisma.QueryMode.insensitive } } },
      ],
      date: yearFilter,
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
  const years = await db.$queryRaw<{ year: number }[]>(
    !!search
      ? Prisma.sql`SELECT date_part('year', date) AS year from "Party" LEFT JOIN "City" ON "City".id = "Party"."cityId" WHERE "Party"."cityId" = ${cityId} AND ("Party".name ILIKE '%' || ${search} || '%' OR "City".name ILIKE '%' || ${search} || '%') GROUP BY year ORDER BY year DESC`
      : Prisma.sql`SELECT date_part('year', date) AS year from "Party" WHERE "Party"."cityId" = ${cityId} GROUP BY year ORDER BY year DESC`,
  );

  return { city, parties, page, partyCount, years };
};

const City = () => {
  const { city, page, parties, partyCount, years } = useLoaderData<LoaderReturnType>();
  const submit = useSubmit();
  const [searchParams] = useSearchParams();
  const year = searchParams.get('year') || undefined;
  const search = searchParams.get('search') || undefined;

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
      <div className="px-4 sm:px-6 md:px-0"></div>
      <div className="flex items-end justify-between space-x-2 px-4 sm:px-6 md:px-0">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">{city.name}</h1>
          <p className="text-md font-medium text-gray-500">{city.country.name}</p>
        </div>
        <Form method="get" onChange={(e) => submit(e.currentTarget)}>
          <input id="search-field" type="search" name="search" defaultValue={search} hidden />
          <label htmlFor="location" className="sr-only">
            Location
          </label>
          <select
            id="year"
            name="year"
            className="block w-full rounded-md border-none bg-gray-100 py-1.5 pl-3 pr-10 text-base text-gray-900 focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
            defaultValue={year}
          >
            <option value="">Alle Jahre</option>
            {years.map((y) => (
              <option key={y.year} value={y.year}>
                {y.year}
              </option>
            ))}
          </select>
        </Form>
      </div>
      <PartyList parties={parties} partyCount={partyCount} page={page} perPage={perPage} />
    </Page>
  );
};

export default City;
