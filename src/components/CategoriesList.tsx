import {
  Button, Container, SxProps, Theme, Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import { getCategories } from '../api/categories';

interface Props {
  handleClick: (category: string) => void;
  selectedCategory: string;
}

const buttonStyles: SxProps<Theme> = {
  background: '#fff',
  color: '#34495e',
  fontWeight: '800',
  '&:hover': {
    background: '#422ED4',
    color: '#fff',
  },
  ':focus': {
    outline: 'none',
  },
  '&.active': {
    background: '#422ED4',
    color: '#fff',
  },
  width: '150px',
  height: '60px',
  borderRadius: '20px',
};

export const CategoriesList: React.FC<Props> = ({
  handleClick,
  selectedCategory,
}) => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const getCategoriesFromServer = async () => {
      try {
        const categoriesFromServer = await getCategories();
        setCategories(categoriesFromServer);
      } catch (err) {
        throw new Error("Couldn't load categories");
      }
    };

    getCategoriesFromServer();
  }, []);

  return (
    <Container
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mb: '150px',
        '@media (max-width:1200px)': {
          padding: 0,
        },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: '#34495e',
          fontWeight: '800',
          mb: '50px',
        }}
      >
        Categories
      </Typography>
      <Container
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
          padding: 0,
          '@media (min-width:600px)': {
            padding: 0,
          },
        }}
      >
        {categories.map((category) => (
          <Button
            key={category}
            variant="contained"
            className={cn({ active: selectedCategory === category })}
            onClick={() => handleClick(category)}
            sx={buttonStyles}
          >
            {category}
          </Button>
        ))}
      </Container>
    </Container>
  );
};
