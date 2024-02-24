import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import './App.js';

const BooksPage = ({ data, setData,setEdit }) => {
  const navigate = useNavigate();

  const handleEdit = (user) => {
    setEdit({ ...user, isEditing: true });
    console.log(user);
    navigate("/Books");
  };

  const handleDelete = (id) => {
    const updatedData = data;
    delete updatedData[id];
    let filteredData = updatedData.filter((data) => data != null);
    setData(filteredData);
  };

  return (
    <div>
      <table className="table mt-3">
        <thead className="bg-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Author Name</th>
            <th scope="col">ISBN Number</th>
            <th scope="col">Publication Date</th>
            <th className="col-mt3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {console.log(data)}
          {data?.map((user, index) => {
            return (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user?.title}</td>
                <td>{user?.author}</td>
                <td>{user?.isbn}</td>
                <td>{user?.date}</td>
                <td>
                  <button
                    className="btn btn-primary ms-2"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
BooksPage.propTypes = {
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
  edit: PropTypes.any, // Add appropriate prop type for edit
  setEdit: PropTypes.func.isRequired,
};

export default BooksPage;