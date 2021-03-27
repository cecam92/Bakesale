const API = 'https://bakesaleforgood.com';

const fetchInitialDeals = async () => {
  try {
    let response = await fetch(`${API}/api/deals`);
    let json = await response.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};
export default fetchInitialDeals;
