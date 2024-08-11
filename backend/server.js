const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // MySQL root user
    password: 'Siri@1436', // MySQL root password
    database: 'flashcards_db'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL database:', err.message);
        process.exit(1);
    }
    console.log('Connected to MySQL database');
});

// Get all questions
app.get('/questions', (req, res) => {
    const query = 'SELECT * FROM questions';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Add a new question
app.post('/questions', (req, res) => {
    const { question, answer } = req.body;
    const query = 'INSERT INTO questions (question, answer) VALUES (?, ?)';
    db.query(query, [question, answer], (err, result) => {
        if (err) throw err;
        res.json({ id: result.insertId, question, answer });
    });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
