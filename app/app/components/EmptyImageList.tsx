import { classNames } from '~/utils/class-names';

const EmptyImageList = () => {
  return (
    <div className="px-4 sm:px-6 md:px-0">
      <div className="py-4">
        <ul
          role="list"
          className={classNames(
            'grid grid-cols-2 gap-3 gap-y-3',
            'xs:gap-4 xs:gap-y-5',
            'lg:grid-cols-3 lg:gap-x-6 lg:gap-y-7',
            'xl:grid-cols-4 xl:gap-x-8 xl:gap-y-9',
          )}
        >
          {Array(12)
            .fill('')
            .map((_, index) => (
              <li className={classNames('relative')}>
                <div className="group aspect-w-10 aspect-h-10 block w-full rounded-lg bg-gray-200"></div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default EmptyImageList;
