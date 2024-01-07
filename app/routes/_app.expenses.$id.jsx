import ExpenseForm from "../components/expenses/ExpenseForm"
import Modal from "../components/util/Modal"

import { redirect, useNavigate } from "@remix-run/react"
import { updateExpense, deleteExpense } from "../data/expenses.server"
import { validateExpenseInput } from "../data/validation.server"

export const action = async ({ params, request }) => {
  const expenseId = params.id

  if (request.method === "PATCH") {
    const formData = await request.formData()
    const expenseData = Object.fromEntries(formData)

    try {
      validateExpenseInput(expenseData)
    } catch (error) {
      return error
    }

    await updateExpense(expenseId, expenseData)
    return redirect("/expenses")
  } else if (request.method === "DELETE") {
    await deleteExpense(expenseId)
    return redirect("/expenses")
  }
}

function UpdateExpensesPage() {
  const navigate = useNavigate()

  const closeHandler = () => {
    navigate("..")
  }

  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  )
}

export default UpdateExpensesPage
