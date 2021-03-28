const API = 'https://bakesaleforgood.com';

const fetchInitialDeals = async () => {
  try {
    const response = await fetch(`${API}/api/deals`);
    const json = await response.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};

const fetchDetail = async dealId => {
  try {
    const response = await fetch(`${API}/api/deals/` + dealId);
    const json = await response.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};

const fetchDealsSearchResults = async SearchTerm => {
  try {
    const response = await fetch(`${API}/api/deals?searchTerm=` + SearchTerm);
    const json = await response.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};
export {fetchInitialDeals, fetchDetail, fetchDealsSearchResults};
