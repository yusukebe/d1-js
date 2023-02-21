export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url)

    if (pathname === '/api/beverages') {
      const { results } = await env.DB.prepare('SELECT * FROM Customers WHERE CompanyName = ?')
        .bind('Bs Beverages')
        .all()
      return Response.json(results)
    }

    return new Response('Call /api/beverages to see everyone who works at Bs Beverages')
  },
}
