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

export async function getExpenses() {
  try {
    return await prisma.expense.findMany({
      orderBy: { date: "desc" },
    })
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function getExpense(id) {
  try {
    return await prisma.expense.findFirst({
      where: { id },
    })
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function updateExpense(id, expenseData) {
  try {
    return await prisma.expense.update({
      where: { id },
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

export async function deleteExpense(id) {
  try {
    return await prisma.expense.delete({
      where: { id },
    })
  } catch (error) {
    console.error(error)
    throw error
  }
}
