import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Card({ card, handlePrev, handleNext }) {
    const [flipCard, setFlipCard] = useState(false);

    const handleCardClick = () => {
        setFlipCard(!flipCard);
    };

    return (
        <div className="flash-card-container">
            <button className="navigation-buttons" onClick={handlePrev}>
                <FaArrowLeft />
            </button>
            <div
                className={`flash-card ${flipCard ? 'flipped' : ''}`}
                onClick={handleCardClick}
            >
                <div className="flash-card-inner">
                    <div className="flash-card-front">
                        {card.question}
                    </div>
                    <div className="flash-card-back">
                        {card.answer}
                    </div>
                </div>
            </div>
            <button className="navigation-buttons" onClick={handleNext}>
                <FaArrowRight />
            </button>
        </div>
    );
}

export default Card;
