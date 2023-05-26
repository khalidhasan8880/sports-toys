import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Card = ({ toy, viewDetailsHandler }) => {
    const { description, _id, price, img, name, rating } = toy
   
    return (
        <div data-aos="fade-up"
        data-aos-anchor-placement="center-bottom" className="card h-96 card-compact text-white w-96 bg-gray-600 shadow-xl ">
            <figure><img className="h-96 w-full" src={img ? img : 'https://t4.ftcdn.net/jpg/04/99/93/31/360_F_499933117_ZAUBfv3P1HEOsZDrnkbNCt4jc3AodArl.jpg'} /></figure>
            <div className="card-body mt-auto">
                <div className="ps-3 border-s-4 border-s-[#BAFF39]">
                    <h2 className="card-title">{name}</h2>
                    <p className="font-semibold">{description}</p>
                    <p className="font-bold">Price: $ {price}</p>
                </div>
                <div className="card-actions justify-end ">
                    <div className='w-full flex justify-between'>
                        <Rating style={{ maxWidth: 110 }} value={Math.round(rating || 0)} readOnly />
                        <label htmlFor="view-details-modal" onClick={() => viewDetailsHandler(_id)} className="btn-pr">View Details</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;