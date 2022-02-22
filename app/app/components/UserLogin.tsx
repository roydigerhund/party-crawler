/* This example requires Tailwind CSS v2.0+ */
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { useFetcher } from 'remix';

export default function UserLogin({ onClose, open }: { onClose: () => void; open?: boolean }) {
  const login = useFetcher();
  const create = useFetcher();
  const [userNotFound, setUserNotFound] = useState(false);
  const [hasNewAccount, setHasNewAccount] = useState(false);

  const actionPending = login.state !== 'idle';

  useEffect(() => {
    if (login.data?.error) {
      setUserNotFound(true);
    }
    if (login.data?.ok) {
      onClose();
    }
    if (create.data?.ok) {
      setHasNewAccount(true);
    }
  }, [login.data, create.data]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={onClose}>
        <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block w-full max-w-sm transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:p-6 sm:align-middle">
              {hasNewAccount ? (
                <div>
                  <h2 className="text-center text-3xl font-extrabold text-gray-900">Wichtig!</h2>
                  <p className="mt-2 text-center text-sm text-gray-600">
                    Es wurde für dich ein neuer Account mit dem Namen{' '}
                    <span className="rounded-md bg-gray-200 px-2 py-0.5 font-bold text-gray-900">
                      {create.data.username}
                    </span>{' '}
                    erstellt.
                  </p>
                  <p className="mt-2 text-center text-sm font-medium text-gray-700">
                    Merke oder schreibe dir den Namen auf, um dich zukünftig damit anzumelden.
                  </p>
                  <button
                    onClick={onClose}
                    type="button"
                    className="mt-6 flex w-full justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                  >
                    Hab ich verstanden
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  <create.Form method="post" action="/user/create">
                    <h2 className="text-center text-3xl font-extrabold text-gray-900">Anmelden</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                      oder{' '}
                      <button type="submit" className="font-medium text-sky-600 hover:text-sky-500">
                        einen Account erstellen
                      </button>
                      <br />
                      falls du noch keinen Account hast.
                    </p>
                  </create.Form>
                  <login.Form className="mt-8 space-y-6" method="post" action="/user/login">
                    {userNotFound && (
                      <div className="text-sm font-semibold text-red-500">
                        Der Nutzername wurde nicht gefunden. Falls du noch keinen Account hast, kannst du über den Link
                        oben einen Neuen erstellen.
                      </div>
                    )}
                    <div className="-space-y-px rounded-md shadow-sm">
                      <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                          Dein Nutzername
                        </label>
                        <div className="mt-1">
                          <input
                            id="username"
                            name="username"
                            type="text"
                            required
                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={actionPending}
                        className="flex w-full justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                      >
                        {actionPending ? '…' : 'Anmelden'}
                      </button>
                    </div>
                  </login.Form>
                </div>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
