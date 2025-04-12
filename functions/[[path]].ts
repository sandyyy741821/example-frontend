import { PagesFunction } from '@cloudflare/workers-types';
import { Response } from '@cloudflare/workers-types';  


const redirectHandler: PagesFunction = async ({ request }) => {
  const url = new URL(request.url);

  // Redirect rule for example
  if (url.pathname === "/blog") {
    return Response.redirect("https://example-blog-100.pages.dev", 301);
  }

  return new Response('Not Found', { status: 404 });
};

export default redirectHandler;
