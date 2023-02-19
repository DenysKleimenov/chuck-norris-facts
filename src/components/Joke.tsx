import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import icon from '../images/chuck-norris.png';
import { Joke as JokeInfo } from '../types/Joke';
import { getJokeFromCategory, getRandomJoke } from '../api/jokes';

interface Props {
  selectedCategory: string;
}

export const Joke: React.FC<Props> = ({ selectedCategory }) => {
  const [joke, setJoke] = useState<JokeInfo | null>(null);

  useEffect(() => {
    const getRandomJokeFromServer = async () => {
      try {
        const jokeFromServer = await getRandomJoke();
        setJoke(jokeFromServer);
      } catch (err) {
        throw new Error("Couldn't load categories");
      }
    };

    getRandomJokeFromServer();
  }, []);

  useEffect(() => {
    const getJoke = async () => {
      try {
        const jokeFromCategory = await getJokeFromCategory(selectedCategory);
        setJoke(jokeFromCategory);
      } catch (err) {
        throw new Error("Couldn't load joke from category");
      }
    };

    if (selectedCategory) {
      getJoke();
    }
  }, [selectedCategory]);

  return (
    joke && (
      <Box
        sx={{
          minHeight: 150,
          maxWidth: 1050,
          display: 'flex',
          alignSelf: 'center',
          bgcolor: '#422ED4',
          borderRadius: '20px',
          position: 'relative',
        }}
      >
        <Typography
          sx={{
            color: '#fff',
            fontWeight: '400',
            fontSize: 24,
            padding: '20px',
          }}
        >
          {joke.value}
        </Typography>
        <img
          src={icon}
          alt="Chuck Norris"
          style={{
            position: 'absolute',
            height: 280,
            width: 200,
            right: -16,
            top: -150,
            zIndex: -1,
          }}
        />
      </Box>
    )
  );
};
