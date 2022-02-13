import { ActionFunction, Form, LoaderFunction, MetaFunction, redirect, useActionData, useSearchParams } from 'remix';
import { authCookie } from '~/cookies';
import db from '~/db.server';

type ActionReturnType = { wrongPassword: boolean; redirectPath: string } | null;

export const action: ActionFunction = async ({ request }): Promise<ActionReturnType | Response> => {
  const body = await request.formData();
  const password = body.get('password');
  const redirectPath = body.get('redirect')?.toString() || '/';
  if (password === process.env.APP_PASSWORD) {
    return redirect(redirectPath, {
      headers: {
        Location: redirectPath,
        'Set-Cookie': await authCookie.serialize(true),
      },
    });
  }
  return { wrongPassword: true, redirectPath };
};

type LoaderReturnType = { title?: string } | null;

export const loader: LoaderFunction = async ({ request }): Promise<LoaderReturnType> => {
  const searchParams = new URLSearchParams(request.url.split('?')[1]);

  // if redirect matches 'image/$imageId'
  if (searchParams.get('redirect')?.startsWith('/image/')) {
    const imageId = searchParams.get('redirect')?.split('/')[2];
    const image = await db.image.findFirst({
      where: {
        id: imageId,
      },
      include: {
        party: true,
      },
    });
    return { title: image?.party.name };
  }

  // if redirect matches 'parties/$partyId'
  if (searchParams.get('redirect')?.startsWith('/parties/')) {
    const partyId = searchParams.get('redirect')?.split('/')[2];
    const party = await db.party.findFirst({
      where: {
        id: partyId,
      },
    });
    return { title: party?.name };
  }

  // if redirect matches 'cities/$cityId'
  if (searchParams.get('redirect')?.startsWith('/cities/')) {
    const cityId = searchParams.get('redirect')?.split('/')[2];
    const city = await db.city.findFirst({
      where: {
        id: cityId,
      },
    });
    return { title: city?.name };
  }

  return null;
};

export const meta: MetaFunction = ({ data }) => {
  return { title: `${data?.title || 'Login'} - Partybilder` };
};

export default function Login() {
  const data = useActionData<ActionReturnType>();
  const [searchParams] = useSearchParams();

  const redirect = data?.redirectPath || searchParams.get('redirect') || '/';

  return (
    <div className="bg-gray-50 h-full">
      <div className="xs:px-6 flex min-h-full flex-col justify-center py-12 lg:px-8">
        <div className="xs:mx-auto xs:w-full xs:max-w-md xs:px-0 px-4">
          <img className="mx-auto h-12 w-auto" src="/logo.png" alt="Workflow" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Passwort erforderlich</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Diese Seite wird ausschließlich privat verwendet und ist dafür passwortgeschützt.
          </p>
        </div>

        <div className="xs:mx-auto xs:w-full xs:max-w-md mt-8">
          <div className="xs:rounded-lg xs:px-10 bg-white py-8 px-4 shadow">
            {data?.wrongPassword && (
              <div className="mb-4 text-sm font-semibold text-red-500">
                Das Passwort ist falsch. Bitte versuche es erneut.
              </div>
            )}

            <Form className="space-y-6" method="post">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Passwort
                </label>
                <div className="mt-1">
                  <input type="hidden" name="redirect" value={redirect} />
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    required
                    className={
                      'xs:text-sm block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500'
                    }
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                >
                  Lass mich rein
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
