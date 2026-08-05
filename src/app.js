const express = require('express');
const cookieParser = require('cookie-parser');

/** 
 * - Routes required
*/
const authRouter = require('./routes/auth.routes.js');
const accountRouter = require('./routes/account.routes.js');
const transactionRoutes = require("./routes/transaction.routes.js");

const app = express();
app.use(express.json());
app.use(cookieParser());


/** 
 * - Use Routes
*/
app.use('/api/auth', authRouter);
app.use('/api/accounts', accountRouter);
api.use('/api/transactions', transactionRoutes);

module.exports = app;