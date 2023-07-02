import Expense from "../models/expense.model";
import { Request, Response } from 'express';

// Get all expenses
export const getAllExpenses = async (req:Request,res:Response) => {
    try{
        const expenses = await Expense.findAll();
        res.json(expenses);
    } catch (error) {
        res.json({message: error});
        console.error(error);
    }
}

// Get expense by ID
export const getExpenseById = async (req:Request,res:Response) => {
    try{
        const id = req.params.id;
        const expense  = await Expense.findByPk(id);

        if (!expense) {
            res.status(404).json({error: "404: Not record found"})
            return;
        }

        res.json(expense);
    } catch (error) {
        res.json({message: error});
        console.error(error);
    }
}

// Create expense
export const createExpense = async (req:Request,res:Response) => {
    try{
        const {title, description, category, amount} = req.body;
        const data = {
            title,
            description,
            category,
            amount
        }
        const cursor  = await Expense.create(data);

        res.status(201).json(data);
    } catch (error) {
        res.json({message: error});
        console.error(error);
    }
}

// Update expense
export const updateExpense = async (req:Request,res:Response) => {
    try{
        const id = req.params.id;
        const {title, description, category, amount} = req.body;
        const data = {
            title,
            description,
            category,
            amount
        }
        const expense  = await Expense.findByPk(id);

        if (!expense) {
            res.status(404).json({error: "404: Not record found"})
            return;
        }

        const cursor = await Expense.update(data, {where: {id}});

        res.status(201).json(data);
    } catch (error) {
        res.json({message: error});
        console.error(error);
    }
}

// Delete expense
export const deleteExpense = async (req:Request,res:Response) => {
    try{
        const cursor  = await Expense.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json("Expense deleted");
    } catch (error) {
        res.json({message: error});
        console.error(error);
    }
}
