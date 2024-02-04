const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    var name = req.query.name;
    var isAuthor = req.query.isAuthor;

    console.log('name: ' + name);
    res.send('name: ' + name);
    console.log('Hungry: ' + isAuthor);
    res.send('Hungty: ' + isAuthor);
});

app.get('*', (req,res) => {
    res.send('404 Page Not Found');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});