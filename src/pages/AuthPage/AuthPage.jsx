import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import './AuthPage.css'

export default function AuthPage({ setUser }) {
   return (
      <main className="AuthPage">
         {/* <h1>Nasa Astronomy API Explorer</h1> */}

         <SignUpForm setUser={setUser}/>
         <LoginForm setUser={setUser}/>
      </main>
   )
}