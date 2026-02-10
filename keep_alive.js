const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Clawbot is alive!'));

app.listen(port, () => console.log(`Clawbot web server listening on port ${port}`));
