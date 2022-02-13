import { renderToString } from 'react-dom/server';
import { EntryContext, RemixServer } from 'remix';
import { authCookie } from './cookies';

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const markup = renderToString(<RemixServer context={remixContext} url={request.url} />);

  const cookieHeader = request.headers.get('Cookie');
  const isAuthorized = (await authCookie.parse(cookieHeader)) || false;

  if (!isAuthorized && request.url !== `${process.env.APP_BASE_URL}/login`) {
    responseStatusCode = 302;
    responseHeaders.set('Location', '/login');
  } else if (isAuthorized && request.url === `${process.env.APP_BASE_URL}/login`) {
    console.log('Redirecting to home page');
    responseStatusCode = 302;
    responseHeaders.set('Location', '/');
  }

  responseHeaders.set('Content-Type', 'text/html');

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
