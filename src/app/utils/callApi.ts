type FetchDataResponse = any;

/**
 * Fetches data from the CMS using a provided GraphQL query.
 * @param query
 * @param noCache
 * @returns
 */
export async function fetchData(
  query: string,
  noCache: boolean = false
): Promise<FetchDataResponse | { error: boolean }> {
  const url = process.env.CMS_BASE_URL;
  //   const apiKey = process.env.API_KEY_SUTRA;

  if (!url) {
    console.error('CMS_BASE_URL is not defined in environment variables.');
    return { error: true }; // Return an error object if URL is missing
  }

  //   if (!apiKey) {
  //     console.error('API_KEY is not defined in enviorment variables');
  //     return { error: true };
  //   }

  const fetchOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'X-API-KEY': apiKey,
    },
    body: JSON.stringify({ query }),
    cache: noCache ? 'no-store' : 'default', // Cache control based on flag
  };

  try {
    const response = await fetch(url, fetchOptions);

    // Check if the response is ok (status 200-299)
    if (!response.ok) {
      console.error(`Fetch error: ${response.status} - ${response.statusText}`);
      return { error: true }; // Return an error object on failure
    }

    const data = await response.json(); // Parse response JSON
    return data;
  } catch (error) {
    console.error('Error during fetch operation:', error);
    return { error: true }; // Return an error object on exception
  }
}
