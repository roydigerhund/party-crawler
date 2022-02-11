import { PhotographIcon } from '@heroicons/react/solid';
import { Link } from 'remix';
import Pagination from '~/components/Pagination';
import { formatDate } from '~/utils/intl';
import { PartyData } from '~/utils/types-and-enums';

{
  /* <li className="relative">
  <div className="group aspect-w-10 aspect-h-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"></div>
  <p className="mt-2 block h-2 w-3/4 bg-gray-400"></p>
  <p className="mt-2 block h-2 w-1/2 bg-gray-200"></p>
</li> */
}

const PartyList = ({
  page,
  parties,
  partyCount,
  perPage,
}: {
  parties: PartyData[];
  partyCount: number;
  page: number;
  perPage: number;
}) => {
  return (
    <div className="px-4 sm:px-6 md:px-0">
      <div className="py-4">
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          {parties.map((party) => (
            <li key={party.id} className="relative">
              <div className="relative">
                <div className="group aspect-w-10 aspect-h-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  {party.images[0] && (
                    <img
                      src={party.images[0].filePath}
                      alt=""
                      className="pointer-events-none object-cover group-hover:opacity-75"
                    />
                  )}
                  <Link to={`/parties/${party.id}`} className="absolute inset-0 focus:outline-none">
                    <span className="sr-only">Details anzeigen für {party.name}</span>
                  </Link>
                </div>
                <div className="absolute right-2 bottom-2 flex gap-1 rounded-full border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-700 shadow-md">
                  {party._count.images}
                  <PhotographIcon className="h-4 w-4 text-gray-500" />
                </div>
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
              <p className="pointer-events-none block text-sm font-medium text-gray-500">{formatDate(party.date)}</p>
            </li>
          ))}
        </ul>
      </div>
      <Pagination currentPage={page} perPage={perPage} total={partyCount} />
    </div>
  );
};

export default PartyList;
