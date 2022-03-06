import { ErrorBoundaryComponent } from '@remix-run/react/routeModules';
import {
  Links,
  LiveReload,
  LoaderFunction,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from 'remix';
import Page from './components/Page';
import { userCookie } from './cookies.server';
import db from './db.server';
import styles from './styles/app.css';
import { RootData } from './utils/types-and-enums';

export const meta: MetaFunction = () => {
  return { title: 'Partybilder' };
};

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export const loader: LoaderFunction = async ({ request }): Promise<RootData> => {
  const cookieHeader = request.headers.get('Cookie');
  const username = (await userCookie.parse(cookieHeader)) || undefined;
  const bookmarks =
    username && typeof username === 'string'
      ? await db.bookmark.findMany({
          where: {
            user: { name: username },
          },
        })
      : [];

  return {
    envs: {
      MINIO_BASE_URL: process.env.MINIO_BASE_URL || '',
      APP_BASE_URL: process.env.APP_BASE_URL || '',
    },
    username,
    bookmarks,
  };
};

export default function App() {
  const { envs } = useLoaderData<RootData>();

  return (
    <html lang="de" className="h-full scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" sizes="200x200" />
        <meta property="og:image" content={envs.APP_BASE_URL + '/logo.png'} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="524" />
        <meta property="og:image:height" content="183" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Outlet />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(envs)}`,
          }}
        />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function Root() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return (
    <Page noSearch>
      <div className="px-4 sm:px-6 md:px-0">
        <h1 className="text-2xl font-semibold text-gray-900">Sorry, da ist irgendwas schief gelaufen 🙈</h1>
        <p className="text-md font-medium text-gray-500">{error.message}</p>
      </div>
    </Page>
  );
};
