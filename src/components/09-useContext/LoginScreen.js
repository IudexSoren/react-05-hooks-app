import { useContext } from "react"
import { UserContext } from "./UserContext"

const LoginScreen = () => {

  const { setUser } = useContext(UserContext);

  const handleClick = () => {
    const user = {
      id: 4444,
      name: 'Jhin'
    }
    setUser(user);
  }

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr/>
      <button
        className="btn btn-outline-dark"
        onClick={ handleClick }
      >Login</button>
    </div>
  )
}

export default LoginScreen
