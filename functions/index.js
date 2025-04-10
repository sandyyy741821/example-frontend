export async function onRequest(context) {
    const url = new URL(context.request.url);
  
    if (url.pathname.startsWith("/blog")) {
      url.hostname = "example-blog-100.pages.dev";
      url.pathname = url.pathname.replace("/blog", "");
      return Response.redirect(url.toString(), 301);
    }
  
    return fetch(context.request);
  }
  