import { Link, Outlet } from "@remix-run/react"

import ExpensesList from "../components/expenses/ExpensesList"
import { FaDownload, FaPlus } from "react-icons/fa"

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date().toISOString(),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date().toISOString(),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date().toISOString(),
  },
]

const ExpensesLayout = () => {
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
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </main>
    </>
  )
}

export default ExpensesLayout
