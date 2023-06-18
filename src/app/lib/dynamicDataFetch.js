async function fetchDynamicAPI(query, { variables, preview } = {}) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${
      preview
        ? process.env.HYGRAPH_DEV_AUTH_TOKEN
        : process.env.HYGRAPH_PROD_AUTH_TOKEN
    }`,
  };
  const res = await fetch(process.env.HYGRAPH_RO_PROJECT_API, {
    method: "POST",
    headers,
    cache: "no-cache",
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

export async function getPriceList(preview) {
  const data = await fetchDynamicAPI(
    `
query prices {
  priceLists(first: 100) {
    id
    price
    productName
  }
}
  `,
    { preview }
  );
  return { ...data };
}
