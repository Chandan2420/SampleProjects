const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myDatabaseName', { useNewUrlParser: true, useUnifiedTopology: true });

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true, },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const Student = mongoose.model('Student', studentSchema);


// Register
app.post('/api/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const student = new Student({ name, email, password: hashedPassword });
        await student.save();
        res.status(201).json({ message: 'Student registered successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Email already exists' });
    }
});


// Login
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const student = await Student.findOne({ email });
        if (student && (await bcrypt.compare(password, student.password))) {
            const token = jwt.sign({ id: student._id }, 'your_jwt_secret', { expiresIn: '1h' });
            res.json({ message: 'Login successful', token });
        } else {
            res.status(400).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

app.listen(5000, () => console.log('Server running on port 5000'));
