import { Outlet } from "@remix-run/react"

const Expenses = () => {
  return (
    <div>
      <h1>Expenses Layout</h1>
      <Outlet />
    </div>
  )
}

export default Expenses
