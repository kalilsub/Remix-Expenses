import { Outlet } from "@remix-run/react"

import expensesStyles from "../styles/expenses.css"

import ExpensesList from "../components/expenses/ExpensesList"

export const links = () => [{ rel: "stylesheet", href: expensesStyles }]

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
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </main>
    </>
  )
}

export default ExpensesLayout
