import Header from './Header'
import './signUp.css'

function SignUp() {
  return (
    <>
        <Header />
        <div className="sign-up">
          <div id="sign-up-title">Sign Up</div>
           <form>
            <div className="full-name">
              <div>
                <div>First Name</div>
                <input type="text" id="firstName" name="firstName" />
              </div>
              <div>
                <div>Last Name</div>
                <input type="text" id="lastName" name="lastName" />
              </div>
            </div>
            <div>Email</div>
            <input type="email" id="email" name="email" />
            <div>Username</div>
            <input type="text" id="username" name="username" />
            <div>Password</div>
            <input type="password" id="password" name="password" />
            <div>Confirm Password</div>
            <input type="password" id="confirmPassword" name="confirmPassword" />
            <br/>
            <button type="submit">Sign Up</button>
            <div className="login-link">
              <div>Already Have an Account? </div>
              <div>Login</div>
            </div>
           </form>
        </div>
    </>
    );
}

export default SignUp;