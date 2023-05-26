
const TableRow = ({ toy, updateHandler, deleteHandler }) => {
    return (
        <tr data-aos="fade-up"
        data-aos-anchor-placement="center-bottom" key={toy._id}>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={toy?.img} />
                    </div>
                </div>
            </td>
            <td>
                <h3 className="text-xl font-semibold"> {toy?.name}</h3>
            </td>
            <th>
                <label onClick={() => updateHandler(toy._id)} htmlFor="modal-for-update" className="btn-pr">Update</label>
                <button onClick={() => deleteHandler(toy._id)} className="polygon bg-red-300 px-4 py-3">Delete</button>
            </th>
        </tr>
    );
};

export default TableRow;