import ExpenseForm from "../components/expenses/ExpenseForm"
import Modal from "../components/util/Modal"

import { useNavigate } from "@remix-run/react"
import { getExpense } from "../data/expenses.server"

export const loader = ({ params }) => {
  const expenseId = params.id
  return getExpense(expenseId)
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
