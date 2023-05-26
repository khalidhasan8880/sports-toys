import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from 'react-router-dom';
import usePageViews from "../main";

// main component
const AllToys = () => {
  // hooks
  const location = useLocation()
  const { user } = useContext(AuthContext)
  const [allToys, setAllToys] = useState([])
  const navigate = useNavigate()
  const [viewDetailsToy, setViewDetailsToy] = useState({})
  const [searchValue, setSearchValue] = useState('')
  const [sortBy, setSortBy] = useState(1)
  // for default or fetching data 
  usePageViews(location)

  useEffect(() => {
    fetch('https://sports-toys-server.vercel.app/all_toys', {
      headers:{
        "sortBy":`${sortBy}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setAllToys(data)
      })
  }, [sortBy])

  // search fetch
  useEffect(() => {
    fetch(`https://sports-toys-server.vercel.app/search/${searchValue}`, {

    })
      .then(res => res.json())
      .then(data => {
        setAllToys(data)
      })
  }, [searchValue])
  const handleSearchValue = (e) => {
    setSearchValue(e.target.value)
  }


  const viewDetailsHandler = (id) => {
    if (user) {
      const toy = allToys.find(toy => toy._id == id)
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

  // sorting function
  const sortHandler = ()=>{
    if (sortBy === 1) {
      setSortBy(-1)
    }else{
      setSortBy(1)
    }
  }


  return (
    <div>

      {
        user &&
        <div>
          <input type="checkbox" id="view-details-modal" className="modal-toggle" />
          <div className="modal ">
            <div className="modal-box w-11/12 max-w-5xl ">
              <img src={viewDetailsToy?.img} alt="" />
              <h3 className="font-bold text-lg">Product Name : {viewDetailsToy?.name}</h3>
              <p className="py-2 font-semibold"> Description : {viewDetailsToy?.description}</p>
              <p className="py-2 font-semibold"> Available stock : {viewDetailsToy?.available_stock}</p>
              <p className="py-2 font-semibold"> Manufacturer : {viewDetailsToy?.manufacturer}</p>
              <p className="py-2 font-semibold"> Recommended Age : {viewDetailsToy?.recommended_age}</p>
              <p className="py-2 font-semibold"> Size : {viewDetailsToy?.size}</p>

              <div className="modal-action">
                {/* <button onClick={buyNowHandler} className=' btn-pr'>Buy Now</button> */}
                <label htmlFor="view-details-modal" className="btn-pr-secondary hover:text-white">close</label>
              </div>
            </div>
          </div>
        </div>
      }








      {/*sort and search section */}

      <div className="my-10 w-full flex justify-between flex-wrap">
        <input required type="Search" onChange={handleSearchValue} name='search' placeholder="search by product name" className="input border-[#BAFF39] font-semibold border-2 text-pr rounded-none ps-9 w-full max-w-xs polygon  bg-[#1e1e1d]" />

        <div>
          <button onClick={sortHandler} className="btn-pr">
            { sortBy === 1 ? 'Price high to low' : 'Price low to high'}
          </button>
        </div>
      </div>


      {/* table */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>
                <img src="" alt="" />
              </th>
              <th>Seller</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Available Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="font-semibold">
            {/* row 1 */}


            {
              allToys?.map((toy, idx) => {
                return (
                  <tr data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom" key={toy._id}>
                    <th>{idx + 1}</th>
                    <td>
                      <img className="w-11" src={toy?.img} alt="" />
                    </td>
                    <td>
                      {toy?.seller_name}
                    </td>
                    <td>{toy?.sport_Name}</td>
                    <td>{toy?.price}</td>
                    <td>{toy?.available_stock}</td>
                    <td>
                      <label htmlFor="view-details-modal" onClick={() => viewDetailsHandler(toy._id)} className="btn-pr">View Details</label>
                    </td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;