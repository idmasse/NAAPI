import SignUpFormFunc from "../../components/SignUpFormFunc/SignUpFormFunc";
import LoginForm from "../../components/LoginForm/LoginForm"

export default function AuthPage({ setUser }) {
   return (
      <main>
         <SignUpFormFunc setUser={setUser}/>
         <LoginForm setUser={setUser}/>
      </main>
   )
}