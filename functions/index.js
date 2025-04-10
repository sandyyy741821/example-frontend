addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
    const url = new URL(request.url)
    
    if (url.pathname.startsWith("/blog")) {
      url.hostname = "example-blog-100.pages.dev"
      url.pathname = url.pathname.replace("/blog", "")
      return fetch(url.toString(), request)
    }
    return fetch(request)
  }
  