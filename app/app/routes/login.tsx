import { ActionFunction, Form, redirect, useActionData } from 'remix';
import { authCookie } from '~/cookies';

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData();
  const password = body.get('password');
  if (password === process.env.APP_PASSWORD) {
    return redirect('/', {
      headers: {
        Location: '/',
        'Set-Cookie': await authCookie.serialize(true),
      },
    });
  }
  return false;
};

export default function Login() {
  const success = useActionData();

  return (
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
          {success === false && (
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
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  className={
                    'xs:text-sm block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500'
                  }
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Lass mich rein
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
