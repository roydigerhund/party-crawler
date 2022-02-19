import { primaryInput } from 'detect-it';
import { useState, useEffect } from 'react';
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
import { userCookie } from './cookies';
import db from './db.server';
import styles from './tailwind.css';
import { classNames } from './utils/class-names';
import { RootData } from './utils/types-and-enums';

export const meta: MetaFunction = () => {
  return { title: 'Partybilder' };
};

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export const loader: LoaderFunction = async ({ request }): Promise<RootData> => {
  const cookieHeader = request.headers.get('Cookie');
  const userName = (await userCookie.parse(cookieHeader)) || undefined;
  const bookmarks =
    // userName && typeof userName === 'string'
       await db.bookmark.findMany({
          // where: {
          //   user: { name: userName },
          // },
        })
      // : [];

  return {
    envs: {
      MINIO_BASE_URL: process.env.MINIO_BASE_URL || '',
      APP_BASE_URL: process.env.APP_BASE_URL || '',
    },
    userName,
    bookmarks,
  };
};

export default function App() {
  const { envs } = useLoaderData<RootData>();

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(primaryInput === 'touch');
  }, []);

  return (
    <html lang="en" className={classNames("h-full", isTouchDevice && 'is-touch')}>
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
        {process.env.NODE_ENV === 'development' && <LiveReload />}
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
