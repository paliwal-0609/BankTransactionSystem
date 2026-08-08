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

app.get('/', (req, res)=>{
    res.type('html').send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Bank Transaction System API</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; color: #1f2937; }
                .card { max-width: 760px; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
                code { background: #f3f4f6; padding: 2px 6px; border-radius: 4px; }
                ul { padding-left: 20px; }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>Bank Transaction System API</h1>
                <p>The service is running successfully.</p>
                <p>This backend provides authentication, account management, balance checks, and ledger-based money transfers.</p>
                <h2>Available Routes</h2>
                <ul>
                    <li><code>/api/auth/register</code></li>
                    <li><code>/api/auth/login</code></li>
                    <li><code>/api/accounts</code></li>
                    <li><code>/api/accounts/balance/:accountId</code></li>
                    <li><code>/api/transactions</code></li>
                    <li><code>/api/transactions/system/initial-funds</code></li>
                </ul>
                <p>Use the API routes above from your client or tools like Postman.</p>
            </div>
        </body>
        </html>`);
})

app.get('/health', (req, res)=>{
    res.json({
        status:'ok',
        service:'Bank Transaction System',
        message:'Ledger service is running'
    })
})

app.use('/api/auth', authRouter);
app.use('/api/accounts', accountRouter);
app.use('/api/transactions', transactionRoutes);

module.exports = app;