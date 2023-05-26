import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const {createUser,updateInformation} = useContext(AuthContext)
    const signUpSubmitHandler = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        const name = form.name.value
        const photo = form.photo.value
        console.log(email, password, name, photo);
        
        createUser(email,password).then(res=>{
            console.log(res.user);
            updateInformation(name,photo)
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
            <form onSubmit={signUpSubmitHandler} className="py-10 mx-3 rounded-xl border-[#BAFF39] bg-[#424242] w-96 px-9 flex flex-col items-center gap-y-4">
            <h2 className='text-3xl text-white font-bold mb-2'>Please Sign Up</h2>
                
                <input type="text" name='name' placeholder="Your Name" className="input border-[#BAFF39] font-semibold border-2 text-pr rounded-none ps-9 w-full max-w-xs polygon  bg-[#1e1e1d]" />
                
                <input type="text" name='photo' placeholder="Photo Url" className="input border-[#BAFF39] font-semibold border-2 text-pr rounded-none ps-9 w-full max-w-xs polygon  bg-[#1e1e1d]" />
                
                <input required type="email" name='email' placeholder="Email" className="input border-[#BAFF39] font-semibold border-2 text-pr rounded-none ps-9 w-full max-w-xs polygon  bg-[#1e1e1d]" />

                <input required type="password" name='password' placeholder="Password" className="input border-[#BAFF39] font-semibold border-2 text-pr rounded-none ps-9 w-full max-w-xs polygon  bg-[#1e1e1d]" />

                <button className="btn-pr w-full text-black font-bold" type="submit" >Submit</button>
                <p className='text-white'>Already have account ? please <Link className='text-pr' to='/login'>Login</Link></p>
            </form>
        </div>
    );
};

export default Register;