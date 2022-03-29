import { renderToString } from 'react-dom/server';
import { EntryContext, HandleDataRequestFunction, RemixServer } from 'remix';
import { authCookie } from './cookies.server';
import { etag } from 'remix-etag';

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const markup = renderToString(<RemixServer context={remixContext} url={request.url} />);

  const cookieHeader = request.headers.get('Cookie');
  const isAuthorized = (await authCookie.parse(cookieHeader)) || false;

  const url = new URL(request.url);

  if (!isAuthorized && url.pathname !== '/auth') {
    responseStatusCode = 302;
    responseHeaders.set(
      'Location',
      url.pathname.length > 1 ? '/auth?redirect=' + encodeURIComponent(url.pathname) : '/auth',
    );
  } else if (isAuthorized && url.pathname === '/auth') {
    const redirectPath = url.searchParams.get('redirect') || '/';
    responseStatusCode = 302;
    responseHeaders.set('Location', redirectPath);
  }

  responseHeaders.set('Content-Type', 'text/html');

  const response = new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
  return etag({ request, response });
}

export const handleDataRequest: HandleDataRequestFunction = async (response: Response, { request }) => {
  return etag({ request, response });
};
