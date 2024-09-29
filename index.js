const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to the homepage!</h1>
    <p><a href="/hello">Go to /hello</a></p>
    <p><a href="/user?firstname=John&lastname=Doe">Go to /user with query params (John Doe)</a></p>
  `);
});


app.get('/hello', (req, res) => {
  res.send('Hello Express JS');
});


app.get('/user', (req, res) => {
  const firstname = req.query.firstname || 'Pritesh';
  const lastname = req.query.lastname || 'Patel';
  res.json({ firstname, lastname });
});


app.post('/user/:firstname/:lastname', (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});


app.use((req, res) => {
  res.status(404).send('Sorry, route not found!');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
