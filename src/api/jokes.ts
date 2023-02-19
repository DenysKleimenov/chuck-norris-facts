import { Joke } from '../types/Joke';
import { client } from '../utils/fetchClient';

export const getRandomJoke = async () => {
  const joke = await client.get<Joke>('/random');

  return joke || null;
};

export const getJokeFromCategory = async (category: string) => {
  const joke = await client.get<Joke>(`/random?category=${category}`);

  return joke || null;
};
