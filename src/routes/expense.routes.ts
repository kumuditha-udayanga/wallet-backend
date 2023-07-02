import express from "express";
import {
    getAllExpenses,
    getExpenseById,
    createExpense,
    updateExpense,
    deleteExpense
} from "../controllers/expense.controller";

const router = express.Router();

router.get('/', getAllExpenses);
router.get('/:id',getExpenseById);
router.post('/', createExpense);
router.patch('/:id', updateExpense);
router.delete('/:id', deleteExpense);

export default router;
