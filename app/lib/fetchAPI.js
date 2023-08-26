async function fetchAPI(query, cache = 'force-cache', { variables } = {}) {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.HYGRAPH_PROD_AUTH_TOKEN}`,
  };

  const res = await fetch(process.env.HYGRAPH_RO_PROJECT_API, {
    method: 'POST',
    headers,
    cache: cache,
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error(`Failed to fetch API`);
  }

  return json.data;
}

export default async function getData(query) {
  const data = await fetchAPI(query);
  return { ...data };
}
