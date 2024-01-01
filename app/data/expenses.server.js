import { prisma } from "./database.sever"

export async function addExpense(expenseData) {
  try {
    return await prisma.expense.create({
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date),
      },
    })
  } catch (error) {
    console.error(error)
    throw error
  }
}
