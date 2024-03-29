const express = require('express');
const bd = require('body-parser');
const core = require('cors')
const app = express();
const mongoose = require('mongoose');
const mainRoute = require('./route/mainRoute')
const port = process.env.PORT || 8000;

app.use(core());
app.use(bd.urlencoded({
    extended: false
}))
app.use(bd.json());
app.use(mainRoute)
mongoose.connect('mongodb+srv://admin:090078601@cluster0.6x3avrt.mongodb.net/?retryWrites=true&w=majority', {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.on("connected", () => {
    console.log("Database Connected")
})

mongoose.connection.on("error", () => {
    console.log("Database Not Connected")
})

app.get('/', (req, res) => {
    res.send('GYM  ON ke Runing');
})
app.get('/pk', (req, res) => {
    res.send('Pakistan Zindabad');
})




app.listen(port, () => {
    console.log(`server is runing.... ${port}`);
})