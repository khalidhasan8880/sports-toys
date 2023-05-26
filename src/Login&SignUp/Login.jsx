import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
const navigate = useNavigate()
const {continueWithGoogle, logIn} = useContext(AuthContext)
    const loginSubmitHandler = (e) =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        logIn(email,password)
        .then(res=>{
            navigate('/')
            console.log(res);
        }).catch(err=>{
            console.log(err);
            Swal.fire({
                icon: 'error',
                title: 'Login failed',
                text: 'Something went wrong! Try Again'
              })
        })
        
    }

    const googleLoginHandler = () =>{
        continueWithGoogle()
        .then(res=>{
            console.log(res);
            navigate('/')
        }).catch(err=>{
            console.log(err);
            Swal.fire({
                icon: 'error',
                title: 'Login failed',
                text: 'Something went wrong! Try Again'
              })
        })
    }
    return (
        <div className="bg-[#a4a4a4] h-screen flex justify-center items-center">
            <form onSubmit={loginSubmitHandler} className="py-10 px-3 rounded-xl border-[#BAFF39] bg-[#424242] w-96 px-9 flex flex-col items-center gap-y-4">
                <h2 className='text-3xl text-white font-bold mb-2'>Please Login</h2>
                <input required type="email" name='email' placeholder="Email" className="input border-[#BAFF39] text-semibold border-2 text-pr rounded-none ps-9 w-full max-w-xs polygon  bg-[#1e1e1d]" />
                <input required type="password" name='password' placeholder="Password" className="input border-[#BAFF39] text-semibold border-2 text-pr rounded-none ps-9 w-full max-w-xs polygon  bg-[#1e1e1d]" />
                <button className="btn-pr w-full text-black font-bold" type="submit" >Log In</button>
                <div className="flex flex-col w-full text-pr font-semibold ">
                    <div className="divider ">OR</div>
                </div>
                <FcGoogle size={50} onClick={googleLoginHandler} className='cursor-pointer'></FcGoogle>

                <p className='text-white'>New to <span className='text-pr'>Sports-Toys </span> ? please <Link to='/sign_up' className='text-pr' >Sign Up</Link></p>
            </form>
        </div>
    );
};

export default Login;