export const onRequest = async ({ request }) => {
  const url = new URL(request.url);

  // Check if the request is exactly "/blog"
  if (url.pathname === "/blog" || url.pathname === "/blog/") {
    return Response.redirect("https://example-blog-100.pages.dev/", 301);
  }

  // Otherwise, do nothing (let your frontend handle it)
  return new Response(null, { status: 204 });
};
