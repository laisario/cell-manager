const express = require("express");
const productRouter = require('../src/routes/product')
const userRouter = require('../src/routes/user')
const loginRouter = require('../src/routes/login')
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
})
app.use(express.json());
app.use("/user", userRouter);
app.use("/login", loginRouter);
app.use("/", productRouter);

app.listen(3014, () => console.log("Server ready on port 3014"));

module.exports = app;