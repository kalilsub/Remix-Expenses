import { Outlet } from "@remix-run/react"
import marketingStyles from "../styles/marketing.css"
import MainHeader from "../components/navigation/MainHeader"

export const links = () => [{ rel: "stylesheet", href: marketingStyles }]

function MarketingLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  )
}

export default MarketingLayout
