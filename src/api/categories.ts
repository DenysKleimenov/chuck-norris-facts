import { client } from '../utils/fetchClient';

export const getCategories = async () => {
  const categories = await client.get<string[]>('/categories');

  return categories || null;
};
