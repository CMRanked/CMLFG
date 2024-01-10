const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    fs.readFile('lfg.txt', 'utf8', (err, data) => {
        if (err) throw err;
        res.send(`
            <form action="/submit" method="post">
                <input type="text" name="username" placeholder="Username" required>
                <input type="text" name="region" placeholder="Region" required>
                <input type="text" name="otherData" placeholder="Other Data" required>
                <button type="submit">Submit</button>
            </form>
            <pre>${data}</pre>
        `);
    });
});

app.post('/submit', (req, res) => {
    const { username, region, otherData } = req.body;
    const data = `Username: ${username}, Region: ${region}, Other Data: ${otherData}\n`;
    fs.appendFile('lfg.txt', data, (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

app.listen(3000, () => console.log('Server started on port 3000'));
