import AuthForm from "../components/auth/AuthForm"

import authStyles from "../styles/auth.css"

export const links = () => [{ rel: "stylesheet", href: authStyles }]

const Auth = () => {
  return <AuthForm />
}

export default Auth
