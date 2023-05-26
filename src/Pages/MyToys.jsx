import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import TableRow from "../components/TableRow";
import { useLocation } from "react-router-dom";
import usePageViews from "../main";

const MyToys = () => {
    // hooks
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
    const [previousToy, setPreviousToy] = useState({})
    const [sortBy, setSortBy] = useState(1)
    const location = useLocation()
    usePageViews(location)

    useEffect(() => {
        fetch(`https://sports-toys-server.vercel.app/my_toys?email=${user?.email}`, {
            headers: {
                "sortBy": `${sortBy}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            })
    }, [user,sortBy])


    const updateHandler = (id) => {
        const toy = myToys.find(toy => toy._id === id)
        setPreviousToy(toy)
    }


    const submitUpdate = (e) => {

        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const manufacturer = form.manufacturer.value
        const recommended_age = form.recommended_age.value
        const size = form.size.value
        const sport_Name = form.sport_Name.value
        const img = form.img.value
        const price = form.price.value
        const category = form.category.value
        const description = form.description.value
        const available_stock = form.available_stock.value
        const material = form.material.value
        const id = form.id.value


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
            id: id
        }



        Swal.fire({
            title: 'Update Confirmation?',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Update'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://sports-toys-server.vercel.app/update/${newToy.id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newToy)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.acknowledged) {
                            Swal.fire(
                                'Updated!',
                                'Your file has been Updated.',
                                'success'
                            )
                        }
                    })
            }
        })
    }






    const deleteHandler = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://sports-toys-server.vercel.app/delete/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            const remaining = myToys.filter(toy => toy._id !== id)
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )
                            setMyToys(remaining)
                        }
                    })
            }
        })
    }

    // sorting function
    const sortHandler = () => {
        if (sortBy === 1) {
            setSortBy(-1)
        } else {
            setSortBy(1)
        }
    }


    return (
        <div>
            {/* filter btn */}
            <div className="my-6 flex justify-end w-full md:pe-60">
                <button onClick={sortHandler} className="btn-pr">
                    {sortBy === 1 ? 'Price high to low' : 'Price low to high'}
                </button>
            </div>
            {/* modal content */}
            <div>
                <input type="checkbox" id="modal-for-update" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <div className="bg-[#a4a4a4] h-screen flex justify-center items-center">
                            <form onSubmit={submitUpdate} className="py-10 w-[90%] mx-3 rounded-xl border-[#BAFF39] bg-[#424242] px-9 ">
                                <h2 className='text-3xl text-white font-bold mb-2'>Update Product</h2>
                                <div className="flex flex-wrap">
                                    <div className="form-control me-4 text-white my-4">
                                        <label className="label">
                                            <span >Product Name</span>
                                        </label>
                                        <input type="text" defaultValue={previousToy?.name} name='name' placeholder="Product Name" className="input font-semibold text-black  rounded-none ps-3 " />
                                    </div>

                                    <div className="form-control me-4 text-white my-4">
                                        <label className="label">
                                            <span >Product Image</span>
                                        </label>
                                        <input type="text" defaultValue={previousToy?.img} name='img' placeholder="Product img" className="input font-semibold text-black  rounded-none ps-3 " />
                                    </div>
                                    <div className="form-control me-4 text-white my-4">
                                        <label className="label">
                                            <span >Recommended Age</span>
                                        </label>
                                        <input type="number" defaultValue={previousToy?.recommended_age} name='recommended_age' placeholder="Recommended Age" className="input font-semibold text-black  rounded-none ps-3 " />
                                    </div>

                                    <div className="form-control me-4 text-white my-4">
                                        <label className="label">
                                            <span >Manufacturer</span>
                                        </label>
                                        <input type="text" defaultValue={previousToy?.manufacturer} name='manufacturer' placeholder="Manufacturer" className="input font-semibold text-black  rounded-none ps-3 " />
                                    </div>
                                    <div className="form-control me-4 text-white my-4">
                                        <label className="label">
                                            <span >Price</span>
                                        </label>
                                        <input type="number" defaultValue={previousToy?.price} name='price' placeholder="Price" className="input font-semibold text-black  rounded-none ps-3 " />
                                    </div>

                                    <div className="form-control me-4 text-white my-4">
                                        <label className="label">
                                            <span >Size</span>
                                        </label>
                                        <input type="text" defaultValue={previousToy?.size} name='size' placeholder="Size" className="input font-semibold text-black  rounded-none ps-3 " />
                                    </div>

                                    <div className="form-control me-4 text-white my-4">
                                        <label className="label">
                                            <span >Category</span>
                                        </label>
                                        <input type="text" defaultValue={previousToy?.category} name='category' placeholder="Category" className="input font-semibold text-black  rounded-none ps-3 " />
                                    </div>
                                    <div className="form-control me-4 text-white my-4">
                                        <label className="label">
                                            <span >Sports Name</span>
                                        </label>
                                        <input type="text" defaultValue={previousToy?.sport_Name} name='sport_Name' placeholder="Sports Name" className="input font-semibold text-black  rounded-none ps-3 " />
                                    </div>
                                    <div className="form-control me-4 text-white my-4">
                                        <label className="label">
                                            <span >Available Stock</span>
                                        </label>
                                        <input type="number" defaultValue={previousToy?.available_stock} name='available_stock' placeholder="Stock" className="input font-semibold text-black  rounded-none ps-3 " />
                                    </div>
                                    <div className="form-control me-4 text-white my-4">
                                        <label className="label">
                                            <span >Material</span>
                                        </label>
                                        <input type="text" defaultValue={previousToy?.material} name='material' placeholder="Material" className="input font-semibold text-black  rounded-none ps-3 " />
                                    </div>
                                </div>

                                {/* hidden input for id */}
                                <input className="hidden" type="text" name="id" defaultValue={previousToy?._id} />

                                <textarea name="description" defaultValue={previousToy?.description} placeholder="Toy Descriptions..." className="w-full border-[#BAFF39] text-semibold text-black  rounded-none p-5 h-56"></textarea>

                                <button type="submit" className="btn-pr">Update</button>
                                <label htmlFor="modal-for-update" className="btn-pr-secondary hover:text-white">Cancel</label>

                            </form>
                        </div>
                    </div>
                </div>
            </div>







            <div className="overflow-x-auto w-full md:px-60 ">
                {/* table table table */}
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys?.map(toy => <TableRow
                                key={toy._id}
                                toy={toy}
                                updateHandler={updateHandler}
                                deleteHandler={deleteHandler}
                            ></TableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;