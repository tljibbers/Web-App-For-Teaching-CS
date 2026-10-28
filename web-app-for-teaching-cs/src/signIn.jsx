import Header from './Header'
import './signUp.css'
import {useNavigate} from 'react-router-dom'

function SignIn() {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div className="sign-up">
            <div id="sign-up-title">Sign In</div>
            <form id='sign-up-form' onSubmit={signInBackend}>
                <div>Username</div>
                <input type="text" id="username" name="username" />
                <div>Password</div>
                <input type="password" id="password" name="password" />
                <br/>
                <button type="submit" id="submitSignUp">Sign In</button>
                <div className="login-link">
                    <div>Don't Have An Account? </div>
                    <div onClick={() => navigate('/signUp')}>Sign Up</div>
                </div>
            </form>
            </div>
        </>
        );
}

async function signInBackend(e) {
    e.preventDefault();

    const userName = document.getElementById('username').value
    const password = document.getElementById('password').value

    try {
        const response = await fetch('http://localhost:3000/logIn', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userName, password})
        })

        const data = await response.json(); 

        if(!response.ok) {
            alert(data.message || 'There was a problem signing in.')
            return
        }

        window.location.href = 'http://localhost:5173/home'
        
    }
    catch (error) {
        console.error('Error with data sent:', error)
        alert('Something went wrong. Try again.')
    }


}

export default SignIn;