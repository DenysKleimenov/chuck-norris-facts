const BASE_URL = 'https://api.chucknorris.io/jokes';

async function request<T>(
  url: string,
): Promise<T> {
  const options: RequestInit = { method: 'GET' };
  const response = await fetch(BASE_URL + url, options);

  if (!response.ok) {
    throw new Error();
  }

  return response.json();
}

export const client = {
  get: <T>(url: string) => request<T>(url),
};
