import { useState } from 'react';
import Card from './Card';

function CardList({ cards }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? cards.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="grid-container">
            {cards.length > 0 ? (
                <Card
                    card={cards[currentIndex]}
                    index={currentIndex}
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                />
            ) : (
                <p>No flashcards available</p>
            )}
        </div>
    );
}

export default CardList;
