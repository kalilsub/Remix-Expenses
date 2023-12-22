import { Outlet } from "@remix-run/react"
import expensesStyles from "../styles/expenses.css"
import ExpensesHeader from "../components/navigation/ExpensesHeader"

export const links = () => [{ rel: "stylesheet", href: expensesStyles }]

function ExpensesAppLayout() {
  return (
    <>
      <ExpensesHeader />
      <Outlet />
    </>
  )
}

export default ExpensesAppLayout
