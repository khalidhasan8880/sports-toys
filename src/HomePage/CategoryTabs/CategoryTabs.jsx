import { useEffect, useState } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from '../../components/Card';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
const CategoryTabs = ({ user }) => {

    const [category, setCategory] = useState('cricket')
    const [categoriesToys, setCategoriesToys] = useState([])
    const [viewDetailsToy, setViewDetailsToy] = useState({})
    const navigate = useNavigate()
    // const {name,description, _id, price, img,} = viewDetailsHandler || {}
    useEffect(() => {
        fetch(`https://sports-toys-server.vercel.app/category/${category}`)
            .then(res => res.json())
            .then(data => {
                setCategoriesToys(data)
            })
    }, [category])

    const viewDetailsHandler = (id) => {
        if (user) {
            const toy = categoriesToys.find(toy => toy._id == id)
            setViewDetailsToy(toy)
        } else {
            Swal.fire({
                title: 'Login Please',
                text: "You have to login first to view details",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
        }
    }

    const buyNowHandler = () => {
        Swal.fire('Functionality not added! but coming soon')

    }
    return (
        <div>
             {
                    user &&
                    <div>
                        <input type="checkbox" id="view-details-modal" className="modal-toggle" />
                        <div className="modal ">
                            <div className="modal-box w-11/12 max-w-5xl">
                                <img src={viewDetailsToy?.img} alt="" />
                                <h3 className="font-bold text-lg">Product Name : {viewDetailsToy?.name}</h3>
                                <p className="py-2 font-semibold"> Description : {viewDetailsToy?.description}</p>
                                <p className="py-2 font-semibold"> Available stock : {viewDetailsToy?.available_stock}</p>
                                <p className="py-2 font-semibold"> Manufacturer : {viewDetailsToy?.manufacturer}</p>
                                <p className="py-2 font-semibold"> Recommended Age : {viewDetailsToy?.recommended_age}</p>
                                <p className="py-2 font-semibold"> Size : {viewDetailsToy?.size}</p>
                                <div className='py-2 font-semibold flex gap-x-3'>
                                    Rating : <Rating style={{ maxWidth: 110 }} value={Math.round(viewDetailsToy?.rating || 0)} readOnly />
                                </div>
                                <div className="modal-action">
                                    <button onClick={buyNowHandler} className=' btn-pr'>Buy Now</button>
                                    <label htmlFor="view-details-modal" className="btn-pr-secondary hover:text-white">close</label>
                                </div>
                            </div>
                        </div>
                    </div>
                }



            <div className=' w-full mx-1 mt-2 pb-8 mb-40'>



               




                <Tabs selectedTabClassName="bg-pr text-black">
                    <TabList className='text-2xl font-bold text-white bg-gray-600'>
                        <Tab onClick={() => setCategory('cricket')}> Cricket</Tab>
                        <Tab onClick={() => setCategory('football')} >  Football </Tab>
                        <Tab onClick={() => setCategory('racket')}> Racket</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='flex flex-wrap justify-center gap-8 px-2 py-2 my-6'>
                            {
                                categoriesToys.map(toy => <Card
                                    key={toy._id}
                                    toy={toy}
                                    viewDetailsHandler={viewDetailsHandler}>
                                </Card>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='flex flex-wrap justify-center gap-8 px-2 py-2 my-6'>
                            {
                                categoriesToys.map(toy => <Card
                                    key={toy._id}
                                    toy={toy}
                                    viewDetailsHandler={viewDetailsHandler}>
                                </Card>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='flex flex-wrap justify-center gap-8 px-2 py-2 my-6'>
                            {
                                categoriesToys.map(toy => <Card
                                    key={toy._id}
                                    toy={toy}
                                    viewDetailsHandler={viewDetailsHandler}>
                                </Card>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>

            </div>
        </div>
    );
};

export default CategoryTabs;