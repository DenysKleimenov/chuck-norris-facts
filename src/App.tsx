import { useCallback, useState } from 'react';
import { CategoriesList } from './components/CategoriesList';
import { Header } from './components/Header';
import { Joke } from './components/Joke';
import './styles/app.css';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleClick = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <CategoriesList
          handleClick={handleClick}
          selectedCategory={selectedCategory}
        />
        <Joke selectedCategory={selectedCategory} />
      </main>
    </>
  );
};

export default App;
