const searchForSale = async ({ project, name, verified = true, policyId }) => {
  const response = await fetch("https://api.cnft.io/market/listings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      search: name,
      types: ["listing", "auction", "offer"],
      ...(project ? { project } : {}),
      sort: { price: -1 },
      priceMin: null,
      priceMax: null,
      page: 1,
      verified,
      nsfw: false,
      sold: false,
    }),
  });
  if (!response.ok) {
    throw new Error(
      `${response.status} ${response.statusText}: ${await response.text()}`
    );
  }
  const { results } = await response.json();
  const [result] = results;
  const {
    _id,
    asset: { assetId, policyId: cnftPolicyId },
    price,
  } = result || { asset: {} };
  return result && assetId === name && (!policyId || policyId === cnftPolicyId)
    ? {
        forSale: true,
        href: `https://cnft.io/token/${_id}`,
        price: price / 1000000,
      }
    : { forSale: false };
};

export default searchForSale;