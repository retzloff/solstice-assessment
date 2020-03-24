const express = require("express");

const app = express();
const PORT = 8080;

// Routes 
app.use('/api/customers', require('./routes/customers'))
app.use('/api/accounts', require('./routes/accounts'))

app.get("/", (req, res) => res.json({ msg: "Solstice Customer and Account API" }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
