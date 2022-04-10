const express = require('express');

const port = 3000;

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express();

app.use(express.urlencoded({ extended: false }))

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found!</h1>')
})

app.listen(port, () => {
    console.log(`Listening on port ${3000}...`)
})
