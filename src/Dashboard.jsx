import { useState } from 'react';

function Dashboard({ cards, setCards }) {
    const [editCard, setEditCard] = useState(null);

    const handleDelete = (id) => {
        fetch(`http://localhost:3001/questions/${id}`, {
            method: 'DELETE',
        }).then(() => setCards(cards.filter((card) => card.id !== id)));
    };

    const handleEdit = (id) => {
        const cardToEdit = cards.find((card) => card.id === id);
        setEditCard(cardToEdit);
    };

    const handleSave = () => {
        fetch(`http://localhost:3001/questions/${editCard.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editCard),
        }).then(() => {
            setCards(
                cards.map((card) =>
                    card.id === editCard.id ? { ...card, ...editCard } : card
                )
            );
            setEditCard(null);
        });
    };

    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            {cards.map((card) => (
                <div key={card.id}>
                    <p>{card.question}</p>
                    <button onClick={() => handleEdit(card.id)}>Edit</button>
                    <button onClick={() => handleDelete(card.id)}>Delete</button>
                </div>
            ))}
            {editCard && (
                <div className="edit-form">
                    <input
                        type="text"
                        value={editCard.question}
                        onChange={(e) =>
                            setEditCard({ ...editCard, question: e.target.value })
                        }
                    />
                    <input
                        type="text"
                        value={editCard.answer}
                        onChange={(e) =>
                            setEditCard({ ...editCard, answer: e.target.value })
                        }
                    />
                    <button onClick={handleSave}>Save</button>
                </div>
            )}
        </div>
    );
}

export default Dashboard;
