import { useContext } from 'react'
import './Banner.css'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
const Banner = () => {
    const { user } = useContext(AuthContext)
    return (

        <div data-aos="zoom-in-down" className="py-8 px-4 h-[90vh] text-white banner flex flex-col justify-center items-start sm:px-6 lg:px-8">
            <div className='md:w-96'>
                <h2 className="text-3xl leading-9 font-extrabold sm:text-4xl sm:leading-10">
                    Get in the Game with Our Exciting Sports Toys
                </h2>
                <p className='my-8'>Join the excitement and elevate your game with our sports toys. Shop now and get ready to unleash your inner champion!</p>
                {
                    user ?
                    <Link className='btn-pr' to='/all_toys'>All Toys</Link>
                    :
                    <button className='btn-pr'>Sign Up Now</button>
                }
            </div>
        </div>

    );
};

export default Banner;