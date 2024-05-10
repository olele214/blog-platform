const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000;
app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,res) => {
    res.send('Welcome to Double Os Goes!');
});
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:${PORT}');
});
app.get('/create-blog',(req,res) => {
    res.sendFile(path.join(__dirname,'public/html/create_blog.html'));
});
app.get('/register-blogger', (req,res) => {
    res.sendFile(path.join(__dirname,'public/html/register_blogger.html'));
});
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.post('/create-blog', (req,res) => {
    const {name, title, yearpublished} = req.body;
    const query= 'INSERT INTO blog (name, title, yearpublished) VALUES (?,?,?)';
    blog.query(query, [name, title, yearpublished], (error, results) => {
        if (error) throw error;
        res.send('Blog created successfully.');
    });
});
app.post('/register-blogger', (req,res) => {
    const {name, email, phone} = req.body;
    const query = 'INSERT INTO blogger (name, email, phone) VALUES (?,?,?)';
    blog.query(query, [name, email, phone], (error, results) => {
        if (error) throw error;
        res.send('Blogger registered successfully.');
    });
});
app.post('/create-blog',(req,res) => {
    const {name, title, yearpublished} = req.body;
    const query = 'INSERT INTO blog (name, title, year published) VALUES (?,?,?)';
    const values = [name, title, yearpublished];
    connection.query(query, values, (error, results) => {
        if (error) {
            res.status(500).send('Server error');
            console.error('Failed to create blog:', error);
            return;
        }
        res.send('Blog created successfully.');
    });
});
app.post('/register-blogger', (req,res) => {
    const {name, email, phone} = req.body;
    const query = 'INSERT INTO bloggers (name, email, phone) VALUES (?,?,?)';
    const values = [name, email, phone];
    connection.query(query, values, (error, results) => {
        if (error) {
            res.status(500).send('Server error');
            console.error('Failed to register blogger:', error);
            return;
        }
        res.send('Blogger successfully registered.');
    });
});