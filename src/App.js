import { useState, useEffect } from 'react';
import CardList from './CardList';
import Form from './Form';
import Dashboard from './Dashboard';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/questions')
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  const handleForm = (newCard) =>
    setCards((currentCardList) => [...currentCardList, newCard]);

  return (
    <div className="app">
      <Dashboard cards={cards} setCards={setCards} />
      <div class="below-container">
        <Form handleForm={handleForm} />
        <CardList cards={cards} />
      </div>

    </div>
  );
}

export default App;
