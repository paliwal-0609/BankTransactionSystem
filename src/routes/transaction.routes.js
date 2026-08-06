const {Router} = require('express');
const transactionController = require('../controllers/transaction.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const transactionRoutes = Router();

/**
 * - POST /api/transactions/
 * - Create a new transaction
 */

transactionRoutes.post('/', authMiddleware.authMiddleware, transactionController.createTransaction);

module.exports = transactionRoutes;