import Header from './Header'
import './signUp.css'
import {useNavigate} from 'react-router-dom'


function SignUp() {
    const navigate = useNavigate();
    return (
      <>
          <Header />
          <div className="sign-up">
            <div id="sign-up-title">Sign Up</div>
            <form id='sign-up-form' onSubmit={signUpBackend}>
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
              <button type="submit" id="submitSignUp">Sign Up</button>
              <div className="login-link">
                <div>Already Have an Account? </div>
                <div onClick={() => navigate('/signIn')}>Login</div>
              </div>
            </form>
          </div>
      </>
      );
}


async function signUpBackend(e) {
    e.preventDefault();

    const name = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const email = document.getElementById('email').value
    const userName = document.getElementById('username').value
    const password = document.getElementById('password').value
    let totalLessonsCompleteITP = 0
    let totalLessonsCompleteDSA = 0
    let lessonCompleteITP = {}
    let lessonCompleteDSA = {}

    try {
      const response = await fetch('http://localhost:3000/accountInfo', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, lastName, email, userName, password, totalLessonsCompleteITP, totalLessonsCompleteDSA, lessonCompleteITP, lessonCompleteDSA})
      })

      if(!response.ok) {
        throw new Error('HTTP error: ${response.status}');
      }

      const data = await response.json();
      console.log('Server Response:', data)
      window.location.href = 'http://localhost:5173/home'
      
    }
    catch (error) {
      console.error('Error with data sent:', error)
    }


}

export default SignUp;