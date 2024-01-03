import { Link, Outlet, useLoaderData } from "@remix-run/react"

import ExpensesList from "../components/expenses/ExpensesList"
import { FaDownload, FaPlus } from "react-icons/fa"
import { getExpenses } from "../data/expenses.server"

export const loader = async () => {
  return getExpenses()
}

const ExpensesLayout = () => {
  const expenses = useLoaderData()

  return (
    <>
      <Outlet />
      <main>
        <section id="expenses-actions">
          <Link to="add">
            <FaPlus />
            <span>Add Expense</span>
          </Link>
          <a href="/expenses/raw">
            <FaDownload />
            <span>Load Raw Data</span>
          </a>
        </section>
        <ExpensesList expenses={expenses} />
      </main>
    </>
  )
}

export default ExpensesLayout
