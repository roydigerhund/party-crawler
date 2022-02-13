import { Dialog, Transition } from '@headlessui/react';
import { HomeIcon, LocationMarkerIcon, MenuAlt2Icon, UsersIcon, XIcon } from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/solid';
import debounce from 'debounce';
import React, { Fragment, useCallback, useState } from 'react';
import { Form, NavLink, useSearchParams, useSubmit } from 'remix';
import { classNames } from '~/utils/class-names';

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Parties', href: '/parties', icon: UsersIcon },
  { name: 'Städte', href: '/cities', icon: LocationMarkerIcon },
  // { name: 'Raw Data', href: '/raw-data', icon: UsersIcon },
];

const Page: React.FC<{ noSearch?: boolean }> = ({ children, noSearch }) => {
  const submit = useSubmit();
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search') || undefined;

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const debouncedSubmit = useCallback(
    debounce((currentTarget: React.FormEvent<HTMLFormElement>['currentTarget']) => {
      submit(currentTarget);
    }, 250),
    [],
  );

  return (
    <div className="bg-white">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-40 flex md:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Menu schließen</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex flex-shrink-0 items-center px-4">
                <img className="h-12 w-auto" src="/logo.png" alt="Partybilder" />
              </div>
              <div className="mt-5 h-0 flex-1 overflow-y-auto">
                <nav className="space-y-1 px-2">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      prefetch="intent"
                      className={({ isActive }) =>
                        classNames(
                          isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                          'group flex items-center rounded-md py-2 px-2 text-base font-medium',
                        )
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <item.icon
                            className={classNames(
                              isActive ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                              'mr-4 h-6 w-6 flex-shrink-0',
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </>
                      )}
                    </NavLink>
                  ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="w-14 flex-shrink-0">{/* Dummy element to force sidebar to shrink to fit close icon */}</div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="text-500 hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5">
          <div className="flex flex-shrink-0 items-center px-4">
            <img className="h-12 w-auto" src="/logo.png" alt="Partybilder" />
          </div>
          <div className="mt-5 flex flex-grow flex-col">
            <nav className="flex-1 space-y-1 px-2 pb-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  prefetch="intent"
                  className={({ isActive }) =>
                    classNames(
                      isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group flex items-center rounded-md py-2 px-2 text-sm font-medium',
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      <item.icon
                        className={classNames(
                          isActive ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                          'mr-3 h-6 w-6 flex-shrink-0',
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="md:pl-64">
        <div className="mx-auto flex max-w-7xl flex-col md:px-8">
          {noSearch ? (
            <button
              type="button"
              className="sticky top-3 left-2 z-10 mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Menu öffnen</span>
              <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          ) : (
            <div className="sticky top-3 z-10 mx-2 mb-2 flex h-12 flex-shrink-0 rounded-full shadow-sm md:relative md:top-0 md:left-0 md:mb-0 md:h-16 md:rounded-none md:shadow-none">
              <button
                type="button"
                className="rounded-l-full border-r border-gray-200 bg-black pl-3 pr-2 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500 md:hidden md:px-4"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Menu öffnen</span>
                <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="flex flex-1 justify-between bg-white px-4 border-y border-r border-gray-300 md:border-x-0 md:border-t-0 rounded-r-full md:border-gray-200 md:px-0">
                <div className="flex flex-1">
                  <Form className="flex w-full md:ml-0" method="get" onChange={(e) => debouncedSubmit(e.currentTarget)}>
                    <label htmlFor="search-field" className="sr-only">
                      Suche
                    </label>
                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                        <SearchIcon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <input
                        id="search-field"
                        className="xxs:text-base block h-full w-full border-transparent bg-transparent py-2 pl-8 pr-0 text-sm text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0"
                        placeholder="Suche"
                        type="search"
                        name="search"
                        defaultValue={search}
                      />
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          )}

          <main className="flex-1">
            <div className="py-6">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Page;
