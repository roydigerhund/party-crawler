import { Party } from '@prisma/client';
import { Link, LoaderFunction, useLoaderData } from 'remix';
import ImageList from '~/components/ImageList';
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

  if (!party)
    return (
      <Page noSearch>
        <div className="px-4 sm:px-6 md:px-0">
          <h1 className="text-2xl font-semibold text-gray-900">Party nicht gefunden</h1>
        </div>
      </Page>
    );

  return (
    <Page noSearch>
      <div className="px-4 sm:px-6 md:px-0">
        <h1 className="text-2xl font-semibold text-gray-900">
          {party.name} in{' '}
          <Link to={`/cities/${party.city.id}`} className="text-sky-700 underline-offset-2 hover:underline">
            {party.city.name}
          </Link>
        </h1>
        <p className="text-md font-medium text-gray-500">{formatDate(party.date)}</p>
      </div>
      <ImageList images={party.images} />
    </Page>
  );
};

export default Party;
