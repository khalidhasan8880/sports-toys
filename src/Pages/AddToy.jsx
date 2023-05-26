import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
import usePageViews from "../main";

const AddToy = () => {
    const { user } = useContext(AuthContext)
    const location = useLocation()
    usePageViews(location)
    
    const signUpSubmitHandler = (e) => {

        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const manufacturer = form.manufacturer.value;
        const recommended_age = form.recommended_age.value;
        const size = form.size.value;
        const sport_Name = form.sport_Name.value;
        const img = form.img.value;
        const price = form.price.value;
        const category = form.category.value;
        const description = form.description.value;
        const available_stock = form.available_stock.value;
        const material = form.material.value;
        const rating = form.rating.value;


        const newToy = {
            seller_name: user?.displayName,
            seller_email: user?.email,
            name,
            img,
            recommended_age,
            manufacturer,
            price,
            size,
            category,
            sport_Name,
            description,
            available_stock,
            material,
            rating
        }

        fetch('https://sports-toys-server.vercel.app', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Successfully Added Toy',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset()
                }
            })
    }

    // available_stock,color,description,img,manufacturer,material,name,price,rating,recommended_age,size,sport_Name

    return (
        <div className="bg-[#a4a4a4] h-screen flex justify-center items-center">
            <form onSubmit={signUpSubmitHandler} className="py-10 w-[90%]  rounded-xl border-[#BAFF39] bg-[#424242] px-9 ">
                <h2 className='text-3xl text-white font-bold mb-2'>Add A Product</h2>
                <div className="flex flex-wrap">
                    <div className="form-control me-4 text-white my-4">
                        <label className="label">
                            <span >Product Name</span>
                        </label>
                        <input required type="text" name='name' placeholder="Product Name" className="input font-semibold text-black  rounded-none ps-3 " />
                    </div>

                    <div className="form-control me-4 text-white my-4">
                        <label className="label">
                            <span >Product Image</span>
                        </label>
                        <input required type="text" name='img' placeholder="Product img" className="input font-semibold text-black  rounded-none ps-3 " />
                    </div>
                    <div className="form-control me-4 text-white my-4">
                        <label className="label">
                            <span >Recommended Age</span>
                        </label>
                        <input type="number" name='recommended_age' placeholder="Recommended Age" className="input font-semibold text-black  rounded-none ps-3 " />
                    </div>

                    <div className="form-control me-4 text-white my-4">
                        <label className="label">
                            <span >Manufacturer</span>
                        </label>
                        <input type="text" name='manufacturer' placeholder="Manufacturer" className="input font-semibold text-black  rounded-none ps-3 " />
                    </div>
                    <div className="form-control me-4 text-white my-4">
                        <label className="label">
                            <span >Price</span>
                        </label>
                        <input required type="number" name='price' placeholder="Price" className="input font-semibold text-black  rounded-none ps-3 " />
                    </div>

                    <div className="form-control me-4 text-white my-4">
                        <label className="label">
                            <span >Size</span>
                        </label>
                        <input type="text" name='size' placeholder="Size" className="input font-semibold text-black  rounded-none ps-3 " />
                    </div>

                    <div className="form-control me-4 text-white my-4">
                        <label className="label">
                            <span >Category</span>
                        </label>
                        <input type="text" name='category' placeholder="Category" className="input font-semibold text-black  rounded-none ps-3 " />
                    </div>
                    <div className="form-control me-4 text-white my-4">
                        <label className="label">
                            <span >Sports Name</span>
                        </label>
                        <input required type="text" name='sport_Name' placeholder="Sports Name" className="input font-semibold text-black  rounded-none ps-3 " />
                    </div>
                    <div className="form-control me-4 text-white my-4">
                        <label className="label">
                            <span >Available Stock</span>
                        </label>
                        <input type="number" name='available_stock' placeholder="Stock" className="input font-semibold text-black  rounded-none ps-3 " />
                    </div>
                    <div className="form-control me-4 text-white my-4">
                        <label className="label">
                            <span >Material</span>
                        </label>
                        <input type="text" name='material' placeholder="Material" className="input font-semibold text-black  rounded-none ps-3 " />
                    </div>
                    <div className="form-control me-4 text-white my-4">
                        <label className="label">
                            <span >Rating</span>
                        </label>
                        <input type="number"  name='rating' placeholder="Rating" className="input font-semibold text-black  rounded-none ps-3 " />
                    </div>

                </div>

                <textarea name="description" id="" placeholder="Toy Descriptions..." className="w-full border-[#BAFF39] text-semibold text-black  rounded-none p-5 h-56"></textarea>
                <button className="btn-pr text-black font-bold mt-2" type="submit" >Submit</button>

            </form>
        </div>
    );
};

export default AddToy;