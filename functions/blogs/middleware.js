export const onRequest = async ({ request }) => {
    const originalUrl = new URL(request.url);
    const pathAfterBlog = originalUrl.pathname.replace(/^\/blog/, '');
  
    const redirectUrl = `https://example-blog-100.pages.dev${pathAfterBlog || '/'}`;
  
    return Response.redirect(redirectUrl, 301);
  };
  