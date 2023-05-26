import { Link } from 'react-router-dom';
import errorPic from '../assets/images/404.jpg'
const Error = () => {
    return (
        <div className='text-center relative'>
            <img className='w-full' src={errorPic} alt="" />
            <Link className='hover:text-pr text-white font-bold md:text-7xl text-4xl absolute left-[44%] mx-auto bottom-1'>Go Home</Link>
        </div>
    );
};

export default Error;